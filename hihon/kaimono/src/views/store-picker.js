// 店鋪選單：常用通路快選、自訂店鋪、複選（最多 3 家）；以及勾選已買時詢問「在哪家買到」
import { store } from '../store.js';
import { STORE_GROUPS, ANY_STORE, storeInfo, catalogOf, CATALOG_VERIFIED } from '../storeCatalog.js';
import { normStore, findSimilarStores } from '../storeMatch.js';
import { createDialog, openDialog, closeDialog, esc, icon, toast } from '../ui.js';

export const MAX_STORES = 3;

// 使用者自己的店鋪：自訂標籤＋清單裡出現過、但不在內建清單的店名
export function myStores() {
  const { items, settings } = store.state;
  const names = [...settings.customStores, ...items.flatMap((i) => [...i.stores, i.purchasedStore])].filter(Boolean);
  const seen = new Set();
  return names.filter((n) => {
    const k = normStore(n);
    if (seen.has(k) || catalogOf(n)) return false;
    seen.add(k);
    return true;
  });
}

const chip = (name, selected) => `<button type="button" class="chip chip-sm store-chip ${selected ? 'on' : ''}" data-pick="${esc(name)}" aria-pressed="${selected}">${esc(name)}</button>`;

/* ---------- 新增表單用的店鋪選單 ---------- */

// 店鋪優惠／注意事項說明（表單與店鋪群組共用）
export function storeNotes(info) {
  const lines = [];
  if (info.noTaxFree) lines.push(`<li>${icon('block', 'sm')}${esc(info.note ?? '此店不辦免稅。')}</li>`);
  if (info.dutyNote) lines.push(`<li>${icon('flight_takeoff', 'sm')}${esc(info.dutyNote)}</li>`);
  if (info.couponNote) lines.push(`<li>${icon('local_offer', 'sm')}${esc(info.couponNote)}</li>`);
  if (info.feeNote) lines.push(`<li>${icon('info', 'sm')}${esc(info.feeNote)}</li>`);
  if (info.myNote) lines.push(`<li>${icon('edit_note', 'sm')}${esc(info.myNote)}</li>`);
  if (!lines.length) return '';
  const src = info.source ? `資料來源：${esc(info.source)}，` : '';
  return `<ul class="store-notes">${lines.join('')}</ul>
    <p class="store-src">${src}${catalogOf(info.name) ? `查證日 ${CATALOG_VERIFIED}，` : ''}實際以店家公告為準。</p>`;
}

export function storePickerHTML(selected, anyStore) {
  return `
  <div class="field store-field">
    <span class="label" id="lb-store">目標店鋪 <small>（可複選 ${MAX_STORES} 家，第一家為主選）</small></span>
    <div class="store-selected" data-store-selected aria-live="polite"></div>
    <button type="button" class="btn btn-ghost btn-sm store-open" data-store-open aria-expanded="false" aria-controls="store-panel">${icon('storefront', 'sm')}<span>選擇店鋪</span></button>
    <div class="store-panel" id="store-panel" role="group" aria-labelledby="lb-store" hidden>
      <div class="store-custom">
        <label for="fi-store-custom" class="sr-only">輸入自訂店名</label>
        <input id="fi-store-custom" list="dl-store" placeholder="輸入自訂店名，例如：吉伊卡哇樂園" autocomplete="off" enterkeyhint="done">
        <button type="button" class="btn btn-slate btn-sm" data-store-add>${icon('add', 'sm')}加入</button>
      </div>
      <datalist id="dl-store">${myStores().map((s) => `<option value="${esc(s)}">`).join('')}</datalist>
      <div class="store-suggest" data-store-suggest aria-live="polite"></div>
      <div data-store-groups></div>
    </div>
    <div class="store-info" data-store-info></div>
  </div>`;
}

