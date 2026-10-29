-- =====================================================================
-- ELYSIAN TIERLIST - database delle candidature (Supabase / PostgreSQL)
-- Incolla TUTTO questo file in Supabase -> SQL Editor -> New query -> Run.
-- Prima di eseguirlo, sostituisci  INSERISCI_IL_TUO_ID_DISCORD  (ultima parte)
-- con il tuo ID Discord: sarai Admin appena fai il primo login.
-- Si puo' eseguire piu' volte senza rompere nulla.
-- =====================================================================

-- ---------- TABELLE ----------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  discord_id  text unique,
  username    text,
  avatar_url  text,
  role        text not null default 'user' check (role in ('user','staff','admin')),
  created_at  timestamptz not null default now(),
  last_login  timestamptz not null default now()
);

create table if not exists public.staff_invites (
  discord_id  text primary key check (discord_id ~ '^[0-9]{15,25}$'),
  role        text not null check (role in ('staff','admin')),
  created_by  uuid references public.profiles(id) on delete set null,
  created_at  timestamptz not null default now()
);

create table if not exists public.forms (
  id          text primary key check (id ~ '^[a-z0-9_]{1,30}$'),
  config      jsonb not null,
  enabled     boolean not null default true,
  position    int not null default 0,
  updated_at  timestamptz not null default now(),
  updated_by  uuid references public.profiles(id) on delete set null
);

create table if not exists public.applications (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references public.profiles(id) on delete cascade,
  role         text not null,
  lang         text not null default 'it' check (lang in ('it','en')),
  answers      jsonb not null,
  status       text not null default 'pending' check (status in ('pending','accepted','rejected')),
  reviewed_by  uuid references public.profiles(id) on delete set null,
  reviewed_at  timestamptz,
  created_at   timestamptz not null default now()
);
-- una sola candidatura "in attesa" per ruolo e per utente
create unique index if not exists applications_one_pending
  on public.applications (user_id, role) where status = 'pending';
create index if not exists applications_created_idx on public.applications (created_at desc);

create table if not exists public.application_notes (
  id             uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications(id) on delete cascade,
  author_id      uuid not null references public.profiles(id) on delete cascade,
  body           text not null check (char_length(body) between 1 and 2000),
  created_at     timestamptz not null default now()
);

create table if not exists public.application_votes (
  application_id uuid not null references public.applications(id) on delete cascade,
  staff_id       uuid not null references public.profiles(id) on delete cascade,
  vote           text not null check (vote in ('yes','no','abstain')),
  updated_at     timestamptz not null default now(),
  primary key (application_id, staff_id)
);

-- ---------- FUNZIONI DI SUPPORTO ----------
create or replace function public.is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role in ('staff','admin'));
$$;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- crea il profilo quando qualcuno fa il primo login con Discord
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  did  text := coalesce(new.raw_user_meta_data->>'provider_id', new.raw_user_meta_data->>'sub');
  inv  public.staff_invites%rowtype;
  r    text := 'user';
begin
  if did is not null then
    select * into inv from public.staff_invites where discord_id = did;
    if found then r := inv.role; delete from public.staff_invites where discord_id = did; end if;
  end if;
  insert into public.profiles (id, discord_id, username, avatar_url, role)
  values (new.id, did,
          coalesce(nullif(new.raw_user_meta_data->>'full_name',''), nullif(new.raw_user_meta_data->>'name',''), 'utente'),
          new.raw_user_meta_data->>'avatar_url', r)
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- aggiorna nome/avatar ad ogni login e applica eventuali inviti staff arrivati dopo
create or replace function public.sync_profile() returns public.profiles
language plpgsql security definer set search_path = public as $$
declare
  meta jsonb := coalesce(auth.jwt()->'user_metadata', '{}'::jsonb);
  p    public.profiles%rowtype;
  inv  public.staff_invites%rowtype;
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  update public.profiles
     set username   = coalesce(nullif(meta->>'full_name',''), nullif(meta->>'name',''), username),
         avatar_url = coalesce(nullif(meta->>'avatar_url',''), avatar_url),
         last_login = now()
   where id = auth.uid()
   returning * into p;
  if p.role = 'user' and p.discord_id is not null then
    select * into inv from public.staff_invites where discord_id = p.discord_id;
    if found then
      update public.profiles set role = inv.role where id = p.id returning * into p;
      delete from public.staff_invites where discord_id = inv.discord_id;
    end if;
  end if;
  return p;
end $$;

-- cambia lo stato di una candidatura (solo staff)
create or replace function public.set_application_status(p_id uuid, p_status text) returns public.applications
language plpgsql security definer set search_path = public as $$
declare a public.applications%rowtype;
begin
  if not public.is_staff() then raise exception 'forbidden'; end if;
  if p_status not in ('pending','accepted','rejected') then raise exception 'invalid status'; end if;
  update public.applications
     set status = p_status,
         reviewed_by = case when p_status = 'pending' then null else auth.uid() end,
         reviewed_at = case when p_status = 'pending' then null else now() end
   where id = p_id returning * into a;
  if not found then raise exception 'not found'; end if;
  return a;
