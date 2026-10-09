// Service worker minimo del Cruscotto ERP: rende la pagina installabile; rete sempre prima (nessuna cache dei dati).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