// 綁定表單內的店鋪選單；onChange 會在選擇變動時呼叫
export function bindStorePicker(root, initial, onChange) {
  let selected = [...initial.stores];
  let anyStore = initial.anyStore;
  const $ = (s) => root.querySelector(s);
  const panel = $('#store-panel');
  const openBtn = $('[data-store-open]');

  const renderGroups = () => {
    const isOn = (n) => selected.some((s) => normStore(s) === normStore(n));
    const mine = myStores();
    $('[data-store-groups]').innerHTML = `
      ${mine.length ? `<p class="store-group-title">${icon('bookmark', 'sm')}我的店鋪</p><div class="pills">${mine.map((n) => chip(n, isOn(n))).join('')}</div>` : ''}
      ${STORE_GROUPS.map((g) => `<p class="store-group-title">${icon(g.icon, 'sm')}${g.label}</p>
        <div class="pills">${g.stores.map((s) => chip(s.name, isOn(s.name))).join('')}</div>`).join('')}
      <p class="store-group-title">${icon('compare_arrows', 'sm')}還沒決定</p>
      <div class="pills"><button type="button" class="chip chip-sm store-chip ${anyStore ? 'on' : ''}" data-any aria-pressed="${anyStore}">${ANY_STORE}</button></div>`;
  };

  const renderSelected = () => {
    const box = $('[data-store-selected]');
    if (anyStore) {
      box.innerHTML = `<span class="sel-chip sel-any">${icon('compare_arrows', 'sm')}${ANY_STORE}<button type="button" class="sel-x" data-any aria-label="取消不限店鋪">${icon('close', 'sm')}</button></span>`;
    } else if (!selected.length) {
      box.innerHTML = '<span class="sel-empty">尚未選擇，按下方按鈕挑選或輸入店名</span>';
    } else {
      box.innerHTML = selected.map((s, i) => `
        <span class="sel-chip ${i === 0 ? 'is-main' : ''}">
          <span class="sel-role">${i === 0 ? '主選' : '備選'}</span>${esc(s)}
          ${i > 0 ? `<button type="button" class="sel-x" data-main="${i}" aria-label="把 ${esc(s)} 設為主選">${icon('arrow_upward', 'sm')}</button>` : ''}
          <button type="button" class="sel-x" data-remove="${i}" aria-label="移除 ${esc(s)}">${icon('close', 'sm')}</button>
        </span>`).join('');
    }
    // 主選店鋪的優惠與注意事項
    const info = selected[0] ? storeInfo(selected[0], store.state.settings.storeMeta) : null;
    $('[data-store-info]').innerHTML = info ? storeNotes(info) : '';
  };

  const changed = (picked) => {
    renderSelected();
    if (!panel.hidden) renderGroups();
    onChange({ stores: [...selected], anyStore, picked });
  };

  const add = (name) => {
    const n = String(name ?? '').trim();
    if (!n) return false;
    if (selected.some((s) => normStore(s) === normStore(n))) return false;
    if (selected.length >= MAX_STORES) {
      toast({ title: `最多選 ${MAX_STORES} 家店`, message: '請先移除一家再加入。', tone: 'muted', duration: 2500 });
      return false;
    }
    selected.push(n);
    anyStore = false;
    return true;
  };

  root.addEventListener('click', (e) => {
    const t = e.target.closest('button');
    if (!t || !root.contains(t)) return;
    if (t.matches('[data-store-open]')) {
      panel.hidden = !panel.hidden;
      openBtn.setAttribute('aria-expanded', String(!panel.hidden));
      openBtn.querySelector('span:last-child').textContent = panel.hidden ? '選擇店鋪' : '收起店鋪選單';
      if (!panel.hidden) renderGroups();
      return;
    }
    if (t.matches('[data-pick]')) {
      const n = t.dataset.pick;
      const idx = selected.findIndex((s) => normStore(s) === normStore(n));
      if (idx > -1) selected.splice(idx, 1);
      else if (!add(n)) return;
      changed(idx > -1 ? null : n);
      root.querySelector(`[data-pick="${CSS.escape(n)}"]`)?.focus();
    } else if (t.matches('[data-any]')) {
      anyStore = !anyStore;
      if (anyStore) selected = [];
      changed(null);
      root.querySelector('[data-store-groups] [data-any], [data-store-open]')?.focus();
    } else if (t.matches('[data-remove]')) {
      selected.splice(Number(t.dataset.remove), 1);
      changed(null);
      openBtn.focus();
    } else if (t.matches('[data-main]')) {
      const [s] = selected.splice(Number(t.dataset.main), 1);
      selected.unshift(s);
      changed(s);
    } else if (t.matches('[data-store-add]')) {
      addCustom();
    } else if (t.matches('[data-use-store]')) {
      $('#fi-store-custom').value = t.dataset.useStore;
      addCustom();
    }
  });

  // 自訂店名：加入後記成「我的店鋪」標籤
  const custom = $('#fi-store-custom');
  function addCustom() {
    const n = custom.value.trim();
    if (!n) { custom.focus(); return; }
    // 和既有店名只差在全形半形、空白時，直接用既有的寫法
    const known = [...myStores(), ...STORE_GROUPS.flatMap((g) => g.stores.map((s) => s.name))].find((s) => normStore(s) === normStore(n));
    const name = known ?? n;
    if (add(name)) {
      if (!catalogOf(name)) store.addCustomStore(name);
      custom.value = '';
      $('[data-store-suggest]').innerHTML = '';
      changed(name);
    }
    custom.focus();
  }
  custom.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addCustom(); } });
  custom.addEventListener('input', () => {
    const all = [...myStores(), ...STORE_GROUPS.flatMap((g) => g.stores.map((s) => s.name))];
    const matches = findSimilarStores(custom.value, all).slice(0, 3);
    $('[data-store-suggest]').innerHTML = matches.length ? `
      <p>${icon('storefront', 'sm')}是這家嗎？名稱一致才會合併計算免稅門檻：</p>
      <div class="pills">${matches.map((m) => `<button type="button" class="chip chip-sm" data-use-store="${esc(m)}">改用「${esc(m)}」</button>`).join('')}</div>` : '';
  });

  renderSelected();
  return {
    get value() { return { stores: [...selected], anyStore }; },
  };
}

