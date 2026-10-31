// 註冊離線快取，並在連線狀態改變時提示
import { toast } from './ui.js';

export function initOffline() {
  const httpOk = location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname);
  if ('serviceWorker' in navigator && httpOk) {
    const firstInstall = !navigator.serviceWorker.controller;
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      // 第一次安裝完成時告知可離線使用
      if (!firstInstall) return;
      const worker = reg.installing ?? reg.waiting;
      worker?.addEventListener('statechange', () => {
        if (worker.state === 'activated') {
          toast({ title: '已可離線使用', message: '之後在日本沒有網路也能打開清單。', tone: 'muted', duration: 4000 });
        }
      });
    }).catch((err) => console.info('離線快取未啟用：', err.message));
  }

  window.addEventListener('offline', () => {
    toast({ title: '目前離線', message: '清單照常可用，匯率暫用上次的數值。', tone: 'muted', duration: 4000 });
  });
  window.addEventListener('online', () => {
    toast({ title: '已恢復連線', tone: 'muted', duration: 2500 });
  });
}
