importScripts('/it202-big-project/cache-polyfill.js');


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('hi').then(function(cache){
      return cache.addAll([
        '/it202-big-project',
        '/it202-big-project/index.html',
        '/it202-big-project/js/list.js',
        '/it202-big-project/js/search.js',
        '/it202-big-project/js/map.js',
        '/it202-big-project/js/mic.js',
        '/it202-big-project/images/icons/icon-72x72.png',
        '/it202-big-project/images/icons/icon-96x96.png',
        '/it202-big-project/images/icons/icon-128x128.png',
        '/it202-big-project/images/icons/icon-144x144.png',
        '/it202-big-project/images/icons/icon-152x152.png',
        '/it202-big-project/images/icons/icon-192x192.png',
        '/it202-big-project/images/icons/icon-384x384.png',
        '/it202-big-project/images/icons/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
