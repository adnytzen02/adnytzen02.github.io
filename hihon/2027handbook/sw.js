// 由 build.py 自動產生。VERSION 隨檔案內容改變，舊快取會在啟用時清除。
const VERSION = '5c3117c1b8';
const CACHE = 'jp-handbook-' + VERSION;
const RUNTIME = 'jp-handbook-runtime';
const PRECACHE = ["./", "./404.html", "./airport.html", "./anime.css", "./anime.html", "./anime.js", "./checklist.js", "./favorites.js", "./filters.js", "./hero.jpg", "./home.js", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./index.html", "./japan-dots.js", "./logos/aeon.webp", "./logos/apro.webp", "./logos/bazaar.webp", "./logos/coop.webp", "./logos/daiei.webp", "./logos/evergreen.webp", "./logos/fresco.webp", "./logos/frest.webp", "./logos/friendmart.webp", "./logos/gekiyasu.webp", "./logos/gourmet.webp", "./logos/gyomu.webp", "./logos/heiwado.webp", "./logos/ikari.webp", "./logos/izumiya.webp", "./logos/kanart.webp", "./logos/kansai.webp", "./logos/kinsho.webp", "./logos/kohyo.webp", "./logos/konomiya.webp", "./logos/kyotocoop.webp", "./logos/lamu.webp", "./logos/life.webp", "./logos/lopia.webp", "./logos/mandai.webp", "./logos/maruai.webp", "./logos/maruhachi.webp", "./logos/marunaka.webp", "./logos/maruyasu.webp", "./logos/matsugen.webp", "./logos/matsumoto.webp", "./logos/maxvalu.webp", "./logos/nakamura.webp", "./logos/national.webp", "./logos/oasis.webp", "./logos/okuwa.webp", "./logos/pantry.webp", "./logos/sandy.webp", "./logos/satake.webp", "./logos/seijo.webp", "./logos/seiyu.webp", "./logos/sunplaza.webp", "./logos/tamade.webp", "./logos/toho.webp", "./logos/topworld.webp", "./logos/trial.webp", "./manifest.json", "./quarantine-ledger-800.webp", "./quarantine-ledger.webp", "./rules.html", "./script.js", "./search-index.js", "./search.js", "./seasons.js", "./shrine-hero.css", "./shrine-hero.js", "./shrine.html", "./shrine.js", "./style.css", "./super.css", "./super.js", "./supermarket.html", "./tools.html", "./tools.js", "./train.html", "./train.js", "./trip.html", "./vendor/LICENSES.txt", "./vendor/lenis.min.js", "./zoo.css", "./zoo.html", "./zoo.js"];

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
  // CSS／JS 網址帶有內容版本號（?v=），所以完全相符的快取一定是同一版；離線時才退回不同版本的同名檔案
  const hit = await cache.match(req);
  const fresh = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => null);
  return hit || (await fresh) || (await cache.match(req, { ignoreSearch: true })) || Response.error();
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
