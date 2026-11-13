// 退稅指南頁（#/guide）的小分頁：流程｜退稅公司｜機場現金｜信用卡｜手續費｜新制度
// 只放說明文字，不碰任何計算。資料查證日：2026/11/7（新制 11/1 上路，各公司細節仍可能調整）
import { icon, yen } from '../ui.js';
import { TAX_FREE_MIN } from '../calc.js';

const VERIFIED = '2026/11/7';
const TAB_KEY = 'shopping-relics:guide-tab';
const link = ([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t}<span class="sr-only">（另開新視窗）</span></a>`;
const sources = (list) => `<p class="source">資料來源：${list.map(link).join('、')}</p>`;

const SRC = {
  jta: ['日本觀光廳〈What is the Refund Method?〉', 'https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html'],
  jtaFaq: ['日本觀光廳〈旅客常見問題〉', 'https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html'],
  jtaPdf: ['日本觀光廳 新制說明（PDF）', 'https://www.mlit.go.jp/kankocho/tax-free/content/001978459.pdf'],
  jnto: ['JNTO〈Japan\'s new tax-free shopping system〉', 'https://www.japan.travel/en/us/blog/everything-you-need-to-know-japans-new-tax-free-shopping-system/'],
  linshibi: ['林氏璧〈日本免稅新制度〉', 'https://linshibi.com/?p=48616'],
  newtalk: ['新頭殼〈6 大退稅公司收費一次看〉（2026/11/1）', 'https://newtalk.tw/news/view/2026-11-01/1068651'],
  ayaca: ['ayaca〈日本退稅平台比較〉', 'https://ayaca.tw/japan-tax-refund-apps/'],
  apps: ['jptaxrefund.com〈Japan Tax Refund Apps 2026〉', 'https://jptaxrefund.com/blog/japan-tax-refund-apps'],
  rojico: ['Rojico〈8 機場現金退稅點〉', 'https://rojico.com/en/blog/japan-tax-free-refund-method-airport-guide-2026/'],
  sth: ['星島〈Cash Japan 與 Self Tax Refund 比較〉', 'https://www.stheadline.com/travel/3628833/'],
  moodie: ['Moodie Davitt〈Cash Japan〉', 'https://moodiedavittreport.com/global-blue-establishes-cash-japan-at-japanese-airports-as-new-tax-free-shopping-refund-system-kicks-in/'],
  bnext: ['數位時代〈Global Blue 先墊錢〉', 'https://www.bnext.com.tw/article/92860/japan-tax-free-refund-2026-yodobashi-global-blue'],
  getaround: ['Get Around Japan〈Tax Refund Fees 2026〉', 'https://www.getaroundjapan.jp/?p=11496'],
  chinatimes: ['中時〈唐吉訶德手續費 0 元〉', 'https://www.chinatimes.com/realtimenews/20261006001646-260405'],
  ettoday: ['ETtoday〈Bic Camera 手續費 0 元〉', 'https://travel.ettoday.net/article/3251542.htm'],
};

/* ---------- 1. 流程 ---------- */
function flowPanel() {
  const steps = [
    ['出發前', 'event', `<ul>
      <li>先在 <strong>Visit Japan Web</strong> 登錄護照；成田、羽田、關西、中部、新千歲、福岡、那霸可在機場先上網辦部分手續。</li>
      <li>想用信用卡退款的話，<strong>JPrefund、PIE VAT、Global Blue</strong> 可以出發前先註冊帳號、綁好卡（J-TaxRefund 要買過東西才能註冊）。</li>
      <li>準備一張<strong>英文姓名與護照一致</strong>的信用卡，以及能收簡訊驗證碼的手機號碼。</li></ul>`],
    ['結帳時', 'shopping_bag', `<ul>
      <li>出示護照，<strong>先付含稅價</strong>。同一天、同一家店未稅合計 ${yen(TAX_FREE_MIN)} 以上才能辦。</li>
      <li>問店員兩件事：<strong>用哪家退稅公司</strong>、<strong>手續費多少</strong>。</li>
      <li>依指示掃收據上的 QR code（或輸入代碼），在該公司網頁／App 登記退款方式；PIE VAT 有些店<strong>要當天在 App 完成</strong>。</li>
      <li>收據與 QR code 一定要留著，商品不要在日本拆開使用。</li></ul>`],
    ['機場，託運前', 'flight_takeoff', `<ul>
      <li>購買後 <strong>90 天內</strong>，在<strong>最後離開日本的機場</strong>辦理（例如國內線轉機，要在最後出境的機場辦）。</li>
      <li>到出境大廳的<strong>免稅手續機台刷護照</strong>：綠燈完成；紅燈帶商品到海關檢查區。</li>
      <li>海關<strong>以收據為單位</strong>查驗：同一張收據少一件，整張都不能退。</li>
      <li><strong>確認完才去託運</strong>，行李託運後就拿不回來辦了。在日本用掉的商品，改向海關櫃檯說明。</li></ul>`],
    ['領退款', 'payments', `<ul>
      <li><strong>信用卡／電子支付</strong>：海關確認後由退稅公司退回，入帳約數天到兩個月不等。</li>
      <li><strong>機場現金</strong>：出境後（成田部分在出境前）到 Cash JAPAN 或 Self Tax Refund 機台領日圓，另收服務費。</li>
      <li>退款由<strong>退稅公司</strong>支付，<strong>海關不發錢</strong>。</li></ul>`],
  ];
  return `
    <ol class="g-steps">
      ${steps.map(([t, ic, body], i) => `
        <li class="g-step"><span class="g-step-no" aria-hidden="true">${i + 1}</span>
          <div><h3>${icon(ic, 'sm')}${t}</h3>${body}</div></li>`).join('')}
    </ol>
    <div class="g-callout">${icon('lightbulb', 'sm')}<p><strong>常見失誤：</strong>先託運才想到要退稅、免稅品被塞進託運行李、同一張收據的東西分開放、在 90 天後才出境、在國內線機場先辦手續。這些情況都拿不到退款。</p></div>
    ${sources([SRC.jta, SRC.jtaFaq, SRC.jnto, SRC.jtaPdf])}`;
}

/* ---------- 2. 退稅公司 ---------- */
const OPERATORS = [
  {
    name: 'J-TaxRefund', co: 'J&J Tax Free', site: 'j-taxrefund.com',
    stores: '唐吉訶德、Bic Camera、多慶屋、鶴羽藥妝、松本清、GU、東武百貨、伊藤洋華堂',
    rows: [
      ['形式', '網頁，不用下載 App；有繁體中文'],
      ['註冊', '<strong>買過才能註冊</strong>：結帳後掃收據 QR code，填護照、聯絡方式、退款方式，簡訊驗證。之後在其他 J-TaxRefund 店家不用重填'],
      ['退款方式', '信用卡、簽帳卡、支付寶、微信支付、機場現金；銀行匯款限金額較大的退款'],
      ['期限', '購買後 180 天'],
      ['入帳', '數週到約兩個月'],
      ['提領費用', '機場領現金約 1.1%；Visa 卡 ¥2,000 以下的退款每筆約 US$0.70'],
    ],
  },
  {
    name: 'JPrefund', co: 'Smart Detax（Smart Technologies & Resources）', site: 'jprefund.com',
    stores: '3COINS、阿卡將本舖、思夢樂、MURASAKI SPORTS、GRAND FRONT OSAKA',
    rows: [
      ['形式', '網頁'],
      ['註冊', '<strong>可出發前先註冊</strong>：登錄護照、綁信用卡；之後在店裡出示護照，購買紀錄會自動連到帳號'],
      ['退款方式', '信用卡（目前以 Visa、Mastercard 為主）、機場現金（每趟上限 ¥100,000）；台幣帳戶不能選銀行匯款'],
      ['期限', '購買後 200 天，回國後也能申請'],
      ['提領費用', '銀行或金流手續費；有報導指出另加退稅額約 5% 的匯款手續費（待確認）'],
    ],
  },
  {
    name: 'Global Blue', co: 'Global Blue TFS Japan', site: 'App「Shop Tax Free」',
    stores: '高島屋、大丸／松坂屋等百貨、Yodobashi（友都八喜）、EDION',
    rows: [
      ['形式', 'App「Shop Tax Free」或網頁；介面無繁體中文（有簡中、英、日）'],
      ['註冊', '可出發前先在 App 加入信用卡或電子錢包'],
      ['退款方式', 'Visa、Mastercard、AMEX、JCB、銀聯、支付寶等；機場 Cash JAPAN 可領現金'],
      ['市區先領現金', 'Yodobashi 等 11 家大型門市可<strong>出境前先領現金</strong>（不限在 Yodobashi 買的，Global Blue 加盟店的交易都可以），但要<strong>登記信用卡擔保</strong>，出境沒完成海關確認會從卡扣回'],
      ['期限', '<strong>離開日本後 3 週內</strong>要指定退款方式，否則改寄預付卡（會扣費）；海關確認後 3 個月內有效'],
      ['入帳', '海關確認後約 3～5 天'],
    ],
  },
  {
    name: 'PIE VAT', co: 'Pie Systems Japan', site: 'App「PIE VAT」',
    stores: '三井 Outlet Park、LaLaport、澀谷 109、Montbell',
    rows: [
      ['形式', 'App（iOS／Android）或網頁'],
      ['註冊', '可出發前建立帳號、掃護照；結帳後掃店家 QR code 或輸入 6 碼申請代碼。<strong>部分店家要當天完成</strong>'],
      ['退款方式', '台灣旅客以信用卡或簽帳金融卡為主；<strong>不支援機場現金</strong>'],
      ['期限', '購買後 18 個月'],
      ['入帳', '約 5～15 個工作天'],
      ['提領費用', '服務費 1.5%～3%＋提領費約未稅價 0.28%～0.32%（依店家或商場）'],
    ],
  },
  {
    name: 'Global Tax Free-Planet', co: 'Planet', site: '依店家說明',
    stores: 'AEON 永旺夢樂城',
    rows: [
      ['退款方式', '依店家說明；機場可用 Self Tax Refund 機台領現金'],
      ['店家手續費', 'AEON 回報為 1.5%'],
    ],
  },
  {
    name: 'Ocean Tax Refund', co: 'Ocean', site: 'App、網頁、微信／LINE 小程式',
    stores: 'Animate（安利美特）',
    rows: [
      ['退款方式', '銀行、信用卡、微信支付、支付寶、PayPal、機場日圓現金'],
      ['期限', '購買後 180 天'],
      ['提領費用', '退回信用卡最低 ¥180 或未稅價 0.5%（第三方提領費）'],
    ],
  },
];

function operatorsPanel() {
  return `
    <p class="g-lead">同一家店通常只用一家退稅公司，結帳時看收據或問店員就知道。以下「常見店家」為 11/1 上路後的回報整理，可能變動。</p>
    <div class="g-ops">
      ${OPERATORS.map((o) => `
        <details class="g-op">
          <summary>
            <span class="g-op-name">${o.name}<small>${o.co}</small></span>
            <span class="g-op-stores">${o.stores}</span>
            <span class="g-op-chev" aria-hidden="true">${icon('expand_more', 'sm')}</span>
          </summary>
          <dl class="g-dl">
            <div><dt>平台</dt><dd>${o.site}</dd></div>
            ${o.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}
          </dl>
        </details>`).join('')}
    </div>
    <div class="g-callout">${icon('info', 'sm')}<p>其他還有 AddSmart、LINKTIVITY、IntaSect、SAMURAI TAX 等業者，日本全國免稅店協會列出的共約 12 家。遇到不熟的公司，以收據上的說明為準。</p></div>
    ${sources([SRC.ayaca, SRC.apps, SRC.newtalk, SRC.linshibi, SRC.bnext])}`;
}

/* ---------- 3. 機場現金 ---------- */
const CASH_POINTS = [
  ['成田', 'T1 南／北翼 3F、T2 3F、T3 3F', 'Cash JAPAN', '櫃台 6:00–23:00（T3 至 22:00）；機台 24 小時'],
  ['成田', 'T1 中央大樓 4F、T2 本館 3F（<strong>出境前</strong>）', 'Self Tax Refund', '6:00–24:00'],
  ['羽田', 'T2 國際線、T3 3F 出境後（各 5 台）', 'Self Tax Refund', 'T2 6:45–翌 1:30；T3 24 小時'],
  ['關西', 'T1 出境後（16 台＋櫃台）、T2 1F 出境後（5 台）', 'Cash JAPAN', 'T1 櫃台 7:00–24:00'],
  ['中部', 'T1 3F 免稅區（第 20 登機門附近）、T2 2F 出境後', 'Cash JAPAN', 'T1 7:00–22:15；T2 10:00–21:30'],
  ['福岡', '國際線 3F 出境後免稅區', 'Cash JAPAN', '機台 6:00–21:00；櫃台 7:00–21:00'],
  ['新千歲', '國際線 3F', 'Cash JAPAN', '櫃台 7:00–20:00；機台 6:00–20:30'],
  ['神戶', 'T2 1F 出境後（2 台）', 'Cash JAPAN', '24 小時'],
  ['那霸', '國際線 2F 出境後', 'Self Tax Refund', '6:00–21:00（依航班調整）'],
];

function cashPanel() {
  return `
    <div class="g-compare">
      <div class="g-box">
        <h3>Cash JAPAN</h3>
        <dl class="g-dl">
          <div><dt>機場</dt><dd>成田、關西、中部、福岡、新千歲、神戶</dd></div>
          <div><dt>支援公司</dt><dd>Global Blue、J&J（J-TaxRefund）、JPrefund 等</dd></div>
          <div><dt>服務費</dt><dd>退稅額的 <strong>10%</strong>（約未稅價 1%），另計店家手續費</dd></div>
          <div><dt>限制</dt><dd>機台每筆上限 ¥100,000，更高金額到櫃台核對身分；以 ¥50 為單位</dd></div>
          <div><dt>時間</dt><dd>多數約 1 分 10 秒，機台支援 12 種語言</dd></div>
        </dl>
      </div>
      <div class="g-box">
        <h3>Self Tax Refund（GLORY）</h3>
        <dl class="g-dl">
          <div><dt>機場</dt><dd>羽田、成田、那霸</dd></div>
          <div><dt>支援公司</dt><dd>J&J、Smart Detax（JPrefund）、Planet、AddSmart、LINKTIVITY、IntaSect</dd></div>
          <div><dt>服務費</dt><dd>約未稅價 <strong>1.1%</strong>（含稅）</dd></div>
          <div><dt>限制</dt><dd>以收據為單位、不能部分領取；扣費後未滿 ¥100 不發；上限 ¥1,000,000</dd></div>
          <div><dt>時間</dt><dd>約 1 分鐘</dd></div>
        </dl>
      </div>
    </div>
    <h3 class="g-sub">各機場地點與時間</h3>
    <div class="table-wrap">
      <table class="g-table">
        <caption class="sr-only">機場現金退稅地點、業者與營業時間</caption>
        <thead><tr><th scope="col">機場・業者</th><th scope="col">位置</th><th scope="col">時間</th></tr></thead>
        <tbody>${CASH_POINTS.map(([a, loc, op, h]) => `<tr><th scope="row">${a}<small class="g-tag">${op}</small></th><td>${loc}</td><td>${h}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <h3 class="g-sub">怎麼領</h3>
    <ol class="g-ol">
      <li>先完成免稅手續機台（綠燈），紅燈要先過海關檢查，結果傳到領錢機台可能要等幾分鐘。</li>
      <li>託運、安檢、出境（成田的 Self Tax Refund 在出境前，順序相反）。</li>
      <li>到機台刷護照，畫面會列出<strong>可領金額與扣掉的費用</strong>，確認後領日圓現金，可以直接在機場免稅店花掉。</li>
    </ol>
    <div class="g-callout">${icon('warning', 'sm')}<p><strong>PIE VAT 的店家不能在機場領現金</strong>（例如三井 Outlet、LaLaport）。另外，現金比退回信用卡多扣約 1%，金額大時差距明顯；趕飛機或想當場把錢花掉時再選現金。</p></div>
    ${sources([SRC.rojico, SRC.sth, SRC.moodie, SRC.getaround])}`;
}

/* ---------- 4. 信用卡退款 ---------- */
function cardPanel() {
  return `
    <ul class="g-checks">
      <li>${icon('check_circle', 'sm')}<div><strong>付現金也能退回信用卡</strong><p>退稅跟付款方式無關，付現金、交通卡、PayPay 都可以選退到信用卡。</p></div></li>
      <li>${icon('check_circle', 'sm')}<div><strong>英文姓名要和護照一致</strong><p>四大公司都要簡訊驗證，請帶可收國際簡訊的手機號碼。</p></div></li>
      <li>${icon('check_circle', 'sm')}<div><strong>選日圓入帳，不要選台幣</strong><p>畫面問幣別時選日圓（JPY）。選台幣會用動態貨幣轉換（DCC），匯率通常比較差；發卡銀行另收的海外手續費依你的卡而定。</p></div></li>
      <li>${icon('check_circle', 'sm')}<div><strong>卡別</strong><p>JPrefund 目前以 Visa、Mastercard 為主；Global Blue 支援 Visa、Mastercard、AMEX、JCB、銀聯。PIE VAT 對台灣旅客以信用卡或簽帳金融卡為主。</p></div></li>
      <li>${icon('check_circle', 'sm')}<div><strong>入帳時間</strong><p>Global Blue 約 3～5 天、PIE VAT 約 5～15 個工作天、J-TaxRefund 數週到約兩個月。頁面顯示「完了」才算真的退款。</p></div></li>
      <li>${icon('check_circle', 'sm')}<div><strong>記得在期限內設定</strong><p>Global Blue 離境後 3 週內沒指定退款方式，會改寄預付卡並扣費。其他公司期限：J-TaxRefund 180 天、JPrefund 200 天、PIE VAT 18 個月。</p></div></li>
    </ul>
    <h3 class="g-sub">各公司怎麼綁卡</h3>
    <div class="table-wrap">
      <table class="g-table">
        <caption class="sr-only">各退稅公司的信用卡退款設定方式</caption>
        <thead><tr><th scope="col">公司</th><th scope="col">什麼時候設定</th><th scope="col">怎麼連到購買紀錄</th></tr></thead>
        <tbody>
          <tr><th scope="row">J-TaxRefund</th><td>買完後</td><td>掃收據或店內 QR code 進網頁登記</td></tr>
          <tr><th scope="row">JPrefund</th><td>出發前即可</td><td>店內出示護照結帳，自動連到帳號</td></tr>
          <tr><th scope="row">Global Blue</th><td>出發前即可</td><td>App 或網頁加入卡片</td></tr>
          <tr><th scope="row">PIE VAT</th><td>出發前建帳號</td><td>掃店家 QR code 或輸入 6 碼代碼（部分店家限當天）</td></tr>
        </tbody>
      </table>
    </div>
    ${sources([SRC.ayaca, SRC.apps, SRC.linshibi, SRC.getaround])}`;
}

/* ---------- 5. 手續費 ---------- */
const FEES = [
  ['唐吉訶德', 'J-TaxRefund', '0%'], ['Bic Camera', 'J-TaxRefund', '0%'], ['多慶屋', 'J-TaxRefund', '0%'], ['鶴羽藥妝', 'J-TaxRefund', '0%'],
  ['札幌藥妝', 'J-TaxRefund', '0%'], ['松本清', 'J-TaxRefund', '約 0.33%（待確認）'], ['GU', 'J-TaxRefund', '1%'], ['東武百貨', 'J-TaxRefund', '1%'],
  ['二木高爾夫', 'J-TaxRefund', '1.5%'], ['伊藤洋華堂', 'J-TaxRefund', '1.65%'], ['松屋銀座', 'J-TaxRefund', '含稅價 2.15%'],
  ['三井 Outlet、LaLaport', 'PIE VAT', '1.5%'], ['澀谷 109', 'PIE VAT', '1.55%'], ['Montbell', 'PIE VAT', '2%～3%'],
  ['Yodobashi（友都八喜）', 'Global Blue', '0%（首日回報）'], ['高島屋', 'Global Blue', '1.55%'], ['大丸／松坂屋', 'Global Blue', '2.3%'], ['EDION', 'Global Blue', '每筆 ¥210'],
  ['3COINS', 'JPrefund', '每筆 ¥320'], ['阿卡將本舖', 'JPrefund', '含稅價 1.1%'], ['GRAND FRONT OSAKA', 'JPrefund', '1.5%'], ['思夢樂', 'JPrefund', '1%～2.5%'],
  ['AEON 永旺夢樂城', 'Planet', '1.5%'], ['Animate', 'Ocean', '2.1%'],
];

function feesPanel() {
  return `
    <p class="g-lead">手續費<strong>由店家決定</strong>，政府沒有上限；店家可以自己吸收，也可以轉給旅客。計算基準各店不同，有的以<strong>未稅價</strong>、有的以<strong>含稅價</strong>計算（下表有註明的為含稅價）。以未稅價計時，消費稅 10%、手續費 1.5%，可以拿回未稅價的 8.5%。</p>
    <div class="g-calc">${icon('calculate', 'sm')}<p><strong>定額收費要小心：</strong>3COINS 每筆收 ¥320。未稅 ${yen(5000)} 退稅 ¥500，扣掉後只剩 ¥180，等於手續費 6.4%；買到未稅 ¥10,000 才降到 3.2%。同一家店<strong>盡量合併成一張收據</strong>。</p></div>
    <div class="table-wrap">
      <table class="g-table g-fees">
        <caption>各店退稅手續費（依退稅公司分組；11/1 上路首日回報，會變動）</caption>
        <thead><tr><th scope="col">店家</th><th scope="col">店家手續費</th></tr></thead>
        ${[...new Set(FEES.map(([, o]) => o))].map((op) => `
        <tbody>
          <tr class="g-group"><th scope="colgroup" colspan="2">${op}</th></tr>
          ${FEES.filter(([, o]) => o === op).map(([s, , f]) => `<tr${f.startsWith('0%') ? ' class="is-free"' : ''}><th scope="row">${s}</th><td>${f}</td></tr>`).join('')}
        </tbody>`).join('')}
      </table>
    </div>
    <h3 class="g-sub">另外可能被扣的費用</h3>
    <ul class="g-ul">
      <li><strong>機場領現金</strong>：Cash JAPAN 退稅額 10%、Self Tax Refund 約未稅價 1.1%。</li>
      <li><strong>提領／匯款費</strong>：PIE VAT 約 0.28%～0.32%；Ocean 退回信用卡最低 ¥180 或 0.5%；JPrefund 有報導另收退稅額約 5%（待確認）。</li>
      <li><strong>發卡銀行</strong>的海外交易手續費、選台幣入帳時的匯率差。</li>
    </ul>
    <p class="hint">本網站的計算：手續費一律以含稅價估算，結果會略為保守；唐吉訶德、Bic Camera 已內建 0%，其他店可在「新增商品 → 更多設定」或「設定」填入手續費。</p>
    ${sources([SRC.newtalk, SRC.linshibi, SRC.chinatimes, SRC.ettoday, SRC.getaround])}`;
}

/* ---------- 6. 新制度（2026/11～2027 時間軸） ---------- */
const RULES = [
  {
    date: '2026/7/1', title: '日本出國稅調高為 ¥3,000', icon: 'flight_takeoff', state: 'done',
    body: `<p>國際觀光旅客稅從每次出境 ¥1,000 調高為 <strong>¥3,000</strong>，通常已含在機票裡。</p>
      <ul><li>以<strong>購票日</strong>判斷：2026/6/30 前買的機票仍是 ¥1,000；之後改票則適用新稅額。</li>
      <li>未滿 2 歲、入境後 24 小時內轉機出境者免徵。</li></ul>`,
    src: [['乘りものニュース〈出國稅 3 倍〉', 'https://trafficnews.jp/post/667615']],
  },
  {
    date: '2026/11/1', title: '免稅改為「出境後退稅」（リファンド方式）', icon: 'receipt_long', state: 'done',
    body: `<ul><li>店頭先付含稅價，出境查驗後由退稅公司退款；門檻同一天同一家店未稅 ${yen(TAX_FREE_MIN)}。</li>
      <li><strong>消耗品 50 萬日圓的上限取消</strong>，也不再需要特殊密封包裝。</li>
      <li>未稅單價 100 萬日圓以上的商品，店家要提供序號等商品資訊。</li>
      <li><strong>沒有過渡期</strong>，11/1 起購買的商品一律適用新制。詳細流程見「流程」分頁。</li></ul>`,
    src: [SRC.jta, SRC.jtaPdf],
  },
  {
    date: '2027/4/1', title: '食品消費稅預計降為 1%（為期 2 年）', icon: 'bakery_dining', state: 'pending',
    body: `<p>適用 8% 輕減稅率的飲食料品，預計 2027/4/1～2029/3/31 降為 <strong>1%</strong>；<strong>酒類與內用餐飲維持 10%</strong>。</p>
      <ul><li>對旅客的影響：食品標價變便宜，但能<strong>退的稅也跟著變少</strong>（從 8% 變 1%），買食品時辦免稅的划算程度會降低。</li>
      <li>法案 2026/11/6 眾議院通過，<strong>參議院審議中、尚未成立</strong>。旅行在這段期間、法案通過後，新增商品時可把稅率選成「1% 食品」。</li></ul>`,
    src: [['NHK〈食料品の消費税減税関連法案 衆議院を通過〉', 'https://news.web.nhk/newsweb/na/nd-20261106de71359'],
      ['時事通信〈消費減税方針を閣議決定〉', 'https://www.jiji.com/jc/article?k=2026080500718&g=pol']],
  },
  {
    date: '2028 年度', title: '電子入境許可 JESTA（預定）', icon: 'event', state: 'plan',
    body: '<p>日本計畫對免簽旅客實施事先上網申請的入境許可，政府目標為 2028 年度，費用與適用國家尚未公布。<strong>2027 年前往日本還不需要申請。</strong></p>',
    src: [['VisasNews〈JESTA planned for 2028〉', 'https://visasnews.com/en/japans-parliament-unveils-new-details-on-jesta-the-electronic-travel-authorization-planned-for-2028/']],
  },
];
const STATE_LABEL = { done: ['已實施', 'badge-cyan'], soon: ['即將實施', 'badge-warn'], pending: ['審議中', 'badge-warn'], plan: ['預定', 'badge-muted'] };

function rulesPanel() {
  return `
    <p class="g-lead">退稅方式、出國稅、食品稅率都有變動。行動電源與回台灣入境規定，請看「打包與海關」頁。</p>
    <ol class="rule-timeline">
      ${RULES.map((r) => {
        const [label, cls] = STATE_LABEL[r.state];
        return `
        <li class="rt-item rt-${r.state}">
          <span class="rt-dot" aria-hidden="true">${icon(r.icon, 'sm')}</span>
          <div class="rt-body">
            <p class="rt-meta"><time>${r.date}</time><span class="badge ${cls}">${label}</span></p>
            <h3 class="rt-title">${r.title}</h3>
            ${r.body}
            ${sources(r.src)}
          </div>
        </li>`;
      }).join('')}
    </ol>`;
}

const TABS = [
  { id: 'flow', label: '流程', render: flowPanel },
  { id: 'ops', label: '退稅公司', render: operatorsPanel },
  { id: 'cash', label: '機場現金', render: cashPanel },
  { id: 'card', label: '信用卡', render: cardPanel },
  { id: 'fees', label: '手續費', render: feesPanel },
  { id: 'rules', label: '新制度', render: rulesPanel },
];

const savedTab = () => { try { return localStorage.getItem(TAB_KEY); } catch { return null; } };

// heading：false 時不輸出卡片自己的小標與標題（獨立頁面已有 h1）
export function guideCard({ heading = true } = {}) {
  const current = TABS.some((t) => t.id === savedTab()) ? savedTab() : 'flow';
  return `
  <section class="card guide-card" ${heading ? 'aria-labelledby="guide-title"' : 'aria-label="退稅指南內容"'}>
    ${heading ? `<p class="eyebrow">${icon('payments', 'sm')}TAX REFUND GUIDE</p>
    <h2 id="guide-title" class="section-title-lg">退稅指南：2026/11 新制怎麼退</h2>` : ''}
    <p class="muted small">資料查證日 ${VERIFIED}。新制剛上路，費率與流程以各店、各退稅公司公告為準。</p>
    <div class="g-tabs" role="tablist" aria-label="退稅指南分頁">
      ${TABS.map((t) => `<button type="button" role="tab" id="gtab-${t.id}" aria-controls="gpanel-${t.id}" aria-selected="${t.id === current}" tabindex="${t.id === current ? 0 : -1}" class="g-tab">${t.label}</button>`).join('')}
    </div>
    ${TABS.map((t) => `<div class="g-panel" role="tabpanel" id="gpanel-${t.id}" aria-labelledby="gtab-${t.id}" tabindex="0"${t.id === current ? '' : ' hidden'}>${t.render()}</div>`).join('')}
  </section>`;
}

// 分頁切換：點擊、左右鍵、Home／End（WAI-ARIA tabs 的操作方式）；記住上次看的分頁
export function bindGuide(root) {
  const list = root.querySelector('.g-tabs');
  if (!list) return;
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const select = (tab, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      root.querySelector(`#${t.getAttribute('aria-controls')}`).hidden = !on;
    });
    if (focus) tab.focus();
    // 只橫向捲動分頁列，讓選中的分頁露出來（不影響整頁捲動）
    list.scrollLeft = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    try { localStorage.setItem(TAB_KEY, tab.id.replace('gtab-', '')); } catch { /* 無法記住也沒關係 */ }
  };
  list.addEventListener('click', (e) => { const t = e.target.closest('[role="tab"]'); if (t) select(t); });
  list.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(tabs[(next + tabs.length) % tabs.length], true);
  });
}
