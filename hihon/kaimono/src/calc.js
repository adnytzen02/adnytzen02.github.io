// 金額、免稅、行李相關計算（純函式，不碰 DOM）
import { normStore } from './storeMatch.js';
import { catalogOf } from './storeCatalog.js';

export const TAX_FREE_MIN = 5000; // 同一天同一店家，未稅合計 ¥5,000 以上
export const REFUND_SYSTEM_START = '2026-11-01'; // 日本改採「先付稅、出境後退稅」的リファンド方式

const round = (n) => Math.round(n);

// 實際要放哪個行李：鋰電池必須手提；液體、刀剪必須託運；其他依使用者設定
export function effLuggage(item) {
  if (item.battery) return 'carry';
  if (item.blade) return 'checked';
  // 出境管制區免稅店買的液體會裝在密封袋，可依規定手提，不強制託運
  if (item.liquid && !(item.purchased && catalogOf(item.purchasedStore)?.dutyFree)) return 'checked';
  return item.luggage;
}

// 本機日期（YYYY-MM-DD），用來判斷「同一天」
export const dayKey = (ts) => {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// 單一商品的金額拆解（不含店家門檻判斷）
export function itemMoney(item, settings) {
  const rate = item.taxRate / 100;
  const unitExcl = item.priceIncludesTax ? item.price / (1 + rate) : item.price;
  const off = 1 - item.discountPct / 100;
  const lineExcl = unitExcl * off * item.qty; // 折扣後未稅小計
  const tax = lineExcl * rate;
  const lineIncl = lineExcl + tax; // 店頭實付（含稅）
  // 手續費：商品自訂 → 店家內建（例如唐吉訶德 0%）→ 設定的預設值
  const feePct = item.refundFeePct ?? catalogOf(item.purchasedStore || item.store)?.refundFeePct ?? settings.refundFeePct ?? 0;
  const listIncl = unitExcl * (1 + rate) * item.qty; // 折扣前含稅
  return {
    unitExcl: round(unitExcl),
    unitIncl: round(unitExcl * (1 + rate)),
    listIncl: round(listIncl),
    discount: round(listIncl - lineIncl),
    lineExcl: round(lineExcl),
    tax: round(tax),
    pay: round(lineIncl),
    fee: round(lineIncl * (feePct / 100)),
    feePct,
  };
}

// 店名用正規化後的值分組：全形半形、大小寫、空白不同仍算同一家
// 已買用實際購買日；未買有填預計日期就用該日，沒填則視為「今天」，和今天已買的合併計算（邊買邊勾選時最直覺）
const storeKey = (item) => `${normStore(item.store)}|${item.purchased && item.purchasedAt ? dayKey(item.purchasedAt) : (item.planDate || dayKey(Date.now()))}`;

// 依「店家＋預計日期」分組，判斷每組是否達免稅門檻
export function storeGroups(items, settings) {
  const groups = new Map();
  for (const item of items) {
    // 沒填店家的商品各自獨立判斷，避免誤判合併達標
    const key = item.store.trim() ? storeKey(item) : `__solo__${item.id}`;
    if (!groups.has(key)) {
      groups.set(key, {
        key, store: item.store.trim(), area: item.area,
        date: item.purchased && item.purchasedAt ? dayKey(item.purchasedAt) : (item.planDate || ''),
        items: [], eligibleExcl: 0, totalPay: 0,
      });
    }
    const g = groups.get(key);
    const m = itemMoney(item, settings);
    g.items.push(item);
    g.totalPay += m.pay;
    if (item.taxFree) g.eligibleExcl += m.lineExcl;
    if (!g.area && item.area) g.area = item.area;
  }
  for (const g of groups.values()) {
    g.hasTaxFreeItems = g.items.some((i) => i.taxFree);
    g.eligible = g.hasTaxFreeItems && g.eligibleExcl >= TAX_FREE_MIN;
    g.shortfall = Math.max(0, TAX_FREE_MIN - g.eligibleExcl);
    g.progress = Math.min(1, g.eligibleExcl / TAX_FREE_MIN);
    // 沒填日期卻合併了多件：若其實分不同天買，門檻可能被高估
    g.undatedMerge = Boolean(g.store) && !g.date && g.hasTaxFreeItems && g.items.filter((i) => i.taxFree).length >= 2;
    // 合併後才達標（單件都未滿門檻）時，日期影響最大
    g.mergeNeeded = g.undatedMerge && g.eligible
      && g.items.every((i) => !i.taxFree || itemMoney(i, settings).lineExcl < TAX_FREE_MIN);
  }
  return groups;
}

// 回傳每件商品完整試算（含是否可退稅）
export function analyze(items, settings) {
  const groups = storeGroups(items, settings);
  const byItem = new Map();
  for (const g of groups.values()) {
    for (const item of g.items) {
      const m = itemMoney(item, settings);
      const refundable = item.taxFree && g.eligible;
      const refund = refundable ? Math.max(0, m.tax - m.fee) : 0;
      byItem.set(item.id, {
        ...m,
        refundable,
        refund,
        net: m.pay - refund,
        group: g,
        weight: item.weightKg * item.qty,
      });
    }
  }
  return { groups, byItem };
}

// 全站總覽數字
export function summarize(state) {
  const { items, settings } = state;
  const { groups, byItem } = analyze(items, settings);
  const s = {
    count: items.length,
    purchasedCount: 0,
    pendingCount: 0,
    pay: 0, paid: 0, pending: 0,
    refund: 0, refundPaid: 0, net: 0,
    discount: 0,
    weightChecked: 0, weightCarry: 0, // 全部買完的商品重量
    weightCheckedNow: 0, weightCarryNow: 0, // 只算已買的
    packedCount: 0, packableCount: 0,
    groups, byItem,
  };
  for (const item of items) {
    const a = byItem.get(item.id);
    s.pay += a.pay;
    s.refund += a.refund;
    s.net += a.net;
    s.discount += a.discount;
    if (item.purchased) {
      s.purchasedCount += 1;
      s.paid += a.pay;
      s.refundPaid += a.refund;
    } else {
      s.pendingCount += 1;
      s.pending += a.pay;
    }
    const lug = effLuggage(item);
    if (lug === 'checked') s.weightChecked += a.weight;
    if (lug === 'carry') s.weightCarry += a.weight;
    if (item.purchased && lug === 'checked') s.weightCheckedNow += a.weight;
    if (item.purchased && lug === 'carry') s.weightCarryNow += a.weight;
    if (lug !== 'none') {
      s.packableCount += 1;
      if (item.packed) s.packedCount += 1;
    }
  }
  s.remaining = settings.budget - s.pay;
  s.budgetUsedPct = settings.budget > 0 ? s.paid / settings.budget : 0;
  s.budgetPlannedPct = settings.budget > 0 ? s.pay / settings.budget : 0;
  s.rebate = Math.round(s.pay * (settings.cardRebatePct / 100));
  s.totalChecked = settings.checkedBase + s.weightChecked;
  s.totalCarry = settings.carryBase + s.weightCarry;
  s.totalCheckedNow = settings.checkedBase + s.weightCheckedNow;
  s.totalCarryNow = settings.carryBase + s.weightCarryNow;
  s.undatedGroups = [...groups.values()].filter((g) => g.undatedMerge);
  s.eligibleStores = [...groups.values()].filter((g) => g.eligible).length;
  s.taxFreeStores = [...groups.values()].filter((g) => g.hasTaxFreeItems && g.store).length;
  return s;
}

// 單筆退稅試算（預算頁的試算盤用）
export function quickCalc({ price, includesTax, taxRate, discountPct, feePct }) {
  const rate = taxRate / 100;
  const excl = (includesTax ? price / (1 + rate) : price) * (1 - discountPct / 100);
  const tax = excl * rate;
  const pay = excl + tax;
  const eligible = excl >= TAX_FREE_MIN;
  const fee = pay * (feePct / 100);
  const refund = eligible ? Math.max(0, tax - fee) : 0;
  const listIncl = (includesTax ? price : price * (1 + rate));
  return {
    excl: round(excl), tax: round(tax), pay: round(pay), fee: round(fee),
    refund: round(refund), net: round(pay - refund), eligible,
    saved: round(listIncl - (pay - refund)),
  };
}

// 回台灣入境的行李免稅額（每人，完稅價格總值；菸酒與管制品另計）
// 依據：入境旅客攜帶行李物品報驗稅放辦法第 11 條，查證日見 CUSTOMS_VERIFIED
export const TW_DUTY_FREE_TWD = 35000;
export const CUSTOMS_VERIFIED = '2026/11/11';

// 入境免稅額試算：以「退稅後的實際成本 × 目前匯率」估算會帶回台灣的商品總值。
// 酒類不計入（另有 1.5 公升的免稅量）；設定為「不放行李」的商品也不計入。
// 海關是以完稅價格認定，這裡只是估算。
export function customsEstimate(state, sum) {
  const { rate } = state.settings;
  const r = { now: 0, planned: 0, count: 0, liquorCount: 0, limit: TW_DUTY_FREE_TWD };
  for (const item of state.items) {
    if (effLuggage(item) === 'none') continue;
    if (item.category === 'liquor') { if (item.purchased) r.liquorCount += 1; continue; }
    const value = sum.byItem.get(item.id).net * rate;
    r.planned += value;
    if (item.purchased) { r.now += value; r.count += 1; }
  }
  r.now = Math.round(r.now);
  r.planned = Math.round(r.planned);
  r.over = Math.max(0, r.now - r.limit);
  r.plannedOver = Math.max(0, r.planned - r.limit);
  return r;
}
