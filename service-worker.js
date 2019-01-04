var cacheName = 'helloWorld';

//During install event open cache 'helloWorld' and add script and image via an array of files
//event.waitUntil(), tracks how long installation takes and if successful
//cache.addAll(), adds to an array of files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cacheName => cacheName.addAll([
        './js/script.js',
        './images/hello.png'
      ]))
  );
});
