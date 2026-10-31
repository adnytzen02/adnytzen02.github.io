// 商品共用操作：勾選入手、刪除（附復原）、開詳情、編輯
import { store } from '../store.js';
import { analyze } from '../calc.js';
import { confirmDialog, toast, esc, yen } from '../ui.js';
import { openDetail } from './item-detail.js';
import { openForm } from './item-form.js';

export function togglePurchased(id) {
  const before = store.getItem(id);
  if (!before) return;
  const item = store.togglePurchased(id);
  if (!item.purchased) {
    toast({ title: '已改回待購買', message: esc(item.name), tone: 'muted', duration: 3000 });
    return;
  }
  const { byItem } = analyze(store.state.items, store.state.settings);
  const a = byItem.get(id);
  const parts = [`支付 ${yen(a.pay)}`];
  if (a.refund) parts.push(`預估退稅 ${yen(a.refund)}`);
  if (a.group.eligible && a.group.store) parts.push(`${esc(a.group.store)} 已達免稅門檻`);
  toast({
    title: '戰利品已入庫',
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
      case 'toggle': togglePurchased(id); break;
      case 'open': openDetail(id); break;
      case 'edit': openForm(id); break;
      case 'delete': deleteItem(id); break;
      default: break;
    }
  });
}
