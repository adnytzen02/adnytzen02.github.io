// 水族館與動物園・金色大廳：夜色光場、禮賓台篩選、點亮地圖、展廳列展開、物種銘牌、收藏長明燈
// 一般 defer 腳本（不用 type="module"），直接打開本機檔案時也能執行
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = $('.gh');

// ---------- 夜色光場：星點、柔光光點、近景散景、光塵（色彩只用藍白與一點暖光） ----------
// 每種光預先畫成一張小貼圖，之後每格只做貼圖，不重算漸層
const SPRITES = {};
function sprite(rgb, kind) {
  const key = rgb + kind;
  if (SPRITES[key]) return SPRITES[key];
  const s = 128, r = s / 2, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), gr = g.createRadialGradient(r, r, 0, r, r, r);
  if (kind === 'glow') {          // 自發光：亮核心＋柔光暈
    gr.addColorStop(0, `rgba(${rgb},1)`); gr.addColorStop(.1, `rgba(${rgb},.9)`); gr.addColorStop(.3, `rgba(${rgb},.28)`); gr.addColorStop(1, `rgba(${rgb},0)`);
  } else {                        // 近景散景：平整的柔光圓盤，邊緣略亮
    gr.addColorStop(0, `rgba(${rgb},.3)`); gr.addColorStop(.7, `rgba(${rgb},.36)`); gr.addColorStop(.86, `rgba(${rgb},.5)`); gr.addColorStop(.94, `rgba(${rgb},.18)`); gr.addColorStop(1, `rgba(${rgb},0)`);
  }
  g.fillStyle = gr; g.fillRect(0, 0, s, s);
  return (SPRITES[key] = c);
}
const ICE = '226,238,255', SKY = '186,220,255', BLUE = '150,198,255', WARM = '255,224,170';
const pickColor = () => { const x = Math.random(); return x < .07 ? WARM : x < .4 ? ICE : x < .75 ? SKY : BLUE; };
const MODES = {
  hero:   { orbs: 1 / 7000, near: 7, stars: 1 / 2400, dust: 1 / 13000, avoid: true },
  portal: { orbs: 1 / 7500, near: 6, stars: 1 / 2000, dust: 1 / 11000, venues: 39 },
  moon:   { orbs: 1 / 2600, near: 2, stars: 1 / 900, dust: 1 / 5000 },
  field:  { orbs: 1 / 26000, near: 4, stars: 1 / 3600, dust: 1 / 30000 },
};
function lightField(canvas) {
  const M = MODES[canvas.dataset.orbs]; if (!M) return;
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = 1, stars = [], orbs = [], near = [], dust = [], venues = [], running = false, last = 0, px = 0, py = 0, tx = 0, ty = 0;
  const R = Math.random;
  // 頁首：中央留給標題卡，光點多半落在兩側
  const spot = () => {
    let x = R() * W; const y = R() * H;
    if (M.avoid) for (let k = 0; k < 6 && Math.abs(x / W - .5) < .2 && y / H > .1 && y / H < .9; k++) x = R() * W;
    return [x, y];
  };
  const build = () => {
    const A = W * H, unit = Math.min(W, H) / 900;
    stars = Array.from({ length: Math.round(A * M.stars) }, () => ({ x: R() * W, y: R() * H, s: .6 + R() * 1.1, a: .25 + R() * .65, f: .6 + R() * 1.8, p: R() * 6.3 }));
    orbs = Array.from({ length: Math.round(A * M.orbs) }, () => {
      const z = .2 + R() * .8, [x, y] = spot();
      return { x, y, z, size: (8 + z * z * 34) * Math.max(.7, unit), a: .3 + z * .65, vy: 3 + z * 11, sw: 4 + R() * 16, p: R() * 6.3, f: .2 + R() * .5, c: pickColor() };
    });
    near = Array.from({ length: M.near }, (_, i) => {
      const left = i % 2 === 0, size = (110 + R() * 200) * Math.max(.6, unit);
      return { x: left ? R() * W * .22 : W - R() * W * .22, y: R() * H, size, a: .14 + R() * .2, vy: 2 + R() * 4, sw: 10 + R() * 20, p: R() * 6.3, f: .1 + R() * .2, c: R() < .15 ? WARM : R() < .5 ? ICE : SKY };
    });
    dust = Array.from({ length: Math.round(A * M.dust) }, () => ({ x: R() * W, y: R() * H, s: .8 + R() * 1.6, a: .35 + R() * .45, vy: 7 + R() * 16, sw: 6 + R() * 14, p: R() * 6.3 }));
    // 39 盞代表場館的光：以黃金角螺旋分布在畫面中央的橢圓裡，緩慢呼吸
    venues = Array.from({ length: M.venues || 0 }, (_, i) => {
      const t = (i + .5) / M.venues, ang = i * 2.39996, rad = Math.sqrt(t);
      return { x: W / 2 + Math.cos(ang) * rad * W * .36, y: H / 2 + Math.sin(ang) * rad * H * .34, size: (24 + R() * 16) * Math.max(.75, unit), p: R() * 6.3, f: .5 + R() * .6, c: R() < .2 ? WARM : ICE };
    });
  };
  const size = () => {
    const w = canvas.offsetWidth, h = canvas.offsetHeight; if (!w || !h) return;
    dpr = Math.min(devicePixelRatio || 1, 1.5);
    if (Math.abs(w - W) < 2 && Math.abs(h - H) < 2 && orbs.length) return;
    W = w; H = h; canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build(); if (!running) draw(0, 0);
  };
  const stamp = (img, x, y, s, a) => { ctx.globalAlpha = a; ctx.drawImage(img, x - s / 2, y - s / 2, s, s); };
  function draw(t, dt) {
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    px += (tx - px) * .04; py += (ty - py) * .04;
    for (const n of near) {
      n.y -= n.vy * dt; if (n.y < -n.size) n.y = H + n.size;
      stamp(sprite(n.c, 'bokeh'), n.x + Math.sin(t * n.f + n.p) * n.sw + px * 30, n.y + py * 22, n.size, n.a);
    }
    for (const o of orbs) {
      o.y -= o.vy * dt; if (o.y < -o.size) { o.y = H + o.size; o.x = spot()[0]; }
      const a = o.a * (.75 + .25 * Math.sin(t * o.f * 2 + o.p));
      stamp(sprite(o.c, 'glow'), o.x + Math.sin(t * o.f + o.p) * o.sw + px * 14 * o.z, o.y + py * 10 * o.z, o.size, a);
    }
    for (const v of venues) {
      const a = .7 + .3 * Math.sin(t * v.f + v.p);
      stamp(sprite(v.c, 'glow'), v.x + px * 8, v.y + py * 6, v.size * (1 + .12 * Math.sin(t * v.f + v.p)), a);
    }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    for (const s of stars) {
      ctx.fillStyle = `rgba(232,241,255,${(s.a * (.55 + .45 * Math.sin(t * s.f + s.p))).toFixed(3)})`;
      ctx.fillRect(s.x + px * 3, s.y + py * 2, s.s, s.s);
    }
    for (const d of dust) {      // 光塵：像雪一樣慢慢落下
      d.y += d.vy * dt; if (d.y > H + 4) { d.y = -4; d.x = R() * W; }
      ctx.beginPath(); ctx.arc(d.x + Math.sin(t * .6 + d.p) * d.sw, d.y, d.s, 0, 6.283);
      ctx.fillStyle = `rgba(240,246,255,${d.a})`; ctx.fill();
    }
  }
  const frame = now => {
    if (!running) return;
    const dt = Math.min(.05, (now - last) / 1000 || .016); last = now;
    draw(now / 1000, dt); requestAnimationFrame(frame);
  };
  new ResizeObserver(size).observe(canvas);
  size();
  if (reduce) return;                       // 減少動態：只畫一張靜態光場
  if (canvas.dataset.orbs !== 'moon') addEventListener('pointermove', e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; }, { passive: true });
  let onScreen = false;
  const toggle = () => {
    const want = onScreen && !document.hidden;
    if (want && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); } else if (!want) running = false;
  };
  new IntersectionObserver(es => { onScreen = es[0].isIntersecting; toggle(); }).observe(canvas);
  document.addEventListener('visibilitychange', toggle);
}

