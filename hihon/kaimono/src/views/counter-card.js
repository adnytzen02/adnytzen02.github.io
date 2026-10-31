// 店員出示卡：大字日文、條碼、指差會話短語
import { store } from '../store.js';
import { PHRASES } from '../data.js';
import { createDialog, openDialog, closeDialog, esc, icon, toast, barcodeSVG } from '../ui.js';
import { openForm } from './item-form.js';

let mode = 'ja'; // ja：只顯示日文大字；both：中日對照

function body(item) {
  const nameJa = item.nameJa || item.name;
  const bar = item.jan ? barcodeSVG(item.jan) : '';
  const zh = (t) => (mode === 'both' ? `<span class="zh">${esc(t)}</span>` : '');
  const blocks = [
    { ja: 'こちらの商品を探しています。', zh: '我在找這個商品。' },
    item.taxFree ? { ja: '免税でお願いします。パスポートはこちらです。', zh: '我要辦理免稅，這是我的護照。' } : null,
    item.discountPct ? { ja: 'このクーポン（優待）は使えますか？', zh: '請問可以使用優惠券（優惠）嗎？' } : null,
    item.fragile ? { ja: '割れ物なので、しっかり包んでいただけますか？', zh: '這是易碎品，可以包得牢一點嗎？' } : null,
  ].filter(Boolean);

  return `
  <div class="dlg-shell counter-shell" data-mode="${mode}">
    <header class="dlg-head">
      <p class="eyebrow">${icon('stars', 'sm')}COUNTER MEMO CARD · 專櫃出示卡</p>
      <h2 id="counter-title" class="dlg-title">${esc(item.name)}</h2>
      <div class="seg seg-text" role="group" aria-label="顯示模式">
        <button type="button" class="${mode === 'ja' ? 'on' : ''}" aria-pressed="${mode === 'ja'}" data-mode="ja">${icon('visibility', 'sm')}日文大字</button>
        <button type="button" class="${mode === 'both' ? 'on' : ''}" aria-pressed="${mode === 'both'}" data-mode="both">${icon('translate', 'sm')}中日對照</button>
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="關閉出示卡">${icon('close')}</button>
    </header>

    <div class="dlg-scroll counter-body" data-show>
      ${item.nameJa ? '' : `
      <div class="counter-tip" role="note">
        ${icon('lightbulb')}
        <div><p><strong>建議補上日文名稱或 JAN 條碼</strong></p>
        <p>目前顯示的是中文品名，店員可能看不懂。${item.jan ? '已有條碼，可以先請店員掃描。' : ''}</p></div>
        <button type="button" class="btn btn-sm btn-ghost" data-fix>${icon('edit', 'sm')}立即補上</button>
      </div>`}

      <div class="counter-banner">
        <span class="counter-banner-icon">${icon('receipt_long')}</span>
        <div><p class="counter-to">TO STORE ASSOCIATE（販売員様へ）</p>
        <p class="counter-hello" lang="ja">お手数ですが、こちらをご覧ください。</p></div>
      </div>

      <section class="counter-item">
        ${bar ? `
        <button type="button" class="counter-barcode" data-barcode aria-label="放大 JAN 條碼 ${esc(item.jan)}，全螢幕給店員掃描">
          ${bar}
          <span class="counter-barcode-num mono">${esc(item.jan)}</span>
          <span class="counter-barcode-hint">${icon('zoom_in', 'sm')}點條碼可全螢幕放大</span>
        </button>` : item.jan ? `<p class="counter-jan-text"><span class="counter-label" lang="ja">JAN</span> <span class="mono">${esc(item.jan)}</span></p>` : ''}
        <p class="counter-label" lang="ja">対象商品</p>
        <p class="counter-name" lang="ja">${esc(nameJa)}</p>
        ${item.brand ? `<p class="counter-brand">${esc(item.brand)}</p>` : ''}
        <p class="counter-qty" lang="ja">希望数量：<strong>${item.qty}</strong> 点${mode === 'both' ? `<span class="zh">（想買 ${item.qty} 件）</span>` : ''}</p>
      </section>

      <section class="counter-lines">
        ${blocks.map((b) => `<button type="button" class="phrase phrase-lg" data-ja="${esc(b.ja)}" data-zh="${esc(b.zh)}"><span lang="ja">「${esc(b.ja)}」</span>${zh(b.zh)}</button>`).join('')}
      </section>

      <section class="counter-phrases" aria-labelledby="ph-title">
        <h3 id="ph-title" class="section-title">${icon('touch_app', 'sm')}指差會話：點一下放大給店員看</h3>
        <div class="phrase-grid">
          ${PHRASES.map((p) => `<button type="button" class="phrase" data-ja="${esc(p.ja)}" data-zh="${esc(p.zh)}"><span lang="ja">「${esc(p.ja)}」</span><span class="zh">${esc(p.zh)}</span></button>`).join('')}
        </div>
      </section>
    </div>

    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-full>${icon('fullscreen')}全螢幕</button>
      <button type="button" class="btn btn-gold grow" data-copy>${icon('content_copy')}複製日文</button>
    </footer>

    <div class="phrase-zoom" data-zoom hidden>
      <div class="zoom-barcode" data-zoom-bar hidden>${bar}<p class="mono">${esc(item.jan)}</p></div>
      <p class="zoom-ja" lang="ja"></p>
      <p class="zoom-zh"></p>
      <button type="button" class="btn btn-slate" data-zoom-close>${icon('close')}收起</button>
    </div>
  </div>`;
}

