const ASSET_VERSION = '2025.11.29.19';
const CACHE_NAME = `habitube-app-${ASSET_VERSION}`;
const ASSET_QUERY = `?v=${ASSET_VERSION}`;
const OFFLINE_HTML = `/offline.html${ASSET_QUERY}`;
const OFFLINE_URLS = Array.from(new Set([
  '/',
  '/index.html',
  `/style.css${ASSET_QUERY}`,
  `/library.js${ASSET_QUERY}`,
  `/names.js${ASSET_QUERY}`,
  `/tips.js${ASSET_QUERY}`,
  `/manifest.webmanifest${ASSET_QUERY}`,
  `/icon-192.png${ASSET_QUERY}`,
  `/icon-512.png${ASSET_QUERY}`,
  OFFLINE_HTML
]));
let offlineNotificationSent = false;
const LOG_PREFIX = '[SW offline]';

const NAVIGATION_FALLBACK = '/index.html';
const NAVIGATION_FALLBACK_KEYS = [
  NAVIGATION_FALLBACK,
  '/index.html',
  './index.html',
  '/',
  './'
];
const NAVIGATION_MATCH_OPTIONS = { ignoreSearch: true };

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(OFFLINE_URLS.map(url => cache.add(url).catch(() => null)));
    })
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
    const fallback = await matchNavigationFallback();
    console.warn(`${LOG_PREFIX} networkFirst failed for ${request.url}, falling back to ${fallback ? 'cached navigation' : 'offline page'}`, err);
    if (fallback) {
      notifyClientsAboutOffline(request.url, err, false);
      return fallback;
    }
    const offlinePage = await caches.match(OFFLINE_HTML);
    if (offlinePage) {
      notifyClientsAboutOffline(request.url, err, true);
      return offlinePage;
    }
    notifyClientsAboutOffline(request.url, err, false);
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function matchNavigationFallback() {
  for (const key of NAVIGATION_FALLBACK_KEYS) {
    const cached = await caches.match(key, NAVIGATION_MATCH_OPTIONS);
    if (cached) return cached;
  }
  return null;
}

function isForcedReload(request) {
  const cacheControl = request.headers.get('cache-control') || '';
  return /max-age=0|no-cache|no-store/i.test(cacheControl);
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      await Promise.all([
        cache.put(NAVIGATION_FALLBACK, response.clone()),
        cache.put('/', response.clone()),
        cache.put('./', response.clone())
      ]);
    }
    return response;
  } catch (err) {
    const fallback = await matchNavigationFallback();
    const forcedReload = isForcedReload(request);
    console.warn(`${LOG_PREFIX} navigation fetch failed for ${request.url}, forcedReload=${forcedReload}`, err);
    if (fallback) {
      notifyClientsAboutOffline(request.url, err, forcedReload);
      return fallback;
    }
    const offlinePage = await caches.match(OFFLINE_HTML);
    if (offlinePage) {
      notifyClientsAboutOffline(request.url, err, forcedReload);
      return offlinePage;
    }
    notifyClientsAboutOffline(request.url, err, forcedReload);
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

async function notifyClientsAboutOffline(url, err, pullToRefresh = false) {
  if (offlineNotificationSent) return;
  offlineNotificationSent = true;
  const allClients = await self.clients.matchAll({ includeUncontrolled: true });
  console.warn(`${LOG_PREFIX} notifying clients due to ${url}`, err);
  allClients.forEach(client => {
    client.postMessage({
      type: 'habitube-offline-shell',
      url,
      message: (err && err.message) || 'offline',
      timestamp: Date.now(),
      reload: true,
      pullToRefresh
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