/* ---------- 勾選已買時：詢問在哪家買到 ---------- */
export function pickPurchaseStore(item) {
  return new Promise((resolve) => {
    let result = null; // null = 取消
    const recent = myStores().filter((s) => !item.stores.some((x) => normStore(x) === normStore(s))).slice(0, 6);
    const dlg = createDialog('dlg-confirm dlg-pick', `
      <div class="confirm-body">
        <h2 id="pick-title" class="confirm-title">在哪家買到「${esc(item.name)}」？</h2>
        <p class="confirm-text">記錄購買店家，才能正確累計該店的免稅門檻。</p>
        ${item.stores.length ? `<p class="store-group-title">清單上的店鋪</p><div class="pills">${item.stores.map((s) => `<button type="button" class="chip" data-at="${esc(s)}">${esc(s)}</button>`).join('')}</div>` : ''}
        ${recent.length ? `<p class="store-group-title">其他店鋪</p><div class="pills">${recent.map((s) => `<button type="button" class="chip chip-sm" data-at="${esc(s)}">${esc(s)}</button>`).join('')}</div>` : ''}
        <form class="store-custom" data-at-form>
          <label for="pick-custom" class="sr-only">輸入店名</label>
          <input id="pick-custom" placeholder="其他店名" autocomplete="off">
          <button type="submit" class="btn btn-slate btn-sm">確定</button>
        </form>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-at-cancel>取消</button>
          <button type="button" class="btn btn-ghost" data-at="">先不記錄店家</button>
        </div>
      </div>`, 'pick-title');
    dlg.addEventListener('click', (e) => {
      const b = e.target.closest('[data-at], [data-at-cancel]');
      if (!b) return;
      result = b.matches('[data-at-cancel]') ? null : b.dataset.at;
      closeDialog(dlg);
    });
    dlg.querySelector('[data-at-form]').addEventListener('submit', (e) => {
      e.preventDefault();
      const v = dlg.querySelector('#pick-custom').value.trim();
      if (!v) return;
      const known = catalogOf(v);
      if (!known) store.addCustomStore(v);
      result = known?.name ?? v;
      closeDialog(dlg);
    });
    openDialog(dlg, { onClose: () => resolve(result) });
    dlg.querySelector('.chip, #pick-custom')?.focus();
  });
}

/* ---------- 店鋪設定（優惠券連結、備註） ---------- */
export function editStoreDialog(name) {
  const info = storeInfo(name, store.state.settings.storeMeta);
  const dlg = createDialog('dlg-confirm', `
    <form class="confirm-body" data-store-meta novalidate>
      <h2 id="sm-title" class="confirm-title">${esc(name)}：優惠券設定</h2>
      ${storeNotes(info)}
      <div class="field">
        <label for="sm-url">優惠券連結</label>
        <input id="sm-url" name="couponUrl" type="url" inputmode="url" value="${esc(info.couponUrl ?? '')}" placeholder="https://…" aria-describedby="sm-url-err">
        <p class="err" id="sm-url-err" hidden>請輸入 https:// 開頭的網址</p>
      </div>
      <div class="field">
        <label for="sm-note">我的備註</label>
        <input id="sm-note" name="myNote" value="${esc(info.myNote ?? '')}" placeholder="例如：會員卡在 LINE 裡">
      </div>
      <div class="confirm-actions">
        <button type="button" class="btn btn-ghost" data-cancel>取消</button>
        <button type="submit" class="btn btn-gold">${icon('save', 'sm')}儲存</button>
      </div>
    </form>`, 'sm-title');
  const form = dlg.querySelector('form');
  dlg.querySelector('[data-cancel]').addEventListener('click', () => closeDialog(dlg));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = form.elements.couponUrl.value.trim();
    if (url && !/^https?:\/\//i.test(url)) {
      dlg.querySelector('#sm-url-err').hidden = false;
      form.elements.couponUrl.setAttribute('aria-invalid', 'true');
      form.elements.couponUrl.focus();
      return;
    }
    store.setStoreMeta(name, { couponUrl: url, myNote: form.elements.myNote.value.trim() });
    closeDialog(dlg);
    toast({ title: '已儲存店鋪設定', message: esc(name), tone: 'muted', duration: 2500 });
  });
  openDialog(dlg, { backdropClose: false });
}

