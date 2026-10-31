// 匯率：呼叫免金鑰公開 API，失敗時保留上次數值（使用者也可手動覆寫）
import { store } from './store.js';

const SOURCES = [
  {
    name: 'ExchangeRate-API',
    url: 'https://open.er-api.com/v6/latest/JPY',
    pick: (d) => d?.result === 'success' ? d.rates?.TWD : undefined,
  },
  {
    name: 'fawazahmed0 currency-api',
    url: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/jpy.min.json',
    pick: (d) => d?.jpy?.twd,
  },
];

const STALE_MS = 6 * 60 * 60 * 1000; // 6 小時內不重抓

async function fetchWithTimeout(url, ms = 8000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

// 依序嘗試各來源，成功就寫回設定
export async function refreshRate({ force = false } = {}) {
  const { settings } = store.state;
  if (!force && settings.rateSource === 'manual') return { skipped: 'manual' };
  if (!force && settings.rateUpdatedAt && Date.now() - settings.rateUpdatedAt < STALE_MS) return { skipped: 'fresh' };

  for (const src of SOURCES) {
    try {
      const rate = Number(src.pick(await fetchWithTimeout(src.url)));
      if (rate > 0 && rate < 10) {
        store.updateSettings({ rate, rateSource: 'api', rateUpdatedAt: Date.now(), rateProvider: src.name });
        return { ok: true, rate, provider: src.name };
      }
    } catch (err) {
      console.info(`匯率來源 ${src.name} 無法使用：`, err.message);
    }
  }
  return { ok: false };
}

export function setManualRate(rate) {
  store.updateSettings({ rate, rateSource: 'manual', rateUpdatedAt: Date.now(), rateProvider: '手動輸入' });
}
