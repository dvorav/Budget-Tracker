const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/index.js",
  "/flavicon.ico",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

//install step

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

//activate
self.addEventListener("activate", function (event) {
  event.waitUntil(
    cacheskeys().then((keyList) => {
      return Promise.all(
        keyLlist.map((key) => {
          if (key != CACHE_NAME && key !== DATA_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

