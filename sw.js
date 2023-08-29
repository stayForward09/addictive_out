self.addEventListener('install', event => self.skipWaiting());

self.addEventListener('activate', event => {

  // Delete all Service Worker Caches
  caches.keys().then(cacheNames => {for (let name of cacheNames) {caches.delete(name);}});

  // Unregister all Service Workers
  self.registration.unregister()

    .then(() => self.clients.matchAll())

    .then((clients) => clients.forEach(client => client.navigate(client.url)))

});
