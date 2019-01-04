console.log('main.js loaded');

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
    // registration failed
  }).catch(function (err) {console.log('ServiceWorker registration failed: ', err); });
}
