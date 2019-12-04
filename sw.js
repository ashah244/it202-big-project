importScripts('/IT-202-Project-2/cache-polyfill.js');


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('hi').then(function(cache){
      return cache.addAll([
        '/IT-202-Project-2',
        '/IT-202-Project-2/index.html',
        '/IT-202-Project-2/page_content/_about.html',
        '/IT-202-Project-2/js/list.js',
        '/IT-202-Project-2/js/search.js',
        '/IT-202-Project-2/js/map.js'
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
