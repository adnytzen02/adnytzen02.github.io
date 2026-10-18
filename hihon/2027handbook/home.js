// 首頁開場（原生 JavaScript + canvas，不需動畫函式庫；每次開啟都播放，約 3.5 秒，可略過）
// 1. 光線隧道：光點從畫面中心加速衝出
// 2. 聚合：每道光沿著微彎的路徑飛到日本列島的位置（由西往東）
// 3. 落地：城市燈火依序亮起，畫出台北 → 東京航線，標題浮現
// 4. 停留：點陣微微閃爍，航線上不時有光點飛過；桌機地圖隨滑鼠輕微位移
// 地圖點陣來自 japan-dots.js（Natural Earth 資料）；顏色一律從既有 CSS 變數讀取。
(() => {
  const root = document.documentElement;
  const hero = document.getElementById('arrive');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const release = () => root.classList.remove('intro-pending');   // 解除 <head> 先藏文字的狀態

  /* ---------- 東京時間（日本不實施日光節約，固定比台灣快 1 小時） ---------- */
  const clock = document.getElementById('tokyo-time');
  if (clock && window.Intl) {
    const fmt = new Intl.DateTimeFormat('zh-TW', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false });
    const tick = () => { clock.textContent = fmt.format(new Date()); };
    tick(); setInterval(tick, 15000);
    clock.closest('p').hidden = false;
  }

  /* ---------- Lenis 慣性滾動（減少動態效果時不啟用） ---------- */
  if (!reduce && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.08, autoRaf: true });
    document.addEventListener('click', e => {      // 頁內錨點改由 Lenis 捲動
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = decodeURIComponent(a.getAttribute('href').slice(1));
      const target = id === 'top' || id === '' ? 0 : document.getElementById(id);
      if (target === null) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: target === 0 ? 0 : -72 });
      if (id && id !== 'top') history.replaceState(null, '', '#' + id);
    });
    const dlg = document.getElementById('search-dialog');   // 搜尋開啟時暫停背景滾動
    if (dlg) {
      dlg.setAttribute('data-lenis-prevent', '');
      new MutationObserver(() => (dlg.open ? lenis.stop() : lenis.start()))
        .observe(dlg, { attributes: true, attributeFilter: ['open'] });
    }
  }

  /* ---------- 開場 ---------- */
  const D = window.JAPAN_DOTS;
  const canvas = hero && hero.querySelector('.arrive__canvas');
  const ctx = canvas && canvas.getContext && canvas.getContext('2d');
  if (!hero || !D || !ctx) { release(); hero && hero.classList.add('is-landed'); return; }
  const labelsBox = hero.querySelector('.arrive__map');
  const skipBtn = hero.querySelector('.arrive__skip');

  // 從 CSS 變數讀出 RGB
  const rgbOf = name => {
    const el = document.createElement('i');
    el.style.cssText = `display:none;color:var(${name})`;
    hero.appendChild(el);
    const m = (getComputedStyle(el).color.match(/[\d.]+/g) || [255, 255, 255]).slice(0, 3).map(Number);
    el.remove();
    return m;
  };
  const C = { white: rgbOf('--card'), gold: rgbOf('--gold'), red: rgbOf('--crimson'), line: rgbOf('--line') };
  const col = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  const GROUP = [C.white, C.gold, C.red];

  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  const fine = matchMedia('(pointer: fine)').matches;

  // 粒子：每個地圖點一顆。type 0 日本海岸、1 日本內陸、2 台灣海岸、3 台灣內陸
  const parts = [];
  [[D.jpCoast, 0], [D.jpFill, 1], [D.twCoast, 2], [D.twFill, 3]].forEach(([arr, type]) =>
    arr.forEach(([nx, ny]) => parts.push({
      nx, ny, type,
      a: Math.random() * Math.PI * 2, r: 0.02 + Math.random() * 0.9, v: 0.5 + Math.random(),
      g: Math.random() < 0.8 ? 0 : Math.random() < 0.6 ? 1 : 2,       // 隧道階段的顏色
      ph: (Math.random() * 4) | 0,                                     // 閃爍分組
      show: Math.random() < 0.55,                                      // 隧道階段只畫約一半的光線（效能）
      delay: 0.25 * Math.random() + 0.4 * nx,                          // 由西往東聚合
      md: 0.85 + 0.3 * Math.random(), curl: (Math.random() - 0.5) * 0.5,
      ms: Infinity, sx: 0, sy: 0, x: 0, y: 0, landed: false, lt: 0
    })));

  // 時間軸（秒）
  const MORPH = 1.45;        // 開始聚合
  let LAND = 2.75;           // 城市開始亮起、標題浮現
  const CITY_GAP = 0.16;

  /* ---------- 版面：地圖框位置（桌機在右側，手機在上方） ---------- */
  let W = 0, H = 0, cx = 0, cy = 0, maxR = 1, box = { x: 0, y: 0, w: 1, h: 1 };

  // 城市名稱：方向避免京都、大阪、名古屋互相重疊
  const DIR = { 福岡: 'l', 大阪: 'b', 京都: 't', 名古屋: 'r', 東京: 'r', 札幌: 'l' };
  const labels = D.cities.map(c => {
    const el = document.createElement('span');
    el.className = `city city--${DIR[c.name] || 'r'}`;
    el.innerHTML = `${c.name}<small lang="ja">${c.ja}</small>`;
    labelsBox.appendChild(el);
    return el;
  });
  const originLabel = document.createElement('span');
  originLabel.className = 'city city--r city--origin';
  originLabel.textContent = '台北出發';
  labelsBox.appendChild(originLabel);
  const placeLabels = (bx, by, bw, bh) => {
    D.cities.forEach((c, i) => { labels[i].style.left = bx + c.x * bw + 'px'; labels[i].style.top = by + c.y * bh + 'px'; });
    originLabel.style.left = bx + D.origin.x * bw + 'px'; originLabel.style.top = by + D.origin.y * bh + 'px';
  };

  const layout = () => {
    const vw = hero.clientWidth;
    let bx, by, bw, bh;
    if (vw >= 900) {
      bh = hero.clientHeight * 0.84; bw = bh * D.aspect;
      const maxW = vw * 0.56; if (bw > maxW) { bw = maxW; bh = bw / D.aspect; }
      bx = vw - bw - Math.max(24, vw * 0.05); by = (hero.clientHeight - bh) / 2;
      hero.style.removeProperty('--map-h');
    } else {
      bw = vw * 0.9; bh = bw / D.aspect;
      const maxH = Math.min(innerHeight * 0.5, 520); if (bh > maxH) { bh = maxH; bw = bh * D.aspect; }
      bx = (vw - bw) / 2; by = 16;
      hero.style.setProperty('--map-h', Math.round(bh + by) + 'px');
    }
    // 設定 --map-h 後區塊高度可能改變，再量一次 canvas 尺寸
    W = canvas.width = Math.max(1, Math.round(hero.clientWidth * DPR));
    H = canvas.height = Math.max(1, Math.round(hero.clientHeight * DPR));
    box = { x: bx * DPR, y: by * DPR, w: bw * DPR, h: bh * DPR };
    cx = W / 2; cy = H * 0.48; maxR = Math.hypot(W, H) * 0.6;
    placeLabels(bx, by, bw, bh);
  };

  /* ---------- 小工具 ---------- */
  const clamp01 = x => Math.max(0, Math.min(1, x));
  const easeIO = k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
  let ox = 0, oy = 0, tox = 0, toy = 0;                       // 滑鼠視差位移（canvas 像素）
  const tx = p => box.x + p.nx * box.w + ox, ty = p => box.y + p.ny * box.h + oy;
  const cityPos = c => [box.x + c.x * box.w + ox, box.y + c.y * box.h + oy];
  // 台北 → 東京航線：二次貝茲曲線，往左上方拱起
  const arcPoint = k => {
    const [x0, y0] = cityPos(D.origin), [x2, y2] = cityPos(D.cities[4]);
    const mx = (x0 + x2) / 2, my = (y0 + y2) / 2, dx = x2 - x0, dy = y2 - y0;
    const c1x = mx + dy * 0.28, c1y = my - dx * 0.28;
    const u = 1 - k;
    return [u * u * x0 + 2 * u * k * c1x + k * k * x2, u * u * y0 + 2 * u * k * c1y + k * k * y2];
  };

  /* ---------- 繪製 ---------- */
  const flying = !reduce;
  let done = false;
  const land = () => {                                         // 開場結束：文字浮現
    if (done) return;
    done = true;
    hero.classList.remove('is-flying'); hero.classList.add('is-landed');
    if (skipBtn) skipBtn.hidden = true;
    ['wheel', 'touchmove', 'keydown'].forEach(ev => removeEventListener(ev, onSkip));
  };

  const BASE = [1, 0.58, 0.72, 0.4];
  const DOTC = [C.white, C.white, C.line, C.line];
  const draw = (t, dt) => {
    ctx.clearRect(0, 0, W, H);
    ox += (tox - ox) * 0.06; oy += (toy - oy) * 0.06;
    // 標籤跟著地圖視差移動
    labelsBox.style.transform = `translate(${(ox / DPR).toFixed(1)}px, ${(oy / DPR).toFixed(1)}px)`;

    // 隧道中心的光暈（聚合後淡出）
    const gw = flying ? clamp01(t / 0.5) * (1 - clamp01((t - MORPH) / 1.2)) : 0;
    if (gw > 0) {
      const R = maxR * 0.45, g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      g.addColorStop(0, col(C.gold, 0.28 * gw)); g.addColorStop(1, col(C.gold, 0));
      ctx.fillStyle = g; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);   // 只重畫光暈範圍
    }

    // 隧道速度：越來越快
    const S = 0.15 + 2.6 * Math.pow(clamp01(t / MORPH), 2);
    const A = clamp01(t / 0.4) * 0.55;
    const streak = [[], [], []];                               // 依顏色批次描線，效能較好
    const dots = [[], [], [], []];
    const pops = [];
    for (const p of parts) {
      if (!p.landed) {
        if (t < p.ms) {                                        // 隧道階段
          p.r += p.v * S * dt * (0.3 + p.r);
          if (p.r > 1.15) { p.r = 0.02 + Math.random() * 0.1; p.a = Math.random() * Math.PI * 2; }
          const L = p.v * (0.04 + S * 0.16);
          const r1 = p.r * maxR, r0 = Math.max(0, p.r - L) * maxR;
          const cs = Math.cos(p.a), sn = Math.sin(p.a);
          p.x = cx + cs * r1; p.y = cy + sn * r1;
          if (p.show && p.r > 0.05) streak[p.g].push(cx + cs * r0, cy + sn * r0, p.x, p.y);
          if (flying && t >= MORPH + p.delay && p.ms === Infinity) { p.ms = t; p.sx = p.x; p.sy = p.y; }
          continue;
        }
        // 聚合階段：沿微彎路徑飛向地圖位置
        const k = clamp01((t - p.ms) / p.md), e = easeIO(k);
        const gx = tx(p), gy = ty(p), dx = gx - p.sx, dy = gy - p.sy;
        const bend = Math.sin(Math.PI * k) * p.curl;
        const nx = p.sx + dx * e - dy * bend, ny = p.sy + dy * e + dx * bend;
        streak[p.g].push(p.x + (p.x - nx) * 1.4, p.y + (p.y - ny) * 1.4, nx, ny);
        p.x = nx; p.y = ny;
        if (k >= 1) { p.landed = true; p.lt = t; }
        continue;
      }
      // 已落地：點陣
      const big = p.type === 0 || p.type === 2;
      const s = (big ? 2 : 1.6) * DPR;
      const pop = flying ? 1 - clamp01((t - p.lt) / 0.35) : 0;
      if (pop > 0) pops.push(tx(p), ty(p), s * (1 + pop * 1.6), pop);
      dots[p.type].push(tx(p) - s / 2, ty(p) - s / 2, s, p.ph);
    }
    ctx.lineCap = 'butt';
    streak.forEach((seg, gi) => {
      if (!seg.length) return;
      ctx.strokeStyle = col(GROUP[gi], A); ctx.lineWidth = 1.1 * DPR;
      ctx.beginPath();
      for (let i = 0; i < seg.length; i += 4) { ctx.moveTo(seg[i], seg[i + 1]); ctx.lineTo(seg[i + 2], seg[i + 3]); }
      ctx.stroke();
    });
    // 點陣：四種點 × 四組閃爍相位
    dots.forEach((arr, type) => {
      for (let ph = 0; ph < 4; ph++) {
        ctx.fillStyle = col(DOTC[type], BASE[type] * (0.78 + 0.22 * Math.sin(t * 1.3 + ph * 1.6)));
        for (let i = 0; i < arr.length; i += 4) if (arr[i + 3] === ph) ctx.fillRect(arr[i], arr[i + 1], arr[i + 2], arr[i + 2]);
      }
    });
    for (let i = 0; i < pops.length; i += 4) {                 // 落地瞬間的金色閃點
      ctx.fillStyle = col(C.gold, 0.7 * pops[i + 3]);
      const s = pops[i + 2]; ctx.fillRect(pops[i] - s / 2, pops[i + 1] - s / 2, s, s);
    }

    // 航線：落地後 1 秒內畫出；之後每 6 秒有光點飛過
    const ap = clamp01((t - LAND - 0.1) / 1.0);
    if (ap > 0) {
      ctx.setLineDash([3 * DPR, 6 * DPR]);
      ctx.strokeStyle = col(C.line, 0.55); ctx.lineWidth = 1.2 * DPR;
      ctx.beginPath();
      const n = 48;
      for (let i = 0; i <= n * ap; i++) { const [x, y] = arcPoint(i / n); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke(); ctx.setLineDash([]);
      const loop = (t - LAND - 1.2) % 6;
      if (flying && t > LAND + 1.2 && loop < 2.4) {
        const k = easeIO(loop / 2.4);
        for (let j = 0; j < 8; j++) {
          const [x, y] = arcPoint(Math.max(0, k - j * 0.012));
          ctx.fillStyle = col(C.gold, (1 - j / 8) * 0.9);
          ctx.beginPath(); ctx.arc(x, y, (2.2 - j * 0.2) * DPR, 0, Math.PI * 2); ctx.fill();
        }
      }
    }

    // 台北起點
    if (t > LAND) {
      const [x, y] = cityPos(D.origin);
      ctx.fillStyle = col(C.red, 0.95); ctx.beginPath(); ctx.arc(x, y, 3 * DPR, 0, Math.PI * 2); ctx.fill();
      originLabel.classList.add('on');
    }
    // 城市燈火：依序亮起，點亮時有漣漪，之後每 4 秒輪流再泛起
    D.cities.forEach((c, i) => {
      const c0 = LAND + i * CITY_GAP;
      if (t < c0) return;
      const [x, y] = cityPos(c);
      const on = clamp01((t - c0) / 0.4);
      const breathe = 0.85 + 0.15 * Math.sin(t * 2 + i);
      const g = ctx.createRadialGradient(x, y, 0, x, y, 22 * DPR);
      g.addColorStop(0, col(C.gold, 0.55 * on * breathe)); g.addColorStop(1, col(C.gold, 0));
      ctx.fillStyle = g; ctx.fillRect(x - 22 * DPR, y - 22 * DPR, 44 * DPR, 44 * DPR);
      ctx.fillStyle = col(C.white, on); ctx.beginPath(); ctx.arc(x, y, 2.6 * DPR, 0, Math.PI * 2); ctx.fill();
      const rk = ((t - c0) % 4) / 1.2;
      if (flying && rk < 1) {
        ctx.strokeStyle = col(C.gold, 0.6 * (1 - rk)); ctx.lineWidth = 1.2 * DPR;
        ctx.beginPath(); ctx.arc(x, y, (4 + rk * 26) * DPR, 0, Math.PI * 2); ctx.stroke();
      }
      labels[i].classList.add('on');
    });

    if (!done && t >= LAND) land();
  };

  /* ---------- 迴圈、暫停、略過 ---------- */
  let t0 = null, last = 0, now = 0, raf = 0, running = false;
  const frame = ms => {
    if (t0 === null) { t0 = ms; last = ms; }
    const dt = Math.min(0.05, (ms - last) / 1000) || 0.016;
    last = ms; now = (ms - t0) / 1000;
    draw(now, dt);
    raf = running ? requestAnimationFrame(frame) : 0;
  };
  const start = () => { if (running || reduce) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame); };
  const stop = () => { running = false; cancelAnimationFrame(raf); };

  // 略過：所有還在飛的光點在 0.45 秒內就位，城市與標題隨即出現
  function onSkip() {
    if (done) return;
    for (const p of parts) if (!p.landed) { p.sx = p.x; p.sy = p.y; p.ms = now; p.md = 0.45; p.curl = 0; }
    LAND = Math.min(LAND, now + 0.4);
  }

  layout();
  if (fine) addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    tox = -((e.clientX - r.left) / r.width - 0.5) * 18 * DPR;
    toy = -((e.clientY - r.top) / r.height - 0.5) * 12 * DPR;
  }, { passive: true });

  if (reduce) {
    // 減少動態效果：直接畫出落地後的靜態畫面
    for (const p of parts) p.landed = true;
    LAND = -10; done = true; hero.classList.add('is-landed'); release();
    draw(30, 0);
  } else {
    hero.classList.add('is-flying'); release();
    if (skipBtn) { skipBtn.hidden = false; skipBtn.addEventListener('click', onSkip); }
    ['wheel', 'touchmove', 'keydown'].forEach(ev => addEventListener(ev, onSkip, { passive: true }));
    start();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(es => es.forEach(e => (e.isIntersecting && !document.hidden ? start() : stop()))).observe(hero);
    }
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop(); else if (hero.getBoundingClientRect().bottom > 0) start();
    });
  }

  let rt;
  addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { layout(); if (reduce || !running) draw(reduce ? 30 : now, 0); }, 150);
  });
})();
