// 設定與資料備份
import { store } from '../store.js';
import { refreshRate, setManualRate } from '../rate.js';
import { createDialog, openDialog, closeDialog, confirmDialog, esc, icon, num, fmtTime, toast, download } from '../ui.js';
import { THEMES, getTheme, setTheme } from '../theme.js';

function body() {
  const s = store.state.settings;
  return `
  <form class="dlg-shell settings-shell" novalidate>
    <header class="dlg-head">
      <p class="eyebrow">${icon('tune', 'sm')}SETTINGS · 設定</p>
      <h2 id="settings-title" class="dlg-title">旅程設定與資料備份</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="關閉設定">${icon('close')}</button>
    </header>
    <div class="dlg-scroll">
      <fieldset class="fs">
        <legend class="fs-title">${icon('light_mode', 'sm')}外觀</legend>
        <div class="seg-pills" role="radiogroup" aria-label="外觀主題">
          ${THEMES.map((t) => `<label class="pill"><input type="radio" name="theme" value="${t.id}" ${getTheme() === t.id ? 'checked' : ''}><span>${icon(t.icon, 'sm')}${t.label}</span></label>`).join('')}
        </div>
        <p class="hint">選擇後立即套用，並記在這台裝置。</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('flight_takeoff', 'sm')}旅程與預算</legend>
        <div class="grid-2">
          <div class="field span2">
            <label for="st-trip">旅程名稱</label>
            <input id="st-trip" name="tripName" value="${esc(s.tripName)}" maxlength="40">
          </div>
          <div class="field">
            <label for="st-budget">購物預算（日圓）</label>
            <div class="input-affix"><span aria-hidden="true">¥</span><input id="st-budget" name="budget" type="number" inputmode="numeric" min="0" step="1000" value="${s.budget}"></div>
          </div>
          <div class="field">
            <label for="st-fee">預設退稅手續費 %</label>
            <input id="st-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${s.refundFeePct}" aria-describedby="hint-st-fee">
            <p class="hint" id="hint-st-fee">部分百貨或退稅代辦會收手續費，依店家公告填寫</p>
          </div>
          <div class="field">
            <label for="st-rebate">刷卡淨回饋 %</label>
            <input id="st-rebate" name="cardRebatePct" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${s.cardRebatePct}" aria-describedby="hint-st-rebate">
            <p class="hint" id="hint-st-rebate">回饋扣掉海外手續費後的數字，不用可填 0</p>
          </div>
        </div>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('currency_exchange', 'sm')}匯率</legend>
        <div class="rate-row">
          <div class="field grow">
            <label for="st-rate">1 日圓 = ? 台幣</label>
            <input id="st-rate" name="rate" type="number" inputmode="decimal" min="0.01" max="5" step="0.0001" value="${s.rate}">
          </div>
          <button type="button" class="btn btn-ghost" data-sync>${icon('sync')}抓最新匯率</button>
        </div>
        <p class="hint">目前來源：${s.rateSource === 'manual' ? '手動輸入' : s.rateSource === 'api' ? esc(s.rateProvider || '公開匯率 API') : '預設值'}${s.rateUpdatedAt ? ` · ${fmtTime(s.rateUpdatedAt)}` : ''}。修改數字後儲存，就會改用手動匯率。</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('luggage', 'sm')}行李</legend>
        <div class="grid-2">
          <div class="field"><label for="st-cl">託運限重（kg）</label><input id="st-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${s.checkedLimit}"></div>
          <div class="field"><label for="st-cb">託運基本重量（kg）</label><input id="st-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${s.checkedBase}" aria-describedby="hint-base"></div>
          <div class="field"><label for="st-pl">隨身限重（kg）</label><input id="st-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${s.carryLimit}"></div>
          <div class="field"><label for="st-pb">隨身基本重量（kg）</label><input id="st-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${s.carryBase}"></div>
        </div>
        <p class="hint" id="hint-base">基本重量＝行李箱本身加上衣物等非購物品。</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${icon('database', 'sm')}資料備份</legend>
        <p class="hint">清單只存在這台裝置的瀏覽器。換手機或清除瀏覽資料前，記得先匯出備份。</p>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-export>${icon('download')}匯出備份（JSON）</button>
          <label class="btn btn-ghost file-btn">${icon('upload')}匯入備份<input type="file" accept="application/json,.json" class="sr-only" data-import></label>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-demo>${icon('auto_awesome')}載入示範資料</button>
          <button type="button" class="btn btn-danger-ghost" data-reset>${icon('delete_forever')}清除全部資料</button>
        </div>
      </fieldset>
    </div>
    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-cancel>取消</button>
      <button type="submit" class="btn btn-gold">${icon('save')}儲存設定</button>
    </footer>
  </form>`;
}

