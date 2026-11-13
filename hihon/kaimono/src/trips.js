// 多趟旅程：把目前的旅程封存起來、開始新的一趟，之後可以切換回來。
// 封存的旅程另外存在 localStorage（不在主資料裡），所以雲端同步只同步「目前這趟」；
// 匯出備份時會一併帶出（見 views/settings.js）。
import { store } from './store.js';

const KEY = 'shopping-relics:trips';
const uid = () => (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`);

export function listTrips() {
  try {
    const list = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(list) ? list.filter((t) => t && t.data && Array.isArray(t.data.items)) : [];
  } catch { return []; }
}

export function saveTrips(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); return true; } catch { return false; } // 多半是容量滿
}

const snapshot = () => {
  const data = JSON.parse(store.dataJSON());
  return { id: uid(), name: data.settings.tripName, savedAt: Date.now(), count: data.items.length, data };
};

// 新旅程沿用的設定：匯率、行李限重、自訂店鋪等；收款、查驗、航班備註這些跟著旅程走的不沿用
const CARRY = ['rate', 'rateSource', 'rateUpdatedAt', 'rateProvider', 'budget', 'refundFeePct', 'cardRebatePct',
  'checkedLimit', 'carryLimit', 'checkedBase', 'carryBase', 'customStores', 'storeMeta', 'listView'];

// 封存目前旅程並開始新的一趟；存不進去（容量滿）回傳 false，目前的資料不會動
export function startNewTrip(name) {
  const cur = snapshot();
  if (!saveTrips([cur, ...listTrips()])) return false;
  const settings = { tripName: name };
  CARRY.forEach((k) => { if (k in cur.data.settings) settings[k] = cur.data.settings[k]; });
  store.importData({ items: [], settings });
  return true;
}

// 切換到封存的旅程：目前這趟有商品的話會先封存，再把選到的那趟載入
export function switchTrip(id) {
  const list = listTrips();
  const target = list.find((t) => t.id === id);
  if (!target) return false;
  const rest = list.filter((t) => t.id !== id);
  // 目前這趟沒有商品就不必封存（例如剛開的新旅程又切回去）
  if (!saveTrips(store.state.items.length ? [snapshot(), ...rest] : rest)) return false;
  store.importData(target.data);
  return true;
}

export function removeTrip(id) {
  return saveTrips(listTrips().filter((t) => t.id !== id));
}
