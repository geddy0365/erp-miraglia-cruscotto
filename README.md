# Cruscotto ERP Miraglia — pagina statica

Questo repository pubblico contiene SOLO i file statici del Cruscotto (pagina, service worker, manifest, icona), pubblicati con GitHub Pages.
Nessun dato aziendale passa o risiede qui: i dati vengono letti dal telefono dell'utente direttamente dal database (Supabase, schema `api`) dopo il login personale.
La pagina contiene solo l'indirizzo del progetto e la chiave `anon`, pubblica per costruzione: senza un utente in allow-list ogni vista restituisce 0 righe.

Sorgente e documentazione: repository privato `erp-miraglia` (`app/cruscotto.html`, `docs/MANUALE_TECNICO.md` §12, `docs/MANUALE_UTENTE_CRUSCOTTO.md`).
Versione pubblicata: `index.html` SHA-256 `d3d5fb8b0223830db34c222bd72b0f1b25ffefa515bae87fbfb48c8c357d819a`.
