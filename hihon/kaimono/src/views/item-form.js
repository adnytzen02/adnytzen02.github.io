// 新增／編輯商品表單：即時試算免稅與台幣
import { store, normalizeItem } from '../store.js';
import { analyze, TAX_FREE_MIN } from '../calc.js';
import { CATEGORIES, PRIORITIES, AREA_SUGGESTIONS } from '../data.js';
import { findSimilarStores, normStore } from '../storeMatch.js';
import { createDialog, openDialog, closeDialog, confirmDialog, esc, icon, yen, twd, toast, compressImage, validJan } from '../ui.js';

const radio = (name, value, current, label, extra = '') =>
  `<label class="pill"><input type="radio" name="${name}" value="${value}" ${String(current) === String(value) ? 'checked' : ''} ${extra}><span>${label}</span></label>`;

function formHTML(item, isEdit) {
  const { items } = store.state;
  const stores = [...new Set(items.map((i) => i.store).filter(Boolean))];
  const areas = [...new Set([...items.map((i) => i.area).filter(Boolean), ...AREA_SUGGESTIONS])];
  return `
  <form class="dlg-shell form-shell" novalidate>
    <header class="dlg-head dlg-head-center">
      <p class="eyebrow eyebrow-center"><span aria-hidden="true">✦</span> SACRED RELIC ${isEdit ? 'EDIT' : 'ACQUISITION'} <span aria-hidden="true">✦</span></p>
      <h2 id="form-title" class="dlg-title">${isEdit ? '編輯採購聖物' : '新增旅日採購聖物'}</h2>
      <p class="dlg-sub">${isEdit ? '修改後按「儲存變更」。' : '先記品名和價格就能加入，其他資料之後再補。'}</p>
      <div class="ornament" aria-hidden="true"></div>
      <button type="button" class="icon-btn dlg-close" aria-label="關閉表單">${icon('close')}</button>
    </header>

    <div class="dlg-scroll form-body">
      <!-- 快速新增：只需品名、價格、店家 -->
      <fieldset class="fs fs-quick">
        <legend class="sr-only">快速新增</legend>
        <div class="field">
          <label for="fi-name">商品名稱 <span class="req" aria-hidden="true">*</span></label>
          <input id="fi-name" name="name" required value="${esc(item.name)}" autocomplete="off" aria-describedby="err-name" autofocus enterkeyhint="next">
          <p class="err" id="err-name" hidden>請填寫商品名稱</p>
        </div>
        <div class="quick-row">
          <div class="field">
            <label for="fi-price">日幣單價 <span class="req" aria-hidden="true">*</span> <small>（含稅）</small></label>
            <div class="input-affix"><span aria-hidden="true">¥</span>
              <input id="fi-price" name="price" type="number" inputmode="numeric" min="0" step="1" value="${item.price || ''}" required aria-describedby="err-price" enterkeyhint="next">
            </div>
            <p class="err" id="err-price" hidden>請填寫 0 以上的價格</p>
          </div>
          <div class="field">
            <label for="fi-store">店家／專櫃</label>
            <input id="fi-store" name="store" list="dl-store" value="${esc(item.store)}" autocomplete="off" aria-describedby="hint-store" enterkeyhint="done">
            <datalist id="dl-store">${stores.map((s) => `<option value="${esc(s)}">`).join('')}</datalist>
            <p class="hint" id="hint-store">同店名的商品會合併計算免稅門檻</p>
            <div class="store-suggest" data-store-suggest aria-live="polite"></div>
          </div>
        </div>
        <p class="quick-calc" aria-live="polite" data-quick></p>
      </fieldset>

      <details class="more" ${isEdit ? 'open' : ''}>
        <summary class="more-summary">
          <span class="more-title">${icon('tune', 'sm')}更多設定</span>
          <span class="more-desc">日文名稱、數量、分類、稅率與折扣、地區、行李、照片、備註</span>
          <span class="more-chevron" aria-hidden="true">${icon('add')}</span>
        </summary>
        <div class="more-body">
          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">壹</span>基本資訊</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-ja">日文名稱 <small>（出示給店員看）</small></label>
                <input id="fi-ja" name="nameJa" lang="ja" value="${esc(item.nameJa)}" autocomplete="off">
              </div>
              <div class="field">
                <label for="fi-brand">品牌</label>
                <input id="fi-brand" name="brand" value="${esc(item.brand)}" autocomplete="off">
              </div>
            </div>
            <div class="field">
              <span class="label" id="lb-cat">分類</span>
              <div class="pills" role="radiogroup" aria-labelledby="lb-cat">
                ${CATEGORIES.map((c) => radio('category', c.id, item.category, `${icon(c.icon, 'sm')}${c.label}`)).join('')}
              </div>
            </div>
            <div class="grid-2">
              <div class="field">
                <span class="label" id="lb-prio">渴望等級</span>
                <div class="pills" role="radiogroup" aria-labelledby="lb-prio">
                  ${PRIORITIES.map((p) => radio('priority', p.value, item.priority, `<span aria-hidden="true">${p.stars}</span> ${p.label}`)).join('')}
                </div>
              </div>
              <div class="field">
                <label for="fi-qty">數量</label>
                <div class="stepper">
                  <button type="button" class="icon-btn" data-step="-1" aria-label="減少數量">${icon('remove')}</button>
                  <input id="fi-qty" name="qty" type="number" inputmode="numeric" min="1" step="1" value="${item.qty}">
                  <button type="button" class="icon-btn" data-step="1" aria-label="增加數量">${icon('add')}</button>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">貳</span>價格與免稅試算</legend>
            <div class="price-layout">
              <div>
                <div class="grid-2 tight">
                  <div class="field">
                    <span class="label" id="lb-incl">標價</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-incl">
                      ${radio('priceIncludesTax', 'true', item.priceIncludesTax, '含稅')}
                      ${radio('priceIncludesTax', 'false', item.priceIncludesTax, '未稅')}
                    </div>
                  </div>
                  <div class="field">
                    <span class="label" id="lb-rate">消費稅率</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-rate">
                      ${radio('taxRate', 10, item.taxRate, '10%')}
                      ${radio('taxRate', 8, item.taxRate, '8% 食品')}
                    </div>
                  </div>
                </div>
                <label class="check-row">
                  <input type="checkbox" name="taxFree" ${item.taxFree ? 'checked' : ''}>
                  <span><strong>辦理免稅</strong><small>同一天同一店家未稅合計 ${yen(TAX_FREE_MIN)} 以上可退消費稅</small></span>
                </label>
                <div class="grid-2 tight">
                  <div class="field">
                    <label for="fi-disc">折扣／優惠券 %</label>
                    <input id="fi-disc" name="discountPct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${item.discountPct || ''}" placeholder="0">
                  </div>
                  <div class="field">
                    <label for="fi-fee">退稅手續費 %</label>
                    <input id="fi-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${item.refundFeePct ?? ''}" placeholder="預設 ${store.state.settings.refundFeePct}" aria-describedby="hint-fee">
                    <p class="hint" id="hint-fee">留空則用設定中的預設值</p>
                  </div>
                </div>
              </div>
              <aside class="calc-panel" data-calc></aside>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">參</span>採購地點</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-area">地區</label>
                <input id="fi-area" name="area" list="dl-area" value="${esc(item.area)}" autocomplete="off" placeholder="例如：銀座" aria-describedby="hint-area">
                <datalist id="dl-area">${areas.map((a) => `<option value="${esc(a)}">`).join('')}</datalist>
                <p class="hint" id="hint-area">選擇已記錄過的店家時會自動帶入</p>
              </div>
              <div class="field">
                <label for="fi-date">預計購買日</label>
                <input id="fi-date" name="planDate" type="date" value="${esc(item.planDate)}">
              </div>
              <div class="field span2">
                <label for="fi-jan">JAN 條碼 <small>（8 或 13 碼，店員掃描最快）</small></label>
                <input id="fi-jan" name="jan" inputmode="numeric" pattern="[0-9]*" maxlength="13" value="${esc(item.jan)}" aria-describedby="err-jan">
                <p class="err" id="err-jan" hidden>JAN 條碼需為 8 或 13 位數字</p>
              </div>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">肆</span>行李與包裝</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-weight">單件重量（kg）</label>
                <input id="fi-weight" name="weightKg" type="number" inputmode="decimal" min="0" step="0.01" value="${item.weightKg || ''}" placeholder="0.5">
              </div>
              <div class="field">
                <span class="label" id="lb-lug">放在哪裡</span>
                <div class="seg-pills" role="radiogroup" aria-labelledby="lb-lug">
                  ${radio('luggage', 'checked', item.luggage, '託運')}
                  ${radio('luggage', 'carry', item.luggage, '隨身')}
                  ${radio('luggage', 'none', item.luggage, '不放行李')}
                </div>
              </div>
            </div>
            <div class="pills" role="group" aria-label="包裝提醒">
              <label class="pill"><input type="checkbox" name="fragile" ${item.fragile ? 'checked' : ''}><span>${icon('wine_bar', 'sm')}易碎</span></label>
              <label class="pill"><input type="checkbox" name="liquid" ${item.liquid ? 'checked' : ''}><span>${icon('water_drop', 'sm')}液體／乳霜</span></label>
              <label class="pill"><input type="checkbox" name="battery" ${item.battery ? 'checked' : ''}><span>${icon('battery_alert', 'sm')}含鋰電池</span></label>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">伍</span>照片與備註</legend>
            <div class="photo-row">
              <div class="photo-preview" data-photo>${item.image ? `<img src="${esc(item.image)}" alt="商品照片預覽">` : icon('add_photo_alternate')}</div>
              <div class="photo-actions">
                <label class="btn btn-ghost btn-sm file-btn">${icon('photo_camera', 'sm')}選擇照片
                  <input type="file" accept="image/*" data-file class="sr-only">
                </label>
                <button type="button" class="btn btn-ghost btn-sm" data-remove-photo ${item.image ? '' : 'hidden'}>${icon('delete', 'sm')}移除</button>
                <p class="hint">照片會壓縮後存在本機瀏覽器</p>
              </div>
            </div>
            <div class="field">
              <label for="fi-note">備註</label>
              <textarea id="fi-note" name="note" rows="3" placeholder="例如：櫃位樓層、要買的色號、送誰">${esc(item.note)}</textarea>
            </div>
            <label class="check-row">
              <input type="checkbox" name="purchased" ${item.purchased ? 'checked' : ''}>
              <span><strong>已經買到了</strong><small>勾選後會列入已入手</small></span>
            </label>
          </fieldset>
        </div>
      </details>
    </div>

    <footer class="dlg-foot">
      <p class="foot-summary" data-foot-summary></p>
      <button type="button" class="btn btn-ghost" data-cancel>取消</button>
      <button type="submit" class="btn btn-gold">${icon(isEdit ? 'save' : 'add_circle')}${isEdit ? '儲存變更' : '加入清單'}</button>
    </footer>
  </form>`;
}