if (root) {
  // 腳本確實啟動後才套用「點亮前變暗」「詳情收合」等樣式；腳本沒跑時內容維持全部可見
  root.classList.add('gh-armed');
  $$('canvas[data-orbs]').forEach(lightField);

  // ---------- 頁首（方案 A）：圓形視窗在捲動時從中央撐滿全螢幕，接著浮出標題 ----------
  const portal = $('.gh-portal');
  if (portal && !reduce) {
    portal.classList.add('is-live');
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = portal.getBoundingClientRect(), span = Math.max(1, r.height - innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / (span * .7)));     // 前 70% 撐開，之後停在全螢幕
      const c = Math.min(1, Math.max(0, (p - .45) / .4));           // 撐開到一半後浮出標題
      portal.style.setProperty('--p', p.toFixed(4));
      portal.style.setProperty('--c', c.toFixed(4));
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  const rows = $$('.gh-row');
  const byId = new Map(rows.map(r => [r.id, r]));
  const lights = $$('.gh-light');
  const keys = $$('.gh-key');
  const lightOf = id => lights.filter(l => l.dataset.light === id);
  const keyOf = id => keys.filter(k => k.dataset.key === id);
  const state = { region: '', kind: '', want: '', day: '', scope: '', q: '' };
  const scrollTo = el => el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  const pop = el => { if (!el || reduce) return; el.classList.remove('is-pop'); void el.offsetWidth; el.classList.add('is-pop'); };

  // 「想看什麼」的顯示名稱：禮賓台選項＋物種銘牌
  const wantLabel = new Map($$('input[name="g-want"]').map(i => [i.value, i.nextElementSibling.textContent]));
  $$('.gh-plaque [data-set-want]').forEach(b => wantLabel.set(b.dataset.setWant, $('h3', b.closest('.gh-plaque')).textContent));
  const regionLabel = new Map($$('input[name="g-region"]').map(i => [i.value, i.nextElementSibling.textContent]));
  const dayLabel = new Map($$('input[name="g-day"]').map(i => [i.value, i.nextElementSibling.textContent]));
  const kindLabel = new Map($$('input[name="g-kind"]').map(i => [i.value, i.nextElementSibling.textContent]));
  const scopeLabel = new Map($$('input[name="g-scope"]').map(i => [i.value, i.nextElementSibling.textContent.replace(/\s*\d+\s*處$/, '')]));

  // ---------- 篩選 ----------
  const has = (list, v) => (list || '').split(' ').includes(v);
  function matches(r, st = state) {
    const d = r.dataset;
    if (st.region && d.region !== st.region) return false;
    if (st.kind && d.kind !== st.kind) return false;
    if (st.scope && d.scope !== st.scope) return false;
    if (st.want) {
      const [type, v] = st.want.split(':');
      if (type === 'kind' && d.kind !== v) return false;
      if (type === 'sp' && !has(d.species, v)) return false;
      if (type === 'scene' && !has(d.scenes, v)) return false;
    }
    if (st.day && !has(d.scenes, st.day)) return false;
    if (st.q) {
      const terms = st.q.toLowerCase().split(/\s+/).filter(Boolean);
      if (!terms.every(t => d.search.includes(t))) return false;
    }
    return true;
  }
  // 智慧選項：每個選項顯示「選了之後剩幾間」，會變成 0 間的選項自動停用 → 不管怎麼選都至少有一間
  const FACETS = [['g-region', 'region'], ['g-kind', 'kind'], ['g-want', 'want'], ['g-day', 'day'], ['g-scope', 'scope']];
  const countWith = (key, val) => { const st = { ...state, [key]: val }; let n = 0; rows.forEach(r => { if (matches(r, st)) n++; }); return n; };
  function refreshChips() {
    FACETS.forEach(([name, key]) => $$(`input[name="${name}"]`).forEach(inp => {
      const n = countWith(key, inp.value), lab = inp.closest('.gh-chip');
      let b = $('.gh-chip__n', lab);
      if (!b) { b = document.createElement('small'); b.className = 'gh-chip__n'; inp.nextElementSibling.append(b); }
      b.textContent = n;
      const zero = n === 0 && !inp.checked;
      inp.disabled = zero; lab.classList.toggle('is-zero', zero);
    }));
  }
  const peek = $('[data-peek]');
  function showPeek(vis) {           // 直接列出前幾間，答完題就看得到結果
    if (!peek) return;
    peek.textContent = '';
    if (!vis.length) return;
    peek.append('例如：');
    vis.slice(0, 3).forEach((r, i) => {
      if (i) peek.append('、');
      const a = document.createElement('a'); a.href = '#' + r.id; a.textContent = r.dataset.title; peek.append(a);
    });
    if (vis.length > 3) peek.append(` 等 ${vis.length} 處`);
  }
  function apply() {
    let n = 0; const per = {};
    rows.forEach(r => {
      const ok = matches(r); r.hidden = !ok;
      if (ok) { n++; per[r.dataset.region] = (per[r.dataset.region] || 0) + 1; }
    });
    $$('.gh-room').forEach(room => { const c = per[room.dataset.room] || 0; room.hidden = !c; $('[data-room-count]', room).textContent = c; });
    $$('[data-hallnav]').forEach(a => a.classList.toggle('is-empty', !per[a.dataset.hallnav]));
    $$('[data-tab-count]').forEach(b => (b.textContent = per[b.dataset.tabCount] || 0));
    [...lights, ...keys].forEach(el => { const r = byId.get(el.dataset.light || el.dataset.key); el.classList.toggle('is-off', !!r && r.hidden); });
    $$('[data-match-count]').forEach(el => { if (el.textContent !== String(n)) { el.textContent = n; pop(el); } });
    $$('[data-lit-count]').forEach(el => (el.textContent = n));
    $('[data-empty]').hidden = n > 0;
    const active = !!(state.region || state.kind || state.want || state.day || state.scope || state.q);
    $$('[data-reset]').forEach(b => { if (!b.closest('[data-empty]')) b.hidden = !active; });
    const parts = [state.region && regionLabel.get(state.region), state.kind && kindLabel.get(state.kind), state.want && wantLabel.get(state.want),
                   state.day && dayLabel.get(state.day), state.scope && scopeLabel.get(state.scope), state.q && `「${state.q}」`].filter(Boolean);
    $('[data-now]').textContent = parts.length ? parts.join('・') : '全部場館';
    refreshChips(); showPeek(rows.filter(r => !r.hidden));
  }

  // 禮賓台五問
  $('.gh-desk').addEventListener('change', e => {
    const i = e.target; if (i.type !== 'radio') return;
    if (i.name === 'g-region') { state.region = i.value; if (i.value) switchRegion(i.value); }
    if (i.name === 'g-kind') state.kind = i.value;
    if (i.name === 'g-want') state.want = i.value;
    if (i.name === 'g-scope') state.scope = i.value;
    if (i.name === 'g-day') state.day = i.value;
    apply();
  });
  // 物種銘牌或列內的物種連結：套用「想看什麼」，沒有對應選項就臨時加一顆
  function setWant(v) {
    $$('[data-want-extra]').forEach(x => x.remove());
    if (!countWith('want', v)) {
      Object.assign(state, { region: '', kind: '', day: '', scope: '', q: '' });
      ['g-region', 'g-kind', 'g-day', 'g-scope'].forEach(nm => { $(`input[name="${nm}"]`).checked = true; });
      q.value = ''; clearQ.hidden = true;
    }
    let input = $$('input[name="g-want"]').find(i => i.value === v);
    if (!input) {
      const lab = document.createElement('label'); lab.className = 'gh-chip'; lab.dataset.wantExtra = '';
      input = document.createElement('input'); input.type = 'radio'; input.name = 'g-want'; input.value = v;
      const span = document.createElement('span'); span.textContent = wantLabel.get(v) || v;
      lab.append(input, span); $('[data-want-group]').appendChild(lab);
    }
    input.checked = true; state.want = v; apply();
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-set-want]'); if (!b) return;
    e.preventDefault(); setWant(b.dataset.setWant); scrollTo($('#設施總覽'));
  });

  // 搜尋
  const q = $('#g-q'), clearQ = $('[data-clear-q]');
  let qt = 0;
  q.addEventListener('input', () => { clearQ.hidden = !q.value; clearTimeout(qt); qt = setTimeout(() => { state.q = q.value.trim(); apply(); }, 140); });
  clearQ.addEventListener('click', () => { q.value = ''; clearQ.hidden = true; state.q = ''; apply(); q.focus(); });

  function reset() {
    Object.assign(state, { region: '', kind: '', want: '', day: '', scope: '', q: '' });
    $$('[data-want-extra]').forEach(x => x.remove());
    ['g-region', 'g-kind', 'g-want', 'g-day', 'g-scope'].forEach(nm => { $(`input[name="${nm}"]`).checked = true; });
    q.value = ''; clearQ.hidden = true; apply();
  }
  $$('[data-reset]').forEach(b => b.addEventListener('click', reset));

  // ---------- 展廳列：點整列展開 ----------
  const expandAll = $('[data-expand-all]');
  function setOpen(r, open) {
    r.classList.toggle('is-open', open);
    $('.gh-row__toggle', r).setAttribute('aria-expanded', open);
  }
  function syncExpandAll() {
    const vis = rows.filter(r => !r.hidden), all = vis.length > 0 && vis.every(r => r.classList.contains('is-open'));
    expandAll.setAttribute('aria-pressed', all); expandAll.textContent = all ? '全部收合' : '全部展開';
  }
  root.addEventListener('click', e => {
    const head = e.target.closest('.gh-row__head'); if (!head) return;
    if (e.target.closest('a, .fav-btn')) return;             // 地圖、收藏按鈕各做各的事
    const r = head.closest('.gh-row'); setOpen(r, !r.classList.contains('is-open'));
    syncExpandAll();
  });
  expandAll.addEventListener('click', () => {
    const open = expandAll.getAttribute('aria-pressed') !== 'true';
    rows.forEach(r => { if (!r.hidden) setOpen(r, open); }); syncExpandAll();
  });

  // 打開指定場館：被目前條件藏起來時先清除條件
  function openRow(id, { flash = true } = {}) {
    const r = byId.get(id); if (!r) return false;
    if (r.hidden) reset();
    setOpen(r, true); syncExpandAll();
    requestAnimationFrame(() => {
      scrollTo(r);
      if (flash && !reduce) { r.classList.remove('is-flash'); void r.offsetWidth; r.classList.add('is-flash'); }
    });
    return true;
  }
  // 頁內連到場館的連結（地圖燈、異動、FAQ、銘牌）都走同一條路
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a || e.defaultPrevented) return;
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    if (!byId.has(id)) return;
    e.preventDefault(); history.replaceState(null, '', '#' + encodeURIComponent(id)); openRow(id);
    $('.gh-row__toggle', byId.get(id)).focus({ preventScroll: true });
  });
  const fromHash = () => { const id = decodeURIComponent(location.hash.slice(1)); if (byId.has(id)) openRow(id); };
  addEventListener('hashchange', fromHash);

  // ---------- Ⅰ 點亮地圖 ----------
  const tabs = $$('.gh-tab'), panels = $$('.gh-region'), marks = $$('.gh-ov__mark');
  let hallSeen = false;
  function ignite(panel) {
    if (!panel || panel.classList.contains('is-lit')) return;
    panel.classList.add('is-lit');
    const n = $$('.gh-light', panel).length;
    if (reduce) panel.classList.add('is-settled');
    else setTimeout(() => panel.classList.add('is-settled'), n * 85 + 1500);
  }
  function switchRegion(k, focus = false) {
    tabs.forEach(t => { const on = t.dataset.regionTab === k; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); });
    marks.forEach(m => m.setAttribute('aria-pressed', m.dataset.regionTab === k));
    panels.forEach(p => { p.hidden = p.dataset.regionPanel !== k; });
    if (hallSeen) ignite(panels.find(p => p.dataset.regionPanel === k));
  }
  tabs.forEach(t => t.addEventListener('click', () => switchRegion(t.dataset.regionTab)));
  marks.forEach(m => m.addEventListener('click', () => switchRegion(m.dataset.regionTab)));
  $('.gh-tabs').addEventListener('keydown', e => {            // 左右鍵、Home／End 切換分頁
    const f = tabs.indexOf(document.activeElement);            // 以目前有焦點的分頁為準
    const i = f >= 0 ? f : tabs.findIndex(t => t.getAttribute('aria-selected') === 'true');
    const d = { ArrowRight: 1, ArrowLeft: -1, Home: -i, End: tabs.length - 1 - i }[e.key];
    if (d === undefined) return;
    e.preventDefault(); switchRegion(tabs[(i + d + tabs.length) % tabs.length].dataset.regionTab, true);
  });
  switchRegion('關東');
  if ('IntersectionObserver' in window) {
    // 看的是「地圖本身」露出四成就點亮；手機上地區面板很高，用整塊面板判斷會太晚
    const io = new IntersectionObserver(es => {
      if (!es.some(e => e.isIntersecting)) return;
      hallSeen = true; ignite(panels.find(p => !p.hidden)); io.disconnect();
    }, { threshold: .4 });
    $$('.gh-map').forEach(m => io.observe(m));
  } else { hallSeen = true; panels.forEach(ignite); }

  // 燈與清單互相連動＋提示框
  const tip = $('.gh-tip');
  const hot = (id, on) => [...lightOf(id), ...keyOf(id)].forEach(el => el.classList.toggle('is-hot', on));
  function showTip(light) {
    const r = byId.get(light.dataset.light); if (!r) return;
    $('b', tip).textContent = r.dataset.title;
    $('span', tip).textContent = `${r.dataset.kind}・${r.dataset.area}｜${$('.gh-row__hook', r).textContent}`;
    const b = light.getBoundingClientRect();
    tip.style.left = Math.min(innerWidth - 140, Math.max(140, b.left + b.width / 2)) + 'px';
    tip.style.top = b.top + 'px'; tip.hidden = false;
  }
  const hideTip = () => { tip.hidden = true; };
  lights.forEach(l => {
    l.addEventListener('pointerenter', () => { hot(l.dataset.light, true); showTip(l); });
    l.addEventListener('pointerleave', () => { hot(l.dataset.light, false); hideTip(); });
    l.addEventListener('focus', () => { hot(l.dataset.light, true); showTip(l); });
    l.addEventListener('blur', () => { hot(l.dataset.light, false); hideTip(); });
  });
  addEventListener('scroll', hideTip, { passive: true });
  keys.forEach(k => {
    k.addEventListener('pointerenter', () => hot(k.dataset.key, true));
    k.addEventListener('pointerleave', () => hot(k.dataset.key, false));
    k.addEventListener('focus', () => hot(k.dataset.key, true));
    k.addEventListener('blur', () => hot(k.dataset.key, false));
    k.addEventListener('click', () => { history.replaceState(null, '', '#' + encodeURIComponent(k.dataset.key)); openRow(k.dataset.key); });
  });

  // ---------- 收藏：地圖上的長明燈 ----------
  const page = location.pathname.split('/').pop() || 'index.html';
  function syncFav() {
    let ids = new Set();
    try { ids = new Set(JSON.parse(localStorage.getItem('jp-handbook-favs-v1') || '[]').filter(f => f.page === page).map(f => f.fid)); } catch (_) { /* 讀不到就當作沒有收藏 */ }
    [...lights, ...keys].forEach(el => el.classList.toggle('is-fav', ids.has(el.dataset.light || el.dataset.key)));
    $$('[data-fav-lit]').forEach(el => (el.textContent = [...ids].filter(id => byId.has(id)).length));
  }
  document.addEventListener('click', e => { if (e.target.closest('.fav-btn')) setTimeout(syncFav, 0); });
  addEventListener('storage', syncFav);

  // ---------- 啟動 ----------
  apply(); syncFav(); syncExpandAll();
  if (location.hash) fromHash();
}
})();