export function openSettings() {
  const dlg = createDialog('dlg-settings', body(), 'settings-title');
  const form = dlg.querySelector('form');
  const initialRate = store.state.settings.rate;

  dlg.addEventListener('click', async (e) => {
    const t = e.target;
    if (t.closest('.dlg-close, [data-cancel]')) { closeDialog(dlg); return; }
    if (t.closest('[data-sync]')) {
      const btn = t.closest('[data-sync]');
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      const r = await refreshRate({ force: true });
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      if (r.ok) {
        form.elements.rate.value = r.rate;
        toast({ title: '匯率已更新', message: `1 JPY = ${num(r.rate, 4)} TWD`, tone: 'muted', duration: 3000 });
      } else {
        toast({ title: '暫時抓不到匯率', message: '網路或匯率服務無回應，可以手動輸入。', tone: 'error' });
      }
    }
    if (t.closest('[data-export]')) {
      download(`shopping-relics-backup-${new Date().toISOString().slice(0, 10)}.json`, store.exportJSON(), 'application/json');
    }
    if (t.closest('[data-demo]')) {
      store.loadDemo();
      toast({ title: '已載入示範資料', message: '價格為示意數字，可在清單頁清除。' });
    }
    if (t.closest('[data-reset]')) {
      const ok = await confirmDialog({
        title: '清除全部資料？',
        body: `會刪除清單中的 <strong>${store.state.items.length} 件商品</strong>、打包清單與所有設定，<strong>無法復原</strong>。建議先匯出備份。`,
        confirmText: '清除全部資料',
        danger: true,
      });
      if (ok) {
        store.resetAll();
        closeDialog(dlg);
        toast({ title: '資料已全部清除', tone: 'muted' });
      }
    }
  });

  // 外觀立即套用，不必按儲存
  form.addEventListener('change', (e) => {
    if (e.target.name === 'theme') setTheme(e.target.value);
  });

  dlg.querySelector('[data-import]').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ok = await confirmDialog({
      title: '用備份檔取代目前資料？',
      body: `目前的 ${store.state.items.length} 件商品會被「${esc(file.name)}」的內容取代。`,
      confirmText: '匯入並取代',
      danger: true,
    });
    if (!ok) { e.target.value = ''; return; }
    try {
      store.importJSON(await file.text());
      closeDialog(dlg);
      toast({ title: '備份已匯入', message: `共 ${store.state.items.length} 件商品` });
    } catch (err) {
      toast({ title: '匯入失敗', message: `這個檔案不是有效的備份：${esc(err.message)}`, tone: 'error', duration: 8000 });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = form.elements;
    const n = (el, fallback) => (el.value === '' || Number.isNaN(Number(el.value)) ? fallback : Math.max(0, Number(el.value)));
    const s = store.state.settings;
    store.updateSettings({
      tripName: f.tripName.value.trim() || s.tripName,
      budget: n(f.budget, s.budget),
      refundFeePct: n(f.refundFeePct, 0),
      cardRebatePct: n(f.cardRebatePct, 0),
      checkedLimit: n(f.checkedLimit, s.checkedLimit),
      checkedBase: n(f.checkedBase, s.checkedBase),
      carryLimit: n(f.carryLimit, s.carryLimit),
      carryBase: n(f.carryBase, s.carryBase),
    });
    const rate = Number(f.rate.value);
    if (rate > 0 && Math.abs(rate - store.state.settings.rate) > 1e-9 && rate !== initialRate) setManualRate(rate);
    closeDialog(dlg);
    toast({ title: '設定已儲存', tone: 'muted', duration: 2500 });
  });

  openDialog(dlg, { backdropClose: false });
}
