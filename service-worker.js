const CACHE_NAME = "app-cache-v1";
const urlsToCache = [
  "id.html",
  "manifest.json",
  "https://i.imgur.com/n4zJhma.png",
  "style.css", // Dodaj inne zasoby, np. CSS, JS
  "script.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
