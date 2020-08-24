var cacheName = 'v1.0';

var cacheAssets = [
    'https://www.seotechman.com/p/about-us.html',
    'https://www.seotechman.com/p/contact.html',
    'https://2.bp.blogspot.com/-aviW30yPCqU/Xyxtded-z9I/AAAAAAAADWs/PGekQc6rB1oRD0Y5YFmYcVwq5hV7zQdRgCLcBGAsYHQ/s1600/virm.jpg',
    'https://cdn.statically.io/img/3.bp.blogspot.com/-xLbi9KYreic/XodqLbtoLqI/AAAAAAAAChA/Zp7WF0KkCc04EwRoDZduXJEKM7NRa2RXQCLcBGAsYHQ/s32/favicon-32x32.png'
]

// installation
self.addEventListener('install', e => {
      console.log('Service Worker: Installed');
      e.waitUntil(
            caches
              .open(cacheName)
              .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
              })
              .then(() => self.skipWaiting())
          );

});    

// activation
self.addEventListener('activate', e => {
    console.log('Service Worker: Installed');
}); 

// fetch

self.addEventListener('fetch', e => {
      console.log('Service Worker: Fetching');
        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
      
});
