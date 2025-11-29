const ASSET_VERSION = '2025.11.29.7';
const CACHE_NAME = `habitube-app-${ASSET_VERSION}`;
const ASSET_QUERY = `?v=${ASSET_VERSION}`;
const OFFLINE_URLS = Array.from(new Set([
  './',
  './index.html',
  `./style.css${ASSET_QUERY}`,
  `./library.js${ASSET_QUERY}`,
  `./names.js${ASSET_QUERY}`,
  `./tips.js${ASSET_QUERY}`,
  `./manifest.webmanifest${ASSET_QUERY}`,
  `./icon-192.png${ASSET_QUERY}`,
  `./icon-512.png${ASSET_QUERY}`
]));
let offlineNotificationSent = false;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

const NAVIGATION_FALLBACK = './index.html';

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(event.request));
    return;
  }
  event.respondWith(networkFirst(event.request));
});

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request) || await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    const fallback = await caches.match(request, { ignoreSearch: true }) || await caches.match('/index.html') || await caches.match('./index.html') || await caches.match('/');
    if (fallback) {
      notifyClientsAboutOffline(request.url, err);
      return fallback;
    }
    notifyClientsAboutOffline(request.url, err);
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(NAVIGATION_FALLBACK, response.clone());
    }
    return response;
  } catch (err) {
    const fallback = await caches.match(NAVIGATION_FALLBACK) || await caches.match('/index.html') || await caches.match('./index.html') || await caches.match('/');
    if (fallback) {
      notifyClientsAboutOffline(request.url, err);
      return fallback;
    }
    notifyClientsAboutOffline(request.url, err);
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function notifyClientsAboutOffline(url, err) {
  if (offlineNotificationSent) return;
  offlineNotificationSent = true;
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });
      allClients.forEach(client => {
        client.postMessage({
          type: 'habitube-offline-shell',
          url,
          message: (err && err.message) || 'offline',
          timestamp: Date.now(),
          reload: true
        });
      });
  self.setTimeout(() => {
    offlineNotificationSent = false;
  }, 30000);
}

self.addEventListener('message', event => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }
  if (event.data.type === 'CLEAR_CACHES') {
    event.waitUntil(
      caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))))
    );
  }
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type: 'window', includeUncontrolled: true}).then(list => {
      for(const client of list){
        if('focus' in client){
          return client.focus();
        }
      }
      if(clients.openWindow){
        return clients.openWindow('./');
      }
      return undefined;
    })
  );
});
