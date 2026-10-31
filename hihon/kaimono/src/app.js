// 進入點：hash 路由、頁首資訊、全域按鈕
import { store } from './store.js';
import { summarize } from './calc.js';
import { refreshRate } from './rate.js';
import { $, $$, yen, num, toast } from './ui.js';
import { openForm } from './views/item-form.js';
import { openSettings } from './views/settings.js';
import { initTheme, cycleTheme } from './theme.js';
import { initOffline } from './offline.js';
import * as listView from './views/list.js';
import * as areasView from './views/areas.js';
import * as budgetView from './views/budget.js';
import * as luggageView from './views/luggage.js';

const ROUTES = {
  list: { view: listView, title: '購物聖庫' },
  areas: { view: areasView, title: '購買地區' },
  budget: { view: budgetView, title: '預算匯率' },
  luggage: { view: luggageView, title: '行程行李' },
};

let current = null; // { name, instance }

// 用 hash 路由，GitHub Pages 重新整理不會 404
function routeName() {
  const name = location.hash.replace(/^#\/?/, '').split(/[/?]/)[0];
  return ROUTES[name] ? name : 'list';
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

function renderHeader() {
  const { state, sum } = ctx();
  const rateEl = $('#hdr-rate');
  rateEl.querySelector('.chip-v-full').textContent = `1 JPY = ${num(state.settings.rate, 4)} TWD`;
  // 手機版精簡顯示：以 ¥1,000 為單位，逛街時心算最方便
  rateEl.querySelector('.chip-v-short').textContent = `¥1,000 ≈ NT$${num(state.settings.rate * 1000)}`;
  rateEl.setAttribute('aria-label', `目前匯率 1 日圓等於 ${num(state.settings.rate, 4)} 台幣，前往預算匯率頁`);
  $('#hdr-total .chip-v').innerHTML = `${yen(sum.pay)} <small>/ ${sum.count} 件</small>`;
}

store.subscribe(() => {
  renderHeader();
  current?.instance?.update?.(ctx());
});

window.addEventListener('hashchange', () => renderRoute());

$('#fab-add').addEventListener('click', () => openForm());
$('#btn-settings').addEventListener('click', () => openSettings());
$('#btn-theme').addEventListener('click', () => {
  const t = cycleTheme();
  toast({ title: `外觀：${t.label}`, message: t.id === 'auto' ? '會依照裝置的深淺色設定自動切換。' : '', tone: 'muted', duration: 2000 });
});
initTheme();
initOffline();

// 其他模組可用自訂事件要求開新增表單
document.addEventListener('app:add', (e) => openForm(null, e.detail));

window.addEventListener('store:quota', () => {
  toast({ title: '儲存空間不足', message: '瀏覽器容量已滿，請移除部分商品照片後再試。', tone: 'error', duration: 8000 });
});

renderHeader();
renderRoute({ focus: false });

// 啟動時更新匯率（6 小時內不重抓；手動匯率不覆蓋）
refreshRate().then((r) => {
  if (r.ok === false) console.info('匯率暫時無法更新，沿用上次數值');
});
