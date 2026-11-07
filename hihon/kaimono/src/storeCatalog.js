// 常用店鋪快選清單：依通路分組。優惠資訊為查證日當下的公開資料，可能隨時變動，畫面上一律提示「以店家公告為準」
// 查不到可靠來源的店家，優惠欄位留空（不臆測）。
import { normStore } from './storeMatch.js';

export const CATALOG_VERIFIED = '2026/11/7';
export const ANY_STORE = '不限店鋪（比價中）';

const DEPT_FEE_NOTE = '百貨退稅多半會收手續費，新制費率依店家公告（11/1 首日回報：高島屋 1.55%、大丸／松坂屋 2.3%）。';

export const STORE_GROUPS = [
  {
    id: 'drug', label: '藥妝美妝', icon: 'spa',
    stores: [
      { name: '松本清' },
      { name: '大國藥妝' },
      {
        name: 'Sundrug（尚都樂客）',
        coupons: [{ pct: 3, min: 10000 }, { pct: 5, min: 30000 }, { pct: 7, min: 50000 }],
        couponNote: '免稅商品未稅滿 ¥10,000／¥30,000／¥50,000，分別再折 3%／5%／7%；專櫃保養品、菸酒等除外，結帳前出示。',
        couponUrl: 'https://app.likejapan.com/en-us/coupon/SUNDRUG-pharmacy-coupon-7percent',
        source: 'LikeJapan（2025/12 更新）',
      },
      { name: 'OS Drug', noTaxFree: true, note: '依你的備註：不辦免稅，但現金價很低。' },
      { name: '@cosme TOKYO' },
    ],
  },
  {
    id: 'variety', label: '綜合賣場／雜貨', icon: 'storefront',
    stores: [
      {
        name: '唐吉訶德',
        coupons: [{ pct: 5, min: 10000 }, { pct: 7, min: 30000 }],
        couponNote: '免稅商品未稅滿 ¥10,000 再折 5%、滿 ¥30,000 折 7%；酒、菸、遊戲主機等除外。需結帳前出示即時條碼，截圖無效。',
        couponUrl: 'https://livejapan.com/public/operation/coupon/donki/ja.html',
        source: 'LIVE JAPAN（2026/4/28 更新）',
        refundFeePct: 0,
        feeNote: '新制退稅手續費 0 元：母公司 PPIH 宣布 2026/11/1 起全日本門市由店家吸收（期間與條件可能調整）。若到機場領現金，機台業者仍會另收服務費。',
      },
      { name: 'LoFt' },
      { name: 'Hands（東急手創館）' },
      { name: '無印良品' },
      { name: '3COINS' },
      { name: 'Life 超市' },
      { name: '業務超市' },
    ],
  },
  {
    id: 'tech', label: '電器／動漫', icon: 'devices',
    stores: [
      {
        name: 'Bic Camera',
        coupons: [
          { pct: 7, min: 5000, label: '家電・相機・手錶', categories: ['tech', 'craft'] },
          { pct: 5, min: 5000, label: '藥妝・日用品', categories: ['beauty', 'other', 'fashion'] },
          { pct: 3, min: 5000, label: '日本酒', categories: ['liquor'] },
        ],
        couponNote: '免稅商品未稅滿 ¥5,000，依類別再折 7%（家電、相機、手錶）／5%（藥妝、日用品）／3%（日本酒）；Apple、遊戲主機等除外。官方頁面標示有效至 2026/8/31，請確認新版優惠券。',
        couponUrl: 'https://livejapan.com/public/operation/coupon/biccamera/en.html',
        source: 'LIVE JAPAN',
        refundFeePct: 0,
        feeNote: '新制退稅手續費 0 元（依 2026/10 報導，由店家吸收，條件以店內公告為準）。若到機場領現金，機台業者仍會另收服務費。',
      },
      {
        name: 'Yodobashi（友都八喜）',
        feeNote: '部分大型門市設有 Global Blue 市區現金退稅櫃台，可在店內先領現金（需登記信用卡擔保）；出境時仍要在機場完成海關確認，否則會從信用卡扣回。店家手續費首日回報為 0%（尚待官方公告）。',
      },
      { name: 'Animate（安利美特）' },
      { name: '秋葉原專賣店' },
      { name: '中野百老匯' },
      { name: '寶可夢中心' },
      { name: '任天堂商店' },
    ],
  },
  {
    id: 'gift', label: '伴手禮／百貨', icon: 'bakery_dining',
    stores: [
      { name: '成田機場免稅店', dutyFree: true },
      { name: '羽田機場免稅店', dutyFree: true },
      { name: '關西機場免稅店', dutyFree: true },
      { name: '東京車站一番街' },
      { name: '伊勢丹', dept: true },
      { name: '高島屋', dept: true, feeNote: '新制退稅公司為 Global Blue，手續費 1.55%（11/1 首日回報，以店內公告為準）。' },
      { name: '大丸', dept: true, feeNote: '新制退稅公司為 Global Blue，大丸／松坂屋手續費 2.3%（11/1 首日回報，以店內公告為準）。' },
      {
        name: '阪急百貨', dept: true,
        couponNote: '出示護照可領外國旅客 5% 優待券，發券起 7 天內可用；特價品、食品、未稅 ¥1,000 以下商品除外。',
        couponUrl: 'https://global.hankyu-hanshin-dept.co.jp/store/hankyuhonten/service/',
        source: '阪急百貨官網',
      },
    ],
  },
  {
    id: 'cvs', label: '便利商店', icon: 'local_convenience_store',
    stores: [{ name: '7-11' }, { name: 'Lawson' }, { name: 'FamilyMart' }],
  },
];

// 依店名查詢內建資料（全形半形、空白不同也找得到）
const index = new Map();
for (const g of STORE_GROUPS) for (const s of g.stores) index.set(normStore(s.name), { ...s, group: g.id });

export function catalogOf(name) {
  return index.get(normStore(name)) ?? null;
}

// 合併「內建資料」與「使用者自訂的店鋪設定」
export function storeInfo(name, storeMeta = {}) {
  const base = catalogOf(name) ?? {};
  const custom = storeMeta[normStore(name)] ?? {};
  const info = { ...base, ...custom, name };
  if (base.dept && !info.feeNote) info.feeNote = DEPT_FEE_NOTE;
  if (base.dutyFree) info.dutyNote = '出境管制區內的免稅店售價已不含消費稅，不需另辦退稅。';
  return info;
}

// 依商品分類挑出該店適用的優惠（Bic Camera 這類依類別不同折扣）
export function couponForCategory(info, category) {
  if (!info?.coupons?.length) return null;
  const byCat = info.coupons.find((c) => c.categories?.includes(category));
  return byCat ?? null;
}
