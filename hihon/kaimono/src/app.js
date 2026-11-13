// 進入點：hash 路由、頁首資訊、全域按鈕
import { store } from './store.js';
import { summarize } from './calc.js';
import { refreshRate } from './rate.js';
import { $, $$, yen, num, toast, snapshotNumbers, countUp } from './ui.js';
import { openForm } from './views/item-form.js';
import { openSettings, runSync } from './views/settings.js';
import { cloudAvailable, cloudInfo, preloadCloud, syncNow } from './cloud.js';
import { initTheme, syncThemeColor } from './theme.js';
import { initThemeMenu } from './theme-menu.js';
import { initOffline } from './offline.js';
import * as homeView from './views/home.js';
import * as listView from './views/list.js';
import * as splitView from './views/split.js';
import * as budgetView from './views/budget.js';
import * as packingView from './views/packing.js';
import * as guideView from './views/guide.js';
import * as shareView from './views/share.js';

const ROUTES = {
  home: { view: homeView, title: '首頁' },
  list: { view: listView, title: '採買清單' },
  split: { view: splitView, title: '代購分帳' },
  budget: { view: budgetView, title: '預算匯率' },
  packing: { view: packingView, title: '打包與海關' },
  guide: { view: guideView, title: '退稅指南', nav: 'budget' }, // 不在導覽列，導覽標示在「預算匯率」
  share: { view: shareView, title: '代購明細', nav: 'none' }, // 朋友打開的唯讀明細，資料在網址裡
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
    if (a.dataset.route === (ROUTES[name].nav || name)) a.setAttribute('aria-current', 'page');
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
  // 導覽列的待辦數字：採買清單＝待買件數，代購分帳＝還沒收齊的朋友人數
  setNavBadge('list', sum.pendingCount, `${sum.pendingCount} 件待買`);
  const unpaid = splitView.unpaidFriendCount(state, sum);
  setNavBadge('split', unpaid, `${unpaid} 位朋友尚未收齊`);
}

// 在桌機與手機的導覽連結上顯示數字；0 就拿掉。數字給看得到的人，括號裡的說明給螢幕閱讀器
function setNavBadge(route, count, text) {
  $$(`.nav-desktop [data-route="${route}"], .nav-mobile [data-route="${route}"]`).forEach((a) => {
    let badge = a.querySelector('.nav-badge');
    if (!count) { badge?.remove(); return; }
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'nav-badge';
      a.appendChild(badge);
    }
    badge.innerHTML = `<span aria-hidden="true">${count > 99 ? '99+' : count}</span><span class="sr-only">（${text}）</span>`;
  });
}

store.subscribe(() => {
  renderHeader();
  current?.instance?.update?.(ctx());
});

window.addEventListener('hashchange', () => { legacyRedirect(); renderRoute(); });

$('#fab-add').addEventListener('click', () => openForm());
$('#btn-settings').addEventListener('click', () => openSettings());
initThemeMenu($('#btn-theme')); // 右上角按鈕：開啟「外觀與主題」選單
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

// 已連結 Google Drive 時，每次開網站提醒一次「同步最新清單」（首頁開場動畫時不打擾，進到其他頁再提示）
const NUDGE_KEY = 'shopping-relics:cloud-nudged';
function cloudNudge() {
  if (!cloudAvailable().ok || !cloudInfo().linked || /^#\/home|^#?$/.test(location.hash)) return;
  try { if (sessionStorage.getItem(NUDGE_KEY)) return; sessionStorage.setItem(NUDGE_KEY, '1'); } catch { /* 無法記住就每次提示 */ }
  preloadCloud();
  toast({
    title: '同步 Google Drive 清單？', message: '取得其他裝置的最新修改，之後的修改也會自動上傳。',
    actionText: '同步', onAction: () => runSync(() => syncNow({ interactive: true })), tone: 'muted', duration: 10000,
  });
}
addEventListener('hashchange', cloudNudge);
cloudNudge();

// 啟動時更新匯率（6 小時內不重抓；手動匯率不覆蓋）
refreshRate().then((r) => {
  if (r.ok === false) console.info('匯率暫時無法更新，沿用上次數值');
});