// 從表單讀出資料
function readForm(form, image) {
  const fd = new FormData(form);
  return {
    name: fd.get('name'), nameJa: fd.get('nameJa'), brand: fd.get('brand'),
    category: fd.get('category'), priority: fd.get('priority'), qty: fd.get('qty'),
    price: fd.get('price'), priceIncludesTax: fd.get('priceIncludesTax') === 'true',
    taxRate: fd.get('taxRate'), taxFree: fd.has('taxFree'),
    discountPct: fd.get('discountPct'), refundFeePct: fd.get('refundFeePct'),
    area: fd.get('area'), store: fd.get('store'), planDate: fd.get('planDate'), jan: fd.get('jan'),
    weightKg: fd.get('weightKg'), luggage: fd.get('luggage'),
    fragile: fd.has('fragile'), liquid: fd.has('liquid'), battery: fd.has('battery'),
    note: fd.get('note'), purchased: fd.has('purchased'), image,
  };
}

function calcPanel(draft, editingId) {
  const { settings, items } = store.state;
  const others = items.filter((i) => i.id !== editingId);
  const tmp = normalizeItem({ ...draft, id: editingId || '__draft__' });
  const { byItem } = analyze([...others, tmp], settings);
  const a = byItem.get(tmp.id);
  const g = a.group;
  let status;
  if (!tmp.taxFree) status = '<p class="calc-status">不辦免稅</p>';
  else if (!tmp.store) status = `<p class="calc-status">填寫店家後可合併計算門檻</p>`;
  else if (g.eligible) status = `<p class="calc-status ok">${icon('check_circle', 'sm')}${esc(tmp.store)} 合計已達 ${yen(TAX_FREE_MIN)} 門檻</p>`;
  else status = `<p class="calc-status warn">${icon('info', 'sm')}${esc(tmp.store)} 還差 ${yen(g.shortfall)}（未稅）</p>`;

  return {
    html: `
    <h3 class="calc-title">${icon('calculate', 'sm')}免稅精算明細</h3>
    <dl class="ledger-rows">
      <div><dt>未稅小計</dt><dd>${yen(a.lineExcl)}</dd></div>
      ${a.discount ? `<div class="minus"><dt>折扣</dt><dd>− ${yen(a.discount)}</dd></div>` : ''}
      <div><dt>店頭支付（含稅）</dt><dd>${yen(a.pay)}</dd></div>
      <div class="minus"><dt>離境退稅</dt><dd>${a.refundable ? `− ${yen(a.refund)}` : '—'}</dd></div>
    </dl>
    <div class="calc-total">
      <span class="ledger-k">實際成本</span>
      <span class="calc-yen">${yen(a.net)}</span>
      <span class="calc-twd">≈ ${twd(a.net, settings.rate)}</span>
    </div>
    ${status}`,
    // 快速區的一行摘要：不用展開更多設定也能看到台幣與免稅狀態
    quick: tmp.price ? `${icon('payments', 'sm')}<span>店頭支付 <strong>${yen(a.pay)}</strong> ≈ ${twd(a.pay, settings.rate)}</span>${
      a.refundable ? `<span class="ok">${icon('check_circle', 'sm')}可退稅 ${yen(a.refund)}，實際 ${yen(a.net)}</span>`
        : tmp.taxFree && tmp.store ? `<span class="warn">${icon('info', 'sm')}${esc(tmp.store)} 還差 ${yen(g.shortfall)} 達免稅門檻</span>` : ''}${
      g.undatedMerge && tmp.taxFree && g.items.length > 1 ? `<span class="note">${icon('event', 'sm')}已與同店 ${g.items.length - 1} 件合併計算；分不同天買請在「更多設定」填預計日期</span>` : ''}` : '',
    foot: `${icon('auto_awesome', 'sm')}加入後總額 ${yen(others.reduce((s, i) => s + byItem.get(i.id).pay, 0) + a.pay)} · 行李 +${(a.weight || 0).toFixed(2)} kg`,
  };
}

