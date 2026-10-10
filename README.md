# Cruscotto ERP Miraglia — pagina statica

Questo repository pubblico contiene SOLO i file statici dell'app ERP Miraglia (pagina, service worker, manifest, icona, libreria SheetJS per leggere Excel — Apache-2.0), pubblicati con GitHub Pages.
Nessun dato aziendale passa o risiede qui: i dati vengono letti dal telefono dell'utente direttamente dal database (Supabase, schema `api`) dopo il login personale.
La pagina contiene solo l'indirizzo del progetto e la chiave `anon`, pubblica per costruzione: senza un utente in allow-list ogni vista restituisce 0 righe.

Sorgente e documentazione: repository privato `erp-miraglia` (`app/cruscotto.html`, `docs/MANUALE_TECNICO.md` §12, `docs/MANUALE_UTENTE_CRUSCOTTO.md`).
Versione pubblicata: `index.html` SHA-256 `2697c5b988f3e4ee0389079bcbf201a1f6e6689826b42c61845cec3b5c878853`.
