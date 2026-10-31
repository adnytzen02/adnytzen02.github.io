// 狀態管理：所有資料存在 localStorage，提供訂閱機制讓畫面自動重繪
import { DEMO_ITEMS, DEFAULT_PACKING } from './data.js';
import { normStore } from './storeMatch.js';

const KEY = 'shopping-relics:v1';

const DEFAULT_SETTINGS = {
  tripName: '我的日本購物之旅',
  rate: 0.21, // 1 JPY = ? TWD
  rateSource: 'default', // default | api | manual
  rateUpdatedAt: null,
  budget: 150000, // JPY
  refundFeePct: 0, // 退稅手續費預設 %
  cardRebatePct: 0, // 刷卡淨回饋 %
  checkedLimit: 23,
  carryLimit: 7,
  checkedBase: 8, // 行李箱本身＋衣物等基本重量
  carryBase: 3,
  flightNote: '',
  ignoredStorePairs: [], // 使用者標記「不是同一家」的相似店名
};

const uid = () => (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`);

// 補齊商品欄位預設值，避免舊資料缺欄位
export function normalizeItem(raw = {}) {
  return {
    id: raw.id || uid(),
    name: String(raw.name ?? '').trim(),
    nameJa: String(raw.nameJa ?? '').trim(),
    brand: String(raw.brand ?? '').trim(),
    category: raw.category || 'other',
    priority: Number(raw.priority) || 2,
    qty: Math.max(1, Math.round(Number(raw.qty) || 1)),
    price: Math.max(0, Number(raw.price) || 0),
    priceIncludesTax: raw.priceIncludesTax !== false,
    taxRate: Number(raw.taxRate) === 8 ? 8 : 10,
    taxFree: raw.taxFree !== false,
    discountPct: Math.min(100, Math.max(0, Number(raw.discountPct) || 0)),
    refundFeePct: raw.refundFeePct === '' || raw.refundFeePct == null ? null : Number(raw.refundFeePct),
    area: String(raw.area ?? '').trim(),
    store: String(raw.store ?? '').trim(),
    planDate: raw.planDate || '',
    jan: String(raw.jan ?? '').replace(/\D/g, ''),
    weightKg: Math.max(0, Number(raw.weightKg) || 0),
    luggage: ['checked', 'carry', 'none'].includes(raw.luggage) ? raw.luggage : 'checked',
    fragile: Boolean(raw.fragile),
    liquid: Boolean(raw.liquid),
    battery: Boolean(raw.battery),
    packed: Boolean(raw.packed),
    purchased: Boolean(raw.purchased),
    purchasedAt: raw.purchasedAt || null,
    image: raw.image || '',
    note: String(raw.note ?? ''),
    demo: Boolean(raw.demo),
    createdAt: raw.createdAt || Date.now(),
  };
}

function load() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (parsed && Array.isArray(parsed.items)) {
      return {
        items: parsed.items.map(normalizeItem),
        settings: { ...DEFAULT_SETTINGS, ...parsed.settings },
        packing: Array.isArray(parsed.packing) ? parsed.packing : structuredClone(DEFAULT_PACKING),
      };
    }
  } catch { /* 讀取失敗就用預設值 */ }
  return { items: [], settings: { ...DEFAULT_SETTINGS }, packing: structuredClone(DEFAULT_PACKING) };
}

let state = load();
const listeners = new Set();

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch (err) {
    // 多半是照片太多導致容量滿
    console.warn('儲存失敗', err);
    window.dispatchEvent(new CustomEvent('store:quota'));
    return false;
  }
}

function commit() {
  const ok = persist();
  listeners.forEach((fn) => fn(state));
  return ok;
}

export const store = {
  get state() { return state; },
  subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },

  getItem(id) { return state.items.find((i) => i.id === id); },

  addItem(data) {
    const item = normalizeItem(data);
    state.items = [item, ...state.items];
    commit();
    return item;
  },
  updateItem(id, patch) {
    state.items = state.items.map((i) => (i.id === id ? normalizeItem({ ...i, ...patch, id }) : i));
    return commit();
  },
  removeItem(id) {
    const removed = this.getItem(id);
    state.items = state.items.filter((i) => i.id !== id);
    commit();
    return removed;
  },
  restoreItem(item, index = 0) {
    const items = [...state.items];
    items.splice(index, 0, item);
    state.items = items;
    commit();
  },
  togglePurchased(id, value) {
    const item = this.getItem(id);
    if (!item) return null;
    const purchased = value ?? !item.purchased;
    this.updateItem(id, { purchased, purchasedAt: purchased ? Date.now() : null });
    return this.getItem(id);
  },

  // 把某個店名（正規化後相同者）全部改成新名稱，一次寫入
  renameStore(from, to) {
    const key = normStore(from);
    state.items = state.items.map((i) => (normStore(i.store) === key ? normalizeItem({ ...i, store: to }) : i));
    return commit();
  },

  updateSettings(patch) {
    state.settings = { ...state.settings, ...patch };
    commit();
  },

  setPacking(packing) {
    state.packing = packing;
    commit();
  },

  loadDemo() {
    const now = Date.now();
    const demo = DEMO_ITEMS.map((d, i) => normalizeItem({ ...d, demo: true, createdAt: now - i * 1000 }));
    state.items = [...state.items, ...demo];
    commit();
  },
  clearDemo() {
    state.items = state.items.filter((i) => !i.demo);
    commit();
  },

  exportJSON() {
    return JSON.stringify({ app: 'shopping-relics', version: 1, exportedAt: new Date().toISOString(), ...state }, null, 2);
  },
  importJSON(text) {
    const data = JSON.parse(text);
    if (!data || !Array.isArray(data.items)) throw new Error('檔案格式不符');
    state = {
      items: data.items.map(normalizeItem),
      settings: { ...DEFAULT_SETTINGS, ...data.settings },
      packing: Array.isArray(data.packing) ? data.packing : structuredClone(DEFAULT_PACKING),
    };
    commit();
  },
  resetAll() {
    state = { items: [], settings: { ...DEFAULT_SETTINGS }, packing: structuredClone(DEFAULT_PACKING) };
    commit();
  },
};
