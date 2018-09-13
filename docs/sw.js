self.addEventListener('install', () => {
  console.log('installed.');
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
});