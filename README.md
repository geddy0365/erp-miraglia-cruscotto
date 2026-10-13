# Cruscotto ERP Miraglia — pagina statica

Questo repository pubblico contiene SOLO i file statici dell'app ERP Miraglia (pagina, service worker, manifest, icone, libreria SheetJS per leggere Excel — Apache-2.0), pubblicati con GitHub Pages,
e nella cartella `download/` i programmi per telefono (Android, APK firmato) e PC (Windows, installatore): aprono questa stessa pagina, quindi si aggiornano da soli.
Nessun dato aziendale passa o risiede qui: i dati vengono letti dal telefono dell'utente direttamente dal database (Supabase, schema `api`) dopo il login personale.
La pagina contiene solo l'indirizzo del progetto e la chiave `anon`, pubblica per costruzione: senza un utente in allow-list ogni vista restituisce 0 righe.

Sorgente e documentazione: repository privato `erp-miraglia` (`app/cruscotto.html`, `docs/MANUALE_TECNICO.md` §12, `docs/MANUALE_UTENTE_CRUSCOTTO.md`).
Versione pubblicata: `index.html` SHA-256 `57f4ebffd4541b2d2d85d74a80b26a0a2b94c74c54841607bcde9ca1ad1d181a`.
