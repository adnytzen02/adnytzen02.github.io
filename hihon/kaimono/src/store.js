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
  customStores: [], // 自訂店鋪標籤（輸入一次就記住）
  storeMeta: {}, // 各店自訂設定：{ [正規化店名]: { couponUrl, couponNote } }
  paidFriends: {}, // 代購已收款：{ 朋友名: true }
  listView: 'store', // 採買清單視角：store 店鋪｜category 分類
};

const uid = () => (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`);

// 補齊商品欄位預設值，避免舊資料缺欄位
export function normalizeItem(raw = {}) {
  const clean = (v) => String(v ?? '').trim();
  let stores = Array.isArray(raw.stores) ? raw.stores.map(clean).filter(Boolean) : (clean(raw.store) ? [clean(raw.store)] : []);
  // 去除重複（全形半形、空白不同也算重複），最多 3 家
  stores = stores.filter((s, i) => stores.findIndex((x) => normStore(x) === normStore(s)) === i).slice(0, 3);
  const anyStore = Boolean(raw.anyStore) && stores.length === 0;
  const purchased = Boolean(raw.purchased);
  const purchasedStore = purchased ? clean(raw.purchasedStore ?? (Array.isArray(raw.stores) ? '' : raw.store)) : '';
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
    taxRate: [1, 8].includes(Number(raw.taxRate)) ? Number(raw.taxRate) : 10, // 10% 一般、8% 食品、1% 食品（2027/4/1 起預計）
    taxFree: raw.taxFree !== false,
    discountPct: Math.min(100, Math.max(0, Number(raw.discountPct) || 0)),
    refundFeePct: raw.refundFeePct === '' || raw.refundFeePct == null ? null : Number(raw.refundFeePct),
    area: String(raw.area ?? '').trim(),
    // 候選店鋪（最多 3 家，第一家為主選）；舊資料只有單一 store 時自動轉換
    stores,
    anyStore,
    // 實際購買的店家（勾選已入手時記錄）
    purchasedStore,
    // 計算用的「有效店家」：已買用購買店家，未買用主選店家
    store: purchased ? (purchasedStore || stores[0] || '') : (stores[0] || ''),
    buyFor: String(raw.buyFor ?? '').replace(/^[@＠]+/, '').trim(), // 代購對象，空白為自用
    planDate: raw.planDate || '',
    jan: String(raw.jan ?? '').replace(/\D/g, ''),
    weightKg: Math.max(0, Number(raw.weightKg) || 0),
    luggage: ['checked', 'carry', 'none'].includes(raw.luggage) ? raw.luggage : 'checked',
    fragile: Boolean(raw.fragile),
    liquid: Boolean(raw.liquid),
    battery: Boolean(raw.battery),
    blade: Boolean(raw.blade), // 刀剪類：必須託運
    packed: Boolean(raw.packed),
    purchased,
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
  // 勾選已入手時記錄在哪家買到（storeName）；取消勾選則清除
  togglePurchased(id, value, storeName) {
    const item = this.getItem(id);
    if (!item) return null;
    const purchased = value ?? !item.purchased;
    this.updateItem(id, {
      purchased,
      purchasedAt: purchased ? Date.now() : null,
      purchasedStore: purchased ? (storeName ?? item.stores[0] ?? '') : '',
    });
    return this.getItem(id);
  },

  // 記住自訂店鋪標籤
  addCustomStore(name) {
    const n = String(name ?? '').trim();
    if (!n || state.settings.customStores.some((s) => normStore(s) === normStore(n))) return;
    state.settings = { ...state.settings, customStores: [...state.settings.customStores, n] };
    commit();
  },
  setStoreMeta(name, patch) {
    const key = normStore(name);
    const meta = { ...state.settings.storeMeta, [key]: { ...state.settings.storeMeta[key], ...patch } };
    state.settings = { ...state.settings, storeMeta: meta };
    commit();
  },

  // 把某個店名（正規化後相同者）全部改成新名稱，一次寫入
  renameStore(from, to) {
    const key = normStore(from);
    const swap = (s) => (normStore(s) === key ? to : s);
    state.items = state.items.map((i) => normalizeItem({ ...i, stores: i.stores.map(swap), purchasedStore: swap(i.purchasedStore) }));
    state.settings = { ...state.settings, customStores: state.settings.customStores.map(swap) };
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
