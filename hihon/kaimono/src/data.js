// 靜態設定資料：分類、地區、常用日文短語、示範資料

export const CATEGORIES = [
  { id: 'beauty', label: '藥妝美肌', icon: 'spa' },
  { id: 'luxury', label: '專櫃精品', icon: 'diamond' },
  { id: 'souvenir', label: '必買伴手禮', icon: 'bakery_dining' },
  { id: 'tech', label: '3C 家電', icon: 'devices' },
  { id: 'anime', label: '動漫限定', icon: 'sports_esports' },
  { id: 'craft', label: '頂級工藝', icon: 'handyman' },
  { id: 'liquor', label: '珍稀銘酒', icon: 'liquor' },
  { id: 'fashion', label: '服飾雜貨', icon: 'checkroom' },
  { id: 'other', label: '其他', icon: 'category' },
];

export const categoryOf = (id) => CATEGORIES.find((c) => c.id === id) ?? CATEGORIES.at(-1);

// 地區建議清單（表單用 datalist，仍可自由輸入）
export const AREA_SUGGESTIONS = [
  '銀座', '新宿', '澀谷', '池袋', '秋葉原', '上野・淺草', '東京車站', '表參道・原宿', '台場',
  '大阪梅田', '心齋橋・難波', '京都', '神戶', '名古屋', '福岡天神', '札幌',
  '成田機場', '羽田機場', '關西機場',
];

export const PRIORITIES = [
  { value: 3, stars: '★★★', label: '必買' },
  { value: 2, stars: '★★', label: '心願' },
  { value: 1, stars: '★', label: '順便' },
];

export const priorityOf = (v) => PRIORITIES.find((p) => p.value === Number(v)) ?? PRIORITIES[1];

// 指差會話短語：ja 為給店員看的日文，zh 為中文對照
export const PHRASES = [
  { ja: 'こちらの商品の在庫はありますか？', zh: '請問這個商品還有現貨嗎？' },
  { ja: '免税でお願いします。パスポートはこちらです。', zh: '我要辦理免稅，這是我的護照。' },
  { ja: '免税カウンターはどこですか？', zh: '請問免稅櫃台在哪裡？' },
  { ja: 'テスターを試してもいいですか？', zh: '可以試用試用品嗎？' },
  { ja: 'このクーポンは使えますか？', zh: '請問這張優惠券可以使用嗎？' },
  { ja: 'クレジットカードで、一括払いでお願いします。', zh: '我用信用卡一次付清。' },
  { ja: 'プレゼント用に包装していただけますか？', zh: '可以幫我做禮物包裝嗎？' },
  { ja: '割れ物なので、しっかり包んでいただけますか？', zh: '這是易碎品，可以幫我包得牢一點嗎？' },
  { ja: '袋を分けていただけますか？', zh: '可以幫我分開裝袋嗎？' },
  { ja: 'レシートをください。', zh: '請給我收據。' },
];

