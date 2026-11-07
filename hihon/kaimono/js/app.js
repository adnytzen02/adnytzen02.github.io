(()=>{var Rs=Object.defineProperty;var et=(e,a)=>{for(var t in a)Rs(e,t,{get:a[t],enumerable:!0})};var Ne=[{id:"beauty",label:"\u85E5\u599D\u7F8E\u808C",icon:"spa"},{id:"luxury",label:"\u5C08\u6AC3\u7CBE\u54C1",icon:"diamond"},{id:"souvenir",label:"\u5FC5\u8CB7\u4F34\u624B\u79AE",icon:"bakery_dining"},{id:"tech",label:"3C \u5BB6\u96FB",icon:"devices"},{id:"anime",label:"\u52D5\u6F2B\u9650\u5B9A",icon:"sports_esports"},{id:"craft",label:"\u9802\u7D1A\u5DE5\u85DD",icon:"handyman"},{id:"liquor",label:"\u73CD\u7A00\u9298\u9152",icon:"liquor"},{id:"fashion",label:"\u670D\u98FE\u96DC\u8CA8",icon:"checkroom"},{id:"other",label:"\u5176\u4ED6",icon:"category"}],Te=e=>Ne.find(a=>a.id===e)??Ne.at(-1),ba=["\u9280\u5EA7","\u65B0\u5BBF","\u6F80\u8C37","\u6C60\u888B","\u79CB\u8449\u539F","\u4E0A\u91CE\u30FB\u6DFA\u8349","\u6771\u4EAC\u8ECA\u7AD9","\u8868\u53C3\u9053\u30FB\u539F\u5BBF","\u53F0\u5834","\u5927\u962A\u6885\u7530","\u5FC3\u9F4B\u6A4B\u30FB\u96E3\u6CE2","\u4EAC\u90FD","\u795E\u6236","\u540D\u53E4\u5C4B","\u798F\u5CA1\u5929\u795E","\u672D\u5E4C","\u6210\u7530\u6A5F\u5834","\u7FBD\u7530\u6A5F\u5834","\u95DC\u897F\u6A5F\u5834"],$t=[{value:3,stars:"\u2605\u2605\u2605",label:"\u5FC5\u8CB7"},{value:2,stars:"\u2605\u2605",label:"\u5FC3\u9858"},{value:1,stars:"\u2605",label:"\u9806\u4FBF"}],vt=e=>$t.find(a=>a.value===Number(e))??$t[1],ha=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u306E\u5728\u5EAB\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u500B\u5546\u54C1\u9084\u6709\u73FE\u8CA8\u55CE\uFF1F"},{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"},{ja:"\u514D\u7A0E\u30AB\u30A6\u30F3\u30BF\u30FC\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u514D\u7A05\u6AC3\u53F0\u5728\u54EA\u88E1\uFF1F"},{ja:"\u30C6\u30B9\u30BF\u30FC\u3092\u8A66\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u8A66\u7528\u8A66\u7528\u54C1\u55CE\uFF1F"},{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u5F35\u512A\u60E0\u5238\u53EF\u4EE5\u4F7F\u7528\u55CE\uFF1F"},{ja:"\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u3067\u3001\u4E00\u62EC\u6255\u3044\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002",zh:"\u6211\u7528\u4FE1\u7528\u5361\u4E00\u6B21\u4ED8\u6E05\u3002"},{ja:"\u30D7\u30EC\u30BC\u30F3\u30C8\u7528\u306B\u5305\u88C5\u3057\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u505A\u79AE\u7269\u5305\u88DD\u55CE\uFF1F"},{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5E6B\u6211\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"},{ja:"\u888B\u3092\u5206\u3051\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u5206\u958B\u88DD\u888B\u55CE\uFF1F"},{ja:"\u30EC\u30B7\u30FC\u30C8\u3092\u304F\u3060\u3055\u3044\u3002",zh:"\u8ACB\u7D66\u6211\u6536\u64DA\u3002"}],$a=[{name:"\u5C71\u5D0E \u55AE\u4E00\u9EA5\u82BD\u5A01\u58EB\u5FCC 700ml",nameJa:"\u30B7\u30F3\u30B0\u30EB\u30E2\u30EB\u30C8\u30A6\u30A4\u30B9\u30AD\u30FC \u5C71\u5D0E 700ml",brand:"SUNTORY",category:"liquor",priority:3,qty:1,price:7700,priceIncludesTax:!0,taxRate:10,area:"\u7FBD\u7530\u6A5F\u5834",stores:["\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"],taxFree:!1,weightKg:1.4,luggage:"carry",fragile:!0,liquid:!0,purchased:!0,purchasedStore:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97",note:"\u51FA\u5883\u7BA1\u5236\u5340\u8CFC\u8CB7\uFF0C\u53EF\u96A8\u8EAB\u5E36\u4E0A\u6A5F\u3002"},{name:"EVE QUICK \u6B62\u75DB\u9320 40 \u9320",nameJa:"\u30A4\u30D6\u30AF\u30A4\u30C3\u30AF\u982D\u75DB\u85ACDX 40\u9320",brand:"SSP",category:"beauty",priority:3,qty:3,price:1480,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",stores:["\u677E\u672C\u6E05"],buyFor:"\u5C0F\u7F8E",weightKg:.05,luggage:"checked"},{name:"\u53C3\u5929\u773C\u85E5\u6C34",nameJa:"\u30B5\u30F3\u30C6 \u76EE\u85AC",brand:"Santen",category:"beauty",priority:2,qty:2,price:1280,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",stores:["\u677E\u672C\u6E05","\u5927\u570B\u85E5\u599D"],weightKg:.03,luggage:"checked",liquid:!0,note:"\u5169\u5BB6\u90FD\u6709\u8CE3\uFF0C\u54EA\u5BB6\u4FBF\u5B9C\u5C31\u5728\u54EA\u8CB7\u3002"},{name:"\u5C0F\u5F62\u7F8A\u7FB9 10 \u5165",nameJa:"\u5C0F\u5F62\u7F8A\u7FB9 10\u672C\u5165",brand:"\u864E\u5C4B TORAYA",category:"souvenir",priority:2,qty:2,price:3240,priceIncludesTax:!0,taxRate:8,taxFree:!0,area:"\u9280\u5EA7",stores:["\u4F0A\u52E2\u4E39"],buyFor:"\u5ABD\u5ABD",weightKg:.6,luggage:"checked",fragile:!0,note:"\u9001\u79AE\u7528\uFF0C\u8ACB\u5E97\u5BB6\u9644\u7D19\u888B\u3002"},{name:"\u8CC7\u751F\u5802 \u7CBE\u83EF\u6DB2 30ml",nameJa:"\u8CC7\u751F\u5802 \u7F8E\u5BB9\u6DB2 30ml",brand:"SHISEIDO",category:"luxury",priority:3,qty:1,price:38500,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:5,area:"\u9280\u5EA7",stores:["\u4F0A\u52E2\u4E39"],buyFor:"\u5C0F\u7F8E",weightKg:.4,luggage:"checked",fragile:!0,liquid:!0,purchased:!0,purchasedStore:"\u4F0A\u52E2\u4E39"},{name:"Tanker 2Way \u516C\u4E8B\u5305",nameJa:"\u30BF\u30F3\u30AB\u30FC 2WAY\u30D6\u30EA\u30FC\u30D5\u30B1\u30FC\u30B9",brand:"PORTER",category:"fashion",priority:2,qty:1,price:42e3,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["PORTER \u6F80\u8C37"],weightKg:1,luggage:"checked"},{name:"nanocare \u5439\u98A8\u6A5F",nameJa:"\u30D8\u30A2\u30FC\u30C9\u30E9\u30A4\u30E4\u30FC \u30CA\u30CE\u30B1\u30A2",brand:"Panasonic",category:"tech",priority:2,qty:1,price:38610,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:7,area:"\u6709\u6A02\u753A",stores:["Bic Camera","Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09"],weightKg:.9,luggage:"checked",note:"\u78BA\u8A8D\u662F\u5426\u6709\u6D77\u5916\u96FB\u58D3\u7248\u672C\u3002"},{name:"\u4EFB\u5929\u5802 \u9650\u5B9A\u5468\u908A",nameJa:"Nintendo TOKYO \u9650\u5B9A\u30B0\u30C3\u30BA",brand:"Nintendo TOKYO",category:"anime",priority:1,qty:1,price:5500,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["\u4EFB\u5929\u5802\u5546\u5E97"],buyFor:"\u963F\u54F2",weightKg:.8,luggage:"checked"},{name:"\u7D05\u8336\u5DE7\u514B\u529B",nameJa:"\u30ED\u30A4\u30E4\u30EB\u30E2\u30F3\u30BF\u30FC\u30CB\u30E5",brand:"LeTAO",category:"souvenir",priority:1,qty:4,price:918,priceIncludesTax:!0,taxRate:8,area:"\u7FBD\u7530\u6A5F\u5834",stores:["\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"],taxFree:!1,weightKg:.15,luggage:"carry",purchased:!0,purchasedStore:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"},{name:"\u62B9\u8336\u7C89 40g",nameJa:"\u62B9\u8336 40g\u7F36",brand:"\u4E00\u4FDD\u5802\u8336\u8217",category:"souvenir",priority:2,qty:2,price:2160,priceIncludesTax:!0,taxRate:8,taxFree:!1,area:"\u4EAC\u90FD",stores:["\u4E00\u4FDD\u5802\u8336\u8217 \u4EAC\u90FD\u672C\u5E97"],weightKg:.12,luggage:"checked",note:"\u55AE\u5E97\u672A\u9054\u514D\u7A05\u9580\u6ABB\u4E5F\u6C92\u95DC\u4FC2\u3002"},{name:"\u6307\u7532\u526A",nameJa:"\u722A\u5207\u308A",brand:"\u8C9D\u5370 KAI",category:"craft",priority:2,qty:2,price:1100,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09","LoFt"],buyFor:"\u963F\u54F2",weightKg:.05,luggage:"checked",blade:!0,purchased:!0,purchasedStore:"Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09"},{name:"\u5408\u5229\u4ED6\u547D EX Plus",nameJa:"\u30A2\u30EA\u30CA\u30DF\u30F3EX\u30D7\u30E9\u30B9",brand:"Alinamin",category:"beauty",priority:3,qty:1,price:6578,priceIncludesTax:!0,taxRate:10,taxFree:!0,anyStore:!0,weightKg:.2,luggage:"checked",note:"\u5230\u8655\u90FD\u6709\uFF0C\u770B\u5230\u4FBF\u5B9C\u5C31\u8CB7\u3002"},{name:"\u4F11\u8DB3\u6642\u9593 \u8CBC\u5E03",nameJa:"\u4F11\u8DB3\u6642\u9593",brand:"Lion",category:"beauty",priority:1,qty:3,price:1078,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["\u5510\u5409\u8A36\u5FB7"],weightKg:.15,luggage:"checked"}],tt=[{text:"\u8B77\u7167",done:!1},{text:"\u884C\u52D5\u96FB\u6E90\uFF08\u96A8\u8EAB\u3001\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u4E0D\u80FD\u7528\uFF09",done:!1},{text:"\u884C\u674E\u79E4",done:!1},{text:"\u6613\u788E\u54C1\u7528\u6C23\u6CE1\u888B",done:!1}];function I(e){return String(e??"").normalize("NFKC").toLowerCase().replace(/[\s・·•\-‐–—_()（）「」『』[\]【】.,，、。/／|]/g,"")}var va=e=>I(e).replace(/(本店|本館|店舗|店)$/,"");function ya(e,a){if(!I(e)||I(e)===I(a))return!1;let t=va(e),o=va(a);if(!t||!o)return!1;if(t===o)return!0;let n=t.length<=o.length?t:o,s=t.length<=o.length?o:t;if(n.length>=3&&s.includes(n))return!0;let r=new Set(t),l=new Set(o),f=[...r].filter(b=>l.has(b)).length/new Set([...r,...l]).size;return n.length>=2&&f>=.75&&Math.abs(t.length-o.length)<=3}function xa(e,a){let t=I(e);if(!t)return[];let o=new Set;return a.filter(n=>{let s=I(n);return s===t||o.has(s)?!1:(o.add(s),ya(e,n))})}function wa(e,a=[]){let t=[...new Map(e.filter(Boolean).map(n=>[I(n),n.trim()])).values()],o=[];for(let n=0;n<t.length;n++)for(let s=n+1;s<t.length;s++){if(!ya(t[n],t[s]))continue;let r=jt(t[n],t[s]);a.includes(r)||o.push([t[n],t[s]])}return o}var jt=(e,a)=>[I(e),I(a)].sort().join("\uFF5C");var ka="shopping-relics:v1",yt={tripName:"\u6211\u7684\u65E5\u672C\u8CFC\u7269\u4E4B\u65C5",rate:.21,rateSource:"default",rateUpdatedAt:null,budget:15e4,refundFeePct:0,cardRebatePct:0,checkedLimit:23,carryLimit:7,checkedBase:8,carryBase:3,flightNote:"",ignoredStorePairs:[],customStores:[],storeMeta:{},paidFriends:{},listView:"store"},_s=()=>crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`;function xe(e={}){let a=r=>String(r??"").trim(),t=Array.isArray(e.stores)?e.stores.map(a).filter(Boolean):a(e.store)?[a(e.store)]:[];t=t.filter((r,l)=>t.findIndex(c=>I(c)===I(r))===l).slice(0,3);let o=!!e.anyStore&&t.length===0,n=!!e.purchased,s=n?a(e.purchasedStore??(Array.isArray(e.stores)?"":e.store)):"";return{id:e.id||_s(),name:String(e.name??"").trim(),nameJa:String(e.nameJa??"").trim(),brand:String(e.brand??"").trim(),category:e.category||"other",priority:Number(e.priority)||2,qty:Math.max(1,Math.round(Number(e.qty)||1)),price:Math.max(0,Number(e.price)||0),priceIncludesTax:e.priceIncludesTax!==!1,taxRate:[1,8].includes(Number(e.taxRate))?Number(e.taxRate):10,taxFree:e.taxFree!==!1,discountPct:Math.min(100,Math.max(0,Number(e.discountPct)||0)),refundFeePct:e.refundFeePct===""||e.refundFeePct==null?null:Number(e.refundFeePct),area:String(e.area??"").trim(),stores:t,anyStore:o,purchasedStore:s,store:n?s||t[0]||"":t[0]||"",buyFor:String(e.buyFor??"").replace(/^[@＠]+/,"").trim(),planDate:e.planDate||"",jan:String(e.jan??"").replace(/\D/g,""),weightKg:Math.max(0,Number(e.weightKg)||0),luggage:["checked","carry","none"].includes(e.luggage)?e.luggage:"checked",fragile:!!e.fragile,liquid:!!e.liquid,battery:!!e.battery,blade:!!e.blade,packed:!!e.packed,purchased:n,purchasedAt:e.purchasedAt||null,image:e.image||"",note:String(e.note??""),demo:!!e.demo,createdAt:e.createdAt||Date.now()}}function Ds(){try{let e=JSON.parse(localStorage.getItem(ka)||"null");if(e&&Array.isArray(e.items))return{items:e.items.map(xe),settings:{...yt,...e.settings},packing:Array.isArray(e.packing)?e.packing:structuredClone(tt)}}catch{}return{items:[],settings:{...yt},packing:structuredClone(tt)}}var F=Ds(),Ft=new Set;function Os(){try{return localStorage.setItem(ka,JSON.stringify(F)),!0}catch(e){return console.warn("\u5132\u5B58\u5931\u6557",e),window.dispatchEvent(new CustomEvent("store:quota")),!1}}function pe(){let e=Os();return Ft.forEach(a=>a(F)),e}var m={get state(){return F},subscribe(e){return Ft.add(e),()=>Ft.delete(e)},getItem(e){return F.items.find(a=>a.id===e)},addItem(e){let a=xe(e);return F.items=[a,...F.items],pe(),a},updateItem(e,a){return F.items=F.items.map(t=>t.id===e?xe({...t,...a,id:e}):t),pe()},removeItem(e){let a=this.getItem(e);return F.items=F.items.filter(t=>t.id!==e),pe(),a},restoreItem(e,a=0){let t=[...F.items];t.splice(a,0,e),F.items=t,pe()},togglePurchased(e,a,t){let o=this.getItem(e);if(!o)return null;let n=a??!o.purchased;return this.updateItem(e,{purchased:n,purchasedAt:n?Date.now():null,purchasedStore:n?t??o.stores[0]??"":""}),this.getItem(e)},addCustomStore(e){let a=String(e??"").trim();!a||F.settings.customStores.some(t=>I(t)===I(a))||(F.settings={...F.settings,customStores:[...F.settings.customStores,a]},pe())},setStoreMeta(e,a){let t=I(e),o={...F.settings.storeMeta,[t]:{...F.settings.storeMeta[t],...a}};F.settings={...F.settings,storeMeta:o},pe()},renameStore(e,a){let t=I(e),o=n=>I(n)===t?a:n;return F.items=F.items.map(n=>xe({...n,stores:n.stores.map(o),purchasedStore:o(n.purchasedStore)})),F.settings={...F.settings,customStores:F.settings.customStores.map(o)},pe()},updateSettings(e){F.settings={...F.settings,...e},pe()},setPacking(e){F.packing=e,pe()},loadDemo(){let e=Date.now(),a=$a.map((t,o)=>xe({...t,demo:!0,createdAt:e-o*1e3}));F.items=[...F.items,...a],pe()},clearDemo(){F.items=F.items.filter(e=>!e.demo),pe()},exportJSON(){return JSON.stringify({app:"shopping-relics",version:1,exportedAt:new Date().toISOString(),...F},null,2)},importJSON(e){let a=JSON.parse(e);if(!a||!Array.isArray(a.items))throw new Error("\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26");F={items:a.items.map(xe),settings:{...yt,...a.settings},packing:Array.isArray(a.packing)?a.packing:structuredClone(tt)},pe()},resetAll(){F={items:[],settings:{...yt},packing:structuredClone(tt)},pe()}};var Sa="2026/11/7",at="\u4E0D\u9650\u5E97\u92EA\uFF08\u6BD4\u50F9\u4E2D\uFF09",Js="\u767E\u8CA8\u9000\u7A05\u591A\u534A\u6703\u6536\u624B\u7E8C\u8CBB\uFF0C\u65B0\u5236\u8CBB\u7387\u4F9D\u5E97\u5BB6\u516C\u544A\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF1A\u9AD8\u5CF6\u5C4B 1.55%\u3001\u5927\u4E38\uFF0F\u677E\u5742\u5C4B 2.3%\uFF09\u3002",st=[{id:"drug",label:"\u85E5\u599D\u7F8E\u599D",icon:"spa",stores:[{name:"\u677E\u672C\u6E05"},{name:"\u5927\u570B\u85E5\u599D"},{name:"Sundrug\uFF08\u5C1A\u90FD\u6A02\u5BA2\uFF09",coupons:[{pct:3,min:1e4},{pct:5,min:3e4},{pct:7,min:5e4}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA510,000\uFF0F\xA530,000\uFF0F\xA550,000\uFF0C\u5206\u5225\u518D\u6298 3%\uFF0F5%\uFF0F7%\uFF1B\u5C08\u6AC3\u4FDD\u990A\u54C1\u3001\u83F8\u9152\u7B49\u9664\u5916\uFF0C\u7D50\u5E33\u524D\u51FA\u793A\u3002",couponUrl:"https://app.likejapan.com/en-us/coupon/SUNDRUG-pharmacy-coupon-7percent",source:"LikeJapan\uFF082025/12 \u66F4\u65B0\uFF09"},{name:"OS Drug",noTaxFree:!0,note:"\u4F9D\u4F60\u7684\u5099\u8A3B\uFF1A\u4E0D\u8FA6\u514D\u7A05\uFF0C\u4F46\u73FE\u91D1\u50F9\u5F88\u4F4E\u3002"},{name:"@cosme TOKYO"}]},{id:"variety",label:"\u7D9C\u5408\u8CE3\u5834\uFF0F\u96DC\u8CA8",icon:"storefront",stores:[{name:"\u5510\u5409\u8A36\u5FB7",coupons:[{pct:5,min:1e4},{pct:7,min:3e4}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA510,000 \u518D\u6298 5%\u3001\u6EFF \xA530,000 \u6298 7%\uFF1B\u9152\u3001\u83F8\u3001\u904A\u6232\u4E3B\u6A5F\u7B49\u9664\u5916\u3002\u9700\u7D50\u5E33\u524D\u51FA\u793A\u5373\u6642\u689D\u78BC\uFF0C\u622A\u5716\u7121\u6548\u3002",couponUrl:"https://livejapan.com/public/operation/coupon/donki/ja.html",source:"LIVE JAPAN\uFF082026/4/28 \u66F4\u65B0\uFF09",refundFeePct:0,feeNote:"\u65B0\u5236\u9000\u7A05\u624B\u7E8C\u8CBB 0 \u5143\uFF1A\u6BCD\u516C\u53F8 PPIH \u5BA3\u5E03 2026/11/1 \u8D77\u5168\u65E5\u672C\u9580\u5E02\u7531\u5E97\u5BB6\u5438\u6536\uFF08\u671F\u9593\u8207\u689D\u4EF6\u53EF\u80FD\u8ABF\u6574\uFF09\u3002\u82E5\u5230\u6A5F\u5834\u9818\u73FE\u91D1\uFF0C\u6A5F\u53F0\u696D\u8005\u4ECD\u6703\u53E6\u6536\u670D\u52D9\u8CBB\u3002"},{name:"LoFt"},{name:"Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09"},{name:"\u7121\u5370\u826F\u54C1"},{name:"3COINS"},{name:"Life \u8D85\u5E02"},{name:"\u696D\u52D9\u8D85\u5E02"}]},{id:"tech",label:"\u96FB\u5668\uFF0F\u52D5\u6F2B",icon:"devices",stores:[{name:"Bic Camera",coupons:[{pct:7,min:5e3,label:"\u5BB6\u96FB\u30FB\u76F8\u6A5F\u30FB\u624B\u9336",categories:["tech","craft"]},{pct:5,min:5e3,label:"\u85E5\u599D\u30FB\u65E5\u7528\u54C1",categories:["beauty","other","fashion"]},{pct:3,min:5e3,label:"\u65E5\u672C\u9152",categories:["liquor"]}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA55,000\uFF0C\u4F9D\u985E\u5225\u518D\u6298 7%\uFF08\u5BB6\u96FB\u3001\u76F8\u6A5F\u3001\u624B\u9336\uFF09\uFF0F5%\uFF08\u85E5\u599D\u3001\u65E5\u7528\u54C1\uFF09\uFF0F3%\uFF08\u65E5\u672C\u9152\uFF09\uFF1BApple\u3001\u904A\u6232\u4E3B\u6A5F\u7B49\u9664\u5916\u3002\u5B98\u65B9\u9801\u9762\u6A19\u793A\u6709\u6548\u81F3 2026/8/31\uFF0C\u8ACB\u78BA\u8A8D\u65B0\u7248\u512A\u60E0\u5238\u3002",couponUrl:"https://livejapan.com/public/operation/coupon/biccamera/en.html",source:"LIVE JAPAN",refundFeePct:0,feeNote:"\u65B0\u5236\u9000\u7A05\u624B\u7E8C\u8CBB 0 \u5143\uFF08\u4F9D 2026/10 \u5831\u5C0E\uFF0C\u7531\u5E97\u5BB6\u5438\u6536\uFF0C\u689D\u4EF6\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002\u82E5\u5230\u6A5F\u5834\u9818\u73FE\u91D1\uFF0C\u6A5F\u53F0\u696D\u8005\u4ECD\u6703\u53E6\u6536\u670D\u52D9\u8CBB\u3002"},{name:"Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09",feeNote:"\u90E8\u5206\u5927\u578B\u9580\u5E02\u8A2D\u6709 Global Blue \u5E02\u5340\u73FE\u91D1\u9000\u7A05\u6AC3\u53F0\uFF0C\u53EF\u5728\u5E97\u5167\u5148\u9818\u73FE\u91D1\uFF08\u9700\u767B\u8A18\u4FE1\u7528\u5361\u64D4\u4FDD\uFF09\uFF1B\u51FA\u5883\u6642\u4ECD\u8981\u5728\u6A5F\u5834\u5B8C\u6210\u6D77\u95DC\u78BA\u8A8D\uFF0C\u5426\u5247\u6703\u5F9E\u4FE1\u7528\u5361\u6263\u56DE\u3002\u5E97\u5BB6\u624B\u7E8C\u8CBB\u9996\u65E5\u56DE\u5831\u70BA 0%\uFF08\u5C1A\u5F85\u5B98\u65B9\u516C\u544A\uFF09\u3002"},{name:"Animate\uFF08\u5B89\u5229\u7F8E\u7279\uFF09"},{name:"\u79CB\u8449\u539F\u5C08\u8CE3\u5E97"},{name:"\u4E2D\u91CE\u767E\u8001\u532F"},{name:"\u5BF6\u53EF\u5922\u4E2D\u5FC3"},{name:"\u4EFB\u5929\u5802\u5546\u5E97"}]},{id:"gift",label:"\u4F34\u624B\u79AE\uFF0F\u767E\u8CA8",icon:"bakery_dining",stores:[{name:"\u6210\u7530\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u95DC\u897F\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u6771\u4EAC\u8ECA\u7AD9\u4E00\u756A\u8857"},{name:"\u4F0A\u52E2\u4E39",dept:!0},{name:"\u9AD8\u5CF6\u5C4B",dept:!0,feeNote:"\u65B0\u5236\u9000\u7A05\u516C\u53F8\u70BA Global Blue\uFF0C\u624B\u7E8C\u8CBB 1.55%\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF0C\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002"},{name:"\u5927\u4E38",dept:!0,feeNote:"\u65B0\u5236\u9000\u7A05\u516C\u53F8\u70BA Global Blue\uFF0C\u5927\u4E38\uFF0F\u677E\u5742\u5C4B\u624B\u7E8C\u8CBB 2.3%\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF0C\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002"},{name:"\u962A\u6025\u767E\u8CA8",dept:!0,couponNote:"\u51FA\u793A\u8B77\u7167\u53EF\u9818\u5916\u570B\u65C5\u5BA2 5% \u512A\u5F85\u5238\uFF0C\u767C\u5238\u8D77 7 \u5929\u5167\u53EF\u7528\uFF1B\u7279\u50F9\u54C1\u3001\u98DF\u54C1\u3001\u672A\u7A05 \xA51,000 \u4EE5\u4E0B\u5546\u54C1\u9664\u5916\u3002",couponUrl:"https://global.hankyu-hanshin-dept.co.jp/store/hankyuhonten/service/",source:"\u962A\u6025\u767E\u8CA8\u5B98\u7DB2"}]},{id:"cvs",label:"\u4FBF\u5229\u5546\u5E97",icon:"local_convenience_store",stores:[{name:"7-11"},{name:"Lawson"},{name:"FamilyMart"}]}],Ea=new Map;for(let e of st)for(let a of e.stores)Ea.set(I(a.name),{...a,group:e.id});function we(e){return Ea.get(I(e))??null}function je(e,a={}){let t=we(e)??{},o=a[I(e)]??{},n={...t,...o,name:e};return t.dept&&!n.feeNote&&(n.feeNote=Js),t.dutyFree&&(n.dutyNote="\u51FA\u5883\u7BA1\u5236\u5340\u5167\u7684\u514D\u7A05\u5E97\u552E\u50F9\u5DF2\u4E0D\u542B\u6D88\u8CBB\u7A05\uFF0C\u4E0D\u9700\u53E6\u8FA6\u9000\u7A05\u3002"),n}function Ta(e,a){return e?.coupons?.length?e.coupons.find(o=>o.categories?.includes(a))??null:null}var q=5e3;var ie=e=>Math.round(e);function ke(e){return e.battery?"carry":e.blade||e.liquid&&!(e.purchased&&we(e.purchasedStore)?.dutyFree)?"checked":e.luggage}var Oe=e=>{let a=new Date(e);return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`};function Je(e,a){let t=e.taxRate/100,o=e.priceIncludesTax?e.price/(1+t):e.price,n=1-e.discountPct/100,s=o*n*e.qty,r=s*t,l=s+r,c=e.refundFeePct??we(e.purchasedStore||e.store)?.refundFeePct??a.refundFeePct??0,f=o*(1+t)*e.qty;return{unitExcl:ie(o),unitIncl:ie(o*(1+t)),listIncl:ie(f),discount:ie(f-l),lineExcl:ie(s),tax:ie(r),pay:ie(l),fee:ie(l*(c/100)),feePct:c}}var Bs=e=>`${I(e.store)}|${e.purchased&&e.purchasedAt?Oe(e.purchasedAt):e.planDate||Oe(Date.now())}`;function Gs(e,a){let t=new Map;for(let o of e){let n=o.store.trim()?Bs(o):`__solo__${o.id}`;t.has(n)||t.set(n,{key:n,store:o.store.trim(),area:o.area,date:o.purchased&&o.purchasedAt?Oe(o.purchasedAt):o.planDate||"",items:[],eligibleExcl:0,totalPay:0});let s=t.get(n),r=Je(o,a);s.items.push(o),s.totalPay+=r.pay,o.taxFree&&(s.eligibleExcl+=r.lineExcl),!s.area&&o.area&&(s.area=o.area)}for(let o of t.values())o.hasTaxFreeItems=o.items.some(n=>n.taxFree),o.eligible=o.hasTaxFreeItems&&o.eligibleExcl>=q,o.shortfall=Math.max(0,q-o.eligibleExcl),o.progress=Math.min(1,o.eligibleExcl/q),o.undatedMerge=!!o.store&&!o.date&&o.hasTaxFreeItems&&o.items.filter(n=>n.taxFree).length>=2,o.mergeNeeded=o.undatedMerge&&o.eligible&&o.items.every(n=>!n.taxFree||Je(n,a).lineExcl<q);return t}function Fe(e,a){let t=Gs(e,a),o=new Map;for(let n of t.values())for(let s of n.items){let r=Je(s,a),l=s.taxFree&&n.eligible,c=l?Math.max(0,r.tax-r.fee):0;o.set(s.id,{...r,refundable:l,refund:c,net:r.pay-c,group:n,weight:s.weightKg*s.qty})}return{groups:t,byItem:o}}function xt(e){let{items:a,settings:t}=e,{groups:o,byItem:n}=Fe(a,t),s={count:a.length,purchasedCount:0,pendingCount:0,pay:0,paid:0,pending:0,refund:0,refundPaid:0,net:0,discount:0,weightChecked:0,weightCarry:0,weightCheckedNow:0,weightCarryNow:0,packedCount:0,packableCount:0,groups:o,byItem:n};for(let r of a){let l=n.get(r.id);s.pay+=l.pay,s.refund+=l.refund,s.net+=l.net,s.discount+=l.discount,r.purchased?(s.purchasedCount+=1,s.paid+=l.pay,s.refundPaid+=l.refund):(s.pendingCount+=1,s.pending+=l.pay);let c=ke(r);c==="checked"&&(s.weightChecked+=l.weight),c==="carry"&&(s.weightCarry+=l.weight),r.purchased&&c==="checked"&&(s.weightCheckedNow+=l.weight),r.purchased&&c==="carry"&&(s.weightCarryNow+=l.weight),c!=="none"&&(s.packableCount+=1,r.packed&&(s.packedCount+=1))}return s.remaining=t.budget-s.pay,s.budgetUsedPct=t.budget>0?s.paid/t.budget:0,s.budgetPlannedPct=t.budget>0?s.pay/t.budget:0,s.rebate=Math.round(s.pay*(t.cardRebatePct/100)),s.totalChecked=t.checkedBase+s.weightChecked,s.totalCarry=t.carryBase+s.weightCarry,s.totalCheckedNow=t.checkedBase+s.weightCheckedNow,s.totalCarryNow=t.carryBase+s.weightCarryNow,s.undatedGroups=[...o.values()].filter(r=>r.undatedMerge),s.eligibleStores=[...o.values()].filter(r=>r.eligible).length,s.taxFreeStores=[...o.values()].filter(r=>r.hasTaxFreeItems&&r.store).length,s}function Aa({price:e,includesTax:a,taxRate:t,discountPct:o,feePct:n}){let s=t/100,r=(a?e/(1+s):e)*(1-o/100),l=r*s,c=r+l,f=r>=q,b=c*(n/100),h=f?Math.max(0,l-b):0,k=a?e:e*(1+s);return{excl:ie(r),tax:ie(l),pay:ie(c),fee:ie(b),refund:ie(h),net:ie(c-h),eligible:f,saved:ie(k-(c-h))}}var zs=[{name:"ExchangeRate-API",url:"https://open.er-api.com/v6/latest/JPY",pick:e=>e?.result==="success"?e.rates?.TWD:void 0},{name:"fawazahmed0 currency-api",url:"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/jpy.min.json",pick:e=>e?.jpy?.twd}],Us=6*60*60*1e3;async function Hs(e,a=8e3){let t=new AbortController,o=setTimeout(()=>t.abort(),a);try{let n=await fetch(e,{signal:t.signal,cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);return await n.json()}finally{clearTimeout(o)}}async function Be({force:e=!1}={}){let{settings:a}=m.state;if(!e&&a.rateSource==="manual")return{skipped:"manual"};if(!e&&a.rateUpdatedAt&&Date.now()-a.rateUpdatedAt<Us)return{skipped:"fresh"};for(let t of zs)try{let o=Number(t.pick(await Hs(t.url)));if(o>0&&o<10)return m.updateSettings({rate:o,rateSource:"api",rateUpdatedAt:Date.now(),rateProvider:t.name}),{ok:!0,rate:o,provider:t.name}}catch(o){console.info(`\u532F\u7387\u4F86\u6E90 ${t.name} \u7121\u6CD5\u4F7F\u7528\uFF1A`,o.message)}return{ok:!1}}function wt(e){m.updateSettings({rate:e,rateSource:"manual",rateUpdatedAt:Date.now(),rateProvider:"\u624B\u52D5\u8F38\u5165"})}var Ks={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},d=e=>String(e??"").replace(/[&<>"']/g,a=>Ks[a]),J=(e,a=document)=>a.querySelector(e),nt=(e,a=document)=>[...a.querySelectorAll(e)],Vs=new Intl.NumberFormat("ja-JP"),Ws=new Intl.NumberFormat("zh-TW",{maximumFractionDigits:0}),u=e=>`\xA5${Vs.format(Math.round(e||0))}`,_=(e,a)=>`NT$ ${Ws.format(Math.round((e||0)*a))}`,ee=(e,a=0)=>new Intl.NumberFormat("zh-TW",{minimumFractionDigits:a,maximumFractionDigits:a}).format(e||0),fe=e=>`${ee(e,e>=10?1:2)} kg`;var Ma=e=>{let a=String(e).match(/-?\d[\d,]*(\.\d+)?/);return a?{str:a[0],val:parseFloat(a[0].replace(/,/g,""))}:null};function Ge(e,a){let t=new Map;return e?.querySelectorAll(a).forEach((o,n)=>t.set(o.dataset.countKey??n,o.textContent)),t}function ze(e,a,t){!e||matchMedia("(prefers-reduced-motion: reduce)").matches||e.querySelectorAll(a).forEach((o,n)=>{let s=t.get(o.dataset.countKey??n);if(s==null)return;let r=Ma(s),l=Ma(o.textContent);if(!r||!l||r.val===l.val)return;let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=c.nextNode();for(;f&&!f.nodeValue.includes(l.str);)f=c.nextNode();if(!f)return;let b=(l.str.split(".")[1]||"").length,h=v=>v.toLocaleString("en-US",{minimumFractionDigits:b,maximumFractionDigits:b}),k=f.nodeValue,E=performance.now(),g=v=>{let y=Math.min(1,(v-E)/400),C=1-(1-y)**3;f.nodeValue=y<1?k.replace(l.str,h(r.val+(l.val-r.val)*C)):k,y<1&&requestAnimationFrame(g)};requestAnimationFrame(g)})}var i=(e,a="")=>`<span class="ms ${a}" aria-hidden="true">${e}</span>`;function ot(e){if(!e)return"";let a=typeof e=="number"?new Date(e):new Date(`${e}T00:00:00`);return new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",weekday:"short"}).format(a)}function Ue(e){return e?new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e)):""}var qt=[];function ce(e,{onClose:a,backdropClose:t=!0}={}){let o=document.activeElement;e.addEventListener("close",function s(){e.removeEventListener("close",s);let r=qt.indexOf(e);r>-1&&qt.splice(r,1),a?.(),o&&document.contains(o)&&o.focus({preventScroll:!0})}),t&&e.addEventListener("click",s=>{s.target===e&&U(e)}),qt.push(e),e.showModal(),(e.querySelector("[autofocus]")??e.querySelector(".dlg-close"))?.focus()}function Ys(e){let a=document.getElementById("toast-region");if(!a||!e.contains(a))return;([...document.querySelectorAll("dialog[open]:not(.closing)")].filter(o=>o!==e).at(-1)??document.body).append(a)}function U(e){if(!e?.open)return;let a=matchMedia("(prefers-reduced-motion: reduce)").matches,t=()=>{Ys(e),e.close(),e.remove()};if(a){t();return}e.classList.add("closing"),setTimeout(t,180)}function de(e,a,t){let o=document.createElement("dialog");return o.className=`dlg ${e}`,t&&o.setAttribute("aria-labelledby",t),o.innerHTML=a,document.body.append(o),o.addEventListener("cancel",n=>{n.preventDefault(),U(o)}),o}function qe({title:e,body:a,confirmText:t,danger:o=!1}){return new Promise(n=>{let s=!1,r=de("dlg-confirm",`
      <form method="dialog" class="confirm-body">
        <h2 id="confirm-title" class="confirm-title">${d(e)}</h2>
        <p class="confirm-text">${a}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-act="cancel" autofocus>\u53D6\u6D88</button>
          <button type="button" class="btn ${o?"btn-danger":"btn-gold"}" data-act="ok">${d(t)}</button>
        </div>
      </form>`,"confirm-title");r.addEventListener("click",l=>{let c=l.target.closest("[data-act]")?.dataset.act;c&&(s=c==="ok",U(r))}),ce(r,{onClose:()=>n(s)})})}var La;function M({title:e,message:a="",actionText:t,onAction:o,tone:n="gold",duration:s=5e3}){let r=J("#toast-region");clearTimeout(La),r.innerHTML=`
    <div class="toast toast-${n}" role="status">
      <span class="toast-icon">${i(n==="error"?"error":"stars")}</span>
      <div class="toast-text">
        <strong>${d(e)}</strong>
        ${a?`<span>${a}</span>`:""}
      </div>
      ${t?`<button type="button" class="toast-action">${d(t)}</button>`:""}
      <button type="button" class="toast-close" aria-label="\u95DC\u9589\u901A\u77E5">${i("close")}</button>
    </div>`;let l=r.firstElementChild,c=[...document.querySelectorAll("dialog[open]:not(.closing)")].at(-1);c&&r.parentElement!==c?c.append(r):!c&&r.parentElement!==document.body&&document.body.append(r);let f=()=>{l.classList.add("out"),setTimeout(()=>l.remove(),200)};l.querySelector(".toast-close").addEventListener("click",f),l.querySelector(".toast-action")?.addEventListener("click",()=>{o?.(),f()}),La=setTimeout(f,s)}var kt=["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],Xs=kt.map(e=>[...e].map(a=>a==="0"?"1":"0").reverse().join("")),Ca=kt.map(e=>[...e].map(a=>a==="0"?"1":"0").join("")),Qs=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];function rt(e){if(!/^\d{13}$/.test(e)&&!/^\d{8}$/.test(e))return!1;let a=[...e].map(Number),t=a.pop();return(10-a.reverse().reduce((n,s,r)=>n+s*(r%2===0?3:1),0)%10)%10===t}function Pa(e){if(!rt(e))return"";let a=[...e].map(Number),t="101";if(a.length===13){let r=Qs[a[0]];for(let l=1;l<=6;l++)t+=(r[l-1]==="L"?kt:Xs)[a[l]];t+="01010";for(let l=7;l<=12;l++)t+=Ca[a[l]]}else{for(let r=0;r<4;r++)t+=kt[a[r]];t+="01010";for(let r=4;r<8;r++)t+=Ca[a[r]]}t+="101";let o=9,n=t.length+o*2,s="";return[...t].forEach((r,l)=>{r==="1"&&(s+=`<rect x="${l+o}" y="0" width="1" height="50"/>`)}),`<svg class="barcode" viewBox="0 0 ${n} 50" preserveAspectRatio="none" role="img" aria-label="JAN \u689D\u78BC ${e}"><rect width="${n}" height="50" fill="#fff"/><g fill="#000">${s}</g></svg>`}function Ia(e,a=480,t=.78){return new Promise((o,n)=>{let s=new FileReader;s.onerror=()=>n(new Error("\u8B80\u53D6\u5716\u7247\u5931\u6557")),s.onload=()=>{let r=new Image;r.onerror=()=>n(new Error("\u7121\u6CD5\u89E3\u6790\u9019\u5F35\u5716\u7247")),r.onload=()=>{let l=Math.min(1,a/Math.max(r.width,r.height)),c=document.createElement("canvas");c.width=Math.round(r.width*l),c.height=Math.round(r.height*l),c.getContext("2d").drawImage(r,0,0,c.width,c.height),o(c.toDataURL("image/jpeg",t))},r.src=s.result},s.readAsDataURL(e)})}function St(e,a,t="text/plain"){let o=new Blob([a],{type:`${t};charset=utf-8`}),n=URL.createObjectURL(o),s=Object.assign(document.createElement("a"),{href:n,download:e});document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function He(e,{label:a,tone:t="gold",max:o=1}={}){let n=Math.max(0,Math.min(o,e));return`<div class="bar bar-${e>o?"danger":t}" role="progressbar" aria-label="${d(a)}"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(e/o*100)}">
      <span style="--w:${n/o*100}%"></span></div>`}function lt(e,a,t){let o=0,n=e.map(s=>{let r=a>0?Math.max(0,Math.min(100-o,s.value/a*100)):0;return o+=r,`<span class="seg-${s.tone}" style="--w:${r}%"></span>`}).join("");return`<div class="stack-bar stack-sm" role="img" aria-label="${d(t)}">${n}</div>`}var Rt=3;function it(){let{items:e,settings:a}=m.state,t=[...a.customStores,...e.flatMap(n=>[...n.stores,n.purchasedStore])].filter(Boolean),o=new Set;return t.filter(n=>{let s=I(n);return o.has(s)||we(n)?!1:(o.add(s),!0)})}var Na=(e,a)=>`<button type="button" class="chip chip-sm store-chip ${a?"on":""}" data-pick="${d(e)}" aria-pressed="${a}">${d(e)}</button>`;function Et(e){let a=[];if(e.noTaxFree&&a.push(`<li>${i("block","sm")}${d(e.note??"\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05\u3002")}</li>`),e.dutyNote&&a.push(`<li>${i("flight_takeoff","sm")}${d(e.dutyNote)}</li>`),e.couponNote&&a.push(`<li>${i("local_offer","sm")}${d(e.couponNote)}</li>`),e.feeNote&&a.push(`<li>${i("info","sm")}${d(e.feeNote)}</li>`),e.myNote&&a.push(`<li>${i("edit_note","sm")}${d(e.myNote)}</li>`),!a.length)return"";let t=e.source?`\u8CC7\u6599\u4F86\u6E90\uFF1A${d(e.source)}\uFF0C`:"";return`<ul class="store-notes">${a.join("")}</ul>
    <p class="store-src">${t}${we(e.name)?`\u67E5\u8B49\u65E5 ${Sa}\uFF0C`:""}\u5BE6\u969B\u4EE5\u5E97\u5BB6\u516C\u544A\u70BA\u6E96\u3002</p>`}function ja(e,a){return`
  <div class="field store-field">
    <span class="label" id="lb-store">\u76EE\u6A19\u5E97\u92EA <small>\uFF08\u53EF\u8907\u9078 ${Rt} \u5BB6\uFF0C\u7B2C\u4E00\u5BB6\u70BA\u4E3B\u9078\uFF09</small></span>
    <div class="store-selected" data-store-selected aria-live="polite"></div>
    <button type="button" class="btn btn-ghost btn-sm store-open" data-store-open aria-expanded="false" aria-controls="store-panel">${i("storefront","sm")}<span>\u9078\u64C7\u5E97\u92EA</span></button>
    <div class="store-panel" id="store-panel" role="group" aria-labelledby="lb-store" hidden>
      <div class="store-custom">
        <label for="fi-store-custom" class="sr-only">\u8F38\u5165\u81EA\u8A02\u5E97\u540D</label>
        <input id="fi-store-custom" list="dl-store" placeholder="\u8F38\u5165\u81EA\u8A02\u5E97\u540D\uFF0C\u4F8B\u5982\uFF1A\u5409\u4F0A\u5361\u54C7\u6A02\u5712" autocomplete="off" enterkeyhint="done">
        <button type="button" class="btn btn-slate btn-sm" data-store-add>${i("add","sm")}\u52A0\u5165</button>
      </div>
      <datalist id="dl-store">${it().map(t=>`<option value="${d(t)}">`).join("")}</datalist>
      <div class="store-suggest" data-store-suggest aria-live="polite"></div>
      <div data-store-groups></div>
    </div>
    <div class="store-info" data-store-info></div>
  </div>`}function Fa(e,a,t){let o=[...a.stores],n=a.anyStore,s=g=>e.querySelector(g),r=s("#store-panel"),l=s("[data-store-open]"),c=()=>{let g=y=>o.some(C=>I(C)===I(y)),v=it();s("[data-store-groups]").innerHTML=`
      ${v.length?`<p class="store-group-title">${i("bookmark","sm")}\u6211\u7684\u5E97\u92EA</p><div class="pills">${v.map(y=>Na(y,g(y))).join("")}</div>`:""}
      ${st.map(y=>`<p class="store-group-title">${i(y.icon,"sm")}${y.label}</p>
        <div class="pills">${y.stores.map(C=>Na(C.name,g(C.name))).join("")}</div>`).join("")}
      <p class="store-group-title">${i("compare_arrows","sm")}\u9084\u6C92\u6C7A\u5B9A</p>
      <div class="pills"><button type="button" class="chip chip-sm store-chip ${n?"on":""}" data-any aria-pressed="${n}">${at}</button></div>`},f=()=>{let g=s("[data-store-selected]");n?g.innerHTML=`<span class="sel-chip sel-any">${i("compare_arrows","sm")}${at}<button type="button" class="sel-x" data-any aria-label="\u53D6\u6D88\u4E0D\u9650\u5E97\u92EA">${i("close","sm")}</button></span>`:o.length?g.innerHTML=o.map((y,C)=>`
        <span class="sel-chip ${C===0?"is-main":""}">
          <span class="sel-role">${C===0?"\u4E3B\u9078":"\u5099\u9078"}</span>${d(y)}
          ${C>0?`<button type="button" class="sel-x" data-main="${C}" aria-label="\u628A ${d(y)} \u8A2D\u70BA\u4E3B\u9078">${i("arrow_upward","sm")}</button>`:""}
          <button type="button" class="sel-x" data-remove="${C}" aria-label="\u79FB\u9664 ${d(y)}">${i("close","sm")}</button>
        </span>`).join(""):g.innerHTML='<span class="sel-empty">\u5C1A\u672A\u9078\u64C7\uFF0C\u6309\u4E0B\u65B9\u6309\u9215\u6311\u9078\u6216\u8F38\u5165\u5E97\u540D</span>';let v=o[0]?je(o[0],m.state.settings.storeMeta):null;s("[data-store-info]").innerHTML=v?Et(v):""},b=g=>{f(),r.hidden||c(),t({stores:[...o],anyStore:n,picked:g})},h=g=>{let v=String(g??"").trim();return!v||o.some(y=>I(y)===I(v))?!1:o.length>=Rt?(M({title:`\u6700\u591A\u9078 ${Rt} \u5BB6\u5E97`,message:"\u8ACB\u5148\u79FB\u9664\u4E00\u5BB6\u518D\u52A0\u5165\u3002",tone:"muted",duration:2500}),!1):(o.push(v),n=!1,!0)};e.addEventListener("click",g=>{let v=g.target.closest("button");if(!(!v||!e.contains(v))){if(v.matches("[data-store-open]")){r.hidden=!r.hidden,l.setAttribute("aria-expanded",String(!r.hidden)),l.querySelector("span:last-child").textContent=r.hidden?"\u9078\u64C7\u5E97\u92EA":"\u6536\u8D77\u5E97\u92EA\u9078\u55AE",r.hidden||c();return}if(v.matches("[data-pick]")){let y=v.dataset.pick,C=o.findIndex(ne=>I(ne)===I(y));if(C>-1)o.splice(C,1);else if(!h(y))return;b(C>-1?null:y),e.querySelector(`[data-pick="${CSS.escape(y)}"]`)?.focus()}else if(v.matches("[data-any]"))n=!n,n&&(o=[]),b(null),e.querySelector("[data-store-groups] [data-any], [data-store-open]")?.focus();else if(v.matches("[data-remove]"))o.splice(Number(v.dataset.remove),1),b(null),l.focus();else if(v.matches("[data-main]")){let[y]=o.splice(Number(v.dataset.main),1);o.unshift(y),b(y)}else v.matches("[data-store-add]")?E():v.matches("[data-use-store]")&&(s("#fi-store-custom").value=v.dataset.useStore,E())}});let k=s("#fi-store-custom");function E(){let g=k.value.trim();if(!g){k.focus();return}let y=[...it(),...st.flatMap(C=>C.stores.map(ne=>ne.name))].find(C=>I(C)===I(g))??g;h(y)&&(we(y)||m.addCustomStore(y),k.value="",s("[data-store-suggest]").innerHTML="",b(y)),k.focus()}return k.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),E())}),k.addEventListener("input",()=>{let g=[...it(),...st.flatMap(y=>y.stores.map(C=>C.name))],v=xa(k.value,g).slice(0,3);s("[data-store-suggest]").innerHTML=v.length?`
      <p>${i("storefront","sm")}\u662F\u9019\u5BB6\u55CE\uFF1F\u540D\u7A31\u4E00\u81F4\u624D\u6703\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\uFF1A</p>
      <div class="pills">${v.map(y=>`<button type="button" class="chip chip-sm" data-use-store="${d(y)}">\u6539\u7528\u300C${d(y)}\u300D</button>`).join("")}</div>`:""}),f(),{get value(){return{stores:[...o],anyStore:n}}}}function qa(e){return new Promise(a=>{let t=null,o=it().filter(s=>!e.stores.some(r=>I(r)===I(s))).slice(0,6),n=de("dlg-confirm dlg-pick",`
      <div class="confirm-body">
        <h2 id="pick-title" class="confirm-title">\u5728\u54EA\u5BB6\u8CB7\u5230\u300C${d(e.name)}\u300D\uFF1F</h2>
        <p class="confirm-text">\u8A18\u9304\u8CFC\u8CB7\u5E97\u5BB6\uFF0C\u624D\u80FD\u6B63\u78BA\u7D2F\u8A08\u8A72\u5E97\u7684\u514D\u7A05\u9580\u6ABB\u3002</p>
        ${e.stores.length?`<p class="store-group-title">\u6E05\u55AE\u4E0A\u7684\u5E97\u92EA</p><div class="pills">${e.stores.map(s=>`<button type="button" class="chip" data-at="${d(s)}">${d(s)}</button>`).join("")}</div>`:""}
        ${o.length?`<p class="store-group-title">\u5176\u4ED6\u5E97\u92EA</p><div class="pills">${o.map(s=>`<button type="button" class="chip chip-sm" data-at="${d(s)}">${d(s)}</button>`).join("")}</div>`:""}
        <form class="store-custom" data-at-form>
          <label for="pick-custom" class="sr-only">\u8F38\u5165\u5E97\u540D</label>
          <input id="pick-custom" placeholder="\u5176\u4ED6\u5E97\u540D" autocomplete="off">
          <button type="submit" class="btn btn-slate btn-sm">\u78BA\u5B9A</button>
        </form>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-at-cancel>\u53D6\u6D88</button>
          <button type="button" class="btn btn-ghost" data-at="">\u5148\u4E0D\u8A18\u9304\u5E97\u5BB6</button>
        </div>
      </div>`,"pick-title");n.addEventListener("click",s=>{let r=s.target.closest("[data-at], [data-at-cancel]");r&&(t=r.matches("[data-at-cancel]")?null:r.dataset.at,U(n))}),n.querySelector("[data-at-form]").addEventListener("submit",s=>{s.preventDefault();let r=n.querySelector("#pick-custom").value.trim();if(!r)return;let l=we(r);l||m.addCustomStore(r),t=l?.name??r,U(n)}),ce(n,{onClose:()=>a(t)}),n.querySelector(".chip, #pick-custom")?.focus()})}function Ra(e){let a=je(e,m.state.settings.storeMeta),t=de("dlg-confirm",`
    <form class="confirm-body" data-store-meta novalidate>
      <h2 id="sm-title" class="confirm-title">${d(e)}\uFF1A\u512A\u60E0\u5238\u8A2D\u5B9A</h2>
      ${Et(a)}
      <div class="field">
        <label for="sm-url">\u512A\u60E0\u5238\u9023\u7D50</label>
        <input id="sm-url" name="couponUrl" type="url" inputmode="url" value="${d(a.couponUrl??"")}" placeholder="https://\u2026" aria-describedby="sm-url-err">
        <p class="err" id="sm-url-err" hidden>\u8ACB\u8F38\u5165 https:// \u958B\u982D\u7684\u7DB2\u5740</p>
      </div>
      <div class="field">
        <label for="sm-note">\u6211\u7684\u5099\u8A3B</label>
        <input id="sm-note" name="myNote" value="${d(a.myNote??"")}" placeholder="\u4F8B\u5982\uFF1A\u6703\u54E1\u5361\u5728 LINE \u88E1">
      </div>
      <div class="confirm-actions">
        <button type="button" class="btn btn-ghost" data-cancel>\u53D6\u6D88</button>
        <button type="submit" class="btn btn-gold">${i("save","sm")}\u5132\u5B58</button>
      </div>
    </form>`,"sm-title"),o=t.querySelector("form");t.querySelector("[data-cancel]").addEventListener("click",()=>U(t)),o.addEventListener("submit",n=>{n.preventDefault();let s=o.elements.couponUrl.value.trim();if(s&&!/^https?:\/\//i.test(s)){t.querySelector("#sm-url-err").hidden=!1,o.elements.couponUrl.setAttribute("aria-invalid","true"),o.elements.couponUrl.focus();return}m.setStoreMeta(e,{couponUrl:s,myNote:o.elements.myNote.value.trim()}),U(t),M({title:"\u5DF2\u5132\u5B58\u5E97\u92EA\u8A2D\u5B9A",message:d(e),tone:"muted",duration:2500})}),ce(t,{backdropClose:!1})}var he=(e,a,t,o,n="")=>`<label class="pill"><input type="radio" name="${e}" value="${a}" ${String(t)===String(a)?"checked":""} ${n}><span>${o}</span></label>`;function Zs(e,a,t=!1){let{items:o}=m.state,n=[...new Set(o.map(r=>r.buyFor).filter(Boolean))],s=[...new Set([...o.map(r=>r.area).filter(Boolean),...ba])];return`
  <form class="dlg-shell form-shell" novalidate>
    <header class="dlg-head dlg-head-center">
      <p class="eyebrow eyebrow-center">${a?"EDIT ITEM \xB7 \u7DE8\u8F2F":t?"QUICK ADD \xB7 \u81E8\u6642\u52A0\u8CFC":"NEW ITEM \xB7 \u65B0\u589E"}</p>
      <h2 id="form-title" class="dlg-title">${a?"\u7DE8\u8F2F\u5546\u54C1":t?`\u81E8\u6642\u52A0\u8CFC${e.buyFor?`\uFF1A\u5E6B @${d(e.buyFor)}`:""}`:"\u65B0\u589E\u60F3\u8CB7\u7684\u5546\u54C1"}</h2>
      <p class="dlg-sub">${a?"\u4FEE\u6539\u5F8C\u6309\u300C\u5132\u5B58\u8B8A\u66F4\u300D\u3002":t?"\u8A18\u4E0B\u525B\u525B\u81E8\u6642\u52A0\u8CB7\u7684\u5546\u54C1\uFF0C\u91D1\u984D\u6703\u81EA\u52D5\u52A0\u9032\u4EE3\u8CFC\u5206\u5E33\u3002":"\u5148\u8A18\u54C1\u540D\u548C\u50F9\u683C\u5C31\u80FD\u52A0\u5165\uFF0C\u5176\u4ED6\u8CC7\u6599\u4E4B\u5F8C\u518D\u88DC\u3002"}</p>
      <div class="ornament" aria-hidden="true"></div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8868\u55AE">${i("close")}</button>
    </header>

    <div class="dlg-scroll form-body">
      <!-- \u5FEB\u901F\u65B0\u589E\uFF1A\u53EA\u9700\u54C1\u540D\u3001\u50F9\u683C\u3001\u5E97\u5BB6 -->
      <fieldset class="fs fs-quick">
        <legend class="sr-only">\u5FEB\u901F\u65B0\u589E</legend>
        <div class="field">
          <label for="fi-name">\u5546\u54C1\u540D\u7A31 <span class="req" aria-hidden="true">*</span></label>
          <input id="fi-name" name="name" required value="${d(e.name)}" autocomplete="off" aria-describedby="err-name" autofocus enterkeyhint="next">
          <p class="err" id="err-name" hidden>\u8ACB\u586B\u5BEB\u5546\u54C1\u540D\u7A31</p>
        </div>
        <div class="quick-row">
          <div class="field">
            <label for="fi-price">\u65E5\u5E63\u55AE\u50F9 <span class="req" aria-hidden="true">*</span> <small>\uFF08\u542B\u7A05\uFF09</small></label>
            <div class="input-affix"><span aria-hidden="true">\xA5</span>
              <input id="fi-price" name="price" type="number" inputmode="numeric" min="0" step="1" value="${e.price||""}" required aria-describedby="err-price" enterkeyhint="next">
            </div>
            <p class="err" id="err-price" hidden>\u8ACB\u586B\u5BEB 0 \u4EE5\u4E0A\u7684\u50F9\u683C</p>
          </div>
          <div class="field">
            <label for="fi-buyfor">\u5E6B\u8AB0\u8CB7 <small>\uFF08\u81EA\u7528\u7559\u7A7A\uFF09</small></label>
            <div class="input-affix"><span aria-hidden="true">@</span>
              <input id="fi-buyfor" name="buyFor" list="dl-friends" value="${d(e.buyFor)}" autocomplete="off" placeholder="\u670B\u53CB\u540D\u5B57" enterkeyhint="done">
            </div>
            <datalist id="dl-friends">${n.map(r=>`<option value="${d(r)}">`).join("")}</datalist>
          </div>
        </div>
        ${ja(e.stores,e.anyStore)}
        <p class="quick-calc" aria-live="polite" data-quick></p>
        <label class="check-row check-quick">
          <input type="checkbox" name="purchased" ${e.purchased?"checked":""}>
          <span><strong>\u5DF2\u7D93\u8CB7\u5230\u4E86</strong><small>${t?"\u81E8\u6642\u52A0\u8CFC\u7684\u5546\u54C1\u6703\u76F4\u63A5\u5217\u5165\u5DF2\u5165\u624B\u8207\u4EE3\u8CFC\u5206\u5E33":"\u52FE\u9078\u5F8C\u6703\u5217\u5165\u5DF2\u5165\u624B\uFF1B\u5E97\u5BB6\u8A18\u70BA\u4E3B\u9078\u5E97\u92EA"}</small></span>
        </label>
      </fieldset>

      <details class="more" ${a?"open":""}>
        <summary class="more-summary">
          <span class="more-title">${i("tune","sm")}\u66F4\u591A\u8A2D\u5B9A</span>
          <span class="more-desc">\u65E5\u6587\u540D\u7A31\u3001\u6578\u91CF\u3001\u5206\u985E\u3001\u7A05\u7387\u8207\u6298\u6263\u3001\u5730\u5340\u3001\u884C\u674E\u3001\u7167\u7247\u3001\u5099\u8A3B</span>
          <span class="more-chevron" aria-hidden="true">${i("add")}</span>
        </summary>
        <div class="more-body">
          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u58F9</span>\u57FA\u672C\u8CC7\u8A0A</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-ja">\u65E5\u6587\u540D\u7A31 <small>\uFF08\u51FA\u793A\u7D66\u5E97\u54E1\u770B\uFF09</small></label>
                <input id="fi-ja" name="nameJa" lang="ja" value="${d(e.nameJa)}" autocomplete="off">
              </div>
              <div class="field">
                <label for="fi-brand">\u54C1\u724C</label>
                <input id="fi-brand" name="brand" value="${d(e.brand)}" autocomplete="off">
              </div>
            </div>
            <div class="field">
              <span class="label" id="lb-cat">\u5206\u985E</span>
              <div class="pills" role="radiogroup" aria-labelledby="lb-cat">
                ${Ne.map(r=>he("category",r.id,e.category,`${i(r.icon,"sm")}${r.label}`)).join("")}
              </div>
            </div>
            <div class="grid-2">
              <div class="field">
                <span class="label" id="lb-prio">\u6E34\u671B\u7B49\u7D1A</span>
                <div class="pills" role="radiogroup" aria-labelledby="lb-prio">
                  ${$t.map(r=>he("priority",r.value,e.priority,`<span aria-hidden="true">${r.stars}</span> ${r.label}`)).join("")}
                </div>
              </div>
              <div class="field">
                <label for="fi-qty">\u6578\u91CF</label>
                <div class="stepper">
                  <button type="button" class="icon-btn" data-step="-1" aria-label="\u6E1B\u5C11\u6578\u91CF">${i("remove")}</button>
                  <input id="fi-qty" name="qty" type="number" inputmode="numeric" min="1" step="1" value="${e.qty}">
                  <button type="button" class="icon-btn" data-step="1" aria-label="\u589E\u52A0\u6578\u91CF">${i("add")}</button>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u8CB3</span>\u50F9\u683C\u8207\u514D\u7A05\u8A66\u7B97</legend>
            <div class="price-layout">
              <div>
                <div class="grid-2 tight">
                  <div class="field">
                    <span class="label" id="lb-incl">\u6A19\u50F9</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-incl">
                      ${he("priceIncludesTax","true",e.priceIncludesTax,"\u542B\u7A05")}
                      ${he("priceIncludesTax","false",e.priceIncludesTax,"\u672A\u7A05")}
                    </div>
                  </div>
                  <div class="field">
                    <span class="label" id="lb-rate">\u6D88\u8CBB\u7A05\u7387</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-rate">
                      ${he("taxRate",10,e.taxRate,"10%")}
                      ${he("taxRate",8,e.taxRate,"8% \u98DF\u54C1")}
                      ${he("taxRate",1,e.taxRate,"1% \u98DF\u54C1")}
                    </div>
                    <p class="hint">\u300C1% \u98DF\u54C1\u300D\uFF1A\u65E5\u672C\u9810\u8A08 2027/4/1\uFF5E2029/3/31 \u5C07\u98DF\u54C1\u6D88\u8CBB\u7A05\u964D\u70BA 1%\uFF08\u6CD5\u6848\u5BE9\u8B70\u4E2D\uFF0C\u9152\u985E\u4ECD\u662F 10%\uFF09\u3002\u65C5\u884C\u5728\u9019\u6BB5\u671F\u9593\u3001\u6CD5\u6848\u901A\u904E\u5F8C\u518D\u9078\u3002</p>
                  </div>
                </div>
                <label class="check-row">
                  <input type="checkbox" name="taxFree" ${e.taxFree?"checked":""}>
                  <span><strong>\u8FA6\u7406\u514D\u7A05</strong><small>\u540C\u4E00\u5929\u540C\u4E00\u5E97\u5BB6\u672A\u7A05\u5408\u8A08 ${u(q)} \u4EE5\u4E0A\u53EF\u9000\u6D88\u8CBB\u7A05</small></span>
                </label>
                <div class="grid-2 tight">
                  <div class="field">
                    <label for="fi-disc">\u6298\u6263\uFF0F\u512A\u60E0\u5238 %</label>
                    <input id="fi-disc" name="discountPct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${e.discountPct||""}" placeholder="0">
                  </div>
                  <div class="field">
                    <label for="fi-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
                    <input id="fi-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${e.refundFeePct??""}" placeholder="\u9810\u8A2D ${m.state.settings.refundFeePct}" aria-describedby="hint-fee">
                    <p class="hint" id="hint-fee">\u7559\u7A7A\uFF1A\u6709\u5167\u5EFA\u8CBB\u7387\u7684\u5E97\u5BB6\uFF08\u4F8B\u5982\u5510\u5409\u8A36\u5FB7 0%\uFF09\u7528\u5E97\u5BB6\u8CBB\u7387\uFF0C\u5176\u4ED6\u7528\u8A2D\u5B9A\u4E2D\u7684\u9810\u8A2D\u503C</p>
                  </div>
                </div>
              </div>
              <aside class="calc-panel" data-calc></aside>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u53C3</span>\u63A1\u8CFC\u5730\u9EDE</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-area">\u5730\u5340</label>
                <input id="fi-area" name="area" list="dl-area" value="${d(e.area)}" autocomplete="off" placeholder="\u4F8B\u5982\uFF1A\u9280\u5EA7" aria-describedby="hint-area">
                <datalist id="dl-area">${s.map(r=>`<option value="${d(r)}">`).join("")}</datalist>
                <p class="hint" id="hint-area">\u9078\u64C7\u5DF2\u8A18\u9304\u904E\u7684\u5E97\u5BB6\u6642\u6703\u81EA\u52D5\u5E36\u5165</p>
              </div>
              <div class="field">
                <label for="fi-date">\u9810\u8A08\u8CFC\u8CB7\u65E5</label>
                <input id="fi-date" name="planDate" type="date" value="${d(e.planDate)}">
              </div>
              <div class="field span2">
                <label for="fi-jan">JAN \u689D\u78BC <small>\uFF088 \u6216 13 \u78BC\uFF0C\u5E97\u54E1\u6383\u63CF\u6700\u5FEB\uFF09</small></label>
                <input id="fi-jan" name="jan" inputmode="numeric" pattern="[0-9]*" maxlength="13" value="${d(e.jan)}" aria-describedby="err-jan">
                <p class="err" id="err-jan" hidden>JAN \u689D\u78BC\u9700\u70BA 8 \u6216 13 \u4F4D\u6578\u5B57</p>
              </div>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u8086</span>\u884C\u674E\u8207\u5305\u88DD</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-weight">\u55AE\u4EF6\u91CD\u91CF\uFF08kg\uFF09</label>
                <input id="fi-weight" name="weightKg" type="number" inputmode="decimal" min="0" step="0.01" value="${e.weightKg||""}" placeholder="0.5">
              </div>
              <div class="field">
                <span class="label" id="lb-lug">\u653E\u5728\u54EA\u88E1</span>
                <div class="seg-pills" role="radiogroup" aria-labelledby="lb-lug">
                  ${he("luggage","checked",e.luggage,"\u8A17\u904B")}
                  ${he("luggage","carry",e.luggage,"\u96A8\u8EAB")}
                  ${he("luggage","none",e.luggage,"\u4E0D\u653E\u884C\u674E")}
                </div>
              </div>
            </div>
            <p class="hint" data-lug-hint>\u92F0\u96FB\u6C60\u6703\u81EA\u52D5\u5217\u70BA\u300C\u5FC5\u9808\u624B\u63D0\u300D\uFF1B\u5200\u526A\u3001\u52FE\u4E86\u300C\u6DB2\u9AD4\u300D\u7684\u5546\u54C1\u6703\u5217\u70BA\u300C\u5FC5\u9808\u8A17\u904B\u300D\uFF08100ml \u4EE5\u4E0B\u60F3\u653E\u624B\u63D0\u7684\u6DB2\u9AD4\u53EF\u4EE5\u4E0D\u52FE\uFF09\u3002</p>
            <div class="pills" role="group" aria-label="\u5305\u88DD\u63D0\u9192">
              <label class="pill"><input type="checkbox" name="fragile" ${e.fragile?"checked":""}><span>${i("wine_bar","sm")}\u6613\u788E</span></label>
              <label class="pill"><input type="checkbox" name="liquid" ${e.liquid?"checked":""}><span>${i("water_drop","sm")}\u6DB2\u9AD4\uFF0F\u4E73\u971C</span></label>
              <label class="pill"><input type="checkbox" name="battery" ${e.battery?"checked":""}><span>${i("battery_alert","sm")}\u542B\u92F0\u96FB\u6C60</span></label>
              <label class="pill"><input type="checkbox" name="blade" ${e.blade?"checked":""}><span>${i("content_cut","sm")}\u5200\u526A\u985E</span></label>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u4F0D</span>\u7167\u7247\u8207\u5099\u8A3B</legend>
            <div class="photo-row">
              <div class="photo-preview" data-photo>${e.image?`<img src="${d(e.image)}" alt="\u5546\u54C1\u7167\u7247\u9810\u89BD">`:i("add_photo_alternate")}</div>
              <div class="photo-actions">
                <label class="btn btn-ghost btn-sm file-btn">${i("photo_camera","sm")}\u9078\u64C7\u7167\u7247
                  <input type="file" accept="image/*" data-file class="sr-only">
                </label>
                <button type="button" class="btn btn-ghost btn-sm" data-remove-photo ${e.image?"":"hidden"}>${i("delete","sm")}\u79FB\u9664</button>
                <p class="hint">\u7167\u7247\u6703\u58D3\u7E2E\u5F8C\u5B58\u5728\u672C\u6A5F\u700F\u89BD\u5668</p>
              </div>
            </div>
            <div class="field">
              <label for="fi-note">\u5099\u8A3B</label>
              <textarea id="fi-note" name="note" rows="3" placeholder="\u4F8B\u5982\uFF1A\u6AC3\u4F4D\u6A13\u5C64\u3001\u8981\u8CB7\u7684\u8272\u865F\u3001\u9001\u8AB0">${d(e.note)}</textarea>
            </div>
          </fieldset>
        </div>
      </details>
    </div>

    <footer class="dlg-foot">
      <p class="foot-summary" data-foot-summary></p>
      <button type="button" class="btn btn-ghost" data-cancel>\u53D6\u6D88</button>
      <button type="submit" class="btn btn-gold">${i(a?"save":"add_circle")}${a?"\u5132\u5B58\u8B8A\u66F4":"\u52A0\u5165\u6E05\u55AE"}</button>
    </footer>
  </form>`}function _a(e,a,t){let o=new FormData(e),{stores:n,anyStore:s}=t?.value??{stores:[],anyStore:!1};return{stores:n,anyStore:s,buyFor:o.get("buyFor"),blade:o.has("blade"),name:o.get("name"),nameJa:o.get("nameJa"),brand:o.get("brand"),category:o.get("category"),priority:o.get("priority"),qty:o.get("qty"),price:o.get("price"),priceIncludesTax:o.get("priceIncludesTax")==="true",taxRate:o.get("taxRate"),taxFree:o.has("taxFree"),discountPct:o.get("discountPct"),refundFeePct:o.get("refundFeePct"),area:o.get("area"),planDate:o.get("planDate"),jan:o.get("jan"),weightKg:o.get("weightKg"),luggage:o.get("luggage"),fragile:o.has("fragile"),liquid:o.has("liquid"),battery:o.has("battery"),note:o.get("note"),purchased:o.has("purchased"),image:a}}function en(e,a){let{settings:t,items:o}=m.state,n=o.filter(b=>b.id!==a),s=xe({...e,id:a||"__draft__"}),{byItem:r}=Fe([...n,s],t),l=r.get(s.id),c=l.group,f;return s.taxFree?s.store?c.eligible?f=`<p class="calc-status ok">${i("check_circle","sm")}${d(s.store)} \u5408\u8A08\u5DF2\u9054 ${u(q)} \u9580\u6ABB</p>`:f=`<p class="calc-status warn">${i("info","sm")}${d(s.store)} \u9084\u5DEE ${u(c.shortfall)}\uFF08\u672A\u7A05\uFF09</p>`:f='<p class="calc-status">\u9078\u64C7\u5E97\u92EA\u5F8C\u53EF\u5408\u4F75\u8A08\u7B97\u9580\u6ABB</p>':f='<p class="calc-status">\u4E0D\u8FA6\u514D\u7A05</p>',{html:`
    <h3 class="calc-title">${i("calculate","sm")}\u514D\u7A05\u7CBE\u7B97\u660E\u7D30</h3>
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u5C0F\u8A08</dt><dd>${u(l.lineExcl)}</dd></div>
      ${l.discount?`<div class="minus"><dt>\u6298\u6263</dt><dd>\u2212 ${u(l.discount)}</dd></div>`:""}
      <div><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${u(l.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05</dt><dd>${l.refundable?`\u2212 ${u(l.refund)}`:"\u2014"}</dd></div>
    </dl>
    <div class="calc-total">
      <span class="ledger-k">\u5BE6\u969B\u6210\u672C</span>
      <span class="calc-yen">${u(l.net)}</span>
      <span class="calc-twd">\u2248 ${_(l.net,t.rate)}</span>
    </div>
    ${f}`,quick:s.price?`${i("payments","sm")}<span>\u5E97\u982D\u652F\u4ED8 <strong>${u(l.pay)}</strong> \u2248 ${_(l.pay,t.rate)}</span>${l.refundable?`<span class="ok">${i("check_circle","sm")}\u53EF\u9000\u7A05 ${u(l.refund)}\uFF0C\u5BE6\u969B ${u(l.net)}</span>`:s.taxFree&&s.store?`<span class="warn">${i("info","sm")}${d(s.store)} \u9084\u5DEE ${u(c.shortfall)} \u9054\u514D\u7A05\u9580\u6ABB</span>`:""}${c.undatedMerge&&s.taxFree&&c.items.length>1?`<span class="note">${i("event","sm")}\u5DF2\u8207\u540C\u5E97 ${c.items.length-1} \u4EF6\u5408\u4F75\u8A08\u7B97\uFF1B\u5206\u4E0D\u540C\u5929\u8CB7\u8ACB\u5728\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u586B\u9810\u8A08\u65E5\u671F</span>`:""}`:"",foot:`${i("auto_awesome","sm")}\u52A0\u5165\u5F8C\u7E3D\u984D ${u(n.reduce((b,h)=>b+r.get(h.id).pay,0)+l.pay)} \xB7 \u884C\u674E +${(l.weight||0).toFixed(2)} kg`}}function ue(e=null,a={}){let t=e?m.getItem(e):null,o=t??xe({category:"other",priority:2,luggage:"checked",taxFree:!0,...a}),n=o.image,s=de("dlg-form",Zs(o,!!t,a.mode==="extra"),"form-title"),r=s.querySelector("form"),l=!1,c=!!t?.discountPct,f=null,b=()=>{let g=en(_a(r,n,f),t?.id);s.querySelector("[data-calc]").innerHTML=g.html,s.querySelector("[data-foot-summary]").innerHTML=g.foot,s.querySelector("[data-quick]").innerHTML=g.quick;let v=r.elements.priceIncludesTax.value==="true";s.querySelector('label[for="fi-price"] small').textContent=v?"\uFF08\u542B\u7A05\uFF09":"\uFF08\u672A\u7A05\uFF09"};b(),f=Fa(r.querySelector(".store-field"),{stores:o.stores,anyStore:o.anyStore},({stores:g,picked:v})=>{l=!0;let y=g[0];if(y&&v===y){let C=je(y,m.state.settings.storeMeta),ne=[];(C.noTaxFree||C.dutyFree)&&r.elements.taxFree.checked&&(r.elements.taxFree.checked=!1,ne.push(C.dutyFree?"\u6A5F\u5834\u514D\u7A05\u5E97\u552E\u50F9\u5DF2\u4E0D\u542B\u7A05\uFF0C\u5DF2\u53D6\u6D88\u300C\u8FA6\u7406\u514D\u7A05\u300D":"\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05\uFF0C\u5DF2\u53D6\u6D88\u300C\u8FA6\u7406\u514D\u7A05\u300D"));let oe=Ta(C,r.elements.category.value);if(oe&&!c&&(r.elements.discountPct.value=oe.pct,ne.push(`\u5DF2\u4F9D\u5206\u985E\u5957\u7528 ${C.name} \u512A\u60E0 ${oe.pct}%\uFF08${oe.label}\uFF0C\u9700\u672A\u7A05\u6EFF ${u(oe.min)}\uFF09\uFF0C\u53EF\u5728\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u4FEE\u6539`)),!r.elements.area.value.trim()){let ge=m.state.items.find(Re=>Re.area&&Re.stores.some(_e=>I(_e)===I(y)));ge&&(r.elements.area.value=ge.area)}ne.length&&M({title:"\u5DF2\u5E36\u5165\u5E97\u92EA\u8A2D\u5B9A",message:ne.map(d).join("\uFF1B"),tone:"muted",duration:5e3})}b()}),b();let h={name:g=>g.trim().length>0,price:g=>g!==""&&Number(g)>=0,jan:g=>g===""||/^\d{8}$|^\d{13}$/.test(g)},k=(g,v)=>{let y=s.querySelector(`#err-${g.name}`);y&&(y.hidden=!v,g.setAttribute("aria-invalid",v?"true":"false"))};r.addEventListener("focusout",g=>{let v=h[g.target.name];v&&g.target.dataset.touched&&k(g.target,!v(g.target.value))}),r.addEventListener("input",g=>{l=!0,g.target.dataset.touched="1";let v=h[g.target.name];v&&g.target.getAttribute("aria-invalid")==="true"&&v(g.target.value)&&k(g.target,!1),b()}),r.addEventListener("change",g=>{g.target.name==="discountPct"&&(c=!0),["battery","liquid","blade"].includes(g.target.name)&&g.target.checked&&(r.elements.luggage.value=g.target.name==="battery"?"carry":"checked"),b()}),r.elements.discountPct.addEventListener("input",()=>{c=!0}),r.addEventListener("click",g=>{let v=g.target.closest("[data-step]");if(v){let y=r.elements.qty;y.value=Math.max(1,(Number(y.value)||1)+Number(v.dataset.step)),l=!0,b()}g.target.closest("[data-remove-photo]")&&(n="",l=!0,s.querySelector("[data-photo]").innerHTML=i("add_photo_alternate"),g.target.closest("[data-remove-photo]").hidden=!0),g.target.closest(".dlg-close, [data-cancel]")&&E()}),s.querySelector("[data-file]").addEventListener("change",async g=>{let v=g.target.files?.[0];if(v)try{n=await Ia(v),l=!0,s.querySelector("[data-photo]").innerHTML=`<img src="${n}" alt="\u5546\u54C1\u7167\u7247\u9810\u89BD">`,s.querySelector("[data-remove-photo]").hidden=!1}catch(y){M({title:"\u7167\u7247\u7121\u6CD5\u4F7F\u7528",message:d(y.message),tone:"error"})}});async function E(){l&&!await qe({title:"\u653E\u68C4\u5C1A\u672A\u5132\u5B58\u7684\u5167\u5BB9\uFF1F",body:"\u9019\u500B\u8868\u55AE\u6709\u4FEE\u6539\u9084\u6C92\u5132\u5B58\uFF0C\u96E2\u958B\u5F8C\u4E0D\u6703\u4FDD\u7559\u3002",confirmText:"\u653E\u68C4\u4FEE\u6539",danger:!0})||U(s)}s.addEventListener("cancel",g=>{g.preventDefault(),g.stopImmediatePropagation(),E()},{capture:!0}),r.addEventListener("submit",g=>{g.preventDefault();let v=null;for(let[C,ne]of Object.entries(h)){let oe=r.elements[C],ge=ne(oe.value);k(oe,!ge),!ge&&!v&&(v=oe)}if(v){let C=v.closest("details");C&&(C.open=!0),v.focus();return}let y=_a(r,n,f);if(y.jan&&!rt(y.jan)&&M({title:"JAN \u6AA2\u67E5\u78BC\u4E0D\u7B26",message:"\u5DF2\u5132\u5B58\uFF0C\u4F46\u689D\u78BC\u53EF\u80FD\u8F38\u5165\u932F\u8AA4\uFF0C\u51FA\u793A\u5361\u4E0D\u6703\u986F\u793A\u689D\u78BC\u5716\u3002",tone:"muted"}),t){let C=t.purchased;if(!m.updateItem(t.id,{...y,purchasedAt:y.purchased?C?t.purchasedAt:Date.now():null,purchasedStore:y.purchased?C&&t.purchasedStore?t.purchasedStore:y.stores[0]??"":""}))return;M({title:"\u5DF2\u5132\u5B58\u8B8A\u66F4",message:d(y.name),tone:"muted",duration:3e3})}else{let C=m.addItem({...y,purchasedAt:y.purchased?Date.now():null,purchasedStore:y.purchased?y.stores[0]??"":""});M({title:"\u5DF2\u52A0\u5165\u6E05\u55AE",message:`\u300C${d(C.name)}\u300D`})}l=!1,U(s)}),ce(s,{backdropClose:!1})}var tn="shopping-relics:theme",$e=[{id:"light",label:"\u6DFA\u8272",icon:"light_mode"},{id:"dark",label:"\u6DF1\u8272",icon:"dark_mode"},{id:"auto",label:"\u8DDF\u96A8\u7CFB\u7D71",icon:"brightness_auto"}];function Ke(){let e=document.documentElement.dataset.theme;return $e.some(a=>a.id===e)?e:"light"}function an(e){return e==="dark"||e==="auto"&&matchMedia("(prefers-color-scheme: dark)").matches}function _t(e){let a=$e.find(n=>n.id===e),t=$e[($e.indexOf(a)+1)%$e.length],o=document.getElementById("btn-theme");o&&(o.querySelector(".ms").textContent=a.icon,o.setAttribute("aria-label",`\u5916\u89C0\uFF1A${a.label}\uFF0C\u6309\u4E0B\u5207\u63DB\u70BA${t.label}`),o.title=`\u5916\u89C0\uFF1A${a.label}\uFF08\u6309\u4E0B\u5207\u63DB\u70BA${t.label}\uFF09`),Dt(e)}function Dt(e=Ke()){let a=document.body?.dataset.route==="home";document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a?"#010104":an(e)?"#0b1422":"#f4f7f9")}function Ot(e){document.documentElement.dataset.theme=e;try{localStorage.setItem(tn,e)}catch{}_t(e)}function Da(){let e=$e.findIndex(t=>t.id===Ke()),a=$e[(e+1)%$e.length];return Ot(a.id),a}function Oa(){_t(Ke()),matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>_t(Ke()))}function sn(){let e=m.state.settings;return`
  <form class="dlg-shell settings-shell" novalidate>
    <header class="dlg-head">
      <p class="eyebrow">${i("tune","sm")}SETTINGS \xB7 \u8A2D\u5B9A</p>
      <h2 id="settings-title" class="dlg-title">\u65C5\u7A0B\u8A2D\u5B9A\u8207\u8CC7\u6599\u5099\u4EFD</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8A2D\u5B9A">${i("close")}</button>
    </header>
    <div class="dlg-scroll">
      <fieldset class="fs">
        <legend class="fs-title">${i("light_mode","sm")}\u5916\u89C0</legend>
        <div class="seg-pills" role="radiogroup" aria-label="\u5916\u89C0\u4E3B\u984C">
          ${$e.map(a=>`<label class="pill"><input type="radio" name="theme" value="${a.id}" ${Ke()===a.id?"checked":""}><span>${i(a.icon,"sm")}${a.label}</span></label>`).join("")}
        </div>
        <p class="hint">\u9078\u64C7\u5F8C\u7ACB\u5373\u5957\u7528\uFF0C\u4E26\u8A18\u5728\u9019\u53F0\u88DD\u7F6E\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${i("flight_takeoff","sm")}\u65C5\u7A0B\u8207\u9810\u7B97</legend>
        <div class="grid-2">
          <div class="field span2">
            <label for="st-trip">\u65C5\u7A0B\u540D\u7A31</label>
            <input id="st-trip" name="tripName" value="${d(e.tripName)}" maxlength="40">
          </div>
          <div class="field">
            <label for="st-budget">\u8CFC\u7269\u9810\u7B97\uFF08\u65E5\u5713\uFF09</label>
            <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="st-budget" name="budget" type="number" inputmode="numeric" min="0" step="1000" value="${e.budget}"></div>
          </div>
          <div class="field">
            <label for="st-fee">\u9810\u8A2D\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
            <input id="st-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${e.refundFeePct}" aria-describedby="hint-st-fee">
            <p class="hint" id="hint-st-fee">\u65B0\u5236\u7531\u5E97\u5BB6\u6C7A\u5B9A\uFF0C\u9996\u65E5\u56DE\u5831\u591A\u5728 0%\uFF5E2.3%\uFF0C\u4E5F\u6709\u6BCF\u7B46\u6536\u56FA\u5B9A\u91D1\u984D\u7684\u5E97\uFF1B\u5510\u5409\u8A36\u5FB7\u3001Bic Camera \u70BA 0\uFF08\u5DF2\u5167\u5EFA\uFF09\u3002\u672C\u7DB2\u7AD9\u4EE5\u542B\u7A05\u50F9\u4F30\u7B97</p>
          </div>
          <div class="field">
            <label for="st-rebate">\u5237\u5361\u6DE8\u56DE\u994B %</label>
            <input id="st-rebate" name="cardRebatePct" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${e.cardRebatePct}" aria-describedby="hint-st-rebate">
            <p class="hint" id="hint-st-rebate">\u56DE\u994B\u6263\u6389\u6D77\u5916\u624B\u7E8C\u8CBB\u5F8C\u7684\u6578\u5B57\uFF0C\u4E0D\u7528\u53EF\u586B 0</p>
          </div>
        </div>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${i("currency_exchange","sm")}\u532F\u7387</legend>
        <div class="rate-row">
          <div class="field grow">
            <label for="st-rate">1 \u65E5\u5713 = ? \u53F0\u5E63</label>
            <input id="st-rate" name="rate" type="number" inputmode="decimal" min="0.01" max="5" step="0.0001" value="${e.rate}">
          </div>
          <button type="button" class="btn btn-ghost" data-sync>${i("sync")}\u6293\u6700\u65B0\u532F\u7387</button>
        </div>
        <p class="hint">\u76EE\u524D\u4F86\u6E90\uFF1A${e.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":e.rateSource==="api"?d(e.rateProvider||"\u516C\u958B\u532F\u7387 API"):"\u9810\u8A2D\u503C"}${e.rateUpdatedAt?` \xB7 ${Ue(e.rateUpdatedAt)}`:""}\u3002\u4FEE\u6539\u6578\u5B57\u5F8C\u5132\u5B58\uFF0C\u5C31\u6703\u6539\u7528\u624B\u52D5\u532F\u7387\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${i("luggage","sm")}\u884C\u674E</legend>
        <div class="grid-2">
          <div class="field"><label for="st-cl">\u8A17\u904B\u9650\u91CD\uFF08kg\uFF09</label><input id="st-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${e.checkedLimit}"></div>
          <div class="field"><label for="st-cb">\u8A17\u904B\u57FA\u672C\u91CD\u91CF\uFF08kg\uFF09</label><input id="st-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${e.checkedBase}" aria-describedby="hint-base"></div>
          <div class="field"><label for="st-pl">\u96A8\u8EAB\u9650\u91CD\uFF08kg\uFF09</label><input id="st-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${e.carryLimit}"></div>
          <div class="field"><label for="st-pb">\u96A8\u8EAB\u57FA\u672C\u91CD\u91CF\uFF08kg\uFF09</label><input id="st-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${e.carryBase}"></div>
        </div>
        <p class="hint" id="hint-base">\u57FA\u672C\u91CD\u91CF\uFF1D\u884C\u674E\u7BB1\u672C\u8EAB\u52A0\u4E0A\u8863\u7269\u7B49\u975E\u8CFC\u7269\u54C1\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${i("database","sm")}\u8CC7\u6599\u5099\u4EFD</legend>
        <p class="hint">\u6E05\u55AE\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u7684\u700F\u89BD\u5668\u3002\u63DB\u624B\u6A5F\u6216\u6E05\u9664\u700F\u89BD\u8CC7\u6599\u524D\uFF0C\u8A18\u5F97\u5148\u532F\u51FA\u5099\u4EFD\u3002</p>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-export>${i("download")}\u532F\u51FA\u5099\u4EFD\uFF08JSON\uFF09</button>
          <label class="btn btn-ghost file-btn">${i("upload")}\u532F\u5165\u5099\u4EFD<input type="file" accept="application/json,.json" class="sr-only" data-import></label>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-demo>${i("auto_awesome")}\u8F09\u5165\u793A\u7BC4\u8CC7\u6599</button>
          <button type="button" class="btn btn-danger-ghost" data-reset>${i("delete_forever")}\u6E05\u9664\u5168\u90E8\u8CC7\u6599</button>
        </div>
      </fieldset>
    </div>
    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-cancel>\u53D6\u6D88</button>
      <button type="submit" class="btn btn-gold">${i("save")}\u5132\u5B58\u8A2D\u5B9A</button>
    </footer>
  </form>`}function Ja(){let e=de("dlg-settings",sn(),"settings-title"),a=e.querySelector("form"),t=m.state.settings.rate;e.addEventListener("click",async o=>{let n=o.target;if(n.closest(".dlg-close, [data-cancel]")){U(e);return}if(n.closest("[data-sync]")){let s=n.closest("[data-sync]");s.disabled=!0,s.setAttribute("aria-busy","true");let r=await Be({force:!0});s.disabled=!1,s.removeAttribute("aria-busy"),r.ok?(a.elements.rate.value=r.rate,M({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${ee(r.rate,4)} TWD`,tone:"muted",duration:3e3})):M({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u3002",tone:"error"})}n.closest("[data-export]")&&St(`shopping-relics-backup-${new Date().toISOString().slice(0,10)}.json`,m.exportJSON(),"application/json"),n.closest("[data-demo]")&&(m.loadDemo(),M({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u5728\u6E05\u55AE\u9801\u6E05\u9664\u3002"})),n.closest("[data-reset]")&&await qe({title:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599\uFF1F",body:`\u6703\u522A\u9664\u6E05\u55AE\u4E2D\u7684 <strong>${m.state.items.length} \u4EF6\u5546\u54C1</strong>\u3001\u6253\u5305\u6E05\u55AE\u8207\u6240\u6709\u8A2D\u5B9A\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u5EFA\u8B70\u5148\u532F\u51FA\u5099\u4EFD\u3002`,confirmText:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599",danger:!0})&&(m.resetAll(),U(e),M({title:"\u8CC7\u6599\u5DF2\u5168\u90E8\u6E05\u9664",tone:"muted"}))}),a.addEventListener("change",o=>{o.target.name==="theme"&&Ot(o.target.value)}),e.querySelector("[data-import]").addEventListener("change",async o=>{let n=o.target.files?.[0];if(!n)return;if(!await qe({title:"\u7528\u5099\u4EFD\u6A94\u53D6\u4EE3\u76EE\u524D\u8CC7\u6599\uFF1F",body:`\u76EE\u524D\u7684 ${m.state.items.length} \u4EF6\u5546\u54C1\u6703\u88AB\u300C${d(n.name)}\u300D\u7684\u5167\u5BB9\u53D6\u4EE3\u3002`,confirmText:"\u532F\u5165\u4E26\u53D6\u4EE3",danger:!0})){o.target.value="";return}try{m.importJSON(await n.text()),U(e),M({title:"\u5099\u4EFD\u5DF2\u532F\u5165",message:`\u5171 ${m.state.items.length} \u4EF6\u5546\u54C1`})}catch(r){M({title:"\u532F\u5165\u5931\u6557",message:`\u9019\u500B\u6A94\u6848\u4E0D\u662F\u6709\u6548\u7684\u5099\u4EFD\uFF1A${d(r.message)}`,tone:"error",duration:8e3})}}),a.addEventListener("submit",o=>{o.preventDefault();let n=a.elements,s=(c,f)=>c.value===""||Number.isNaN(Number(c.value))?f:Math.max(0,Number(c.value)),r=m.state.settings;m.updateSettings({tripName:n.tripName.value.trim()||r.tripName,budget:s(n.budget,r.budget),refundFeePct:s(n.refundFeePct,0),cardRebatePct:s(n.cardRebatePct,0),checkedLimit:s(n.checkedLimit,r.checkedLimit),checkedBase:s(n.checkedBase,r.checkedBase),carryLimit:s(n.carryLimit,r.carryLimit),carryBase:s(n.carryBase,r.carryBase)});let l=Number(n.rate.value);l>0&&Math.abs(l-m.state.settings.rate)>1e-9&&l!==t&&wt(l),U(e),M({title:"\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}),ce(e,{backdropClose:!1})}function Ba(){let e=location.protocol==="https:"||["localhost","127.0.0.1"].includes(location.hostname);if("serviceWorker"in navigator&&e){let a=!navigator.serviceWorker.controller;navigator.serviceWorker.register("./sw.js").then(t=>{if(!a)return;let o=t.installing??t.waiting;o?.addEventListener("statechange",()=>{o.state==="activated"&&M({title:"\u5DF2\u53EF\u96E2\u7DDA\u4F7F\u7528",message:"\u4E4B\u5F8C\u5728\u65E5\u672C\u6C92\u6709\u7DB2\u8DEF\u4E5F\u80FD\u6253\u958B\u6E05\u55AE\u3002",tone:"muted",duration:4e3})})}).catch(t=>console.info("\u96E2\u7DDA\u5FEB\u53D6\u672A\u555F\u7528\uFF1A",t.message))}window.addEventListener("offline",()=>{M({title:"\u76EE\u524D\u96E2\u7DDA",message:"\u6E05\u55AE\u7167\u5E38\u53EF\u7528\uFF0C\u532F\u7387\u66AB\u7528\u4E0A\u6B21\u7684\u6578\u503C\u3002",tone:"muted",duration:4e3})}),window.addEventListener("online",()=>{M({title:"\u5DF2\u6062\u5FA9\u9023\u7DDA",tone:"muted",duration:2500})})}var Kt={};et(Kt,{mount:()=>xn});function Jt(e,a=""){let t=Te(e.category),o=`<span class="sr-only">\u5206\u985E\uFF1A${d(t.label)}</span>${e.demo?'<span class="thumb-demo">\u793A\u7BC4</span>':""}<span class="thumb-qty">\xD7 ${e.qty}</span>`;return e.image?`<div class="thumb ${a}" title="${d(t.label)}"><img src="${d(e.image)}" alt="" loading="lazy" decoding="async"><span class="thumb-cat" aria-hidden="true">${i(t.icon,"sm")}</span>${o}</div>`:`<div class="thumb thumb-icon ${a} cat-${t.id}" title="${d(t.label)}">${i(t.icon)}${o}</div>`}function nn(e,a){return e.taxFree?a.refundable?`<span class="badge badge-cyan">${i("verified","sm")}\u53EF\u9000\u7A05 ${u(a.refund)}</span>`:e.store?`<span class="badge badge-warn">\u5DEE ${u(a.group.shortfall)} \u9054\u6A19</span>`:'<span class="badge badge-muted">\u672A\u9078\u5E97\u92EA</span>':'<span class="badge badge-muted">\u4E0D\u8FA6\u514D\u7A05</span>'}function on(e){if(e.purchased&&e.purchasedStore)return`<span class="tag tag-store" title="\u5728 ${d(e.purchasedStore)} \u8CB7\u5230">${i("storefront","sm")}<span class="tag-text">${d(e.purchasedStore)}</span></span>`;if(e.anyStore)return`<span class="tag tag-store">${i("compare_arrows","sm")}<span class="tag-text">\u4E0D\u9650\u5E97\u92EA</span></span>`;if(!e.stores.length)return'<span class="tag tag-store tag-empty">\u672A\u9078\u5E97\u92EA</span>';let a=e.stores.length-1;return`<span class="tag tag-store" title="${d(e.stores.join("\u3001"))}">${i("storefront","sm")}<span class="tag-text">${d(e.stores[0])}</span>${a?`<span class="tag-more">+${a}</span>`:""}</span>`}function Ga(e,a,t,o="grid"){let n=vt(e.priority),s=e.brand?`${e.brand}\uFF5C${e.name}`:e.name;return`
  <article class="card item-card ${e.purchased?"is-done":""} layout-${o}" data-id="${e.id}">
    <div class="item-top">
      ${on(e)}
      <span class="tag tag-prio p${n.value}" title="${n.label}"><span aria-hidden="true">${n.stars}</span><span>${n.label}</span></span>
      <button type="button" class="check ${e.purchased?"on":""}" data-act="toggle"
        role="checkbox" aria-checked="${e.purchased}" aria-label="\u5DF2\u5165\u624B\uFF1A${d(e.name)}">${i("check")}</button>
    </div>
    <div class="item-body">
      ${Jt(e)}
      <div class="item-main">
        ${e.brand?`<p class="item-brand">${d(e.brand)}</p>`:""}
        <h3 class="item-name"><button type="button" class="card-link" data-act="open" aria-label="\u67E5\u770B\u8A73\u60C5\uFF1A${d(s)}">${d(e.name)}</button></h3>
        ${e.nameJa?`<p class="item-ja" lang="ja">${d(e.nameJa)}</p>`:""}
        ${e.note?`<p class="item-note">${i("edit_note","sm")}${d(e.note)}</p>`:""}
      </div>
    </div>
    <div class="item-meta">
      ${e.buyFor?`<span class="who-tag">@${d(e.buyFor)}</span>`:""}
      ${nn(e,a)}
      ${e.weightKg?`<span class="meta-text">${i("luggage","sm")}${fe(a.weight)}</span>`:""}
      ${e.planDate?`<span class="meta-text">${i("event","sm")}${ot(e.planDate)}</span>`:""}
    </div>
    <div class="item-foot">
      <p class="price">
        <span class="price-yen">${u(a.pay)}</span>
        <span class="price-twd">\u2248 ${_(a.pay,t)}</span>
      </p>
      <div class="item-actions">
        <button type="button" class="icon-btn" data-act="edit" aria-label="\u7DE8\u8F2F ${d(e.name)}" title="\u7DE8\u8F2F">${i("edit")}</button>
        <button type="button" class="icon-btn" data-act="delete" aria-label="\u522A\u9664 ${d(e.name)}" title="\u522A\u9664">${i("delete")}</button>
      </div>
    </div>
  </article>`}function ve({label:e,icon:a,value:t,unit:o="",foot:n="",bar:s="",tone:r=""}){return`
  <section class="card kpi ${r}">
    <div class="kpi-head"><h2 class="kpi-label">${e}</h2><span class="kpi-icon">${i(a)}</span></div>
    <p class="kpi-value" data-count-key="${e}">${t}${o?`<small>${o}</small>`:""}</p>
    ${s}
    ${n?`<div class="kpi-foot">${n}</div>`:""}
  </section>`}function Ae({eyebrow:e,title:a,sub:t,actions:o=""}){return`
  <header class="page-head">
    <div>
      <p class="eyebrow">${i("auto_awesome","sm")}${e}</p>
      <h1 class="page-title">${a}</h1>
      ${t?`<p class="page-sub">${t}</p>`:""}
    </div>
    ${o?`<div class="page-actions">${o}</div>`:""}
  </header>`}function Tt(e){return`
  <nav class="jump-nav" aria-label="\u672C\u9801\u5340\u584A" data-jump-nav>
    <div class="jump-track">
      ${e.map(a=>`<button type="button" class="jump-chip" data-jump="${a.id}">${a.label}</button>`).join("")}
    </div>
  </nav>`}function At(e){let a=e.querySelector("[data-jump-nav]");if(!a)return{refresh(){},destroy(){}};let t=[...a.querySelectorAll("[data-jump]")],o=h=>e.querySelector(`#${CSS.escape(h)}`),n=h=>h?.closest("section, .pack-weights, .card")??h,s=()=>(document.querySelector(".topbar")?.offsetHeight??0)+a.offsetHeight+12,r="",l=h=>{h!==r&&(r=h,t.forEach(k=>{let E=k.dataset.jump===h;if(E?k.setAttribute("aria-current","true"):k.removeAttribute("aria-current"),E){let g=k.parentElement;g.scrollLeft=k.offsetLeft-(g.clientWidth-k.offsetWidth)/2}}))},c=()=>t.forEach(h=>{h.hidden=!o(h.dataset.jump)}),f=0,b=()=>{f||(f=requestAnimationFrame(()=>{f=0;let h=s()+4,k="";for(let E of t){if(E.hidden)continue;let g=n(o(E.dataset.jump));g&&g.getBoundingClientRect().top<=h&&(k=E.dataset.jump)}l(k||t.find(E=>!E.hidden)?.dataset.jump||"")}))};return a.addEventListener("click",h=>{let k=h.target.closest("[data-jump]");if(!k)return;let E=o(k.dataset.jump);if(!E)return;let g=n(E),v=matchMedia("(prefers-reduced-motion: reduce)").matches;scrollTo({top:g.getBoundingClientRect().top+scrollY-s(),behavior:v?"auto":"smooth"}),E.hasAttribute("tabindex")||E.setAttribute("tabindex","-1"),E.focus({preventScroll:!0}),l(k.dataset.jump)}),addEventListener("scroll",b,{passive:!0}),c(),b(),{refresh(){c(),b()},destroy(){removeEventListener("scroll",b)}}}function Mt({title:e,text:a,actions:t}){return`
  <div class="card empty">
    <div class="empty-orb" aria-hidden="true">${i("auto_awesome")}</div>
    <h2 class="empty-title">${e}</h2>
    <p class="empty-text">${a}</p>
    <div class="empty-actions">${t}</div>
  </div>`}var Se="ja";function za(e){let a=e.nameJa||e.name,t=e.jan?Pa(e.jan):"",o=s=>Se==="both"?`<span class="zh">${d(s)}</span>`:"",n=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u3092\u63A2\u3057\u3066\u3044\u307E\u3059\u3002",zh:"\u6211\u5728\u627E\u9019\u500B\u5546\u54C1\u3002"},e.taxFree?{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"}:null,e.discountPct?{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\uFF08\u512A\u5F85\uFF09\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u53EF\u4EE5\u4F7F\u7528\u512A\u60E0\u5238\uFF08\u512A\u60E0\uFF09\u55CE\uFF1F"}:null,e.fragile?{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"}:null].filter(Boolean);return`
  <div class="dlg-shell counter-shell" data-mode="${Se}">
    <header class="dlg-head">
      <p class="eyebrow">${i("stars","sm")}COUNTER MEMO CARD \xB7 \u5C08\u6AC3\u51FA\u793A\u5361</p>
      <h2 id="counter-title" class="dlg-title">${d(e.name)}</h2>
      <div class="seg seg-text" role="group" aria-label="\u986F\u793A\u6A21\u5F0F">
        <button type="button" class="${Se==="ja"?"on":""}" aria-pressed="${Se==="ja"}" data-mode="ja">${i("visibility","sm")}\u65E5\u6587\u5927\u5B57</button>
        <button type="button" class="${Se==="both"?"on":""}" aria-pressed="${Se==="both"}" data-mode="both">${i("translate","sm")}\u4E2D\u65E5\u5C0D\u7167</button>
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u51FA\u793A\u5361">${i("close")}</button>
    </header>

    <div class="dlg-scroll counter-body" data-show>
      ${e.nameJa?"":`
      <div class="counter-tip" role="note">
        ${i("lightbulb")}
        <div><p><strong>\u5EFA\u8B70\u88DC\u4E0A\u65E5\u6587\u540D\u7A31\u6216 JAN \u689D\u78BC</strong></p>
        <p>\u76EE\u524D\u986F\u793A\u7684\u662F\u4E2D\u6587\u54C1\u540D\uFF0C\u5E97\u54E1\u53EF\u80FD\u770B\u4E0D\u61C2\u3002${e.jan?"\u5DF2\u6709\u689D\u78BC\uFF0C\u53EF\u4EE5\u5148\u8ACB\u5E97\u54E1\u6383\u63CF\u3002":""}</p></div>
        <button type="button" class="btn btn-sm btn-ghost" data-fix>${i("edit","sm")}\u7ACB\u5373\u88DC\u4E0A</button>
      </div>`}

      <div class="counter-banner">
        <span class="counter-banner-icon">${i("receipt_long")}</span>
        <div><p class="counter-to">TO STORE ASSOCIATE\uFF08\u8CA9\u58F2\u54E1\u69D8\u3078\uFF09</p>
        <p class="counter-hello" lang="ja">\u304A\u624B\u6570\u3067\u3059\u304C\u3001\u3053\u3061\u3089\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p></div>
      </div>

      <section class="counter-item">
        ${t?`
        <button type="button" class="counter-barcode" data-barcode aria-label="\u653E\u5927 JAN \u689D\u78BC ${d(e.jan)}\uFF0C\u5168\u87A2\u5E55\u7D66\u5E97\u54E1\u6383\u63CF">
          ${t}
          <span class="counter-barcode-num mono">${d(e.jan)}</span>
          <span class="counter-barcode-hint">${i("zoom_in","sm")}\u9EDE\u689D\u78BC\u53EF\u5168\u87A2\u5E55\u653E\u5927</span>
        </button>`:e.jan?`<p class="counter-jan-text"><span class="counter-label" lang="ja">JAN</span> <span class="mono">${d(e.jan)}</span></p>`:""}
        <p class="counter-label" lang="ja">\u5BFE\u8C61\u5546\u54C1</p>
        <p class="counter-name" lang="ja">${d(a)}</p>
        ${e.brand?`<p class="counter-brand">${d(e.brand)}</p>`:""}
        <p class="counter-qty" lang="ja">\u5E0C\u671B\u6570\u91CF\uFF1A<strong>${e.qty}</strong> \u70B9${Se==="both"?`<span class="zh">\uFF08\u60F3\u8CB7 ${e.qty} \u4EF6\uFF09</span>`:""}</p>
      </section>

      <section class="counter-lines">
        ${n.map(s=>`<button type="button" class="phrase phrase-lg" data-ja="${d(s.ja)}" data-zh="${d(s.zh)}"><span lang="ja">\u300C${d(s.ja)}\u300D</span>${o(s.zh)}</button>`).join("")}
      </section>

      <section class="counter-phrases" aria-labelledby="ph-title">
        <h3 id="ph-title" class="section-title">${i("touch_app","sm")}\u6307\u5DEE\u6703\u8A71\uFF1A\u9EDE\u4E00\u4E0B\u653E\u5927\u7D66\u5E97\u54E1\u770B</h3>
        <div class="phrase-grid">
          ${ha.map(s=>`<button type="button" class="phrase" data-ja="${d(s.ja)}" data-zh="${d(s.zh)}"><span lang="ja">\u300C${d(s.ja)}\u300D</span><span class="zh">${d(s.zh)}</span></button>`).join("")}
        </div>
      </section>
    </div>

    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-full>${i("fullscreen")}\u5168\u87A2\u5E55</button>
      <button type="button" class="btn btn-gold grow" data-copy>${i("content_copy")}\u8907\u88FD\u65E5\u6587</button>
    </footer>

    <div class="phrase-zoom" data-zoom hidden>
      <div class="zoom-barcode" data-zoom-bar hidden>${t}<p class="mono">${d(e.jan)}</p></div>
      <p class="zoom-ja" lang="ja"></p>
      <p class="zoom-zh"></p>
      <button type="button" class="btn btn-slate" data-zoom-close>${i("close")}\u6536\u8D77</button>
    </div>
  </div>`}function Ua(e){let a=m.getItem(e);if(!a)return;let t=de("dlg-counter",za(a),"counter-title"),o=null,n=()=>{let r=m.getItem(e);if(!r){U(t);return}t.querySelector(".dlg-shell").outerHTML=za(r)};t.addEventListener("click",async r=>{let l=r.target;if(l.closest(".dlg-close")){U(t);return}let c=l.closest("[data-mode]");if(c&&c.tagName==="BUTTON"){Se=c.dataset.mode,n(),t.querySelector(`button[data-mode="${Se}"]`)?.focus();return}if(l.closest("[data-fix]")){ue(e);return}let f=l.closest(".phrase, [data-barcode]");if(f){o=f;let b=t.querySelector("[data-zoom]"),h=f.matches("[data-barcode]");b.classList.toggle("is-barcode",h),b.querySelector("[data-zoom-bar]").hidden=!h,b.querySelector(".zoom-ja").textContent=h?"":f.dataset.ja,b.querySelector(".zoom-zh").textContent=h?"":f.dataset.zh,b.hidden=!1,b.querySelector("[data-zoom-close]").focus();return}if(l.closest("[data-zoom-close]")){t.querySelector("[data-zoom]").hidden=!0,o?.focus();return}if(l.closest("[data-full]")){try{document.fullscreenElement?await document.exitFullscreen():await t.querySelector(".counter-shell").requestFullscreen()}catch{M({title:"\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u5168\u87A2\u5E55",message:"\u53EF\u4EE5\u628A\u624B\u6A5F\u8F49\u6A6B\u5411\u6216\u653E\u5927\u756B\u9762\u3002",tone:"muted"})}return}if(l.closest("[data-copy]")){let b=m.getItem(e),h=[`\u5BFE\u8C61\u5546\u54C1\uFF1A${b.nameJa||b.name}`,`\u5E0C\u671B\u6570\u91CF\uFF1A${b.qty}\u70B9`,b.jan?`JAN\uFF1A${b.jan}`:"",b.taxFree?"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002":""].filter(Boolean).join(`
`);try{await navigator.clipboard.writeText(h),M({title:"\u5DF2\u8907\u88FD\u65E5\u6587",message:"\u53EF\u4EE5\u8CBC\u5230\u7FFB\u8B6F App \u6216\u8A0A\u606F\u88E1\u3002",tone:"muted",duration:3e3})}catch{M({title:"\u7121\u6CD5\u8907\u88FD",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\uFF0C\u8ACB\u624B\u52D5\u9078\u53D6\u6587\u5B57\u3002",tone:"error"})}}}),t.addEventListener("keydown",r=>{let l=t.querySelector("[data-zoom]");r.key==="Escape"&&!l.hidden&&(r.preventDefault(),r.stopPropagation(),l.hidden=!0,o?.focus())},{capture:!0});let s=m.subscribe(n);ce(t,{onClose:()=>{s(),document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}})}var rn={checked:"\u8A17\u904B\u884C\u674E",carry:"\u96A8\u8EAB\u884C\u674E",none:"\u4E0D\u653E\u884C\u674E\uFF08\u5BC4\u9001\uFF0F\u73FE\u5834\u4F7F\u7528\uFF09"};function Ha(e){let{settings:a}=m.state,t=a.rate,{byItem:o}=Fe(m.state.items,a),n=o.get(e.id),s=n.group,r=Te(e.category),l=vt(e.priority),c;return e.taxFree?e.store?s.eligible?c=`${d(s.store)}${s.date?`\uFF08${ot(s.date)}\uFF09`:""} \u514D\u7A05\u5546\u54C1\u672A\u7A05\u5408\u8A08 ${u(s.eligibleExcl)}\uFF0C\u5DF2\u9054 ${u(q)} \u9580\u6ABB\u3002`:c=`${d(s.store)} \u76EE\u524D\u672A\u7A05\u5408\u8A08 ${u(s.eligibleExcl)}\uFF0C\u518D <strong>${u(s.shortfall)}</strong>\uFF08\u672A\u7A05\uFF09\u5373\u53EF\u9000\u7A05\u3002`:c="\u9078\u64C7\u5E97\u92EA\u5F8C\uFF0C\u624D\u80FD\u548C\u540C\u5E97\u5546\u54C1\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\u3002":c="\u9019\u4EF6\u5546\u54C1\u8A2D\u5B9A\u70BA\u4E0D\u8FA6\u514D\u7A05\u3002",`
  <div class="dlg-shell drawer-shell">
    <header class="dlg-head">
      <p class="eyebrow">${i(r.icon,"sm")}${d(r.label)}${e.buyFor?` \xB7 @${d(e.buyFor)}`:""}</p>
      <h2 id="detail-title" class="dlg-title">${d(e.name)}</h2>
      ${e.nameJa?`<p class="dlg-ja" lang="ja">${d(e.nameJa)}</p>`:""}
      <div class="tag-row">
        <span class="badge ${e.purchased?"badge-gold":"badge-muted"}">${i(e.purchased?"verified":"pending","sm")}${e.purchased?`\u5DF2\u5165\u624B${e.purchasedAt?` \xB7 ${Ue(e.purchasedAt)}`:""}`:"\u5F85\u8CFC\u8CB7"}</span>
        <span class="badge badge-prio">${l.stars} ${l.label}</span>
        ${e.demo?'<span class="badge badge-muted">\u793A\u7BC4\u8CC7\u6599</span>':""}
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8A73\u60C5">${i("close")}</button>
    </header>

    <div class="dlg-scroll" tabindex="0" role="region" aria-label="\u5546\u54C1\u8A73\u60C5\u5167\u5BB9">
      <div class="detail-hero">
        ${Jt(e,"thumb-lg")}
        <dl class="info-grid">
          ${e.brand?`<div><dt>\u54C1\u724C</dt><dd>${d(e.brand)}</dd></div>`:""}
          <div><dt>\u6578\u91CF</dt><dd>${e.qty}</dd></div>
          <div><dt>\u5E6B\u8AB0\u8CB7</dt><dd>${e.buyFor?`@${d(e.buyFor)}`:"\u81EA\u7528"}</dd></div>
          <div class="span2"><dt>${e.purchased?"\u8CFC\u8CB7\u5E97\u5BB6":"\u76EE\u6A19\u5E97\u92EA"}</dt><dd>${e.purchased?d(e.purchasedStore||"\u672A\u8A18\u9304"):e.anyStore?"\u4E0D\u9650\u5E97\u92EA\uFF08\u6BD4\u50F9\u4E2D\uFF09":e.stores.length?e.stores.map((f,b)=>`${d(f)}${b===0&&e.stores.length>1?"<small>\uFF08\u4E3B\u9078\uFF09</small>":""}`).join("\u3001"):"\u672A\u9078\u5E97\u92EA"}</dd></div>
          <div><dt>\u5730\u5340</dt><dd>${d(e.area||"\u672A\u6307\u5B9A")}</dd></div>
          <div><dt>\u9810\u8A08\u65E5\u671F</dt><dd>${e.planDate?ot(e.planDate):"\u672A\u5B9A"}</dd></div>
          <div><dt>\u91CD\u91CF</dt><dd>${e.weightKg?fe(n.weight):"\u672A\u586B"}</dd></div>
          <div><dt>\u884C\u674E</dt><dd>${rn[ke(e)]}${ke(e)!==e.luggage?"<small>\uFF08\u4F9D\u5305\u88DD\u5C6C\u6027\uFF09</small>":""}</dd></div>
          ${e.jan?`<div class="span2"><dt>JAN \u689D\u78BC</dt><dd class="mono">${d(e.jan)}${rt(e.jan)?"":' <small class="text-warn">\uFF08\u6AA2\u67E5\u78BC\u4E0D\u7B26\uFF09</small>'}</dd></div>`:""}
        </dl>
      </div>

      ${e.fragile||e.liquid||e.battery||e.blade?`<div class="tag-row">
        ${e.fragile?`<span class="badge badge-warn">${i("wine_bar","sm")}\u6613\u788E</span>`:""}
        ${e.liquid?`<span class="badge badge-cyan">${i("water_drop","sm")}\u6DB2\u9AD4</span>`:""}
        ${e.battery?`<span class="badge badge-danger">${i("battery_alert","sm")}\u542B\u92F0\u96FB\u6C60</span>`:""}
        ${e.blade?`<span class="badge badge-warn">${i("content_cut","sm")}\u5200\u526A\u985E</span>`:""}
      </div>`:""}

      <section class="ledger" aria-labelledby="ledger-title">
        <h3 id="ledger-title" class="section-title">${i("account_balance_wallet","sm")}\u91D1\u984D\u8207\u514D\u7A05\u8A66\u7B97</h3>
        <dl class="ledger-rows">
          <div><dt>\u5B9A\u50F9\uFF08\u542B\u7A05 ${e.taxRate}%\uFF09\xD7 ${e.qty}</dt><dd>${u(n.listIncl)}</dd></div>
          ${n.discount?`<div class="minus"><dt>\u6298\u6263 ${e.discountPct}%</dt><dd>\u2212 ${u(n.discount)}</dd></div>`:""}
          <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${u(n.pay)}</dd></div>
          ${n.refundable?`
            <div class="minus"><dt>\u96E2\u5883\u9000\u7A05\uFF08\u6D88\u8CBB\u7A05 ${e.taxRate}%\uFF09</dt><dd>\u2212 ${u(n.tax)}</dd></div>
            ${n.fee?`<div class="plus"><dt>\u9000\u7A05\u624B\u7E8C\u8CBB ${n.feePct}%</dt><dd>+ ${u(n.fee)}</dd></div>`:""}`:""}
        </dl>
        <div class="ledger-total">
          <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${u(n.net)}</span></div>
          <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${_(n.net,t)}</span></div>
        </div>
        ${a.cardRebatePct?`<p class="hint">${i("credit_card","sm")}\u5237\u5361\u6DE8\u56DE\u994B ${a.cardRebatePct}%\uFF0C\u7D04\u518D\u7701 ${_(n.pay*a.cardRebatePct/100,t)}</p>`:""}
      </section>

      <section class="threshold ${s.eligible&&e.taxFree?"ok":""}" aria-labelledby="th-title">
        <h3 id="th-title" class="section-title">${i("percent","sm")}\u514D\u7A05\u9580\u6ABB\uFF08\u540C\u5E97\u540C\u65E5\u672A\u7A05 ${u(q)}\uFF09</h3>
        ${e.taxFree&&e.store?He(s.progress,{label:"\u514D\u7A05\u9580\u6ABB\u9032\u5EA6",tone:s.eligible?"cyan":"gold"}):""}
        <p>${c}</p>
        ${s.undatedMerge&&e.taxFree?`<p class="small">${i("event","sm")} \u540C\u5E97\u5546\u54C1\u5206\u4E0D\u540C\u5929\u8CB7\u6642\uFF0C\u8ACB\u586B\u9810\u8A08\u65E5\u671F\uFF08\u76EE\u524D\u8996\u70BA\u540C\u4E00\u5929\u5408\u4F75\u8A08\u7B97${s.mergeNeeded?"\uFF0C\u5206\u958B\u8CB7\u53EF\u80FD\u5C31\u4E0D\u5230\u9580\u6ABB":""}\uFF09\u3002</p>`:""}
      </section>

      ${e.note?`<section><h3 class="section-title">${i("edit_note","sm")}\u5099\u8A3B</h3><p class="note-box">${d(e.note)}</p></section>`:""}
    </div>

    <footer class="dlg-foot">
      <button type="button" class="icon-btn icon-btn-lg" data-d="delete" aria-label="\u522A\u9664 ${d(e.name)}" title="\u522A\u9664">${i("delete")}</button>
      <button type="button" class="btn btn-ghost" data-d="edit">${i("edit")}\u7DE8\u8F2F</button>
      <button type="button" class="btn btn-slate" data-d="counter">${i("translate")}\u51FA\u793A\u7D66\u5E97\u54E1</button>
      <button type="button" class="btn ${e.purchased?"btn-ghost":"btn-gold"} grow" data-d="toggle">
        ${i(e.purchased?"undo":"check_circle")}${e.purchased?"\u6539\u56DE\u5F85\u8CFC\u8CB7":"\u6A19\u8A18\u5DF2\u5165\u624B"}
      </button>
    </footer>
  </div>`}function Lt(e){let a=m.getItem(e);if(!a)return;let t=de("dlg-drawer",Ha(a),"detail-title"),o=m.subscribe(()=>{let n=m.getItem(e);if(!n){U(t);return}let s=t.querySelector(".dlg-scroll")?.scrollTop??0,r=document.activeElement?.dataset?.d;t.querySelector(".dlg-shell").outerHTML=Ha(n),t.querySelector(".dlg-scroll").scrollTop=s,r&&t.querySelector(`[data-d="${r}"]`)?.focus()});t.addEventListener("click",async n=>{if(n.target.closest(".dlg-close")){U(t);return}let s=n.target.closest("[data-d]")?.dataset.d;s==="toggle"?Bt(e):s==="edit"?ue(e):s==="counter"?Ua(e):s==="delete"&&await Gt(e)&&U(t)}),ce(t,{onClose:o})}var Ka=e=>requestAnimationFrame(()=>requestAnimationFrame(e));function Va(e){Ka(()=>{document.querySelectorAll(`[data-id="${CSS.escape(e)}"] .check.on`).forEach(a=>{a.classList.add("just-checked");let t=document.createElement("span");t.className="hanko",t.setAttribute("aria-hidden","true"),t.textContent="\u6E08",a.append(t),setTimeout(()=>{t.remove(),a.classList.remove("just-checked")},1600)})})}function Wa(e){Ka(()=>{document.querySelectorAll(`[data-group="${CSS.escape(e)}"]`).forEach(a=>{a.classList.add("just-reached");let t=document.createElement("span");t.className="taxfree-pop",t.setAttribute("aria-hidden","true"),t.innerHTML=`${i("verified","sm")}\u514D\u7A05\u9054\u6210`,(a.querySelector(".sg-head, .dlg-head")??a).append(t),setTimeout(()=>{t.remove(),a.classList.remove("just-reached")},2600)})})}async function Bt(e,a){let t=m.getItem(e);if(!t)return;let o=a;if(!t.purchased&&o===void 0)if(t.stores.length===1)o=t.stores[0];else if(t.stores.length>1||t.anyStore){if(o=await qa(t),o===null)return}else o="";let n=!t.purchased&&o&&t.taxFree?zt(m.state.items,m.state.settings,o):0,s=m.togglePurchased(e,void 0,o);if(!s.purchased){M({title:"\u5DF2\u6539\u56DE\u5F85\u8CFC\u8CB7",message:d(s.name),tone:"muted",duration:3e3});return}let{byItem:r}=Fe(m.state.items,m.state.settings),l=r.get(e),c=[s.purchasedStore?`\u5728 ${d(s.purchasedStore)} \u8CB7\u5230`:"",`\u652F\u4ED8 ${u(l.pay)}`].filter(Boolean);l.refund&&c.push(`\u9810\u4F30\u9000\u7A05 ${u(l.refund)}`),l.group.eligible&&l.group.store&&c.push(`${d(l.group.store)} \u5DF2\u9054\u514D\u7A05\u9580\u6ABB`);let f=!!o&&n<q&&zt(m.state.items,m.state.settings,o)>=q;Va(e),f&&Wa(I(o)),M({title:f?`\u5DF2\u8CB7\u5230\u30FB${d(o)} \u514D\u7A05\u9054\u6210`:"\u5DF2\u8CB7\u5230",message:`\u300C${d(s.name)}\u300D\xB7 ${c.join(" \xB7 ")}`,actionText:"\u5FA9\u539F",onAction:()=>m.togglePurchased(e,!1)})}async function Gt(e){let a=m.getItem(e);if(!a||!await qe({title:"\u522A\u9664\u9019\u500B\u5546\u54C1\uFF1F",body:`\u300C<strong>${d(a.name)}</strong>\u300D\u6703\u5F9E\u6E05\u55AE\u79FB\u9664\u3002\u522A\u9664\u5F8C 5 \u79D2\u5167\u53EF\u4EE5\u6309\u300C\u5FA9\u539F\u300D\u3002`,confirmText:`\u522A\u9664\u300C${a.name.length>10?`${a.name.slice(0,10)}\u2026`:a.name}\u300D`,danger:!0}))return!1;let o=m.state.items.findIndex(s=>s.id===e),n=m.removeItem(e);return M({title:"\u5DF2\u522A\u9664",message:d(n.name),actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>m.restoreItem(n,o)}),!0}function Ve(e){e.addEventListener("click",a=>{let t=a.target.closest("[data-act]"),o=a.target.closest("[data-id]");if(!t||!o||!e.contains(o))return;let{id:n}=o.dataset;switch(t.dataset.act){case"toggle":Bt(n,t.dataset.at);break;case"open":Lt(n);break;case"edit":ue(n);break;case"delete":Gt(n);break;default:break}})}var Ut="__none__",ct="__any__",Ht="__unknown__";function Ya(e){let a=new Map,t=(o,n,s,r)=>{a.has(o)||a.set(o,{key:o,name:n,rows:[]}),a.get(o).rows.push({item:s,role:r})};for(let o of e)if(o.purchased){let n=o.purchasedStore;t(n?I(n):Ht,n||"\u5DF2\u8CB7\uFF08\u672A\u8A18\u9304\u5E97\u5BB6\uFF09",o,"bought")}else o.anyStore?t(ct,at,o,"any"):o.stores.length?o.stores.forEach((n,s)=>t(I(n),n,o,s===0?"main":"backup")):t(Ut,"\u672A\u6307\u5B9A\u5E97\u92EA",o,"none");return[...a.values()]}function zt(e,a,t){let o=Ya(e).find(n=>n.key===I(t));return o?Xa(o,a).todayExcl:0}function Xa(e,a){let t=Oe(Date.now()),o=0,n=0,s=0,r=0,l=0;for(let{item:c}of e.rows){let f=Je(c,a).lineExcl;if(c.purchased){if(l+=1,!c.taxFree)continue;c.purchasedAt&&Oe(c.purchasedAt)===t?o+=f:n+=f}else r+=1,c.taxFree&&(s+=f)}return{todayExcl:o,otherDaysExcl:n,pendingExcl:s,pendingCount:r,boughtCount:l}}function Qa(e,a,t){if(t)return{status:"",bar:""};if(a.noTaxFree)return{status:`<span class="sg-plan">${i("block","sm")}\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05</span>`,bar:""};if(a.dutyFree)return{status:`<span class="sg-plan">${i("flight_takeoff","sm")}\u51FA\u5883\u5340\u514D\u7A05\u5E97\uFF0C\u552E\u50F9\u5DF2\u4E0D\u542B\u7A05</span>`,bar:""};let o=e.todayExcl>=q,n=e.todayExcl+e.pendingExcl;if(!e.todayExcl&&!e.pendingExcl)return{status:e.pendingCount?`<span class="sg-plan">${i("info","sm")}\u6E05\u55AE\u88E1\u6C92\u6709\u8981\u8FA6\u514D\u7A05\u7684\u5546\u54C1</span>`:"",bar:""};if(!e.todayExcl&&e.pendingExcl){let l=e.pendingExcl>=q,c=`<span class="sg-now">\u6E05\u55AE\u5408\u8A08 <strong>${u(e.pendingExcl)}</strong><small>\uFF08\u672A\u7A05\uFF09</small></span>${l?`<span class="sg-plan ok">${i("verified","sm")}\u5168\u8CB7\u53EF\u514D\u7A05</span>`:`<span class="sg-plan">\u9084\u5DEE ${u(q-e.pendingExcl)} \u624D\u80FD\u514D\u7A05</span>`}`,f=`<div class="sg-bar is-plan" role="img" aria-label="\u6E05\u55AE\u5F85\u8CB7\u672A\u7A05 ${u(e.pendingExcl)}\uFF0C\u514D\u7A05\u9580\u6ABB ${u(q)}${l?"\uFF0C\u5168\u8CB7\u53EF\u9054\u6A19":""}">
      <span class="seg-later" style="--w:${Math.min(100,e.pendingExcl/q*100)}%"></span>
    </div>`;return{status:c,bar:f}}let s=o?`<span class="sg-ok">${i("verified","sm")}\u4ECA\u5929\u5DF2\u9054\u514D\u7A05\uFF08\u672A\u7A05 ${u(e.todayExcl)}\uFF09</span>`:`<span class="sg-now">\u4ECA\u5929\u5DF2\u8CB7 <strong>${u(e.todayExcl)}</strong>\uFF08\u5DEE <strong>${u(q-e.todayExcl)}</strong> \u514D\u7A05\uFF09</span>`;e.pendingExcl&&!o&&(s+=n>=q?'<span class="sg-plan ok">\u6E05\u55AE\u5168\u8CB7\u53EF\u9054\u6A19</span>':`<span class="sg-plan">\u6E05\u55AE\u5168\u8CB7\u4ECD\u5DEE ${u(q-n)}</span>`);let r=`<div class="sg-bar" role="img" aria-label="\u4ECA\u5929\u672A\u7A05 ${u(e.todayExcl)}\uFF0C\u6E05\u55AE\u5F85\u8CB7 ${u(e.pendingExcl)}\uFF0C\u514D\u7A05\u9580\u6ABB ${u(q)}">
    <span class="seg-paid" style="--w:${Math.min(100,e.todayExcl/q*100)}%"></span>
    <span class="seg-later" style="--w:${Math.max(0,Math.min(100-e.todayExcl/q*100,e.pendingExcl/q*100))}%"></span>
  </div>`;return{status:s,bar:r}}var Za=e=>i(e===ct?"compare_arrows":e?"help":"storefront"),es=e=>[e.pendingCount?`\u5F85\u8CB7 ${e.pendingCount}`:"",e.boughtCount?`\u5DF2\u8CB7 ${e.boughtCount}`:""].filter(Boolean).join(" \xB7 ");function ln(e){let{st:a,info:t,special:o}=e,{status:n,bar:s}=Qa(a,t,o),r=e.rows.filter(c=>!c.item.purchased).slice(0,3).map(c=>d(c.item.name)),l=a.pendingCount-r.length;return`
  <article class="card sg ${a.pendingCount?"":"is-clear"}" data-group="${d(e.key)}">
    <div class="sg-head">
      <h3 class="sg-heading">
        <button type="button" class="sg-toggle card-link-sg" data-sg-open aria-haspopup="dialog">
          <span class="sg-icon">${Za(o)}</span>
          <span class="sg-title">
            <span class="sg-name">${d(e.name)}</span>
            <span class="sg-count">${es(a)}</span>
          </span>
          <span class="sg-chevron" aria-hidden="true">${i("chevron_right")}</span>
        </button>
      </h3>
      ${n?`<div class="sg-status">${n}</div>`:""}
      ${s}
      ${r.length?`<p class="sg-preview">${i("shopping_bag","sm")}<span>${r.join("\u3001")}${l>0?` \u7B49 ${a.pendingCount} \u4EF6`:""}</span></p>`:`<p class="sg-preview muted">${i("check_circle","sm")}<span>\u9019\u5BB6\u5E97\u7684\u6E05\u55AE\u5DF2\u8CB7\u9F4A</span></p>`}
      ${o||!t.couponUrl?"":`<div class="sg-actions">
        <a class="btn btn-xs btn-gold" href="${d(t.couponUrl)}" target="_blank" rel="noopener">${i("local_offer","sm")}\u958B\u555F\u512A\u60E0\u5238<span class="sr-only">\uFF08${d(e.name)}\uFF0C\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>
      </div>`}
    </div>
  </article>`}function cn(e,a){let t=(e.coupons??[]).filter(s=>!s.categories).sort((s,r)=>s.min-r.min);if(!t.length)return"";let o=t.find(s=>a.todayExcl<s.min),n=[...t].reverse().find(s=>a.todayExcl>=s.min);return o?`<p class="tip">${i("local_offer","sm")}<span>${n?`\u5DF2\u53EF\u7528 ${n.pct}% \u5238\uFF1B`:""}\u4ECA\u5929\u518D\u8CB7\u672A\u7A05 ${u(o.min-a.todayExcl)}\uFF0C\u53EF\u7528 ${o.pct}% \u512A\u60E0\u5238${a.todayExcl+a.pendingExcl>=o.min?"\uFF08\u6E05\u55AE\u5168\u8CB7\u5C31\u9054\u5230\uFF09":""}\u3002</span></p>`:`<p class="tip tip-info">${i("local_offer","sm")}<span>\u4ECA\u5929\u5DF2\u9054\u6700\u9AD8\u512A\u60E0\u9580\u6ABB\uFF0C\u7D50\u5E33\u524D\u51FA\u793A\u512A\u60E0\u5238\u53EF\u518D\u6298 ${n.pct}%\u3002</span></p>`}function dn({item:e,role:a},t,o,n){let s=Je(e,o),r=e.stores.filter(f=>I(f)!==t.key),l=[];e.qty>1&&l.push(`\xD7 ${e.qty}`),e.buyFor&&l.push(`<span class="who-tag">@${d(e.buyFor)}</span>`),a==="backup"&&l.push('<span class="role-tag">\u5099\u9078</span>'),!e.purchased&&r.length&&l.push(`<span class="alt-stores">\u4E5F\u53EF\u5728\uFF1A${r.map(d).join("\u3001")}</span>`),e.taxFree||l.push('<span class="muted">\u4E0D\u8FA6\u514D\u7A05</span>');let c=e.purchased||t.key===ct||t.key===Ut||t.key===Ht?"":` data-at="${d(t.name)}"`;return`
  <li class="sg-row ${e.purchased?"is-done":""}" data-id="${e.id}">
    <button type="button" class="check ${e.purchased?"on":""}" data-act="toggle"${c}
      role="checkbox" aria-checked="${e.purchased}" aria-label="${e.purchased?"\u5DF2\u5165\u624B":`\u5728${d(t.name)}\u8CB7\u5230`}\uFF1A${d(e.name)}">${i("check")}</button>
    <div class="sg-main">
      <button type="button" class="sg-name-btn" data-act="open">${d(e.name)}</button>
      ${l.length?`<p class="sg-meta">${l.join('<span aria-hidden="true">\xB7</span>')}</p>`:""}
    </div>
    <p class="sg-price"><span>${u(s.pay)}</span><small>\u2248 ${_(s.pay,n)}</small></p>
  </li>`}function Ct(e,a){let{settings:t}=e,o=e.items.filter(a);return Ya(o).map(s=>{let r=[ct,Ut,Ht].includes(s.key)?s.key:null;return{...s,special:r,st:Xa(s,t),info:r?{}:je(s.name,t.storeMeta)}}).sort((s,r)=>(s.special?1:0)-(r.special?1:0)||(r.st.pendingCount>0)-(s.st.pendingCount>0)||r.st.pendingCount-s.st.pendingCount||s.name.localeCompare(r.name,"zh-Hant"))}function ts({state:e},a){let{settings:t}=e,o=Ct(e,a),n=wa(e.items.flatMap(r=>[...r.stores,r.purchasedStore]),t.ignoredStorePairs),s=n.length?`<div class="merge-list" role="region" aria-label="\u53EF\u80FD\u662F\u540C\u4E00\u5BB6\u5E97">${n.map(([r,l])=>`
    <div class="notice notice-warn merge-notice" data-a="${d(r)}" data-b="${d(l)}">
      ${i("storefront")}
      <p><strong>\u300C${d(r)}\u300D\u548C\u300C${d(l)}\u300D\u662F\u540C\u4E00\u5BB6\u5E97\u55CE\uFF1F</strong><br>\u5E97\u540D\u4E0D\u540C\u6703\u5206\u958B\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\uFF0C\u5408\u4F75\u5F8C\u624D\u6703\u6B63\u78BA\u52A0\u7E3D\u3002</p>
      <div class="btn-row merge-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-merge="a">\u5408\u4F75\u70BA\u300C${d(r)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="b">\u5408\u4F75\u70BA\u300C${d(l)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="no">\u4E0D\u662F\u540C\u4E00\u5BB6</button>
      </div>
    </div>`).join("")}</div>`:"";return o.length?`${s}
  <p class="result-count" role="status">${o.filter(r=>!r.special).length} \u5BB6\u5E97 \xB7 \u9EDE\u5E97\u92EA\u5361\u7247\u6253\u958B\u8A72\u5E97\u7684\u63A1\u8CB7\u6E05\u55AE\uFF0C\u908A\u62FF\u908A\u52FE\u9078</p>
  <div class="item-grid sg-grid">${o.map(ln).join("")}</div>`:`${s}<div class="card empty empty-sm"><p class="empty-text">\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5546\u54C1\u3002</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${i("filter_alt_off")}\u6E05\u9664\u7BE9\u9078</button></div>`}function pn(e,a,t){if(!e)return`<div class="dlg-shell sheet-shell">
      <header class="dlg-head"><h2 id="sheet-title" class="dlg-title">\u9019\u5BB6\u5E97\u6C92\u6709\u5546\u54C1\u4E86</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589">${i("close")}</button></header>
      <div class="dlg-scroll"><p class="muted">\u5546\u54C1\u53EF\u80FD\u5DF2\u88AB\u522A\u9664\u3001\u6539\u5230\u5176\u4ED6\u5E97\uFF0C\u6216\u4E0D\u7B26\u5408\u76EE\u524D\u7684\u7BE9\u9078\u689D\u4EF6\u3002</p></div></div>`;let{st:o,info:n,special:s}=e,{status:r,bar:l}=Qa(o,n,s),c=!s&&e.rows.filter(b=>!b.item.purchased&&b.item.taxFree&&!b.item.planDate).length>=2,f=[...e.rows].sort((b,h)=>Number(b.item.purchased)-Number(h.item.purchased));return`
  <div class="dlg-shell sheet-shell" data-group="${d(e.key)}">
    <header class="dlg-head">
      <p class="eyebrow">${Za(s)}${s?"\u63A1\u8CB7\u6E05\u55AE":"STORE LIST \xB7 \u5E97\u92EA\u63A1\u8CB7\u6E05\u55AE"}</p>
      <h2 id="sheet-title" class="dlg-title">${d(e.name)}</h2>
      <p class="sg-count">${es(o)}</p>
      ${r?`<div class="sg-status">${r}</div>`:""}
      ${l}
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589 ${d(e.name)} \u63A1\u8CB7\u6E05\u55AE">${i("close")}</button>
    </header>
    <div class="dlg-scroll" tabindex="0" role="region" aria-label="${d(e.name)} \u7684\u5546\u54C1">
      ${s?"":Et(n)}
      ${s?"":cn(n,o)}
      ${o.otherDaysExcl?`<p class="tip tip-info">${i("event","sm")}<span>\u5176\u4ED6\u5929\u5728\u9019\u5BB6\u8CB7\u7684 ${u(o.otherDaysExcl)}\uFF08\u672A\u7A05\uFF09\u53E6\u5916\u8A08\u7B97\uFF0C\u4E0D\u4F75\u5165\u4ECA\u5929\u7684\u9580\u6ABB\u3002</span></p>`:""}
      ${c?`<p class="tip tip-info">${i("event","sm")}<span>\u540C\u5E97\u5546\u54C1\u5206\u4E0D\u540C\u5929\u8CB7\u6642\uFF0C\u8ACB\u5728\u5546\u54C1\u7684\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u586B\u9810\u8A08\u65E5\u671F\uFF0C\u9000\u7A05\u624D\u4E0D\u6703\u9AD8\u4F30\u3002</span></p>`:""}
      ${e.key===ct?`<p class="tip tip-info">${i("compare_arrows","sm")}<span>\u52FE\u9078\u6642\u6703\u8A62\u554F\u5728\u54EA\u5BB6\u8CB7\u5230\uFF0C\u4EE5\u4FBF\u7D2F\u8A08\u8A72\u5E97\u7684\u514D\u7A05\u9580\u6ABB\u3002</span></p>`:""}
      <ul class="sg-rows">${f.map(b=>dn(b,e,a,t)).join("")}</ul>
      ${s?"":`<a class="link-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.name)}" target="_blank" rel="noopener">${i("map","sm")}\u5728 Google \u5730\u5716\u627E\u9644\u8FD1\u5206\u5E97<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`}
    </div>
    ${s?"":`<footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-sg-meta="${d(e.name)}">${i("tune","sm")}${n.couponUrl?"\u512A\u60E0\u5238\u8A2D\u5B9A":"\u52A0\u5165\u512A\u60E0\u5238\u9023\u7D50"}</button>
      ${n.couponUrl?`<a class="btn btn-gold grow" href="${d(n.couponUrl)}" target="_blank" rel="noopener">${i("local_offer","sm")}\u958B\u555F\u512A\u60E0\u5238<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`:""}
    </footer>`}
  </div>`}function un(e,a,{onMeta:t}){let o=()=>Ct(m.state,a).find(c=>c.key===e),n=()=>pn(o(),m.state.settings,m.state.settings.rate),s=de("dlg-drawer dlg-sheet",n(),"sheet-title"),r=()=>{let c=s.querySelector(".dlg-scroll")?.scrollTop??0,f=document.activeElement,b=f?.closest?.("[data-id]")?.dataset.id,h=f?.dataset?.act;s.querySelector(".dlg-shell").outerHTML=n(),s.querySelector(".dlg-scroll").scrollTop=c,b&&h&&s.querySelector(`[data-id="${b}"] [data-act="${h}"]`)?.focus({preventScroll:!0})},l=m.subscribe(r);s.addEventListener("click",c=>{if(c.target.closest(".dlg-close")){U(s);return}let f=c.target.closest("[data-sg-meta]");f&&t(f.dataset.sgMeta)}),Ve(s),ce(s,{onClose:()=>{l(),requestAnimationFrame(()=>document.querySelector(`#view [data-group="${CSS.escape(e)}"] [data-sg-open]`)?.focus({preventScroll:!0}))}})}function as(e,{onMeta:a,filterFn:t}){e.addEventListener("click",o=>{let n=o.target.closest("[data-sg-open], [data-merge], [data-sg-meta]");if(n){if(n.matches("[data-sg-open]"))un(n.closest("[data-group]").dataset.group,t,{onMeta:a});else if(n.matches("[data-sg-meta]"))a(n.dataset.sgMeta);else if(n.matches("[data-merge]")){let s=n.closest(".merge-notice"),{a:r,b:l}=s.dataset;if(n.dataset.merge==="no")m.updateSettings({ignoredStorePairs:[...m.state.settings.ignoredStorePairs,jt(r,l)]}),M({title:"\u5DF2\u8A18\u4F4F\uFF1A\u5169\u5BB6\u662F\u4E0D\u540C\u7684\u5E97",tone:"muted",duration:2500});else{let c=n.dataset.merge==="a"?r:l,f=c===r?l:r,b=m.state.items.map(h=>({id:h.id,stores:h.stores,purchasedStore:h.purchasedStore}));m.renameStore(f,c),M({title:`\u5DF2\u5408\u4F75\u70BA\u300C${c}\u300D`,message:"\u514D\u7A05\u9580\u6ABB\u5DF2\u91CD\u65B0\u8A08\u7B97\u3002",actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>b.forEach(h=>m.updateItem(h.id,{stores:h.stores,purchasedStore:h.purchasedStore}))})}}}})}var ls="shopping-relics:intro-seen-session";try{localStorage.removeItem("shopping-relics:intro-seen")}catch{}var dt={comet:1.9,start:1.95,span:5.2},gn=.94,mn=.75,Ye=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,fn=()=>{try{return sessionStorage.getItem(ls)==="1"}catch{return!1}},bn=()=>{try{sessionStorage.setItem(ls,"1")}catch{}},ss=e=>e.items.length?"\u518D\u6DFB\u4E00\u500B\u5FC3\u9858":"\u5BEB\u4E0B\u7B2C\u4E00\u500B\u5FC3\u9858";function ns({state:e,sum:a}){if(!e.items.length)return["<li>\u6E05\u55AE\u9084\u662F\u7A7A\u7684\uFF0C\u5F9E\u7B2C\u4E00\u500B\u5FC3\u9858\u958B\u59CB</li>"];let t=Ct(e,()=>!0).filter(o=>!o.special).length;return[`<li>\u5F85\u8CB7 <b>${a.pendingCount}</b> \u4EF6</li>`,`<li><b>${t}</b> \u5BB6\u5E97</li>`,`<li>\u9810\u4F30\u9000\u7A05 <b>${u(a.refund)}</b></li>`]}var ae="255,247,226",se="255,208,100",Me="255,166,58",Le="255,232,160",H=e=>Math.min(1,Math.max(0,e)),We=e=>1-(1-e)**3,os=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,ut=(e,a)=>{let t=document.createElement("canvas");return t.width=Math.max(1,Math.round(e)),t.height=Math.max(1,Math.round(a)),t},Ce=(e,a,t)=>{let o=Math.sin(e*127.1+a*311.7+t*74.7)*43758.5453;return o-Math.floor(o)},hn=9,Ee={};function B(e,a){let t=e+a;if(Ee[t])return Ee[t];let o=128,n=o/2,s=ut(o,o),r=s.getContext("2d"),l=r.createRadialGradient(n,n,0,n,n,n);return a==="glow"?(l.addColorStop(0,`rgba(${e},1)`),l.addColorStop(.12,`rgba(${e},.85)`),l.addColorStop(.35,`rgba(${e},.25)`),l.addColorStop(1,`rgba(${e},0)`)):(l.addColorStop(0,`rgba(${e},.42)`),l.addColorStop(.72,`rgba(${e},.5)`),l.addColorStop(.88,`rgba(${e},.62)`),l.addColorStop(.96,`rgba(${e},.2)`),l.addColorStop(1,`rgba(${e},0)`)),r.fillStyle=l,r.fillRect(0,0,o,o),Ee[t]=s,s}function $n(e){let a=`beam${e}`;if(Ee[a])return Ee[a];let t=ut(512,32),o=t.getContext("2d"),n=o.createLinearGradient(0,0,512,0);n.addColorStop(0,`rgba(${e},0)`),n.addColorStop(.5,`rgba(${e},1)`),n.addColorStop(1,`rgba(${e},0)`),o.fillStyle=n,o.fillRect(0,0,512,32),o.globalCompositeOperation="destination-in";let s=o.createLinearGradient(0,0,0,32);return s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.5,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=s,o.fillRect(0,0,512,32),Ee[a]=t,t}function vn(e,a){let t=`pillar${e}${a}`;if(Ee[t])return Ee[t];let o=ut(16,256),n=o.getContext("2d"),s=n.createLinearGradient(0,256,0,0);return s.addColorStop(0,`rgba(${e},${a})`),s.addColorStop(1,`rgba(${e},0)`),n.fillStyle=s,n.fillRect(0,0,16,256),Ee[t]=o,o}function rs(e){let a=e>>>0;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}var pt=[{dpr:1.5,q:1},{dpr:1,q:.6},{dpr:.75,q:.38}];function yn(e,a){let t=e.getContext("2d"),o=typeof t.createConicGradient=="function",n=0,s=0,r=0,l={},c=null,f=null,b=!1,h=!1,k=performance.now(),E=!1,g=0,v=0,y=0,C=0,ne=0,oe=[],ge=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4||navigator.deviceMemory&&navigator.deviceMemory<=4?1:0,Re=pt[ge].q,_e=0,gt=16.7,It=0,mt=-1,ye=p=>Math.ceil(p.length*Re),Nt=()=>({cx:n/2,hy:s*.62,RB:Math.max(n,s)*1.7}),ft=p=>{let{cx:T,hy:x,RB:w}=Nt();return x+w-Math.sqrt(Math.max(0,w*w-(p-T)**2))},Cs=()=>{let p=rs(20261105),T=n*s,x=Math.min(n,s)/800;l={u:x,stars:Array.from({length:Math.round(T/2600)},()=>({x:p()*n,y:p()*s,s:.5+p()*1.2,a:.2+p()*.6,f:.5+p()*2,ph:p()*6.3})),trail:Array.from({length:90},()=>({at:p(),dx:(p()-.5)*40*x,dy:(p()-.3)*30*x,s:3+p()*9,f:1+p()*3,ph:p()*6.3})),crown:Array.from({length:150},()=>({ang:p()*Math.PI*2,v:(.18+p()*.3)*s,out:(.02+p()*.12)*n,s:6+p()*16,streak:p()<.45})),rise:Array.from({length:50},()=>({x:(p()-.5)*.16*n,v:.15+p()*.5,s:3+p()*7})),burst:Array.from({length:70},()=>({ang:p()*Math.PI*2,d:.15+p()*1.1,s:(18+p()*80)*Math.max(.7,x),c:p()<.2?ae:p()<.6?se:Me})),ripples:Array.from({length:190},()=>({x:p()*n,y:p(),w:8+p()*34,ph:p()*6.3,f:.6+p()*1.4,a:.14+p()*.42})),motes:Array.from({length:Math.round(60+T/16e3)},()=>({x:p()*n,v:8+p()*30,off:p(),s:2+p()*14*Math.max(.7,x),sw:6+p()*18,ph:p()*6.3,c:p()<.25?ae:p()<.7?se:Me})),tide:Array.from({length:90},()=>{let w=p()<.3;return{x:p()*n,dy:p()**1.6*.17*s,onWater:w,vx:(p()-.5)*14,s:(3+p()**2*26)*Math.max(.7,x),f:.6+p()*1.8,ph:p()*6.3,c:p()<.3?ae:p()<.75?se:Me}}),fore:Array.from({length:9},(w,P)=>({x:(P%2?.82+p()*.2:-.04+p()*.2)*n,y:p()*s,s:(90+p()*150)*Math.max(.6,x),a:.1+p()*.16,ph:p()*6.3}))},c=null,f=null};function Ps(){let p=rs(7),T=Math.min(n,s)*.55*2.2,x=Math.min(640,Math.round(T*2)),w=ut(x,x),P=w.getContext("2d"),$=x/2;P.lineCap="round";for(let A=0;A<46;A++){let N=p()*Math.PI*2,G=(.25+p()*.75)*$,X=P.createLinearGradient($,$,$+Math.cos(N)*G,$+Math.sin(N)*G);X.addColorStop(0,`rgba(${Le},${.35+p()*.4})`),X.addColorStop(1,`rgba(${Le},0)`),P.strokeStyle=X,P.lineWidth=1.4+p()*1.8,P.beginPath(),P.moveTo($,$),P.lineTo($+Math.cos(N)*G,$+Math.sin(N)*G),P.stroke()}c={c:w,size:T*2}}function Is(){let p=pt[ge].dpr,{cx:T,hy:x,RB:w}=Nt(),P=ut(n*p,s*p),$=P.getContext("2d");$.setTransform(p,0,0,p,0,0);let A=$.createLinearGradient(0,0,0,x);A.addColorStop(0,"#05071c"),A.addColorStop(.5,"#15164a"),A.addColorStop(.82,"#43306f"),A.addColorStop(1,"#b8703a"),$.fillStyle=A,$.fillRect(0,0,n,s),$.globalCompositeOperation="lighter";let N=$.createRadialGradient(n*.98,x*.82,0,n*.98,x*.82,Math.max(n,s)*.42);N.addColorStop(0,"rgba(62,200,210,.28)"),N.addColorStop(1,"rgba(62,200,210,0)"),$.fillStyle=N,$.fillRect(0,0,n,s),$.globalAlpha=.55,$.drawImage(B(Me,"glow"),T-n*.6,x-n*.6,n*1.2,n*1.2),$.globalAlpha=1,$.globalCompositeOperation="source-over",$.save(),$.beginPath(),$.arc(T,x+w,w,0,Math.PI*2),$.clip();let G=$.createLinearGradient(0,x,0,s);G.addColorStop(0,"#8a5c34"),G.addColorStop(.2,"#4a2f3a"),G.addColorStop(1,"#130c1c"),$.fillStyle=G,$.fillRect(0,x-40,n,s),$.globalCompositeOperation="lighter",$.save(),$.translate(T,x),$.scale(1,.55),$.globalAlpha=.6,$.drawImage(B(se,"glow"),-n*.5,60-n*.5,n,n),$.restore(),$.globalAlpha=.4,$.drawImage(B(Me,"glow"),T-n*.6,x-n*.6,n*1.2,n*1.2),$.restore(),$.globalCompositeOperation="lighter",$.globalAlpha=1;for(let[X,Pe,j]of[[44,Me,.12],[14,se,.38],[3.2,ae,.95]])$.strokeStyle=`rgba(${Pe},${j})`,$.lineWidth=X,$.beginPath(),$.arc(T,x+w,w,Math.PI*1.25,Math.PI*1.75),$.stroke();f=P}let V=(p,T,x,w,P)=>{P<=.003||(t.globalAlpha=Math.min(1,P),t.drawImage(p,T-w/2,x-w/2,w,w))},bt=(p,T,x,w,P,$,A)=>{P<=.003||(t.save(),t.translate(p,T),$&&t.rotate(Math.PI/2),t.globalAlpha=Math.min(1,P),t.drawImage($n(A),-x/2,-w/2,x,w),t.restore())};function Ns(p,T,x,w,P){if(w<=0)return;V(B(Me,"glow"),p,T,420*x*l.u,.35*w),V(B(se,"glow"),p,T,170*x*l.u,.85*w),V(B(ae,"glow"),p,T,70*x*l.u,w),c||Ps();let $=c.size*(x/2.2);t.save(),t.translate(p,T),t.rotate(P*.025),t.globalAlpha=w*(.8+.2*Math.sin(P*1.3)),t.drawImage(c.c,-$/2,-$/2,$,$),t.restore();let A=n*.72*x,N=s*.52*x;bt(p,T,A,34*x,.5*w,!1,se),bt(p,T,A,5,.95*w,!1,ae),bt(p,T,N,26*x,.45*w,!0,se),bt(p,T,N,4.4,.9*w,!0,ae)}let ra=(p,T,x)=>{let w=os(p);return[T+Math.sin(p*Math.PI*5)*n*.035*(1-w),-s*.08+(x+s*.08)*w]};function js(p){for(let T=oe.length-1;T>=0;T--){let x=oe[T],w=p-x.t;if(w>2.2||w<0){oe.splice(T,1);continue}if(x.water){let P=H((x.y-s*.62)/(s*.38)),$=.5+P*1.2;t.lineWidth=1.6,t.globalAlpha=1;for(let N=0;N<3;N++){let G=H(w/1.7-N*.15);if(G<=0)continue;t.strokeStyle=`rgba(${Le},${(.65*(1-G)).toFixed(3)})`;let X=(10+G*n*.13)*$;t.beginPath(),t.ellipse(x.x,x.y,X,X*.2*(.6+P),0,0,Math.PI*2),t.stroke()}V(B(ae,"glow"),x.x,x.y,70*$,H(1-w/.6));let A=H(w/.9);if(A<1)for(let N=0;N<16;N++){let G=Ce(N,x.id,1)*Math.PI*2,X=(.04+Ce(x.id,N,2)*.07)*s*$,Pe=x.x+Math.cos(G)*(8+26*A)*$,j=x.y+Math.sin(G)*4*$-X*4*A*(1-A);V(B(N%3?se:ae,"glow"),Pe,j,(6+N%3*3)*$,(1-A)**.7)}}else{let P=We(H(w/1.3)),$=1-H(w/1.3);V(B(se,"glow"),x.x,x.y,90*l.u+30,$*.6);for(let A=0;A<18;A++){let N=Ce(A,x.id,3)*Math.PI*2,G=(30+Ce(x.id,A,4)*70)*l.u*P;V(B(A%4?Le:ae,"glow"),x.x+Math.cos(N)*G,x.y+Math.sin(N)*G+w*14,7+A%3*3,$*(.5+.5*Math.sin(p*9+A)))}}}}function Fs(p,T){let{cx:x,hy:w}=Nt();t.globalCompositeOperation="source-over",t.globalAlpha=1,f||Is(),t.drawImage(f,0,0,n,s),t.globalCompositeOperation="lighter",t.lineCap="round";let P=new Map,$=ye(l.ripples);for(let j=0;j<$;j++){let S=l.ripples[j],W=w+6+S.y*S.y*(s-w);if(W<ft(S.x)+3)continue;let z=(W-w)/(s-w),O=S.x+Math.sin(p*.3+S.ph)*12,te=1-Math.min(1,Math.abs(O-x)/(n*.6)),re=S.a*(.45+.55*Math.sin(p*S.f+S.ph)**2)*(.5+te),R=`${Math.min(5,Math.round(re*6))}|${Math.round(z*3)}`;P.has(R)||P.set(R,[]),P.get(R).push([O,W,S.w*(.4+z*2.2),(2+z*5)*Math.sin(p*S.f+S.ph)])}t.globalAlpha=1;for(let[j,S]of P){let[W,z]=j.split("|").map(Number);if(W){t.strokeStyle=`rgba(${Le},${(W/6).toFixed(3)})`,t.lineWidth=.8+z/3*2.4,t.beginPath();for(let[O,te,re,R]of S)t.moveTo(O-re,te),t.quadraticCurveTo(O,te-R,O+re,te);t.stroke()}}let A=We(T),N=Math.ceil(hn*Re);for(let j=0;j<N;j++){let S=2.6+j*1.37%1.9,W=(p+j*.61*S)/S,z=Math.floor(W),O=W-z;if(O>.72)continue;let te=We(H(O/.12)),re=H(O/.05)*H((.72-O)/.16),R=.55+.45*(.5+.5*Math.sin(p*(11+j*1.7)))*(.6+.4*Math.sin(p*(3.3+j*.9)+z));Ce(j,Math.floor(p*12),z)<.12&&(R*=.35);let Y=re*R*A;if(Y<.02)continue;let D=x+(Ce(j,z,1)-.5)*.84*n,Ie=(.35+Ce(j,z,2)*.65)*te*A,be=.6+Ce(j,z,3)*.8,me=w-(w-s*.02)*Ie;if(!(me>=w-2)){for(let[Q,Z,De]of[[(26*l.u+10)*be,se,.16],[3.2*be,ae,.9]]){let Ze=vn(Z,De);t.globalAlpha=Y,t.drawImage(Ze,D-Q/2,me,Q,w-me),t.save(),t.translate(0,w),t.scale(1,-1),t.globalAlpha=.6*Y,t.drawImage(Ze,D-Q/2,-(w-me)*.45,Q,(w-me)*.45),t.restore()}V(B(ae,"glow"),D,ft(D),(60*l.u+20)*be,.9*Y)}}let G=ye(l.tide);for(let j=0;j<G;j++){let S=l.tide[j],W=((S.x+S.vx*p+v*30*(S.s/20))%n+n)%n,z=ft(W),O=.5+.5*Math.sin(p*S.f+S.ph),te=S.onWater?z+6+S.dy*.7:z-3-S.dy+Math.sin(p*.6+S.ph)*4,re=S.onWater?.55:1-S.dy/(.2*s);V(B(S.c,S.s>10?"bokeh":"glow"),W,te,S.s*(S.s>10?1.4:2),(.25+.6*O)*re*A)}js(p);let X=ye(l.motes);for(let j=0;j<X;j++){let S=l.motes[j],W=w*.95,z=w+20-(p*S.v+S.off*W)%W,O=H((w-z)/40)*H(z/(s*.25)),te=S.x+Math.sin(p*.5+S.ph)*S.sw+v*S.s*.6;V(B(S.c,S.s>9?"bokeh":"glow"),te,z,S.s*(S.s>9?1.6:2.2),(.3+.45*T)*O)}let Pe=ye(l.fore);for(let j=0;j<Pe;j++){let S=l.fore[j];V(B(se,"bokeh"),S.x+Math.sin(p*.2+S.ph)*20+v*40,S.y+Math.cos(p*.15+S.ph)*16+y*30,S.s,S.a)}}function Qe(p){let T=Ye(),x=(performance.now()-k)/1e3,w=T?1:H(x/dt.comet),P=T?1:H((x-dt.start)/dt.span);(Math.abs(P-mt)>.001||P===1&&mt!==1)&&(mt=P,a(P));let $=n/2,A=s*mn,N=H(P/.28),G=H((P-.3)/.18),X=H((P-.47)/.28),Pe=H((P-.62)/.26),j=os(X)*Math.hypot(n/2,Math.max(A,s-A))*1.06;if(v+=(C-v)*.05,y+=(ne-y)*.05,t.globalCompositeOperation="source-over",t.globalAlpha=1,X<1){t.fillStyle="#05060f",t.fillRect(0,0,n,s);let W=ye(l.stars);for(let R=0;R<4;R++){t.fillStyle=`rgba(255,236,190,${(.15+R*.2).toFixed(2)})`;for(let Y=0;Y<W;Y++){let D=l.stars[Y];Math.min(3,Math.floor(D.a*(.5+.5*Math.sin(p*D.f+D.ph))*5))===R&&t.fillRect(D.x+v*4,D.y+y*3,D.s,D.s)}}t.globalCompositeOperation="lighter";let z=1-H(P/.1);if(z>0){let R=ye(l.trail);for(let Y=0;Y<R;Y++){let D=l.trail[Y];if(D.at>w)continue;let[Ie,be]=ra(D.at,$,A),me=w-D.at,Q=.5+.5*Math.sin(p*D.f+D.ph);V(B(Le,"glow"),Ie+D.dx*me*3,be+D.dy*me*2,D.s*l.u*1.4,(.25+.6*Q)*z*(1-me*.5))}if(w<1)for(let Y=0;Y<22;Y++){let D=w-Y*.012;if(D<0)break;let[Ie,be]=ra(D,$,A);V(B(Y?se:ae,"glow"),Ie,be,(Y?26-Y:40)*l.u,(1-Y/22)*.9)}}let O=H((w-.92)/.08)*(1-H(P/.12));O>.01&&(V(B(se,"glow"),$,A,160*l.u,.8*O),V(B(ae,"glow"),$,A,50*l.u,O));let te=H(P/.06)*(1-G)*(.75+.25*Math.sin(p*5));te>.01&&(t.save(),t.translate($,A),t.scale(1,.35),V(B(Me,"glow"),0,0,260*l.u,.55*te),t.restore(),V(B(se,"glow"),$,A,70*l.u,.7*te),V(B(ae,"glow"),$,A,22*l.u,.8*te));let re=Math.exp(-(((P-.48)/.05)**2));if(Ns($,A,.5+We(G)*1+re*.8,We(G)*(1-H((X-.15)/.2)),p),N>0&&N<1){let R=1-N;t.save(),t.translate($,A),t.scale(1,.18),V(B(se,"glow"),0,0,(120+N*n*.5)*l.u+80,.9*R),t.restore(),t.lineWidth=2,t.globalAlpha=1;for(let Q=0;Q<4;Q++){let Z=H(N*1.3-Q*.14);Z<=0||(t.strokeStyle=`rgba(${Le},${(.55*(1-Z)).toFixed(3)})`,t.beginPath(),t.ellipse($,A,20+Z*n*.42,(20+Z*n*.42)*.16,0,0,Math.PI*2),t.stroke())}let Y=26*l.u+10,D=1+N*2.4,Ie=ye(l.crown),be=[];t.strokeStyle=`rgba(${se},${(.32*R).toFixed(3)})`,t.lineWidth=3*l.u+1,t.globalAlpha=1,t.beginPath();for(let Q=0;Q<Ie;Q++){let Z=l.crown[Q],De=$+Math.cos(Z.ang)*Y*D,Ze=A+Math.sin(Z.ang)*Y*D*.18,ma=De+Math.cos(Z.ang)*Z.out*N,fa=Ze-Z.v*4*N*(1-N)*(.6+.4*Math.abs(Math.cos(Z.ang)));Z.streak&&(t.moveTo(De,Ze),t.lineTo(ma,fa)),be.push([Z,ma,fa])}t.stroke();for(let[Q,Z,De]of be)V(B(Q.streak?ae:se,"glow"),Z,De,Q.s*l.u*(1-N*.4),R**.7);let me=ye(l.rise);for(let Q=0;Q<me;Q++){let Z=l.rise[Q];V(B(Le,"glow"),$+Z.x*(1+N),A-N*s*.55*Z.v,Z.s*l.u*2,.8*R)}}}if(X>0){t.save(),X<1&&(t.beginPath(),t.arc($,A,Math.max(1,j),0,Math.PI*2),t.clip()),Fs(p,Pe),t.restore(),t.globalCompositeOperation="lighter";let W=1-X**2;if(W>0&&j>2){if(t.globalAlpha=1,t.strokeStyle=`rgba(${se},${.2*W})`,t.lineWidth=34,t.beginPath(),t.arc($,A,j,0,Math.PI*2),t.stroke(),o){let O=t.createConicGradient(p*.4,$,A);["#ff8a8a","#ffd36b","#8dffb0","#7fe7f0","#a99bff","#ff8adf","#ff8a8a"].forEach((te,re,R)=>O.addColorStop(re/(R.length-1),te)),t.strokeStyle=O,t.globalAlpha=.6*W}else t.strokeStyle=`rgba(${ae},${.6*W})`;t.lineWidth=6,t.beginPath(),t.arc($,A,j+4,0,Math.PI*2),t.stroke(),t.globalAlpha=1,t.strokeStyle=`rgba(${ae},${.85*W})`,t.lineWidth=2,t.beginPath(),t.arc($,A,j,0,Math.PI*2),t.stroke()}let z=Math.sin(Math.PI*Math.min(1,X*1.15))*.6;if(z>.01){let O=We(X),te=ye(l.burst);for(let re=0;re<te;re++){let R=l.burst[re];V(B(R.c,"bokeh"),$+Math.cos(R.ang)*R.d*r*.5*O,A+Math.sin(R.ang)*R.d*r*.4*O,R.s*(.6+O*.6),z)}}}let S=Math.exp(-(((P-.48)/.045)**2));S>.01&&(t.globalCompositeOperation="lighter",V(B(ae,"glow"),$,A,r*1.1*S,S*.9),t.globalAlpha=1,t.fillStyle=`rgba(255,236,190,${(S*.3).toFixed(3)})`,t.fillRect(0,0,n,s)),t.globalCompositeOperation="source-over",t.globalAlpha=1}let la=()=>{let p=Math.min(devicePixelRatio||1,pt[ge].dpr);Re=pt[ge].q,e.width=Math.round(n*p),e.height=Math.round(s*p),t.setTransform(p,0,0,p,0,0),f=null},qs=p=>{if(_e){let T=p-_e;T<250&&(gt=gt*.9+T*.1,It+=1)}_e=p,It>40&&gt>25&&ge<pt.length-1&&(ge+=1,la(),It=0,gt=16.7)},ia=p=>{b&&(qs(p),Qe(p/1e3),requestAnimationFrame(ia))},ca=()=>{let p=e.offsetWidth,T=e.offsetHeight;if(!p||!T||Math.abs(p-n)<2&&Math.abs(T-s)<2&&l.stars)return;let x=!l.stars||Math.abs(p-n)>=2||Math.abs(T-s)>140;n=p,s=T,r=Math.hypot(n,s),x&&Cs(),la(),b||Qe(performance.now()/1e3)},ht=()=>{let p=!Ye()&&h&&!document.hidden;if(p&&!b){let T=performance.now();E?g&&(k+=T-g):(k=T,E=!0),g=0,b=!0,_e=0,requestAnimationFrame(ia)}else!p&&b?(b=!1,g=performance.now(),n&&Qe(g/1e3)):!p&&n&&Qe(performance.now()/1e3)},da=p=>{C=p.clientX/innerWidth-.5,ne=p.clientY/innerHeight-.5},pa=new ResizeObserver(ca);pa.observe(e);let ua=new IntersectionObserver(p=>{h=p[0].isIntersecting,ht()});ua.observe(e),document.addEventListener("visibilitychange",ht),addEventListener("pointermove",da,{passive:!0}),ca();let ga=0;return{toggle:ht,finish(){E=!0,g=0,k=performance.now()-(dt.start+dt.span+1)*1e3,!b&&n&&Qe(performance.now()/1e3)},restart(){E=!0,g=0,k=performance.now(),mt=-1},tap(p,T){ga+=1,oe.push({x:p,y:T,t:performance.now()/1e3,id:ga,water:T>ft(p)+4}),oe.length>8&&oe.shift()},destroy(){b=!1,pa.disconnect(),ua.disconnect(),document.removeEventListener("visibilitychange",ht),removeEventListener("pointermove",da)}}}function xn(e,a){e.classList.add("view-home");let t=!Ye();e.innerHTML=`
  <section class="aw${t?" is-live":""}" aria-labelledby="aw-title">
    <canvas class="aw-canvas" aria-hidden="true"></canvas>
    <div class="aw-cap">
      <p class="aw-kicker">SHOPPING RELICS</p>
      <h1 class="aw-title" id="aw-title" lang="ja"><span class="nw">\u65C5\u7ACB\u3061\u306E\u524D\u306B\u3001</span><span class="nw">\u5149\u306F\u6E80\u3061\u308B\u3002</span></h1>
      <p class="aw-sub" lang="ja"><span class="nw">\u307B\u3057\u3044\u3082\u306E\u306F\u3001\u3053\u3053\u306B\u8A18\u3057\u3066\u3002</span><span class="nw">\u6642\u9593\u306F\u3059\u3079\u3066\u3001\u65C5\u306E\u305F\u3081\u306B\u3002</span></p>
      <p class="aw-zh" lang="zh-TW"><span class="nw">\u51FA\u767C\u4E4B\u524D\uFF0C\u5149\u5DF2\u6EFF\u6EA2\u3002</span><span class="nw">\u60F3\u8981\u7684\u90FD\u5BEB\u5728\u9019\u88E1\uFF0C\u6642\u9593\u5168\u7559\u7D66\u65C5\u7A0B\u3002</span></p>
      <ul class="aw-stats" aria-label="\u6E05\u55AE\u6982\u6CC1" data-stats>${ns(a).join("")}</ul>
      <div class="aw-cta" data-cta>
        <a class="btn btn-gold" href="#/list">${i("auto_awesome")}\u958B\u555F\u6E05\u55AE</a>
        <button type="button" class="btn btn-ghost-light" data-add>${i("add_circle")}<span data-add-label>${ss(a.state)}</span></button>
      </div>
      <button type="button" class="aw-replay" data-replay>${i("movie","sm")}\u91CD\u64AD\u7247\u982D</button>
    </div>
    <button type="button" class="aw-skip" data-skipintro hidden>\u8DF3\u904E\u7247\u982D${i("fast_forward","sm")}</button>
  </section>`;let o=e.querySelector(".aw"),n=e.querySelector(".aw-cap"),s=e.querySelector("[data-skipintro]"),r=null,l=-1,c=E=>{let g=H((E-.8)/.14);(Math.abs(g-l)>.004||g===1&&l!==1)&&(l=g,o.style.setProperty("--c",g.toFixed(3)),n.querySelectorAll("[data-cta], [data-replay]").forEach(y=>{y.inert=g<.6}));let v=E>=gn;if(v!==r){r=v;let y=o.classList.contains("is-live")&&!r;document.body.classList.toggle("home-intro",y),s.hidden=!y,r&&bn()}},f=t&&fn();document.body.classList.toggle("home-intro",t&&!f),f&&o.classList.add("is-quick");let b=yn(e.querySelector(".aw-canvas"),c);f&&b.finish();let h=matchMedia("(prefers-reduced-motion: reduce)"),k=()=>{o.classList.toggle("is-live",!Ye()),Ye()&&b.finish(),b.toggle()};return h.addEventListener?.("change",k),e.addEventListener("click",E=>{E.target.closest("[data-add]")&&document.dispatchEvent(new CustomEvent("app:add")),E.target.closest("[data-skipintro]")&&(b.finish(),E.detail===0&&requestAnimationFrame(()=>n.querySelector("[data-cta] a")?.focus())),E.target.closest("[data-replay]")&&(o.classList.remove("is-quick"),b.restart(),E.detail===0?requestAnimationFrame(()=>s.focus()):document.activeElement?.blur())}),o.addEventListener("pointerdown",E=>{if(!r||Ye()||E.button>0||E.target.closest("a, button, .aw-title, .aw-sub, .aw-zh, .aw-stats, .aw-kicker"))return;let g=o.getBoundingClientRect();b.tap(E.clientX-g.left,E.clientY-g.top)}),{update(E){e.querySelector("[data-stats]").innerHTML=ns(E).join(""),e.querySelector("[data-add-label]").textContent=ss(E.state)},destroy(){h.removeEventListener?.("change",k),b.destroy(),document.body.classList.remove("home-intro")}}}var Wt={};et(Wt,{mount:()=>En});var L={cat:"all",status:"all",area:"all",who:"all",q:"",sort:"new",layout:"grid"};try{L.layout=localStorage.getItem("shopping-relics:layout")||"grid"}catch{}function Vt(e){let a=L.q.trim().toLowerCase();return(L.who==="all"||(L.who==="__self__"?!e.buyFor:e.buyFor===L.who))&&(!a||[e.name,e.nameJa,e.brand,...e.stores,e.purchasedStore,e.area,e.note,e.jan,e.buyFor].join(" ").toLowerCase().includes(a))}function wn(e,a){let t=e.filter(n=>Vt(n)&&(L.cat==="all"||n.category===L.cat)&&(L.status==="all"||(L.status==="done"?n.purchased:!n.purchased))&&(L.area==="all"||(n.area||"\u672A\u6307\u5B9A")===L.area)),o={new:(n,s)=>s.createdAt-n.createdAt,priority:(n,s)=>s.priority-n.priority||s.createdAt-n.createdAt,price:(n,s)=>a.get(s.id).pay-a.get(n.id).pay,area:(n,s)=>(n.area||"~").localeCompare(s.area||"~","zh-Hant")||n.store.localeCompare(s.store,"zh-Hant")};return t=[...t].sort(o[L.sort]),t.sort((n,s)=>Number(n.purchased)-Number(s.purchased))}function is({state:e,sum:a,rate:t}){let{settings:o}=e,n=a.count?a.purchasedCount/a.count:0;return`
    ${ve({label:"\u63A1\u8CFC\u5B8C\u6210\u9032\u5EA6",icon:"verified",value:a.purchasedCount,unit:` / ${a.count} \u4EF6`,bar:He(n,{label:"\u63A1\u8CFC\u5B8C\u6210\u9032\u5EA6"}),foot:`<span>${a.purchasedCount} \u4EF6\u5DF2\u5165\u624B</span><span>${a.pendingCount} \u4EF6\u5F85\u8CFC</span>`})}
    ${ve({label:"\u5DF2\u82B1\u8CBB",icon:"account_balance_wallet",value:u(a.paid),unit:` / ${u(o.budget)}`,bar:lt([{value:a.paid,tone:"paid"},{value:a.pending,tone:"later"}],o.budget,`\u9810\u7B97 ${u(o.budget)}\uFF1A\u5DF2\u82B1 ${u(a.paid)}\uFF0C\u5F85\u8CB7 ${u(a.pending)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${u(a.pay)}</span><span class="${a.remaining<0?"text-danger":""}">${a.remaining<0?"\u5C07\u8D85\u652F":"\u8CB7\u5B8C\u5269"} ${u(Math.abs(a.remaining))}</span>`})}
    ${ve({label:"\u9810\u4F30\u514D\u7A05\u9000\u7A05",icon:"price_check",value:u(a.refund),foot:`<span>${a.eligibleStores} / ${a.taxFreeStores} \u5BB6\u5E97\u9054\u9580\u6ABB</span><span>\u2248 ${_(a.refund,t)}</span>`,tone:"kpi-cyan"})}
    ${ve({label:"\u8A17\u904B\u884C\u674E\uFF08\u76EE\u524D\uFF09",icon:"luggage",value:ee(a.totalCheckedNow,1),unit:` / ${o.checkedLimit} kg`,bar:lt([{value:o.checkedBase,tone:"base"},{value:a.weightCheckedNow,tone:"paid"},{value:a.weightChecked-a.weightCheckedNow,tone:"later"}],o.checkedLimit,`\u8A17\u904B\u9650\u91CD ${o.checkedLimit} \u516C\u65A4\uFF1A\u76EE\u524D ${ee(a.totalCheckedNow,1)}\uFF0C\u5168\u90E8\u8CB7\u5B8C ${ee(a.totalChecked,1)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${fe(a.totalChecked)}</span><span>${a.totalChecked>o.checkedLimit?'<b class="text-danger">\u8CB7\u5B8C\u6703\u8D85\u91CD</b>':`\u8CB7\u5B8C\u5269 ${fe(o.checkedLimit-a.totalChecked)}`}</span>`})}`}function cs(e){let a=[...new Set(e.map(t=>t.buyFor).filter(Boolean))].sort((t,o)=>t.localeCompare(o,"zh-Hant"));return L.who!=="all"&&L.who!=="__self__"&&!a.includes(L.who)&&(L.who="all"),`<div class="select-wrap">
    <label for="f-who" class="sr-only">\u5E6B\u8AB0\u8CB7</label>
    <select id="f-who">
      <option value="all">\u5168\u90E8\u5C0D\u8C61</option>
      <option value="__self__" ${L.who==="__self__"?"selected":""}>\u81EA\u7528</option>
      ${a.map(t=>`<option value="${d(t)}" ${L.who===t?"selected":""}>@${d(t)}</option>`).join("")}
    </select></div>`}function ds(){return`<div class="search">
    <label for="f-q" class="sr-only">\u641C\u5C0B\u5546\u54C1</label>
    ${i("search")}
    <input id="f-q" type="search" placeholder="\u641C\u5C0B\u54C1\u540D\u3001\u54C1\u724C\u3001\u5E97\u5BB6\u3001\u670B\u53CB\u2026" value="${d(L.q)}" autocomplete="off">
  </div>`}function ps(e,a){if(a==="store")return`<div class="card toolbar"><div class="filters filters-store">${ds()}${cs(e)}</div></div>`;let t=Object.fromEntries(Ne.map(s=>[s.id,0]));e.forEach(s=>{t[s.category]=(t[s.category]??0)+1});let o=[...new Set(e.map(s=>s.area||"\u672A\u6307\u5B9A"))].sort((s,r)=>s.localeCompare(r,"zh-Hant"));L.area!=="all"&&!o.includes(L.area)&&(L.area="all");let n=Ne.filter(s=>t[s.id]>0);return L.cat!=="all"&&!t[L.cat]&&(L.cat="all"),`
  <div class="card toolbar">
    <div class="chips" role="group" aria-label="\u4F9D\u5206\u985E\u7BE9\u9078">
      <button type="button" class="chip ${L.cat==="all"?"on":""}" data-cat="all" aria-pressed="${L.cat==="all"}">${i("diamond","sm")}\u5168\u90E8 (${e.length})</button>
      ${n.map(s=>`<button type="button" class="chip ${L.cat===s.id?"on":""}" data-cat="${s.id}" aria-pressed="${L.cat===s.id}">${i(s.icon,"sm")}${s.label} (${t[s.id]})</button>`).join("")}
    </div>
    <div class="filters">
      ${ds()}
      ${cs(e)}
      <div class="select-wrap">
        <label for="f-status" class="sr-only">\u72C0\u614B</label>
        <select id="f-status">
          <option value="all">\u5168\u90E8\u72C0\u614B</option>
          <option value="todo" ${L.status==="todo"?"selected":""}>\u5F85\u8CFC\u8CB7</option>
          <option value="done" ${L.status==="done"?"selected":""}>\u5DF2\u5165\u624B</option>
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-area" class="sr-only">\u5730\u5340</label>
        <select id="f-area">
          <option value="all">\u5168\u90E8\u5730\u5340</option>
          ${o.map(s=>`<option ${L.area===s?"selected":""}>${d(s)}</option>`).join("")}
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-sort" class="sr-only">\u6392\u5E8F</label>
        <select id="f-sort">
          <option value="new">\u6700\u65B0\u52A0\u5165</option>
          <option value="priority" ${L.sort==="priority"?"selected":""}>\u6E34\u671B\u7B49\u7D1A</option>
          <option value="price" ${L.sort==="price"?"selected":""}>\u50F9\u683C\u9AD8\u5230\u4F4E</option>
          <option value="area" ${L.sort==="area"?"selected":""}>\u5730\u5340\u8207\u5E97\u5BB6</option>
        </select>
      </div>
      <div class="seg" role="group" aria-label="\u986F\u793A\u65B9\u5F0F">
        <button type="button" class="icon-btn ${L.layout==="grid"?"on":""}" data-layout="grid" aria-pressed="${L.layout==="grid"}" aria-label="\u5361\u7247\u986F\u793A" title="\u5361\u7247\u986F\u793A">${i("grid_view")}</button>
        <button type="button" class="icon-btn ${L.layout==="list"?"on":""}" data-layout="list" aria-pressed="${L.layout==="list"}" aria-label="\u5217\u8868\u986F\u793A" title="\u5217\u8868\u986F\u793A">${i("view_list")}</button>
      </div>
    </div>
  </div>`}function us(e){return e.state.settings.listView==="store"?ts(e,Vt):kn(e)}function kn({state:e,sum:a,rate:t}){let o=wn(e.items,a.byItem),n=`<p class="result-count" role="status">\u986F\u793A ${o.length} / ${e.items.length} \u4EF6</p>`;return o.length?`${n}<div class="item-grid layout-${L.layout}">${o.map(s=>Ga(s,a.byItem.get(s.id),t,L.layout)).join("")}</div>`:`${n}<div class="card empty empty-sm"><p class="empty-text">\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5546\u54C1\u3002</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${i("filter_alt_off")}\u6E05\u9664\u7BE9\u9078</button></div>`}function Sn({state:e,sum:a}){let t=["\u72C0\u614B","\u54C1\u540D","\u65E5\u6587\u540D\u7A31","\u54C1\u724C","\u5206\u985E","\u6578\u91CF","\u5E6B\u8AB0\u8CB7","\u5019\u9078\u5E97\u92EA","\u8CFC\u8CB7\u5E97\u5BB6","\u5730\u5340","\u9810\u8A08\u65E5\u671F","\u5E97\u982D\u652F\u4ED8(JPY)","\u9810\u4F30\u9000\u7A05(JPY)","\u5BE6\u969B\u6210\u672C(JPY)","\u53F0\u5E63(\u7D04)","\u91CD\u91CF(kg)","\u884C\u674E","JAN","\u5099\u8A3B"],o={checked:"\u8A17\u904B",carry:"\u96A8\u8EAB",none:"\u4E0D\u653E\u884C\u674E"},n=e.items.map(r=>{let l=a.byItem.get(r.id);return[r.purchased?"\u5DF2\u5165\u624B":"\u5F85\u8CFC",r.name,r.nameJa,r.brand,Te(r.category).label,r.qty,r.buyFor,r.anyStore?"\u4E0D\u9650\u5E97\u92EA":r.stores.join("\u3001"),r.purchasedStore,r.area,r.planDate,l.pay,l.refund,l.net,Math.round(l.pay*e.settings.rate),l.weight,o[r.luggage],r.jan,r.note]}),s=[t,...n].map(r=>r.map(l=>`"${String(l??"").replace(/"/g,'""')}"`).join(",")).join(`\r
`);St(`shopping-list-${new Date().toISOString().slice(0,10)}.csv`,`\uFEFF${s}`,"text/csv")}function En(e,a){let t=a,o=()=>{e.dataset.view=t.state.settings.listView;let{state:s}=t,r=s.settings.listView,l=s.items.length>0,c=s.items.some(f=>f.demo);e.innerHTML=`
      ${Ae({eyebrow:`SHOPPING LIST \xB7 ${d(s.settings.tripName)}`,title:"\u63A1\u8CB7\u6E05\u55AE",sub:"\u884C\u524D\u898F\u5283\u3001\u73FE\u5834\u6383\u8CA8\u90FD\u5728\u9019\u9801\uFF1A\u9032\u5E97\u6642\u5207\u5230\u300C\u5E97\u92EA\u300D\u6253\u958B\u8A72\u5E97\u6E05\u55AE\u908A\u62FF\u908A\u52FE\uFF0C\u627E\u6771\u897F\u7528\u300C\u5206\u985E\u300D\u3002",actions:l?`
          <div class="seg seg-text view-switch" role="group" aria-label="\u6E05\u55AE\u8996\u89D2">
            <button type="button" data-view="store" class="${r==="store"?"on":""}" aria-pressed="${r==="store"}">${i("storefront","sm")}\u5E97\u92EA</button>
            <button type="button" data-view="category" class="${r==="category"?"on":""}" aria-pressed="${r==="category"}">${i("category","sm")}\u5206\u985E</button>
          </div>
          <button type="button" class="btn btn-ghost" data-export>${i("download")}\u532F\u51FA CSV</button>
          <button type="button" class="btn btn-gold" data-add>${i("add_circle")}\u65B0\u589E\u63A1\u8CFC\u9805\u76EE</button>`:""})}
      ${c?`<div class="notice notice-demo" role="note">${i("info")}<p>\u76EE\u524D\u6E05\u55AE\u542B<strong>\u793A\u7BC4\u8CC7\u6599</strong>\uFF0C\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u4E0D\u4EE3\u8868\u5BE6\u969B\u552E\u50F9\u3002</p>
        <button type="button" class="btn btn-sm btn-ghost" data-clear-demo>\u6E05\u9664\u793A\u7BC4\u8CC7\u6599</button></div>`:""}
      <div class="kpi-grid" data-region="kpi">${is(t)}</div>
      ${l?`<div data-region="toolbar">${ps(s.items,r)}</div><div data-region="grid">${us(t)}</div>`:Mt({title:"\u6E05\u55AE\u9084\u662F\u7A7A\u7684",text:"\u5148\u8A18\u4E0B\u7B2C\u4E00\u4EF6\u60F3\u8CB7\u7684\u5546\u54C1\u5427\u3002\u4E5F\u53EF\u4EE5\u8F09\u5165\u793A\u7BC4\u8CC7\u6599\uFF0C\u770B\u770B\u6574\u500B\u6D41\u7A0B\u600E\u9EBC\u904B\u4F5C\u3002",actions:`<button type="button" class="btn btn-gold" data-add>${i("add_circle")}\u65B0\u589E\u7B2C\u4E00\u4EF6</button>
                    <button type="button" class="btn btn-ghost" data-demo>${i("auto_awesome")}\u8F09\u5165\u793A\u7BC4\u8CC7\u6599</button>`})}`},n=()=>{let s=J('[data-region="grid"]',e);s&&(s.innerHTML=us(t))};return o(),Ve(e),as(e,{onMeta:Ra,filterFn:Vt}),e.addEventListener("click",s=>{let r=s.target.closest("button");if(r)if(r.matches("[data-add]"))ue();else if(r.matches("[data-demo]"))m.loadDemo(),M({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u96A8\u6642\u6E05\u9664\u3002"});else if(r.matches("[data-clear-demo]"))m.clearDemo(),M({title:"\u5DF2\u6E05\u9664\u793A\u7BC4\u8CC7\u6599",tone:"muted",duration:3e3});else if(r.matches("[data-export]"))Sn(t);else if(r.matches("[data-view]"))m.updateSettings({listView:r.dataset.view}),J(`[data-view="${r.dataset.view}"]`,e)?.focus();else if(r.matches("[data-cat]"))L.cat=r.dataset.cat,nt("[data-cat]",e).forEach(l=>{l.classList.toggle("on",l===r),l.setAttribute("aria-pressed",l===r)}),n();else if(r.matches("[data-layout]")){L.layout=r.dataset.layout;try{localStorage.setItem("shopping-relics:layout",L.layout)}catch{}nt("[data-layout]",e).forEach(l=>{l.classList.toggle("on",l===r),l.setAttribute("aria-pressed",l===r)}),n()}else r.matches("[data-reset-filter]")&&(Object.assign(L,{cat:"all",status:"all",area:"all",who:"all",q:""}),o())}),e.addEventListener("input",s=>{s.target.id==="f-q"&&(L.q=s.target.value,n())}),e.addEventListener("change",s=>{let r={"f-status":"status","f-area":"area","f-sort":"sort","f-who":"who"};r[s.target.id]&&(L[r[s.target.id]]=s.target.value,n())}),{update(s){t=s;let r=!!J('[data-region="toolbar"]',e),l=!!J(".notice-demo",e);if(e.dataset.view!==s.state.settings.listView||r!==s.state.items.length>0||l!==s.state.items.some(ne=>ne.demo)){o();return}let b=J('[data-region="kpi"]',e),h=Ge(b,".kpi-value");b.innerHTML=is(t),ze(b,".kpi-value",h);let k=J('[data-region="toolbar"]',e);k&&!k.contains(document.activeElement)&&(k.innerHTML=ps(t.state.items,t.state.settings.listView));let E=document.activeElement,g=E?.closest?.("[data-id]"),v=E?.closest?.("[data-group]"),y=v?`[data-group="${CSS.escape(v.dataset.group)}"] `:"",C=g?`${y}[data-id="${g.dataset.id}"] [data-act="${E.dataset.act}"]`:null;!C&&E?.matches?.("[data-sg-open]")&&(C=`${y}[data-sg-open]`),n(),C&&J(C,e)?.focus({preventScroll:!0})}}}var Xt={};et(Xt,{addExtra:()=>Yt,mount:()=>Mn});function fs(e,a){let t=e.settings.paidFriends[a.name];return typeof t=="number"?t:t?a.total:0}function Yt(e=""){ue(null,{buyFor:e,purchased:!0,mode:"extra"})}function bs(e,a){let t=new Map;for(let o of e.items){if(!o.buyFor)continue;t.has(o.buyFor)||t.set(o.buyFor,{name:o.buyFor,bought:[],pending:[],total:0,refund:0,pendingEst:0});let n=t.get(o.buyFor),s=a.byItem.get(o.id);o.purchased?(n.bought.push({item:o,amount:s.net,refund:s.refund,pay:s.pay}),n.total+=s.net,n.refund+=s.refund):(n.pending.push({item:o,amount:s.net}),n.pendingEst+=s.net)}return[...t.values()].sort((o,n)=>n.total-o.total||o.name.localeCompare(n.name,"zh-Hant"))}function Tn(e,a){let t=[`\u3010\u4EE3\u8CFC\u660E\u7D30\u3011${e.name}`];return e.bought.forEach(({item:o,amount:n},s)=>{t.push(`${s+1}. ${o.name}${o.qty>1?` \xD7${o.qty}`:""}\u3000${u(n)}`)}),t.push(`\u5408\u8A08 ${u(e.total)}\uFF08\u7D04 NT$ ${ee(e.total*a)}\uFF0C\u532F\u7387 1 JPY = ${ee(a,4)} TWD\uFF09`),e.refund&&t.push(`\uFF0A\u91D1\u984D\u70BA\u6263\u9664\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C\uFF08\u5DF2\u6263\u9000\u7A05 ${u(e.refund)}\uFF09`),e.paid>0&&e.paid<e.total&&t.push(`\u5DF2\u6536 ${u(e.paid)}\uFF0C\u5C1A\u5DEE ${u(e.total-e.paid)}`),e.pending.length&&t.push(`\u5C1A\u672A\u8CB7\u5230\uFF1A${e.pending.map(({item:o})=>o.name).join("\u3001")}`),t.join(`
`)}function gs({item:e,amount:a,refund:t,pay:o},n){return`
  <li class="split-row ${n?"":"is-pending"}" data-id="${e.id}">
    <button type="button" class="check ${n?"on":""}" data-act="toggle" role="checkbox" aria-checked="${n}"
      aria-label="${n?"\u5DF2\u8CB7\u5230":"\u6A19\u8A18\u8CB7\u5230"}\uFF1A${d(e.name)}">${i("check")}</button>
    <div class="split-main">
      <button type="button" class="split-name" data-act="open">${d(e.name)}${e.qty>1?` <small>\xD7 ${e.qty}</small>`:""}</button>
      <span class="split-at">${n?`${e.purchasedStore?d(e.purchasedStore):"\u672A\u8A18\u9304\u5E97\u5BB6"}${t?` \xB7 \u4ED8 ${u(o)}\uFF0C\u6263\u9000\u7A05 ${u(t)}`:""}`:`\u5F85\u8CB7 \xB7 ${e.anyStore?"\u4E0D\u9650\u5E97\u92EA":e.stores.length?d(e.stores.join("\u3001")):"\u672A\u9078\u5E97\u92EA"}`}</span>
    </div>
    <span class="split-amt ${n?"":"muted"}">${n?"":"\u7D04 "}${u(a)}</span>
    <div class="split-tools">
      <button type="button" class="icon-btn icon-btn-sm" data-act="edit" aria-label="\u7DE8\u8F2F ${d(e.name)}" title="\u7DE8\u8F2F">${i("edit","sm")}</button>
      <button type="button" class="icon-btn icon-btn-sm icon-btn-danger" data-act="delete" aria-label="\u522A\u9664 ${d(e.name)}" title="\u522A\u9664">${i("delete","sm")}</button>
    </div>
  </li>`}function An(e,a,t){let{rate:o}=a.settings,n=e.paid,s=e.total>0&&n>=e.total,r=n>0&&n<e.total,l;return s?l=`<span class="badge badge-cyan">${i("check_circle","sm")}\u5DF2\u6536\u9F4A ${u(n)}</span>`:r?l=`<span class="badge badge-warn">\u5DF2\u6536 ${u(n)}\uFF0C\u5C1A\u5DEE ${u(e.total-n)}</span>`:l=e.total?'<span class="badge badge-muted">\u5C1A\u672A\u6536\u6B3E</span>':"",`
  <section class="card friend-card ${s?"is-paid":""}" data-friend="${d(e.name)}" aria-labelledby="fr-${t}">
    <header class="card-head">
      <div class="friend-title">
        <span class="friend-avatar" aria-hidden="true">${d(e.name.slice(0,1))}</span>
        <div>
          <h2 id="fr-${t}" class="section-title-lg">@${d(e.name)}</h2>
          <p class="muted small">\u5DF2\u8CB7 ${e.bought.length} \u4EF6${e.pending.length?` \xB7 \u5F85\u8CB7 ${e.pending.length} \u4EF6\uFF08\u7D04 ${u(e.pendingEst)}\uFF09`:""}</p>
        </div>
      </div>
      <div class="friend-total">
        <span class="k">\u61C9\u6536</span>
        <strong>${u(e.total)}</strong>
        <span class="s">\u2248 ${_(e.total,o)}</span>
      </div>
    </header>
    ${l?`<div class="pay-state">${l}</div>`:""}
    ${e.bought.length?`<ul class="split-list">${e.bought.map(c=>gs(c,!0)).join("")}</ul>`:'<p class="muted pad">\u9084\u6C92\u6709\u8CB7\u5230\u7684\u5546\u54C1\u3002</p>'}
    ${e.pending.length?`<p class="split-sub">${i("pending","sm")}\u9084\u6C92\u8CB7\u5230</p><ul class="split-list">${e.pending.map(c=>gs(c,!1)).join("")}</ul>`:""}
    <button type="button" class="btn btn-ghost btn-sm split-extra" data-extra>${i("add_circle","sm")}\u81E8\u6642\u52A0\u8CFC\uFF08\u5E6B @${d(e.name)} \u52A0\u8CB7\uFF09</button>
    <div class="friend-actions">
      <button type="button" class="btn ${s?"btn-ghost":"btn-gold"}" data-copy ${e.bought.length?"":"disabled"}>${i("content_copy")}\u8907\u88FD\u660E\u7D30</button>
      ${e.total?s?`<button type="button" class="btn btn-ghost" data-unpaid>${i("undo")}\u53D6\u6D88\u5DF2\u6536\u6B3E</button>`:`<button type="button" class="btn btn-outline" data-paid>${i("check_circle")}${r?`\u6536\u9F4A\u5DEE\u984D ${u(e.total-n)}`:`\u6A19\u8A18\u5DF2\u6536 ${u(e.total)}`}</button>`:""}
      ${navigator.share?`<button type="button" class="btn btn-ghost" data-share ${e.bought.length?"":"disabled"}>${i("share")}\u5206\u4EAB</button>`:""}
    </div>
  </section>`}function ms({state:e,sum:a}){let t=bs(e,a);t.forEach(l=>{l.paid=fs(e,l)});let{rate:o}=e.settings;if(!t.length)return Mt({title:"\u9084\u6C92\u6709\u4EE3\u8CFC\u5546\u54C1",text:"\u65B0\u589E\u5546\u54C1\u6642\u5728\u300C\u5E6B\u8AB0\u8CB7\u300D\u586B\u4E0A\u670B\u53CB\u540D\u5B57\uFF0C\u6216\u76F4\u63A5\u6309\u300C\u81E8\u6642\u52A0\u8CFC\u300D\u8A18\u4E0B\u525B\u5E6B\u670B\u53CB\u8CB7\u7684\u6771\u897F\uFF0C\u9019\u88E1\u5C31\u6703\u81EA\u52D5\u4F9D\u4EBA\u52A0\u7E3D\u3001\u63DB\u7B97\u53F0\u5E63\u3002",actions:`<button type="button" class="btn btn-gold" data-extra-new>${i("add_circle")}\u81E8\u6642\u52A0\u8CFC</button>
                <a class="btn btn-ghost" href="#/list">${i("shopping_bag")}\u56DE\u63A1\u8CB7\u6E05\u55AE</a>`});let n=t.reduce((l,c)=>l+c.total,0),s=t.reduce((l,c)=>l+Math.min(c.paid,c.total),0),r=t.reduce((l,c)=>l+c.pending.length,0);return`
  <div class="kpi-grid">
    ${ve({label:"\u4EE3\u8CFC\u7E3D\u984D\uFF08\u5DF2\u8CB7\uFF09",icon:"payments",value:u(n),foot:`<span>\u2248 ${_(n,o)}</span>`})}
    ${ve({label:"\u5DF2\u6536\u6B3E",icon:"check_circle",value:u(s),foot:`<span>\u2248 ${_(s,o)}</span>`,tone:"kpi-cyan"})}
    ${ve({label:"\u5F85\u6536\u6B3E",icon:"pending",value:u(n-s),foot:`<span>\u2248 ${_(n-s,o)}</span>`})}
    ${ve({label:"\u8A17\u8CB7\u670B\u53CB",icon:"group",value:t.length,unit:" \u4F4D",foot:`<span>${r?`\u9084\u6709 ${r} \u4EF6\u5F85\u8CB7`:"\u5168\u90E8\u8CB7\u9F4A"}</span>`})}
  </div>
  <div class="notice" role="note">${i("info")}<p>\u91D1\u984D\u4F9D<strong>\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C</strong>\u8A08\u7B97\uFF0C\u4EE5\u76EE\u524D\u532F\u7387\u63DB\u7B97\u53F0\u5E63\u3002\u9000\u7A05\u70BA\u9810\u4F30\u503C\uFF0C\u5BE6\u969B\u4EE5\u51FA\u5883\u67E5\u9A57\u5F8C\u7684\u9000\u6B3E\u70BA\u6E96\u3002\u6536\u6B3E\u5F8C\u53C8\u52A0\u8CB7\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u300C\u5C1A\u5DEE\u300D\u91D1\u984D\u3002</p></div>
  <div class="friend-grid">${t.map((l,c)=>An(l,e,c)).join("")}</div>`}function Mn(e,a){let t=a;e.innerHTML=`
    ${Ae({eyebrow:"PROXY LEDGER \xB7 \u4EE3\u8CFC\u5206\u5E33",title:"\u4EE3\u8CFC\u5206\u5E33",sub:"\u4E3B\u6E05\u55AE\u6A19\u4E86 @\u670B\u53CB \u7684\u5546\u54C1\u6703\u81EA\u52D5\u6574\u7406\u5728\u9019\u88E1\uFF1B\u53EF\u76F4\u63A5\u52FE\u9078\u3001\u7DE8\u8F2F\uFF0C\u6216\u81E8\u6642\u52A0\u8CFC\uFF0C\u56DE\u98EF\u5E97\u6216\u56DE\u570B\u5F8C\u4E00\u9375\u8907\u88FD\u660E\u7D30\u50B3\u7D66\u670B\u53CB\u3002",actions:`<button type="button" class="btn btn-gold" data-extra-new>${i("add_circle")}\u81E8\u6642\u52A0\u8CFC</button>`})}
    <div data-region="main">${ms(t)}</div>`;let o=J('[data-region="main"]',e),n=r=>{let l=bs(t.state,t.sum).find(c=>c.name===r.closest("[data-friend]")?.dataset.friend);return l&&(l.paid=fs(t.state,l)),l};Ve(e);let s=(r,l)=>m.updateSettings({paidFriends:{...t.state.settings.paidFriends,[r]:l}});return e.addEventListener("click",async r=>{let l=r.target.closest("button");if(!l||l.closest("[data-id]"))return;if(l.matches("[data-extra-new]")){Yt();return}let c=n(l);if(!c)return;if(l.matches("[data-extra]")){Yt(c.name);return}if(l.matches("[data-paid]")){s(c.name,c.total),M({title:`@${c.name} \u5DF2\u6536\u6B3E`,message:`\u5171 ${u(c.total)}`,tone:"muted",duration:2500});return}if(l.matches("[data-unpaid]")){s(c.name,0);return}let f=Tn(c,t.state.settings.rate);if(l.matches("[data-copy]"))try{await navigator.clipboard.writeText(f),M({title:`\u5DF2\u8907\u88FD @${c.name} \u7684\u660E\u7D30`,message:"\u8CBC\u5230 LINE \u6216\u8A0A\u606F\u50B3\u7D66\u670B\u53CB\u5373\u53EF\u3002",tone:"muted",duration:3e3})}catch{M({title:"\u7121\u6CD5\u8907\u88FD",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\u3002",tone:"error"})}else if(l.matches("[data-share]"))try{await navigator.share({title:`\u4EE3\u8CFC\u660E\u7D30\uFF1A${c.name}`,text:f})}catch{}}),{update(r){t=r;let l=document.activeElement,c=l?.closest?.("[data-friend]")?.dataset.friend,f=l?.closest?.("[data-id]"),b=null;if(c&&f)b=`[data-id="${f.dataset.id}"] [data-act="${l.dataset.act}"]`;else if(c){let k=["data-paid","data-unpaid","data-copy","data-share","data-extra"].find(g=>l.hasAttribute(g)),E={"data-paid":"[data-unpaid], [data-paid]","data-unpaid":"[data-paid], [data-unpaid]"}[k];b=`[data-friend="${CSS.escape(c)}"] :is(${E??`[${k}]`})`}let h=Ge(o,".kpi-value");o.innerHTML=ms(t),ze(o,".kpi-value",h),b&&J(b,o)?.focus({preventScroll:!0})}}}var Zt={};et(Zt,{mount:()=>Bn});var Ln="2026/11/7",vs="shopping-relics:guide-tab",Cn=([e,a])=>`<a href="${a}" target="_blank" rel="noopener">${e}<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`,Xe=e=>`<p class="source">\u8CC7\u6599\u4F86\u6E90\uFF1A${e.map(Cn).join("\u3001")}</p>`,K={jta:["\u65E5\u672C\u89C0\u5149\u5EF3\u3008What is the Refund Method?\u3009","https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html"],jtaFaq:["\u65E5\u672C\u89C0\u5149\u5EF3\u3008\u65C5\u5BA2\u5E38\u898B\u554F\u984C\u3009","https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html"],jtaPdf:["\u65E5\u672C\u89C0\u5149\u5EF3 \u65B0\u5236\u8AAA\u660E\uFF08PDF\uFF09","https://www.mlit.go.jp/kankocho/tax-free/content/001978459.pdf"],jnto:["JNTO\u3008Japan's new tax-free shopping system\u3009","https://www.japan.travel/en/us/blog/everything-you-need-to-know-japans-new-tax-free-shopping-system/"],linshibi:["\u6797\u6C0F\u74A7\u3008\u65E5\u672C\u514D\u7A05\u65B0\u5236\u5EA6\u3009","https://linshibi.com/?p=48616"],newtalk:["\u65B0\u982D\u6BBC\u30086 \u5927\u9000\u7A05\u516C\u53F8\u6536\u8CBB\u4E00\u6B21\u770B\u3009\uFF082026/11/1\uFF09","https://newtalk.tw/news/view/2026-11-01/1068651"],ayaca:["ayaca\u3008\u65E5\u672C\u9000\u7A05\u5E73\u53F0\u6BD4\u8F03\u3009","https://ayaca.tw/japan-tax-refund-apps/"],apps:["jptaxrefund.com\u3008Japan Tax Refund Apps 2026\u3009","https://jptaxrefund.com/blog/japan-tax-refund-apps"],rojico:["Rojico\u30088 \u6A5F\u5834\u73FE\u91D1\u9000\u7A05\u9EDE\u3009","https://rojico.com/en/blog/japan-tax-free-refund-method-airport-guide-2026/"],sth:["\u661F\u5CF6\u3008Cash Japan \u8207 Self Tax Refund \u6BD4\u8F03\u3009","https://www.stheadline.com/travel/3628833/"],moodie:["Moodie Davitt\u3008Cash Japan\u3009","https://moodiedavittreport.com/global-blue-establishes-cash-japan-at-japanese-airports-as-new-tax-free-shopping-refund-system-kicks-in/"],bnext:["\u6578\u4F4D\u6642\u4EE3\u3008Global Blue \u5148\u588A\u9322\u3009","https://www.bnext.com.tw/article/92860/japan-tax-free-refund-2026-yodobashi-global-blue"],getaround:["Get Around Japan\u3008Tax Refund Fees 2026\u3009","https://www.getaroundjapan.jp/?p=11496"],chinatimes:["\u4E2D\u6642\u3008\u5510\u5409\u8A36\u5FB7\u624B\u7E8C\u8CBB 0 \u5143\u3009","https://www.chinatimes.com/realtimenews/20261006001646-260405"],ettoday:["ETtoday\u3008Bic Camera \u624B\u7E8C\u8CBB 0 \u5143\u3009","https://travel.ettoday.net/article/3251542.htm"]};function Pn(){return`
    <ol class="g-steps">
      ${[["\u51FA\u767C\u524D","event",`<ul>
      <li>\u5148\u5728 <strong>Visit Japan Web</strong> \u767B\u9304\u8B77\u7167\uFF1B\u6210\u7530\u3001\u7FBD\u7530\u3001\u95DC\u897F\u3001\u4E2D\u90E8\u3001\u65B0\u5343\u6B72\u3001\u798F\u5CA1\u3001\u90A3\u9738\u53EF\u5728\u6A5F\u5834\u5148\u4E0A\u7DB2\u8FA6\u90E8\u5206\u624B\u7E8C\u3002</li>
      <li>\u60F3\u7528\u4FE1\u7528\u5361\u9000\u6B3E\u7684\u8A71\uFF0C<strong>JPrefund\u3001PIE VAT\u3001Global Blue</strong> \u53EF\u4EE5\u51FA\u767C\u524D\u5148\u8A3B\u518A\u5E33\u865F\u3001\u7D81\u597D\u5361\uFF08J-TaxRefund \u8981\u8CB7\u904E\u6771\u897F\u624D\u80FD\u8A3B\u518A\uFF09\u3002</li>
      <li>\u6E96\u5099\u4E00\u5F35<strong>\u82F1\u6587\u59D3\u540D\u8207\u8B77\u7167\u4E00\u81F4</strong>\u7684\u4FE1\u7528\u5361\uFF0C\u4EE5\u53CA\u80FD\u6536\u7C21\u8A0A\u9A57\u8B49\u78BC\u7684\u624B\u6A5F\u865F\u78BC\u3002</li></ul>`],["\u7D50\u5E33\u6642","shopping_bag",`<ul>
      <li>\u51FA\u793A\u8B77\u7167\uFF0C<strong>\u5148\u4ED8\u542B\u7A05\u50F9</strong>\u3002\u540C\u4E00\u5929\u3001\u540C\u4E00\u5BB6\u5E97\u672A\u7A05\u5408\u8A08 ${u(q)} \u4EE5\u4E0A\u624D\u80FD\u8FA6\u3002</li>
      <li>\u554F\u5E97\u54E1\u5169\u4EF6\u4E8B\uFF1A<strong>\u7528\u54EA\u5BB6\u9000\u7A05\u516C\u53F8</strong>\u3001<strong>\u624B\u7E8C\u8CBB\u591A\u5C11</strong>\u3002</li>
      <li>\u4F9D\u6307\u793A\u6383\u6536\u64DA\u4E0A\u7684 QR code\uFF08\u6216\u8F38\u5165\u4EE3\u78BC\uFF09\uFF0C\u5728\u8A72\u516C\u53F8\u7DB2\u9801\uFF0FApp \u767B\u8A18\u9000\u6B3E\u65B9\u5F0F\uFF1BPIE VAT \u6709\u4E9B\u5E97<strong>\u8981\u7576\u5929\u5728 App \u5B8C\u6210</strong>\u3002</li>
      <li>\u6536\u64DA\u8207 QR code \u4E00\u5B9A\u8981\u7559\u8457\uFF0C\u5546\u54C1\u4E0D\u8981\u5728\u65E5\u672C\u62C6\u958B\u4F7F\u7528\u3002</li></ul>`],["\u6A5F\u5834\uFF0C\u8A17\u904B\u524D","flight_takeoff",`<ul>
      <li>\u8CFC\u8CB7\u5F8C <strong>90 \u5929\u5167</strong>\uFF0C\u5728<strong>\u6700\u5F8C\u96E2\u958B\u65E5\u672C\u7684\u6A5F\u5834</strong>\u8FA6\u7406\uFF08\u4F8B\u5982\u570B\u5167\u7DDA\u8F49\u6A5F\uFF0C\u8981\u5728\u6700\u5F8C\u51FA\u5883\u7684\u6A5F\u5834\u8FA6\uFF09\u3002</li>
      <li>\u5230\u51FA\u5883\u5927\u5EF3\u7684<strong>\u514D\u7A05\u624B\u7E8C\u6A5F\u53F0\u5237\u8B77\u7167</strong>\uFF1A\u7DA0\u71C8\u5B8C\u6210\uFF1B\u7D05\u71C8\u5E36\u5546\u54C1\u5230\u6D77\u95DC\u6AA2\u67E5\u5340\u3002</li>
      <li>\u6D77\u95DC<strong>\u4EE5\u6536\u64DA\u70BA\u55AE\u4F4D</strong>\u67E5\u9A57\uFF1A\u540C\u4E00\u5F35\u6536\u64DA\u5C11\u4E00\u4EF6\uFF0C\u6574\u5F35\u90FD\u4E0D\u80FD\u9000\u3002</li>
      <li><strong>\u78BA\u8A8D\u5B8C\u624D\u53BB\u8A17\u904B</strong>\uFF0C\u884C\u674E\u8A17\u904B\u5F8C\u5C31\u62FF\u4E0D\u56DE\u4F86\u8FA6\u4E86\u3002\u5728\u65E5\u672C\u7528\u6389\u7684\u5546\u54C1\uFF0C\u6539\u5411\u6D77\u95DC\u6AC3\u6AAF\u8AAA\u660E\u3002</li></ul>`],["\u9818\u9000\u6B3E","payments",`<ul>
      <li><strong>\u4FE1\u7528\u5361\uFF0F\u96FB\u5B50\u652F\u4ED8</strong>\uFF1A\u6D77\u95DC\u78BA\u8A8D\u5F8C\u7531\u9000\u7A05\u516C\u53F8\u9000\u56DE\uFF0C\u5165\u5E33\u7D04\u6578\u5929\u5230\u5169\u500B\u6708\u4E0D\u7B49\u3002</li>
      <li><strong>\u6A5F\u5834\u73FE\u91D1</strong>\uFF1A\u51FA\u5883\u5F8C\uFF08\u6210\u7530\u90E8\u5206\u5728\u51FA\u5883\u524D\uFF09\u5230 Cash JAPAN \u6216 Self Tax Refund \u6A5F\u53F0\u9818\u65E5\u5713\uFF0C\u53E6\u6536\u670D\u52D9\u8CBB\u3002</li>
      <li>\u9000\u6B3E\u7531<strong>\u9000\u7A05\u516C\u53F8</strong>\u652F\u4ED8\uFF0C<strong>\u6D77\u95DC\u4E0D\u767C\u9322</strong>\u3002</li></ul>`]].map(([a,t,o],n)=>`
        <li class="g-step"><span class="g-step-no" aria-hidden="true">${n+1}</span>
          <div><h3>${i(t,"sm")}${a}</h3>${o}</div></li>`).join("")}
    </ol>
    <div class="g-callout">${i("lightbulb","sm")}<p><strong>\u5E38\u898B\u5931\u8AA4\uFF1A</strong>\u5148\u8A17\u904B\u624D\u60F3\u5230\u8981\u9000\u7A05\u3001\u514D\u7A05\u54C1\u88AB\u585E\u9032\u8A17\u904B\u884C\u674E\u3001\u540C\u4E00\u5F35\u6536\u64DA\u7684\u6771\u897F\u5206\u958B\u653E\u3001\u5728 90 \u5929\u5F8C\u624D\u51FA\u5883\u3001\u5728\u570B\u5167\u7DDA\u6A5F\u5834\u5148\u8FA6\u624B\u7E8C\u3002\u9019\u4E9B\u60C5\u6CC1\u90FD\u62FF\u4E0D\u5230\u9000\u6B3E\u3002</p></div>
    ${Xe([K.jta,K.jtaFaq,K.jnto,K.jtaPdf])}`}var In=[{name:"J-TaxRefund",co:"J&J Tax Free",site:"j-taxrefund.com",stores:"\u5510\u5409\u8A36\u5FB7\u3001Bic Camera\u3001\u591A\u6176\u5C4B\u3001\u9DB4\u7FBD\u85E5\u599D\u3001\u677E\u672C\u6E05\u3001GU\u3001\u6771\u6B66\u767E\u8CA8\u3001\u4F0A\u85E4\u6D0B\u83EF\u5802",rows:[["\u5F62\u5F0F","\u7DB2\u9801\uFF0C\u4E0D\u7528\u4E0B\u8F09 App\uFF1B\u6709\u7E41\u9AD4\u4E2D\u6587"],["\u8A3B\u518A","<strong>\u8CB7\u904E\u624D\u80FD\u8A3B\u518A</strong>\uFF1A\u7D50\u5E33\u5F8C\u6383\u6536\u64DA QR code\uFF0C\u586B\u8B77\u7167\u3001\u806F\u7D61\u65B9\u5F0F\u3001\u9000\u6B3E\u65B9\u5F0F\uFF0C\u7C21\u8A0A\u9A57\u8B49\u3002\u4E4B\u5F8C\u5728\u5176\u4ED6 J-TaxRefund \u5E97\u5BB6\u4E0D\u7528\u91CD\u586B"],["\u9000\u6B3E\u65B9\u5F0F","\u4FE1\u7528\u5361\u3001\u7C3D\u5E33\u5361\u3001\u652F\u4ED8\u5BF6\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u6A5F\u5834\u73FE\u91D1\uFF1B\u9280\u884C\u532F\u6B3E\u9650\u91D1\u984D\u8F03\u5927\u7684\u9000\u6B3E"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 180 \u5929"],["\u5165\u5E33","\u6578\u9031\u5230\u7D04\u5169\u500B\u6708"],["\u63D0\u9818\u8CBB\u7528","\u6A5F\u5834\u9818\u73FE\u91D1\u7D04 1.1%\uFF1BVisa \u5361 \xA52,000 \u4EE5\u4E0B\u7684\u9000\u6B3E\u6BCF\u7B46\u7D04 US$0.70"]]},{name:"JPrefund",co:"Smart Detax\uFF08Smart Technologies & Resources\uFF09",site:"jprefund.com",stores:"3COINS\u3001\u963F\u5361\u5C07\u672C\u8216\u3001\u601D\u5922\u6A02\u3001MURASAKI SPORTS\u3001GRAND FRONT OSAKA",rows:[["\u5F62\u5F0F","\u7DB2\u9801"],["\u8A3B\u518A","<strong>\u53EF\u51FA\u767C\u524D\u5148\u8A3B\u518A</strong>\uFF1A\u767B\u9304\u8B77\u7167\u3001\u7D81\u4FE1\u7528\u5361\uFF1B\u4E4B\u5F8C\u5728\u5E97\u88E1\u51FA\u793A\u8B77\u7167\uFF0C\u8CFC\u8CB7\u7D00\u9304\u6703\u81EA\u52D5\u9023\u5230\u5E33\u865F"],["\u9000\u6B3E\u65B9\u5F0F","\u4FE1\u7528\u5361\uFF08\u76EE\u524D\u4EE5 Visa\u3001Mastercard \u70BA\u4E3B\uFF09\u3001\u6A5F\u5834\u73FE\u91D1\uFF08\u6BCF\u8D9F\u4E0A\u9650 \xA5100,000\uFF09\uFF1B\u53F0\u5E63\u5E33\u6236\u4E0D\u80FD\u9078\u9280\u884C\u532F\u6B3E"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 200 \u5929\uFF0C\u56DE\u570B\u5F8C\u4E5F\u80FD\u7533\u8ACB"],["\u63D0\u9818\u8CBB\u7528","\u9280\u884C\u6216\u91D1\u6D41\u624B\u7E8C\u8CBB\uFF1B\u6709\u5831\u5C0E\u6307\u51FA\u53E6\u52A0\u9000\u7A05\u984D\u7D04 5% \u7684\u532F\u6B3E\u624B\u7E8C\u8CBB\uFF08\u5F85\u78BA\u8A8D\uFF09"]]},{name:"Global Blue",co:"Global Blue TFS Japan",site:"App\u300CShop Tax Free\u300D",stores:"\u9AD8\u5CF6\u5C4B\u3001\u5927\u4E38\uFF0F\u677E\u5742\u5C4B\u7B49\u767E\u8CA8\u3001Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09\u3001EDION",rows:[["\u5F62\u5F0F","App\u300CShop Tax Free\u300D\u6216\u7DB2\u9801\uFF1B\u4ECB\u9762\u7121\u7E41\u9AD4\u4E2D\u6587\uFF08\u6709\u7C21\u4E2D\u3001\u82F1\u3001\u65E5\uFF09"],["\u8A3B\u518A","\u53EF\u51FA\u767C\u524D\u5148\u5728 App \u52A0\u5165\u4FE1\u7528\u5361\u6216\u96FB\u5B50\u9322\u5305"],["\u9000\u6B3E\u65B9\u5F0F","Visa\u3001Mastercard\u3001AMEX\u3001JCB\u3001\u9280\u806F\u3001\u652F\u4ED8\u5BF6\u7B49\uFF1B\u6A5F\u5834 Cash JAPAN \u53EF\u9818\u73FE\u91D1"],["\u5E02\u5340\u5148\u9818\u73FE\u91D1","Yodobashi \u7B49 11 \u5BB6\u5927\u578B\u9580\u5E02\u53EF<strong>\u51FA\u5883\u524D\u5148\u9818\u73FE\u91D1</strong>\uFF08\u4E0D\u9650\u5728 Yodobashi \u8CB7\u7684\uFF0CGlobal Blue \u52A0\u76DF\u5E97\u7684\u4EA4\u6613\u90FD\u53EF\u4EE5\uFF09\uFF0C\u4F46\u8981<strong>\u767B\u8A18\u4FE1\u7528\u5361\u64D4\u4FDD</strong>\uFF0C\u51FA\u5883\u6C92\u5B8C\u6210\u6D77\u95DC\u78BA\u8A8D\u6703\u5F9E\u5361\u6263\u56DE"],["\u671F\u9650","<strong>\u96E2\u958B\u65E5\u672C\u5F8C 3 \u9031\u5167</strong>\u8981\u6307\u5B9A\u9000\u6B3E\u65B9\u5F0F\uFF0C\u5426\u5247\u6539\u5BC4\u9810\u4ED8\u5361\uFF08\u6703\u6263\u8CBB\uFF09\uFF1B\u6D77\u95DC\u78BA\u8A8D\u5F8C 3 \u500B\u6708\u5167\u6709\u6548"],["\u5165\u5E33","\u6D77\u95DC\u78BA\u8A8D\u5F8C\u7D04 3\uFF5E5 \u5929"]]},{name:"PIE VAT",co:"Pie Systems Japan",site:"App\u300CPIE VAT\u300D",stores:"\u4E09\u4E95 Outlet Park\u3001LaLaport\u3001\u6F80\u8C37 109\u3001Montbell",rows:[["\u5F62\u5F0F","App\uFF08iOS\uFF0FAndroid\uFF09\u6216\u7DB2\u9801"],["\u8A3B\u518A","\u53EF\u51FA\u767C\u524D\u5EFA\u7ACB\u5E33\u865F\u3001\u6383\u8B77\u7167\uFF1B\u7D50\u5E33\u5F8C\u6383\u5E97\u5BB6 QR code \u6216\u8F38\u5165 6 \u78BC\u7533\u8ACB\u4EE3\u78BC\u3002<strong>\u90E8\u5206\u5E97\u5BB6\u8981\u7576\u5929\u5B8C\u6210</strong>"],["\u9000\u6B3E\u65B9\u5F0F","\u53F0\u7063\u65C5\u5BA2\u4EE5\u4FE1\u7528\u5361\u6216\u7C3D\u5E33\u91D1\u878D\u5361\u70BA\u4E3B\uFF1B<strong>\u4E0D\u652F\u63F4\u6A5F\u5834\u73FE\u91D1</strong>"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 18 \u500B\u6708"],["\u5165\u5E33","\u7D04 5\uFF5E15 \u500B\u5DE5\u4F5C\u5929"],["\u63D0\u9818\u8CBB\u7528","\u670D\u52D9\u8CBB 1.5%\uFF5E3%\uFF0B\u63D0\u9818\u8CBB\u7D04\u672A\u7A05\u50F9 0.28%\uFF5E0.32%\uFF08\u4F9D\u5E97\u5BB6\u6216\u5546\u5834\uFF09"]]},{name:"Global Tax Free-Planet",co:"Planet",site:"\u4F9D\u5E97\u5BB6\u8AAA\u660E",stores:"AEON \u6C38\u65FA\u5922\u6A02\u57CE",rows:[["\u9000\u6B3E\u65B9\u5F0F","\u4F9D\u5E97\u5BB6\u8AAA\u660E\uFF1B\u6A5F\u5834\u53EF\u7528 Self Tax Refund \u6A5F\u53F0\u9818\u73FE\u91D1"],["\u5E97\u5BB6\u624B\u7E8C\u8CBB","AEON \u56DE\u5831\u70BA 1.5%"]]},{name:"Ocean Tax Refund",co:"Ocean",site:"App\u3001\u7DB2\u9801\u3001\u5FAE\u4FE1\uFF0FLINE \u5C0F\u7A0B\u5F0F",stores:"Animate\uFF08\u5B89\u5229\u7F8E\u7279\uFF09",rows:[["\u9000\u6B3E\u65B9\u5F0F","\u9280\u884C\u3001\u4FE1\u7528\u5361\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u652F\u4ED8\u5BF6\u3001PayPal\u3001\u6A5F\u5834\u65E5\u5713\u73FE\u91D1"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 180 \u5929"],["\u63D0\u9818\u8CBB\u7528","\u9000\u56DE\u4FE1\u7528\u5361\u6700\u4F4E \xA5180 \u6216\u672A\u7A05\u50F9 0.5%\uFF08\u7B2C\u4E09\u65B9\u63D0\u9818\u8CBB\uFF09"]]}];function Nn(){return`
    <p class="g-lead">\u540C\u4E00\u5BB6\u5E97\u901A\u5E38\u53EA\u7528\u4E00\u5BB6\u9000\u7A05\u516C\u53F8\uFF0C\u7D50\u5E33\u6642\u770B\u6536\u64DA\u6216\u554F\u5E97\u54E1\u5C31\u77E5\u9053\u3002\u4EE5\u4E0B\u300C\u5E38\u898B\u5E97\u5BB6\u300D\u70BA 11/1 \u4E0A\u8DEF\u5F8C\u7684\u56DE\u5831\u6574\u7406\uFF0C\u53EF\u80FD\u8B8A\u52D5\u3002</p>
    <div class="g-ops">
      ${In.map(e=>`
        <details class="g-op">
          <summary>
            <span class="g-op-name">${e.name}<small>${e.co}</small></span>
            <span class="g-op-stores">${e.stores}</span>
            <span class="g-op-chev" aria-hidden="true">${i("expand_more","sm")}</span>
          </summary>
          <dl class="g-dl">
            <div><dt>\u5E73\u53F0</dt><dd>${e.site}</dd></div>
            ${e.rows.map(([a,t])=>`<div><dt>${a}</dt><dd>${t}</dd></div>`).join("")}
          </dl>
        </details>`).join("")}
    </div>
    <div class="g-callout">${i("info","sm")}<p>\u5176\u4ED6\u9084\u6709 AddSmart\u3001LINKTIVITY\u3001IntaSect\u3001SAMURAI TAX \u7B49\u696D\u8005\uFF0C\u65E5\u672C\u5168\u570B\u514D\u7A05\u5E97\u5354\u6703\u5217\u51FA\u7684\u5171\u7D04 12 \u5BB6\u3002\u9047\u5230\u4E0D\u719F\u7684\u516C\u53F8\uFF0C\u4EE5\u6536\u64DA\u4E0A\u7684\u8AAA\u660E\u70BA\u6E96\u3002</p></div>
    ${Xe([K.ayaca,K.apps,K.newtalk,K.linshibi,K.bnext])}`}var jn=[["\u6210\u7530","T1 \u5357\uFF0F\u5317\u7FFC 3F\u3001T2 3F\u3001T3 3F","Cash JAPAN","\u6AC3\u53F0 6:00\u201323:00\uFF08T3 \u81F3 22:00\uFF09\uFF1B\u6A5F\u53F0 24 \u5C0F\u6642"],["\u6210\u7530","T1 \u4E2D\u592E\u5927\u6A13 4F\u3001T2 \u672C\u9928 3F\uFF08<strong>\u51FA\u5883\u524D</strong>\uFF09","Self Tax Refund","6:00\u201324:00"],["\u7FBD\u7530","T2 \u570B\u969B\u7DDA\u3001T3 3F \u51FA\u5883\u5F8C\uFF08\u5404 5 \u53F0\uFF09","Self Tax Refund","T2 6:45\u2013\u7FCC 1:30\uFF1BT3 24 \u5C0F\u6642"],["\u95DC\u897F","T1 \u51FA\u5883\u5F8C\uFF0816 \u53F0\uFF0B\u6AC3\u53F0\uFF09\u3001T2 1F \u51FA\u5883\u5F8C\uFF085 \u53F0\uFF09","Cash JAPAN","T1 \u6AC3\u53F0 7:00\u201324:00"],["\u4E2D\u90E8","T1 3F \u514D\u7A05\u5340\uFF08\u7B2C 20 \u767B\u6A5F\u9580\u9644\u8FD1\uFF09\u3001T2 2F \u51FA\u5883\u5F8C","Cash JAPAN","T1 7:00\u201322:15\uFF1BT2 10:00\u201321:30"],["\u798F\u5CA1","\u570B\u969B\u7DDA 3F \u51FA\u5883\u5F8C\u514D\u7A05\u5340","Cash JAPAN","\u6A5F\u53F0 6:00\u201321:00\uFF1B\u6AC3\u53F0 7:00\u201321:00"],["\u65B0\u5343\u6B72","\u570B\u969B\u7DDA 3F","Cash JAPAN","\u6AC3\u53F0 7:00\u201320:00\uFF1B\u6A5F\u53F0 6:00\u201320:30"],["\u795E\u6236","T2 1F \u51FA\u5883\u5F8C\uFF082 \u53F0\uFF09","Cash JAPAN","24 \u5C0F\u6642"],["\u90A3\u9738","\u570B\u969B\u7DDA 2F \u51FA\u5883\u5F8C","Self Tax Refund","6:00\u201321:00\uFF08\u4F9D\u822A\u73ED\u8ABF\u6574\uFF09"]];function Fn(){return`
    <div class="g-compare">
      <div class="g-box">
        <h3>Cash JAPAN</h3>
        <dl class="g-dl">
          <div><dt>\u6A5F\u5834</dt><dd>\u6210\u7530\u3001\u95DC\u897F\u3001\u4E2D\u90E8\u3001\u798F\u5CA1\u3001\u65B0\u5343\u6B72\u3001\u795E\u6236</dd></div>
          <div><dt>\u652F\u63F4\u516C\u53F8</dt><dd>Global Blue\u3001J&J\uFF08J-TaxRefund\uFF09\u3001JPrefund \u7B49</dd></div>
          <div><dt>\u670D\u52D9\u8CBB</dt><dd>\u9000\u7A05\u984D\u7684 <strong>10%</strong>\uFF08\u7D04\u672A\u7A05\u50F9 1%\uFF09\uFF0C\u53E6\u8A08\u5E97\u5BB6\u624B\u7E8C\u8CBB</dd></div>
          <div><dt>\u9650\u5236</dt><dd>\u6A5F\u53F0\u6BCF\u7B46\u4E0A\u9650 \xA5100,000\uFF0C\u66F4\u9AD8\u91D1\u984D\u5230\u6AC3\u53F0\u6838\u5C0D\u8EAB\u5206\uFF1B\u4EE5 \xA550 \u70BA\u55AE\u4F4D</dd></div>
          <div><dt>\u6642\u9593</dt><dd>\u591A\u6578\u7D04 1 \u5206 10 \u79D2\uFF0C\u6A5F\u53F0\u652F\u63F4 12 \u7A2E\u8A9E\u8A00</dd></div>
        </dl>
      </div>
      <div class="g-box">
        <h3>Self Tax Refund\uFF08GLORY\uFF09</h3>
        <dl class="g-dl">
          <div><dt>\u6A5F\u5834</dt><dd>\u7FBD\u7530\u3001\u6210\u7530\u3001\u90A3\u9738</dd></div>
          <div><dt>\u652F\u63F4\u516C\u53F8</dt><dd>J&J\u3001Smart Detax\uFF08JPrefund\uFF09\u3001Planet\u3001AddSmart\u3001LINKTIVITY\u3001IntaSect</dd></div>
          <div><dt>\u670D\u52D9\u8CBB</dt><dd>\u7D04\u672A\u7A05\u50F9 <strong>1.1%</strong>\uFF08\u542B\u7A05\uFF09</dd></div>
          <div><dt>\u9650\u5236</dt><dd>\u4EE5\u6536\u64DA\u70BA\u55AE\u4F4D\u3001\u4E0D\u80FD\u90E8\u5206\u9818\u53D6\uFF1B\u6263\u8CBB\u5F8C\u672A\u6EFF \xA5100 \u4E0D\u767C\uFF1B\u4E0A\u9650 \xA51,000,000</dd></div>
          <div><dt>\u6642\u9593</dt><dd>\u7D04 1 \u5206\u9418</dd></div>
        </dl>
      </div>
    </div>
    <h3 class="g-sub">\u5404\u6A5F\u5834\u5730\u9EDE\u8207\u6642\u9593</h3>
    <div class="table-wrap">
      <table class="g-table">
        <caption class="sr-only">\u6A5F\u5834\u73FE\u91D1\u9000\u7A05\u5730\u9EDE\u3001\u696D\u8005\u8207\u71DF\u696D\u6642\u9593</caption>
        <thead><tr><th scope="col">\u6A5F\u5834\u30FB\u696D\u8005</th><th scope="col">\u4F4D\u7F6E</th><th scope="col">\u6642\u9593</th></tr></thead>
        <tbody>${jn.map(([e,a,t,o])=>`<tr><th scope="row">${e}<small class="g-tag">${t}</small></th><td>${a}</td><td>${o}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <h3 class="g-sub">\u600E\u9EBC\u9818</h3>
    <ol class="g-ol">
      <li>\u5148\u5B8C\u6210\u514D\u7A05\u624B\u7E8C\u6A5F\u53F0\uFF08\u7DA0\u71C8\uFF09\uFF0C\u7D05\u71C8\u8981\u5148\u904E\u6D77\u95DC\u6AA2\u67E5\uFF0C\u7D50\u679C\u50B3\u5230\u9818\u9322\u6A5F\u53F0\u53EF\u80FD\u8981\u7B49\u5E7E\u5206\u9418\u3002</li>
      <li>\u8A17\u904B\u3001\u5B89\u6AA2\u3001\u51FA\u5883\uFF08\u6210\u7530\u7684 Self Tax Refund \u5728\u51FA\u5883\u524D\uFF0C\u9806\u5E8F\u76F8\u53CD\uFF09\u3002</li>
      <li>\u5230\u6A5F\u53F0\u5237\u8B77\u7167\uFF0C\u756B\u9762\u6703\u5217\u51FA<strong>\u53EF\u9818\u91D1\u984D\u8207\u6263\u6389\u7684\u8CBB\u7528</strong>\uFF0C\u78BA\u8A8D\u5F8C\u9818\u65E5\u5713\u73FE\u91D1\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u6A5F\u5834\u514D\u7A05\u5E97\u82B1\u6389\u3002</li>
    </ol>
    <div class="g-callout">${i("warning","sm")}<p><strong>PIE VAT \u7684\u5E97\u5BB6\u4E0D\u80FD\u5728\u6A5F\u5834\u9818\u73FE\u91D1</strong>\uFF08\u4F8B\u5982\u4E09\u4E95 Outlet\u3001LaLaport\uFF09\u3002\u53E6\u5916\uFF0C\u73FE\u91D1\u6BD4\u9000\u56DE\u4FE1\u7528\u5361\u591A\u6263\u7D04 1%\uFF0C\u91D1\u984D\u5927\u6642\u5DEE\u8DDD\u660E\u986F\uFF1B\u8D95\u98DB\u6A5F\u6216\u60F3\u7576\u5834\u628A\u9322\u82B1\u6389\u6642\u518D\u9078\u73FE\u91D1\u3002</p></div>
    ${Xe([K.rojico,K.sth,K.moodie,K.getaround])}`}function qn(){return`
    <ul class="g-checks">
      <li>${i("check_circle","sm")}<div><strong>\u4ED8\u73FE\u91D1\u4E5F\u80FD\u9000\u56DE\u4FE1\u7528\u5361</strong><p>\u9000\u7A05\u8DDF\u4ED8\u6B3E\u65B9\u5F0F\u7121\u95DC\uFF0C\u4ED8\u73FE\u91D1\u3001\u4EA4\u901A\u5361\u3001PayPay \u90FD\u53EF\u4EE5\u9078\u9000\u5230\u4FE1\u7528\u5361\u3002</p></div></li>
      <li>${i("check_circle","sm")}<div><strong>\u82F1\u6587\u59D3\u540D\u8981\u548C\u8B77\u7167\u4E00\u81F4</strong><p>\u56DB\u5927\u516C\u53F8\u90FD\u8981\u7C21\u8A0A\u9A57\u8B49\uFF0C\u8ACB\u5E36\u53EF\u6536\u570B\u969B\u7C21\u8A0A\u7684\u624B\u6A5F\u865F\u78BC\u3002</p></div></li>
      <li>${i("check_circle","sm")}<div><strong>\u9078\u65E5\u5713\u5165\u5E33\uFF0C\u4E0D\u8981\u9078\u53F0\u5E63</strong><p>\u756B\u9762\u554F\u5E63\u5225\u6642\u9078\u65E5\u5713\uFF08JPY\uFF09\u3002\u9078\u53F0\u5E63\u6703\u7528\u52D5\u614B\u8CA8\u5E63\u8F49\u63DB\uFF08DCC\uFF09\uFF0C\u532F\u7387\u901A\u5E38\u6BD4\u8F03\u5DEE\uFF1B\u767C\u5361\u9280\u884C\u53E6\u6536\u7684\u6D77\u5916\u624B\u7E8C\u8CBB\u4F9D\u4F60\u7684\u5361\u800C\u5B9A\u3002</p></div></li>
      <li>${i("check_circle","sm")}<div><strong>\u5361\u5225</strong><p>JPrefund \u76EE\u524D\u4EE5 Visa\u3001Mastercard \u70BA\u4E3B\uFF1BGlobal Blue \u652F\u63F4 Visa\u3001Mastercard\u3001AMEX\u3001JCB\u3001\u9280\u806F\u3002PIE VAT \u5C0D\u53F0\u7063\u65C5\u5BA2\u4EE5\u4FE1\u7528\u5361\u6216\u7C3D\u5E33\u91D1\u878D\u5361\u70BA\u4E3B\u3002</p></div></li>
      <li>${i("check_circle","sm")}<div><strong>\u5165\u5E33\u6642\u9593</strong><p>Global Blue \u7D04 3\uFF5E5 \u5929\u3001PIE VAT \u7D04 5\uFF5E15 \u500B\u5DE5\u4F5C\u5929\u3001J-TaxRefund \u6578\u9031\u5230\u7D04\u5169\u500B\u6708\u3002\u9801\u9762\u986F\u793A\u300C\u5B8C\u4E86\u300D\u624D\u7B97\u771F\u7684\u9000\u6B3E\u3002</p></div></li>
      <li>${i("check_circle","sm")}<div><strong>\u8A18\u5F97\u5728\u671F\u9650\u5167\u8A2D\u5B9A</strong><p>Global Blue \u96E2\u5883\u5F8C 3 \u9031\u5167\u6C92\u6307\u5B9A\u9000\u6B3E\u65B9\u5F0F\uFF0C\u6703\u6539\u5BC4\u9810\u4ED8\u5361\u4E26\u6263\u8CBB\u3002\u5176\u4ED6\u516C\u53F8\u671F\u9650\uFF1AJ-TaxRefund 180 \u5929\u3001JPrefund 200 \u5929\u3001PIE VAT 18 \u500B\u6708\u3002</p></div></li>
    </ul>
    <h3 class="g-sub">\u5404\u516C\u53F8\u600E\u9EBC\u7D81\u5361</h3>
    <div class="table-wrap">
      <table class="g-table">
        <caption class="sr-only">\u5404\u9000\u7A05\u516C\u53F8\u7684\u4FE1\u7528\u5361\u9000\u6B3E\u8A2D\u5B9A\u65B9\u5F0F</caption>
        <thead><tr><th scope="col">\u516C\u53F8</th><th scope="col">\u4EC0\u9EBC\u6642\u5019\u8A2D\u5B9A</th><th scope="col">\u600E\u9EBC\u9023\u5230\u8CFC\u8CB7\u7D00\u9304</th></tr></thead>
        <tbody>
          <tr><th scope="row">J-TaxRefund</th><td>\u8CB7\u5B8C\u5F8C</td><td>\u6383\u6536\u64DA\u6216\u5E97\u5167 QR code \u9032\u7DB2\u9801\u767B\u8A18</td></tr>
          <tr><th scope="row">JPrefund</th><td>\u51FA\u767C\u524D\u5373\u53EF</td><td>\u5E97\u5167\u51FA\u793A\u8B77\u7167\u7D50\u5E33\uFF0C\u81EA\u52D5\u9023\u5230\u5E33\u865F</td></tr>
          <tr><th scope="row">Global Blue</th><td>\u51FA\u767C\u524D\u5373\u53EF</td><td>App \u6216\u7DB2\u9801\u52A0\u5165\u5361\u7247</td></tr>
          <tr><th scope="row">PIE VAT</th><td>\u51FA\u767C\u524D\u5EFA\u5E33\u865F</td><td>\u6383\u5E97\u5BB6 QR code \u6216\u8F38\u5165 6 \u78BC\u4EE3\u78BC\uFF08\u90E8\u5206\u5E97\u5BB6\u9650\u7576\u5929\uFF09</td></tr>
        </tbody>
      </table>
    </div>
    ${Xe([K.ayaca,K.apps,K.linshibi,K.getaround])}`}var hs=[["\u5510\u5409\u8A36\u5FB7","J-TaxRefund","0%"],["Bic Camera","J-TaxRefund","0%"],["\u591A\u6176\u5C4B","J-TaxRefund","0%"],["\u9DB4\u7FBD\u85E5\u599D","J-TaxRefund","0%"],["\u672D\u5E4C\u85E5\u599D","J-TaxRefund","0%"],["\u677E\u672C\u6E05","J-TaxRefund","\u7D04 0.33%\uFF08\u5F85\u78BA\u8A8D\uFF09"],["GU","J-TaxRefund","1%"],["\u6771\u6B66\u767E\u8CA8","J-TaxRefund","1%"],["\u4E8C\u6728\u9AD8\u723E\u592B","J-TaxRefund","1.5%"],["\u4F0A\u85E4\u6D0B\u83EF\u5802","J-TaxRefund","1.65%"],["\u677E\u5C4B\u9280\u5EA7","J-TaxRefund","\u542B\u7A05\u50F9 2.15%"],["\u4E09\u4E95 Outlet\u3001LaLaport","PIE VAT","1.5%"],["\u6F80\u8C37 109","PIE VAT","1.55%"],["Montbell","PIE VAT","2%\uFF5E3%"],["Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09","Global Blue","0%\uFF08\u9996\u65E5\u56DE\u5831\uFF09"],["\u9AD8\u5CF6\u5C4B","Global Blue","1.55%"],["\u5927\u4E38\uFF0F\u677E\u5742\u5C4B","Global Blue","2.3%"],["EDION","Global Blue","\u6BCF\u7B46 \xA5210"],["3COINS","JPrefund","\u6BCF\u7B46 \xA5320"],["\u963F\u5361\u5C07\u672C\u8216","JPrefund","\u542B\u7A05\u50F9 1.1%"],["GRAND FRONT OSAKA","JPrefund","1.5%"],["\u601D\u5922\u6A02","JPrefund","1%\uFF5E2.5%"],["AEON \u6C38\u65FA\u5922\u6A02\u57CE","Planet","1.5%"],["Animate","Ocean","2.1%"]];function Rn(){return`
    <p class="g-lead">\u624B\u7E8C\u8CBB<strong>\u7531\u5E97\u5BB6\u6C7A\u5B9A</strong>\uFF0C\u653F\u5E9C\u6C92\u6709\u4E0A\u9650\uFF1B\u5E97\u5BB6\u53EF\u4EE5\u81EA\u5DF1\u5438\u6536\uFF0C\u4E5F\u53EF\u4EE5\u8F49\u7D66\u65C5\u5BA2\u3002\u8A08\u7B97\u57FA\u6E96\u5404\u5E97\u4E0D\u540C\uFF0C\u6709\u7684\u4EE5<strong>\u672A\u7A05\u50F9</strong>\u3001\u6709\u7684\u4EE5<strong>\u542B\u7A05\u50F9</strong>\u8A08\u7B97\uFF08\u4E0B\u8868\u6709\u8A3B\u660E\u7684\u70BA\u542B\u7A05\u50F9\uFF09\u3002\u4EE5\u672A\u7A05\u50F9\u8A08\u6642\uFF0C\u6D88\u8CBB\u7A05 10%\u3001\u624B\u7E8C\u8CBB 1.5%\uFF0C\u53EF\u4EE5\u62FF\u56DE\u672A\u7A05\u50F9\u7684 8.5%\u3002</p>
    <div class="g-calc">${i("calculate","sm")}<p><strong>\u5B9A\u984D\u6536\u8CBB\u8981\u5C0F\u5FC3\uFF1A</strong>3COINS \u6BCF\u7B46\u6536 \xA5320\u3002\u672A\u7A05 ${u(5e3)} \u9000\u7A05 \xA5500\uFF0C\u6263\u6389\u5F8C\u53EA\u5269 \xA5180\uFF0C\u7B49\u65BC\u624B\u7E8C\u8CBB 6.4%\uFF1B\u8CB7\u5230\u672A\u7A05 \xA510,000 \u624D\u964D\u5230 3.2%\u3002\u540C\u4E00\u5BB6\u5E97<strong>\u76E1\u91CF\u5408\u4F75\u6210\u4E00\u5F35\u6536\u64DA</strong>\u3002</p></div>
    <div class="table-wrap">
      <table class="g-table g-fees">
        <caption>\u5404\u5E97\u9000\u7A05\u624B\u7E8C\u8CBB\uFF08\u4F9D\u9000\u7A05\u516C\u53F8\u5206\u7D44\uFF1B11/1 \u4E0A\u8DEF\u9996\u65E5\u56DE\u5831\uFF0C\u6703\u8B8A\u52D5\uFF09</caption>
        <thead><tr><th scope="col">\u5E97\u5BB6</th><th scope="col">\u5E97\u5BB6\u624B\u7E8C\u8CBB</th></tr></thead>
        ${[...new Set(hs.map(([,e])=>e))].map(e=>`
        <tbody>
          <tr class="g-group"><th scope="colgroup" colspan="2">${e}</th></tr>
          ${hs.filter(([,a])=>a===e).map(([a,,t])=>`<tr${t.startsWith("0%")?' class="is-free"':""}><th scope="row">${a}</th><td>${t}</td></tr>`).join("")}
        </tbody>`).join("")}
      </table>
    </div>
    <h3 class="g-sub">\u53E6\u5916\u53EF\u80FD\u88AB\u6263\u7684\u8CBB\u7528</h3>
    <ul class="g-ul">
      <li><strong>\u6A5F\u5834\u9818\u73FE\u91D1</strong>\uFF1ACash JAPAN \u9000\u7A05\u984D 10%\u3001Self Tax Refund \u7D04\u672A\u7A05\u50F9 1.1%\u3002</li>
      <li><strong>\u63D0\u9818\uFF0F\u532F\u6B3E\u8CBB</strong>\uFF1APIE VAT \u7D04 0.28%\uFF5E0.32%\uFF1BOcean \u9000\u56DE\u4FE1\u7528\u5361\u6700\u4F4E \xA5180 \u6216 0.5%\uFF1BJPrefund \u6709\u5831\u5C0E\u53E6\u6536\u9000\u7A05\u984D\u7D04 5%\uFF08\u5F85\u78BA\u8A8D\uFF09\u3002</li>
      <li><strong>\u767C\u5361\u9280\u884C</strong>\u7684\u6D77\u5916\u4EA4\u6613\u624B\u7E8C\u8CBB\u3001\u9078\u53F0\u5E63\u5165\u5E33\u6642\u7684\u532F\u7387\u5DEE\u3002</li>
    </ul>
    <p class="hint">\u672C\u7DB2\u7AD9\u7684\u8A08\u7B97\uFF1A\u624B\u7E8C\u8CBB\u4E00\u5F8B\u4EE5\u542B\u7A05\u50F9\u4F30\u7B97\uFF0C\u7D50\u679C\u6703\u7565\u70BA\u4FDD\u5B88\uFF1B\u5510\u5409\u8A36\u5FB7\u3001Bic Camera \u5DF2\u5167\u5EFA 0%\uFF0C\u5176\u4ED6\u5E97\u53EF\u5728\u300C\u65B0\u589E\u5546\u54C1 \u2192 \u66F4\u591A\u8A2D\u5B9A\u300D\u6216\u300C\u8A2D\u5B9A\u300D\u586B\u5165\u624B\u7E8C\u8CBB\u3002</p>
    ${Xe([K.newtalk,K.linshibi,K.chinatimes,K.ettoday,K.getaround])}`}var _n=[{date:"2026/7/1",title:"\u65E5\u672C\u51FA\u570B\u7A05\u8ABF\u9AD8\u70BA \xA53,000",icon:"flight_takeoff",state:"done",body:`<p>\u570B\u969B\u89C0\u5149\u65C5\u5BA2\u7A05\u5F9E\u6BCF\u6B21\u51FA\u5883 \xA51,000 \u8ABF\u9AD8\u70BA <strong>\xA53,000</strong>\uFF0C\u901A\u5E38\u5DF2\u542B\u5728\u6A5F\u7968\u88E1\u3002</p>
      <ul><li>\u4EE5<strong>\u8CFC\u7968\u65E5</strong>\u5224\u65B7\uFF1A2026/6/30 \u524D\u8CB7\u7684\u6A5F\u7968\u4ECD\u662F \xA51,000\uFF1B\u4E4B\u5F8C\u6539\u7968\u5247\u9069\u7528\u65B0\u7A05\u984D\u3002</li>
      <li>\u672A\u6EFF 2 \u6B72\u3001\u5165\u5883\u5F8C 24 \u5C0F\u6642\u5167\u8F49\u6A5F\u51FA\u5883\u8005\u514D\u5FB5\u3002</li></ul>`,src:[["\u4E58\u308A\u3082\u306E\u30CB\u30E5\u30FC\u30B9\u3008\u51FA\u570B\u7A05 3 \u500D\u3009","https://trafficnews.jp/post/667615"]]},{date:"2026/11/1",title:"\u514D\u7A05\u6539\u70BA\u300C\u51FA\u5883\u5F8C\u9000\u7A05\u300D\uFF08\u30EA\u30D5\u30A1\u30F3\u30C9\u65B9\u5F0F\uFF09",icon:"receipt_long",state:"done",body:`<ul><li>\u5E97\u982D\u5148\u4ED8\u542B\u7A05\u50F9\uFF0C\u51FA\u5883\u67E5\u9A57\u5F8C\u7531\u9000\u7A05\u516C\u53F8\u9000\u6B3E\uFF1B\u9580\u6ABB\u540C\u4E00\u5929\u540C\u4E00\u5BB6\u5E97\u672A\u7A05 ${u(q)}\u3002</li>
      <li><strong>\u6D88\u8017\u54C1 50 \u842C\u65E5\u5713\u7684\u4E0A\u9650\u53D6\u6D88</strong>\uFF0C\u4E5F\u4E0D\u518D\u9700\u8981\u7279\u6B8A\u5BC6\u5C01\u5305\u88DD\u3002</li>
      <li>\u672A\u7A05\u55AE\u50F9 100 \u842C\u65E5\u5713\u4EE5\u4E0A\u7684\u5546\u54C1\uFF0C\u5E97\u5BB6\u8981\u63D0\u4F9B\u5E8F\u865F\u7B49\u5546\u54C1\u8CC7\u8A0A\u3002</li>
      <li><strong>\u6C92\u6709\u904E\u6E21\u671F</strong>\uFF0C11/1 \u8D77\u8CFC\u8CB7\u7684\u5546\u54C1\u4E00\u5F8B\u9069\u7528\u65B0\u5236\u3002\u8A73\u7D30\u6D41\u7A0B\u898B\u300C\u6D41\u7A0B\u300D\u5206\u9801\u3002</li></ul>`,src:[K.jta,K.jtaPdf]},{date:"2027/4/1",title:"\u98DF\u54C1\u6D88\u8CBB\u7A05\u9810\u8A08\u964D\u70BA 1%\uFF08\u70BA\u671F 2 \u5E74\uFF09",icon:"bakery_dining",state:"pending",body:`<p>\u9069\u7528 8% \u8F15\u6E1B\u7A05\u7387\u7684\u98F2\u98DF\u6599\u54C1\uFF0C\u9810\u8A08 2027/4/1\uFF5E2029/3/31 \u964D\u70BA <strong>1%</strong>\uFF1B<strong>\u9152\u985E\u8207\u5167\u7528\u9910\u98F2\u7DAD\u6301 10%</strong>\u3002</p>
      <ul><li>\u5C0D\u65C5\u5BA2\u7684\u5F71\u97FF\uFF1A\u98DF\u54C1\u6A19\u50F9\u8B8A\u4FBF\u5B9C\uFF0C\u4F46\u80FD<strong>\u9000\u7684\u7A05\u4E5F\u8DDF\u8457\u8B8A\u5C11</strong>\uFF08\u5F9E 8% \u8B8A 1%\uFF09\uFF0C\u8CB7\u98DF\u54C1\u6642\u8FA6\u514D\u7A05\u7684\u5212\u7B97\u7A0B\u5EA6\u6703\u964D\u4F4E\u3002</li>
      <li>\u6CD5\u6848 2026/11/6 \u773E\u8B70\u9662\u901A\u904E\uFF0C<strong>\u53C3\u8B70\u9662\u5BE9\u8B70\u4E2D\u3001\u5C1A\u672A\u6210\u7ACB</strong>\u3002\u65C5\u884C\u5728\u9019\u6BB5\u671F\u9593\u3001\u6CD5\u6848\u901A\u904E\u5F8C\uFF0C\u65B0\u589E\u5546\u54C1\u6642\u53EF\u628A\u7A05\u7387\u9078\u6210\u300C1% \u98DF\u54C1\u300D\u3002</li></ul>`,src:[["NHK\u3008\u98DF\u6599\u54C1\u306E\u6D88\u8CBB\u7A0E\u6E1B\u7A0E\u95A2\u9023\u6CD5\u6848 \u8846\u8B70\u9662\u3092\u901A\u904E\u3009","https://news.web.nhk/newsweb/na/nd-20261106de71359"],["\u6642\u4E8B\u901A\u4FE1\u3008\u6D88\u8CBB\u6E1B\u7A0E\u65B9\u91DD\u3092\u95A3\u8B70\u6C7A\u5B9A\u3009","https://www.jiji.com/jc/article?k=2026080500718&g=pol"]]},{date:"2028 \u5E74\u5EA6",title:"\u96FB\u5B50\u5165\u5883\u8A31\u53EF JESTA\uFF08\u9810\u5B9A\uFF09",icon:"event",state:"plan",body:"<p>\u65E5\u672C\u8A08\u756B\u5C0D\u514D\u7C3D\u65C5\u5BA2\u5BE6\u65BD\u4E8B\u5148\u4E0A\u7DB2\u7533\u8ACB\u7684\u5165\u5883\u8A31\u53EF\uFF0C\u653F\u5E9C\u76EE\u6A19\u70BA 2028 \u5E74\u5EA6\uFF0C\u8CBB\u7528\u8207\u9069\u7528\u570B\u5BB6\u5C1A\u672A\u516C\u5E03\u3002<strong>2027 \u5E74\u524D\u5F80\u65E5\u672C\u9084\u4E0D\u9700\u8981\u7533\u8ACB\u3002</strong></p>",src:[["VisasNews\u3008JESTA planned for 2028\u3009","https://visasnews.com/en/japans-parliament-unveils-new-details-on-jesta-the-electronic-travel-authorization-planned-for-2028/"]]}],Dn={done:["\u5DF2\u5BE6\u65BD","badge-cyan"],soon:["\u5373\u5C07\u5BE6\u65BD","badge-warn"],pending:["\u5BE9\u8B70\u4E2D","badge-warn"],plan:["\u9810\u5B9A","badge-muted"]};function On(){return`
    <p class="g-lead">\u9000\u7A05\u65B9\u5F0F\u3001\u51FA\u570B\u7A05\u3001\u98DF\u54C1\u7A05\u7387\u90FD\u6709\u8B8A\u52D5\u3002\u884C\u52D5\u96FB\u6E90\u8207\u56DE\u53F0\u7063\u5165\u5883\u898F\u5B9A\uFF0C\u8ACB\u770B\u300C\u6253\u5305\u8207\u6D77\u95DC\u300D\u9801\u3002</p>
    <ol class="rule-timeline">
      ${_n.map(e=>{let[a,t]=Dn[e.state];return`
        <li class="rt-item rt-${e.state}">
          <span class="rt-dot" aria-hidden="true">${i(e.icon,"sm")}</span>
          <div class="rt-body">
            <p class="rt-meta"><time>${e.date}</time><span class="badge ${t}">${a}</span></p>
            <h3 class="rt-title">${e.title}</h3>
            ${e.body}
            ${Xe(e.src)}
          </div>
        </li>`}).join("")}
    </ol>`}var Qt=[{id:"flow",label:"\u6D41\u7A0B",render:Pn},{id:"ops",label:"\u9000\u7A05\u516C\u53F8",render:Nn},{id:"cash",label:"\u6A5F\u5834\u73FE\u91D1",render:Fn},{id:"card",label:"\u4FE1\u7528\u5361",render:qn},{id:"fees",label:"\u624B\u7E8C\u8CBB",render:Rn},{id:"rules",label:"\u65B0\u5236\u5EA6",render:On}],$s=()=>{try{return localStorage.getItem(vs)}catch{return null}};function ys(){let e=Qt.some(a=>a.id===$s())?$s():"flow";return`
  <section class="card guide-card" aria-labelledby="guide-title">
    <p class="eyebrow">${i("payments","sm")}TAX REFUND GUIDE</p>
    <h2 id="guide-title" class="section-title-lg">\u9000\u7A05\u6307\u5357\uFF1A2026/11 \u65B0\u5236\u600E\u9EBC\u9000</h2>
    <p class="muted small">\u8CC7\u6599\u67E5\u8B49\u65E5 ${Ln}\u3002\u65B0\u5236\u525B\u4E0A\u8DEF\uFF0C\u8CBB\u7387\u8207\u6D41\u7A0B\u4EE5\u5404\u5E97\u3001\u5404\u9000\u7A05\u516C\u53F8\u516C\u544A\u70BA\u6E96\u3002</p>
    <div class="g-tabs" role="tablist" aria-label="\u9000\u7A05\u6307\u5357\u5206\u9801">
      ${Qt.map(a=>`<button type="button" role="tab" id="gtab-${a.id}" aria-controls="gpanel-${a.id}" aria-selected="${a.id===e}" tabindex="${a.id===e?0:-1}" class="g-tab">${a.label}</button>`).join("")}
    </div>
    ${Qt.map(a=>`<div class="g-panel" role="tabpanel" id="gpanel-${a.id}" aria-labelledby="gtab-${a.id}" tabindex="0"${a.id===e?"":" hidden"}>${a.render()}</div>`).join("")}
  </section>`}function xs(e){let a=e.querySelector(".g-tabs");if(!a)return;let t=[...a.querySelectorAll('[role="tab"]')],o=(n,s=!1)=>{t.forEach(r=>{let l=r===n;r.setAttribute("aria-selected",l),r.tabIndex=l?0:-1,e.querySelector(`#${r.getAttribute("aria-controls")}`).hidden=!l}),s&&n.focus(),a.scrollLeft=n.offsetLeft-(a.clientWidth-n.offsetWidth)/2;try{localStorage.setItem(vs,n.id.replace("gtab-",""))}catch{}};a.addEventListener("click",n=>{let s=n.target.closest('[role="tab"]');s&&o(s)}),a.addEventListener("keydown",n=>{let s=t.indexOf(document.activeElement);if(s<0)return;let r={ArrowRight:s+1,ArrowLeft:s-1,Home:0,End:t.length-1}[n.key];r!==void 0&&(n.preventDefault(),o(t[(r+t.length)%t.length],!0))})}var le={price:1e4,includesTax:!0,taxRate:10,discountPct:0,feePct:null},Pt=1e4;function ws({state:e}){let a=e.settings,t=a.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":a.rateSource==="api"?a.rateProvider||"\u516C\u958B\u532F\u7387 API":"\u9810\u8A2D\u503C\uFF08\u5C1A\u672A\u9023\u7DDA\u66F4\u65B0\uFF09";return`
  <section class="card rate-card" aria-labelledby="rate-title">
    <div class="rate-glow" aria-hidden="true"></div>
    <p class="eyebrow eyebrow-light">${i("currency_exchange","sm")}EXCHANGE RATE \xB7 \u532F\u7387</p>
    <h2 id="rate-title" class="sr-only">\u532F\u7387</h2>
    <p class="rate-big"><span>1 JPY =</span> <strong>${ee(a.rate,4)}</strong> <span>TWD</span></p>
    <p class="rate-src">${d(t)}${a.rateUpdatedAt?` \xB7 ${Ue(a.rateUpdatedAt)}`:""}</p>
    <p class="rate-note">\u5E02\u5834\u53C3\u8003\u532F\u7387\uFF0C\u5BE6\u969B\u63DB\u532F\u6216\u5237\u5361\u91D1\u984D\u6703\u56E0\u9280\u884C\u532F\u5DEE\u3001\u624B\u7E8C\u8CBB\u800C\u4E0D\u540C\u3002</p>
    <div class="rate-actions">
      <button type="button" class="btn btn-gold btn-sm" data-sync>${i("sync","sm")}\u6293\u6700\u65B0\u532F\u7387</button>
      <form class="rate-manual" data-manual>
        <label for="rate-input" class="sr-only">\u624B\u52D5\u8F38\u5165\u532F\u7387</label>
        <input id="rate-input" type="number" inputmode="decimal" step="0.0001" min="0.01" max="5" placeholder="${ee(a.rate,4)}">
        <button type="submit" class="btn btn-ghost-light btn-sm">${i("tune","sm")}\u5957\u7528</button>
      </form>
    </div>
    <div class="converter">
      <label for="conv-yen">\u63DB\u7B97</label>
      <div class="input-affix input-dark"><span aria-hidden="true">\xA5</span><input id="conv-yen" type="number" inputmode="numeric" min="0" value="${Pt}"></div>
      <span class="conv-eq" aria-hidden="true">${i("sync_alt")}</span>
      <output for="conv-yen" class="conv-out" data-conv>${_(Pt,a.rate)}</output>
    </div>
  </section>`}function ks({state:e,sum:a,rate:t}){let o=e.settings,n=o.budget?a.paid/o.budget*100:0,s=o.budget?a.pending/o.budget*100:0,r=a.remaining<0;return`
  <section class="card budget-card" aria-labelledby="budget-title">
    <div class="card-head">
      <h2 id="budget-title" class="section-title">${i("account_balance_wallet","sm")}\u9810\u7B97\u7E3D\u89BD</h2>
      <span class="badge ${r?"badge-danger":"badge-cyan"}">${i(r?"warning":"shield","sm")}${r?a.paid>o.budget?"\u5DF2\u8D85\u51FA\u9810\u7B97":"\u8CB7\u5B8C\u6703\u8D85\u652F":"\u9810\u7B97\u5B89\u5168"}</span>
    </div>
    <p class="muted">\u9810\u7B97 ${u(o.budget)}\uFF08\u2248 ${_(o.budget,t)}\uFF09</p>
    <div class="dual-stat">
      <div class="is-now"><span class="k">\u76EE\u524D\u5DF2\u652F\u4ED8</span><span class="v">${u(a.paid)}</span>
        <span class="s">\u2248 ${_(a.paid,t)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetUsedPct*100)}%</span></div>
      <div><span class="k">\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30</span><span class="v">${u(a.pay)}</span>
        <span class="s">\u2248 ${_(a.pay,t)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetPlannedPct*100)}%</span></div>
    </div>
    <div class="stack-bar" role="img" aria-label="\u5DF2\u652F\u4ED8 ${u(a.paid)}\uFF0C\u5F85\u8CFC ${u(a.pending)}\uFF0C\u9810\u7B97 ${u(o.budget)}">
      <span class="seg-paid" style="--w:${Math.min(100,n)}%"></span>
      <span class="seg-later" style="--w:${Math.max(0,Math.min(100-Math.min(100,n),s))}%"></span>
    </div>
    <dl class="legend-grid">
      <div><dt><i class="dot dot-gold"></i>\u5DF2\u652F\u4ED8\uFF08${a.purchasedCount} \u4EF6\uFF09</dt><dd>${u(a.paid)}</dd></div>
      <div><dt><i class="dot dot-later"></i>\u5F85\u8CFC\uFF08${a.pendingCount} \u4EF6\uFF09</dt><dd>${u(a.pending)}</dd></div>
      <div class="${r?"text-danger":""}"><dt><i class="dot dot-slate"></i>${r?"\u8CB7\u5B8C\u8D85\u652F":"\u8CB7\u5B8C\u5269\u9918"}</dt><dd>${u(Math.abs(a.remaining))} <small>(${_(Math.abs(a.remaining),t)})</small></dd></div>
    </dl>
    <form class="inline-form" data-budget>
      <label for="budget-input">\u4FEE\u6539\u9810\u7B97</label>
      <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="budget-input" type="number" inputmode="numeric" min="0" step="1000" value="${o.budget}"></div>
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
    </form>
  </section>`}function Ss({state:e,sum:a,rate:t}){let o=e.settings,n=[...a.groups.values()].filter(r=>r.store&&r.hasTaxFreeItems).sort((r,l)=>Number(l.eligible)-Number(r.eligible)||l.eligibleExcl-r.eligibleExcl),s=r=>r.items.reduce((l,c)=>l+a.byItem.get(c.id).refund,0);return`
  <section class="card refund-card" aria-labelledby="refund-title">
    <div class="refund-hero">
      <div>
        <p class="eyebrow eyebrow-light">${i("savings","sm")}TAX REFUND \xB7 \u9000\u7A05</p>
        <h2 id="refund-title" class="refund-big">\u9810\u4F30\u9000\u7A05 ${u(a.refund)}</h2>
      </div>
      <p class="refund-twd">\u2248 ${_(a.refund,t)}</p>
    </div>
    ${n.length?`<ul class="refund-list">
      ${n.map(r=>`
        <li>
          <div class="row-between"><strong>${d(r.store)}${r.date?` <small>${r.date.slice(5).replace("-","/")}</small>`:""}</strong>
            ${r.eligible?`<span class="badge badge-cyan">\u9000 ${u(s(r))}</span>`:`<span class="badge badge-warn">\u5DEE ${u(r.shortfall)}</span>`}</div>
          ${He(r.progress,{label:`${r.store} \u514D\u7A05\u9580\u6ABB`,tone:r.eligible?"cyan":"gold"})}
          <p class="muted small">\u672A\u7A05\u5408\u8A08 ${u(r.eligibleExcl)} / ${u(q)}</p>
        </li>`).join("")}
    </ul>`:'<p class="muted pad">\u9084\u6C92\u6709\u52FE\u9078\u300C\u8FA6\u7406\u514D\u7A05\u300D\u4E14\u586B\u4E86\u5E97\u5BB6\u7684\u5546\u54C1\u3002</p>'}
    <form class="inline-form" data-rebate>
      <label for="rebate-input">\u5237\u5361\u6DE8\u56DE\u994B %</label>
      <input id="rebate-input" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${o.cardRebatePct}">
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
      ${o.cardRebatePct?`<p class="muted small grow">\u5168\u90E8\u5237\u5361\u7D04\u53EF\u56DE\u994B ${_(a.rebate,t)}</p>`:""}
    </form>
  </section>`}function Es(e){let a=le.feePct??m.state.settings.refundFeePct,t=Aa({...le,feePct:a});return`
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u91D1\u984D\uFF08\u6298\u6263\u5F8C\uFF09</dt><dd>${u(t.excl)}</dd></div>
      <div><dt>\u6D88\u8CBB\u7A05 ${le.taxRate}%</dt><dd>${u(t.tax)}</dd></div>
      <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${u(t.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05${a?`\uFF08\u6263\u624B\u7E8C\u8CBB ${a}%\uFF09`:""}</dt><dd>${t.eligible?`\u2212 ${u(t.refund)}`:"\u672A\u9054\u9580\u6ABB"}</dd></div>
    </dl>
    <div class="ledger-total">
      <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${u(t.net)}</span></div>
      <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${_(t.net,e)}</span></div>
    </div>
    <p class="calc-status ${t.eligible?"ok":"warn"}">${i(t.eligible?"celebration":"info","sm")}${t.eligible?`\u6BD4\u539F\u50F9\u7701\u4E0B ${u(t.saved)}\uFF08\u2248 ${_(t.saved,e)}\uFF09`:`\u55AE\u7B46\u672A\u7A05\u672A\u6EFF ${u(q)}\uFF0C\u9700\u8207\u540C\u5E97\u540C\u65E5\u5176\u4ED6\u5546\u54C1\u5408\u4F75\u8A08\u7B97`}</p>`}function Jn({rate:e}){let a=[0,5,7,10];return`
  <section class="card calc-card" aria-labelledby="calc-title">
    <div class="card-head">
      <h2 id="calc-title" class="section-title">${i("calculate","sm")}\u55AE\u7B46\u9000\u7A05\u8A66\u7B97\u76E4</h2>
      <span class="badge badge-muted">\u5373\u6642\u8A08\u7B97</span>
    </div>
    <div class="calc-layout">
      <form class="calc-form" data-calc-form>
        <div class="field">
          <label for="qc-price">\u6A19\u50F9\uFF08\u65E5\u5713\uFF09</label>
          <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="qc-price" name="price" type="number" inputmode="numeric" min="0" value="${le.price}"></div>
        </div>
        <div class="grid-2 tight">
          <div class="field"><span class="label" id="qc-l1">\u6A19\u50F9</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l1">
              <label class="pill"><input type="radio" name="includesTax" value="true" ${le.includesTax?"checked":""}><span>\u542B\u7A05</span></label>
              <label class="pill"><input type="radio" name="includesTax" value="false" ${le.includesTax?"":"checked"}><span>\u672A\u7A05</span></label>
            </div></div>
          <div class="field"><span class="label" id="qc-l2">\u7A05\u7387</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l2">
              <label class="pill"><input type="radio" name="taxRate" value="10" ${le.taxRate===10?"checked":""}><span>10%</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="8" ${le.taxRate===8?"checked":""}><span>8% \u98DF\u54C1</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="1" ${le.taxRate===1?"checked":""}><span>1% \u98DF\u54C1\uFF082027/4 \u8D77\uFF0C\u6CD5\u6848\u5BE9\u8B70\u4E2D\uFF09</span></label>
            </div></div>
        </div>
        <div class="field"><span class="label" id="qc-l3">\u6298\u6263\uFF0F\u512A\u60E0\u5238</span>
          <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l3">
            ${a.map(t=>`<label class="pill"><input type="radio" name="discountPct" value="${t}" ${le.discountPct===t?"checked":""}><span>${t?`${t}%`:"\u7121"}</span></label>`).join("")}
          </div>
        </div>
        <div class="field">
          <label for="qc-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
          <input id="qc-fee" name="feePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${le.feePct??""}" placeholder="\u9810\u8A2D ${m.state.settings.refundFeePct}">
        </div>
      </form>
      <div class="calc-out" aria-live="polite" data-calc-out>${Es(e)}</div>
    </div>
  </section>`}function Bn(e,a){let t=a;e.innerHTML=`
    ${Ae({eyebrow:"BUDGET & TAX \xB7 \u9810\u7B97\u30FB\u532F\u7387\u30FB\u514D\u7A05",title:"\u9810\u7B97\u30FB\u532F\u7387\u30FB\u514D\u7A05\u8A08\u7B97\u4E2D\u5FC3",sub:"\u5373\u6642\u63DB\u7B97\u53F0\u5E63\u3001\u638C\u63E1\u9810\u7B97\u9918\u984D\uFF0C\u4E26\u9810\u4F30\u6BCF\u5BB6\u5E97\u80FD\u9000\u591A\u5C11\u6D88\u8CBB\u7A05\u3002"})}
    ${Tt([{id:"rate-title",label:"\u532F\u7387"},{id:"budget-title",label:"\u9810\u7B97"},{id:"calc-title",label:"\u8A66\u7B97"},{id:"refund-title",label:"\u9000\u7A05"},{id:"guide-title",label:"\u9000\u7A05\u6307\u5357"}])}
    <div class="budget-layout">
      <div class="col">
        <div data-region="rate">${ws(t)}</div>
        <div data-region="budget">${ks(t)}</div>
        ${Jn(t)}
      </div>
      <div class="col">
        <div data-region="refund">${Ss(t)}</div>
        ${ys()}
      </div>
    </div>`;let o=()=>{J("[data-calc-out]",e).innerHTML=Es(t.rate)};e.addEventListener("click",async s=>{let r=s.target.closest("[data-sync]");if(!r)return;r.disabled=!0,r.setAttribute("aria-busy","true");let l=await Be({force:!0});l.ok?M({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${ee(l.rate,4)} TWD\uFF08${d(l.provider)}\uFF09`,tone:"muted",duration:3e3}):M({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u532F\u7387\u3002",tone:"error"});let c=J("[data-sync]",e);c&&(c.disabled=!1,c.removeAttribute("aria-busy"),c.focus())}),e.addEventListener("submit",s=>{s.preventDefault();let r=s.target;if(r.matches("[data-manual]")){let l=Number(r.querySelector("input").value);if(!(l>0&&l<5)){M({title:"\u532F\u7387\u683C\u5F0F\u4E0D\u5C0D",message:"\u8ACB\u8F38\u5165 0 \u5230 5 \u4E4B\u9593\u7684\u6578\u5B57\uFF0C\u4F8B\u5982 0.2150\u3002",tone:"error"});return}wt(l),M({title:"\u5DF2\u6539\u7528\u624B\u52D5\u532F\u7387",message:`1 JPY = ${ee(l,4)} TWD`,tone:"muted",duration:3e3})}else if(r.matches("[data-budget]")){let l=Number(r.querySelector("input").value);l>=0&&(m.updateSettings({budget:l}),M({title:"\u9810\u7B97\u5DF2\u66F4\u65B0",message:u(l),tone:"muted",duration:2500}))}else if(r.matches("[data-rebate]")){let l=Number(r.querySelector("input").value);l>=0&&(m.updateSettings({cardRebatePct:l}),M({title:"\u56DE\u994B\u7387\u5DF2\u66F4\u65B0",message:`${l}%`,tone:"muted",duration:2500}))}}),e.addEventListener("input",s=>{let r=s.target;if(r.id==="conv-yen"&&(Pt=Number(r.value)||0,J("[data-conv]",e).textContent=_(Pt,t.rate)),r.closest("[data-calc-form]")){let l=new FormData(r.form);le.price=Number(l.get("price"))||0,le.includesTax=l.get("includesTax")==="true",le.taxRate=Number(l.get("taxRate")),le.discountPct=Number(l.get("discountPct")),le.feePct=l.get("feePct")===""?null:Number(l.get("feePct")),o()}}),e.addEventListener("change",s=>{s.target.closest("[data-calc-form]")&&s.target.dispatchEvent(new Event("input",{bubbles:!0}))});let n=At(e);return xs(e),{destroy(){n.destroy()},update(s){t=s;for(let[r,l]of[["rate",ws],["budget",ks],["refund",Ss]]){let c=J(`[data-region="${r}"]`,e);if(!c.contains(document.activeElement)||document.activeElement.tagName==="BUTTON"){let f=document.activeElement?.matches?.("[data-sync]")&&c.contains(document.activeElement)?"[data-sync]":null;c.innerHTML=l(t),f&&J(f,c)?.focus()}}o()}}}var ta={};et(ta,{mount:()=>zn});function Gn(e,a){let t=ke(e);return`
  <li class="pack-item ${e.packed?"is-packed":""}" data-id="${e.id}">
    <button type="button" class="check ${e.packed?"on":""}" data-k="pack" role="checkbox" aria-checked="${e.packed}" aria-label="\u5DF2\u88DD\u7BB1\uFF1A${d(e.name)}">${i("check")}</button>
    <div class="pack-main">
      <button type="button" class="pack-name" data-k="open">${d(e.name)}${e.qty>1?` <small>\xD7 ${e.qty}</small>`:""}</button>
      <p class="pack-meta">
        <span>${i(Te(e.category).icon,"sm")}${e.weightKg?fe(e.weightKg*e.qty):'<span class="text-warn">\u672A\u586B\u91CD\u91CF</span>'}</span>
        ${e.buyFor?`<span class="who-tag">@${d(e.buyFor)}</span>`:""}
        ${e.liquid?`<span class="badge badge-cyan">${i("water_drop","sm")}\u6DB2\u9AD4</span>`:""}
        ${e.blade?`<span class="badge badge-warn">${i("content_cut","sm")}\u5200\u526A</span>`:""}
        ${e.battery?`<span class="badge badge-danger">${i("battery_alert","sm")}\u92F0\u96FB\u6C60</span>`:""}
        ${e.fragile?`<span class="badge badge-warn">${i("wine_bar","sm")}\u6613\u788E</span>`:""}
        ${e.taxFree&&e.purchasedStore?`<span class="badge badge-gold">${i("receipt_long","sm")}\u514D\u7A05\u54C1</span>`:""}
      </p>
    </div>
    ${a?`<button type="button" class="btn btn-ghost btn-xs" data-k="move" aria-label="\u628A ${d(e.name)} \u6539\u653E${t==="checked"?"\u624B\u63D0":"\u8A17\u904B"}">${i("swap_horiz","sm")}${t==="checked"?"\u8A17\u904B":"\u624B\u63D0"}</button>`:""}
  </li>`}function ea(e,a,t,o,n,s,r=!1){if(!s.length)return"";let l=s.filter(c=>c.packed).length;return`
  <section class="pack-sec pack-${o}" aria-labelledby="pk-${e}">
    <header class="pack-sec-head">
      <h2 id="pk-${e}" class="section-title">${i(t,"sm")}${a}</h2>
      <span class="badge ${l===s.length?"badge-cyan":"badge-muted"}">${l} / ${s.length} \u5DF2\u88DD\u7BB1</span>
    </header>
    <p class="hint">${n}</p>
    <ul class="pack-list">${s.map(c=>Gn(c,r)).join("")}</ul>
  </section>`}function Ts(){let e=m.state,{settings:a,packing:t}=e,o=xt(e),n=e.items.filter(h=>h.purchased&&ke(h)!=="none"),s=n.filter(h=>!h.battery&&ke(h)==="checked"&&(h.liquid||h.blade)),r=n.filter(h=>h.battery),l=n.filter(h=>!s.includes(h)&&!r.includes(h)),c=e.items.filter(h=>!h.purchased).length,f=t.filter(h=>h.done).length,b=(h,k,E,g,v)=>`
    <div class="pack-weight ${k>v?"is-over":""}">
      <p class="row-between"><span class="k">${h}</span><span><strong>${ee(k,1)}</strong> / ${v} kg</span></p>
      ${lt([{value:E,tone:"base"},{value:g,tone:"paid"}],v,`${h} ${ee(k,1)} \u516C\u65A4\uFF0C\u9650\u91CD ${v}`)}
      <p class="small ${k>v?"text-danger":"muted"}">${k>v?`\u8D85\u91CD ${fe(k-v)}`:`\u9084\u53EF\u88DD ${fe(v-k)}`}</p>
    </div>`;return`
  <div class="packing-layout">
    <div class="col">
      <div class="pack-weights" role="group" aria-labelledby="pk-weights">
        <h2 id="pk-weights" class="sr-only">\u884C\u674E\u91CD\u91CF</h2>
        ${b("\u8A17\u904B\u884C\u674E",o.totalCheckedNow,a.checkedBase,o.weightCheckedNow,a.checkedLimit)}
        ${b("\u624B\u63D0\u884C\u674E",o.totalCarryNow,a.carryBase,o.weightCarryNow,a.carryLimit)}
      </div>
      ${n.length?"":`<p class="notice">${i("info")}\u9084\u6C92\u6709\u5DF2\u8CB7\u7684\u5546\u54C1\u3002\u5728\u63A1\u8CB7\u6E05\u55AE\u52FE\u9078\u300C\u5DF2\u5165\u624B\u300D\u5F8C\uFF0C\u5546\u54C1\u6703\u51FA\u73FE\u5728\u9019\u88E1\u3002</p>`}
      ${ea("checked","\u5FC5\u9808\u8A17\u904B\uFF08\u6DB2\u9AD4\uFF0F\u5200\u526A\uFF09","luggage","checked","\u6DB2\u9AD4\u8D85\u904E 100ml\u3001\u5200\u526A\u985E\u4E0D\u80FD\u5E36\u4E0A\u98DB\u6A5F\u5BA2\u8259\u3002\uFF08\u5728\u51FA\u5883\u7BA1\u5236\u5340\u514D\u7A05\u5E97\u8CB7\u7684\u6DB2\u9AD4\u4E0D\u5728\u6B64\u9650\uFF0C\u6703\u5217\u5728\u4E00\u822C\u5546\u54C1\uFF09",s)}
      ${ea("carry","\u5FC5\u9808\u624B\u63D0\uFF08\u92F0\u96FB\u6C60\uFF09","backpack","carry","\u884C\u52D5\u96FB\u6E90\u8207\u5099\u7528\u92F0\u96FB\u6C60\u4E0D\u80FD\u8A17\u904B\uFF0C\u6BCF\u4EBA\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u4E0D\u80FD\u4F7F\u7528\u6216\u5145\u96FB\uFF1B\u5167\u5EFA\u96FB\u6C60\u7684\u96FB\u5668\u4F9D\u822A\u7A7A\u516C\u53F8\u898F\u5B9A\u3002",r)}
      ${ea("general","\u4E00\u822C\u5546\u54C1","inventory_2","general","\u8A17\u904B\u6216\u624B\u63D0\u90FD\u53EF\u4EE5\uFF0C\u6309\u53F3\u5074\u6309\u9215\u5207\u63DB\u653E\u54EA\u88E1\u3002",l,!0)}
      ${c?`<p class="hint">${i("pending","sm")}\u9084\u6709 ${c} \u4EF6\u5F85\u8CB7\uFF0C\u8CB7\u5230\u5F8C\u6703\u51FA\u73FE\u5728\u9019\u88E1\u3002</p>`:""}
    </div>
    <div class="col">
      <section class="card dark-card" aria-labelledby="pk-rules">
        <p class="eyebrow eyebrow-light">${i("gavel","sm")}DEPARTURE CHECKLIST</p>
        <h2 id="pk-rules" class="section-title-lg">\u51FA\u5883\u8207\u5165\u5883\u63D0\u9192</h2>
        <ul class="rule-cards">
          <li class="rule danger"><span class="rule-icon">${i("priority_high")}</span>
            <div><strong>\u514D\u7A05\u5546\u54C1\u5148\u67E5\u9A57\u3001\u518D\u8A17\u904B</strong><p>2026/11/1 \u8D77\u7684\u9000\u7A05\u65B0\u5236\uFF0C\u8981\u5728<strong>\u8CFC\u8CB7\u5F8C 90 \u5929\u5167\u3001\u8A17\u904B\u884C\u674E\u4E4B\u524D</strong>\u6301\u8B77\u7167\u5230\u6A5F\u53F0\u8FA6\u7406\u3002\u6D77\u95DC\u4EE5<strong>\u6536\u64DA\u70BA\u55AE\u4F4D</strong>\u67E5\u9A57\uFF0C\u540C\u4E00\u5F35\u6536\u64DA\u7684\u5546\u54C1\u8981\u5168\u90E8\u653E\u5728\u597D\u62FF\u51FA\u4F86\u7684\u4F4D\u7F6E\uFF0C\u5C11\u4E00\u4EF6\u6574\u5F35\u90FD\u4E0D\u80FD\u9000\u3002</p></div></li>
          <li class="rule danger"><span class="rule-icon">${i("battery_alert")}</span>
            <div><strong>\u884C\u52D5\u96FB\u6E90\uFF1A\u6BCF\u4EBA\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u7981\u7528</strong><p>\u65E5\u672C\u51FA\u767C\u822A\u73ED\u81EA 2026/4/24 \u8D77\u3001\u53F0\u7063\u6C11\u822A\u5C40\u81EA 2026/4/8 \u8D77\uFF1A\u6BCF\u4EBA\u6700\u591A\u5E36 2 \u9846\uFF08160Wh \u4EE5\u4E0B\uFF0C\u8D85\u904E 100Wh \u9700\u822A\u7A7A\u516C\u53F8\u540C\u610F\uFF09\uFF0C<strong>\u6A5F\u4E0A\u4E0D\u80FD\u4F7F\u7528\u3001\u4E5F\u4E0D\u80FD\u5145\u96FB</strong>\uFF0C\u4E0D\u53EF\u8A17\u904B\uFF1B\u8ACB\u653E\u5728\u8EAB\u908A\uFF0C\u4E0D\u8981\u653E\u9032\u4E0A\u65B9\u7F6E\u7269\u6AC3\u3002</p></div></li>
          <li class="rule warn"><span class="rule-icon">${i("water_drop")}</span>
            <div><strong>\u6DB2\u9AD4\u3001\u5200\u526A</strong><p>\u624B\u63D0\u6DB2\u9AD4\u55AE\u74F6\u901A\u5E38\u9650 100ml\uFF0C\u5200\u526A\u53EA\u80FD\u8A17\u904B\u3002\u5BE6\u969B\u9650\u5236\u4EE5\u822A\u7A7A\u516C\u53F8\u8207\u6A5F\u5834\u516C\u544A\u70BA\u6E96\u3002</p></div></li>
          <li class="rule warn"><span class="rule-icon">${i("shield")}</span>
            <div><strong>\u56DE\u53F0\u7063\u5165\u5883\uFF1A\u514D\u7A05\u984D\u8207\u7981\u5E36\u54C1</strong><p>\u884C\u674E\u514D\u7A05\u984D <strong>NT$35,000</strong>\uFF1B\u9152\u985E <strong>1.5 \u516C\u5347</strong>\uFF08\u5E74\u6EFF 18 \u6B72\uFF09\u3002<strong>\u8089\u88FD\u54C1\u4E00\u5F8B\u4E0D\u80FD\u5E36</strong>\uFF0C\u5305\u62EC\u8089\u4E7E\u3001\u8089\u9B06\u3001\u9999\u8178\u3001\u542B\u8089\u584A\u6216\u8089\u5305\u7684\u6CE1\u9EB5\uFF08\u4F8B\u5982\u4E00\u98A8\u5802\u3001AFURI \u67DA\u5B50\u62C9\u9EB5\uFF09\uFF0C\u9055\u8005\u7F70 NT$1 \u842C\uFF5E100 \u842C\uFF1B\u65B0\u9BAE\u6C34\u679C\u4E5F\u4E0D\u80FD\u5E36\u3002\u5E36\u5230\u4E86\u8ACB\u5728\u5165\u5883\u524D\u4E1F\u9032\u6AA2\u75AB\u7BB1\uFF1B\u4E0D\u78BA\u5B9A\u7684\u8A71\u5230\u52D5\u690D\u7269\u6AA2\u75AB\u6AC3\u53F0\u4E3B\u52D5\u7533\u5831\uFF0C\u4E0D\u5408\u683C\u53EA\u8981\u92B7\u6BC0\u5C31\u4E0D\u6703\u53D7\u7F70\u3002</p></div></li>
          <li class="rule ok"><span class="rule-icon">${i("check")}</span>
            <div><strong>\u91CD\u7269\u653E\u5E95\u5C64\u3001\u6613\u788E\u653E\u4E2D\u592E</strong><p>\u9152\u985E\u3001\u74F6\u88DD\u4FDD\u990A\u54C1\u5305\u597D\u653E\u9760\u8FD1\u8F2A\u5B50\u7684\u5E95\u90E8\uFF1B\u6613\u788E\u54C1\u653E\u4E2D\u592E\uFF0C\u56DB\u5468\u7528\u8863\u7269\u7DE9\u885D\u3002</p></div></li>
        </ul>
      </section>

      <section class="card packing-card" aria-labelledby="pk-todo">
        <header class="card-head">
          <h2 id="pk-todo" class="section-title">${i("checklist","sm")}\u96A8\u8EAB\u88DD\u5099\u6E05\u55AE</h2>
          <span class="badge badge-muted">${f} / ${t.length} \u5099\u59A5</span>
        </header>
        <ul class="todo-list">
          ${t.map((h,k)=>`
            <li class="todo ${h.done?"is-done":""}">
              <label><input type="checkbox" data-p="toggle" data-idx="${k}" ${h.done?"checked":""}><span>${d(h.text)}</span></label>
              <button type="button" class="icon-btn icon-btn-sm" data-p="remove" data-idx="${k}" aria-label="\u79FB\u9664\u300C${d(h.text)}\u300D">${i("close","sm")}</button>
            </li>`).join("")}
        </ul>
        <form class="todo-add" data-p-add>
          <label for="todo-input" class="sr-only">\u65B0\u589E\u88DD\u5099\u9805\u76EE</label>
          <input id="todo-input" placeholder="\u65B0\u589E\u9805\u76EE\uFF0C\u4F8B\u5982\uFF1A\u8F49\u63A5\u982D" maxlength="40" autocomplete="off">
          <button type="submit" class="btn btn-slate btn-sm">${i("add","sm")}\u65B0\u589E</button>
        </form>
      </section>

      <details class="more card-more">
        <summary class="more-summary">
          <span class="more-title">${i("flight_takeoff","sm")}\u822A\u73ED\u8207\u884C\u674E\u984D\u5EA6</span>
          <span class="more-desc">${a.flightNote?d(a.flightNote):"\u9650\u91CD\u3001\u884C\u674E\u7BB1\u672C\u8EAB\u91CD\u91CF"}</span>
          <span class="more-chevron" aria-hidden="true">${i("add")}</span>
        </summary>
        <form class="flight-form more-body" data-flight>
          <div class="field span2"><label for="fl-note">\u822A\u73ED\u5099\u8A3B</label>
            <input id="fl-note" name="flightNote" value="${d(a.flightNote)}" placeholder="\u4F8B\u5982\uFF1ABR197 \u6210\u7530 \u2192 \u6843\u5712 11/20 14:30" maxlength="60"></div>
          <div class="field"><label for="fl-cl">\u8A17\u904B\u9650\u91CD kg</label><input id="fl-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${a.checkedLimit}"></div>
          <div class="field"><label for="fl-cb">\u8A17\u904B\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${a.checkedBase}"></div>
          <div class="field"><label for="fl-pl">\u624B\u63D0\u9650\u91CD kg</label><input id="fl-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${a.carryLimit}"></div>
          <div class="field"><label for="fl-pb">\u624B\u63D0\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${a.carryBase}"></div>
          <button type="submit" class="btn btn-slate span2">${i("save","sm")}\u5132\u5B58\u884C\u674E\u8A2D\u5B9A</button>
        </form>
      </details>
    </div>
  </div>`}function zn(e){e.innerHTML=`
    ${Ae({eyebrow:"PACKING & CUSTOMS \xB7 \u6253\u5305\u8207\u6D77\u95DC",title:"\u6253\u5305\u8207\u6D77\u95DC",sub:"\u56DE\u7A0B\u6574\u7406\u884C\u674E\u6642\u770B\u9019\u9801\uFF1A\u5DF2\u8CB7\u7684\u5546\u54C1\u4F9D\u300C\u5FC5\u9808\u8A17\u904B\uFF0F\u5FC5\u9808\u624B\u63D0\uFF0F\u4E00\u822C\u300D\u5206\u7D44\uFF0C\u9010\u4E00\u88DD\u7BB1\u6253\u52FE\u3002"})}
    ${Tt([{id:"pk-weights",label:"\u91CD\u91CF"},{id:"pk-checked",label:"\u8A17\u904B"},{id:"pk-carry",label:"\u624B\u63D0"},{id:"pk-general",label:"\u4E00\u822C"},{id:"pk-rules",label:"\u6D77\u95DC\u63D0\u9192"},{id:"pk-todo",label:"\u96A8\u8EAB\u88DD\u5099"}])}
    <div data-region="main">${Ts()}</div>`;let a=e.querySelector('[data-region="main"]'),t=()=>{let n=document.activeElement,s=a.querySelector("details")?.open,r=null;n?.dataset?.k?r=`[data-id="${n.closest("[data-id]")?.dataset.id}"] [data-k="${n.dataset.k}"]`:n?.dataset?.p==="toggle"?r=`[data-p="toggle"][data-idx="${n.dataset.idx}"]`:n?.id==="todo-input"?r="#todo-input":n?.closest?.("[data-flight]")&&(r='[data-flight] button[type="submit"]'),a.innerHTML=Ts(),s&&(a.querySelector("details").open=!0),r&&a.querySelector(r)?.focus({preventScroll:!0}),o?.refresh()},o=null;return e.addEventListener("click",n=>{let s=n.target.closest("button");if(!s)return;if(s.dataset.p==="remove"){let c=[...m.state.packing];c.splice(Number(s.dataset.idx),1),m.setPacking(c),e.querySelector("#todo-input")?.focus();return}let r=s.closest("[data-id]")?.dataset.id,l=r&&m.getItem(r);l&&(s.dataset.k==="pack"&&m.updateItem(r,{packed:!l.packed}),s.dataset.k==="open"&&Lt(r),s.dataset.k==="move"&&m.updateItem(r,{luggage:ke(l)==="checked"?"carry":"checked"}))}),e.addEventListener("change",n=>{if(n.target.dataset.p!=="toggle")return;let s=Number(n.target.dataset.idx);m.setPacking(m.state.packing.map((r,l)=>l===s?{...r,done:n.target.checked}:r))}),e.addEventListener("submit",n=>{n.preventDefault();let s=n.target;if(s.matches("[data-p-add]")){let r=s.querySelector("input").value.trim();r&&m.setPacking([...m.state.packing,{text:r,done:!1}]),e.querySelector("#todo-input")?.focus()}else if(s.matches("[data-flight]")){let r=s.elements,l=m.state.settings,c=(f,b)=>f.value===""||Number.isNaN(Number(f.value))?b:Math.max(0,Number(f.value));m.updateSettings({flightNote:r.flightNote.value.trim(),checkedLimit:c(r.checkedLimit,l.checkedLimit),checkedBase:c(r.checkedBase,l.checkedBase),carryLimit:c(r.carryLimit,l.carryLimit),carryBase:c(r.carryBase,l.carryBase)}),M({title:"\u884C\u674E\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}}),o=At(e),{destroy(){o.destroy()},update(){let n=document.activeElement;a.querySelector("[data-flight]")?.contains(n)&&n.tagName!=="BUTTON"||t()}}}var sa={home:{view:Kt,title:"\u9996\u9801"},list:{view:Wt,title:"\u63A1\u8CB7\u6E05\u55AE"},split:{view:Xt,title:"\u4EE3\u8CFC\u5206\u5E33"},budget:{view:Zt,title:"\u9810\u7B97\u532F\u7387"},packing:{view:ta,title:"\u6253\u5305\u8207\u6D77\u95DC"}},na=null;function Un(){let e=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0];return sa[e]?e:"home"}function As(){let e=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0];e==="areas"?(m.updateSettings({listView:"store"}),history.replaceState(null,"","#/list")):e==="luggage"&&history.replaceState(null,"","#/packing")}function oa(){let e=m.state;return{state:e,sum:xt(e),rate:e.settings.rate}}function Ms({focus:e=!0}={}){let a=Un();na?.instance?.destroy?.();let t=document.createElement("div");t.id="view",t.className="view",J("#view").replaceWith(t);let o=sa[a].view.mount(t,oa());na={name:a,instance:o},document.body.dataset.route=a,document.documentElement.classList.remove("boot-home","boot-intro","booting"),Dt(),document.title=`${sa[a].title}\uFF5CShopping Relics \u65E5\u672C\u8CFC\u7269\u6E05\u55AE`,nt("[data-route]").forEach(n=>{n.dataset.route===a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),e&&(window.scrollTo({top:0}),t.querySelector("h1")?.setAttribute("tabindex","-1"),t.querySelector("h1")?.focus({preventScroll:!0}))}"scrollRestoration"in history&&(history.scrollRestoration="manual");function Ls(){let{state:e,sum:a}=oa(),t=J("#hdr-rate");t.querySelector(".chip-v-full").textContent=`1 JPY = ${ee(e.settings.rate,4)} TWD`,t.querySelector(".chip-v-short").textContent=`\xA51,000 \u2248 NT$${ee(e.settings.rate*1e3)}`;let o=J("#hdr-total"),n=Ge(o,".chip-v");J("#hdr-total .chip-v").innerHTML=`${u(a.pay)} <small>/ ${a.count} \u4EF6</small>`,ze(o,".chip-v",n)}m.subscribe(()=>{Ls(),na?.instance?.update?.(oa())});window.addEventListener("hashchange",()=>{As(),Ms()});J("#fab-add").addEventListener("click",()=>ue());J("#btn-settings").addEventListener("click",()=>Ja());J("#btn-theme").addEventListener("click",()=>{let e=Da();M({title:`\u5916\u89C0\uFF1A${e.label}`,message:e.id==="auto"?"\u6703\u4F9D\u7167\u88DD\u7F6E\u7684\u6DF1\u6DFA\u8272\u8A2D\u5B9A\u81EA\u52D5\u5207\u63DB\u3002":"",tone:"muted",duration:2e3})});var aa=scrollY;addEventListener("scroll",()=>{let e=scrollY;e>aa+8&&e>160?document.body.classList.add("fab-hide"):(e<aa-8||e<160)&&document.body.classList.remove("fab-hide"),aa=e},{passive:!0});Oa();Ba();document.addEventListener("app:add",e=>ue(null,e.detail??{}));window.addEventListener("store:quota",()=>{M({title:"\u5132\u5B58\u7A7A\u9593\u4E0D\u8DB3",message:"\u700F\u89BD\u5668\u5BB9\u91CF\u5DF2\u6EFF\uFF0C\u8ACB\u79FB\u9664\u90E8\u5206\u5546\u54C1\u7167\u7247\u5F8C\u518D\u8A66\u3002",tone:"error",duration:8e3})});Ls();As();Ms({focus:!1});Be().then(e=>{e.ok===!1&&console.info("\u532F\u7387\u66AB\u6642\u7121\u6CD5\u66F4\u65B0\uFF0C\u6CBF\u7528\u4E0A\u6B21\u6578\u503C")});})();
