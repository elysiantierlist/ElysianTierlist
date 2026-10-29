// ============================================================
// COLLEGAMENTO A SUPABASE (database + login Discord)
// Compila questi due valori seguendo GUIDA-STAFF.md (passo "Supabase").
// Li trovi in Supabase -> Project Settings -> API.
// La chiave "anon public" e' fatta per stare nel sito: e' sicura perche' i permessi
// li decide il database (schema.sql). NON mettere mai qui la chiave "service_role".
// ============================================================
window.ELY_CONFIG = {
  SUPABASE_URL: "https://uhwwrqaabgsepdrpcgrz.supabase.co",        // es. https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVod3dycWFhYmdzZXBkcnBjZ3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyOTk5MjEsImV4cCI6MjEwODg3NTkyMX0.wRZGWR1S_Ceg4-Bqkf_7uG6e22ZyHq-wsCY18FM-9NQ" // inizia con eyJ...
};
