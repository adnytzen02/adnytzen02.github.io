// 店名比對：正規化後相同就視為同一家；相似時提示使用者確認

// 嚴格正規化：全形轉半形、轉小寫、去掉空白與標點。結果相同就自動視為同一家
export function normStore(name) {
  return String(name ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\s・·•\-‐–—_()（）「」『』[\]【】.,，、。/／|]/g, '');
}

// 寬鬆正規化：再去掉結尾的「店／本店／本館」，只用來「提示可能相同」，不自動合併
const looseStore = (name) => normStore(name).replace(/(本店|本館|店舗|店)$/, '');

// 判斷兩個店名是否「可能是同一家」（但不完全相同）
export function similarStore(a, b) {
  if (!normStore(a) || normStore(a) === normStore(b)) return false;
  const na = looseStore(a);
  const nb = looseStore(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  const short = na.length <= nb.length ? na : nb;
  const long = na.length <= nb.length ? nb : na;
  // 一個包含另一個（例：「三越銀座」與「三越銀座本館2f」）
  if (short.length >= 3 && long.includes(short)) return true;
  // 用到的字幾乎一樣、只是順序不同（例：「銀座三越」與「三越銀座」）
  const sa = new Set(na);
  const sb = new Set(nb);
  const inter = [...sa].filter((c) => sb.has(c)).length;
  const jaccard = inter / new Set([...sa, ...sb]).size;
  return short.length >= 2 && jaccard >= 0.75 && Math.abs(na.length - nb.length) <= 3;
}

// 從已有店名中找出和輸入相似的（不含完全相同的）
export function findSimilarStores(input, stores) {
  const n = normStore(input);
  if (!n) return [];
  const seen = new Set();
  return stores.filter((s) => {
    const k = normStore(s);
    if (k === n || seen.has(k)) return false;
    seen.add(k);
    return similarStore(input, s);
  });
}

// 已存在、可能是同一家的店名配對（排除使用者標記過「不是同一家」的）
export function similarStorePairs(stores, ignored = []) {
  const names = [...new Map(stores.filter(Boolean).map((s) => [normStore(s), s.trim()])).values()];
  const pairs = [];
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      if (!similarStore(names[i], names[j])) continue;
      const key = pairKey(names[i], names[j]);
      if (!ignored.includes(key)) pairs.push([names[i], names[j]]);
    }
  }
  return pairs;
}

export const pairKey = (a, b) => [normStore(a), normStore(b)].sort().join('｜');