export function openForm(id = null, preset = {}) {
  const existing = id ? store.getItem(id) : null;
  // 快速新增時分類預設「其他」，之後可在更多設定修改
  const item = existing ?? normalizeItem({ category: 'other', priority: 2, luggage: 'checked', taxFree: true, ...preset });
  let image = item.image;
  const dlg = createDialog('dlg-form', formHTML(item, Boolean(existing)), 'form-title');
  const form = dlg.querySelector('form');
  let dirty = false;

  const refresh = () => {
    const r = calcPanel(readForm(form, image), existing?.id);
    dlg.querySelector('[data-calc]').innerHTML = r.html;
    dlg.querySelector('[data-foot-summary]').innerHTML = r.foot;
    dlg.querySelector('[data-quick]').innerHTML = r.quick;
    // 價格標籤跟著「含稅／未稅」切換
    const incl = form.elements.priceIncludesTax.value === 'true';
    dlg.querySelector('label[for="fi-price"] small').textContent = incl ? '（含稅）' : '（未稅）';
  };
  refresh();

  // 店名相似提示：可能和已記錄的店是同一家
  const otherStores = [...new Set(store.state.items.filter((i) => i.id !== existing?.id).map((i) => i.store).filter(Boolean))];
  const suggestBox = dlg.querySelector('[data-store-suggest]');
  const showStoreSuggest = () => {
    const matches = findSimilarStores(form.elements.store.value, otherStores).slice(0, 3);
    suggestBox.innerHTML = matches.length ? `
      <p>${icon('storefront', 'sm')}是同一家店嗎？名稱一致才會合併計算免稅門檻：</p>
      <div class="pills">${matches.map((m) => `<button type="button" class="chip chip-sm" data-use-store="${esc(m)}">改用「${esc(m)}」</button>`).join('')}</div>` : '';
  };
  showStoreSuggest();
  form.elements.store.addEventListener('input', showStoreSuggest);
  suggestBox.addEventListener('click', (e) => {
    const b = e.target.closest('[data-use-store]');
    if (!b) return;
    form.elements.store.value = b.dataset.useStore;
    form.elements.store.dispatchEvent(new Event('change', { bubbles: true }));
    showStoreSuggest();
    form.elements.store.focus();
  });

  // 驗證：離開欄位才顯示錯誤，修正後立即清除
  const rules = {
    name: (v) => v.trim().length > 0,
    price: (v) => v !== '' && Number(v) >= 0,
    jan: (v) => v === '' || /^\d{8}$|^\d{13}$/.test(v),
  };
  const showErr = (input, show) => {
    const err = dlg.querySelector(`#err-${input.name}`);
    if (!err) return;
    err.hidden = !show;
    input.setAttribute('aria-invalid', show ? 'true' : 'false');
  };
  form.addEventListener('focusout', (e) => {
    const rule = rules[e.target.name];
    if (rule) showErr(e.target, !rule(e.target.value));
  });
  form.addEventListener('input', (e) => {
    dirty = true;
    const rule = rules[e.target.name];
    if (rule && e.target.getAttribute('aria-invalid') === 'true' && rule(e.target.value)) showErr(e.target, false);
    refresh();
  });
  form.addEventListener('change', (e) => {
    // 選了曾記錄過的店家，自動帶入地區
    if (e.target.name === 'store' && !form.elements.area.value.trim()) {
      const known = store.state.items.find((i) => normStore(i.store) === normStore(e.target.value) && i.area);
      if (known) form.elements.area.value = known.area;
    }
    refresh();
  });

  // 數量加減
  form.addEventListener('click', (e) => {
    const step = e.target.closest('[data-step]');
    if (step) {
      const qty = form.elements.qty;
      qty.value = Math.max(1, (Number(qty.value) || 1) + Number(step.dataset.step));
      dirty = true;
      refresh();
    }
    if (e.target.closest('[data-remove-photo]')) {
      image = '';
      dirty = true;
      dlg.querySelector('[data-photo]').innerHTML = icon('add_photo_alternate');
      e.target.closest('[data-remove-photo]').hidden = true;
    }
    if (e.target.closest('.dlg-close, [data-cancel]')) tryClose();
  });

  // 照片壓縮
  dlg.querySelector('[data-file]').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      image = await compressImage(file);
      dirty = true;
      dlg.querySelector('[data-photo]').innerHTML = `<img src="${image}" alt="商品照片預覽">`;
      dlg.querySelector('[data-remove-photo]').hidden = false;
    } catch (err) {
      toast({ title: '照片無法使用', message: esc(err.message), tone: 'error' });
    }
  });

  async function tryClose() {
    if (dirty) {
      const leave = await confirmDialog({
        title: '放棄尚未儲存的內容？',
        body: '這個表單有修改還沒儲存，離開後不會保留。',
        confirmText: '放棄修改',
        danger: true,
      });
      if (!leave) return;
    }
    closeDialog(dlg);
  }
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); e.stopImmediatePropagation(); tryClose(); }, { capture: true });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstBad = null;
    for (const [name, rule] of Object.entries(rules)) {
      const input = form.elements[name];
      const ok = rule(input.value);
      showErr(input, !ok);
      if (!ok && !firstBad) firstBad = input;
    }
    if (firstBad) {
      // 錯誤欄位在收合區時先展開
      const more = firstBad.closest('details');
      if (more) more.open = true;
      firstBad.focus();
      return;
    }

    const data = readForm(form, image);
    if (data.jan && !validJan(data.jan)) {
      toast({ title: 'JAN 檢查碼不符', message: '已儲存，但條碼可能輸入錯誤，出示卡不會顯示條碼圖。', tone: 'muted' });
    }
    if (existing) {
      const wasPurchased = existing.purchased;
      const ok = store.updateItem(existing.id, {
        ...data,
        purchasedAt: data.purchased ? (wasPurchased ? existing.purchasedAt : Date.now()) : null,
      });
      if (!ok) return;
      toast({ title: '已儲存變更', message: esc(data.name), tone: 'muted', duration: 3000 });
    } else {
      const added = store.addItem({ ...data, purchasedAt: data.purchased ? Date.now() : null });
      toast({ title: '已加入清單', message: `「${esc(added.name)}」` });
    }
    dirty = false;
    closeDialog(dlg);
  });

  openDialog(dlg, { backdropClose: false });
}
