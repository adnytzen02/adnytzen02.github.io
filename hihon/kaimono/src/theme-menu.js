// 右上角的「外觀與主題」選單：同一個地方切換深淺色與主題，選了立即套用
import { THEMES, SKINS, getTheme, setTheme, getSkin, setSkin } from './theme.js';
import { esc, icon } from './ui.js';

export function initThemeMenu(btn) {
  const pop = document.createElement('div');
  pop.className = 'theme-pop';
  pop.id = 'theme-pop';
  pop.setAttribute('role', 'dialog');
  pop.setAttribute('aria-label', '外觀與主題');
  pop.hidden = true;
  document.body.appendChild(pop); // 放在 body 底下，不受頁首的定位與變形影響
  btn.setAttribute('aria-controls', 'theme-pop');

  const render = () => {
    pop.innerHTML = `
      <p class="theme-pop-title" id="tp-l1">外觀</p>
      <div class="seg-pills" role="radiogroup" aria-labelledby="tp-l1">
        ${THEMES.map((t) => `<label class="pill"><input type="radio" name="pop-theme" value="${t.id}" ${getTheme() === t.id ? 'checked' : ''}><span>${icon(t.icon, 'sm')}${t.label}</span></label>`).join('')}
      </div>
      <p class="theme-pop-title" id="tp-l2">主題</p>
      <div class="theme-pop-skins" role="radiogroup" aria-labelledby="tp-l2">
        ${SKINS.map((k) => `<label class="theme-pop-skin"><input type="radio" name="pop-skin" value="${k.id}" ${getSkin() === k.id ? 'checked' : ''}>
          <span><i class="skin-dot" aria-hidden="true" style="--c1:${k.preview.light.accent};--c2:${k.preview.dark.bg}"></i>${esc(k.label)}${icon('check', 'sm')}</span></label>`).join('')}
      </div>`;
  };

  // 選單貼著按鈕：按鈕在畫面下半部（首頁的頁首在底部）就往上開
  const place = () => {
    const r = btn.getBoundingClientRect();
    const w = pop.offsetWidth;
    pop.style.left = `${Math.max(12, Math.min(innerWidth - w - 12, r.right - w))}px`;
    if (r.top > innerHeight / 2) { pop.style.top = 'auto'; pop.style.bottom = `${innerHeight - r.top + 8}px`; }
    else { pop.style.bottom = 'auto'; pop.style.top = `${r.bottom + 8}px`; }
  };

  const close = (focusBtn = false) => {
    if (pop.hidden) return;
    pop.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    if (focusBtn) btn.focus();
  };
  const open = () => {
    render();
    pop.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    place();
    pop.querySelector('input:checked')?.focus();
  };

  btn.addEventListener('click', () => (pop.hidden ? open() : close()));
  pop.addEventListener('change', (e) => {
    if (e.target.name === 'pop-theme') setTheme(e.target.value);
    if (e.target.name === 'pop-skin') setSkin(e.target.value);
  });
  pop.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); close(true); }
  });
  // 點選單外面、焦點離開選單、捲動或換頁時收起來
  document.addEventListener('pointerdown', (e) => {
    if (!pop.hidden && !pop.contains(e.target) && !btn.contains(e.target)) close();
  });
  pop.addEventListener('focusout', (e) => {
    if (e.relatedTarget && !pop.contains(e.relatedTarget) && e.relatedTarget !== btn) close();
  });
  addEventListener('hashchange', () => close());
  addEventListener('resize', () => { if (!pop.hidden) place(); });
}
