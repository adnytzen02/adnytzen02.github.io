// 進入點：hash 路由、頁首資訊、全域按鈕
import { store } from './store.js';
import { summarize } from './calc.js';
import { refreshRate } from './rate.js';
import { $, $$, yen, num, toast, snapshotNumbers, countUp } from './ui.js';
import { openForm } from './views/item-form.js';
import { openSettings } from './views/settings.js';
import { initTheme, cycleTheme, syncThemeColor } from './theme.js';
import { initOffline } from './offline.js';
import * as homeView from './views/home.js';
import * as listView from './views/list.js';
import * as splitView from './views/split.js';
import * as budgetView from './views/budget.js';
import * as packingView from './views/packing.js';

const ROUTES = {
  home: { view: homeView, title: '首頁' },
  list: { view: listView, title: '採買清單' },
  split: { view: splitView, title: '代購分帳' },
  budget: { view: budgetView, title: '預算匯率' },
  packing: { view: packingView, title: '打包與海關' },
};

let current = null; // { name, instance }

// 用 hash 路由，GitHub Pages 重新整理不會 404
function routeName() {
  const name = location.hash.replace(/^#\/?/, '').split(/[/?]/)[0];
  return ROUTES[name] ? name : 'home';
}

// 舊版網址相容：購買地區 → 採買清單「店鋪」；行程行李 → 打包與海關
function legacyRedirect() {
  const name = location.hash.replace(/^#\/?/, '').split(/[/?]/)[0];
  if (name === 'areas') {
    store.updateSettings({ listView: 'store' });
    history.replaceState(null, '', '#/list');
  } else if (name === 'luggage') {
    history.replaceState(null, '', '#/packing');
  }
}

function ctx() {
  const state = store.state;
  return { state, sum: summarize(state), rate: state.settings.rate };
}

function renderRoute({ focus = true } = {}) {
  const name = routeName();
  current?.instance?.destroy?.();
  // 每次換頁都換一個全新的容器，避免事件監聽重複累積
  const root = document.createElement('div');
  root.id = 'view';
  root.className = 'view';
  $('#view').replaceWith(root);
  const instance = ROUTES[name].view.mount(root, ctx());
  current = { name, instance };
  document.body.dataset.route = name; // 首頁隱藏新增按鈕等用
  document.documentElement.classList.remove('boot-home', 'boot-intro', 'booting'); // 頁面已接手，移除載入前的預排版
  syncThemeColor(); // 首頁的網址列是深色，其他頁面跟著主題
  document.title = `${ROUTES[name].title}｜Shopping Relics 日本購物清單`;
  $$('[data-route]').forEach((a) => {
    if (a.dataset.route === name) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  if (focus) {
    window.scrollTo({ top: 0 });
    // 切頁後把焦點移到頁面標題，方便螢幕閱讀器
    root.querySelector('h1')?.setAttribute('tabindex', '-1');
    root.querySelector('h1')?.focus({ preventScroll: true });
  }
}

// 捲動位置由程式自己管理（切頁回頂端、首頁看過片頭就停在結尾），不讓瀏覽器重新整理時還原舊位置
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

function renderHeader() {
  const { state, sum } = ctx();
  const rateEl = $('#hdr-rate');
  rateEl.querySelector('.chip-v-full').textContent = `1 JPY = ${num(state.settings.rate, 4)} TWD`;
  // 手機版精簡顯示：以 ¥1,000 為單位，逛街時心算最方便
  rateEl.querySelector('.chip-v-short').textContent = `¥1,000 ≈ NT$${num(state.settings.rate * 1000)}`;
  const totalEl = $('#hdr-total');
  const before = snapshotNumbers(totalEl, '.chip-v');
  $('#hdr-total .chip-v').innerHTML = `${yen(sum.pay)} <small>/ ${sum.count} 件</small>`;
  countUp(totalEl, '.chip-v', before);
}

store.subscribe(() => {
  renderHeader();
  current?.instance?.update?.(ctx());
});

window.addEventListener('hashchange', () => { legacyRedirect(); renderRoute(); });

$('#fab-add').addEventListener('click', () => openForm());
$('#btn-settings').addEventListener('click', () => openSettings());
$('#btn-theme').addEventListener('click', () => {
  const t = cycleTheme();
  toast({ title: `外觀：${t.label}`, message: t.id === 'auto' ? '會依照裝置的深淺色設定自動切換。' : '', tone: 'muted', duration: 2000 });
});
// 往下捲時把右下角的「＋」收起來（不擋內容），往上捲或回到頂端時再出現
let lastY = scrollY;
addEventListener('scroll', () => {
  const y = scrollY;
  if (y > lastY + 8 && y > 160) document.body.classList.add('fab-hide');
  else if (y < lastY - 8 || y < 160) document.body.classList.remove('fab-hide');
  lastY = y;
}, { passive: true });

initTheme();
initOffline();

// 其他模組可用自訂事件要求開新增表單
document.addEventListener('app:add', (e) => openForm(null, e.detail ?? {})); // 沒帶資料（例如首頁按鈕）時用空的預設值

window.addEventListener('store:quota', () => {
  toast({ title: '儲存空間不足', message: '瀏覽器容量已滿，請移除部分商品照片後再試。', tone: 'error', duration: 8000 });
});

renderHeader();
legacyRedirect();
renderRoute({ focus: false });

// 啟動時更新匯率（6 小時內不重抓；手動匯率不覆蓋）
refreshRate().then((r) => {
  if (r.ok === false) console.info('匯率暫時無法更新，沿用上次數值');
});
