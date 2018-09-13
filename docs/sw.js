self.addEventListener('install', () => {
  console.log('installed.', caches);
});

self.addEventListener('activate', () => {
  console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
});
