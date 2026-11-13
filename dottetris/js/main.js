'use strict';
/* 點陣方塊：主題開關 + 俄羅斯方塊遊戲邏輯（不使用 ES Module，直接開啟 HTML 檔也能執行） */
(() => {
  const $ = (sel) => document.querySelector(sel);
  const root = document.documentElement;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ================= 主題 ================= */
  const THEME_KEY = 'dot-tetris-theme';
  const themeSwitch = $('#themeSwitch');
  const themeMeta = $('meta[name="theme-color"]');

  const applyTheme = (theme, save) => {
    root.dataset.theme = theme;
    themeSwitch.setAttribute('aria-checked', String(theme === 'dark'));
    themeMeta.setAttribute('content', theme === 'dark' ? '#0b0b12' : '#efeae2');
    if (save) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* 無法儲存就只在本次生效 */ }
    }
  };

  const hasSavedTheme = () => {
    try {
      const t = localStorage.getItem(THEME_KEY);
      return t === 'dark' || t === 'light';
    } catch (e) { return false; }
  };

  // 13×13 點陣：月亮 = 大圓減去右上偏移的小圓；太陽 = 中心實心圓 + 8 個方向的光芒
  const buildThemeIcon = (svg) => {
    const N = 13;
    const C = 6;
    svg.setAttribute('viewBox', `0 0 ${N} ${N}`);
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const dx = x - C;
        const dy = y - C;
        const d = Math.hypot(dx, dy);
        const moon = d <= 5.3 && Math.hypot(x - 8.5, y - 3.5) > 4.6;
        const onAxis = dx === 0 || dy === 0 || Math.abs(dx) === Math.abs(dy);
        const sun = d <= 2.6 || (onAxis && d >= 3.9 && d <= 5.7);
        const dot = document.createElementNS(SVG_NS, 'circle');
        dot.setAttribute('cx', x + 0.5);
        dot.setAttribute('cy', y + 0.5);
        dot.setAttribute('r', 0.4);
        dot.setAttribute('class', `dot${moon ? ' m' : ''}${sun ? ' s' : ''}`);
        // 離中心越遠越晚亮起
        dot.style.transitionDelay = `${Math.round(d * 26)}ms`;
        svg.appendChild(dot);
      }
    }
  };

  buildThemeIcon($('#themeIcon'));
  applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark', false);

  themeSwitch.addEventListener('click', (e) => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
    // 用滑鼠點擊後把焦點還給盤面，空白鍵才不會變成切換主題
    if (e.detail > 0 && status === 'playing') boardEl.focus({ preventScroll: true });
  });

  // 還沒手動選過時，跟著系統設定變動
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!hasSavedTheme()) applyTheme(e.matches ? 'dark' : 'light', false);
  });

  /* ================= 觸控按鍵的點陣圖示 ================= */
  const flipH = (rows) => rows.map((r) => [...r].reverse().join(''));
  const transpose = (rows) => rows.map((_, y) => rows.map((r) => r[y]).join(''));
  const ARROW_LEFT = ['...#...', '..#....', '.#.....', '#######', '.#.....', '..#....', '...#...'];
  const ICONS = {
    left: ARROW_LEFT,
    right: flipH(ARROW_LEFT),
    down: transpose(flipH(ARROW_LEFT)),
    drop: ['...#...', '...#...', '.#.#.#.', '..###..', '...#...', '.......', '#######'],
    rotate: ['..###.#', '.#...##', '#...###', '#......', '#.....#', '.#...#.', '..###..'],
    hold: ['#######', '#.....#', '#.###.#', '#.###.#', '#.###.#', '#.....#', '#######'],
  };
  const bitmapIcon = (rows) => {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${rows[0].length} ${rows.length}`);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    rows.forEach((row, y) => [...row].forEach((ch, x) => {
      if (ch !== '#') return;
      const dot = document.createElementNS(SVG_NS, 'circle');
      dot.setAttribute('cx', x + 0.5);
      dot.setAttribute('cy', y + 0.5);
      dot.setAttribute('r', 0.4);
      svg.appendChild(dot);
    }));
    return svg;
  };

  /* ================= 方塊上的點陣圖 ================= */
  // 每種方塊一個 5×5 點陣圖（純幾何圖形，不含文字），轉成 SVG 遮罩交給 CSS 上色
  const GLYPHS = {
    I: ['..#..', '.#.#.', '#...#', '.#.#.', '..#..'], // 空心菱形
    O: ['#.#.#', '.#.#.', '#.#.#', '.#.#.', '#.#.#'], // 棋盤格
    T: ['.....', '..#..', '.###.', '#####', '.....'], // 三角形
    S: ['#....', '##...', '.##..', '..##.', '...##'], // 斜紋
    Z: ['.#.#.', '#####', '#####', '.###.', '..#..'], // 愛心
    J: ['.###.', '#...#', '#.#.#', '#...#', '.###.'], // 靶心
    L: ['..#..', '.#.#.', '#.#.#', '.#.#.', '#...#'], // 雙層箭頭
  };
  Object.entries(GLYPHS).forEach(([type, rows]) => {
    let dots = '';
    rows.forEach((row, y) => [...row].forEach((ch, x) => {
      if (ch === '#') dots += `<circle cx='${x + 0.5}' cy='${y + 0.5}' r='.46'/>`;
    }));
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 5'>${dots}</svg>`;
    root.style.setProperty(`--g-${type}`, `url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
  });

  /* ================= 方塊樣式切換（圓點 ↔ 點陣圖案） ================= */
  const TILE_KEY = 'dot-tetris-tile';
  const tileSwitch = $('#tileSwitch');
  const DOT_ICON = ['.....', '.###.', '.###.', '.###.', '.....'];
  [[DOT_ICON, 'ico-dot'], [GLYPHS.I, 'ico-glyph']].forEach(([rows, cls]) => {
    const svg = bitmapIcon(rows);
    svg.classList.add(cls);
    tileSwitch.appendChild(svg);
  });
  const applyTile = (mode, save) => {
    root.dataset.tile = mode;
    tileSwitch.setAttribute('aria-checked', String(mode === 'glyph'));
    if (save) {
      try { localStorage.setItem(TILE_KEY, mode); } catch (e) { /* 無法儲存就只在本次生效 */ }
    }
  };
  applyTile(root.dataset.tile === 'dot' ? 'dot' : 'glyph', false);
  tileSwitch.addEventListener('click', (e) => {
    applyTile(root.dataset.tile === 'glyph' ? 'dot' : 'glyph', true);
    say(root.dataset.tile === 'glyph' ? '方塊樣式：點陣圖案' : '方塊樣式：圓點');
    if (e.detail > 0 && status === 'playing') boardEl.focus({ preventScroll: true });
  });

  /* ================= 遊戲資料 ================= */
  const COLS = 10;
  const ROWS = 20;
  const BUF = 2; // 盤面上方看不到的緩衝列，方塊從這裡生成
  const H = ROWS + BUF;
  const LOCK_DELAY = 500;
  const MAX_LOCK_RESETS = 15;
  const CLEAR_MS = 300;
  const BEST_KEY = 'dot-tetris-best';
  const NAMES = { I: '長條', O: '方形', T: 'T 形', S: 'S 形', Z: 'Z 形', J: 'J 形', L: 'L 形' };

  const SHAPES = {
    I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    J: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
    L: [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
    O: [[1, 1], [1, 1]],
    S: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  };

  // SRS 踢牆表（y 以「向上為正」記錄，使用時反轉）
  const KICKS = {
    '01': [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    '10': [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
    '12': [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
    '21': [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    '23': [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
    '32': [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
    '30': [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
    '03': [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
  };
  const KICKS_I = {
    '01': [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
    '10': [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
    '12': [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
    '21': [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
    '23': [[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],
    '32': [[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],
    '30': [[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]],
    '03': [[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],
  };

  const rotateMatrix = (m, dir) => {
    const n = m.length;
    return m.map((row, y) => row.map((_, x) => (dir > 0 ? m[n - 1 - x][y] : m[x][n - 1 - y])));
  };

  /* ================= DOM ================= */
  const boardEl = $('#board');
  const overlay = $('#overlay');
  const overlayTitle = $('#overlayTitle');
  const overlayText = $('#overlayText');
  const overlayBtn = $('#overlayBtn');
  const pauseBtn = $('#pauseBtn');
  const liveEl = $('#live');
  const scoreEl = $('#score');
  const levelEl = $('#level');
  const linesEl = $('#lines');
  const bestEl = $('#best');
  const holdText = $('#holdText');
  const nextText = $('#nextText');

  const makeCells = (parent, count, cols) => {
    const list = [];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'cell';
      if (cols) el.style.setProperty('--d', Math.abs((i % cols) - (cols - 1) / 2));
      parent.appendChild(el);
      list.push(el);
    }
    return list;
  };
  const cells = makeCells(boardEl, COLS * ROWS, COLS);
  const shown = new Array(COLS * ROWS).fill('');
  const holdCells = makeCells($('#holdMini'), 8);
  const nextCells = [0, 1, 2].map((i) => makeCells($(`#next${i}`), 8));

  document.querySelectorAll('.pad-btn').forEach((btn) => btn.appendChild(bitmapIcon(ICONS[btn.dataset.act])));

  /* ================= 遊戲狀態 ================= */
  let grid = [];
  let cur = null;
  let bag = [];
  let queue = [];
  let hold = null;
  let canHold = true;
  let score = 0;
  let lines = 0;
  let level = 1;
  let best = 0;
  let status = 'idle'; // idle | playing | paused | over
  let dropAcc = 0;
  let lockTimer = 0;
  let lockResets = 0;
  let clearing = null;
  let dirty = true;
  let rafId = 0;
  let lastTime = 0;

  try { best = Number(localStorage.getItem(BEST_KEY)) || 0; } catch (e) { best = 0; }

  const say = (msg) => { liveEl.textContent = msg; };

  // 7-bag：每 7 個方塊為一袋，洗牌後依序發出
  const takeFromBag = () => {
    if (!bag.length) {
      bag = Object.keys(SHAPES);
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
    }
    return bag.pop();
  };

  const collides = (m, px, py) => {
    for (let y = 0; y < m.length; y++) {
      for (let x = 0; x < m.length; x++) {
        if (!m[y][x]) continue;
        const gx = px + x;
        const gy = py + y;
        if (gx < 0 || gx >= COLS || gy >= H) return true;
        if (gy >= 0 && grid[gy][gx]) return true;
      }
    }
    return false;
  };

  const grounded = () => cur && collides(cur.m, cur.x, cur.y + 1);

  const touchLock = () => {
    if (lockResets < MAX_LOCK_RESETS) { lockTimer = 0; lockResets++; }
  };

  const spawn = (type) => {
    cur = { type, m: SHAPES[type], rot: 0, x: type === 'O' ? 4 : 3, y: 0 };
    dropAcc = 0; lockTimer = 0; lockResets = 0;
    if (collides(cur.m, cur.x, cur.y)) { gameOver(); return; }
    if (!collides(cur.m, cur.x, cur.y + 1)) cur.y++;
    dirty = true;
  };

  const spawnNext = () => {
    const type = queue.shift();
    queue.push(takeFromBag());
    canHold = true;
    drawSide();
    spawn(type);
  };

  const move = (dx, dy) => {
    if (!cur || collides(cur.m, cur.x + dx, cur.y + dy)) return false;
    cur.x += dx; cur.y += dy;
    if (dy > 0) lockTimer = 0; else touchLock();
    dirty = true;
    return true;
  };

  const rotate = (dir) => {
    if (!cur || cur.type === 'O') return;
    const to = (cur.rot + dir + 4) % 4;
    const m = rotateMatrix(cur.m, dir);
    const table = (cur.type === 'I' ? KICKS_I : KICKS)[`${cur.rot}${to}`];
    for (const [kx, ky] of table) {
      if (!collides(m, cur.x + kx, cur.y - ky)) {
        cur.m = m; cur.rot = to; cur.x += kx; cur.y -= ky;
        touchLock();
        dirty = true;
        return;
      }
    }
  };

  const ghostY = () => {
    let y = cur.y;
    while (!collides(cur.m, cur.x, y + 1)) y++;
    return y;
  };

  const hardDrop = () => {
    if (!cur) return;
    const y = ghostY();
    score += (y - cur.y) * 2;
    cur.y = y;
    lock();
  };

  const holdPiece = () => {
    if (!cur || !canHold) return;
    const type = cur.type;
    if (hold) { const t = hold; hold = type; spawn(t); } else { hold = type; spawnNext(); }
    canHold = false;
    drawSide();
  };

  const lock = () => {
    let visible = false;
    cur.m.forEach((row, y) => row.forEach((v, x) => {
      if (!v) return;
      const gy = cur.y + y;
      if (gy >= 0) grid[gy][cur.x + x] = cur.type;
      if (gy >= BUF) visible = true;
    }));
    cur = null;
    dirty = true;
    if (!visible) { gameOver(); return; } // 整個方塊都鎖在可視範圍外

    const full = [];
    for (let y = 0; y < H; y++) if (grid[y].every(Boolean)) full.push(y);
    if (!full.length) { updateStats(); spawnNext(); return; }
    if (reduceMotion.matches) { finishClear(full); return; }
    clearing = { rows: full, t: CLEAR_MS };
  };

  const finishClear = (rows) => {
    clearing = null;
    rows.forEach((y) => { grid.splice(y, 1); grid.unshift(new Array(COLS).fill(null)); });
    const n = rows.length;
    score += [0, 100, 300, 500, 800][n] * level;
    lines += n;
    const newLevel = Math.floor(lines / 10) + 1;
    say(newLevel > level ? `消除 ${n} 行，升到等級 ${newLevel}` : `消除 ${n} 行`);
    level = newLevel;
    updateStats();
    dirty = true;
    spawnNext();
  };

  const dropInterval = () => Math.max(60, 800 * Math.pow(0.85, level - 1));

  const update = (dt) => {
    if (clearing) {
      clearing.t -= dt;
      if (clearing.t <= 0) finishClear(clearing.rows);
      return;
    }
    if (!cur) return;
    if (grounded()) {
      lockTimer += dt;
      if (lockTimer >= LOCK_DELAY) lock();
      return;
    }
    dropAcc += dt;
    const step = dropInterval();
    while (dropAcc >= step) {
      dropAcc -= step;
      if (!move(0, 1)) break;
    }
  };

  /* ================= 繪製 ================= */
  // 只更新有變化的格子，避免每幀重寫 200 個節點
  const render = () => {
    dirty = false;
    const want = new Array(COLS * ROWS).fill('');
    for (let y = BUF; y < H; y++) {
      for (let x = 0; x < COLS; x++) {
        if (grid[y][x]) want[(y - BUF) * COLS + x] = `f p-${grid[y][x]}`;
      }
    }
    if (clearing) {
      clearing.rows.forEach((y) => {
        if (y < BUF) return;
        for (let x = 0; x < COLS; x++) want[(y - BUF) * COLS + x] += ' x';
      });
    }
    if (cur) {
      const gy = ghostY();
      const put = (py, cls) => cur.m.forEach((row, y) => row.forEach((v, x) => {
        const ry = py + y - BUF;
        if (v && ry >= 0) want[ry * COLS + cur.x + x] = cls;
      }));
      put(gy, 'g');
      put(cur.y, `f p-${cur.type}`);
    }
    for (let i = 0; i < want.length; i++) {
      if (want[i] !== shown[i]) {
        shown[i] = want[i];
        cells[i].className = want[i] ? `cell ${want[i]}` : 'cell';
      }
    }
  };

  // 在 4×2 的小盤裡置中畫出方塊
  const drawMini = (list, type) => {
    list.forEach((el) => { el.className = 'cell'; });
    if (!type) return;
    const rows = SHAPES[type].filter((r) => r.some(Boolean));
    const xs = rows.flatMap((r) => r.map((v, x) => (v ? x : -1)).filter((x) => x >= 0));
    const minX = Math.min(...xs);
    const w = Math.max(...xs) - minX + 1;
    const off = Math.floor((4 - w) / 2) - minX;
    rows.forEach((r, y) => r.forEach((v, x) => {
      if (v) list[y * 4 + x + off].className = `cell f p-${type}`;
    }));
  };

  const drawSide = () => {
    drawMini(holdCells, hold);
    nextCells.forEach((list, i) => drawMini(list, queue[i]));
    holdText.textContent = `保留：${hold ? NAMES[hold] : '無'}`;
    nextText.textContent = queue.length ? `接下來：${queue.map((t) => NAMES[t]).join('、')}` : '';
  };

  const updateStats = () => {
    if (score > best) best = score;
    scoreEl.textContent = score;
    levelEl.textContent = level;
    linesEl.textContent = lines;
    bestEl.textContent = best;
  };

  /* ================= 流程 ================= */
  const frame = (now) => {
    if (status !== 'playing') { rafId = 0; return; }
    const dt = Math.min(now - lastTime, 100);
    lastTime = now;
    update(dt);
    if (dirty) render();
    rafId = requestAnimationFrame(frame);
  };

  const run = () => {
    lastTime = performance.now();
    if (!rafId) rafId = requestAnimationFrame(frame);
  };

  const showOverlay = (title, text, btn) => {
    overlayTitle.textContent = title;
    overlayText.textContent = text;
    overlayBtn.textContent = btn;
    overlay.hidden = false;
  };

  const syncPauseBtn = () => {
    pauseBtn.disabled = status === 'idle' || status === 'over';
    pauseBtn.setAttribute('aria-pressed', String(status === 'paused'));
    pauseBtn.textContent = status === 'paused' ? '繼續' : '暫停';
  };

  const start = () => {
    grid = Array.from({ length: H }, () => new Array(COLS).fill(null));
    bag = []; queue = [takeFromBag(), takeFromBag(), takeFromBag()];
    hold = null; score = 0; lines = 0; level = 1; clearing = null; cur = null;
    status = 'playing';
    overlay.hidden = true;
    updateStats();
    spawnNext();
    syncPauseBtn();
    boardEl.focus({ preventScroll: true });
    say('遊戲開始');
    render();
    run();
  };

  const pause = () => {
    if (status !== 'playing') return;
    status = 'paused';
    syncPauseBtn();
    showOverlay('暫停中', '休息一下，準備好再繼續。', '繼續遊戲');
    say('遊戲已暫停');
  };

  const resume = () => {
    if (status !== 'paused') return;
    status = 'playing';
    overlay.hidden = true;
    syncPauseBtn();
    boardEl.focus({ preventScroll: true });
    say('繼續遊戲');
    run();
  };

  function gameOver() {
    status = 'over';
    cur = null;
    updateStats();
    try { localStorage.setItem(BEST_KEY, String(best)); } catch (e) { /* 忽略 */ }
    syncPauseBtn();
    render();
    showOverlay('遊戲結束', `這局拿到 ${score} 分，共消除 ${lines} 行。`, '再玩一次');
    say(`遊戲結束，分數 ${score}`);
    overlayBtn.focus({ preventScroll: true });
  }

  const overlayAction = () => (status === 'paused' ? resume() : start());

  const act = (name) => {
    if (status !== 'playing' || clearing) return;
    switch (name) {
      case 'left': move(-1, 0); break;
      case 'right': move(1, 0); break;
      case 'down': if (move(0, 1)) { score += 1; dropAcc = 0; updateStats(); } break;
      case 'rotate': rotate(1); break;
      case 'rotateCCW': rotate(-1); break;
      case 'drop': hardDrop(); break;
      case 'hold': holdPiece(); break;
      default:
    }
    if (dirty && status === 'playing') render();
  };

  /* ================= 輸入 ================= */
  const KEYMAP = {
    ArrowLeft: 'left', ArrowRight: 'right', ArrowDown: 'down', ArrowUp: 'rotate',
    x: 'rotate', X: 'rotate', z: 'rotateCCW', Z: 'rotateCCW',
    ' ': 'drop', c: 'hold', C: 'hold',
  };
  const NO_REPEAT = new Set(['rotate', 'rotateCCW', 'drop', 'hold']);

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const onButton = e.target instanceof Element && e.target.closest('button');
    const k = e.key;
    // 焦點在按鈕上時，空白鍵與 Enter 交還給按鈕本身（例如主題開關）
    if ((k === ' ' || k === 'Enter') && onButton) return;
    if (k === 'p' || k === 'P' || k === 'Escape') {
      if (status === 'playing') pause(); else if (status === 'paused') resume(); else return;
      if (status === 'paused') overlayBtn.focus({ preventScroll: true });
      e.preventDefault();
      return;
    }
    if (status !== 'playing') {
      if (k === 'Enter') { e.preventDefault(); overlayAction(); }
      return;
    }
    const name = KEYMAP[k];
    if (!name) return;
    e.preventDefault();
    if (e.repeat && NO_REPEAT.has(name)) return;
    act(name);
  });

  overlayBtn.addEventListener('click', overlayAction);
  pauseBtn.addEventListener('click', () => {
    if (status === 'playing') { pause(); overlayBtn.focus({ preventScroll: true }); } else resume();
  });

  // 觸控列：按住左右與下可以連續移動
  document.querySelectorAll('.pad-btn').forEach((btn) => {
    const name = btn.dataset.act;
    let delayId = 0;
    let repeatId = 0;
    const stop = () => { clearTimeout(delayId); clearInterval(repeatId); };
    btn.addEventListener('pointerdown', (e) => {
      if (e.button > 0) return;
      act(name);
      if ('repeat' in btn.dataset) {
        stop();
        delayId = setTimeout(() => { repeatId = setInterval(() => act(name), 55); }, 190);
      }
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => btn.addEventListener(t, stop));
    btn.addEventListener('mousedown', (e) => e.preventDefault()); // 不搶走盤面的焦點
    btn.addEventListener('contextmenu', (e) => e.preventDefault());
    // 鍵盤啟動（Enter／空白鍵）時 detail 為 0
    btn.addEventListener('click', (e) => { if (e.detail === 0) act(name); });
  });

  // 切到別的分頁時自動暫停
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });

  /* ================= 初始畫面 ================= */
  grid = Array.from({ length: H }, () => new Array(COLS).fill(null));
  updateStats();
  drawSide();
  syncPauseBtn();
  render();

})();
