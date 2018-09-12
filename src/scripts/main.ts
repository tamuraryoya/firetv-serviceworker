if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then((registration) => {
      alert('service worker ready.')
    })
    .catch(console.warn);
} else {
  alert('Service Workerに対応していません。');
}
