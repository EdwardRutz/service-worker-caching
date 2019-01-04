var cacheName = 'helloWorld';

//During install event open cache 'helloWorld' and add script and image
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cacheName => cacheName.addAll([
        './js/script.js',
        './images/hello.png'
      ]))
  );
});