export function openCounter(id) {
  const item = store.getItem(id);
  if (!item) return;
  const dlg = createDialog('dlg-counter', body(item), 'counter-title');
  let lastPhrase = null;

  const rerender = () => {
    const fresh = store.getItem(id);
    if (!fresh) { closeDialog(dlg); return; }
    dlg.querySelector('.dlg-shell').outerHTML = body(fresh);
  };

  dlg.addEventListener('click', async (e) => {
    const t = e.target;
    if (t.closest('.dlg-close')) { closeDialog(dlg); return; }
    const m = t.closest('[data-mode]');
    if (m && m.tagName === 'BUTTON') {
      mode = m.dataset.mode;
      rerender();
      dlg.querySelector(`button[data-mode="${mode}"]`)?.focus();
      return;
    }
    if (t.closest('[data-fix]')) { openForm(id); return; }
    const phrase = t.closest('.phrase, [data-barcode]');
    if (phrase) {
      lastPhrase = phrase;
      const zoom = dlg.querySelector('[data-zoom]');
      const isBar = phrase.matches('[data-barcode]');
      // 條碼放大時白底，掃描最穩定
      zoom.classList.toggle('is-barcode', isBar);
      zoom.querySelector('[data-zoom-bar]').hidden = !isBar;
      zoom.querySelector('.zoom-ja').textContent = isBar ? '' : phrase.dataset.ja;
      zoom.querySelector('.zoom-zh').textContent = isBar ? '' : phrase.dataset.zh;
      zoom.hidden = false;
      zoom.querySelector('[data-zoom-close]').focus();
      return;
    }
    if (t.closest('[data-zoom-close]')) {
      dlg.querySelector('[data-zoom]').hidden = true;
      lastPhrase?.focus();
      return;
    }
    if (t.closest('[data-full]')) {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else await dlg.querySelector('.counter-shell').requestFullscreen();
      } catch {
        toast({ title: '這個瀏覽器不支援全螢幕', message: '可以把手機轉橫向或放大畫面。', tone: 'muted' });
      }
      return;
    }
    if (t.closest('[data-copy]')) {
      const fresh = store.getItem(id);
      const text = [`対象商品：${fresh.nameJa || fresh.name}`, `希望数量：${fresh.qty}点`, fresh.jan ? `JAN：${fresh.jan}` : '', fresh.taxFree ? '免税でお願いします。' : '']
        .filter(Boolean).join('\n');
      try {
        await navigator.clipboard.writeText(text);
        toast({ title: '已複製日文', message: '可以貼到翻譯 App 或訊息裡。', tone: 'muted', duration: 3000 });
      } catch {
        toast({ title: '無法複製', message: '瀏覽器不允許存取剪貼簿，請手動選取文字。', tone: 'error' });
      }
    }
  });

  // 放大短語時，Esc 先收起放大層
  dlg.addEventListener('keydown', (e) => {
    const zoom = dlg.querySelector('[data-zoom]');
    if (e.key === 'Escape' && !zoom.hidden) {
      e.preventDefault();
      e.stopPropagation();
      zoom.hidden = true;
      lastPhrase?.focus();
    }
  }, { capture: true });

  // 從「立即補上」修改商品後，出示卡同步更新
  const unsub = store.subscribe(rerender);

  openDialog(dlg, {
    onClose: () => {
      unsub();
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    },
  });
}
