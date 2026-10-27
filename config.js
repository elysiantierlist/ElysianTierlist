// ============================================================
// COME COLLEGARE DISCORD (guida completa in GUIDA.md)
//
// 1. Crea il webhook su Discord e copia il suo link.
// 2. Vai su  https://www.base64encode.org  , incolla il link, clicca "Encode".
// 3. Incolla il risultato qui sotto, tra le virgolette, al posto del testo.
//
// Il link viene scritto codificato (non in chiaro) perche' Discord cancella
// in automatico i webhook che trova scritti nei repository pubblici di GitHub.
// NON e' una protezione: chi apre il sito puo' comunque ricavarlo.
// ============================================================
window.ELYSIAN_WEBHOOK_B64 = "INSERISCI-QUI-IL-WEBHOOK-CODIFICATO";

// (Opzionale) Se un giorno vuoi usare il Worker Cloudflare, metti qui il suo indirizzo.
// Se e' compilato, il sito usa quello e ignora il webhook sopra.
window.ELYSIAN_WORKER_URL = "";
