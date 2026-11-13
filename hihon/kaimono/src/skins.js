// 主題（設計風格）清單。要新增主題：在這裡加一筆，並新增 css/themes/<id>.css（步驟見 README「主題」）。
// - themeColor：手機瀏覽器網址列的顏色，填該主題淺色／深色的頁面底色
// - preview：設定頁主題卡片上的預覽色（底色、按鍵表面、主色）
// - fx：選填。所有主題預設套用共用質感層（css/themes/effects.css 的凹槽、按鍵與光暈）；
//   設為 false 可讓該主題維持平面樣式
export const DEFAULT_SKIN = 'relics';

export const SKINS = [
  {
    id: 'relics',
    label: '金色遺物',
    desc: '白色大理石、金色邊飾與青色折射光（原始配色）',
    themeColor: { light: '#f4f7f9', dark: '#0b1422' },
    preview: {
      light: { bg: '#f4f7f9', surface: '#ffffff', accent: '#d4af37' },
      dark: { bg: '#0b1422', surface: '#172740', accent: '#e2bd45' },
    },
  },
  {
    id: 'dotglow',
    label: '點陣柔光',
    desc: '擬物化凹槽與按鍵，白天琥珀橘、夜晚藍紫光暈',
    themeColor: { light: '#efeae2', dark: '#0b0b12' },
    preview: {
      light: { bg: '#efeae2', surface: '#ffffff', accent: '#f0921e' },
      dark: { bg: '#0b0b12', surface: '#29283f', accent: '#8c82ff' },
    },
  },
  {
    id: 'matcha',
    label: '抹茶和紙',
    desc: '和紙米白配抹茶綠，點綴焙茶棕；夜晚是深林墨綠',
    themeColor: { light: '#f1f2e8', dark: '#0e140d' },
    preview: {
      light: { bg: '#f1f2e8', surface: '#ffffff', accent: '#8fb043' },
      dark: { bg: '#0e140d', surface: '#2a3a28', accent: '#a8c75a' },
    },
  },
  {
    id: 'sakura',
    label: '夜櫻',
    desc: '櫻花白配櫻粉，點綴藤紫；夜晚是深梅紫與粉色光暈',
    themeColor: { light: '#f8f1f2', dark: '#140d14' },
    preview: {
      light: { bg: '#f8f1f2', surface: '#ffffff', accent: '#ee86a4' },
      dark: { bg: '#140d14', surface: '#3a283a', accent: '#f08aa8' },
    },
  },
];