// 示範資料：僅供體驗操作，價格為示意數字，不代表實際售價
export const DEMO_ITEMS = [
  {
    name: '山崎 單一麥芽威士忌 700ml', nameJa: 'シングルモルトウイスキー 山崎 700ml', brand: 'SUNTORY',
    category: 'liquor', priority: 3, qty: 1, price: 7700, priceIncludesTax: true, taxRate: 10,
    area: '羽田機場', stores: ['羽田機場免稅店'], taxFree: false, weightKg: 1.4, luggage: 'carry', fragile: true, liquid: true,
    purchased: true, purchasedStore: '羽田機場免稅店', note: '出境管制區購買，可隨身帶上機。',
  },
  {
    name: 'EVE QUICK 止痛錠 40 錠', nameJa: 'イブクイック頭痛薬DX 40錠', brand: 'SSP',
    category: 'beauty', priority: 3, qty: 3, price: 1480, priceIncludesTax: true, taxRate: 10, taxFree: true,
    area: '新宿', stores: ['松本清'], buyFor: '小美', weightKg: 0.05, luggage: 'checked',
  },
  {
    name: '參天眼藥水', nameJa: 'サンテ 目薬', brand: 'Santen',
    category: 'beauty', priority: 2, qty: 2, price: 1280, priceIncludesTax: true, taxRate: 10, taxFree: true,
    area: '新宿', stores: ['松本清', '大國藥妝'], weightKg: 0.03, luggage: 'checked', liquid: true,
    note: '兩家都有賣，哪家便宜就在哪買。',
  },
  {
    name: '小形羊羹 10 入', nameJa: '小形羊羹 10本入', brand: '虎屋 TORAYA',
    category: 'souvenir', priority: 2, qty: 2, price: 3240, priceIncludesTax: true, taxRate: 8, taxFree: true,
    area: '銀座', stores: ['伊勢丹'], buyFor: '媽媽', weightKg: 0.6, luggage: 'checked', fragile: true,
    note: '送禮用，請店家附紙袋。',
  },
  {
    name: '資生堂 精華液 30ml', nameJa: '資生堂 美容液 30ml', brand: 'SHISEIDO',
    category: 'luxury', priority: 3, qty: 1, price: 38500, priceIncludesTax: true, taxRate: 10, taxFree: true,
    discountPct: 5, area: '銀座', stores: ['伊勢丹'], buyFor: '小美', weightKg: 0.4, luggage: 'checked', fragile: true, liquid: true,
    purchased: true, purchasedStore: '伊勢丹',
  },
  {
    name: 'Tanker 2Way 公事包', nameJa: 'タンカー 2WAYブリーフケース', brand: 'PORTER',
    category: 'fashion', priority: 2, qty: 1, price: 42000, priceIncludesTax: true, taxRate: 10, taxFree: true,
    area: '澀谷', stores: ['PORTER 澀谷'], weightKg: 1.0, luggage: 'checked',
  },
  {
    name: 'nanocare 吹風機', nameJa: 'ヘアードライヤー ナノケア', brand: 'Panasonic',
    category: 'tech', priority: 2, qty: 1, price: 38610, priceIncludesTax: true, taxRate: 10, taxFree: true,
    discountPct: 7, area: '有樂町', stores: ['Bic Camera', 'Yodobashi（友都八喜）'], weightKg: 0.9, luggage: 'checked',
    note: '確認是否有海外電壓版本。',
  },
  {
    name: '任天堂 限定周邊', nameJa: 'Nintendo TOKYO 限定グッズ', brand: 'Nintendo TOKYO',
    category: 'anime', priority: 1, qty: 1, price: 5500, priceIncludesTax: true, taxRate: 10, taxFree: true,
    area: '澀谷', stores: ['任天堂商店'], buyFor: '阿哲', weightKg: 0.8, luggage: 'checked',
  },
  {
    name: '紅茶巧克力', nameJa: 'ロイヤルモンターニュ', brand: 'LeTAO',
    category: 'souvenir', priority: 1, qty: 4, price: 918, priceIncludesTax: true, taxRate: 8,
    area: '羽田機場', stores: ['羽田機場免稅店'], taxFree: false, weightKg: 0.15, luggage: 'carry',
    purchased: true, purchasedStore: '羽田機場免稅店',
  },
  {
    name: '抹茶粉 40g', nameJa: '抹茶 40g缶', brand: '一保堂茶舗',
    category: 'souvenir', priority: 2, qty: 2, price: 2160, priceIncludesTax: true, taxRate: 8, taxFree: false,
    area: '京都', stores: ['一保堂茶舗 京都本店'], weightKg: 0.12, luggage: 'checked',
    note: '單店未達免稅門檻也沒關係。',
  },
  {
    name: '指甲剪', nameJa: '爪切り', brand: '貝印 KAI',
    category: 'craft', priority: 2, qty: 2, price: 1100, priceIncludesTax: true, taxRate: 10, taxFree: true,
    area: '澀谷', stores: ['Hands（東急手創館）', 'LoFt'], buyFor: '阿哲', weightKg: 0.05, luggage: 'checked', blade: true,
    purchased: true, purchasedStore: 'Hands（東急手創館）',
  },
  {
    name: '合利他命 EX Plus', nameJa: 'アリナミンEXプラス', brand: 'Alinamin',
    category: 'beauty', priority: 3, qty: 1, price: 6578, priceIncludesTax: true, taxRate: 10, taxFree: true,
    anyStore: true, weightKg: 0.2, luggage: 'checked', note: '到處都有，看到便宜就買。',
  },
  {
    name: '休足時間 貼布', nameJa: '休足時間', brand: 'Lion',
    category: 'beauty', priority: 1, qty: 3, price: 1078, priceIncludesTax: true, taxRate: 10, taxFree: true,
    area: '澀谷', stores: ['唐吉訶德'], weightKg: 0.15, luggage: 'checked',
  },
];

// 打包清單預設項目
export const DEFAULT_PACKING = [
  { text: '護照', done: false },
  { text: '行動電源（隨身、最多 2 顆，機上不能用）', done: false },
  { text: '行李秤', done: false },
  { text: '易碎品用氣泡袋', done: false },
];
