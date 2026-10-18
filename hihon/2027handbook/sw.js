// 由 build.py 自動產生。VERSION 隨檔案內容改變，舊快取會在啟用時清除。
const VERSION = '17f0754ac5';
const CACHE = 'jp-handbook-' + VERSION;
const RUNTIME = 'jp-handbook-runtime';
const PRECACHE = ["./", "./404.html", "./airport.html", "./anime.html", "./checklist.js", "./favorites.js", "./filters.js", "./hero.jpg", "./home.js", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./index.html", "./japan-dots.js", "./manifest.json", "./rules.html", "./script.js", "./search-index.js", "./search.js", "./shrine.html", "./style.css", "./tools.html", "./tools.js", "./train.html", "./train.js", "./trip.html", "./vendor/LICENSES.txt", "./vendor/lenis.min.js", "./zoo.html"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== RUNTIME).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// 網路優先（逾時改用快取）：避免弱網路卡住
const networkFirst = async req => {
  const cache = await caches.open(CACHE);
  try {
    const res = await Promise.race([fetch(req), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000))]);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (_) {
    return (await cache.match(req, { ignoreSearch: true })) || (await cache.match('./index.html')) || Response.error();
  }
};
// 先給快取、背景更新
const staleWhileRevalidate = async (req, name) => {
  const cache = await caches.open(name);
  const hit = await cache.match(req);
  const fresh = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => null);
  return hit || (await fresh) || Response.error();
};

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(req.mode === 'navigate' ? networkFirst(req) : staleWhileRevalidate(req, CACHE));
  } else if (/(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(staleWhileRevalidate(req, RUNTIME));   // 字體：離線時沿用上次載入的
  }
});