end $$;

-- cambia il ruolo di un utente (solo admin, mai il proprio)
create or replace function public.set_user_role(p_user uuid, p_role text) returns public.profiles
language plpgsql security definer set search_path = public as $$
declare p public.profiles%rowtype;
begin
  if not public.is_admin() then raise exception 'forbidden'; end if;
  if p_role not in ('user','staff','admin') then raise exception 'invalid role'; end if;
  if p_user = auth.uid() then raise exception 'cannot change your own role'; end if;
  update public.profiles set role = p_role where id = p_user returning * into p;
  if not found then raise exception 'not found'; end if;
  return p;
end $$;

-- limite anti-spam: massimo 10 candidature nelle ultime 24 ore per utente
create or replace function public.check_application_rate() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.applications
       where user_id = new.user_id and created_at > now() - interval '24 hours') >= 10 then
    raise exception 'rate limit';
  end if;
  return new;
end $$;
drop trigger if exists applications_rate on public.applications;
create trigger applications_rate before insert on public.applications
  for each row execute function public.check_application_rate();

-- ---------- PERMESSI (Row Level Security) ----------
alter table public.profiles           enable row level security;
alter table public.staff_invites      enable row level security;
alter table public.forms              enable row level security;
alter table public.applications       enable row level security;
alter table public.application_notes  enable row level security;
alter table public.application_votes  enable row level security;

drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_staff());

drop policy if exists invites_all on public.staff_invites;
create policy invites_all on public.staff_invites for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists forms_select on public.forms;
create policy forms_select on public.forms for select to anon, authenticated
  using (enabled or public.is_admin());
drop policy if exists forms_write on public.forms;
create policy forms_write on public.forms for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists apps_select on public.applications;
create policy apps_select on public.applications for select to authenticated
  using (user_id = auth.uid() or public.is_staff());
drop policy if exists apps_insert on public.applications;
create policy apps_insert on public.applications for insert to authenticated
  with check (user_id = auth.uid() and status = 'pending' and reviewed_by is null and reviewed_at is null);

drop policy if exists notes_select on public.application_notes;
create policy notes_select on public.application_notes for select to authenticated using (public.is_staff());
drop policy if exists notes_insert on public.application_notes;
create policy notes_insert on public.application_notes for insert to authenticated
  with check (public.is_staff() and author_id = auth.uid());
drop policy if exists notes_delete on public.application_notes;
create policy notes_delete on public.application_notes for delete to authenticated
  using (public.is_staff() and (author_id = auth.uid() or public.is_admin()));

drop policy if exists votes_select on public.application_votes;
create policy votes_select on public.application_votes for select to authenticated using (public.is_staff());
drop policy if exists votes_insert on public.application_votes;
create policy votes_insert on public.application_votes for insert to authenticated
  with check (public.is_staff() and staff_id = auth.uid());
drop policy if exists votes_update on public.application_votes;
create policy votes_update on public.application_votes for update to authenticated
  using (public.is_staff() and staff_id = auth.uid()) with check (public.is_staff() and staff_id = auth.uid());
drop policy if exists votes_delete on public.application_votes;
create policy votes_delete on public.application_votes for delete to authenticated
  using (public.is_staff() and staff_id = auth.uid());

-- privilegi minimi: chi non e' loggato non vede nulla tranne i form
revoke all on public.profiles, public.staff_invites, public.forms, public.applications,
              public.application_notes, public.application_votes from anon, authenticated;
grant select on public.forms to anon, authenticated;
grant insert, update, delete on public.forms to authenticated;
grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.staff_invites to authenticated;
grant select, insert on public.applications to authenticated;
grant select, insert, delete on public.application_notes to authenticated;
grant select, insert, update, delete on public.application_votes to authenticated;
grant execute on function public.is_staff(), public.is_admin(), public.sync_profile(),
      public.set_application_status(uuid, text), public.set_user_role(uuid, text) to authenticated;
revoke execute on function public.handle_new_user(), public.check_application_rate() from public, anon, authenticated;
revoke execute on function public.is_staff(), public.is_admin(), public.sync_profile(),
      public.set_application_status(uuid, text), public.set_user_role(uuid, text) from public, anon;
-- la regola di lettura dei form (pubblici) usa is_admin(): serve anche a chi non e' loggato (risponde "falso")
grant execute on function public.is_admin() to anon;

-- ---------- PRIMO ADMIN ----------
-- Sostituisci il numero con il TUO ID Discord (Discord -> Impostazioni -> Avanzate ->
-- Modalita' sviluppatore, poi tasto destro sul tuo profilo -> Copia ID utente).
insert into public.staff_invites (discord_id, role)
values ('1293858948146921505', 'admin')
on conflict (discord_id) do update set role = excluded.role;
