// 日語會話頁：關鍵字篩選、放大字卡、發音、複製、情境列高亮
// 採一般 <script>（不用 type="module"），與全站其他腳本一致，直接點開 HTML 也能執行
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const toast = msg => { if (window.toast) window.toast(msg); };

  const secs = $$('[data-scene-sec]');
  const cards = $$('.phr-card').map(el => {
    const sec = el.closest('[data-scene-sec]');
    return {
      el, sec,
      scene: $('h2', sec).childNodes[1] ? $('h2', sec).childNodes[1].textContent.trim() : '',
      zh: $('.phr-card__zh', el).textContent,
      ja: $('.phr-card__ja', el).textContent,
      ro: $('.phr-card__ro', el).textContent,
    };
  });
  if (!cards.length) return;

  // 有 JavaScript 才顯示操作按鈕與搜尋框
  $$('.phr-card__acts').forEach(el => { el.hidden = false; });

  // ---------- 發音：使用裝置內建的日語語音 ----------
  const synth = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window ? window.speechSynthesis : null;
  let jaVoice = null;
  const pickVoice = () => { jaVoice = synth.getVoices().find(v => /^ja(-|_|$)/i.test(v.lang)) || null; };
  let speaking = null;
  const stopSpeak = () => { if (synth) synth.cancel(); if (speaking) speaking.classList.remove('is-on'); speaking = null; };
  const speak = (text, btn) => {
    if (!synth) return;
    const same = speaking === btn;
    stopSpeak();
    if (same) return;                                   // 再按一次＝停止
    pickVoice();
    if (!jaVoice && synth.getVoices().length) { toast('這台裝置沒有日語語音，無法播放發音。'); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ja-JP'; if (jaVoice) u.voice = jaVoice;
    u.rate = .85;                                        // 放慢一點，方便跟著念
    const done = () => { if (speaking === btn) { btn.classList.remove('is-on'); speaking = null; } };
    u.onend = done;
    u.onerror = e => { done(); if (e.error !== 'canceled' && e.error !== 'interrupted') toast('無法播放發音，離線時部分裝置不支援。'); };
    speaking = btn; btn.classList.add('is-on');
    synth.speak(u);
  };
  if (synth) {
    pickVoice();
    if ('onvoiceschanged' in synth) synth.addEventListener('voiceschanged', pickVoice);
    $$('[data-act="speak"], [data-say-speak]').forEach(b => { b.hidden = false; });
  }

  // ---------- 複製日文 ----------
  const copy = async text => {
    try { await navigator.clipboard.writeText(text); return true; } catch (_) { /* 沒有權限時改用舊方法 */ }
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
    ta.remove(); return ok;
  };

  // ---------- 放大字卡 ----------
  const dlg = $('#phr-say');
  const canDialog = dlg && typeof dlg.showModal === 'function';
  let cur = -1, opener = null;
  const visible = () => cards.filter(c => !c.el.hidden);
  const show = i => {
    const list = visible(); if (!list.length) return;
    cur = (i + list.length) % list.length;               // 頭尾相接
    const c = list[cur];
    $('#phr-say-scene').textContent = `${c.scene}　${cur + 1} / ${list.length}`;
    const ja = $('#phr-say-ja'); ja.textContent = c.ja; ja.classList.toggle('is-long', c.ja.length > 16);
    $('#phr-say-ro').textContent = c.ro;
    $('#phr-say-zh').textContent = c.zh;
    stopSpeak();
  };
  const openSay = (card, btn) => {
    if (!canDialog) return;
    opener = btn; show(visible().indexOf(card));
    dlg.showModal();
    $('[data-say-close]', dlg).focus();
  };
  if (canDialog) {
    dlg.addEventListener('click', e => {
      if (e.target.closest('[data-say-close]')) dlg.close();
      else if (e.target.closest('[data-say-prev]')) show(cur - 1);
      else if (e.target.closest('[data-say-next]')) show(cur + 1);
      else if (e.target.closest('[data-say-speak]')) speak(visible()[cur].ja, e.target.closest('[data-say-speak]'));
    });
    dlg.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(cur - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); show(cur + 1); }
    });
    // 左右滑動換句
    let x0 = null;
    dlg.addEventListener('touchstart', e => { x0 = e.touches.length === 1 ? e.touches[0].clientX : null; }, { passive: true });
    dlg.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 60) show(cur + (dx < 0 ? 1 : -1));
    }, { passive: true });
    dlg.addEventListener('close', () => { stopSpeak(); if (opener) opener.focus(); opener = null; });
  } else {
    $$('[data-act="say"]').forEach(b => { b.hidden = true; });
  }

  // 卡片上的三個按鈕（事件委派）
  $('#main').addEventListener('click', async e => {
    const btn = e.target.closest('.phr-card [data-act]'); if (!btn) return;
    const card = cards.find(c => c.el === btn.closest('.phr-card'));
    const act = btn.dataset.act;
    if (act === 'say') openSay(card, btn);
    else if (act === 'speak') speak(card.ja, btn);
    else if (act === 'copy') toast((await copy(card.ja)) ? `已複製：${card.ja}` : '無法複製，請長按日文手動複製。');
  });

  // ---------- 關鍵字篩選 ----------
  const find = $('.phr-find'), q = $('#phr-q'), status = $('#phr-status'), none = $('#phr-none');
  const norm = s => s.toLowerCase().replace(/\s+/g, '');
  cards.forEach(c => { c.key = norm(c.zh + c.ja + c.ro + c.scene); });
  const apply = () => {
    const words = q.value.toLowerCase().split(/\s+/).filter(Boolean).map(norm);
    let n = 0;
    cards.forEach(c => { const ok = words.every(w => c.key.includes(w)); c.el.hidden = !ok; if (ok) n++; });
    secs.forEach(s => { s.hidden = !$$('.phr-card', s).some(el => !el.hidden); });
    none.hidden = n > 0;
    status.textContent = words.length ? `找到 ${n} 句` : '';
  };
  if (find) {
    find.hidden = false;
    q.addEventListener('input', apply);
    $('#phr-clear').addEventListener('click', () => { q.value = ''; apply(); q.focus(); });
  }

  // ---------- 情境列：標示目前讀到的情境 ----------
  const links = $$('.phr-nav a');
  const setCurrent = id => links.forEach(a => {
    const on = a.dataset.scene === id;
    if (on) { a.setAttribute('aria-current', 'true'); a.closest('ul').scrollTo({ left: a.offsetLeft - 16, behavior: 'auto' }); }
    else a.removeAttribute('aria-current');
  });
  let ticking = false;
  const spy = () => {
    ticking = false;
    const line = 180;                                    // 頁首＋情境列的高度，再多留一點
    let id = null;
    secs.forEach(s => { if (!s.hidden && s.getBoundingClientRect().top <= line) id = s.id; });
    const first = secs.find(s => !s.hidden);
    setCurrent(id || (first && first.id));
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  spy();
})();
