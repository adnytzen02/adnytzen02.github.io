// 離線快取（Service Worker）
// 只在 https（GitHub Pages）或 localhost 生效；雙擊開啟 index.html 時不會啟用。
// 新增或改名「網站本體檔案」時，請同時更新 SHELL_FILES 並把 VERSION 改成新的值。
const VERSION = '2026-10-31c';
const SHELL = `relics-shell-${VERSION}`;
const RUNTIME = 'relics-runtime-v1';

const SHELL_FILES = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './manifest.webmanifest',
  './assets/favicon.svg',
  './assets/apple-touch-icon.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-maskable-512.png',
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

// 安裝：先把網站本體存起來
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

// 啟用：清掉舊版本的快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('relics-shell-') && k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// 有快取先用快取，同時在背景更新（下次開啟就是新版）
async function staleWhileRevalidate(request, cacheName, event) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: cacheName === SHELL });
  const network = fetch(request)
    .then((res) => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
      return res;
    })
    .catch(() => undefined);
  if (cached) {
    event.waitUntil(network);
    return cached;
  }
  return (await network) ?? Response.error();
}

// 頁面：優先連網拿最新版，網路慢（超過 3 秒）或離線就用快取
async function networkFirstPage(request) {
  const cache = await caches.open(SHELL);
  const timeout = new Promise((resolve) => setTimeout(resolve, 3000));
  const network = fetch(request).then((res) => {
    if (res.ok) cache.put('./index.html', res.clone());
    return res;
  });
  network.catch(() => {}); // 逾時後才失敗時不要留下未處理的錯誤
  try {
    const res = await Promise.race([network, timeout]);
    if (res) return res;
  } catch { /* 離線 */ }
  const cached = await cache.match('./index.html');
  return cached ?? network;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (request.mode === 'navigate' && url.origin === location.origin) {
    event.respondWith(networkFirstPage(request));
    return;
  }
  if (url.origin === location.origin) {
    event.respondWith(staleWhileRevalidate(request, SHELL, event));
    return;
  }
  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME, event));
  }
  // 匯率 API 不攔截：由程式自己處理失敗（沿用上次匯率）
});
