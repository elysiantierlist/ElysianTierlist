/* Elysian Tierlist - codice condiviso da tutte le pagine
   (login Discord, menu, permessi, domande, invio al Forum Discord) */
(function () {
  'use strict';
  const ELY = (window.ELY = {});
  const SCRIPT = document.currentScript;
  ELY.ROOT = new URL('../', SCRIPT.src).href;               // radice del sito (funziona anche in /ElysianTierlist/)
  ELY.url = (p) => ELY.ROOT + (p || '');
  const cfg = window.ELY_CONFIG || {};

  /* ---------- utilita' ---------- */
  ELY.$ = (s, r) => (r || document).querySelector(s);
  ELY.$$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  ELY.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const esc = ELY.esc;
  ELY.fmt = (iso) => { try { return new Date(iso).toLocaleString('it-IT', { dateStyle: 'medium', timeStyle: 'short' }); } catch (_) { return iso || ''; } };
  ELY.words = (s) => (String(s).trim().match(/\S+/g) || []).length;
  ELY.sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  ELY.STATUS = {
    pending: { label: 'In attesa', icon: '⏳' },
    accepted: { label: 'Accettata', icon: '✅' },
    rejected: { label: 'Rifiutata', icon: '❌' },
  };
  ELY.statusBadge = (s) => { const x = ELY.STATUS[s] || { label: s, icon: '' }; return `<span class="badge ${esc(s)}">${x.icon} ${esc(x.label)}</span>`; };
  ELY.ROLE_LABEL = { user: 'Utente', staff: 'Staff', admin: 'Admin' };
  ELY.roleBadge = (r) => `<span class="badge ${esc(r)}">${esc(ELY.ROLE_LABEL[r] || r)}</span>`;
  ELY.avatar = (url, name, cls) => {
    const c = 'avatar' + (cls ? ' ' + cls : '');
    if (url && /^https?:\/\//i.test(url)) return `<img class="${c}" src="${esc(url)}" alt="" referrerpolicy="no-referrer">`;
    return `<span class="${c}">${esc((name || '?').trim().charAt(0).toUpperCase())}</span>`;
  };
  ELY.copy = async (text) => { try { await navigator.clipboard.writeText(text); ELY.toast('Copiato', 'ok'); } catch (_) { ELY.toast('Copia non riuscita', 'err'); } };
  ELY.main = () => document.getElementById('app');
  ELY.setMain = (html) => { ELY.main().innerHTML = html; };
  ELY.panelMsg = (title, html) => ELY.setMain(`<div class="panel center screen"><h2>${esc(title)}</h2><p class="muted" style="margin-bottom:16px">${html}</p><a class="btn" href="${esc(ELY.url(''))}">Torna alla home</a></div>`);

  ELY.toast = (msg, type) => {
    let box = document.querySelector('.toasts');
    if (!box) { box = document.createElement('div'); box.className = 'toasts'; document.body.appendChild(box); }
    const t = document.createElement('div'); t.className = 'toast ' + (type || ''); t.textContent = msg; box.appendChild(t);
    setTimeout(() => t.remove(), 3800);
  };
  ELY.confirm = (msg, okLabel) => new Promise((resolve) => {
    const bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><p></p><div class="row-flex"><button class="btn ghost small" data-x="0">Annulla</button><button class="btn small" data-x="1"></button></div></div>`;
    bg.querySelector('p').textContent = msg; bg.querySelector('[data-x="1"]').textContent = okLabel || 'Conferma';
    const done = (v) => { bg.remove(); resolve(v); };
    bg.addEventListener('click', (e) => { const x = e.target.closest('[data-x]'); if (x) done(x.dataset.x === '1'); else if (e.target === bg) done(false); });
    document.body.appendChild(bg); bg.querySelector('[data-x="1"]').focus();
  });

  /* ---------- stelle di sfondo ---------- */
  function stars() {
    const c = document.getElementById('stars'); if (!c) return;
    const x = c.getContext('2d'); let w, h, S = [];
    function init() {
      w = c.width = innerWidth; h = c.height = innerHeight;
      S = Array.from({ length: Math.min(140, Math.floor(w * h / 9000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.8 + .3, s: Math.random() * .4 + .05, p: Math.random() * 6.28, g: Math.random() < .18 }));
    }
    function tick(t) {
      x.clearRect(0, 0, w, h);
      for (const s of S) {
        s.y -= s.s; if (s.y < -5) { s.y = h + 5; s.x = Math.random() * w; }
        const a = .35 + .65 * Math.abs(Math.sin(t / 900 + s.p));
        x.fillStyle = s.g ? `rgba(255,199,44,${a})` : `rgba(216,180,254,${a})`;
        x.shadowBlur = s.g ? 10 : 6; x.shadowColor = s.g ? '#ffc72c' : '#c084fc';
        x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fill();
      }
      requestAnimationFrame(tick);
    }
    addEventListener('resize', init); init(); requestAnimationFrame(tick);
  }

  /* ---------- domande (database + predefinite) ---------- */
  const clone = (o) => JSON.parse(JSON.stringify(o));
  ELY.numberize = (qs) => { let n = 0; return qs.map((q) => Object.assign({}, q, { _n: q.t === 'sec' ? null : ++n })); };
  ELY.loadForms = async function () {
    const D = window.ELY_DEFAULT || { common: { q: [] }, roles: [] };
    let rows = [];
    if (ELY.sb) { const { data, error } = await ELY.sb.from('forms').select('*'); if (!error && Array.isArray(data)) rows = data; }
    const byId = {}; rows.forEach((r) => { byId[r.id] = r; });
    const common = byId.common ? clone(byId.common.config) : clone(D.common); common.q = common.q || [];
    const all = [];
    D.roles.forEach((r, i) => {
      const row = byId[r.id]; const c = row ? clone(row.config) : clone(r);
      all.push(Object.assign(c, { id: r.id, q: c.q || [], enabled: row ? row.enabled : true, position: row ? row.position : i * 10, fromDb: !!row, isDefault: true }));
    });
    rows.forEach((row) => {
      if (row.id === 'common' || D.roles.some((r) => r.id === row.id)) return;
      const c = clone(row.config);
      all.push(Object.assign(c, { id: row.id, q: c.q || [], enabled: row.enabled, position: row.position, fromDb: true, isDefault: false }));
    });
    all.sort((a, b) => a.position - b.position);
    ELY.forms = { common, all, roles: all.filter((r) => r.enabled), commonFromDb: !!byId.common };
    return ELY.forms;
  };
  ELY.roleName = (id) => {
    const r = ELY.forms && ELY.forms.all.find((x) => x.id === id);
    return r ? ((r.it && r.it.n) || id) : id;
  };

  /* ---------- invio al Forum/canale Discord (best effort) ---------- */
  const DC_COLORS = { supporter: 0xc084fc, ss: 0x60a5fa, dev: 0x4ade80, t17: 0xfb923c, t19: 0xf472b6 };
  function getHook() {
    const raw = String(window.ELYSIAN_WEBHOOK_B64 == null ? '' : window.ELYSIAN_WEBHOOK_B64).replace(/\s+/g, '');
    if (!raw || raw.includes('INSERISCI') || raw.includes('INCOLLA')) return '';
    let url = ''; try { url = atob(raw.replace(/-/g, '+').replace(/_/g, '/')); } catch (_) { return ''; }
    const m = url.match(/https:\/\/(?:[a-z]+\.)?discord(?:app)?\.com\/api\/webhooks\/\d+\/[\w-]+/i);
    return m ? m[0] : '';
  }
  const dcClean = (x, n) => String(x == null ? '' : x).replace(/@/g, '@​').slice(0, n);
  function dcChunk(t, n) {
    const out = []; while (t.length > n) { let c = t.lastIndexOf(' ', n); if (c < n * 0.6) c = n; out.push(t.slice(0, c)); t = t.slice(c).trimStart(); }
    out.push(t); return out;
  }
  async function dcPost(url, body, thread) {
    const target = url + '?wait=true' + (thread ? '&thread_id=' + thread : '');
    for (let t = 0; t < 3; t++) {
      const r = await fetch(target, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (r.status === 429) { const j = await r.json().catch(() => ({})); await ELY.sleep(Math.min((j.retry_after || 1) * 1000, 5000)); continue; }
      return r.ok ? await r.json().catch(() => ({})) : false;
    }
    return false;
  }
  /* d = { role, roleName, lang, fields:[{q,a}], discordId, username, ign, appUrl } */
  ELY.postToDiscord = async function (d) {
    try {
      const url = getHook(); if (!url) return false;
      const forum = window.ELYSIAN_FORUM === true; let thread = '';
      const lang = d.lang === 'en' ? '🇬🇧 English' : '🇮🇹 Italiano';
      const flat = [];
      for (const f of d.fields) {
        const q = dcClean(f.q, 240) || '-';
        dcChunk(dcClean(f.a, 4000).trim() || '-', 1000).forEach((p, i) => flat.push({ name: i ? '↳ (continua)' : q, value: p, inline: false }));
      }
      const groups = []; let cur = [], size = 0;
      for (const fl of flat) {
        const n = fl.name.length + fl.value.length;
        if (cur.length >= 24 || size + n > 4800) { groups.push(cur); cur = []; size = 0; }
        cur.push(fl); size += n;
      }
      if (cur.length) groups.push(cur);
      const mention = /^\d{15,25}$/.test(d.discordId || '') ? `<@${d.discordId}>` : 'n/d';
      const rname = dcClean(d.roleName || d.role, 80);
      for (let i = 0; i < groups.length; i++) {
        const e = { color: DC_COLORS[d.role] || 0xa855f7, fields: groups[i], footer: { text: `Elysian Tierlist · Candidature · ${i + 1}/${groups.length}` } };
        if (i === 0) {
          e.title = `📨 Nuova candidatura: ${rname}`;
          e.description = `**Utente:** ${mention}  (${dcClean(d.username, 60) || 'n/d'})\n**IGN:** ${dcClean(d.ign, 40) || 'n/d'}\n**Lingua:** ${lang}` + (d.appUrl ? `\n[Apri nell'area staff](${d.appUrl})` : '');
          e.timestamp = new Date().toISOString();
        } else e.title = `↳ ${rname} · ${dcClean(d.ign, 40) || 'candidato'} · parte ${i + 1}/${groups.length}`;
        const body = { username: 'Elysian Candidature', allowed_mentions: { parse: [] }, embeds: [e] };
        if (forum && !thread) body.thread_name = `${rname} · ${dcClean(d.ign, 40) || 'candidato'}`.slice(0, 100);
        const res = await dcPost(url, body, thread);
        if (!res) return false;
        if (forum && !thread && res.channel_id) thread = res.channel_id;
        if (i < groups.length - 1) await ELY.sleep(700);
      }
      return true;
    } catch (_) { return false; }
  };

  /* ---------- login / sessione / menu ---------- */
  const RANK = { user: 0, staff: 1, admin: 2 };
  ELY.isStaff = () => !!(ELY.profile && RANK[ELY.profile.role] >= 1);
  ELY.isAdmin = () => !!(ELY.profile && ELY.profile.role === 'admin');

  ELY.gotoLogin = function (next) {
    try { sessionStorage.setItem('ely_next', next || location.href); } catch (_) { }
    location.href = ELY.url('login/');
  };
  ELY.login = async function (next) {
    if (!ELY.sb) { ELY.toast('Il sito non è ancora collegato al database (vedi la guida).', 'err'); return; }
    try { sessionStorage.setItem('ely_next', next || location.href); } catch (_) { }
    const { error } = await ELY.sb.auth.signInWithOAuth({ provider: 'discord', options: { redirectTo: ELY.url('login/') } });
    if (error) ELY.toast('Login non riuscito: ' + error.message, 'err');
  };
  ELY.logout = async function () {
    try { await ELY.sb.auth.signOut(); } catch (_) { }
    try { Object.keys(sessionStorage).filter((k) => k.startsWith('ely_sync_')).forEach((k) => sessionStorage.removeItem(k)); } catch (_) { }
    location.href = ELY.url('');
  };

  async function loadProfile(user) {
    const key = 'ely_sync_' + user.id; let prof = null;
    let synced = false; try { synced = !!sessionStorage.getItem(key); } catch (_) { }
    if (!synced) {
      const { data, error } = await ELY.sb.rpc('sync_profile');
      if (!error && data) { prof = Array.isArray(data) ? data[0] : data; try { sessionStorage.setItem(key, '1'); } catch (_) { } }
    }
    if (!prof) { const { data } = await ELY.sb.from('profiles').select('*').eq('id', user.id).maybeSingle(); prof = data; }
    return prof;
  }

  function renderNav(active) {
    const el = document.getElementById('nav'); if (!el) return;
    const p = ELY.profile;
    const links = [['home', '', 'Home'], ['apply', 'apply/', 'Candidati']];
    if (p) links.push(['account', 'account/', 'Le mie candidature']);
    if (ELY.isStaff()) links.push(['staff', 'staff/', 'Area staff']);
    const right = p
      ? `<div class="userbox">${ELY.avatar(p.avatar_url, p.username)}<span class="nm">${esc(p.username || 'utente')}</span><button class="btn ghost small" id="logout">Esci</button></div>`
      : `<div class="userbox"><button class="btn discord small" id="loginbtn">Accedi con Discord</button></div>`;
    el.innerHTML = `<header class="nav"><div class="nav-in"><a class="brand" href="${esc(ELY.url(''))}"><img src="${esc(ELY.url('logo.png'))}" alt="" onerror="this.style.display='none'"><span>ELYSIAN <b>TIERS</b></span></a>
      <nav class="navlinks">${links.map((l) => `<a href="${esc(ELY.url(l[1]))}" class="${l[0] === active ? 'on' : ''}">${esc(l[2])}</a>`).join('')}</nav>${right}</div></header>`;
    const lo = el.querySelector('#logout'); if (lo) lo.onclick = ELY.logout;
    const li = el.querySelector('#loginbtn'); if (li) li.onclick = () => ELY.login();
  }

  ELY.subnav = (active) => {
    const items = [['apps', 'staff/', 'Candidature'], ['users', 'staff/users/', 'Utenti']];
    if (ELY.isAdmin()) items.push(['forms', 'staff/forms/', 'Domande']);
    return `<div class="subnav">${items.map((i) => `<a href="${esc(ELY.url(i[1]))}" class="${i[0] === active ? 'on' : ''}">${esc(i[2])}</a>`).join('')}</div>`;
  };

  /* opts: { nav:'home'|'apply'|..., require: null|'user'|'staff'|'admin' }  ->  true se la pagina puo' continuare */
  ELY.init = async function (opts) {
    opts = opts || {};
    stars();
    const foot = document.createElement('footer'); foot.className = 'foot'; foot.textContent = '© Elysian Tierlist · Not affiliated with Mojang or Microsoft'; document.body.appendChild(foot);
    const url = String(cfg.SUPABASE_URL || ''), key = String(cfg.SUPABASE_ANON_KEY || '');
    ELY.configured = /^https:\/\/.+/.test(url) && key.length > 20 && !/INSERISCI|INCOLLA/.test(url + key);
    if (ELY.configured && window.supabase) {
      ELY.sb = window.supabase.createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
      try {
        const { data } = await ELY.sb.auth.getSession();
        ELY.session = data && data.session; ELY.user = ELY.session ? ELY.session.user : null;
        if (ELY.user) ELY.profile = await loadProfile(ELY.user);
      } catch (e) { console.error(e); }
    }
    renderNav(opts.nav);
    if (opts.require) {
      if (!ELY.configured) { ELY.panelMsg('Sito non ancora configurato', 'Manca il collegamento al database. Segui la guida (GUIDA-STAFF.md) e compila <code>site-config.js</code>.'); return false; }
      if (!window.supabase) { ELY.panelMsg('Connessione', 'Non riesco a caricare i componenti del sito. Controlla la connessione e ricarica la pagina.'); return false; }
      if (!ELY.user) { ELY.gotoLogin(); return false; }
      if (!ELY.profile) { ELY.panelMsg('Profilo non trovato', 'Il tuo profilo non è stato creato: il database non è configurato correttamente (esegui schema.sql, vedi la guida).'); return false; }
      if (RANK[ELY.profile.role] < RANK[opts.require]) { ELY.panelMsg('Accesso negato', opts.require === 'admin' ? 'Questa pagina è riservata agli Admin.' : 'Questa pagina è riservata allo staff.'); return false; }
    }
    return true;
  };
})();
