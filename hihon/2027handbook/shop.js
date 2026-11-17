// 購物・百貨頁：商圈分頁切換、梅田路線圖（點路線→圖上亮起＋只顯示那張說明）、立體圖載入
// 一般 <script>（不用 type="module"），直接點兩下打開 HTML 也能執行
(() => {
  'use strict';
  // 立體圖：支援 WebGL、IntersectionObserver、ResizeObserver，且未開省流量時才載入；不支援就維持平面 SVG
  const can3d = (() => {
    if (navigator.connection && navigator.connection.saveData) return false;
    try { const c = document.createElement('canvas'), g = c.getContext('webgl2') || c.getContext('webgl'); g?.getExtension('WEBGL_lose_context')?.loseContext(); return !!g; } catch (_) { return false; }
  })() && 'IntersectionObserver' in window && 'ResizeObserver' in window;
  const loadScript = src => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('無法載入 ' + src)); document.head.appendChild(s); });

  document.querySelectorAll('[data-osk]').forEach(root => {
    // 商圈分頁（左右方向鍵可切換）
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const select = (t, focus) => {
      tabs.forEach(x => {
        const on = x === t;
        x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
        const p = document.getElementById(x.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        const dir = { ArrowRight: 1, ArrowLeft: -1, Home: 0, End: 0 }[e.key];
        if (dir === undefined) return;
        e.preventDefault();
        const n = e.key === 'Home' ? tabs[0] : e.key === 'End' ? tabs[tabs.length - 1] : tabs[(i + dir + tabs.length) % tabs.length];
        select(n, true);
      });
    });
    // 網址帶 #sp-商圈 時直接打開那一頁（例如從搜尋結果點進來）
    const fromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const t = tabs.find(x => x.getAttribute('aria-controls') === id);
      if (t) { select(t); requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' })); }
    };
    fromHash(); addEventListener('hashchange', fromHash);

    // 有路線圖的面板（梅田）
    root.querySelectorAll('[data-osk-station]').forEach(panel => {
      const map = panel.querySelector('.osk-map');
      if (!map) return;
      const list = panel.querySelector('.osk-routes-list');
      const btns = [...panel.querySelectorAll('[data-route-btn]')];
      const host = panel.querySelector('[data-osk3d-host]');
      const toggle = panel.querySelector('[data-osk-toggle]');
      let api3d = null, current = null;
      if (host && can3d) {
        const flat = panel.querySelector('.osk-map__flat');
        host.hidden = false; host.classList.add('is-loading'); flat.hidden = true;
        const fail = err => { host.hidden = true; flat.hidden = false; toggle.hidden = true; console.warn('立體圖未載入：', err); };
        const io = new IntersectionObserver(es => {
          if (!es.some(e => e.isIntersecting)) return;
          io.disconnect();
          (window.THREE ? Promise.resolve() : loadScript(host.dataset.three))
            .then(() => window.OskMap3D ? null : loadScript(host.dataset.src))
            .then(() => {
              try {
                api3d = window.OskMap3D.mount(host, JSON.parse(host.querySelector('[data-osk3d]').textContent));
                if (current) api3d.show(current);
                toggle.hidden = false;
              } catch (err) { fail(err); }
            }).catch(fail);
        }, { rootMargin: '300px 0px' });
        io.observe(host);
        // 立體／平面切換
        toggle.addEventListener('click', () => {
          const toFlat = toggle.getAttribute('aria-pressed') !== 'true';
          toggle.setAttribute('aria-pressed', String(toFlat));
          toggle.textContent = toFlat ? '看立體圖' : '看平面圖';
          host.hidden = toFlat; flat.hidden = !toFlat;
        });
      }
      // 點路線：圖上只亮那條，下方只留那張說明；再點一次恢復全部
      const show = id => {
        current = id; if (api3d) api3d.show(id);
        btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.routeBtn === id)));
        panel.querySelectorAll('.osk-route').forEach(p => p.classList.toggle('is-on', p.dataset.route === id));
        panel.querySelectorAll('[data-route-card]').forEach(c => c.classList.toggle('is-on', c.dataset.routeCard === id));
        if (id) { map.dataset.active = id; list.dataset.filtered = ''; }
        else { delete map.dataset.active; delete list.dataset.filtered; }
      };
      btns.forEach(b => b.addEventListener('click', () => show(b.getAttribute('aria-pressed') === 'true' ? null : b.dataset.routeBtn)));
    });
  });
})();
