// 動漫街導覽：招牌點燈、街區路線列、店家篩選、複製日文店名、會話大字卡
// 一般 defer 腳本（不用 type="module"），直接打開本機檔案也能執行
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = $('.ak'); if (!root) return;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
root.classList.add('ak-armed');                    // 腳本有跑才套用「招牌熄燈→點亮」與篩選介面
const toast = (msg) => window.toast && window.toast(msg);

// ---------- 網站頁首高度 → 路線列黏貼位置 ----------
const header = $('.site-header');
const setTop = () => root.style.setProperty('--ak-top', (header ? header.offsetHeight : 0) + 'px');
setTop();
if (header && 'ResizeObserver' in window) new ResizeObserver(setTop).observe(header);

// ---------- 招牌：捲到畫面中時依序點亮 ----------
const signs = $$('.ak-sign');
if (reduce || !('IntersectionObserver' in window)) signs.forEach(s => s.classList.add('is-lit'));
else {
  const io = new IntersectionObserver(es => {
    if (!es.some(e => e.isIntersecting)) return;
    signs.forEach(s => s.classList.add('is-lit')); io.disconnect();
  }, { threshold: .3 });
  const box = $('.ak-signs'); if (box) io.observe(box);
}

// ---------- 路線列：目前所在的街區 ----------
const lineLinks = $$('[data-line]');
const districts = $$('.ak-district');
if ('IntersectionObserver' in window && lineLinks.length) {
  const seen = new Map();
  const spy = new IntersectionObserver(es => {
    es.forEach(e => seen.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
    // 取畫面中佔比最大的街區
    let best = '', ratio = 0;
    seen.forEach((r, id) => { if (r > ratio) { ratio = r; best = id; } });
    lineLinks.forEach(a => a.setAttribute('aria-current', a.dataset.line === best ? 'true' : 'false'));
    const cur = lineLinks.find(a => a.dataset.line === best);
    if (cur) { const ol = cur.closest('ol'); const r = cur.getBoundingClientRect(), b = ol.getBoundingClientRect();
      if (r.left < b.left || r.right > b.right) ol.scrollBy({ left: r.left - b.left - b.width / 3, behavior: reduce ? 'auto' : 'smooth' }); }
  }, { threshold: [0, .1, .25, .5, .75], rootMargin: '-20% 0px -40% 0px' });
  districts.forEach(d => spy.observe(d));
}

// ---------- 店家篩選 ----------
const shops = $$('.ak-shop');
const form = $('.ak-filter');
const qInput = $('#ak-q');
const countEl = $('[data-ak-count]');
const resetBtn = $('[data-ak-reset]');
const state = { city: '', tag: '', q: '' };
const match = (s, st = state) => {
  const d = s.dataset;
  if (st.city && d.city !== st.city) return false;
  if (st.tag && !d.tags.split(' ').includes(st.tag)) return false;
  if (st.q) { const terms = st.q.toLowerCase().split(/\s+/).filter(Boolean); if (!terms.every(t => d.search.includes(t))) return false; }
  return true;
};
const countWith = (k, v) => shops.filter(s => match(s, { ...state, [k]: v })).length;
function refreshChips() {
  [['ak-city', 'city'], ['ak-tag', 'tag']].forEach(([name, key]) => $$(`input[name="${name}"]`).forEach(inp => {
    const n = countWith(key, inp.value), lab = inp.closest('.ak-chip');
    let b = $('.ak-chip__n', lab);
    if (!b) { b = document.createElement('small'); b.className = 'ak-chip__n'; inp.nextElementSibling.append(b); }
    b.textContent = n;
    const zero = n === 0 && !inp.checked;              // 選了會變 0 處的選項先停用
    inp.disabled = zero; lab.classList.toggle('is-zero', zero);
  }));
}
function apply() {
  let n = 0;
  shops.forEach(s => { const ok = match(s); s.hidden = !ok; if (ok) n++; });
  districts.forEach(d => {
    const vis = $$('.ak-shop', d).filter(s => !s.hidden).length;
    const cityOut = state.city && d.dataset.city !== state.city;
    d.hidden = !!cityOut || (vis === 0 && !!(state.tag || state.q));
    $('.ak-nomatch', d).hidden = vis > 0;
    const c = $(`[data-count-for="${d.id}"]`); if (c) c.textContent = vis + ' 處';
    const link = lineLinks.find(a => a.dataset.line === d.id); if (link) link.classList.toggle('is-empty', d.hidden);
  });
  const plus = $('#ak-tokyo-plus'); if (plus) plus.hidden = !!(state.city && state.city !== 'tokyo');
  if (countEl) countEl.textContent = n;
  if (resetBtn) resetBtn.hidden = !(state.city || state.tag || state.q);
  refreshChips();
}
if (form) {
  form.addEventListener('change', e => {
    const i = e.target; if (i.type !== 'radio') return;
    if (i.name === 'ak-city') state.city = i.value;
    if (i.name === 'ak-tag') state.tag = i.value;
    apply();
  });
  let qt = 0;
  qInput.addEventListener('input', () => { clearTimeout(qt); qt = setTimeout(() => { state.q = qInput.value.trim(); apply(); }, 150); });
  resetBtn.addEventListener('click', () => {
    Object.assign(state, { city: '', tag: '', q: '' }); qInput.value = '';
    $$('input[type=radio]', form).forEach(i => { i.checked = i.value === ''; });
    apply(); qInput.focus();
  });
  apply();
}

// 網址錨點指到被藏起來的店家時，先清除條件再捲過去
function reveal(id) {
  const el = document.getElementById(id); if (!el || !el.classList.contains('ak-shop')) return;
  if (el.hidden || el.closest('[hidden]')) resetBtn && resetBtn.click();
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    if (!reduce) { el.classList.remove('is-flash'); void el.offsetWidth; el.classList.add('is-flash'); }
  });
}
const fromHash = () => { const id = decodeURIComponent(location.hash.slice(1)); if (id.startsWith('shop-')) reveal(id); };
addEventListener('hashchange', fromHash);
if (location.hash) setTimeout(fromHash, 60);

