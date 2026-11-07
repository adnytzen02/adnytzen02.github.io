// 商品共用操作：勾選入手、刪除（附復原）、開詳情、編輯
import { store } from '../store.js';
import { analyze } from '../calc.js';
import { confirmDialog, toast, esc, yen } from '../ui.js';
import { openDetail } from './item-detail.js';
import { openForm } from './item-form.js';
import { pickPurchaseStore } from './store-picker.js';
import { storeTodayExcl } from './store-groups.js';
import { normStore } from '../storeMatch.js';
import { TAX_FREE_MIN } from '../calc.js';
import { stampChecked, celebrateTaxFree } from '../fx.js';

// 勾選已入手：storeName 為在哪家店勾選（店鋪分組時會帶入）。
// 沒指定、而商品有多家候選或「不限店鋪」時，先詢問在哪家買到。
export async function togglePurchased(id, storeName) {
  const before = store.getItem(id);
  if (!before) return;
  let at = storeName;
  if (!before.purchased && at === undefined) {
    if (before.stores.length === 1) at = before.stores[0];
    else if (before.stores.length > 1 || before.anyStore) {
      at = await pickPurchaseStore(before);
      if (at === null) return; // 取消
    } else at = '';
  }
  // 勾選前後比較這家店今天的未稅金額：剛好跨過 ¥5,000 就慶祝一下
  const exclBefore = !before.purchased && at && before.taxFree ? storeTodayExcl(store.state.items, store.state.settings, at) : 0;
  const item = store.togglePurchased(id, undefined, at);
  if (!item.purchased) {
    toast({ title: '已改回待購買', message: esc(item.name), tone: 'muted', duration: 3000 });
    return;
  }
  const { byItem } = analyze(store.state.items, store.state.settings);
  const a = byItem.get(id);
  const parts = [item.purchasedStore ? `在 ${esc(item.purchasedStore)} 買到` : '', `支付 ${yen(a.pay)}`].filter(Boolean);
  if (a.refund) parts.push(`預估退稅 ${yen(a.refund)}`);
  if (a.group.eligible && a.group.store) parts.push(`${esc(a.group.store)} 已達免稅門檻`);
  const justReached = Boolean(at) && exclBefore < TAX_FREE_MIN && storeTodayExcl(store.state.items, store.state.settings, at) >= TAX_FREE_MIN;
  stampChecked(id);
  if (justReached) celebrateTaxFree(normStore(at));
  toast({
    title: justReached ? `已買到・${esc(at)} 免稅達成` : '已買到',
    message: `「${esc(item.name)}」· ${parts.join(' · ')}`,
    actionText: '復原',
    onAction: () => store.togglePurchased(id, false),
  });
}

export async function deleteItem(id) {
  const item = store.getItem(id);
  if (!item) return false;
  const ok = await confirmDialog({
    title: '刪除這個商品？',
    body: `「<strong>${esc(item.name)}</strong>」會從清單移除。刪除後 5 秒內可以按「復原」。`,
    confirmText: `刪除「${item.name.length > 10 ? `${item.name.slice(0, 10)}…` : item.name}」`,
    danger: true,
  });
  if (!ok) return false;
  const index = store.state.items.findIndex((i) => i.id === id);
  const removed = store.removeItem(id);
  toast({
    title: '已刪除',
    message: esc(removed.name),
    actionText: '復原',
    tone: 'muted',
    onAction: () => store.restoreItem(removed, index),
  });
  return true;
}

// 事件委派：在容器上監聽 data-act
export function bindItemActions(root) {
  root.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act]');
    const card = e.target.closest('[data-id]');
    if (!btn || !card || !root.contains(card)) return;
    const { id } = card.dataset;
    switch (btn.dataset.act) {
      case 'toggle': togglePurchased(id, btn.dataset.at); break;
      case 'open': openDetail(id); break;
      case 'edit': openForm(id); break;
      case 'delete': deleteItem(id); break;
      default: break;
    }
  });
}