// ---------- 複製日文店名 ----------
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (_) { /* 沒有權限時改用舊方法 */ }
  const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0;left:-9999px';
  document.body.append(ta); ta.select();
  let ok = false; try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
  ta.remove(); return ok;
}
$$('.ak-copy').forEach(b => {
  b.hidden = false;
  b.addEventListener('click', async () => {
    const ok = await copyText(b.dataset.copy);
    toast(ok ? `已複製：${b.dataset.copy}` : '無法複製，請長按店名手動複製。');
    if (ok) { b.classList.add('is-done'); setTimeout(() => b.classList.remove('is-done'), 1600); }
  });
});

// ---------- 會話大字卡 ----------
const dlg = $('#ak-say');
if (dlg && dlg.showModal) {
  let opener = null;
  $$('.ak-say-btn').forEach(b => {
    b.hidden = false;
    b.addEventListener('click', () => {
      const li = b.closest('.ak-phrase'); opener = b;
      $('.ak-say__ja', dlg).textContent = $('.ak-phrase__ja', li).textContent;
      $('.ak-say__ro', dlg).textContent = $('.ak-phrase__ro', li).textContent;
      $('.ak-say__zh', dlg).textContent = $('.ak-phrase__zh', li).textContent;
      dlg.showModal(); $('[data-say-close]', dlg).focus();
    });
  });
  const close = () => { dlg.close(); };
  $('[data-say-close]', dlg).addEventListener('click', close);
  dlg.addEventListener('click', e => { if (e.target === dlg) close(); });    // 點卡片外關閉
  dlg.addEventListener('close', () => { if (opener) opener.focus(); });
}

})();
