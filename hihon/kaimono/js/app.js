(()=>{var mo=Object.defineProperty;var fe=(t,a)=>{for(var e in a)mo(t,e,{get:a[e],enumerable:!0})};var ge=[{id:"beauty",label:"\u85E5\u599D\u7F8E\u808C",icon:"spa"},{id:"luxury",label:"\u5C08\u6AC3\u7CBE\u54C1",icon:"diamond"},{id:"souvenir",label:"\u5FC5\u8CB7\u4F34\u624B\u79AE",icon:"bakery_dining"},{id:"tech",label:"3C \u5BB6\u96FB",icon:"devices"},{id:"anime",label:"\u52D5\u6F2B\u9650\u5B9A",icon:"sports_esports"},{id:"craft",label:"\u9802\u7D1A\u5DE5\u85DD",icon:"handyman"},{id:"liquor",label:"\u73CD\u7A00\u9298\u9152",icon:"liquor"},{id:"fashion",label:"\u670D\u98FE\u96DC\u8CA8",icon:"checkroom"},{id:"other",label:"\u5176\u4ED6",icon:"category"}],Vt=t=>ge.find(a=>a.id===t)??ge.at(-1),ys=["\u9280\u5EA7","\u65B0\u5BBF","\u6F80\u8C37","\u6C60\u888B","\u79CB\u8449\u539F","\u4E0A\u91CE\u30FB\u6DFA\u8349","\u6771\u4EAC\u8ECA\u7AD9","\u8868\u53C3\u9053\u30FB\u539F\u5BBF","\u53F0\u5834","\u5927\u962A\u6885\u7530","\u5FC3\u9F4B\u6A4B\u30FB\u96E3\u6CE2","\u4EAC\u90FD","\u795E\u6236","\u540D\u53E4\u5C4B","\u798F\u5CA1\u5929\u795E","\u672D\u5E4C","\u6210\u7530\u6A5F\u5834","\u7FBD\u7530\u6A5F\u5834","\u95DC\u897F\u6A5F\u5834"],Qe=[{value:3,stars:"\u2605\u2605\u2605",label:"\u5FC5\u8CB7"},{value:2,stars:"\u2605\u2605",label:"\u5FC3\u9858"},{value:1,stars:"\u2605",label:"\u9806\u4FBF"}],Ze=t=>Qe.find(a=>a.value===Number(t))??Qe[1],ws=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u306E\u5728\u5EAB\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u500B\u5546\u54C1\u9084\u6709\u73FE\u8CA8\u55CE\uFF1F"},{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"},{ja:"\u514D\u7A0E\u30AB\u30A6\u30F3\u30BF\u30FC\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u514D\u7A05\u6AC3\u53F0\u5728\u54EA\u88E1\uFF1F"},{ja:"\u30C6\u30B9\u30BF\u30FC\u3092\u8A66\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u8A66\u7528\u8A66\u7528\u54C1\u55CE\uFF1F"},{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u5F35\u512A\u60E0\u5238\u53EF\u4EE5\u4F7F\u7528\u55CE\uFF1F"},{ja:"\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u3067\u3001\u4E00\u62EC\u6255\u3044\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002",zh:"\u6211\u7528\u4FE1\u7528\u5361\u4E00\u6B21\u4ED8\u6E05\u3002"},{ja:"\u30D7\u30EC\u30BC\u30F3\u30C8\u7528\u306B\u5305\u88C5\u3057\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u505A\u79AE\u7269\u5305\u88DD\u55CE\uFF1F"},{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5E6B\u6211\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"},{ja:"\u888B\u3092\u5206\u3051\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u5206\u958B\u88DD\u888B\u55CE\uFF1F"},{ja:"\u30EC\u30B7\u30FC\u30C8\u3092\u304F\u3060\u3055\u3044\u3002",zh:"\u8ACB\u7D66\u6211\u6536\u64DA\u3002"}],xs=[{name:"\u5C71\u5D0E \u55AE\u4E00\u9EA5\u82BD\u5A01\u58EB\u5FCC 700ml",nameJa:"\u30B7\u30F3\u30B0\u30EB\u30E2\u30EB\u30C8\u30A6\u30A4\u30B9\u30AD\u30FC \u5C71\u5D0E 700ml",brand:"SUNTORY",category:"liquor",priority:3,qty:1,price:7700,priceIncludesTax:!0,taxRate:10,area:"\u7FBD\u7530\u6A5F\u5834",stores:["\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"],taxFree:!1,weightKg:1.4,luggage:"carry",fragile:!0,liquid:!0,purchased:!0,purchasedStore:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97",note:"\u51FA\u5883\u7BA1\u5236\u5340\u8CFC\u8CB7\uFF0C\u53EF\u96A8\u8EAB\u5E36\u4E0A\u6A5F\u3002"},{name:"EVE QUICK \u6B62\u75DB\u9320 40 \u9320",nameJa:"\u30A4\u30D6\u30AF\u30A4\u30C3\u30AF\u982D\u75DB\u85ACDX 40\u9320",brand:"SSP",category:"beauty",priority:3,qty:3,price:1480,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",stores:["\u677E\u672C\u6E05"],buyFor:"\u5C0F\u7F8E",weightKg:.05,luggage:"checked"},{name:"\u53C3\u5929\u773C\u85E5\u6C34",nameJa:"\u30B5\u30F3\u30C6 \u76EE\u85AC",brand:"Santen",category:"beauty",priority:2,qty:2,price:1280,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",stores:["\u677E\u672C\u6E05","\u5927\u570B\u85E5\u599D"],weightKg:.03,luggage:"checked",liquid:!0,note:"\u5169\u5BB6\u90FD\u6709\u8CE3\uFF0C\u54EA\u5BB6\u4FBF\u5B9C\u5C31\u5728\u54EA\u8CB7\u3002"},{name:"\u5C0F\u5F62\u7F8A\u7FB9 10 \u5165",nameJa:"\u5C0F\u5F62\u7F8A\u7FB9 10\u672C\u5165",brand:"\u864E\u5C4B TORAYA",category:"souvenir",priority:2,qty:2,price:3240,priceIncludesTax:!0,taxRate:8,taxFree:!0,area:"\u9280\u5EA7",stores:["\u4F0A\u52E2\u4E39"],buyFor:"\u5ABD\u5ABD",weightKg:.6,luggage:"checked",fragile:!0,note:"\u9001\u79AE\u7528\uFF0C\u8ACB\u5E97\u5BB6\u9644\u7D19\u888B\u3002"},{name:"\u8CC7\u751F\u5802 \u7CBE\u83EF\u6DB2 30ml",nameJa:"\u8CC7\u751F\u5802 \u7F8E\u5BB9\u6DB2 30ml",brand:"SHISEIDO",category:"luxury",priority:3,qty:1,price:38500,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:5,area:"\u9280\u5EA7",stores:["\u4F0A\u52E2\u4E39"],buyFor:"\u5C0F\u7F8E",weightKg:.4,luggage:"checked",fragile:!0,liquid:!0,purchased:!0,purchasedStore:"\u4F0A\u52E2\u4E39"},{name:"Tanker 2Way \u516C\u4E8B\u5305",nameJa:"\u30BF\u30F3\u30AB\u30FC 2WAY\u30D6\u30EA\u30FC\u30D5\u30B1\u30FC\u30B9",brand:"PORTER",category:"fashion",priority:2,qty:1,price:42e3,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["PORTER \u6F80\u8C37"],weightKg:1,luggage:"checked"},{name:"nanocare \u5439\u98A8\u6A5F",nameJa:"\u30D8\u30A2\u30FC\u30C9\u30E9\u30A4\u30E4\u30FC \u30CA\u30CE\u30B1\u30A2",brand:"Panasonic",category:"tech",priority:2,qty:1,price:38610,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:7,area:"\u6709\u6A02\u753A",stores:["Bic Camera","Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09"],weightKg:.9,luggage:"checked",note:"\u78BA\u8A8D\u662F\u5426\u6709\u6D77\u5916\u96FB\u58D3\u7248\u672C\u3002"},{name:"\u4EFB\u5929\u5802 \u9650\u5B9A\u5468\u908A",nameJa:"Nintendo TOKYO \u9650\u5B9A\u30B0\u30C3\u30BA",brand:"Nintendo TOKYO",category:"anime",priority:1,qty:1,price:5500,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["\u4EFB\u5929\u5802\u5546\u5E97"],buyFor:"\u963F\u54F2",weightKg:.8,luggage:"checked"},{name:"\u7D05\u8336\u5DE7\u514B\u529B",nameJa:"\u30ED\u30A4\u30E4\u30EB\u30E2\u30F3\u30BF\u30FC\u30CB\u30E5",brand:"LeTAO",category:"souvenir",priority:1,qty:4,price:918,priceIncludesTax:!0,taxRate:8,area:"\u7FBD\u7530\u6A5F\u5834",stores:["\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"],taxFree:!1,weightKg:.15,luggage:"carry",purchased:!0,purchasedStore:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"},{name:"\u62B9\u8336\u7C89 40g",nameJa:"\u62B9\u8336 40g\u7F36",brand:"\u4E00\u4FDD\u5802\u8336\u8217",category:"souvenir",priority:2,qty:2,price:2160,priceIncludesTax:!0,taxRate:8,taxFree:!1,area:"\u4EAC\u90FD",stores:["\u4E00\u4FDD\u5802\u8336\u8217 \u4EAC\u90FD\u672C\u5E97"],weightKg:.12,luggage:"checked",note:"\u55AE\u5E97\u672A\u9054\u514D\u7A05\u9580\u6ABB\u4E5F\u6C92\u95DC\u4FC2\u3002"},{name:"\u6307\u7532\u526A",nameJa:"\u722A\u5207\u308A",brand:"\u8C9D\u5370 KAI",category:"craft",priority:2,qty:2,price:1100,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09","LoFt"],buyFor:"\u963F\u54F2",weightKg:.05,luggage:"checked",blade:!0,purchased:!0,purchasedStore:"Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09"},{name:"\u5408\u5229\u4ED6\u547D EX Plus",nameJa:"\u30A2\u30EA\u30CA\u30DF\u30F3EX\u30D7\u30E9\u30B9",brand:"Alinamin",category:"beauty",priority:3,qty:1,price:6578,priceIncludesTax:!0,taxRate:10,taxFree:!0,anyStore:!0,weightKg:.2,luggage:"checked",note:"\u5230\u8655\u90FD\u6709\uFF0C\u770B\u5230\u4FBF\u5B9C\u5C31\u8CB7\u3002"},{name:"\u4F11\u8DB3\u6642\u9593 \u8CBC\u5E03",nameJa:"\u4F11\u8DB3\u6642\u9593",brand:"Lion",category:"beauty",priority:1,qty:3,price:1078,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["\u5510\u5409\u8A36\u5FB7"],weightKg:.15,luggage:"checked"}],De=[{text:"\u8B77\u7167",done:!1},{text:"\u884C\u52D5\u96FB\u6E90\uFF08\u96A8\u8EAB\u3001\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u4E0D\u80FD\u7528\uFF09",done:!1},{text:"\u884C\u674E\u79E4",done:!1},{text:"\u6613\u788E\u54C1\u7528\u6C23\u6CE1\u888B",done:!1}];function et(t){return String(t??"").normalize("NFKC").toLowerCase().replace(/[\s・·•\-‐–—_()（）「」『』[\]【】.,，、。/／|]/g,"")}var ks=t=>et(t).replace(/(本店|本館|店舗|店)$/,"");function Ss(t,a){if(!et(t)||et(t)===et(a))return!1;let e=ks(t),o=ks(a);if(!e||!o)return!1;if(e===o)return!0;let s=e.length<=o.length?e:o,n=e.length<=o.length?o:e;if(s.length>=3&&n.includes(s))return!0;let r=new Set(e),i=new Set(o),u=[...r].filter(p=>i.has(p)).length/new Set([...r,...i]).size;return s.length>=2&&u>=.75&&Math.abs(e.length-o.length)<=3}function Ts(t,a){let e=et(t);if(!e)return[];let o=new Set;return a.filter(s=>{let n=et(s);return n===e||o.has(n)?!1:(o.add(n),Ss(t,s))})}function Es(t,a=[]){let e=[...new Map(t.filter(Boolean).map(s=>[et(s),s.trim()])).values()],o=[];for(let s=0;s<e.length;s++)for(let n=s+1;n<e.length;n++){if(!Ss(e[s],e[n]))continue;let r=Aa(e[s],e[n]);a.includes(r)||o.push([e[s],e[n]])}return o}var Aa=(t,a)=>[et(t),et(a)].sort().join("\uFF5C");var Ms="shopping-relics:v1",ta={tripName:"\u6211\u7684\u65E5\u672C\u8CFC\u7269\u4E4B\u65C5",rate:.21,rateSource:"default",rateUpdatedAt:null,budget:15e4,refundFeePct:0,cardRebatePct:0,checkedLimit:23,carryLimit:7,checkedBase:8,carryBase:3,flightNote:"",ignoredStorePairs:[],customStores:[],storeMeta:{},paidFriends:{},payLog:{},inspectedGroups:{},friendMeta:{},listView:"store"},fo=()=>crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`;function te(t={}){let a=r=>String(r??"").trim(),e=Array.isArray(t.stores)?t.stores.map(a).filter(Boolean):a(t.store)?[a(t.store)]:[];e=e.filter((r,i)=>e.findIndex(l=>et(l)===et(r))===i).slice(0,3);let o=!!t.anyStore&&e.length===0,s=!!t.purchased,n=s?a(t.purchasedStore??(Array.isArray(t.stores)?"":t.store)):"";return{id:t.id||fo(),name:String(t.name??"").trim(),nameJa:String(t.nameJa??"").trim(),brand:String(t.brand??"").trim(),category:t.category||"other",priority:Number(t.priority)||2,qty:Math.max(1,Math.round(Number(t.qty)||1)),price:Math.max(0,Number(t.price)||0),priceIncludesTax:t.priceIncludesTax!==!1,taxRate:[1,8].includes(Number(t.taxRate))?Number(t.taxRate):10,taxFree:t.taxFree!==!1,discountPct:Math.min(100,Math.max(0,Number(t.discountPct)||0)),refundFeePct:t.refundFeePct===""||t.refundFeePct==null?null:Number(t.refundFeePct),area:String(t.area??"").trim(),stores:e,anyStore:o,purchasedStore:n,store:s?n||e[0]||"":e[0]||"",buyFor:String(t.buyFor??"").replace(/^[@＠]+/,"").trim(),planDate:t.planDate||"",jan:String(t.jan??"").replace(/\D/g,""),weightKg:Math.max(0,Number(t.weightKg)||0),luggage:["checked","carry","none"].includes(t.luggage)?t.luggage:"checked",fragile:!!t.fragile,liquid:!!t.liquid,battery:!!t.battery,blade:!!t.blade,packed:!!t.packed,purchased:s,purchasedAt:t.purchasedAt||null,image:t.image||"",note:String(t.note??""),demo:!!t.demo,createdAt:t.createdAt||Date.now()}}function go(){try{let t=JSON.parse(localStorage.getItem(Ms)||"null");if(t&&Array.isArray(t.items))return{items:t.items.map(te),settings:{...ta,...t.settings},packing:Array.isArray(t.packing)?t.packing:structuredClone(De)}}catch{}return{items:[],settings:{...ta},packing:structuredClone(De)}}var rt=go(),La=new Set;function ho(){try{return localStorage.setItem(Ms,JSON.stringify(rt)),!0}catch(t){return console.warn("\u5132\u5B58\u5931\u6557",t),window.dispatchEvent(new CustomEvent("store:quota")),!1}}function Ot(){let t=ho();return La.forEach(a=>a(rt)),t}var y={get state(){return rt},subscribe(t){return La.add(t),()=>La.delete(t)},getItem(t){return rt.items.find(a=>a.id===t)},addItem(t){let a=te(t);return rt.items=[a,...rt.items],Ot(),a},updateItem(t,a){return rt.items=rt.items.map(e=>e.id===t?te({...e,...a,id:t}):e),Ot()},removeItem(t){let a=this.getItem(t);return rt.items=rt.items.filter(e=>e.id!==t),Ot(),a},restoreItem(t,a=0){let e=[...rt.items];e.splice(a,0,t),rt.items=e,Ot()},togglePurchased(t,a,e){let o=this.getItem(t);if(!o)return null;let s=a??!o.purchased;return this.updateItem(t,{purchased:s,purchasedAt:s?Date.now():null,purchasedStore:s?e??o.stores[0]??"":""}),this.getItem(t)},addCustomStore(t){let a=String(t??"").trim();!a||rt.settings.customStores.some(e=>et(e)===et(a))||(rt.settings={...rt.settings,customStores:[...rt.settings.customStores,a]},Ot())},setStoreMeta(t,a){let e=et(t),o={...rt.settings.storeMeta,[e]:{...rt.settings.storeMeta[e],...a}};rt.settings={...rt.settings,storeMeta:o},Ot()},renameStore(t,a){let e=et(t),o=s=>et(s)===e?a:s;return rt.items=rt.items.map(s=>te({...s,stores:s.stores.map(o),purchasedStore:o(s.purchasedStore)})),rt.settings={...rt.settings,customStores:rt.settings.customStores.map(o)},Ot()},updateSettings(t){rt.settings={...rt.settings,...t},Ot()},setPacking(t){rt.packing=t,Ot()},loadDemo(){let t=Date.now(),a=xs.map((e,o)=>te({...e,demo:!0,createdAt:t-o*1e3}));rt.items=[...rt.items,...a],Ot()},clearDemo(){rt.items=rt.items.filter(t=>!t.demo),Ot()},exportJSON(){return JSON.stringify({app:"shopping-relics",version:1,exportedAt:new Date().toISOString(),...rt},null,2)},dataJSON(){return JSON.stringify(rt)},importJSON(t){this.importData(JSON.parse(t))},importData(t){if(!t||!Array.isArray(t.items))throw new Error("\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26");rt={items:t.items.map(te),settings:{...ta,...t.settings},packing:Array.isArray(t.packing)?t.packing:structuredClone(De)},Ot()},resetAll(){rt={items:[],settings:{...ta},packing:structuredClone(De)},Ot()}};var As="2026/11/7",qe="\u4E0D\u9650\u5E97\u92EA\uFF08\u6BD4\u50F9\u4E2D\uFF09",bo="\u767E\u8CA8\u9000\u7A05\u591A\u534A\u6703\u6536\u624B\u7E8C\u8CBB\uFF0C\u65B0\u5236\u8CBB\u7387\u4F9D\u5E97\u5BB6\u516C\u544A\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF1A\u9AD8\u5CF6\u5C4B 1.55%\u3001\u5927\u4E38\uFF0F\u677E\u5742\u5C4B 2.3%\uFF09\u3002",je=[{id:"drug",label:"\u85E5\u599D\u7F8E\u599D",icon:"spa",stores:[{name:"\u677E\u672C\u6E05"},{name:"\u5927\u570B\u85E5\u599D"},{name:"Sundrug\uFF08\u5C1A\u90FD\u6A02\u5BA2\uFF09",coupons:[{pct:3,min:1e4},{pct:5,min:3e4},{pct:7,min:5e4}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA510,000\uFF0F\xA530,000\uFF0F\xA550,000\uFF0C\u5206\u5225\u518D\u6298 3%\uFF0F5%\uFF0F7%\uFF1B\u5C08\u6AC3\u4FDD\u990A\u54C1\u3001\u83F8\u9152\u7B49\u9664\u5916\uFF0C\u7D50\u5E33\u524D\u51FA\u793A\u3002",couponUrl:"https://app.likejapan.com/en-us/coupon/SUNDRUG-pharmacy-coupon-7percent",source:"LikeJapan\uFF082025/12 \u66F4\u65B0\uFF09"},{name:"OS Drug",noTaxFree:!0,note:"\u4F9D\u4F60\u7684\u5099\u8A3B\uFF1A\u4E0D\u8FA6\u514D\u7A05\uFF0C\u4F46\u73FE\u91D1\u50F9\u5F88\u4F4E\u3002"},{name:"@cosme TOKYO"}]},{id:"variety",label:"\u7D9C\u5408\u8CE3\u5834\uFF0F\u96DC\u8CA8",icon:"storefront",stores:[{name:"\u5510\u5409\u8A36\u5FB7",coupons:[{pct:5,min:1e4},{pct:7,min:3e4}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA510,000 \u518D\u6298 5%\u3001\u6EFF \xA530,000 \u6298 7%\uFF1B\u9152\u3001\u83F8\u3001\u904A\u6232\u4E3B\u6A5F\u7B49\u9664\u5916\u3002\u9700\u7D50\u5E33\u524D\u51FA\u793A\u5373\u6642\u689D\u78BC\uFF0C\u622A\u5716\u7121\u6548\u3002",couponUrl:"https://livejapan.com/public/operation/coupon/donki/ja.html",source:"LIVE JAPAN\uFF082026/4/28 \u66F4\u65B0\uFF09",refundFeePct:0,feeNote:"\u65B0\u5236\u9000\u7A05\u624B\u7E8C\u8CBB 0 \u5143\uFF1A\u6BCD\u516C\u53F8 PPIH \u5BA3\u5E03 2026/11/1 \u8D77\u5168\u65E5\u672C\u9580\u5E02\u7531\u5E97\u5BB6\u5438\u6536\uFF08\u671F\u9593\u8207\u689D\u4EF6\u53EF\u80FD\u8ABF\u6574\uFF09\u3002\u82E5\u5230\u6A5F\u5834\u9818\u73FE\u91D1\uFF0C\u6A5F\u53F0\u696D\u8005\u4ECD\u6703\u53E6\u6536\u670D\u52D9\u8CBB\u3002"},{name:"LoFt"},{name:"Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09"},{name:"\u7121\u5370\u826F\u54C1"},{name:"3COINS"},{name:"Life \u8D85\u5E02"},{name:"\u696D\u52D9\u8D85\u5E02"}]},{id:"tech",label:"\u96FB\u5668\uFF0F\u52D5\u6F2B",icon:"devices",stores:[{name:"Bic Camera",coupons:[{pct:7,min:5e3,label:"\u5BB6\u96FB\u30FB\u76F8\u6A5F\u30FB\u624B\u9336",categories:["tech","craft"]},{pct:5,min:5e3,label:"\u85E5\u599D\u30FB\u65E5\u7528\u54C1",categories:["beauty","other","fashion"]},{pct:3,min:5e3,label:"\u65E5\u672C\u9152",categories:["liquor"]}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA55,000\uFF0C\u4F9D\u985E\u5225\u518D\u6298 7%\uFF08\u5BB6\u96FB\u3001\u76F8\u6A5F\u3001\u624B\u9336\uFF09\uFF0F5%\uFF08\u85E5\u599D\u3001\u65E5\u7528\u54C1\uFF09\uFF0F3%\uFF08\u65E5\u672C\u9152\uFF09\uFF1BApple\u3001\u904A\u6232\u4E3B\u6A5F\u7B49\u9664\u5916\u3002\u5B98\u65B9\u9801\u9762\u6A19\u793A\u6709\u6548\u81F3 2026/8/31\uFF0C\u8ACB\u78BA\u8A8D\u65B0\u7248\u512A\u60E0\u5238\u3002",couponUrl:"https://livejapan.com/public/operation/coupon/biccamera/en.html",source:"LIVE JAPAN",refundFeePct:0,feeNote:"\u65B0\u5236\u9000\u7A05\u624B\u7E8C\u8CBB 0 \u5143\uFF08\u4F9D 2026/10 \u5831\u5C0E\uFF0C\u7531\u5E97\u5BB6\u5438\u6536\uFF0C\u689D\u4EF6\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002\u82E5\u5230\u6A5F\u5834\u9818\u73FE\u91D1\uFF0C\u6A5F\u53F0\u696D\u8005\u4ECD\u6703\u53E6\u6536\u670D\u52D9\u8CBB\u3002"},{name:"Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09",feeNote:"\u90E8\u5206\u5927\u578B\u9580\u5E02\u8A2D\u6709 Global Blue \u5E02\u5340\u73FE\u91D1\u9000\u7A05\u6AC3\u53F0\uFF0C\u53EF\u5728\u5E97\u5167\u5148\u9818\u73FE\u91D1\uFF08\u9700\u767B\u8A18\u4FE1\u7528\u5361\u64D4\u4FDD\uFF09\uFF1B\u51FA\u5883\u6642\u4ECD\u8981\u5728\u6A5F\u5834\u5B8C\u6210\u6D77\u95DC\u78BA\u8A8D\uFF0C\u5426\u5247\u6703\u5F9E\u4FE1\u7528\u5361\u6263\u56DE\u3002\u5E97\u5BB6\u624B\u7E8C\u8CBB\u9996\u65E5\u56DE\u5831\u70BA 0%\uFF08\u5C1A\u5F85\u5B98\u65B9\u516C\u544A\uFF09\u3002"},{name:"Animate\uFF08\u5B89\u5229\u7F8E\u7279\uFF09"},{name:"\u79CB\u8449\u539F\u5C08\u8CE3\u5E97"},{name:"\u4E2D\u91CE\u767E\u8001\u532F"},{name:"\u5BF6\u53EF\u5922\u4E2D\u5FC3"},{name:"\u4EFB\u5929\u5802\u5546\u5E97"}]},{id:"gift",label:"\u4F34\u624B\u79AE\uFF0F\u767E\u8CA8",icon:"bakery_dining",stores:[{name:"\u6210\u7530\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u95DC\u897F\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u6771\u4EAC\u8ECA\u7AD9\u4E00\u756A\u8857"},{name:"\u4F0A\u52E2\u4E39",dept:!0},{name:"\u9AD8\u5CF6\u5C4B",dept:!0,feeNote:"\u65B0\u5236\u9000\u7A05\u516C\u53F8\u70BA Global Blue\uFF0C\u624B\u7E8C\u8CBB 1.55%\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF0C\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002"},{name:"\u5927\u4E38",dept:!0,feeNote:"\u65B0\u5236\u9000\u7A05\u516C\u53F8\u70BA Global Blue\uFF0C\u5927\u4E38\uFF0F\u677E\u5742\u5C4B\u624B\u7E8C\u8CBB 2.3%\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF0C\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002"},{name:"\u962A\u6025\u767E\u8CA8",dept:!0,couponNote:"\u51FA\u793A\u8B77\u7167\u53EF\u9818\u5916\u570B\u65C5\u5BA2 5% \u512A\u5F85\u5238\uFF0C\u767C\u5238\u8D77 7 \u5929\u5167\u53EF\u7528\uFF1B\u7279\u50F9\u54C1\u3001\u98DF\u54C1\u3001\u672A\u7A05 \xA51,000 \u4EE5\u4E0B\u5546\u54C1\u9664\u5916\u3002",couponUrl:"https://global.hankyu-hanshin-dept.co.jp/store/hankyuhonten/service/",source:"\u962A\u6025\u767E\u8CA8\u5B98\u7DB2"}]},{id:"cvs",label:"\u4FBF\u5229\u5546\u5E97",icon:"local_convenience_store",stores:[{name:"7-11"},{name:"Lawson"},{name:"FamilyMart"}]}],Ls=new Map;for(let t of je)for(let a of t.stores)Ls.set(et(a.name),{...a,group:t.id});function ee(t){return Ls.get(et(t))??null}function he(t,a={}){let e=ee(t)??{},o=a[et(t)]??{},s={...e,...o,name:t};return e.dept&&!s.feeNote&&(s.feeNote=bo),e.dutyFree&&(s.dutyNote="\u51FA\u5883\u7BA1\u5236\u5340\u5167\u7684\u514D\u7A05\u5E97\u552E\u50F9\u5DF2\u4E0D\u542B\u6D88\u8CBB\u7A05\uFF0C\u4E0D\u9700\u53E6\u8FA6\u9000\u7A05\u3002"),s}function Ps(t,a){return t?.coupons?.length?t.coupons.find(o=>o.categories?.includes(a))??null:null}var dt=5e3;var Nt=t=>Math.round(t);function Gt(t){return t.battery?"carry":t.blade||t.liquid&&!(t.purchased&&ee(t.purchasedStore)?.dutyFree)?"checked":t.luggage}var ne=t=>{let a=new Date(t);return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`};function ke(t,a){let e=t.taxRate/100,o=t.priceIncludesTax?t.price/(1+e):t.price,s=1-t.discountPct/100,n=o*s*t.qty,r=n*e,i=n+r,l=t.refundFeePct??ee(t.purchasedStore||t.store)?.refundFeePct??a.refundFeePct??0,u=o*(1+e)*t.qty;return{unitExcl:Nt(o),unitIncl:Nt(o*(1+e)),listIncl:Nt(u),discount:Nt(u-i),lineExcl:Nt(n),tax:Nt(r),pay:Nt(i),fee:Nt(i*(l/100)),feePct:l}}var vo=t=>`${et(t.store)}|${t.purchased&&t.purchasedAt?ne(t.purchasedAt):t.planDate||ne(Date.now())}`;function $o(t,a){let e=new Map;for(let o of t){let s=o.store.trim()?vo(o):`__solo__${o.id}`;e.has(s)||e.set(s,{key:s,store:o.store.trim(),area:o.area,date:o.purchased&&o.purchasedAt?ne(o.purchasedAt):o.planDate||"",items:[],eligibleExcl:0,totalPay:0});let n=e.get(s),r=ke(o,a);n.items.push(o),n.totalPay+=r.pay,o.taxFree&&(n.eligibleExcl+=r.lineExcl),!n.area&&o.area&&(n.area=o.area)}for(let o of e.values())o.hasTaxFreeItems=o.items.some(s=>s.taxFree),o.eligible=o.hasTaxFreeItems&&o.eligibleExcl>=dt,o.shortfall=Math.max(0,dt-o.eligibleExcl),o.progress=Math.min(1,o.eligibleExcl/dt),o.undatedMerge=!!o.store&&!o.date&&o.hasTaxFreeItems&&o.items.filter(s=>s.taxFree).length>=2,o.mergeNeeded=o.undatedMerge&&o.eligible&&o.items.every(s=>!s.taxFree||ke(s,a).lineExcl<dt);return e}function be(t,a){let e=$o(t,a),o=new Map;for(let s of e.values())for(let n of s.items){let r=ke(n,a),i=n.taxFree&&s.eligible,l=i?Math.max(0,r.tax-r.fee):0;o.set(n.id,{...r,refundable:i,refund:l,net:r.pay-l,group:s,weight:n.weightKg*n.qty})}return{groups:e,byItem:o}}function ea(t){let{items:a,settings:e}=t,{groups:o,byItem:s}=be(a,e),n={count:a.length,purchasedCount:0,pendingCount:0,pay:0,paid:0,pending:0,refund:0,refundPaid:0,net:0,discount:0,weightChecked:0,weightCarry:0,weightCheckedNow:0,weightCarryNow:0,packedCount:0,packableCount:0,groups:o,byItem:s};for(let r of a){let i=s.get(r.id);n.pay+=i.pay,n.refund+=i.refund,n.net+=i.net,n.discount+=i.discount,r.purchased?(n.purchasedCount+=1,n.paid+=i.pay,n.refundPaid+=i.refund):(n.pendingCount+=1,n.pending+=i.pay);let l=Gt(r);l==="checked"&&(n.weightChecked+=i.weight),l==="carry"&&(n.weightCarry+=i.weight),r.purchased&&l==="checked"&&(n.weightCheckedNow+=i.weight),r.purchased&&l==="carry"&&(n.weightCarryNow+=i.weight),l!=="none"&&(n.packableCount+=1,r.packed&&(n.packedCount+=1))}return n.remaining=e.budget-n.pay,n.budgetUsedPct=e.budget>0?n.paid/e.budget:0,n.budgetPlannedPct=e.budget>0?n.pay/e.budget:0,n.rebate=Math.round(n.pay*(e.cardRebatePct/100)),n.totalChecked=e.checkedBase+n.weightChecked,n.totalCarry=e.carryBase+n.weightCarry,n.totalCheckedNow=e.checkedBase+n.weightCheckedNow,n.totalCarryNow=e.carryBase+n.weightCarryNow,n.undatedGroups=[...o.values()].filter(r=>r.undatedMerge),n.eligibleStores=[...o.values()].filter(r=>r.eligible).length,n.taxFreeStores=[...o.values()].filter(r=>r.hasTaxFreeItems&&r.store).length,n}function Cs({price:t,includesTax:a,taxRate:e,discountPct:o,feePct:s}){let n=e/100,r=(a?t/(1+n):t)*(1-o/100),i=r*n,l=r+i,u=r>=dt,p=l*(s/100),h=u?Math.max(0,i-p):0,g=a?t:t*(1+n);return{excl:Nt(r),tax:Nt(i),pay:Nt(l),fee:Nt(p),refund:Nt(h),net:Nt(l-h),eligible:u,saved:Nt(g-(l-h))}}var yo=35e3,Fs="2026/11/11";function Rs(t,a){let{rate:e}=t.settings,o={now:0,planned:0,count:0,liquorCount:0,limit:yo};for(let s of t.items){if(Gt(s)==="none")continue;if(s.category==="liquor"){s.purchased&&(o.liquorCount+=1);continue}let n=a.byItem.get(s.id).net*e;o.planned+=n,s.purchased&&(o.now+=n,o.count+=1)}return o.now=Math.round(o.now),o.planned=Math.round(o.planned),o.over=Math.max(0,o.now-o.limit),o.plannedOver=Math.max(0,o.planned-o.limit),o}var wo=[{name:"ExchangeRate-API",url:"https://open.er-api.com/v6/latest/JPY",pick:t=>t?.result==="success"?t.rates?.TWD:void 0},{name:"fawazahmed0 currency-api",url:"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/jpy.min.json",pick:t=>t?.jpy?.twd}],xo=6*60*60*1e3;async function ko(t,a=8e3){let e=new AbortController,o=setTimeout(()=>e.abort(),a);try{let s=await fetch(t,{signal:e.signal,cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);return await s.json()}finally{clearTimeout(o)}}async function Se({force:t=!1}={}){let{settings:a}=y.state;if(!t&&a.rateSource==="manual")return{skipped:"manual"};if(!t&&a.rateUpdatedAt&&Date.now()-a.rateUpdatedAt<xo)return{skipped:"fresh"};for(let e of wo)try{let o=Number(e.pick(await ko(e.url)));if(o>0&&o<10)return y.updateSettings({rate:o,rateSource:"api",rateUpdatedAt:Date.now(),rateProvider:e.name}),{ok:!0,rate:o,provider:e.name}}catch(o){console.info(`\u532F\u7387\u4F86\u6E90 ${e.name} \u7121\u6CD5\u4F7F\u7528\uFF1A`,o.message)}return{ok:!1}}function aa(t){y.updateSettings({rate:t,rateSource:"manual",rateUpdatedAt:Date.now(),rateProvider:"\u624B\u52D5\u8F38\u5165"})}var So={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},d=t=>String(t??"").replace(/[&<>"']/g,a=>So[a]),bt=(t,a=document)=>a.querySelector(t),Te=(t,a=document)=>[...a.querySelectorAll(t)],To=new Intl.NumberFormat("ja-JP"),Eo=new Intl.NumberFormat("zh-TW",{maximumFractionDigits:0}),b=t=>`\xA5${To.format(Math.round(t||0))}`,vt=(t,a)=>`NT$ ${Eo.format(Math.round((t||0)*a))}`,ut=(t,a=0)=>new Intl.NumberFormat("zh-TW",{minimumFractionDigits:a,maximumFractionDigits:a}).format(t||0),Wt=t=>`${ut(t,t>=10?1:2)} kg`;var Is=t=>{let a=String(t).match(/-?\d[\d,]*(\.\d+)?/);return a?{str:a[0],val:parseFloat(a[0].replace(/,/g,""))}:null};function Ee(t,a){let e=new Map;return t?.querySelectorAll(a).forEach((o,s)=>e.set(o.dataset.countKey??s,o.textContent)),e}function Me(t,a,e){!t||matchMedia("(prefers-reduced-motion: reduce)").matches||t.querySelectorAll(a).forEach((o,s)=>{let n=e.get(o.dataset.countKey??s);if(n==null)return;let r=Is(n),i=Is(o.textContent);if(!r||!i||r.val===i.val)return;let l=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),u=l.nextNode();for(;u&&!u.nodeValue.includes(i.str);)u=l.nextNode();if(!u)return;let p=(i.str.split(".")[1]||"").length,h=$=>$.toLocaleString("en-US",{minimumFractionDigits:p,maximumFractionDigits:p}),g=u.nodeValue,A=performance.now(),m=$=>{let v=Math.min(1,($-A)/400),x=1-(1-v)**3;u.nodeValue=v<1?g.replace(i.str,h(r.val+(i.val-r.val)*x)):g,v<1&&requestAnimationFrame(m)};requestAnimationFrame(m)})}var c=(t,a="")=>`<span class="ms ${a}" aria-hidden="true">${t}</span>`;function Oe(t){if(!t)return"";let a=typeof t=="number"?new Date(t):new Date(`${t}T00:00:00`);return new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",weekday:"short"}).format(a)}function jt(t){return t?new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)):""}var Pa=[];function Dt(t,{onClose:a,backdropClose:e=!0}={}){let o=document.activeElement;t.addEventListener("close",function n(){t.removeEventListener("close",n);let r=Pa.indexOf(t);r>-1&&Pa.splice(r,1),a?.(),o&&document.contains(o)&&o.focus({preventScroll:!0})}),e&&t.addEventListener("click",n=>{n.target===t&&ft(t)}),Pa.push(t),t.showModal(),(t.querySelector("[autofocus]")??t.querySelector(".dlg-close"))?.focus()}function Mo(t){let a=document.getElementById("toast-region");if(!a||!t.contains(a))return;([...document.querySelectorAll("dialog[open]:not(.closing)")].filter(o=>o!==t).at(-1)??document.body).append(a)}function ft(t){if(!t?.open)return;let a=matchMedia("(prefers-reduced-motion: reduce)").matches,e=()=>{Mo(t),t.close(),t.remove()};if(a){e();return}t.classList.add("closing"),setTimeout(e,180)}function qt(t,a,e){let o=document.createElement("dialog");return o.className=`dlg ${t}`,e&&o.setAttribute("aria-labelledby",e),o.innerHTML=a,document.body.append(o),o.addEventListener("cancel",s=>{s.preventDefault(),ft(o)}),o}function Jt({title:t,body:a,confirmText:e,danger:o=!1}){return new Promise(s=>{let n=!1,r=qt("dlg-confirm",`
      <form method="dialog" class="confirm-body">
        <h2 id="confirm-title" class="confirm-title">${d(t)}</h2>
        <p class="confirm-text">${a}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-act="cancel" autofocus>\u53D6\u6D88</button>
          <button type="button" class="btn ${o?"btn-danger":"btn-gold"}" data-act="ok">${d(e)}</button>
        </div>
      </form>`,"confirm-title");r.addEventListener("click",i=>{let l=i.target.closest("[data-act]")?.dataset.act;l&&(n=l==="ok",ft(r))}),Dt(r,{onClose:()=>s(n)})})}function Ds({title:t,body:a,choices:e}){return new Promise(o=>{let s=null,n=qt("dlg-confirm",`
      <form method="dialog" class="confirm-body">
        <h2 id="choice-title" class="confirm-title">${d(t)}</h2>
        <div class="confirm-text">${a}</div>
        <div class="confirm-actions confirm-actions-stack">
          ${e.map(r=>`<button type="button" class="btn ${r.tone==="danger"?"btn-danger":r.tone==="gold"?"btn-gold":"btn-ghost"}" data-choice="${d(r.value)}">${d(r.text)}</button>`).join("")}
          <button type="button" class="btn btn-ghost" data-choice="" autofocus>\u53D6\u6D88</button>
        </div>
      </form>`,"choice-title");n.addEventListener("click",r=>{let i=r.target.closest("[data-choice]");i&&(s=i.dataset.choice||null,ft(n))}),Dt(n,{onClose:()=>o(s)})})}var _s;function N({title:t,message:a="",actionText:e,onAction:o,tone:s="gold",duration:n=5e3}){let r=bt("#toast-region");clearTimeout(_s),r.innerHTML=`
    <div class="toast toast-${s}" role="status">
      <span class="toast-icon">${c(s==="error"?"error":"stars")}</span>
      <div class="toast-text">
        <strong>${d(t)}</strong>
        ${a?`<span>${a}</span>`:""}
      </div>
      ${e?`<button type="button" class="toast-action">${d(e)}</button>`:""}
      <button type="button" class="toast-close" aria-label="\u95DC\u9589\u901A\u77E5">${c("close")}</button>
    </div>`;let i=r.firstElementChild,l=[...document.querySelectorAll("dialog[open]:not(.closing)")].at(-1);l&&r.parentElement!==l?l.append(r):!l&&r.parentElement!==document.body&&document.body.append(r);let u=()=>{i.classList.add("out"),setTimeout(()=>i.remove(),200)};i.querySelector(".toast-close").addEventListener("click",u),i.querySelector(".toast-action")?.addEventListener("click",()=>{o?.(),u()}),_s=setTimeout(u,n)}var sa=["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],Ao=sa.map(t=>[...t].map(a=>a==="0"?"1":"0").reverse().join("")),Ns=sa.map(t=>[...t].map(a=>a==="0"?"1":"0").join("")),Lo=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];function Ue(t){if(!/^\d{13}$/.test(t)&&!/^\d{8}$/.test(t))return!1;let a=[...t].map(Number),e=a.pop();return(10-a.reverse().reduce((s,n,r)=>s+n*(r%2===0?3:1),0)%10)%10===e}function qs(t){if(!Ue(t))return"";let a=[...t].map(Number),e="101";if(a.length===13){let r=Lo[a[0]];for(let i=1;i<=6;i++)e+=(r[i-1]==="L"?sa:Ao)[a[i]];e+="01010";for(let i=7;i<=12;i++)e+=Ns[a[i]]}else{for(let r=0;r<4;r++)e+=sa[a[r]];e+="01010";for(let r=4;r<8;r++)e+=Ns[a[r]]}e+="101";let o=9,s=e.length+o*2,n="";return[...e].forEach((r,i)=>{r==="1"&&(n+=`<rect x="${i+o}" y="0" width="1" height="50"/>`)}),`<svg class="barcode" viewBox="0 0 ${s} 50" preserveAspectRatio="none" role="img" aria-label="JAN \u689D\u78BC ${t}"><rect width="${s}" height="50" fill="#fff"/><g fill="#000">${n}</g></svg>`}function js(t,a=480,e=.78){return new Promise((o,s)=>{let n=new FileReader;n.onerror=()=>s(new Error("\u8B80\u53D6\u5716\u7247\u5931\u6557")),n.onload=()=>{let r=new Image;r.onerror=()=>s(new Error("\u7121\u6CD5\u89E3\u6790\u9019\u5F35\u5716\u7247")),r.onload=()=>{let i=Math.min(1,a/Math.max(r.width,r.height)),l=document.createElement("canvas");l.width=Math.round(r.width*i),l.height=Math.round(r.height*i),l.getContext("2d").drawImage(r,0,0,l.width,l.height),o(l.toDataURL("image/jpeg",e))},r.src=n.result},n.readAsDataURL(t)})}function na(t,a,e="text/plain"){let o=new Blob([a],{type:`${e};charset=utf-8`}),s=URL.createObjectURL(o),n=Object.assign(document.createElement("a"),{href:s,download:t});document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function oe(t,{label:a,tone:e="gold",max:o=1}={}){let s=Math.max(0,Math.min(o,t));return`<div class="bar bar-${t>o?"danger":e}" role="progressbar" aria-label="${d(a)}"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(t/o*100)}">
      <span style="--w:${s/o*100}%"></span></div>`}function re(t,a,e){let o=0,s=t.map(n=>{let r=a>0?Math.max(0,Math.min(100-o,n.value/a*100)):0;return o+=r,`<span class="seg-${n.tone}" style="--w:${r}%"></span>`}).join("");return`<div class="stack-bar stack-sm" role="img" aria-label="${d(e)}">${s}</div>`}var Ca=3;function Be(){let{items:t,settings:a}=y.state,e=[...a.customStores,...t.flatMap(s=>[...s.stores,s.purchasedStore])].filter(Boolean),o=new Set;return e.filter(s=>{let n=et(s);return o.has(n)||ee(s)?!1:(o.add(n),!0)})}var Os=(t,a)=>`<button type="button" class="chip chip-sm store-chip ${a?"on":""}" data-pick="${d(t)}" aria-pressed="${a}">${d(t)}</button>`;function oa(t){let a=[];if(t.noTaxFree&&a.push(`<li>${c("block","sm")}${d(t.note??"\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05\u3002")}</li>`),t.dutyNote&&a.push(`<li>${c("flight_takeoff","sm")}${d(t.dutyNote)}</li>`),t.couponNote&&a.push(`<li>${c("local_offer","sm")}${d(t.couponNote)}</li>`),t.feeNote&&a.push(`<li>${c("info","sm")}${d(t.feeNote)}</li>`),t.myNote&&a.push(`<li>${c("edit_note","sm")}${d(t.myNote)}</li>`),!a.length)return"";let e=t.source?`\u8CC7\u6599\u4F86\u6E90\uFF1A${d(t.source)}\uFF0C`:"";return`<ul class="store-notes">${a.join("")}</ul>
    <p class="store-src">${e}${ee(t.name)?`\u67E5\u8B49\u65E5 ${As}\uFF0C`:""}\u5BE6\u969B\u4EE5\u5E97\u5BB6\u516C\u544A\u70BA\u6E96\u3002</p>`}function Us(t,a){return`
  <div class="field store-field">
    <span class="label" id="lb-store">\u76EE\u6A19\u5E97\u92EA <small>\uFF08\u53EF\u8907\u9078 ${Ca} \u5BB6\uFF0C\u7B2C\u4E00\u5BB6\u70BA\u4E3B\u9078\uFF09</small></span>
    <div class="store-selected" data-store-selected aria-live="polite"></div>
    <button type="button" class="btn btn-ghost btn-sm store-open" data-store-open aria-expanded="false" aria-controls="store-panel">${c("storefront","sm")}<span>\u9078\u64C7\u5E97\u92EA</span></button>
    <div class="store-panel" id="store-panel" role="group" aria-labelledby="lb-store" hidden>
      <div class="store-custom">
        <label for="fi-store-custom" class="sr-only">\u8F38\u5165\u81EA\u8A02\u5E97\u540D</label>
        <input id="fi-store-custom" list="dl-store" placeholder="\u8F38\u5165\u81EA\u8A02\u5E97\u540D\uFF0C\u4F8B\u5982\uFF1A\u5409\u4F0A\u5361\u54C7\u6A02\u5712" autocomplete="off" enterkeyhint="done">
        <button type="button" class="btn btn-slate btn-sm" data-store-add>${c("add","sm")}\u52A0\u5165</button>
      </div>
      <datalist id="dl-store">${Be().map(e=>`<option value="${d(e)}">`).join("")}</datalist>
      <div class="store-suggest" data-store-suggest aria-live="polite"></div>
      <div data-store-groups></div>
    </div>
    <div class="store-info" data-store-info></div>
  </div>`}function Bs(t,a,e){let o=[...a.stores],s=a.anyStore,n=m=>t.querySelector(m),r=n("#store-panel"),i=n("[data-store-open]"),l=()=>{let m=v=>o.some(x=>et(x)===et(v)),$=Be();n("[data-store-groups]").innerHTML=`
      ${$.length?`<p class="store-group-title">${c("bookmark","sm")}\u6211\u7684\u5E97\u92EA</p><div class="pills">${$.map(v=>Os(v,m(v))).join("")}</div>`:""}
      ${je.map(v=>`<p class="store-group-title">${c(v.icon,"sm")}${v.label}</p>
        <div class="pills">${v.stores.map(x=>Os(x.name,m(x.name))).join("")}</div>`).join("")}
      <p class="store-group-title">${c("compare_arrows","sm")}\u9084\u6C92\u6C7A\u5B9A</p>
      <div class="pills"><button type="button" class="chip chip-sm store-chip ${s?"on":""}" data-any aria-pressed="${s}">${qe}</button></div>`},u=()=>{let m=n("[data-store-selected]");s?m.innerHTML=`<span class="sel-chip sel-any">${c("compare_arrows","sm")}${qe}<button type="button" class="sel-x" data-any aria-label="\u53D6\u6D88\u4E0D\u9650\u5E97\u92EA">${c("close","sm")}</button></span>`:o.length?m.innerHTML=o.map((v,x)=>`
        <span class="sel-chip ${x===0?"is-main":""}">
          <span class="sel-role">${x===0?"\u4E3B\u9078":"\u5099\u9078"}</span>${d(v)}
          ${x>0?`<button type="button" class="sel-x" data-main="${x}" aria-label="\u628A ${d(v)} \u8A2D\u70BA\u4E3B\u9078">${c("arrow_upward","sm")}</button>`:""}
          <button type="button" class="sel-x" data-remove="${x}" aria-label="\u79FB\u9664 ${d(v)}">${c("close","sm")}</button>
        </span>`).join(""):m.innerHTML='<span class="sel-empty">\u5C1A\u672A\u9078\u64C7\uFF0C\u6309\u4E0B\u65B9\u6309\u9215\u6311\u9078\u6216\u8F38\u5165\u5E97\u540D</span>';let $=o[0]?he(o[0],y.state.settings.storeMeta):null;n("[data-store-info]").innerHTML=$?oa($):""},p=m=>{u(),r.hidden||l(),e({stores:[...o],anyStore:s,picked:m})},h=m=>{let $=String(m??"").trim();return!$||o.some(v=>et(v)===et($))?!1:o.length>=Ca?(N({title:`\u6700\u591A\u9078 ${Ca} \u5BB6\u5E97`,message:"\u8ACB\u5148\u79FB\u9664\u4E00\u5BB6\u518D\u52A0\u5165\u3002",tone:"muted",duration:2500}),!1):(o.push($),s=!1,!0)};t.addEventListener("click",m=>{let $=m.target.closest("button");if(!(!$||!t.contains($))){if($.matches("[data-store-open]")){r.hidden=!r.hidden,i.setAttribute("aria-expanded",String(!r.hidden)),i.querySelector("span:last-child").textContent=r.hidden?"\u9078\u64C7\u5E97\u92EA":"\u6536\u8D77\u5E97\u92EA\u9078\u55AE",r.hidden||l();return}if($.matches("[data-pick]")){let v=$.dataset.pick,x=o.findIndex(J=>et(J)===et(v));if(x>-1)o.splice(x,1);else if(!h(v))return;p(x>-1?null:v),t.querySelector(`[data-pick="${CSS.escape(v)}"]`)?.focus()}else if($.matches("[data-any]"))s=!s,s&&(o=[]),p(null),t.querySelector("[data-store-groups] [data-any], [data-store-open]")?.focus();else if($.matches("[data-remove]"))o.splice(Number($.dataset.remove),1),p(null),i.focus();else if($.matches("[data-main]")){let[v]=o.splice(Number($.dataset.main),1);o.unshift(v),p(v)}else $.matches("[data-store-add]")?A():$.matches("[data-use-store]")&&(n("#fi-store-custom").value=$.dataset.useStore,A())}});let g=n("#fi-store-custom");function A(){let m=g.value.trim();if(!m){g.focus();return}let v=[...Be(),...je.flatMap(x=>x.stores.map(J=>J.name))].find(x=>et(x)===et(m))??m;h(v)&&(ee(v)||y.addCustomStore(v),g.value="",n("[data-store-suggest]").innerHTML="",p(v)),g.focus()}return g.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),A())}),g.addEventListener("input",()=>{let m=[...Be(),...je.flatMap(v=>v.stores.map(x=>x.name))],$=Ts(g.value,m).slice(0,3);n("[data-store-suggest]").innerHTML=$.length?`
      <p>${c("storefront","sm")}\u662F\u9019\u5BB6\u55CE\uFF1F\u540D\u7A31\u4E00\u81F4\u624D\u6703\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\uFF1A</p>
      <div class="pills">${$.map(v=>`<button type="button" class="chip chip-sm" data-use-store="${d(v)}">\u6539\u7528\u300C${d(v)}\u300D</button>`).join("")}</div>`:""}),u(),{get value(){return{stores:[...o],anyStore:s}}}}function Gs(t){return new Promise(a=>{let e=null,o=Be().filter(n=>!t.stores.some(r=>et(r)===et(n))).slice(0,6),s=qt("dlg-confirm dlg-pick",`
      <div class="confirm-body">
        <h2 id="pick-title" class="confirm-title">\u5728\u54EA\u5BB6\u8CB7\u5230\u300C${d(t.name)}\u300D\uFF1F</h2>
        <p class="confirm-text">\u8A18\u9304\u8CFC\u8CB7\u5E97\u5BB6\uFF0C\u624D\u80FD\u6B63\u78BA\u7D2F\u8A08\u8A72\u5E97\u7684\u514D\u7A05\u9580\u6ABB\u3002</p>
        ${t.stores.length?`<p class="store-group-title">\u6E05\u55AE\u4E0A\u7684\u5E97\u92EA</p><div class="pills">${t.stores.map(n=>`<button type="button" class="chip" data-at="${d(n)}">${d(n)}</button>`).join("")}</div>`:""}
        ${o.length?`<p class="store-group-title">\u5176\u4ED6\u5E97\u92EA</p><div class="pills">${o.map(n=>`<button type="button" class="chip chip-sm" data-at="${d(n)}">${d(n)}</button>`).join("")}</div>`:""}
        <form class="store-custom" data-at-form>
          <label for="pick-custom" class="sr-only">\u8F38\u5165\u5E97\u540D</label>
          <input id="pick-custom" placeholder="\u5176\u4ED6\u5E97\u540D" autocomplete="off">
          <button type="submit" class="btn btn-slate btn-sm">\u78BA\u5B9A</button>
        </form>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-at-cancel>\u53D6\u6D88</button>
          <button type="button" class="btn btn-ghost" data-at="">\u5148\u4E0D\u8A18\u9304\u5E97\u5BB6</button>
        </div>
      </div>`,"pick-title");s.addEventListener("click",n=>{let r=n.target.closest("[data-at], [data-at-cancel]");r&&(e=r.matches("[data-at-cancel]")?null:r.dataset.at,ft(s))}),s.querySelector("[data-at-form]").addEventListener("submit",n=>{n.preventDefault();let r=s.querySelector("#pick-custom").value.trim();if(!r)return;let i=ee(r);i||y.addCustomStore(r),e=i?.name??r,ft(s)}),Dt(s,{onClose:()=>a(e)}),s.querySelector(".chip, #pick-custom")?.focus()})}function Js(t){let a=he(t,y.state.settings.storeMeta),e=qt("dlg-confirm",`
    <form class="confirm-body" data-store-meta novalidate>
      <h2 id="sm-title" class="confirm-title">${d(t)}\uFF1A\u512A\u60E0\u5238\u8A2D\u5B9A</h2>
      ${oa(a)}
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
        <button type="submit" class="btn btn-gold">${c("save","sm")}\u5132\u5B58</button>
      </div>
    </form>`,"sm-title"),o=e.querySelector("form");e.querySelector("[data-cancel]").addEventListener("click",()=>ft(e)),o.addEventListener("submit",s=>{s.preventDefault();let n=o.elements.couponUrl.value.trim();if(n&&!/^https?:\/\//i.test(n)){e.querySelector("#sm-url-err").hidden=!1,o.elements.couponUrl.setAttribute("aria-invalid","true"),o.elements.couponUrl.focus();return}y.setStoreMeta(t,{couponUrl:n,myNote:o.elements.myNote.value.trim()}),ft(e),N({title:"\u5DF2\u5132\u5B58\u5E97\u92EA\u8A2D\u5B9A",message:d(t),tone:"muted",duration:2500})}),Dt(e,{backdropClose:!1})}var Xt=(t,a,e,o,s="")=>`<label class="pill"><input type="radio" name="${t}" value="${a}" ${String(e)===String(a)?"checked":""} ${s}><span>${o}</span></label>`;function Po(t,a,e=!1){let{items:o}=y.state,s=[...new Set(o.map(r=>r.buyFor).filter(Boolean))],n=[...new Set([...o.map(r=>r.area).filter(Boolean),...ys])];return`
  <form class="dlg-shell form-shell" novalidate>
    <header class="dlg-head dlg-head-center">
      <p class="eyebrow eyebrow-center">${a?"EDIT ITEM \xB7 \u7DE8\u8F2F":e?"QUICK ADD \xB7 \u81E8\u6642\u52A0\u8CFC":"NEW ITEM \xB7 \u65B0\u589E"}</p>
      <h2 id="form-title" class="dlg-title">${a?"\u7DE8\u8F2F\u5546\u54C1":e?`\u81E8\u6642\u52A0\u8CFC${t.buyFor?`\uFF1A\u5E6B @${d(t.buyFor)}`:""}`:"\u65B0\u589E\u60F3\u8CB7\u7684\u5546\u54C1"}</h2>
      <p class="dlg-sub">${a?"\u4FEE\u6539\u5F8C\u6309\u300C\u5132\u5B58\u8B8A\u66F4\u300D\u3002":e?"\u8A18\u4E0B\u525B\u525B\u81E8\u6642\u52A0\u8CB7\u7684\u5546\u54C1\uFF0C\u91D1\u984D\u6703\u81EA\u52D5\u52A0\u9032\u4EE3\u8CFC\u5206\u5E33\u3002":"\u5148\u8A18\u54C1\u540D\u548C\u50F9\u683C\u5C31\u80FD\u52A0\u5165\uFF0C\u5176\u4ED6\u8CC7\u6599\u4E4B\u5F8C\u518D\u88DC\u3002"}</p>
      <div class="ornament" aria-hidden="true"></div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8868\u55AE">${c("close")}</button>
    </header>

    <div class="dlg-scroll form-body">
      <!-- \u5FEB\u901F\u65B0\u589E\uFF1A\u53EA\u9700\u54C1\u540D\u3001\u50F9\u683C\u3001\u5E97\u5BB6 -->
      <fieldset class="fs fs-quick">
        <legend class="sr-only">\u5FEB\u901F\u65B0\u589E</legend>
        <div class="field">
          <label for="fi-name">\u5546\u54C1\u540D\u7A31 <span class="req" aria-hidden="true">*</span></label>
          <input id="fi-name" name="name" required value="${d(t.name)}" autocomplete="off" aria-describedby="err-name" autofocus enterkeyhint="next">
          <p class="err" id="err-name" hidden>\u8ACB\u586B\u5BEB\u5546\u54C1\u540D\u7A31</p>
        </div>
        <div class="quick-row">
          <div class="field">
            <label for="fi-price">\u65E5\u5E63\u55AE\u50F9 <span class="req" aria-hidden="true">*</span> <small>\uFF08\u542B\u7A05\uFF09</small></label>
            <div class="input-affix"><span aria-hidden="true">\xA5</span>
              <input id="fi-price" name="price" type="number" inputmode="numeric" min="0" step="1" value="${t.price||""}" required aria-describedby="err-price" enterkeyhint="next">
            </div>
            <p class="err" id="err-price" hidden>\u8ACB\u586B\u5BEB 0 \u4EE5\u4E0A\u7684\u50F9\u683C</p>
          </div>
          <div class="field">
            <label for="fi-buyfor">\u5E6B\u8AB0\u8CB7 <small>\uFF08\u81EA\u7528\u7559\u7A7A\uFF09</small></label>
            <div class="input-affix"><span aria-hidden="true">@</span>
              <input id="fi-buyfor" name="buyFor" list="dl-friends" value="${d(t.buyFor)}" autocomplete="off" placeholder="\u670B\u53CB\u540D\u5B57" enterkeyhint="done">
            </div>
            <datalist id="dl-friends">${s.map(r=>`<option value="${d(r)}">`).join("")}</datalist>
          </div>
        </div>
        ${Us(t.stores,t.anyStore)}
        <p class="quick-calc" aria-live="polite" data-quick></p>
        <label class="check-row check-quick">
          <input type="checkbox" name="purchased" ${t.purchased?"checked":""}>
          <span><strong>\u5DF2\u7D93\u8CB7\u5230\u4E86</strong><small>${e?"\u81E8\u6642\u52A0\u8CFC\u7684\u5546\u54C1\u6703\u76F4\u63A5\u5217\u5165\u5DF2\u8CB7\u8207\u4EE3\u8CFC\u5206\u5E33":"\u52FE\u9078\u5F8C\u6703\u5217\u5165\u5DF2\u8CB7\uFF1B\u5E97\u5BB6\u8A18\u70BA\u4E3B\u9078\u5E97\u92EA"}</small></span>
        </label>
      </fieldset>

      <details class="more" ${a?"open":""}>
        <summary class="more-summary">
          <span class="more-title">${c("tune","sm")}\u66F4\u591A\u8A2D\u5B9A</span>
          <span class="more-desc">\u65E5\u6587\u540D\u7A31\u3001\u6578\u91CF\u3001\u5206\u985E\u3001\u7A05\u7387\u8207\u6298\u6263\u3001\u5730\u5340\u3001\u884C\u674E\u3001\u7167\u7247\u3001\u5099\u8A3B</span>
          <span class="more-chevron" aria-hidden="true">${c("add")}</span>
        </summary>
        <div class="more-body">
          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u58F9</span>\u57FA\u672C\u8CC7\u8A0A</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-ja">\u65E5\u6587\u540D\u7A31 <small>\uFF08\u51FA\u793A\u7D66\u5E97\u54E1\u770B\uFF09</small></label>
                <input id="fi-ja" name="nameJa" lang="ja" value="${d(t.nameJa)}" autocomplete="off">
              </div>
              <div class="field">
                <label for="fi-brand">\u54C1\u724C</label>
                <input id="fi-brand" name="brand" value="${d(t.brand)}" autocomplete="off">
              </div>
            </div>
            <div class="field">
              <span class="label" id="lb-cat">\u5206\u985E</span>
              <div class="pills" role="radiogroup" aria-labelledby="lb-cat">
                ${ge.map(r=>Xt("category",r.id,t.category,`${c(r.icon,"sm")}${r.label}`)).join("")}
              </div>
            </div>
            <div class="grid-2">
              <div class="field">
                <span class="label" id="lb-prio">\u512A\u5148\u5EA6</span>
                <div class="pills" role="radiogroup" aria-labelledby="lb-prio">
                  ${Qe.map(r=>Xt("priority",r.value,t.priority,`<span aria-hidden="true">${r.stars}</span> ${r.label}`)).join("")}
                </div>
              </div>
              <div class="field">
                <label for="fi-qty">\u6578\u91CF</label>
                <div class="stepper">
                  <button type="button" class="icon-btn" data-step="-1" aria-label="\u6E1B\u5C11\u6578\u91CF">${c("remove")}</button>
                  <input id="fi-qty" name="qty" type="number" inputmode="numeric" min="1" step="1" value="${t.qty}">
                  <button type="button" class="icon-btn" data-step="1" aria-label="\u589E\u52A0\u6578\u91CF">${c("add")}</button>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u8CB3</span>\u50F9\u683C\u8207\u9000\u7A05\u8A66\u7B97</legend>
            <div class="price-layout">
              <div>
                <div class="grid-2 tight">
                  <div class="field">
                    <span class="label" id="lb-incl">\u6A19\u50F9</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-incl">
                      ${Xt("priceIncludesTax","true",t.priceIncludesTax,"\u542B\u7A05")}
                      ${Xt("priceIncludesTax","false",t.priceIncludesTax,"\u672A\u7A05")}
                    </div>
                  </div>
                  <div class="field">
                    <span class="label" id="lb-rate">\u6D88\u8CBB\u7A05\u7387</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-rate">
                      ${Xt("taxRate",10,t.taxRate,"10%")}
                      ${Xt("taxRate",8,t.taxRate,"8% \u98DF\u54C1")}
                      ${Xt("taxRate",1,t.taxRate,"1% \u98DF\u54C1")}
                    </div>
                    <p class="hint">\u300C1% \u98DF\u54C1\u300D\uFF1A\u65E5\u672C\u9810\u8A08 2027/4/1\uFF5E2029/3/31 \u5C07\u98DF\u54C1\u6D88\u8CBB\u7A05\u964D\u70BA 1%\uFF08\u6CD5\u6848\u5BE9\u8B70\u4E2D\uFF0C\u9152\u985E\u4ECD\u662F 10%\uFF09\u3002\u65C5\u884C\u5728\u9019\u6BB5\u671F\u9593\u3001\u6CD5\u6848\u901A\u904E\u5F8C\u518D\u9078\u3002</p>
                  </div>
                </div>
                <label class="check-row">
                  <input type="checkbox" name="taxFree" ${t.taxFree?"checked":""}>
                  <span><strong>\u8FA6\u7406\u514D\u7A05</strong><small>\u540C\u4E00\u5929\u540C\u4E00\u5E97\u5BB6\u672A\u7A05\u5408\u8A08 ${b(dt)} \u4EE5\u4E0A\u53EF\u9000\u6D88\u8CBB\u7A05</small></span>
                </label>
                <div class="grid-2 tight">
                  <div class="field">
                    <label for="fi-disc">\u6298\u6263\uFF0F\u512A\u60E0\u5238 %</label>
                    <input id="fi-disc" name="discountPct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${t.discountPct||""}" placeholder="0">
                  </div>
                  <div class="field">
                    <label for="fi-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
                    <input id="fi-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${t.refundFeePct??""}" placeholder="\u9810\u8A2D ${y.state.settings.refundFeePct}" aria-describedby="hint-fee">
                    <p class="hint" id="hint-fee">\u7559\u7A7A\uFF1A\u6709\u5167\u5EFA\u8CBB\u7387\u7684\u5E97\u5BB6\uFF08\u4F8B\u5982\u5510\u5409\u8A36\u5FB7 0%\uFF09\u7528\u5E97\u5BB6\u8CBB\u7387\uFF0C\u5176\u4ED6\u7528\u8A2D\u5B9A\u4E2D\u7684\u9810\u8A2D\u503C</p>
                  </div>
                </div>
              </div>
              <aside class="calc-panel" data-calc></aside>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u53C3</span>\u63A1\u8CB7\u5730\u9EDE</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-area">\u5730\u5340</label>
                <input id="fi-area" name="area" list="dl-area" value="${d(t.area)}" autocomplete="off" placeholder="\u4F8B\u5982\uFF1A\u9280\u5EA7" aria-describedby="hint-area">
                <datalist id="dl-area">${n.map(r=>`<option value="${d(r)}">`).join("")}</datalist>
                <p class="hint" id="hint-area">\u9078\u64C7\u5DF2\u8A18\u9304\u904E\u7684\u5E97\u5BB6\u6642\u6703\u81EA\u52D5\u5E36\u5165</p>
              </div>
              <div class="field">
                <label for="fi-date">\u9810\u8A08\u8CFC\u8CB7\u65E5</label>
                <input id="fi-date" name="planDate" type="date" value="${d(t.planDate)}">
              </div>
              <div class="field span2">
                <label for="fi-jan">JAN \u689D\u78BC <small>\uFF088 \u6216 13 \u78BC\uFF0C\u5E97\u54E1\u6383\u63CF\u6700\u5FEB\uFF09</small></label>
                <input id="fi-jan" name="jan" inputmode="numeric" pattern="[0-9]*" maxlength="13" value="${d(t.jan)}" aria-describedby="err-jan">
                <p class="err" id="err-jan" hidden>JAN \u689D\u78BC\u9700\u70BA 8 \u6216 13 \u4F4D\u6578\u5B57</p>
              </div>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u8086</span>\u884C\u674E\u8207\u5305\u88DD</legend>
            <div class="grid-2">
              <div class="field">
                <label for="fi-weight">\u55AE\u4EF6\u91CD\u91CF\uFF08kg\uFF09</label>
                <input id="fi-weight" name="weightKg" type="number" inputmode="decimal" min="0" step="0.01" value="${t.weightKg||""}" placeholder="0.5">
              </div>
              <div class="field">
                <span class="label" id="lb-lug">\u653E\u5728\u54EA\u88E1</span>
                <div class="seg-pills" role="radiogroup" aria-labelledby="lb-lug">
                  ${Xt("luggage","checked",t.luggage,"\u8A17\u904B")}
                  ${Xt("luggage","carry",t.luggage,"\u96A8\u8EAB")}
                  ${Xt("luggage","none",t.luggage,"\u4E0D\u653E\u884C\u674E")}
                </div>
              </div>
            </div>
            <p class="hint" data-lug-hint>\u92F0\u96FB\u6C60\u6703\u81EA\u52D5\u5217\u70BA\u300C\u5FC5\u9808\u624B\u63D0\u300D\uFF1B\u5200\u526A\u3001\u52FE\u4E86\u300C\u6DB2\u9AD4\u300D\u7684\u5546\u54C1\u6703\u5217\u70BA\u300C\u5FC5\u9808\u8A17\u904B\u300D\uFF08100ml \u4EE5\u4E0B\u60F3\u653E\u624B\u63D0\u7684\u6DB2\u9AD4\u53EF\u4EE5\u4E0D\u52FE\uFF09\u3002</p>
            <div class="pills" role="group" aria-label="\u5305\u88DD\u63D0\u9192">
              <label class="pill"><input type="checkbox" name="fragile" ${t.fragile?"checked":""}><span>${c("wine_bar","sm")}\u6613\u788E</span></label>
              <label class="pill"><input type="checkbox" name="liquid" ${t.liquid?"checked":""}><span>${c("water_drop","sm")}\u6DB2\u9AD4\uFF0F\u4E73\u971C</span></label>
              <label class="pill"><input type="checkbox" name="battery" ${t.battery?"checked":""}><span>${c("battery_alert","sm")}\u542B\u92F0\u96FB\u6C60</span></label>
              <label class="pill"><input type="checkbox" name="blade" ${t.blade?"checked":""}><span>${c("content_cut","sm")}\u5200\u526A\u985E</span></label>
            </div>
          </fieldset>

          <fieldset class="fs">
            <legend class="fs-title"><span class="fs-num">\u4F0D</span>\u7167\u7247\u8207\u5099\u8A3B</legend>
            <div class="photo-row">
              <div class="photo-preview" data-photo>${t.image?`<img src="${d(t.image)}" alt="\u5546\u54C1\u7167\u7247\u9810\u89BD">`:c("add_photo_alternate")}</div>
              <div class="photo-actions">
                <label class="btn btn-ghost btn-sm file-btn">${c("photo_camera","sm")}\u9078\u64C7\u7167\u7247
                  <input type="file" accept="image/*" data-file class="sr-only">
                </label>
                <button type="button" class="btn btn-ghost btn-sm" data-remove-photo ${t.image?"":"hidden"}>${c("delete","sm")}\u79FB\u9664</button>
                <p class="hint">\u7167\u7247\u6703\u58D3\u7E2E\u5F8C\u5B58\u5728\u672C\u6A5F\u700F\u89BD\u5668</p>
              </div>
            </div>
            <div class="field">
              <label for="fi-note">\u5099\u8A3B</label>
              <textarea id="fi-note" name="note" rows="3" placeholder="\u4F8B\u5982\uFF1A\u6AC3\u4F4D\u6A13\u5C64\u3001\u8981\u8CB7\u7684\u8272\u865F\u3001\u9001\u8AB0">${d(t.note)}</textarea>
            </div>
          </fieldset>
        </div>
      </details>
    </div>

    <footer class="dlg-foot">
      <p class="foot-summary" data-foot-summary></p>
      <button type="button" class="btn btn-ghost" data-cancel>\u53D6\u6D88</button>
      <button type="submit" class="btn btn-gold">${c(a?"save":"add_circle")}${a?"\u5132\u5B58\u8B8A\u66F4":"\u52A0\u5165\u6E05\u55AE"}</button>
    </footer>
  </form>`}function Hs(t,a,e){let o=new FormData(t),{stores:s,anyStore:n}=e?.value??{stores:[],anyStore:!1};return{stores:s,anyStore:n,buyFor:o.get("buyFor"),blade:o.has("blade"),name:o.get("name"),nameJa:o.get("nameJa"),brand:o.get("brand"),category:o.get("category"),priority:o.get("priority"),qty:o.get("qty"),price:o.get("price"),priceIncludesTax:o.get("priceIncludesTax")==="true",taxRate:o.get("taxRate"),taxFree:o.has("taxFree"),discountPct:o.get("discountPct"),refundFeePct:o.get("refundFeePct"),area:o.get("area"),planDate:o.get("planDate"),jan:o.get("jan"),weightKg:o.get("weightKg"),luggage:o.get("luggage"),fragile:o.has("fragile"),liquid:o.has("liquid"),battery:o.has("battery"),note:o.get("note"),purchased:o.has("purchased"),image:a}}function Co(t,a){let{settings:e,items:o}=y.state,s=o.filter(p=>p.id!==a),n=te({...t,id:a||"__draft__"}),{byItem:r}=be([...s,n],e),i=r.get(n.id),l=i.group,u;return n.taxFree?n.store?l.eligible?u=`<p class="calc-status ok">${c("check_circle","sm")}${d(n.store)} \u5408\u8A08\u5DF2\u9054 ${b(dt)} \u9580\u6ABB</p>`:u=`<p class="calc-status warn">${c("info","sm")}${d(n.store)} \u9084\u5DEE ${b(l.shortfall)}\uFF08\u672A\u7A05\uFF09</p>`:u='<p class="calc-status">\u9078\u64C7\u5E97\u92EA\u5F8C\u53EF\u5408\u4F75\u8A08\u7B97\u9580\u6ABB</p>':u='<p class="calc-status">\u4E0D\u8FA6\u514D\u7A05</p>',{html:`
    <h3 class="calc-title">${c("calculate","sm")}\u9000\u7A05\u7CBE\u7B97\u660E\u7D30</h3>
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u5C0F\u8A08</dt><dd>${b(i.lineExcl)}</dd></div>
      ${i.discount?`<div class="minus"><dt>\u6298\u6263</dt><dd>\u2212 ${b(i.discount)}</dd></div>`:""}
      <div><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${b(i.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05</dt><dd>${i.refundable?`\u2212 ${b(i.refund)}`:"\u2014"}</dd></div>
    </dl>
    <div class="calc-total">
      <span class="ledger-k">\u5BE6\u969B\u6210\u672C</span>
      <span class="calc-yen">${b(i.net)}</span>
      <span class="calc-twd">\u2248 ${vt(i.net,e.rate)}</span>
    </div>
    ${u}`,quick:n.price?`${c("payments","sm")}<span>\u5E97\u982D\u652F\u4ED8 <strong>${b(i.pay)}</strong> \u2248 ${vt(i.pay,e.rate)}</span>${i.refundable?`<span class="ok">${c("check_circle","sm")}\u53EF\u9000\u7A05 ${b(i.refund)}\uFF0C\u5BE6\u969B ${b(i.net)}</span>`:n.taxFree&&n.store?`<span class="warn">${c("info","sm")}${d(n.store)} \u9084\u5DEE ${b(l.shortfall)} \u9054\u514D\u7A05\u9580\u6ABB</span>`:""}${l.undatedMerge&&n.taxFree&&l.items.length>1?`<span class="note">${c("event","sm")}\u5DF2\u8207\u540C\u5E97 ${l.items.length-1} \u4EF6\u5408\u4F75\u8A08\u7B97\uFF1B\u5206\u4E0D\u540C\u5929\u8CB7\u8ACB\u5728\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u586B\u9810\u8A08\u65E5\u671F</span>`:""}`:"",foot:`${c("auto_awesome","sm")}\u52A0\u5165\u5F8C\u7E3D\u984D ${b(s.reduce((p,h)=>p+r.get(h.id).pay,0)+i.pay)} \xB7 \u884C\u674E +${(i.weight||0).toFixed(2)} kg`}}function Ut(t=null,a={}){let e=t?y.getItem(t):null,o=e??te({category:"other",priority:2,luggage:"checked",taxFree:!0,...a}),s=o.image,n=qt("dlg-form",Po(o,!!e,a.mode==="extra"),"form-title"),r=n.querySelector("form"),i=!1,l=!!e?.discountPct,u=null,p=()=>{let m=Co(Hs(r,s,u),e?.id);n.querySelector("[data-calc]").innerHTML=m.html,n.querySelector("[data-foot-summary]").innerHTML=m.foot,n.querySelector("[data-quick]").innerHTML=m.quick;let $=r.elements.priceIncludesTax.value==="true";n.querySelector('label[for="fi-price"] small').textContent=$?"\uFF08\u542B\u7A05\uFF09":"\uFF08\u672A\u7A05\uFF09"};p(),u=Bs(r.querySelector(".store-field"),{stores:o.stores,anyStore:o.anyStore},({stores:m,picked:$})=>{i=!0;let v=m[0];if(v&&$===v){let x=he(v,y.state.settings.storeMeta),J=[];(x.noTaxFree||x.dutyFree)&&r.elements.taxFree.checked&&(r.elements.taxFree.checked=!1,J.push(x.dutyFree?"\u6A5F\u5834\u514D\u7A05\u5E97\u552E\u50F9\u5DF2\u4E0D\u542B\u7A05\uFF0C\u5DF2\u53D6\u6D88\u300C\u8FA6\u7406\u514D\u7A05\u300D":"\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05\uFF0C\u5DF2\u53D6\u6D88\u300C\u8FA6\u7406\u514D\u7A05\u300D"));let B=Ps(x,r.elements.category.value);if(B&&!l&&(r.elements.discountPct.value=B.pct,J.push(`\u5DF2\u4F9D\u5206\u985E\u5957\u7528 ${x.name} \u512A\u60E0 ${B.pct}%\uFF08${B.label}\uFF0C\u9700\u672A\u7A05\u6EFF ${b(B.min)}\uFF09\uFF0C\u53EF\u5728\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u4FEE\u6539`)),!r.elements.area.value.trim()){let C=y.state.items.find(Z=>Z.area&&Z.stores.some(Y=>et(Y)===et(v)));C&&(r.elements.area.value=C.area)}J.length&&N({title:"\u5DF2\u5E36\u5165\u5E97\u92EA\u8A2D\u5B9A",message:J.map(d).join("\uFF1B"),tone:"muted",duration:5e3})}p()}),p();let h={name:m=>m.trim().length>0,price:m=>m!==""&&Number(m)>=0,jan:m=>m===""||/^\d{8}$|^\d{13}$/.test(m)},g=(m,$)=>{let v=n.querySelector(`#err-${m.name}`);v&&(v.hidden=!$,m.setAttribute("aria-invalid",$?"true":"false"))};r.addEventListener("focusout",m=>{let $=h[m.target.name];$&&m.target.dataset.touched&&g(m.target,!$(m.target.value))}),r.addEventListener("input",m=>{i=!0,m.target.dataset.touched="1";let $=h[m.target.name];$&&m.target.getAttribute("aria-invalid")==="true"&&$(m.target.value)&&g(m.target,!1),p()}),r.addEventListener("change",m=>{m.target.name==="discountPct"&&(l=!0),["battery","liquid","blade"].includes(m.target.name)&&m.target.checked&&(r.elements.luggage.value=m.target.name==="battery"?"carry":"checked"),p()}),r.elements.discountPct.addEventListener("input",()=>{l=!0}),r.addEventListener("click",m=>{let $=m.target.closest("[data-step]");if($){let v=r.elements.qty;v.value=Math.max(1,(Number(v.value)||1)+Number($.dataset.step)),i=!0,p()}m.target.closest("[data-remove-photo]")&&(s="",i=!0,n.querySelector("[data-photo]").innerHTML=c("add_photo_alternate"),m.target.closest("[data-remove-photo]").hidden=!0),m.target.closest(".dlg-close, [data-cancel]")&&A()}),n.querySelector("[data-file]").addEventListener("change",async m=>{let $=m.target.files?.[0];if($)try{s=await js($),i=!0,n.querySelector("[data-photo]").innerHTML=`<img src="${s}" alt="\u5546\u54C1\u7167\u7247\u9810\u89BD">`,n.querySelector("[data-remove-photo]").hidden=!1}catch(v){N({title:"\u7167\u7247\u7121\u6CD5\u4F7F\u7528",message:d(v.message),tone:"error"})}});async function A(){i&&!await Jt({title:"\u653E\u68C4\u5C1A\u672A\u5132\u5B58\u7684\u5167\u5BB9\uFF1F",body:"\u9019\u500B\u8868\u55AE\u6709\u4FEE\u6539\u9084\u6C92\u5132\u5B58\uFF0C\u96E2\u958B\u5F8C\u4E0D\u6703\u4FDD\u7559\u3002",confirmText:"\u653E\u68C4\u4FEE\u6539",danger:!0})||ft(n)}n.addEventListener("cancel",m=>{m.preventDefault(),m.stopImmediatePropagation(),A()},{capture:!0}),r.addEventListener("submit",m=>{m.preventDefault();let $=null;for(let[x,J]of Object.entries(h)){let B=r.elements[x],C=J(B.value);g(B,!C),!C&&!$&&($=B)}if($){let x=$.closest("details");x&&(x.open=!0),$.focus();return}let v=Hs(r,s,u);if(v.jan&&!Ue(v.jan)&&N({title:"JAN \u6AA2\u67E5\u78BC\u4E0D\u7B26",message:"\u5DF2\u5132\u5B58\uFF0C\u4F46\u689D\u78BC\u53EF\u80FD\u8F38\u5165\u932F\u8AA4\uFF0C\u51FA\u793A\u5361\u4E0D\u6703\u986F\u793A\u689D\u78BC\u5716\u3002",tone:"muted"}),e){let x=e.purchased;if(!y.updateItem(e.id,{...v,purchasedAt:v.purchased?x?e.purchasedAt:Date.now():null,purchasedStore:v.purchased?x&&e.purchasedStore?e.purchasedStore:v.stores[0]??"":""}))return;N({title:"\u5DF2\u5132\u5B58\u8B8A\u66F4",message:d(v.name),tone:"muted",duration:3e3})}else{let x=y.addItem({...v,purchasedAt:v.purchased?Date.now():null,purchasedStore:v.purchased?v.stores[0]??"":""});N({title:"\u5DF2\u52A0\u5165\u6E05\u55AE",message:`\u300C${d(x.name)}\u300D`})}i=!1,ft(n)}),Dt(n,{backdropClose:!1})}var Fa="";var _a="shopping-relics:cloud",Xs="shopping-relics.json",Qs="https://www.googleapis.com/auth/drive.appdata",Fo=`openid ${Qs}`,da="https://www.googleapis.com/drive/v3",zs="https://www.googleapis.com/upload/drive/v3",ra="id,version,modifiedTime",Ro=4e3,le=null,Ws=null,Ra=null,Ge=null,Ia=!1,Je=null,Na=!1,Ks=null,ja={state:"idle",message:""},ia=new Set,Io=()=>{try{return JSON.parse(localStorage.getItem(_a)||"null")||{}}catch{return{}}},kt=Io();function la(t){kt=t===null?{}:{...kt,...t};try{t===null?localStorage.removeItem(_a):localStorage.setItem(_a,JSON.stringify(kt))}catch{}}function _o(t){let a=2166136261;for(let e=0;e<t.length;e++)a^=t.charCodeAt(e),a=Math.imul(a,16777619);return(a>>>0).toString(36)+t.length.toString(36)}var ua=()=>_o(y.dataJSON());function ie(t,a=""){ja={state:t,message:a},ia.forEach(e=>e(Ae()))}var Ht=class extends Error{constructor(a,e){super(e),this.code=a}};function He(){if(!Fa)return{ok:!1,reason:"config"};let{protocol:t,hostname:a}=location;return t!=="https:"&&a!=="localhost"&&a!=="127.0.0.1"?{ok:!1,reason:"origin"}:{ok:!0}}function Ae(){return{linked:!!kt.sub,idTail:kt.sub?String(kt.sub).slice(-4):"",lastSyncAt:kt.at||0,hasToken:Oa(),dirty:!!kt.sub&&kt.hash!==ua(),...ja}}function pa(){He().ok&&tn().catch(()=>{})}function Zs(t){return ia.add(t),()=>ia.delete(t)}function tn(){return window.google?.accounts?.oauth2?Promise.resolve():(Ra??(Ra=new Promise((t,a)=>{let e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.onload=()=>t(),e.onerror=()=>{Ra=null,a(new Ht("network","\u7121\u6CD5\u8F09\u5165 Google \u767B\u5165\u5143\u4EF6"))},document.head.append(e)})),Ra)}var Oa=()=>!!(le&&le.exp-Date.now()>6e4);async function No(){return await tn(),new Promise((t,a)=>{Ws=window.google.accounts.oauth2.initTokenClient({client_id:Fa,scope:Fo,callback:e=>{if(e.error){a(new Ht("denied","\u5DF2\u53D6\u6D88\u6388\u6B0A"));return}if(!window.google.accounts.oauth2.hasGrantedAllScopes(e,Qs)){a(new Ht("scope","\u6C92\u6709\u52FE\u9078 Google Drive \u6B0A\u9650\uFF0C\u7121\u6CD5\u540C\u6B65"));return}le={value:e.access_token,exp:Date.now()+Number(e.expires_in||3600)*1e3},Na=!0,t()},error_callback:e=>a(new Ht(e?.type==="popup_failed_to_open"?"popup":"denied",e?.type==="popup_failed_to_open"?"\u767B\u5165\u8996\u7A97\u88AB\u700F\u89BD\u5668\u64CB\u4F4F\u4E86\uFF0C\u8ACB\u5141\u8A31\u5F48\u51FA\u8996\u7A97\u5F8C\u518D\u8A66":"\u767B\u5165\u8996\u7A97\u5DF2\u95DC\u9589"))}),Ws.requestAccessToken({prompt:kt.sub?"":"consent"})})}async function Ua(t){if(!Oa()){if(!t)throw new Ht("auth","\u9700\u8981\u91CD\u65B0\u9023\u7DDA Google");await No()}}async function ve(t,a={}){let e;try{e=await fetch(t,{...a,headers:{Authorization:`Bearer ${le.value}`,...a.headers}})}catch{throw new Ht("network","\u7DB2\u8DEF\u9023\u7DDA\u5931\u6557")}if(e.status===401)throw le=null,new Ht("auth","\u9023\u7DDA\u5DF2\u903E\u6642\uFF0C\u8ACB\u91CD\u65B0\u9023\u7DDA");if(e.status===404)return null;if(!e.ok)throw new Ht("http",`Google \u56DE\u61C9\u932F\u8AA4\uFF08${e.status}\uFF09`);return e.status===204?!0:e.json()}async function en(){let t=encodeURIComponent(`name='${Xs}' and trashed=false`);return(await ve(`${da}/files?spaces=appDataFolder&q=${t}&orderBy=modifiedTime desc&fields=files(${ra})`))?.files?.[0]??null}var an=t=>ve(`${da}/files/${t}?fields=${ra}`),Ys=t=>ve(`${da}/files/${t}?alt=media`);function Do(){return JSON.stringify({app:"shopping-relics",version:1,savedAt:new Date().toISOString(),data:y.state})}async function Da(t){let a=Do();if(t)return ve(`${zs}/files/${t}?uploadType=media&fields=${ra}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:a});let e=`sr${Date.now().toString(36)}`,o=[`--${e}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify({name:Xs,parents:["appDataFolder"],mimeType:"application/json"}),`--${e}`,"Content-Type: application/json; charset=UTF-8","",a,`--${e}--`].join(`\r
`);return ve(`${zs}/files?uploadType=multipart&fields=${ra}`,{method:"POST",headers:{"Content-Type":`multipart/related; boundary=${e}`},body:o})}function ca(t){la({fileId:t.id,version:String(t.version),hash:ua(),at:Date.now()})}function qa(t,a){if(!a||a.app!=="shopping-relics"||!a.data)throw new Ht("format","\u96F2\u7AEF\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26");y.importData(a.data),ca(t)}async function qo(t){if(await Ua(t),Na||!kt.sub){let n=await ve("https://openidconnect.googleapis.com/v1/userinfo");if(!n?.sub)throw new Ht("http","\u7121\u6CD5\u53D6\u5F97 Google \u5E33\u865F\u8B58\u5225");kt.sub&&kt.sub!==n.sub&&la(null),la({sub:n.sub}),Na=!1}let a=kt.fileId?await an(kt.fileId):null;a??(a=await en());let e=kt.hash!==ua();if(!a)return ca(await Da(null)),{action:"uploaded"};let o=a.id!==kt.fileId||String(a.version)!==kt.version;if(!kt.hash){let n=await Ys(a.id);return y.state.items.length?Vs(a,n):(qa(a,n),{action:"downloaded"})}if(!o&&!e)return{action:"none"};if(!o&&e)return ca(await Da(a.id)),{action:"uploaded"};let s=await Ys(a.id);return e?Vs(a,s):(qa(a,s),{action:"downloaded"})}function Vs(t,a){return Je={remote:t,data:a},{action:"conflict",remoteAt:a?.savedAt?new Date(a.savedAt).getTime():new Date(t.modifiedTime).getTime(),remoteCount:a?.data?.items?.length??0,localCount:y.state.items.length}}async function Le({interactive:t=!0}={}){return Ge?(Ia=!0,Ge):(ie("syncing","\u540C\u6B65\u4E2D\u2026"),Ge=(async()=>{try{let a=await qo(t);return ie(a.action==="conflict"?"conflict":"ok",a.action==="conflict"?"\u96F2\u7AEF\u548C\u9019\u53F0\u90FD\u6709\u4FEE\u6539\uFF0C\u8ACB\u9078\u64C7\u8981\u4FDD\u7559\u54EA\u4E00\u4EFD":""),a}catch(a){throw a.code==="denied"?ie("idle"):ie(a.code==="auth"?"auth":"error",a.message||"\u540C\u6B65\u5931\u6557"),a}finally{Ge=null,Ia&&(Ia=!1,rn())}})(),Ge)}var sn=()=>Le({interactive:!0});async function nn(t){if(!Je)return;let{remote:a,data:e}=Je;Je=null,ie("syncing","\u540C\u6B65\u4E2D\u2026");try{await Ua(!0),t==="cloud"?qa(a,e):ca(await Da(a.id)),ie("ok")}catch(o){throw ie(o.code==="auth"?"auth":"error",o.message||"\u540C\u6B65\u5931\u6557"),o}}function Ba(){le&&window.google?.accounts?.oauth2&&window.google.accounts.oauth2.revoke(le.value,()=>{}),le=null,Je=null,la(null),ie("idle")}async function on(){await Ua(!0);let t=kt.fileId?await an(kt.fileId):await en();t&&await ve(`${da}/files/${t.id}`,{method:"DELETE"}),Ba()}function rn(){clearTimeout(Ks),!(!kt.sub||!Oa()||ja.state==="conflict")&&(Ks=setTimeout(()=>{kt.hash!==ua()&&Le({interactive:!1}).catch(()=>{})},Ro))}y.subscribe(()=>{rn(),kt.sub&&ia.forEach(t=>t(Ae()))});var Ga="relics",Qt=[{id:"relics",label:"\u91D1\u8272\u907A\u7269",desc:"\u767D\u8272\u5927\u7406\u77F3\u3001\u91D1\u8272\u908A\u98FE\u8207\u9752\u8272\u6298\u5C04\u5149\uFF08\u539F\u59CB\u914D\u8272\uFF09",themeColor:{light:"#f4f7f9",dark:"#0b1422"},preview:{light:{bg:"#f4f7f9",surface:"#ffffff",accent:"#d4af37"},dark:{bg:"#0b1422",surface:"#172740",accent:"#e2bd45"}}},{id:"dotglow",label:"\u9EDE\u9663\u67D4\u5149",desc:"\u64EC\u7269\u5316\u51F9\u69FD\u8207\u6309\u9375\uFF0C\u767D\u5929\u7425\u73C0\u6A58\u3001\u591C\u665A\u85CD\u7D2B\u5149\u6688",themeColor:{light:"#efeae2",dark:"#0b0b12"},preview:{light:{bg:"#efeae2",surface:"#ffffff",accent:"#f0921e"},dark:{bg:"#0b0b12",surface:"#29283f",accent:"#8c82ff"}}},{id:"matcha",label:"\u62B9\u8336\u548C\u7D19",desc:"\u548C\u7D19\u7C73\u767D\u914D\u62B9\u8336\u7DA0\uFF0C\u9EDE\u7DB4\u7119\u8336\u68D5\uFF1B\u591C\u665A\u662F\u6DF1\u6797\u58A8\u7DA0",themeColor:{light:"#f1f2e8",dark:"#0e140d"},preview:{light:{bg:"#f1f2e8",surface:"#ffffff",accent:"#8fb043"},dark:{bg:"#0e140d",surface:"#2a3a28",accent:"#a8c75a"}}},{id:"sakura",label:"\u591C\u6AFB",desc:"\u6AFB\u82B1\u767D\u914D\u6AFB\u7C89\uFF0C\u9EDE\u7DB4\u85E4\u7D2B\uFF1B\u591C\u665A\u662F\u6DF1\u6885\u7D2B\u8207\u7C89\u8272\u5149\u6688",themeColor:{light:"#f8f1f2",dark:"#140d14"},preview:{light:{bg:"#f8f1f2",surface:"#ffffff",accent:"#ee86a4"},dark:{bg:"#140d14",surface:"#3a283a",accent:"#f08aa8"}}}];var jo="shopping-relics:theme",Oo="shopping-relics:skin";var Pe=[{id:"light",label:"\u6DFA\u8272",icon:"light_mode"},{id:"dark",label:"\u6DF1\u8272",icon:"dark_mode"},{id:"auto",label:"\u8DDF\u96A8\u7CFB\u7D71",icon:"brightness_auto"}];function ce(){let t=document.documentElement.dataset.theme;return Pe.some(a=>a.id===t)?t:"light"}function $e(){let t=document.documentElement.dataset.skin;return Qt.some(a=>a.id===t)?t:Ga}function ln(t){return t==="dark"||t==="auto"&&matchMedia("(prefers-color-scheme: dark)").matches}function Uo(t=ce()){document.documentElement.dataset.scheme=ln(t)?"dark":"light"}function Ja(t){let a=Pe.find(o=>o.id===t),e=document.getElementById("btn-theme");e&&(e.querySelector(".ms").textContent=a.icon,e.setAttribute("aria-label",`\u5916\u89C0\u8207\u4E3B\u984C\uFF08\u76EE\u524D\uFF1A${a.label}\uFF09`),e.title=`\u5916\u89C0\u8207\u4E3B\u984C\uFF08\u76EE\u524D\uFF1A${a.label}\uFF09`),Uo(t),ma(t)}function ma(t=ce()){let a=document.body?.dataset.route==="home",e=Qt.find(o=>o.id===$e()).themeColor;document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a?"#010104":ln(t)?e.dark:e.light)}function fa(t){document.documentElement.dataset.theme=t;try{localStorage.setItem(jo,t)}catch{}Ja(t)}function cn(t){document.documentElement.dataset.fx=t.fx===!1?"off":"on"}function ga(t){let a=Qt.find(e=>e.id===t)||Qt.find(e=>e.id===Ga);document.documentElement.dataset.skin=a.id,cn(a);try{localStorage.setItem(Oo,a.id)}catch{}return ma(),a}function dn(){document.documentElement.dataset.skin=$e(),cn(Qt.find(t=>t.id===$e())),Ja(ce()),matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>Ja(ce()))}var un="shopping-relics:trips",Bo=()=>crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`;function ye(){try{let t=JSON.parse(localStorage.getItem(un)||"[]");return Array.isArray(t)?t.filter(a=>a&&a.data&&Array.isArray(a.data.items)):[]}catch{return[]}}function ze(t){try{return localStorage.setItem(un,JSON.stringify(t)),!0}catch{return!1}}var pn=()=>{let t=JSON.parse(y.dataJSON());return{id:Bo(),name:t.settings.tripName,savedAt:Date.now(),count:t.items.length,data:t}},Go=["rate","rateSource","rateUpdatedAt","rateProvider","budget","refundFeePct","cardRebatePct","checkedLimit","carryLimit","checkedBase","carryBase","customStores","storeMeta","listView"];function mn(t){let a=pn();if(!ze([a,...ye()]))return!1;let e={tripName:t};return Go.forEach(o=>{o in a.data.settings&&(e[o]=a.data.settings[o])}),y.importData({items:[],settings:e}),!0}function fn(t){let a=ye(),e=a.find(s=>s.id===t);if(!e)return!1;let o=a.filter(s=>s.id!==t);return ze(y.state.items.length?[pn(),...o]:o)?(y.importData(e.data),!0):!1}function gn(t){return ze(ye().filter(a=>a.id!==t))}var Qa={};fe(Qa,{getIntroMode:()=>Xe,mount:()=>wr,setIntroMode:()=>Xa});function Ha(t,a=""){let e=Vt(t.category),o=`<span class="sr-only">\u5206\u985E\uFF1A${d(e.label)}</span>${t.demo?'<span class="thumb-demo">\u793A\u7BC4</span>':""}<span class="thumb-qty">\xD7 ${t.qty}</span>`;return t.image?`<div class="thumb ${a}" title="${d(e.label)}"><img src="${d(t.image)}" alt="" loading="lazy" decoding="async"><span class="thumb-cat" aria-hidden="true">${c(e.icon,"sm")}</span>${o}</div>`:`<div class="thumb thumb-icon ${a} cat-${e.id}" title="${d(e.label)}">${c(e.icon)}${o}</div>`}function Jo(t,a){return t.taxFree?a.refundable?`<span class="badge badge-cyan">${c("verified","sm")}\u53EF\u9000\u7A05 ${b(a.refund)}</span>`:t.store?`<span class="badge badge-warn">\u5DEE ${b(a.group.shortfall)} \u9054\u6A19</span>`:'<span class="badge badge-muted">\u672A\u9078\u5E97\u92EA</span>':'<span class="badge badge-muted">\u4E0D\u8FA6\u514D\u7A05</span>'}function Ho(t){if(t.purchased&&t.purchasedStore)return`<span class="tag tag-store" title="\u5728 ${d(t.purchasedStore)} \u8CB7\u5230">${c("storefront","sm")}<span class="tag-text">${d(t.purchasedStore)}</span></span>`;if(t.anyStore)return`<span class="tag tag-store">${c("compare_arrows","sm")}<span class="tag-text">\u4E0D\u9650\u5E97\u92EA</span></span>`;if(!t.stores.length)return'<span class="tag tag-store tag-empty">\u672A\u9078\u5E97\u92EA</span>';let a=t.stores.length-1;return`<span class="tag tag-store" title="${d(t.stores.join("\u3001"))}">${c("storefront","sm")}<span class="tag-text">${d(t.stores[0])}</span>${a?`<span class="tag-more">+${a}</span>`:""}</span>`}function hn(t,a,e,o="grid"){let s=Ze(t.priority),n=t.brand?`${t.brand}\uFF5C${t.name}`:t.name;return`
  <article class="card item-card ${t.purchased?"is-done":""} layout-${o}" data-id="${t.id}">
    <div class="item-top">
      ${Ho(t)}
      <span class="tag tag-prio p${s.value}" title="${s.label}"><span aria-hidden="true">${s.stars}</span><span>${s.label}</span></span>
      <button type="button" class="check ${t.purchased?"on":""}" data-act="toggle"
        role="checkbox" aria-checked="${t.purchased}" aria-label="\u5DF2\u8CB7\uFF1A${d(t.name)}">${c("check")}</button>
    </div>
    <div class="item-body">
      ${Ha(t)}
      <div class="item-main">
        ${t.brand?`<p class="item-brand">${d(t.brand)}</p>`:""}
        <h3 class="item-name"><button type="button" class="card-link" data-act="open" aria-label="\u67E5\u770B\u8A73\u60C5\uFF1A${d(n)}">${d(t.name)}</button></h3>
        ${t.nameJa?`<p class="item-ja" lang="ja">${d(t.nameJa)}</p>`:""}
        ${t.note?`<p class="item-note">${c("edit_note","sm")}${d(t.note)}</p>`:""}
      </div>
    </div>
    <div class="item-meta">
      ${t.buyFor?`<span class="who-tag">@${d(t.buyFor)}</span>`:""}
      ${Jo(t,a)}
      ${t.weightKg?`<span class="meta-text">${c("luggage","sm")}${Wt(a.weight)}</span>`:""}
      ${t.planDate?`<span class="meta-text">${c("event","sm")}${Oe(t.planDate)}</span>`:""}
    </div>
    <div class="item-foot">
      <p class="price">
        <span class="price-yen">${b(a.pay)}</span>
        <span class="price-twd">\u2248 ${vt(a.pay,e)}</span>
      </p>
      <div class="item-actions">
        <button type="button" class="icon-btn" data-act="edit" aria-label="\u7DE8\u8F2F ${d(t.name)}" title="\u7DE8\u8F2F">${c("edit")}</button>
        <button type="button" class="icon-btn" data-act="delete" aria-label="\u522A\u9664 ${d(t.name)}" title="\u522A\u9664">${c("delete")}</button>
      </div>
    </div>
  </article>`}function Zt({label:t,icon:a,value:e,unit:o="",foot:s="",bar:n="",tone:r=""}){return`
  <section class="card kpi ${r}">
    <div class="kpi-head"><h2 class="kpi-label">${t}</h2><span class="kpi-icon">${c(a)}</span></div>
    <p class="kpi-value" data-count-key="${t}">${e}${o?`<small>${o}</small>`:""}</p>
    ${n}
    ${s?`<div class="kpi-foot">${s}</div>`:""}
  </section>`}function Bt({eyebrow:t,title:a,sub:e,subShort:o="",actions:s=""}){return`
  <header class="page-head">
    <div>
      <p class="eyebrow">${c("auto_awesome","sm")}${t}</p>
      <h1 class="page-title">${a}</h1>
      ${e?`<p class="page-sub">${o?`<span class="sub-full">${e}</span><span class="sub-short">${o}</span>`:e}</p>`:""}
    </div>
    ${s?`<div class="page-actions">${s}</div>`:""}
  </header>`}function ha(t){return`
  <nav class="jump-nav" aria-label="\u672C\u9801\u5340\u584A" data-jump-nav>
    <div class="jump-track">
      ${t.map(a=>`<button type="button" class="jump-chip" data-jump="${a.id}">${a.label}</button>`).join("")}
    </div>
  </nav>`}function ba(t){let a=t.querySelector("[data-jump-nav]");if(!a)return{refresh(){},destroy(){}};let e=[...a.querySelectorAll("[data-jump]")],o=h=>t.querySelector(`#${CSS.escape(h)}`),s=h=>h?.closest("section, .pack-weights, .card")??h,n=()=>(document.querySelector(".topbar")?.offsetHeight??0)+a.offsetHeight+12,r="",i=h=>{h!==r&&(r=h,e.forEach(g=>{let A=g.dataset.jump===h;if(A?g.setAttribute("aria-current","true"):g.removeAttribute("aria-current"),A){let m=g.parentElement;m.scrollLeft=g.offsetLeft-(m.clientWidth-g.offsetWidth)/2}}))},l=()=>e.forEach(h=>{h.hidden=!o(h.dataset.jump)}),u=0,p=()=>{u||(u=requestAnimationFrame(()=>{u=0;let h=n()+4,g="";for(let A of e){if(A.hidden)continue;let m=s(o(A.dataset.jump));m&&m.getBoundingClientRect().top<=h&&(g=A.dataset.jump)}i(g||e.find(A=>!A.hidden)?.dataset.jump||"")}))};return a.addEventListener("click",h=>{let g=h.target.closest("[data-jump]");if(!g)return;let A=o(g.dataset.jump);if(!A)return;let m=s(A),$=matchMedia("(prefers-reduced-motion: reduce)").matches;scrollTo({top:m.getBoundingClientRect().top+scrollY-n(),behavior:$?"auto":"smooth"}),A.hasAttribute("tabindex")||A.setAttribute("tabindex","-1"),A.focus({preventScroll:!0}),i(g.dataset.jump)}),addEventListener("scroll",p,{passive:!0}),l(),p(),{refresh(){l(),p()},destroy(){removeEventListener("scroll",p)}}}function Ce({title:t,text:a,actions:e}){return`
  <div class="card empty">
    <div class="empty-orb" aria-hidden="true">${c("auto_awesome")}</div>
    <h2 class="empty-title">${t}</h2>
    <p class="empty-text">${a}</p>
    <div class="empty-actions">${e}</div>
  </div>`}var ae="ja";function bn(t){let a=t.nameJa||t.name,e=t.jan?qs(t.jan):"",o=n=>ae==="both"?`<span class="zh">${d(n)}</span>`:"",s=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u3092\u63A2\u3057\u3066\u3044\u307E\u3059\u3002",zh:"\u6211\u5728\u627E\u9019\u500B\u5546\u54C1\u3002"},t.taxFree?{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"}:null,t.discountPct?{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\uFF08\u512A\u5F85\uFF09\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u53EF\u4EE5\u4F7F\u7528\u512A\u60E0\u5238\uFF08\u512A\u60E0\uFF09\u55CE\uFF1F"}:null,t.fragile?{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"}:null].filter(Boolean);return`
  <div class="dlg-shell counter-shell" data-mode="${ae}">
    <header class="dlg-head">
      <p class="eyebrow">${c("stars","sm")}COUNTER MEMO CARD \xB7 \u5C08\u6AC3\u51FA\u793A\u5361</p>
      <h2 id="counter-title" class="dlg-title">${d(t.name)}</h2>
      <div class="seg seg-text" role="group" aria-label="\u986F\u793A\u6A21\u5F0F">
        <button type="button" class="${ae==="ja"?"on":""}" aria-pressed="${ae==="ja"}" data-mode="ja">${c("visibility","sm")}\u65E5\u6587\u5927\u5B57</button>
        <button type="button" class="${ae==="both"?"on":""}" aria-pressed="${ae==="both"}" data-mode="both">${c("translate","sm")}\u4E2D\u65E5\u5C0D\u7167</button>
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u51FA\u793A\u5361">${c("close")}</button>
    </header>

    <div class="dlg-scroll counter-body" data-show>
      ${t.nameJa?"":`
      <div class="counter-tip" role="note">
        ${c("lightbulb")}
        <div><p><strong>\u5EFA\u8B70\u88DC\u4E0A\u65E5\u6587\u540D\u7A31\u6216 JAN \u689D\u78BC</strong></p>
        <p>\u76EE\u524D\u986F\u793A\u7684\u662F\u4E2D\u6587\u54C1\u540D\uFF0C\u5E97\u54E1\u53EF\u80FD\u770B\u4E0D\u61C2\u3002${t.jan?"\u5DF2\u6709\u689D\u78BC\uFF0C\u53EF\u4EE5\u5148\u8ACB\u5E97\u54E1\u6383\u63CF\u3002":""}</p></div>
        <button type="button" class="btn btn-sm btn-ghost" data-fix>${c("edit","sm")}\u7ACB\u5373\u88DC\u4E0A</button>
      </div>`}

      <div class="counter-banner">
        <span class="counter-banner-icon">${c("receipt_long")}</span>
        <div><p class="counter-to">TO STORE ASSOCIATE\uFF08\u8CA9\u58F2\u54E1\u69D8\u3078\uFF09</p>
        <p class="counter-hello" lang="ja">\u304A\u624B\u6570\u3067\u3059\u304C\u3001\u3053\u3061\u3089\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p></div>
      </div>

      <section class="counter-item">
        ${e?`
        <button type="button" class="counter-barcode" data-barcode aria-label="\u653E\u5927 JAN \u689D\u78BC ${d(t.jan)}\uFF0C\u5168\u87A2\u5E55\u7D66\u5E97\u54E1\u6383\u63CF">
          ${e}
          <span class="counter-barcode-num mono">${d(t.jan)}</span>
          <span class="counter-barcode-hint">${c("zoom_in","sm")}\u9EDE\u689D\u78BC\u53EF\u5168\u87A2\u5E55\u653E\u5927</span>
        </button>`:t.jan?`<p class="counter-jan-text"><span class="counter-label" lang="ja">JAN</span> <span class="mono">${d(t.jan)}</span></p>`:""}
        <p class="counter-label" lang="ja">\u5BFE\u8C61\u5546\u54C1</p>
        <p class="counter-name" lang="ja">${d(a)}</p>
        ${t.brand?`<p class="counter-brand">${d(t.brand)}</p>`:""}
        <p class="counter-qty" lang="ja">\u5E0C\u671B\u6570\u91CF\uFF1A<strong>${t.qty}</strong> \u70B9${ae==="both"?`<span class="zh">\uFF08\u60F3\u8CB7 ${t.qty} \u4EF6\uFF09</span>`:""}</p>
      </section>

      <section class="counter-lines">
        ${s.map(n=>`<button type="button" class="phrase phrase-lg" data-ja="${d(n.ja)}" data-zh="${d(n.zh)}"><span lang="ja">\u300C${d(n.ja)}\u300D</span>${o(n.zh)}</button>`).join("")}
      </section>

      <section class="counter-phrases" aria-labelledby="ph-title">
        <h3 id="ph-title" class="section-title">${c("touch_app","sm")}\u6307\u5DEE\u6703\u8A71\uFF1A\u9EDE\u4E00\u4E0B\u653E\u5927\u7D66\u5E97\u54E1\u770B</h3>
        <div class="phrase-grid">
          ${ws.map(n=>`<button type="button" class="phrase" data-ja="${d(n.ja)}" data-zh="${d(n.zh)}"><span lang="ja">\u300C${d(n.ja)}\u300D</span><span class="zh">${d(n.zh)}</span></button>`).join("")}
        </div>
      </section>
    </div>

    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-full>${c("fullscreen")}\u5168\u87A2\u5E55</button>
      <button type="button" class="btn btn-gold grow" data-copy>${c("content_copy")}\u8907\u88FD\u65E5\u6587</button>
    </footer>

    <div class="phrase-zoom" data-zoom hidden>
      <div class="zoom-barcode" data-zoom-bar hidden>${e}<p class="mono">${d(t.jan)}</p></div>
      <p class="zoom-ja" lang="ja"></p>
      <p class="zoom-zh"></p>
      <button type="button" class="btn btn-slate" data-zoom-close>${c("close")}\u6536\u8D77</button>
    </div>
  </div>`}function vn(t){let a=y.getItem(t);if(!a)return;let e=qt("dlg-counter",bn(a),"counter-title"),o=null,s=()=>{let r=y.getItem(t);if(!r){ft(e);return}e.querySelector(".dlg-shell").outerHTML=bn(r)};e.addEventListener("click",async r=>{let i=r.target;if(i.closest(".dlg-close")){ft(e);return}let l=i.closest("[data-mode]");if(l&&l.tagName==="BUTTON"){ae=l.dataset.mode,s(),e.querySelector(`button[data-mode="${ae}"]`)?.focus();return}if(i.closest("[data-fix]")){Ut(t);return}let u=i.closest(".phrase, [data-barcode]");if(u){o=u;let p=e.querySelector("[data-zoom]"),h=u.matches("[data-barcode]");p.classList.toggle("is-barcode",h),p.querySelector("[data-zoom-bar]").hidden=!h,p.querySelector(".zoom-ja").textContent=h?"":u.dataset.ja,p.querySelector(".zoom-zh").textContent=h?"":u.dataset.zh,p.hidden=!1,p.querySelector("[data-zoom-close]").focus();return}if(i.closest("[data-zoom-close]")){e.querySelector("[data-zoom]").hidden=!0,o?.focus();return}if(i.closest("[data-full]")){try{document.fullscreenElement?await document.exitFullscreen():await e.querySelector(".counter-shell").requestFullscreen()}catch{N({title:"\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u5168\u87A2\u5E55",message:"\u53EF\u4EE5\u628A\u624B\u6A5F\u8F49\u6A6B\u5411\u6216\u653E\u5927\u756B\u9762\u3002",tone:"muted"})}return}if(i.closest("[data-copy]")){let p=y.getItem(t),h=[`\u5BFE\u8C61\u5546\u54C1\uFF1A${p.nameJa||p.name}`,`\u5E0C\u671B\u6570\u91CF\uFF1A${p.qty}\u70B9`,p.jan?`JAN\uFF1A${p.jan}`:"",p.taxFree?"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002":""].filter(Boolean).join(`
`);try{await navigator.clipboard.writeText(h),N({title:"\u5DF2\u8907\u88FD\u65E5\u6587",message:"\u53EF\u4EE5\u8CBC\u5230\u7FFB\u8B6F App \u6216\u8A0A\u606F\u88E1\u3002",tone:"muted",duration:3e3})}catch{N({title:"\u7121\u6CD5\u8907\u88FD",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\uFF0C\u8ACB\u624B\u52D5\u9078\u53D6\u6587\u5B57\u3002",tone:"error"})}}}),e.addEventListener("keydown",r=>{let i=e.querySelector("[data-zoom]");r.key==="Escape"&&!i.hidden&&(r.preventDefault(),r.stopPropagation(),i.hidden=!0,o?.focus())},{capture:!0});let n=y.subscribe(s);Dt(e,{onClose:()=>{n(),document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}})}var zo={checked:"\u8A17\u904B\u884C\u674E",carry:"\u96A8\u8EAB\u884C\u674E",none:"\u4E0D\u653E\u884C\u674E\uFF08\u5BC4\u9001\uFF0F\u73FE\u5834\u4F7F\u7528\uFF09"};function $n(t){let{settings:a}=y.state,e=a.rate,{byItem:o}=be(y.state.items,a),s=o.get(t.id),n=s.group,r=Vt(t.category),i=Ze(t.priority),l;return t.taxFree?t.store?n.eligible?l=`${d(n.store)}${n.date?`\uFF08${Oe(n.date)}\uFF09`:""} \u514D\u7A05\u5546\u54C1\u672A\u7A05\u5408\u8A08 ${b(n.eligibleExcl)}\uFF0C\u5DF2\u9054 ${b(dt)} \u9580\u6ABB\u3002`:l=`${d(n.store)} \u76EE\u524D\u672A\u7A05\u5408\u8A08 ${b(n.eligibleExcl)}\uFF0C\u518D <strong>${b(n.shortfall)}</strong>\uFF08\u672A\u7A05\uFF09\u5373\u53EF\u9000\u7A05\u3002`:l="\u9078\u64C7\u5E97\u92EA\u5F8C\uFF0C\u624D\u80FD\u548C\u540C\u5E97\u5546\u54C1\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\u3002":l="\u9019\u4EF6\u5546\u54C1\u8A2D\u5B9A\u70BA\u4E0D\u8FA6\u514D\u7A05\u3002",`
  <div class="dlg-shell drawer-shell">
    <header class="dlg-head">
      <p class="eyebrow">${c(r.icon,"sm")}${d(r.label)}${t.buyFor?` \xB7 @${d(t.buyFor)}`:""}</p>
      <h2 id="detail-title" class="dlg-title">${d(t.name)}</h2>
      ${t.nameJa?`<p class="dlg-ja" lang="ja">${d(t.nameJa)}</p>`:""}
      <div class="tag-row">
        <span class="badge ${t.purchased?"badge-gold":"badge-muted"}">${c(t.purchased?"verified":"pending","sm")}${t.purchased?`\u5DF2\u8CB7${t.purchasedAt?` \xB7 ${jt(t.purchasedAt)}`:""}`:"\u5F85\u8CB7"}</span>
        <span class="badge badge-prio">${i.stars} ${i.label}</span>
        ${t.demo?'<span class="badge badge-muted">\u793A\u7BC4\u8CC7\u6599</span>':""}
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8A73\u60C5">${c("close")}</button>
    </header>

    <div class="dlg-scroll" tabindex="0" role="region" aria-label="\u5546\u54C1\u8A73\u60C5\u5167\u5BB9">
      <div class="detail-hero">
        ${Ha(t,"thumb-lg")}
        <dl class="info-grid">
          ${t.brand?`<div><dt>\u54C1\u724C</dt><dd>${d(t.brand)}</dd></div>`:""}
          <div><dt>\u6578\u91CF</dt><dd>${t.qty}</dd></div>
          <div><dt>\u5E6B\u8AB0\u8CB7</dt><dd>${t.buyFor?`@${d(t.buyFor)}`:"\u81EA\u7528"}</dd></div>
          <div class="span2"><dt>${t.purchased?"\u8CFC\u8CB7\u5E97\u5BB6":"\u76EE\u6A19\u5E97\u92EA"}</dt><dd>${t.purchased?d(t.purchasedStore||"\u672A\u8A18\u9304"):t.anyStore?"\u4E0D\u9650\u5E97\u92EA\uFF08\u6BD4\u50F9\u4E2D\uFF09":t.stores.length?t.stores.map((u,p)=>`${d(u)}${p===0&&t.stores.length>1?"<small>\uFF08\u4E3B\u9078\uFF09</small>":""}`).join("\u3001"):"\u672A\u9078\u5E97\u92EA"}</dd></div>
          <div><dt>\u5730\u5340</dt><dd>${d(t.area||"\u672A\u6307\u5B9A")}</dd></div>
          <div><dt>\u9810\u8A08\u65E5\u671F</dt><dd>${t.planDate?Oe(t.planDate):"\u672A\u5B9A"}</dd></div>
          <div><dt>\u91CD\u91CF</dt><dd>${t.weightKg?Wt(s.weight):"\u672A\u586B"}</dd></div>
          <div><dt>\u884C\u674E</dt><dd>${zo[Gt(t)]}${Gt(t)!==t.luggage?"<small>\uFF08\u4F9D\u5305\u88DD\u5C6C\u6027\uFF09</small>":""}</dd></div>
          ${t.jan?`<div class="span2"><dt>JAN \u689D\u78BC</dt><dd class="mono">${d(t.jan)}${Ue(t.jan)?"":' <small class="text-warn">\uFF08\u6AA2\u67E5\u78BC\u4E0D\u7B26\uFF09</small>'}</dd></div>`:""}
        </dl>
      </div>

      ${t.fragile||t.liquid||t.battery||t.blade?`<div class="tag-row">
        ${t.fragile?`<span class="badge badge-warn">${c("wine_bar","sm")}\u6613\u788E</span>`:""}
        ${t.liquid?`<span class="badge badge-cyan">${c("water_drop","sm")}\u6DB2\u9AD4</span>`:""}
        ${t.battery?`<span class="badge badge-danger">${c("battery_alert","sm")}\u542B\u92F0\u96FB\u6C60</span>`:""}
        ${t.blade?`<span class="badge badge-warn">${c("content_cut","sm")}\u5200\u526A\u985E</span>`:""}
      </div>`:""}

      <section class="ledger" aria-labelledby="ledger-title">
        <h3 id="ledger-title" class="section-title">${c("account_balance_wallet","sm")}\u91D1\u984D\u8207\u9000\u7A05\u8A66\u7B97</h3>
        <dl class="ledger-rows">
          <div><dt>\u5B9A\u50F9\uFF08\u542B\u7A05 ${t.taxRate}%\uFF09\xD7 ${t.qty}</dt><dd>${b(s.listIncl)}</dd></div>
          ${s.discount?`<div class="minus"><dt>\u6298\u6263 ${t.discountPct}%</dt><dd>\u2212 ${b(s.discount)}</dd></div>`:""}
          <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${b(s.pay)}</dd></div>
          ${s.refundable?`
            <div class="minus"><dt>\u96E2\u5883\u9000\u7A05\uFF08\u6D88\u8CBB\u7A05 ${t.taxRate}%\uFF09</dt><dd>\u2212 ${b(s.tax)}</dd></div>
            ${s.fee?`<div class="plus"><dt>\u9000\u7A05\u624B\u7E8C\u8CBB ${s.feePct}%</dt><dd>+ ${b(s.fee)}</dd></div>`:""}`:""}
        </dl>
        <div class="ledger-total">
          <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${b(s.net)}</span></div>
          <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${vt(s.net,e)}</span></div>
        </div>
        ${a.cardRebatePct?`<p class="hint">${c("credit_card","sm")}\u5237\u5361\u6DE8\u56DE\u994B ${a.cardRebatePct}%\uFF0C\u7D04\u518D\u7701 ${vt(s.pay*a.cardRebatePct/100,e)}</p>`:""}
      </section>

      <section class="threshold ${n.eligible&&t.taxFree?"ok":""}" aria-labelledby="th-title">
        <h3 id="th-title" class="section-title">${c("percent","sm")}\u514D\u7A05\u9580\u6ABB\uFF08\u540C\u5E97\u540C\u65E5\u672A\u7A05 ${b(dt)}\uFF09</h3>
        ${t.taxFree&&t.store?oe(n.progress,{label:"\u514D\u7A05\u9580\u6ABB\u9032\u5EA6",tone:n.eligible?"cyan":"gold"}):""}
        <p>${l}</p>
        ${n.undatedMerge&&t.taxFree?`<p class="small">${c("event","sm")} \u540C\u5E97\u5546\u54C1\u5206\u4E0D\u540C\u5929\u8CB7\u6642\uFF0C\u8ACB\u586B\u9810\u8A08\u65E5\u671F\uFF08\u76EE\u524D\u8996\u70BA\u540C\u4E00\u5929\u5408\u4F75\u8A08\u7B97${n.mergeNeeded?"\uFF0C\u5206\u958B\u8CB7\u53EF\u80FD\u5C31\u4E0D\u5230\u9580\u6ABB":""}\uFF09\u3002</p>`:""}
      </section>

      ${t.note?`<section><h3 class="section-title">${c("edit_note","sm")}\u5099\u8A3B</h3><p class="note-box">${d(t.note)}</p></section>`:""}
    </div>

    <footer class="dlg-foot">
      <button type="button" class="icon-btn icon-btn-lg" data-d="delete" aria-label="\u522A\u9664 ${d(t.name)}" title="\u522A\u9664">${c("delete")}</button>
      <button type="button" class="btn btn-ghost" data-d="edit">${c("edit")}\u7DE8\u8F2F</button>
      <button type="button" class="btn btn-slate" data-d="counter">${c("translate")}\u51FA\u793A\u7D66\u5E97\u54E1</button>
      <button type="button" class="btn ${t.purchased?"btn-ghost":"btn-gold"} grow" data-d="toggle">
        ${c(t.purchased?"undo":"check_circle")}${t.purchased?"\u6539\u56DE\u5F85\u8CB7":"\u6A19\u8A18\u5DF2\u8CB7"}
      </button>
    </footer>
  </div>`}function va(t){let a=y.getItem(t);if(!a)return;let e=qt("dlg-drawer",$n(a),"detail-title"),o=y.subscribe(()=>{let s=y.getItem(t);if(!s){ft(e);return}let n=e.querySelector(".dlg-scroll")?.scrollTop??0,r=document.activeElement?.dataset?.d;e.querySelector(".dlg-shell").outerHTML=$n(s),e.querySelector(".dlg-scroll").scrollTop=n,r&&e.querySelector(`[data-d="${r}"]`)?.focus()});e.addEventListener("click",async s=>{if(s.target.closest(".dlg-close")){ft(e);return}let n=s.target.closest("[data-d]")?.dataset.d;n==="toggle"?za(t):n==="edit"?Ut(t):n==="counter"?vn(t):n==="delete"&&await Wa(t)&&ft(e)}),Dt(e,{onClose:o})}var yn=t=>requestAnimationFrame(()=>requestAnimationFrame(t));function wn(t){yn(()=>{document.querySelectorAll(`[data-id="${CSS.escape(t)}"] .check.on`).forEach(a=>{a.classList.add("just-checked");let e=document.createElement("span");e.className="hanko",e.setAttribute("aria-hidden","true"),e.textContent="\u6E08",a.append(e),setTimeout(()=>{e.remove(),a.classList.remove("just-checked")},1600)})})}function xn(t){yn(()=>{document.querySelectorAll(`[data-group="${CSS.escape(t)}"]`).forEach(a=>{a.classList.add("just-reached");let e=document.createElement("span");e.className="taxfree-pop",e.setAttribute("aria-hidden","true"),e.innerHTML=`${c("verified","sm")}\u514D\u7A05\u9054\u6210`,(a.querySelector(".sg-head, .dlg-head")??a).append(e),setTimeout(()=>{e.remove(),a.classList.remove("just-reached")},2600)})})}async function za(t,a){let e=y.getItem(t);if(!e)return;let o=a;if(!e.purchased&&o===void 0)if(e.stores.length===1)o=e.stores[0];else if(e.stores.length>1||e.anyStore){if(o=await Gs(e),o===null)return}else o="";let s=!e.purchased&&o&&e.taxFree?Ka(y.state.items,y.state.settings,o):0,n=y.togglePurchased(t,void 0,o);if(!n.purchased){N({title:"\u5DF2\u6539\u56DE\u5F85\u8CB7",message:d(n.name),tone:"muted",duration:3e3});return}let{byItem:r}=be(y.state.items,y.state.settings),i=r.get(t),l=[n.purchasedStore?`\u5728 ${d(n.purchasedStore)} \u8CB7\u5230`:"",`\u652F\u4ED8 ${b(i.pay)}`].filter(Boolean);i.refund&&l.push(`\u9810\u4F30\u9000\u7A05 ${b(i.refund)}`),i.group.eligible&&i.group.store&&l.push(`${d(i.group.store)} \u5DF2\u9054\u514D\u7A05\u9580\u6ABB`);let u=!!o&&s<dt&&Ka(y.state.items,y.state.settings,o)>=dt;wn(t),u&&xn(et(o)),N({title:u?`\u5DF2\u8CB7\u30FB${d(o)} \u514D\u7A05\u9054\u6210`:"\u5DF2\u8CB7",message:`\u300C${d(n.name)}\u300D\xB7 ${l.join(" \xB7 ")}`,actionText:"\u5FA9\u539F",onAction:()=>y.togglePurchased(t,!1)})}async function Wa(t){let a=y.getItem(t);if(!a||!await Jt({title:"\u522A\u9664\u9019\u500B\u5546\u54C1\uFF1F",body:`\u300C<strong>${d(a.name)}</strong>\u300D\u6703\u5F9E\u6E05\u55AE\u79FB\u9664\u3002\u522A\u9664\u5F8C 5 \u79D2\u5167\u53EF\u4EE5\u6309\u300C\u5FA9\u539F\u300D\u3002`,confirmText:`\u522A\u9664\u300C${a.name.length>10?`${a.name.slice(0,10)}\u2026`:a.name}\u300D`,danger:!0}))return!1;let o=y.state.items.findIndex(n=>n.id===t),s=y.removeItem(t);return N({title:"\u5DF2\u522A\u9664",message:d(s.name),actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>y.restoreItem(s,o)}),!0}function Fe(t){t.addEventListener("click",a=>{let e=a.target.closest("[data-act]"),o=a.target.closest("[data-id]");if(!e||!o||!t.contains(o))return;let{id:s}=o.dataset;switch(e.dataset.act){case"toggle":za(s,e.dataset.at);break;case"open":va(s);break;case"edit":Ut(s);break;case"delete":Wa(s);break;default:break}})}var Ya="__none__",We="__any__",Va="__unknown__";function kn(t){let a=new Map,e=(o,s,n,r)=>{a.has(o)||a.set(o,{key:o,name:s,rows:[]}),a.get(o).rows.push({item:n,role:r})};for(let o of t)if(o.purchased){let s=o.purchasedStore;e(s?et(s):Va,s||"\u5DF2\u8CB7\uFF08\u672A\u8A18\u9304\u5E97\u5BB6\uFF09",o,"bought")}else o.anyStore?e(We,qe,o,"any"):o.stores.length?o.stores.forEach((s,n)=>e(et(s),s,o,n===0?"main":"backup")):e(Ya,"\u672A\u6307\u5B9A\u5E97\u92EA",o,"none");return[...a.values()]}function Ka(t,a,e){let o=kn(t).find(s=>s.key===et(e));return o?Sn(o,a).todayExcl:0}function Sn(t,a){let e=ne(Date.now()),o=0,s=0,n=0,r=0,i=0;for(let{item:l}of t.rows){let u=ke(l,a).lineExcl;if(l.purchased){if(i+=1,!l.taxFree)continue;l.purchasedAt&&ne(l.purchasedAt)===e?o+=u:s+=u}else r+=1,l.taxFree&&(n+=u)}return{todayExcl:o,otherDaysExcl:s,pendingExcl:n,pendingCount:r,boughtCount:i}}function Tn(t,a,e){if(e)return{status:"",bar:""};if(a.noTaxFree)return{status:`<span class="sg-plan">${c("block","sm")}\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05</span>`,bar:""};if(a.dutyFree)return{status:`<span class="sg-plan">${c("flight_takeoff","sm")}\u51FA\u5883\u5340\u514D\u7A05\u5E97\uFF0C\u552E\u50F9\u5DF2\u4E0D\u542B\u7A05</span>`,bar:""};let o=t.todayExcl>=dt,s=t.todayExcl+t.pendingExcl;if(!t.todayExcl&&!t.pendingExcl)return{status:t.pendingCount?`<span class="sg-plan">${c("info","sm")}\u6E05\u55AE\u88E1\u6C92\u6709\u8981\u8FA6\u514D\u7A05\u7684\u5546\u54C1</span>`:"",bar:""};if(!t.todayExcl&&t.pendingExcl){let i=t.pendingExcl>=dt,l=`<span class="sg-now">\u6E05\u55AE\u5408\u8A08 <strong>${b(t.pendingExcl)}</strong><small>\uFF08\u672A\u7A05\uFF09</small></span>${i?`<span class="sg-plan ok">${c("verified","sm")}\u5168\u8CB7\u53EF\u514D\u7A05</span>`:`<span class="sg-plan">\u9084\u5DEE ${b(dt-t.pendingExcl)} \u624D\u80FD\u514D\u7A05</span>`}`,u=`<div class="sg-bar is-plan" role="img" aria-label="\u6E05\u55AE\u5F85\u8CB7\u672A\u7A05 ${b(t.pendingExcl)}\uFF0C\u514D\u7A05\u9580\u6ABB ${b(dt)}${i?"\uFF0C\u5168\u8CB7\u53EF\u9054\u6A19":""}">
      <span class="seg-later" style="--w:${Math.min(100,t.pendingExcl/dt*100)}%"></span>
    </div>`;return{status:l,bar:u}}let n=o?`<span class="sg-ok">${c("verified","sm")}\u4ECA\u5929\u5DF2\u9054\u514D\u7A05\uFF08\u672A\u7A05 ${b(t.todayExcl)}\uFF09</span>`:`<span class="sg-now">\u4ECA\u5929\u5DF2\u8CB7 <strong>${b(t.todayExcl)}</strong>\uFF08\u5DEE <strong>${b(dt-t.todayExcl)}</strong> \u514D\u7A05\uFF09</span>`;t.pendingExcl&&!o&&(n+=s>=dt?'<span class="sg-plan ok">\u6E05\u55AE\u5168\u8CB7\u53EF\u9054\u6A19</span>':`<span class="sg-plan">\u6E05\u55AE\u5168\u8CB7\u4ECD\u5DEE ${b(dt-s)}</span>`);let r=`<div class="sg-bar" role="img" aria-label="\u4ECA\u5929\u672A\u7A05 ${b(t.todayExcl)}\uFF0C\u6E05\u55AE\u5F85\u8CB7 ${b(t.pendingExcl)}\uFF0C\u514D\u7A05\u9580\u6ABB ${b(dt)}">
    <span class="seg-paid" style="--w:${Math.min(100,t.todayExcl/dt*100)}%"></span>
    <span class="seg-later" style="--w:${Math.max(0,Math.min(100-t.todayExcl/dt*100,t.pendingExcl/dt*100))}%"></span>
  </div>`;return{status:n,bar:r}}var En=t=>c(t===We?"compare_arrows":t?"help":"storefront"),Mn=t=>[t.pendingCount?`\u5F85\u8CB7 ${t.pendingCount}`:"",t.boughtCount?`\u5DF2\u8CB7 ${t.boughtCount}`:""].filter(Boolean).join(" \xB7 ");function Wo(t){let{st:a,info:e,special:o}=t,{status:s,bar:n}=Tn(a,e,o),r=t.rows.filter(l=>!l.item.purchased).slice(0,3).map(l=>d(l.item.name)),i=a.pendingCount-r.length;return`
  <article class="card sg ${a.pendingCount?"":"is-clear"}" data-group="${d(t.key)}">
    <div class="sg-head">
      <h3 class="sg-heading">
        <button type="button" class="sg-toggle card-link-sg" data-sg-open aria-haspopup="dialog">
          <span class="sg-icon">${En(o)}</span>
          <span class="sg-title">
            <span class="sg-name">${d(t.name)}</span>
            <span class="sg-count">${Mn(a)}</span>
          </span>
          <span class="sg-chevron" aria-hidden="true">${c("chevron_right")}</span>
        </button>
      </h3>
      ${s?`<div class="sg-status">${s}</div>`:""}
      ${n}
      ${r.length?`<p class="sg-preview">${c("shopping_bag","sm")}<span>${r.join("\u3001")}${i>0?` \u7B49 ${a.pendingCount} \u4EF6`:""}</span></p>`:`<p class="sg-preview muted">${c("check_circle","sm")}<span>\u9019\u5BB6\u5E97\u7684\u6E05\u55AE\u5DF2\u8CB7\u9F4A</span></p>`}
      ${o||!e.couponUrl?"":`<div class="sg-actions">
        <a class="btn btn-xs btn-gold" href="${d(e.couponUrl)}" target="_blank" rel="noopener">${c("local_offer","sm")}\u958B\u555F\u512A\u60E0\u5238<span class="sr-only">\uFF08${d(t.name)}\uFF0C\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>
      </div>`}
    </div>
  </article>`}function Ko(t,a){let e=(t.coupons??[]).filter(n=>!n.categories).sort((n,r)=>n.min-r.min);if(!e.length)return"";let o=e.find(n=>a.todayExcl<n.min),s=[...e].reverse().find(n=>a.todayExcl>=n.min);return o?`<p class="tip">${c("local_offer","sm")}<span>${s?`\u5DF2\u53EF\u7528 ${s.pct}% \u5238\uFF1B`:""}\u4ECA\u5929\u518D\u8CB7\u672A\u7A05 ${b(o.min-a.todayExcl)}\uFF0C\u53EF\u7528 ${o.pct}% \u512A\u60E0\u5238${a.todayExcl+a.pendingExcl>=o.min?"\uFF08\u6E05\u55AE\u5168\u8CB7\u5C31\u9054\u5230\uFF09":""}\u3002</span></p>`:`<p class="tip tip-info">${c("local_offer","sm")}<span>\u4ECA\u5929\u5DF2\u9054\u6700\u9AD8\u512A\u60E0\u9580\u6ABB\uFF0C\u7D50\u5E33\u524D\u51FA\u793A\u512A\u60E0\u5238\u53EF\u518D\u6298 ${s.pct}%\u3002</span></p>`}function Yo({item:t,role:a},e,o,s){let n=ke(t,o),r=t.stores.filter(u=>et(u)!==e.key),i=[];t.qty>1&&i.push(`\xD7 ${t.qty}`),t.buyFor&&i.push(`<span class="who-tag">@${d(t.buyFor)}</span>`),a==="backup"&&i.push('<span class="role-tag">\u5099\u9078</span>'),!t.purchased&&r.length&&i.push(`<span class="alt-stores">\u4E5F\u53EF\u5728\uFF1A${r.map(d).join("\u3001")}</span>`),t.taxFree||i.push('<span class="muted">\u4E0D\u8FA6\u514D\u7A05</span>');let l=t.purchased||e.key===We||e.key===Ya||e.key===Va?"":` data-at="${d(e.name)}"`;return`
  <li class="sg-row ${t.purchased?"is-done":""}" data-id="${t.id}">
    <button type="button" class="check ${t.purchased?"on":""}" data-act="toggle"${l}
      role="checkbox" aria-checked="${t.purchased}" aria-label="${t.purchased?"\u5DF2\u8CB7":`\u5728${d(e.name)}\u8CB7\u5230`}\uFF1A${d(t.name)}">${c("check")}</button>
    <div class="sg-main">
      <button type="button" class="sg-name-btn" data-act="open">${d(t.name)}</button>
      ${i.length?`<p class="sg-meta">${i.join('<span aria-hidden="true">\xB7</span>')}</p>`:""}
    </div>
    <p class="sg-price"><span>${b(n.pay)}</span><small>\u2248 ${vt(n.pay,s)}</small></p>
  </li>`}function $a(t,a){let{settings:e}=t,o=t.items.filter(a);return kn(o).map(n=>{let r=[We,Ya,Va].includes(n.key)?n.key:null;return{...n,special:r,st:Sn(n,e),info:r?{}:he(n.name,e.storeMeta)}}).sort((n,r)=>(n.special?1:0)-(r.special?1:0)||(r.st.pendingCount>0)-(n.st.pendingCount>0)||r.st.pendingCount-n.st.pendingCount||n.name.localeCompare(r.name,"zh-Hant"))}function An({state:t},a){let{settings:e}=t,o=$a(t,a),s=Es(t.items.flatMap(r=>[...r.stores,r.purchasedStore]),e.ignoredStorePairs),n=s.length?`<div class="merge-list" role="region" aria-label="\u53EF\u80FD\u662F\u540C\u4E00\u5BB6\u5E97">${s.map(([r,i])=>`
    <div class="notice notice-warn merge-notice" data-a="${d(r)}" data-b="${d(i)}">
      ${c("storefront")}
      <p><strong>\u300C${d(r)}\u300D\u548C\u300C${d(i)}\u300D\u662F\u540C\u4E00\u5BB6\u5E97\u55CE\uFF1F</strong><br>\u5E97\u540D\u4E0D\u540C\u6703\u5206\u958B\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\uFF0C\u5408\u4F75\u5F8C\u624D\u6703\u6B63\u78BA\u52A0\u7E3D\u3002</p>
      <div class="btn-row merge-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-merge="a">\u5408\u4F75\u70BA\u300C${d(r)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="b">\u5408\u4F75\u70BA\u300C${d(i)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="no">\u4E0D\u662F\u540C\u4E00\u5BB6</button>
      </div>
    </div>`).join("")}</div>`:"";return o.length?`${n}
  <p class="result-count" role="status">${o.filter(r=>!r.special).length} \u5BB6\u5E97 \xB7 \u9EDE\u5E97\u92EA\u5361\u7247\u6253\u958B\u8A72\u5E97\u7684\u63A1\u8CB7\u6E05\u55AE\uFF0C\u908A\u62FF\u908A\u52FE\u9078</p>
  <div class="item-grid sg-grid">${o.map(Wo).join("")}</div>`:`${n}<div class="card empty empty-sm"><p class="empty-text">\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5546\u54C1\u3002</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${c("filter_alt_off")}\u6E05\u9664\u7BE9\u9078</button></div>`}function Vo(t,a,e){if(!t)return`<div class="dlg-shell sheet-shell">
      <header class="dlg-head"><h2 id="sheet-title" class="dlg-title">\u9019\u5BB6\u5E97\u6C92\u6709\u5546\u54C1\u4E86</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589">${c("close")}</button></header>
      <div class="dlg-scroll"><p class="muted">\u5546\u54C1\u53EF\u80FD\u5DF2\u88AB\u522A\u9664\u3001\u6539\u5230\u5176\u4ED6\u5E97\uFF0C\u6216\u4E0D\u7B26\u5408\u76EE\u524D\u7684\u7BE9\u9078\u689D\u4EF6\u3002</p></div></div>`;let{st:o,info:s,special:n}=t,{status:r,bar:i}=Tn(o,s,n),l=!n&&t.rows.filter(p=>!p.item.purchased&&p.item.taxFree&&!p.item.planDate).length>=2,u=[...t.rows].sort((p,h)=>Number(p.item.purchased)-Number(h.item.purchased));return`
  <div class="dlg-shell sheet-shell" data-group="${d(t.key)}">
    <header class="dlg-head">
      <p class="eyebrow">${En(n)}${n?"\u63A1\u8CB7\u6E05\u55AE":"STORE LIST \xB7 \u5E97\u92EA\u63A1\u8CB7\u6E05\u55AE"}</p>
      <h2 id="sheet-title" class="dlg-title">${d(t.name)}</h2>
      <p class="sg-count">${Mn(o)}</p>
      ${r?`<div class="sg-status">${r}</div>`:""}
      ${i}
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589 ${d(t.name)} \u63A1\u8CB7\u6E05\u55AE">${c("close")}</button>
    </header>
    <div class="dlg-scroll" tabindex="0" role="region" aria-label="${d(t.name)} \u7684\u5546\u54C1">
      ${n?"":oa(s)}
      ${n?"":Ko(s,o)}
      ${o.otherDaysExcl?`<p class="tip tip-info">${c("event","sm")}<span>\u5176\u4ED6\u5929\u5728\u9019\u5BB6\u8CB7\u7684 ${b(o.otherDaysExcl)}\uFF08\u672A\u7A05\uFF09\u53E6\u5916\u8A08\u7B97\uFF0C\u4E0D\u4F75\u5165\u4ECA\u5929\u7684\u9580\u6ABB\u3002</span></p>`:""}
      ${l?`<p class="tip tip-info">${c("event","sm")}<span>\u540C\u5E97\u5546\u54C1\u5206\u4E0D\u540C\u5929\u8CB7\u6642\uFF0C\u8ACB\u5728\u5546\u54C1\u7684\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u586B\u9810\u8A08\u65E5\u671F\uFF0C\u9000\u7A05\u624D\u4E0D\u6703\u9AD8\u4F30\u3002</span></p>`:""}
      ${t.key===We?`<p class="tip tip-info">${c("compare_arrows","sm")}<span>\u52FE\u9078\u6642\u6703\u8A62\u554F\u5728\u54EA\u5BB6\u8CB7\u5230\uFF0C\u4EE5\u4FBF\u7D2F\u8A08\u8A72\u5E97\u7684\u514D\u7A05\u9580\u6ABB\u3002</span></p>`:""}
      <ul class="sg-rows">${u.map(p=>Yo(p,t,a,e)).join("")}</ul>
      ${n?"":`<a class="link-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.name)}" target="_blank" rel="noopener">${c("map","sm")}\u5728 Google \u5730\u5716\u627E\u9644\u8FD1\u5206\u5E97<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`}
    </div>
    ${n?"":`<footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-sg-meta="${d(t.name)}">${c("tune","sm")}${s.couponUrl?"\u512A\u60E0\u5238\u8A2D\u5B9A":"\u52A0\u5165\u512A\u60E0\u5238\u9023\u7D50"}</button>
      ${s.couponUrl?`<a class="btn btn-gold grow" href="${d(s.couponUrl)}" target="_blank" rel="noopener">${c("local_offer","sm")}\u958B\u555F\u512A\u60E0\u5238<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`:""}
    </footer>`}
  </div>`}function Xo(t,a,{onMeta:e}){let o=()=>$a(y.state,a).find(l=>l.key===t),s=()=>Vo(o(),y.state.settings,y.state.settings.rate),n=qt("dlg-drawer dlg-sheet",s(),"sheet-title"),r=()=>{let l=n.querySelector(".dlg-scroll")?.scrollTop??0,u=document.activeElement,p=u?.closest?.("[data-id]")?.dataset.id,h=u?.dataset?.act;n.querySelector(".dlg-shell").outerHTML=s(),n.querySelector(".dlg-scroll").scrollTop=l,p&&h&&n.querySelector(`[data-id="${p}"] [data-act="${h}"]`)?.focus({preventScroll:!0})},i=y.subscribe(r);n.addEventListener("click",l=>{if(l.target.closest(".dlg-close")){ft(n);return}let u=l.target.closest("[data-sg-meta]");u&&e(u.dataset.sgMeta)}),Fe(n),Dt(n,{onClose:()=>{i(),requestAnimationFrame(()=>document.querySelector(`#view [data-group="${CSS.escape(t)}"] [data-sg-open]`)?.focus({preventScroll:!0}))}})}function Ln(t,{onMeta:a,filterFn:e}){t.addEventListener("click",o=>{let s=o.target.closest("[data-sg-open], [data-merge], [data-sg-meta]");if(s){if(s.matches("[data-sg-open]"))Xo(s.closest("[data-group]").dataset.group,e,{onMeta:a});else if(s.matches("[data-sg-meta]"))a(s.dataset.sgMeta);else if(s.matches("[data-merge]")){let n=s.closest(".merge-notice"),{a:r,b:i}=n.dataset;if(s.dataset.merge==="no")y.updateSettings({ignoredStorePairs:[...y.state.settings.ignoredStorePairs,Aa(r,i)]}),N({title:"\u5DF2\u8A18\u4F4F\uFF1A\u5169\u5BB6\u662F\u4E0D\u540C\u7684\u5E97",tone:"muted",duration:2500});else{let l=s.dataset.merge==="a"?r:i,u=l===r?i:r,p=y.state.items.map(h=>({id:h.id,stores:h.stores,purchasedStore:h.purchasedStore}));y.renameStore(u,l),N({title:`\u5DF2\u5408\u4F75\u70BA\u300C${l}\u300D`,message:"\u514D\u7A05\u9580\u6ABB\u5DF2\u91CD\u65B0\u8A08\u7B97\u3002",actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>p.forEach(h=>y.updateItem(h.id,{stores:h.stores,purchasedStore:h.purchasedStore}))})}}}})}var Re={crown:1.72,burst:3.3,sea:4.6,start:1.6,span:5.875,settle:9.5},ya=[{dpr:1.5,q:1},{dpr:1.15,q:.7},{dpr:.85,q:.45}];function wa(t){let a=t>>>0;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}var Qo=`
  attribute vec2 aPos;
  varying vec2 vUv;
  void main() { vUv = aPos * .5 + .5; gl_Position = vec4(aPos, 0., 1.); }`,Zo=`
  attribute vec2 aCenter; attribute vec2 aCorner; attribute vec2 aSize; attribute vec4 aColor; attribute vec2 aKind;
  uniform vec2 uRes;
  varying vec2 vUv; varying vec4 vColor; varying float vKind; varying float vParam;
  void main() {
    float rot = aKind.x > 5.5 ? 0. : aKind.y;   // \u5F69\u8679\u74B0\u4E0D\u65CB\u8F49\uFF0C\u7B2C\u4E8C\u500B\u6578\u503C\u6539\u7576\u4F5C\u74B0\u7684\u7C97\u7D30
    float c = cos(rot), s = sin(rot);
    vParam = aKind.y;
    vec2 o = aCorner * aSize;
    vec2 p = aCenter + vec2(o.x * c - o.y * s, o.x * s + o.y * c);
    vUv = aCorner; vColor = aColor; vKind = aKind.x;
    gl_Position = vec4(p.x / uRes.x * 2. - 1., 1. - p.y / uRes.y * 2., 0., 1.);
  }`,tr=`
  precision mediump float;
  varying vec2 vUv; varying vec4 vColor; varying float vKind; varying float vParam;
  void main() {
    float d = length(vUv);
    float a = 0.;
    vec3 tint = vec3(1.);
    if (vKind < .5) {            // 0 \u67D4\u5149\uFF1A\u5916\u570D\u67D4\u3001\u4E2D\u5FC3\u6709\u4E00\u500B\u4EAE\u6838
      float g = max(0., 1. - d); a = g * g * g + .7 * pow(g, 12.);
    } else if (vKind < 1.5) {    // 1 \u6DB2\u6EF4\u7403\uFF08\u756B\u9032\u6FC3\u5EA6\u5716\uFF09
      float g = max(0., 1. - d * d); a = g * g * g;
    } else if (vKind < 2.5) {    // 2 \u6F23\u6F2A\uFF1A\u6A62\u5713\u5F62\u7684\u7D30\u74B0
      a = smoothstep(.09, 0., abs(d - .86)) * step(d, 1.);
    } else if (vKind < 3.5) {    // 3 \u5341\u5B57\u9583\u5149
      vec2 q = abs(vUv);
      float g = max(0., 1. - d);
      a = pow(max(0., 1. - q.x), 8.) * pow(max(0., 1. - q.y * 10.), 2.)
        + pow(max(0., 1. - q.y), 8.) * pow(max(0., 1. - q.x * 10.), 2.) + g * g * g * .6;
    } else if (vKind < 4.5) {    // 4 \u6563\u666F\uFF1A\u5E73\u6574\u7684\u5713\u76E4\uFF0C\u908A\u7DE3\u4E00\u5708\u7565\u4EAE\uFF08\u5931\u7126\u7684\u5149\u6591\uFF09
      a = smoothstep(1., .82, d) * (.78 + .22 * smoothstep(.5, .9, d));
    } else if (vKind < 5.5) {    // 5 \u5149\u675F\uFF1A\u6CBF\u8457\u9577\u908A\u5169\u7AEF\u6DE1\u51FA\u3001\u77ED\u908A\u5F88\u7D30
      float lx = max(0., 1. - abs(vUv.x));
      a = lx * lx * exp(-vUv.y * vUv.y * 5.);
    } else {                     // 6 \u5F69\u8679\u74B0\uFF1A\u4E00\u5708\u7D30\u74B0\uFF0CvParam \u662F\u74B0\u7684\u534A\u5BEC\uFF08\u76F8\u5C0D\u65BC\u9762\u7247\u5927\u5C0F\uFF09\uFF0C\u4E2D\u7DDA\u5728 1 - vParam
      float w = max(vParam, .002);
      float t = (d - (1. - w)) / w;                               // -1 \u5167\u7DE3 \uFF5E 1 \u5916\u7DE3
      float band = smoothstep(1., .35, abs(t)) * step(d, 1.);
      // \u771F\u6B63\u7684\u5F69\u8679\u9806\u5E8F\uFF1A\u5167\u7DE3\u7D2B \u2192 \u85CD \u2192 \u9752 \u2192 \u7DA0 \u2192 \u9EC3 \u2192 \u6A58 \u2192 \u5916\u7DE3\u7D05\uFF1B\u4E2D\u7DDA\u662F\u4E00\u689D\u767D\u71B1\u7684\u4EAE\u7DDA
      float hue = mix(.78, 0., clamp(t * .68 + .5, 0., 1.));         // \u7A0D\u5FAE\u5F80\u4E2D\u9593\u6536\uFF0C\u5916\u7DE3\u7684\u6A58\u7D05\u624D\u770B\u5F97\u5230
      vec3 rgb = clamp(abs(fract(hue + vec3(0., .6667, .3333)) * 6. - 3.) - 1., 0., 1.);
      tint = mix(rgb, vec3(1., .97, .9), .1 + .5 * smoothstep(.28, 0., abs(t)));
      a = band;
    }
    gl_FragColor = vec4(vColor.rgb * tint * (a * vColor.a), 1.);
  }`,er=`
  precision mediump float;
  varying vec2 vUv; uniform sampler2D uTex;
  void main() {
    vec3 c = texture2D(uTex, vUv).rgb;
    float b = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(.25, .9, b), 1.);
  }`,ar=`
  precision mediump float;
  varying vec2 vUv; uniform sampler2D uTex; uniform vec2 uDir;
  void main() {
    vec3 c = texture2D(uTex, vUv).rgb * .2270270;
    c += (texture2D(uTex, vUv + uDir * 1.3846154).rgb + texture2D(uTex, vUv - uDir * 1.3846154).rgb) * .3162162;
    c += (texture2D(uTex, vUv + uDir * 3.2307692).rgb + texture2D(uTex, vUv - uDir * 3.2307692).rgb) * .0702703;
    gl_FragColor = vec4(c, 1.);
  }`,sr=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uScene, uB0, uB1, uB2, uB3; uniform float uBloom; uniform float uExposure;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    vec3 c = texture2D(uScene, vUv).rgb;
    vec3 b = texture2D(uB0, vUv).rgb * .55 + texture2D(uB1, vUv).rgb * .8 + texture2D(uB2, vUv).rgb + texture2D(uB3, vUv).rgb * 1.2;
    c += b * uBloom;
    c = 1. - exp(-c * uExposure);
    vec2 v = vUv - .5;
    c *= 1. - dot(v, v) * .55;
    c += (hash(gl_FragCoord.xy) - .5) / 255.;
    gl_FragColor = vec4(c, 1.);
  }`;function nr(t){let a={alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"},e=t.getContext("webgl2",a),o=!!e;if(e||(e=t.getContext("webgl",a)),!e)return{error:"\u7121\u6CD5\u4F7F\u7528 WebGL"};function s(x,J=Qo){let B=(at,T)=>{let X=e.createShader(at);if(e.shaderSource(X,T),e.compileShader(X),!e.getShaderParameter(X,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(X));return X},C=e.createProgram();if(e.attachShader(C,B(e.VERTEX_SHADER,J)),e.attachShader(C,B(e.FRAGMENT_SHADER,x)),e.linkProgram(C),!e.getProgramParameter(C,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(C));let Z={},Y=e.getProgramParameter(C,e.ACTIVE_UNIFORMS);for(let at=0;at<Y;at++){let T=e.getActiveUniform(C,at).name;Z[T]=e.getUniformLocation(C,T)}return{p:C,u:Z}}let n;try{n={sprite:s(tr,Zo),pre:s(er),blur:s(ar),comp:s(sr)}}catch(x){return{error:`\u8457\u8272\u5668\u7DE8\u8B6F\u5931\u6557\uFF1A${x.message}`}}let r=null;if(o)(e.getExtension("EXT_color_buffer_float")||e.getExtension("EXT_color_buffer_half_float"))&&(r={internal:e.RGBA16F,type:e.HALF_FLOAT});else{let x=e.getExtension("OES_texture_half_float");x&&e.getExtension("OES_texture_half_float_linear")&&e.getExtension("EXT_color_buffer_half_float")&&(r={internal:e.RGBA,type:x.HALF_FLOAT_OES})}function i(x,J){let B=e.createTexture();e.bindTexture(e.TEXTURE_2D,B);let C=r||{internal:e.RGBA,type:e.UNSIGNED_BYTE};e.texImage2D(e.TEXTURE_2D,0,C.internal,x,J,0,e.RGBA,C.type,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let Z=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,Z),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,B,0),{tex:B,fbo:Z,w:x,h:J,ok:e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}}let l=x=>{x&&(e.deleteTexture(x.tex),e.deleteFramebuffer(x.fbo))};r&&!i(4,4).ok&&(r=null);let u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let p=12,h=6e3,g=new Float32Array(h*6*p),A=e.createBuffer(),m=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1],$=0,v={gl:e,gl2:o,hdr:!!r,P:n,W:0,H:0,U:0,scene:null,bloom:[],bloomOn:!0,maxDpr:1.5,program:s,target:i,drop:l,push(x,J,B,C,Z,Y,at,T,X,V=0){if($>=h||T<=.002)return;let O=$*6*p;for(let H=0;H<6;H++)g[O++]=x,g[O++]=J,g[O++]=m[H*2],g[O++]=m[H*2+1],g[O++]=B,g[O++]=C,g[O++]=Z,g[O++]=Y,g[O++]=at,g[O++]=T,g[O++]=X,g[O++]=V;$+=1},flush(x=v.W,J=v.H){if(!$)return;let{p:B,u:C}=n.sprite;e.useProgram(B),e.uniform2f(C.uRes,x,J),e.bindBuffer(e.ARRAY_BUFFER,A),e.bufferData(e.ARRAY_BUFFER,g.subarray(0,$*6*p),e.DYNAMIC_DRAW);let Z=4*p,Y=(at,T,X)=>{let V=e.getAttribLocation(B,at);e.enableVertexAttribArray(V),e.vertexAttribPointer(V,T,e.FLOAT,!1,Z,X*4)};Y("aCenter",2,0),Y("aCorner",2,2),Y("aSize",2,4),Y("aColor",4,6),Y("aKind",2,10),e.drawArrays(e.TRIANGLES,0,$*6),$=0},fullscreen(x){e.useProgram(x.p),e.bindBuffer(e.ARRAY_BUFFER,u);let J=e.getAttribLocation(x.p,"aPos");e.enableVertexAttribArray(J),e.vertexAttribPointer(J,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLES,0,6)},bindTex(x,J,B){e.activeTexture(e.TEXTURE0+x),e.bindTexture(e.TEXTURE_2D,J),e.uniform1i(B,x)},additive(x){x?(e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE)):e.disable(e.BLEND)},resize(){let x=Math.min(window.devicePixelRatio||1,v.maxDpr),J=Math.max(2,Math.round(t.clientWidth*x)),B=Math.max(2,Math.round(t.clientHeight*x));return J===v.W&&B===v.H||t.clientWidth<2||t.clientHeight<2?!1:(v.W=J,v.H=B,v.U=Math.min(J,B),t.width=J,t.height=B,l(v.scene),v.bloom.forEach(C=>{l(C.a),l(C.b)}),v.scene=i(J,B),v.bloom=[2,4,8,16].map(C=>{let Z=Math.max(2,Math.ceil(J/C)),Y=Math.max(2,Math.ceil(B/C));return{a:i(Z,Y),b:i(Z,Y)}}),!0)},begin(){e.disable(e.DEPTH_TEST),v.toScene(),e.disable(e.BLEND),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)},toScene(){e.bindFramebuffer(e.FRAMEBUFFER,v.scene.fbo),e.viewport(0,0,v.W,v.H)},finish({bloom:x=.5,exposure:J=1}={}){e.disable(e.BLEND);let B=v.scene;v.bloom.forEach((C,Z)=>{e.bindFramebuffer(e.FRAMEBUFFER,C.a.fbo),e.viewport(0,0,C.a.w,C.a.h);let Y=Z===0?n.pre:n.blur;e.useProgram(Y.p),v.bindTex(0,B.tex,Y.u.uTex),Z>0&&e.uniform2f(Y.u.uDir,0,0),v.fullscreen(Y);for(let at=0;at<2;at++){let T=at?C.b:C.a,X=at?C.a:C.b;e.bindFramebuffer(e.FRAMEBUFFER,X.fbo),e.useProgram(n.blur.p),v.bindTex(0,T.tex,n.blur.u.uTex),e.uniform2f(n.blur.u.uDir,at?0:1/C.a.w,at?1/C.a.h:0),v.fullscreen(n.blur)}B=C.a}),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,v.W,v.H),e.useProgram(n.comp.p),v.bindTex(0,v.scene.tex,n.comp.u.uScene),v.bloom.forEach((C,Z)=>v.bindTex(Z+1,C.a.tex,n.comp.u[`uB${Z}`])),e.uniform1f(n.comp.u.uBloom,v.bloomOn?x:0),e.uniform1f(n.comp.u.uExposure,J),v.fullscreen(n.comp)}};return v}function or(t){let a=t.push,e=wa(20261114),o=C=>Math.min(1,Math.max(0,C)),s=C=>1-(1-C)**3,n=C=>C<.5?2*C*C:1-(-2*C+2)**2/2,r=Math.PI*2,i=1.6,l=6.2,u=[1,.76,.16],p=[1,.5,.06],h=[1,.9,.55],g=[1,.97,.88],A=[.7,.8,1],m=3,$=64,v=Array.from({length:760},()=>({s:e(),rf:e()**1.6,ph:e()*r,spin:(e()-.5)*3,v:.12+e()*.3,size:.0024+e()**2*.007,f:3+e()*9,tp:e()*r,star:e()<.13,c:e()<.12?g:e()<.6?h:u})),x=Array.from({length:84},()=>({ang:e()*r,len:.12+e()**1.8*.75,w:.0012+e()*.0026,a:.3+e()*.7,c:e()<.3?A:e()<.7?g:h,off:.03+e()*.1,f:1+e()*3,ph:e()*r})),J=Array.from({length:16},()=>({x:e(),y:e()*.9,s:.002+e()*.004,rot:e()*Math.PI,f:.4+e(),ph:e()*r})),B=(C,Z,Y)=>Z*(.003+.125*C**.8)*(1+.2*Math.sin(C*7-Y*1.6));return{emit(C,Z){let{W:Y,H:at,U:T}=t,X=Y/2,V=at*.74,O=C-i,H=n(o(C/i)),st=-at*.08+(V+at*.08)*H,it=Math.max(at*.9,st+at*.25),P=o(1-(O-2.2)/.6),w=O<=0?0:(O<.55?s(O/.55):1-.78*o((O-.9)/1.3))*P,nt=(.25+.75*H)*(O>0?o(1-O/.4):1);for(let E of J){let _=.35+.65*Math.sin(Z*E.f+E.ph)**2;a(E.x*Y,E.y*at,T*E.s*2.2,T*E.s,...h,.9*_,0,E.rot)}let k=o((H-.6)/.4);a(X,V+T*.03,T*.75,T*.05,.4,.3,.75,.22*k*P,0),a(X,V+T*.012,T*.3,T*.02,...p,.5*k*P,0);let I=1.7;for(let E=0;E<m;E++){let _=0,K=0;for(let j=0;j<=$;j++){let q=j/$,M=st-q*it,F=q*I*r+Z*2.2+E/m*r,W=X+Math.sin(F)*B(q,T,Z);if(j&&M<at+20&&K>-20){let ct=.5+.5*Math.cos(F),lt=W-_,yt=M-K,wt=Math.hypot(lt,yt),f=(.3+.9*ct)*o(q*14)*(1-.4*q)*P;a((W+_)/2,(M+K)/2,wt*1.5,T*(.002+.0032*ct),...h,f,5,Math.atan2(yt,lt))}_=W,K=M}}for(let E of v){let _=((E.s-Z*E.v)%1+1)%1,K=st-_*it;if(K<-10||K>at+10)continue;let j=B(_,T,Z)*(.15+1.05*E.rf),q=X+Math.sin(E.ph+Z*E.spin+_*7)*j,M=.3+.7*Math.sin(Z*E.f+E.tp)**2,F=T*E.size*(E.star?4.2:1)*(.7+.6*_);a(q,K,F,F,...E.c,(E.star?2:1.7)*M*o(_*10)*P,E.star?3:0)}if(nt>.01&&(a(X,st,T*.28,T*.2,...p,.35*nt,0),a(X,st,T*.2,T*.0045,...u,2.2*nt,5),a(X,st,T*.075,T*.004,...u,2*nt,5,Math.PI/2),a(X,st,T*.03,T*.03,...g,2.6*nt,0)),w>.01){let E=.35+.65*w;for(let _ of x){let K=.6+.4*Math.sin(Z*_.f+_.ph),j=T*_.len*E,q=T*_.off,M=Math.cos(_.ang),F=Math.sin(_.ang);a(X+M*(q+j/2),V+F*(q+j/2),j/2,T*_.w,..._.c,_.a*K*w*1.1,5,_.ang)}a(X,V,Y*.36*E,T*.012,...u,1.3*w,5),a(X,V,Y*.46*E,T*.0035,...g,3*w,5),a(X,V,at*.3*E,T*.01,...u,1.1*w,5,Math.PI/2),a(X,V,at*.38*E,T*.003,...g,2.4*w,5,Math.PI/2),a(X,V,T*.42,T*.42,...p,.42*w,0),a(X,V,T*.16,T*.16,...u,1.6*w,0),a(X,V,T*.06,T*.06,...g,5*w,0);for(let[_,K,j]of[[.19,.42,.7],[.215,.26,.4]])for(let q of[0,Math.PI])for(let F=0;F<9;F++){let W=F/8,ct=q+(W-.5)*K*2,lt=T*_*(.8+.2*w);a(X+Math.cos(ct)*lt,V+Math.sin(ct)*lt,lt*K*2/9,T*.0022,...h,j*w*Math.sin(Math.PI*W),5,ct+Math.PI/2)}}}}}var rr=`
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uRes; uniform vec2 uImpact; uniform float uUnit; uniform float uTau; uniform float uTime; uniform float uPower;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
  }
  void main() {
    vec2 p = vec2(vUv.x, 1. - vUv.y) * uRes;
    vec2 q = (p - uImpact) / uUnit; q.y /= .24;                 // \u58D3\u6241\u6210\u4FEF\u8996\u7684\u6A62\u5713
    float rho = length(q);
    float ang = atan(q.y, q.x);
    vec2 dir = vec2(cos(ang), sin(ang));                       // \u7528\u65B9\u5411\u5411\u91CF\u53D6\u96DC\u8A0A\uFF0C\u7E5E\u4E00\u5708\u4E0D\u6703\u6709\u63A5\u7E2B
    float n = noise(dir * 1.7 + vec2(uTime * .22, rho * 4. - uTime * .5));
    float n2 = noise(q * 7. + uTime * .3);
    float front = uTau * .55 + .12;                              // \u6CE2\u524D\u96A8\u6642\u9593\u5F80\u5916\u63A8
    float rings = sin(rho * 40. - uTau * 10. + n * 9. + n2 * 2.5);
    rings = smoothstep(.2, 1., rings) * (.25 + .75 * n2) * (.4 + .6 * n);
    float reach = smoothstep(front, front - .22, rho) * smoothstep(.02, .12, rho);
    float fall = exp(-rho * 2.4);
    vec3 col = vec3(1., .66, .10) * rings * reach * fall * 1.7;
    col += vec3(1., .42, .04) * exp(-rho * 5.5) * .55;          // \u843D\u9EDE\u9644\u8FD1\u7684\u6C34\u9762\u88AB\u7167\u4EAE
    col += vec3(.10, .06, .16) * exp(-rho * 1.4) * .5 * (.5 + .5 * n2); // \u5916\u570D\u4E00\u9EDE\u9EDE\u51B7\u8272\uFF0C\u896F\u51FA\u91D1\u8272
    gl_FragColor = vec4(col * uPower, 1.);
  }`,ir=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uField; uniform vec2 uTexel; uniform float uBaseY; uniform float uSpan; uniform float uPower;
  const float T0 = .2;
  void main() {
    float f = texture2D(uField, vUv).r;
    float m = smoothstep(T0, T0 + .03, f);
    float fx = texture2D(uField, vUv + vec2(uTexel.x, 0.)).r - texture2D(uField, vUv - vec2(uTexel.x, 0.)).r;
    float fy = texture2D(uField, vUv + vec2(0., uTexel.y)).r - texture2D(uField, vUv - vec2(0., uTexel.y)).r;
    vec3 nrm = normalize(vec3(-fx, -fy, .05));
    float thick = clamp((f - T0) / 1.1, 0., 1.);
    vec3 col = mix(vec3(1., .46, .02), vec3(1., .80, .08), smoothstep(0., .3, thick));
    col = mix(col, vec3(1., .93, .5), smoothstep(.55, 1., thick));
    float rim = pow(1. - nrm.z, 2.);
    col += vec3(1., .85, .35) * rim * .35;
    float spec = pow(max(dot(nrm, normalize(vec3(-.35, .55, .76))), 0.), 28.);
    col += vec3(1.) * spec * .9;
    float heat = clamp(1. - (vUv.y - uBaseY) / uSpan, 0., 1.);   // \u8D8A\u9760\u8FD1\u6C34\u9762\u8D8A\u71B1
    col *= .62 + 1.25 * heat * heat * heat;
    vec3 halo = vec3(1., .55, .08) * smoothstep(0., T0, f) * (1. - m) * .32; // \u6DB2\u9AD4\u908A\u7DE3\u5916\u7684\u4E00\u5708\u5149
    gl_FragColor = vec4((col * m + halo) * uPower, 1.);
  }`;function lr(t){let{gl:a}=t,e=t.push,o={water:t.program(rr),liquid:t.program(ir)},s=0,n=0,r=0,i=null,l=wa(20261112),u=13,p=Array.from({length:u},(P,w)=>({th:(w+(l()-.5)*.55)/u*Math.PI*2,h:.72+l()*.55,lean:.18+l()*.34,detach:.4+l()*.2,w:.85+l()*.4})),h=60,g=Array.from({length:54},()=>({th:l()*Math.PI*2,v:.5+l()*.75,out:.05+l()*.36,s:.4+l()*.8,delay:l()*.12})),A=Array.from({length:150},()=>({x:l()-.5,y:l(),s:.35+l()*.9,f:2+l()*7,ph:l()*6.28,star:l()<.16,v:.04+l()*.1})),m=P=>Math.min(1,Math.max(0,P)),$=P=>1-(1-P)**3,v=P=>P*P,x=.24,J=.5,B=2.3,C=.75,Z=5.4,Y=P=>P<.2?$(P/.2):P<.58?1-.1*((P-.2)/.38):.9*(1-v(m((P-.58)/.42))),at=P=>r*(.075+.085*$(m(P*1.15)));function T(P){let w=0;for(let nt of p){let k=Math.abs(P-nt.th)%(Math.PI*2);k>Math.PI&&(k=Math.PI*2-k),w=Math.max(w,Math.exp(-((k/.17)**2))*nt.h)}return w}function X(P,w,nt){let k=nt/B;if(k<=0||k>=1)return;let I=Y(k),E=at(k),_=r*.37,K=1-.35*m((k-.45)/.55),j=(q,M,F,W)=>e(q,M,F,F,W,0,0,1,1);for(let q=0;q<h;q++){let M=q/h*Math.PI*2,F=Math.cos(M),W=Math.sin(M),ct=.86+.14*W,lt=_*I*(.24+.24*T(M)),yt=5;for(let wt=0;wt<yt;wt++){let f=wt/(yt-1),D=P+F*E*(1+J*f),R=w+W*E*x*(1+J*f)-lt*f;j(D,R,r*(.05-.022*f)*ct*K,.27)}}for(let q of p){let M=Math.cos(q.th),F=Math.sin(q.th),W=.86+.14*F,ct=_*I*(.24+.24*q.h),lt=k>q.detach?m((k-q.detach)/.24):0,yt=Y(m(k*1.08))*(1-lt*lt*(3-2*lt)),wt=_*(.66*q.h)*yt,f=1-.38*m((k-q.detach+.1)/.1)*(1-lt),D=15,R={x:0,y:0};for(let L=1;L<=D;L++){let U=L/D,S=1+J+q.lean*yt*(U*.9+U*U*.9),G=P+M*E*S,Q=w+F*E*x*S-ct-wt*(U-.12*U*U),pt=L<D?(1-.5*U*(1-.6*lt))*(.45+.55*f):1.3;L===D&&(R.x=G,R.y=Q),(L<D||k<=q.detach)&&j(G,Q,r*.046*q.w*pt*W*K*(1-.5*lt),.32)}if(k>q.detach){let L=(k-q.detach)*B,U=q.detach,S=at(U),G=1+J+q.lean*Y(m(U*1.08))*1.8,Q=P+M*S*G,pt=w+F*S*x*G-_*Y(U)*(.24+.24*q.h)-_*(.66*q.h)*Y(m(U*1.08))*.88,Et=Q+M*r*.05*L,Kt=pt-r*.1*L+r*.42*L*L;Kt<w+F*E*x&&j(Et,Kt,r*.036*q.w*W,.36)}}for(let q of g){let M=nt-q.delay;if(M<=0)continue;let F=P+Math.cos(q.th)*(E*.9+r*q.out*M),W=w+Math.sin(q.th)*E*x-r*q.v*M+r*.62*M*M;W>w+r*.02||j(F,W,r*.02*q.s,.36)}j(P,w-_*.04*I,r*.085*I,.34)}function V(P,w,nt,k,I){let E=k/B;if(nt<C){let _=v(nt/C),K=-r*.05+(w+r*.05)*_;for(let j=0;j<26;j++){let q=K-j*r*.022*(.4+_);if(q<-40)break;let M=Math.sin(q*.02+j)*r*.006;e(P+M,q,r*(.03-j*9e-4),r*(.03-j*9e-4),1,j?.72:.95,j?.18:.7,(1-j/26)*1.6,0)}}if(k>0){let _=E<1?Y(E):0,K=m(1-(k-B*.85)/1.6),j=Math.exp(-((k/.09)**2));e(P,w,r*.5*j+1,r*.5*j+1,1,.85,.5,j*3.5,0);let q=(.35+.65*_)*K;e(P,w,r*.24,r*.058,1,.9,.55,1.5*q,0),e(P,w,r*.42,r*.1,1,.55,.08,.8*q,0),e(P,w-r*.1,r*.3,r*.3,1,.6,.1,.5*_,0);for(let M=0;M<5;M++){let F=k-M*.22;if(F<=0)continue;let W=r*(.1+F*.2);e(P,w,W,W*x,1,.74,.2,m(1-F/2.6)*.9,2)}for(let M of A){let F=(M.y+k*M.v)%1,W=P+M.x*r*(.22+.5*F),ct=w-r*(.12+F*.78),lt=.5+.5*Math.sin(I*M.f+M.ph),yt=m(k/.5)*K*(1-F)*(.25+.75*lt)*1.5,wt=r*.008*M.s*(M.star?3.2:1);e(W,ct,wt,wt,1,.82,.32,yt,M.star?3:0)}}}let O=0,H=0,st=0,it=0;return{pre(P){(s!==t.W||n!==t.H)&&(s=t.W,n=t.H,r=t.U,t.drop(i),i=t.target(Math.ceil(s/2),Math.ceil(n/2))),O=s/2,H=n*.74,st=P,it=m(st/.25)*m(1-(st-B)/2),!(st>=B)&&(a.bindFramebuffer(a.FRAMEBUFFER,i.fbo),a.viewport(0,0,i.w,i.h),a.disable(a.BLEND),a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),t.additive(!0),X(O,H,st),t.flush())},bg(P){it<=0||(a.useProgram(o.water.p),a.uniform2f(o.water.u.uRes,s,n),a.uniform2f(o.water.u.uImpact,O,H),a.uniform1f(o.water.u.uUnit,r),a.uniform1f(o.water.u.uTau,st),a.uniform1f(o.water.u.uTime,P),a.uniform1f(o.water.u.uPower,it),t.fullscreen(o.water))},emit(P){V(O,H,C+st,st,P)},post(){st>=B||(a.useProgram(o.liquid.p),t.bindTex(0,i.tex,o.liquid.u.uField),a.uniform2f(o.liquid.u.uTexel,1/i.w,1/i.h),a.uniform1f(o.liquid.u.uBaseY,1-H/n),a.uniform1f(o.liquid.u.uSpan,r*.42/n),a.uniform1f(o.liquid.u.uPower,1.15),t.fullscreen(o.liquid))},end:B+2}}var cr=`
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uRes; uniform vec2 uCenter; uniform float uUnit; uniform float uTime; uniform float uPower; uniform float uReach;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0., a = .5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 17.3; a *= .5; }
    return v;
  }
  void main() {
    vec2 p = (vec2(vUv.x, 1. - vUv.y) * uRes - uCenter) / uUnit;
    float up = -p.y;                                   // \u5730\u9762\u4EE5\u4E0A\u624D\u6709
    if (up <= 0.) { gl_FragColor = vec4(0., 0., 0., 1.); return; }
    float rad = length(p);
    float ang = atan(p.x, up);                         // 0\uFF1D\u6B63\u4E0A\u65B9\uFF0C\xB190 \u5EA6\uFF1D\u8CBC\u8457\u5730\u9762
    float side = abs(ang) / 1.5708;
    float warp = fbm(vec2(ang * 1.6, rad * 1.4 - uTime * .3));
    // \u5169\u5C64\u7C97\u7D30\u4E0D\u540C\u7684\u7D72\uFF1A\u5713\u5468\u65B9\u5411\u7684\u8B8A\u5316\u6162\u3001\u534A\u5F91\u65B9\u5411\u7684\u8B8A\u5316\u5FEB\uFF0C\u6240\u4EE5\u662F\u7E5E\u8457\u4E2D\u5FC3\u7684\u9577\u7D72\uFF0C\u4E0D\u662F\u4E00\u5718\u4E00\u5718\u7684\u96F2
    float n1 = fbm(vec2(ang * 1.4 + warp * .9 + uTime * .12 * sign(p.x), rad * 13. - uTime * 1.7 + warp * 3.5));
    float n2 = fbm(vec2(ang * 2.3 - warp + 5., rad * 25. - uTime * 2.4));
    float fil = pow(1. - abs(2. * n1 - 1.), 5.) * 1.25 + pow(1. - abs(2. * n2 - 1.), 7.) * .65;
    float body = smoothstep(.35, .8, fbm(vec2(ang * 1.3 + 9., rad * 2.4 - uTime * .5)));   // \u54EA\u88E1\u6FC3\u3001\u54EA\u88E1\u6DE1
    float lobes = smoothstep(.16, .7, side) * (1. - .55 * smoothstep(.9, 1., side));         // \u5169\u5074\u6700\u6FC3\uFF0C\u6B63\u4E0A\u65B9\u7559\u7A7A
    float radial = smoothstep(.1, .28, rad) * smoothstep(uReach, uReach * .4, rad);
    float v = fil * (.3 + 1.1 * body) * lobes * radial;
    vec3 col = mix(vec3(1., .40, .04), vec3(1., .76, .14), smoothstep(.08, .55, v));
    col = mix(col, vec3(1., .95, .68), smoothstep(.6, 1.15, v));
    gl_FragColor = vec4(col * v * uPower, 1.);
  }`;function dr(t){let{gl:a}=t,e=t.push,o=t.program(cr),s=null,n=0,r=0,i=wa(20261113),l=k=>Math.min(1,Math.max(0,k)),u=k=>1-(1-k)**3,p=k=>k*k,h=Math.PI*2,g=.9,A=5.6,m=[1,.76,.14],$=[1,.5,.06],v=[1,.88,.42],x=[1,.97,.88],J=[.55,.72,1],B=()=>{let k=i();return k<.05?x:k<.3?v:k<.75?m:$},C=Array.from({length:70},()=>({ang:i()*Math.PI,len:.22+i()**1.6*.95,w:.0025+i()*.005,a:.35+i()*.65,c:i()<.2?J:v,f:1+i()*3,ph:i()*h})),Z=Array.from({length:620},()=>{let k=.008+i()**2.2*.07;return{ang:i()*h,dist:.04+i()**1.35*1.05,s:k,delay:i()*.35,c:B(),a:1.7-k*14,drift:(i()-.5)*.05,lift:i()*.05,f:.5+i()*2,ph:i()*h}}),Y=Array.from({length:340},()=>({ang:i()*h,dist:.2+i()*1.25,s:.003+i()*.006,delay:i()*.25,c:i()<.5?v:m,f:3+i()*8,ph:i()*h,star:i()<.1})),at=Array.from({length:11},(k,I)=>({a0:I/11*h+i()*.4,spin:(I%2?-1:1)*(1.5+i()*1.4),reach:.55+i()*.6,w:.6+i()*.9,delay:i()*.3})),T=Z.length,X=Y.length,V=0,O=0,H=0,st=0,it=0,P=0,w=0,nt=0;return{setQ(k){T=Math.ceil(Z.length*k),X=Math.ceil(Y.length*k)},pre(k,I){({W:V,H:O,U:H}=t),st=Math.hypot(V,O),it=V/2,P=O*.74,w=k-g,nt=w>0?l(w/.35)*l(1-(w-1.5)/1.9):0,(n!==V||r!==O)&&(n=V,r=O,t.drop(s),s=t.target(Math.ceil(V/2),Math.ceil(O/2))),!(nt<=0)&&(a.bindFramebuffer(a.FRAMEBUFFER,s.fbo),a.viewport(0,0,s.w,s.h),a.disable(a.BLEND),a.useProgram(o.p),a.uniform2f(o.u.uRes,V,O),a.uniform2f(o.u.uCenter,it,P),a.uniform1f(o.u.uUnit,H),a.uniform1f(o.u.uTime,I),a.uniform1f(o.u.uPower,1.25*nt),a.uniform1f(o.u.uReach,.5+1.5*u(l(w/1.6))),t.fullscreen(o))},bg(){nt<=0||(a.useProgram(t.P.blur.p),t.bindTex(0,s.tex,t.P.blur.u.uTex),a.uniform2f(t.P.blur.u.uDir,0,0),t.fullscreen(t.P.blur))},emit(k,I){let E=p(l(k/g)),_=Math.exp(-((w/.16)**2)),K=w>0?l(1-w/2.6):1,j=((.15+.85*E)*(.25+.75*K)+_*1.1)*l(1-(w-2.2)/1.2);if(w>0){let M=l(w/.3)*l(1-(w-1.2)/2.6);e(it,P,st*.75,st*.6,...$,.6*M,0),e(it,P,st*.4,st*.3,...m,.7*M,0),e(it,P-O*.45,st*.6,st*.45,.2,.22,.7,.16*M,0)}let q=H*(.35+.65*E+_*.5);for(let M of C){let F=.55+.45*Math.sin(I*M.f+M.ph);e(it,P,q*M.len,H*M.w*(1+_),...M.c,M.a*F*j*.9,5,M.ang+I*.05)}if(e(it,P,V*.78*(.4+.6*E),H*.03,...m,.9*j,5),e(it,P,V*.95*(.4+.6*E),H*.006,...x,2.4*j,5),e(it,P,O*.6*(.4+.6*E),H*.02,...m,.7*j,5,Math.PI/2),e(it,P,O*.75*(.4+.6*E),H*.005,...x,1.8*j,5,Math.PI/2),e(it,P,H*.6,H*.6,...$,.55*j,0),e(it,P,H*.26,H*.26,...m,1.8*j,0),e(it,P,H*.1,H*.1,...x,5*j,0),e(it,P,st*.62,st*.62,...m,_*1.5,0),w>0){for(let M of at){let F=w-M.delay;if(F<=0)continue;let W=u(l(F/1.3)),ct=l(F/.2)*l(1-(F-.9)/1.4);if(ct<=0)continue;let lt=30,yt=0,wt=0;for(let f=0;f<=lt;f++){let D=f/lt,R=H*M.reach*(.1+D*.95)*W,L=M.a0+M.spin*(D*.85+F*.6),U=it+Math.cos(L)*R,S=P+Math.sin(L)*R*.78;if(f){let G=U-yt,Q=S-wt,pt=Math.hypot(G,Q);e((U+yt)/2,(S+wt)/2,pt*1.6,H*.013*M.w*Math.sin(Math.PI*D)**1.5+.5,...m,ct*Math.sin(Math.PI*D)*1.3,5,Math.atan2(Q,G))}yt=U,wt=S}}for(let M=0;M<T;M++){let F=Z[M],W=w-F.delay;if(W<=0)continue;let ct=u(l(W/1.5)),lt=l(W/.12)*l(1-(W-1.7)/2.2);if(lt<=0)continue;let yt=st*.5*F.dist*ct,wt=it+Math.cos(F.ang)*yt+H*F.drift*W,f=P+Math.sin(F.ang)*yt*.82-H*F.lift*W,D=H*F.s*(.7+.5*ct),R=.8+.2*Math.sin(I*F.f+F.ph);e(wt,f,D,D,...F.c,Math.max(.45,F.a)*lt*R,4)}for(let M=0;M<X;M++){let F=Y[M],W=w-F.delay;if(W<=0)continue;let ct=u(l(W/1.1)),lt=l(W/.1)*l(1-(W-1.2)/2);if(lt<=0)continue;let yt=st*.5*F.dist*ct,wt=.4+.6*Math.sin(I*F.f+F.ph)**2,f=H*F.s*(F.star?4:1);e(it+Math.cos(F.ang)*yt,P+Math.sin(F.ang)*yt*.82,f,f,...F.c,1.6*lt*wt,F.star?3:0)}}},post(){if(w>0){let k=Math.round(O-P),I=(E,_)=>{for(let[K,j,q]of[[0,1,.015],[.2,.4,.007]]){let M=l((w-K)/1.5);if(M<=0||M>=1)continue;let F=H*.06+st*.62*u(M),W=_*j*(1-M)**.9*l(M/.05),ct=(lt,yt)=>{let wt=F+lt;e(it,P,wt,wt*E,1,1,1,yt,6,lt/wt)};ct(H*q,1.25*W),ct(H*q*4.5,.16*W)}t.flush()};a.enable(a.SCISSOR_TEST),a.scissor(0,k,V,O-k),I(1,1),a.scissor(0,0,V,k),I(.22,.32),a.disable(a.SCISSOR_TEST)}},end:g+4.4}}var ur=`
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uRes; uniform float uUnit; uniform float uTime; uniform float uRoll; uniform vec2 uPan;
  uniform float uRh; uniform float uH0; uniform float uPower;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0., a = .5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 17.3; a *= .5; }
    return v;
  }
  void main() {
    vec2 s = (vUv * uRes - .5 * uRes) / uUnit;              // \u87A2\u5E55\u5EA7\u6A19\uFF1A\u539F\u9EDE\u5728\u4E2D\u5FC3\u3001y \u5F80\u4E0A
    float c = cos(uRoll), sn = sin(uRoll);
    vec2 q = vec2(c * s.x + sn * s.y, -sn * s.x + c * s.y) + uPan; // \u63DB\u5230\u5730\u5E73\u7DDA\u5EA7\u6A19
    vec2 C = vec2(0., uH0 - uRh);                           // \u5730\u5E73\u7DDA\u662F\u4E00\u500B\u5927\u5713\u7684\u4E0A\u7DE3
    vec2 r = q - C;
    float d = length(r) - uRh;                              // \u5927\u65BC 0 \u662F\u5929\u7A7A\uFF0C\u5C0F\u65BC 0 \u662F\u6D77
    float ang = atan(r.x, r.y);                             // \u6CBF\u8457\u5730\u5E73\u7DDA\u7684\u4F4D\u7F6E
    vec3 col;
    if (d > 0.) {
      col = mix(vec3(.055, .03, .11), vec3(.012, .014, .05), smoothstep(0., .9, d));
      col += vec3(1., .48, .10) * exp(-d * 6.5) * .32;      // \u5730\u5E73\u7DDA\u4E0A\u65B9\u7684\u6696\u8272\u9727\u5149
    } else {
      float dz = -d;                                        // \u96E2\u5730\u5E73\u7DDA\u591A\u9060\uFF08\u8D8A\u5927\u8D8A\u9760\u8FD1\u93E1\u982D\uFF09
      float v = 1. / (dz + .06);                            // \u900F\u8996\uFF1A\u8D8A\u9760\u8FD1\u5730\u5E73\u7DDA\uFF0C\u540C\u6A23\u7684\u8DDD\u96E2\u5728\u756B\u9762\u4E0A\u8D8A\u6241
      float u = ang * uRh * v * .9;
      // \u5148\u7528\u4E00\u5C64\u96DC\u8A0A\u628A\u5EA7\u6A19\u63A8\u6B6A\uFF0C\u6CE2\u7D0B\u624D\u6703\u5F4E\u5F4E\u66F2\u66F2\u7684\uFF0C\u4E0D\u662F\u4E00\u689D\u689D\u76F4\u7DDA
      vec2 w = vec2(u, v) + (vec2(noise(vec2(u * .9, v * 1.3 + uTime * .25)), noise(vec2(u * 1.1 + 7., v * 1.1 - uTime * .2))) - .5) * 1.6;
      float n = fbm(vec2(w.x * 1.3 + uTime * .1, w.y * 2.1 - uTime * .4));
      float n2 = noise(vec2(w.x * 3.1 - uTime * .18, w.y * 5. + uTime * .28));
      float lines = pow(1. - abs(2. * n - 1.), 9.) * 1.2 + pow(1. - abs(2. * n2 - 1.), 11.) * .55; // \u7D30\u7D30\u7684\u6CE2\u5149
      float lit = exp(-dz * 4.2) * 1.1 + .16;               // \u8D8A\u9760\u8FD1\u5730\u5E73\u7DDA\u8D8A\u4EAE
      vec3 base = mix(vec3(.085, .04, .07), vec3(.035, .018, .055), smoothstep(0., .8, dz));
      col = base + vec3(1., .62, .12) * lines * lit * smoothstep(0., .06, dz);
      col += vec3(1., .44, .08) * exp(-dz * 9.) * .5;       // \u5730\u5E73\u7DDA\u7684\u5149\u6620\u5728\u6C34\u9762\u4E0A
    }
    // \u5730\u5E73\u7DDA\u672C\u8EAB\uFF1A\u4E00\u689D\u767D\u71B1\u7684\u7D30\u82AF\uFF0C\u5916\u9762\u5305\u8457\u6A58\u91D1\u8272\u7684\u5149\uFF1B\u6CBF\u7DDA\u6709\u7684\u5730\u65B9\u7279\u5225\u4EAE
    float a = abs(d);
    float hot = .5 + .5 * smoothstep(-.6, .5, sin(ang * 2.3 + 1.1 + uTime * .05));
    col += vec3(1., .93, .7) * exp(-a * a * 9000.) * 6.5 * hot;
    col += vec3(1., .6, .11) * exp(-a * 46.) * 1.5 * hot;
    gl_FragColor = vec4(col * uPower, 1.);
  }`;function pr(t){let{gl:a}=t,e=t.push,o=t.program(ur),s=wa(20261115),n=T=>Math.min(1,Math.max(0,T)),r=Math.PI*2,i=1.75,l=[1,.76,.14],u=[1,.5,.06],p=[1,.88,.42],h=[1,.97,.88],g=()=>{let T=s();return T<.04?h:T<.3?p:T<.76?l:u},A=()=>{let T=s();return T<.3?p:T<.72?l:u},m=()=>s()<.45?-.45+(s()-.5)*.5:(s()-.5)*1.9,$=Array.from({length:420},()=>{let T=s()**1.8*.62;return{a:m(),dz:T,s:.005+T**1.15*.11+s()*.006,c:g(),k:n(1.25-T*1.7),f:.4+s()*2.2,ph:s()*r,drift:(s()-.5)*.012}}),v=Array.from({length:300},()=>({a:m(),h:s(),top:.1+s()**1.7*.7,v:.015+s()*.05,s:.004+s()**3.2*.045,c:A(),f:.5+s()*2.5,ph:s()*r,sway:(s()-.5)*.05})),x=Array.from({length:12},()=>({a:(s()-.5)*2,dz:-.3+s()*1.1,s:.07+s()*.1,c:u,k:.22+s()*.2,f:.2+s()*.5,ph:s()*r})),J=Array.from({length:320},()=>({a:m(),h:(s()-.42)*.3,s:.0018+s()*.004,f:2+s()*8,ph:s()*r,star:s()<.08})),B=[{a:-.3,len:.5,w:1.5,ph:.3},{a:-.06,len:.62,w:1.9,ph:2.1},{a:.26,len:.42,w:1.2,ph:4.2}],C=$.length,Z=v.length,Y=J.length,at=null;return{setQ(T){C=Math.ceil($.length*T),Z=Math.ceil(v.length*T),Y=Math.ceil(J.length*T)},bg(T,X){let{W:V,H:O,U:H}=t,st=.1*Math.sin(X*.11+.9),it=.1*Math.sin(X*.07+2),P=-.2*(O/H)+.02*Math.sin(X*.09),w=Math.cos(st),nt=Math.sin(st),k=P-i;at={roll:st,cr:w,sr:nt,at:(E,_)=>{let K=Math.sin(E)*(i+_)-it,j=k+Math.cos(E)*(i+_);return[V/2+(w*K-nt*j)*H,O/2-(nt*K+w*j)*H]},power:T},a.useProgram(o.p),a.uniform2f(o.u.uRes,V,O),a.uniform1f(o.u.uUnit,H),a.uniform1f(o.u.uTime,X),a.uniform1f(o.u.uRoll,st),a.uniform2f(o.u.uPan,it,0),a.uniform1f(o.u.uRh,i),a.uniform1f(o.u.uH0,P),a.uniform1f(o.u.uPower,T),t.fullscreen(o)},emit(T){let{W:X,H:V,U:O}=t,{roll:H,cr:st,sr:it,at:P,power:w}=at,nt=(k,I,E)=>k>-E&&k<X+E&&I>-E&&I<V+E;for(let k of B){let I=(.55+.45*Math.sin(T*.35+k.ph))*w,[E,_]=P(k.a,0),K=E-it*k.len*O,j=_-st*k.len*O,q=Math.atan2(j-_,K-E),M=Math.hypot(K-E,j-_),F=lt=>[E+(K-E)*lt,_+(j-_)*lt],[W,ct]=F(.5);e(W,ct,M*.62,O*.02*k.w,...l,.7*I,5,q),e(W,ct,M*.55,O*.0055*k.w,...h,2.6*I,5,q),[W,ct]=F(.12),e(W,ct,M*.3,O*.011*k.w,...p,2.2*I,5,q),e(E,_,O*.1*k.w,O*.1*k.w,...l,1.3*I,0),[W,ct]=F(-.2),e(W,ct,M*.3,O*.012*k.w,...l,.9*I,5,q)}for(let k=0;k<C;k++){let I=$[k],[E,_]=P(I.a+I.drift*Math.sin(T*.3+I.ph),-I.dz),K=O*I.s;if(!nt(E,_,K))continue;let j=.6+.4*Math.sin(T*I.f+I.ph);e(E,_,K,K*(.55+.45*n(I.dz*3)),...I.c,(.35+.95*I.k)*j*w,4,H)}for(let k=0;k<Z;k++){let I=v[k],E=(I.h+T*I.v)%1,[_,K]=P(I.a+I.sway*E,E*I.top),j=O*I.s*(.8+.6*E);if(!nt(_,K,j))continue;let q=.65+.35*Math.sin(T*I.f+I.ph);e(_,K,j,j,...I.c,1.5*n(E*8)*(1-E)**1.3*q*w,4)}for(let k of x){let[I,E]=P(k.a,-k.dz),_=O*k.s;nt(I,E,_)&&e(I,E,_,_,...k.c,k.k*(.7+.3*Math.sin(T*k.f+k.ph))*w,4)}for(let k=0;k<Y;k++){let I=J[k],[E,_]=P(I.a,I.h);if(!nt(E,_,8))continue;let K=Math.sin(T*I.f+I.ph)**2,j=O*I.s*(I.star?4:1);e(E,_,j,j,...p,1.8*K*w,I.star?3:0)}}}}function Pn(t,a,e,o){let s,n,r,i,l;try{if(s=nr(t),s.error)return null;n=or(s),r=lr(s),i=dr(s),l=pr(s)}catch{return null}let u=w=>Math.min(1,Math.max(0,w)),p=!1,h=!1,g=!1,A=!1,m=performance.now(),$=0,v=-1,x=0,J=0,B=16.7,C=0,Z=0,Y=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4||navigator.deviceMemory&&navigator.deviceMemory<=4?1:0,at=()=>{s.maxDpr=ya[Y].dpr,i.setQ(ya[Y].q),l.setQ(ya[Y].q)};at();function T(w){if(g)return;let nt=e(),k=nt?99:(w-m)/1e3,I=nt?12:w/1e3,E=u((k-Re.start)/Re.span);if((Math.abs(E-v)>.001||E===1&&v!==1)&&(v=E,a(E)),s.resize(),!s.W)return;let _=k-Re.crown,K=k-Re.burst,j=k-Re.sea,q=k<4.6,M=_>0&&_<r.end,F=K>0&&K<i.end,W=j>0;M&&r.pre(_),F&&i.pre(K,I),s.begin(),s.additive(!0),W&&l.bg(u(j/1.4),I),M&&r.bg(I),F&&i.bg(),q&&n.emit(k,I),M&&r.emit(I),F&&i.emit(K,I),W&&l.emit(I),s.flush(),M&&r.post(),F&&i.post(),s.finish({bloom:.55,exposure:1.02})}let X=w=>{if(x){let nt=w-x;nt<250&&(B=B*.9+nt*.1,C+=1)}x=w,C>45&&B>28?Y<ya.length-1?(Y+=1,at(),C=0,B=16.7):B>55&&(Z+=1)>120&&o&&(O(),o()):Z=0},V=w=>{p&&(requestAnimationFrame(V),X(w),!((w-m)/1e3>Re.settle&&w-J<30)&&(J=w,T(w)))};function O(){p=!1}let H=()=>{if(g)return;let w=!e()&&h&&!document.hidden;if(w&&!p){let nt=performance.now();A?$&&(m+=nt-$):(m=nt,A=!0),$=0,p=!0,x=0,requestAnimationFrame(V)}else!w&&p?(p=!1,$=performance.now(),T($)):w||T(performance.now())},st=w=>{w.preventDefault(),O(),g=!0,o&&o()},it=new ResizeObserver(()=>{p||T(performance.now())});it.observe(t);let P=new IntersectionObserver(w=>{h=w[0].isIntersecting,H()});return P.observe(t),document.addEventListener("visibilitychange",H),t.addEventListener("webglcontextlost",st),{toggle:H,finish(){A=!0,$=0,m=performance.now()-6e4,p||T(performance.now())},restart(){A=!0,$=0,m=performance.now(),v=-1},tap(){},destroy(){O(),g=!0,it.disconnect(),P.disconnect(),document.removeEventListener("visibilitychange",H),t.removeEventListener("webglcontextlost",st),s.gl.getExtension("WEBGL_lose_context")?.loseContext()}}}var _n="shopping-relics:intro-played";try{localStorage.removeItem("shopping-relics:intro-seen"),sessionStorage.removeItem("shopping-relics:intro-seen-session")}catch{}var Nn="shopping-relics:intro-mode",Xe=()=>{try{return localStorage.getItem(Nn)==="2d"?"2d":"gl"}catch{return"gl"}},Xa=t=>{try{localStorage.setItem(Nn,t==="2d"?"2d":"gl")}catch{}},Ke={comet:1.9,start:1.95,span:5.2},mr=.94,fr=.75,we=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,gr=()=>{try{return localStorage.getItem(_n)==="1"}catch{return!1}},hr=()=>{try{localStorage.setItem(_n,"1")}catch{}},Cn=t=>t.items.length?"\u518D\u52A0\u4E00\u4EF6\u5546\u54C1":"\u65B0\u589E\u7B2C\u4E00\u4EF6\u5546\u54C1";function Fn({state:t,sum:a}){if(!t.items.length)return["<li>\u6E05\u55AE\u9084\u662F\u7A7A\u7684\uFF0C\u5F9E\u7B2C\u4E00\u4EF6\u5546\u54C1\u958B\u59CB</li>"];let e=$a(t,()=>!0).filter(o=>!o.special).length;return[`<li>\u5F85\u8CB7 <b>${a.pendingCount}</b> \u4EF6</li>`,`<li><b>${e}</b> \u5BB6\u5E97</li>`,`<li>\u9810\u4F30\u9000\u7A05 <b>${b(a.refund)}</b></li>`]}var Ft="255,247,226",Rt="255,208,100",de="255,166,58",ue="255,232,160",St=t=>Math.min(1,Math.max(0,t)),Ie=t=>1-(1-t)**3,Rn=t=>t<.5?4*t*t*t:1-(-2*t+2)**3/2,Ve=(t,a)=>{let e=document.createElement("canvas");return e.width=Math.max(1,Math.round(t)),e.height=Math.max(1,Math.round(a)),e},pe=(t,a,e)=>{let o=Math.sin(t*127.1+a*311.7+e*74.7)*43758.5453;return o-Math.floor(o)},br=9,se={};function $t(t,a){let e=t+a;if(se[e])return se[e];let o=128,s=o/2,n=Ve(o,o),r=n.getContext("2d"),i=r.createRadialGradient(s,s,0,s,s,s);return a==="glow"?(i.addColorStop(0,`rgba(${t},1)`),i.addColorStop(.12,`rgba(${t},.85)`),i.addColorStop(.35,`rgba(${t},.25)`),i.addColorStop(1,`rgba(${t},0)`)):(i.addColorStop(0,`rgba(${t},.42)`),i.addColorStop(.72,`rgba(${t},.5)`),i.addColorStop(.88,`rgba(${t},.62)`),i.addColorStop(.96,`rgba(${t},.2)`),i.addColorStop(1,`rgba(${t},0)`)),r.fillStyle=i,r.fillRect(0,0,o,o),se[e]=n,n}function vr(t){let a=`beam${t}`;if(se[a])return se[a];let e=Ve(512,32),o=e.getContext("2d"),s=o.createLinearGradient(0,0,512,0);s.addColorStop(0,`rgba(${t},0)`),s.addColorStop(.5,`rgba(${t},1)`),s.addColorStop(1,`rgba(${t},0)`),o.fillStyle=s,o.fillRect(0,0,512,32),o.globalCompositeOperation="destination-in";let n=o.createLinearGradient(0,0,0,32);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=n,o.fillRect(0,0,512,32),se[a]=e,e}function $r(t,a){let e=`pillar${t}${a}`;if(se[e])return se[e];let o=Ve(16,256),s=o.getContext("2d"),n=s.createLinearGradient(0,256,0,0);return n.addColorStop(0,`rgba(${t},${a})`),n.addColorStop(1,`rgba(${t},0)`),s.fillStyle=n,s.fillRect(0,0,16,256),se[e]=o,o}function In(t){let a=t>>>0;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}var Ye=[{dpr:1.5,q:1},{dpr:1,q:.6},{dpr:.75,q:.38}];function yr(t,a){let e=t.getContext("2d"),o=typeof e.createConicGradient=="function",s=0,n=0,r=0,i={},l=null,u=null,p=!1,h=!1,g=performance.now(),A=!1,m=0,$=0,v=0,x=0,J=0,B=[],C=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4||navigator.deviceMemory&&navigator.deviceMemory<=4?1:0,Z=Ye[C].q,Y=0,at=16.7,T=0,X=-1,V=f=>Math.ceil(f.length*Z),O=()=>({cx:s/2,hy:n*.62,RB:Math.max(s,n)*1.7}),H=f=>{let{cx:D,hy:R,RB:L}=O();return R+L-Math.sqrt(Math.max(0,L*L-(f-D)**2))},st=()=>{let f=In(20261105),D=s*n,R=Math.min(s,n)/800;i={u:R,stars:Array.from({length:Math.round(D/2600)},()=>({x:f()*s,y:f()*n,s:.5+f()*1.2,a:.2+f()*.6,f:.5+f()*2,ph:f()*6.3})),trail:Array.from({length:90},()=>({at:f(),dx:(f()-.5)*40*R,dy:(f()-.3)*30*R,s:3+f()*9,f:1+f()*3,ph:f()*6.3})),crown:Array.from({length:150},()=>({ang:f()*Math.PI*2,v:(.18+f()*.3)*n,out:(.02+f()*.12)*s,s:6+f()*16,streak:f()<.45})),rise:Array.from({length:50},()=>({x:(f()-.5)*.16*s,v:.15+f()*.5,s:3+f()*7})),burst:Array.from({length:70},()=>({ang:f()*Math.PI*2,d:.15+f()*1.1,s:(18+f()*80)*Math.max(.7,R),c:f()<.2?Ft:f()<.6?Rt:de})),ripples:Array.from({length:190},()=>({x:f()*s,y:f(),w:8+f()*34,ph:f()*6.3,f:.6+f()*1.4,a:.14+f()*.42})),motes:Array.from({length:Math.round(60+D/16e3)},()=>({x:f()*s,v:8+f()*30,off:f(),s:2+f()*14*Math.max(.7,R),sw:6+f()*18,ph:f()*6.3,c:f()<.25?Ft:f()<.7?Rt:de})),tide:Array.from({length:90},()=>{let L=f()<.3;return{x:f()*s,dy:f()**1.6*.17*n,onWater:L,vx:(f()-.5)*14,s:(3+f()**2*26)*Math.max(.7,R),f:.6+f()*1.8,ph:f()*6.3,c:f()<.3?Ft:f()<.75?Rt:de}}),fore:Array.from({length:9},(L,U)=>({x:(U%2?.82+f()*.2:-.04+f()*.2)*s,y:f()*n,s:(90+f()*150)*Math.max(.6,R),a:.1+f()*.16,ph:f()*6.3}))},l=null,u=null};function it(){let f=In(7),D=Math.min(s,n)*.55*2.2,R=Math.min(640,Math.round(D*2)),L=Ve(R,R),U=L.getContext("2d"),S=R/2;U.lineCap="round";for(let G=0;G<46;G++){let Q=f()*Math.PI*2,pt=(.25+f()*.75)*S,Et=U.createLinearGradient(S,S,S+Math.cos(Q)*pt,S+Math.sin(Q)*pt);Et.addColorStop(0,`rgba(${ue},${.35+f()*.4})`),Et.addColorStop(1,`rgba(${ue},0)`),U.strokeStyle=Et,U.lineWidth=1.4+f()*1.8,U.beginPath(),U.moveTo(S,S),U.lineTo(S+Math.cos(Q)*pt,S+Math.sin(Q)*pt),U.stroke()}l={c:L,size:D*2}}function P(){let f=Ye[C].dpr,{cx:D,hy:R,RB:L}=O(),U=Ve(s*f,n*f),S=U.getContext("2d");S.setTransform(f,0,0,f,0,0);let G=S.createLinearGradient(0,0,0,R);G.addColorStop(0,"#05071c"),G.addColorStop(.5,"#15164a"),G.addColorStop(.82,"#43306f"),G.addColorStop(1,"#b8703a"),S.fillStyle=G,S.fillRect(0,0,s,n),S.globalCompositeOperation="lighter";let Q=S.createRadialGradient(s*.98,R*.82,0,s*.98,R*.82,Math.max(s,n)*.42);Q.addColorStop(0,"rgba(62,200,210,.28)"),Q.addColorStop(1,"rgba(62,200,210,0)"),S.fillStyle=Q,S.fillRect(0,0,s,n),S.globalAlpha=.55,S.drawImage($t(de,"glow"),D-s*.6,R-s*.6,s*1.2,s*1.2),S.globalAlpha=1,S.globalCompositeOperation="source-over",S.save(),S.beginPath(),S.arc(D,R+L,L,0,Math.PI*2),S.clip();let pt=S.createLinearGradient(0,R,0,n);pt.addColorStop(0,"#8a5c34"),pt.addColorStop(.2,"#4a2f3a"),pt.addColorStop(1,"#130c1c"),S.fillStyle=pt,S.fillRect(0,R-40,s,n),S.globalCompositeOperation="lighter",S.save(),S.translate(D,R),S.scale(1,.55),S.globalAlpha=.6,S.drawImage($t(Rt,"glow"),-s*.5,60-s*.5,s,s),S.restore(),S.globalAlpha=.4,S.drawImage($t(de,"glow"),D-s*.6,R-s*.6,s*1.2,s*1.2),S.restore(),S.globalCompositeOperation="lighter",S.globalAlpha=1;for(let[Et,Kt,ot]of[[44,de,.12],[14,Rt,.38],[3.2,Ft,.95]])S.strokeStyle=`rgba(${Kt},${ot})`,S.lineWidth=Et,S.beginPath(),S.arc(D,R+L,L,Math.PI*1.25,Math.PI*1.75),S.stroke();u=U}let w=(f,D,R,L,U)=>{U<=.003||(e.globalAlpha=Math.min(1,U),e.drawImage(f,D-L/2,R-L/2,L,L))},nt=(f,D,R,L,U,S,G)=>{U<=.003||(e.save(),e.translate(f,D),S&&e.rotate(Math.PI/2),e.globalAlpha=Math.min(1,U),e.drawImage(vr(G),-R/2,-L/2,R,L),e.restore())};function k(f,D,R,L,U){if(L<=0)return;w($t(de,"glow"),f,D,420*R*i.u,.35*L),w($t(Rt,"glow"),f,D,170*R*i.u,.85*L),w($t(Ft,"glow"),f,D,70*R*i.u,L),l||it();let S=l.size*(R/2.2);e.save(),e.translate(f,D),e.rotate(U*.025),e.globalAlpha=L*(.8+.2*Math.sin(U*1.3)),e.drawImage(l.c,-S/2,-S/2,S,S),e.restore();let G=s*.72*R,Q=n*.52*R;nt(f,D,G,34*R,.5*L,!1,Rt),nt(f,D,G,5,.95*L,!1,Ft),nt(f,D,Q,26*R,.45*L,!0,Rt),nt(f,D,Q,4.4,.9*L,!0,Ft)}let I=(f,D,R)=>{let L=Rn(f);return[D+Math.sin(f*Math.PI*5)*s*.035*(1-L),-n*.08+(R+n*.08)*L]};function E(f){for(let D=B.length-1;D>=0;D--){let R=B[D],L=f-R.t;if(L>2.2||L<0){B.splice(D,1);continue}if(R.water){let U=St((R.y-n*.62)/(n*.38)),S=.5+U*1.2;e.lineWidth=1.6,e.globalAlpha=1;for(let Q=0;Q<3;Q++){let pt=St(L/1.7-Q*.15);if(pt<=0)continue;e.strokeStyle=`rgba(${ue},${(.65*(1-pt)).toFixed(3)})`;let Et=(10+pt*s*.13)*S;e.beginPath(),e.ellipse(R.x,R.y,Et,Et*.2*(.6+U),0,0,Math.PI*2),e.stroke()}w($t(Ft,"glow"),R.x,R.y,70*S,St(1-L/.6));let G=St(L/.9);if(G<1)for(let Q=0;Q<16;Q++){let pt=pe(Q,R.id,1)*Math.PI*2,Et=(.04+pe(R.id,Q,2)*.07)*n*S,Kt=R.x+Math.cos(pt)*(8+26*G)*S,ot=R.y+Math.sin(pt)*4*S-Et*4*G*(1-G);w($t(Q%3?Rt:Ft,"glow"),Kt,ot,(6+Q%3*3)*S,(1-G)**.7)}}else{let U=Ie(St(L/1.3)),S=1-St(L/1.3);w($t(Rt,"glow"),R.x,R.y,90*i.u+30,S*.6);for(let G=0;G<18;G++){let Q=pe(G,R.id,3)*Math.PI*2,pt=(30+pe(R.id,G,4)*70)*i.u*U;w($t(G%4?ue:Ft,"glow"),R.x+Math.cos(Q)*pt,R.y+Math.sin(Q)*pt+L*14,7+G%3*3,S*(.5+.5*Math.sin(f*9+G)))}}}}function _(f,D){let{cx:R,hy:L}=O();e.globalCompositeOperation="source-over",e.globalAlpha=1,u||P(),e.drawImage(u,0,0,s,n),e.globalCompositeOperation="lighter",e.lineCap="round";let U=new Map,S=V(i.ripples);for(let ot=0;ot<S;ot++){let z=i.ripples[ot],Mt=L+6+z.y*z.y*(n-L);if(Mt<H(z.x)+3)continue;let xt=(Mt-L)/(n-L),ht=z.x+Math.sin(f*.3+z.ph)*12,Ct=1-Math.min(1,Math.abs(ht-R)/(s*.6)),It=z.a*(.45+.55*Math.sin(f*z.f+z.ph)**2)*(.5+Ct),mt=`${Math.min(5,Math.round(It*6))}|${Math.round(xt*3)}`;U.has(mt)||U.set(mt,[]),U.get(mt).push([ht,Mt,z.w*(.4+xt*2.2),(2+xt*5)*Math.sin(f*z.f+z.ph)])}e.globalAlpha=1;for(let[ot,z]of U){let[Mt,xt]=ot.split("|").map(Number);if(Mt){e.strokeStyle=`rgba(${ue},${(Mt/6).toFixed(3)})`,e.lineWidth=.8+xt/3*2.4,e.beginPath();for(let[ht,Ct,It,mt]of z)e.moveTo(ht-It,Ct),e.quadraticCurveTo(ht,Ct-mt,ht+It,Ct);e.stroke()}}let G=Ie(D),Q=Math.ceil(br*Z);for(let ot=0;ot<Q;ot++){let z=2.6+ot*1.37%1.9,Mt=(f+ot*.61*z)/z,xt=Math.floor(Mt),ht=Mt-xt;if(ht>.72)continue;let Ct=Ie(St(ht/.12)),It=St(ht/.05)*St((.72-ht)/.16),mt=.55+.45*(.5+.5*Math.sin(f*(11+ot*1.7)))*(.6+.4*Math.sin(f*(3.3+ot*.9)+xt));pe(ot,Math.floor(f*12),xt)<.12&&(mt*=.35);let At=It*mt*G;if(At<.02)continue;let gt=R+(pe(ot,xt,1)-.5)*.84*s,me=(.35+pe(ot,xt,2)*.65)*Ct*G,Yt=.6+pe(ot,xt,3)*.8,zt=L-(L-n*.02)*me;if(!(zt>=L-2)){for(let[Lt,Pt,xe]of[[(26*i.u+10)*Yt,Rt,.16],[3.2*Yt,Ft,.9]]){let Ne=$r(Pt,xe);e.globalAlpha=At,e.drawImage(Ne,gt-Lt/2,zt,Lt,L-zt),e.save(),e.translate(0,L),e.scale(1,-1),e.globalAlpha=.6*At,e.drawImage(Ne,gt-Lt/2,-(L-zt)*.45,Lt,(L-zt)*.45),e.restore()}w($t(Ft,"glow"),gt,H(gt),(60*i.u+20)*Yt,.9*At)}}let pt=V(i.tide);for(let ot=0;ot<pt;ot++){let z=i.tide[ot],Mt=((z.x+z.vx*f+$*30*(z.s/20))%s+s)%s,xt=H(Mt),ht=.5+.5*Math.sin(f*z.f+z.ph),Ct=z.onWater?xt+6+z.dy*.7:xt-3-z.dy+Math.sin(f*.6+z.ph)*4,It=z.onWater?.55:1-z.dy/(.2*n);w($t(z.c,z.s>10?"bokeh":"glow"),Mt,Ct,z.s*(z.s>10?1.4:2),(.25+.6*ht)*It*G)}E(f);let Et=V(i.motes);for(let ot=0;ot<Et;ot++){let z=i.motes[ot],Mt=L*.95,xt=L+20-(f*z.v+z.off*Mt)%Mt,ht=St((L-xt)/40)*St(xt/(n*.25)),Ct=z.x+Math.sin(f*.5+z.ph)*z.sw+$*z.s*.6;w($t(z.c,z.s>9?"bokeh":"glow"),Ct,xt,z.s*(z.s>9?1.6:2.2),(.3+.45*D)*ht)}let Kt=V(i.fore);for(let ot=0;ot<Kt;ot++){let z=i.fore[ot];w($t(Rt,"bokeh"),z.x+Math.sin(f*.2+z.ph)*20+$*40,z.y+Math.cos(f*.15+z.ph)*16+v*30,z.s,z.a)}}function K(f){let D=we(),R=(performance.now()-g)/1e3,L=D?1:St(R/Ke.comet),U=D?1:St((R-Ke.start)/Ke.span);(Math.abs(U-X)>.001||U===1&&X!==1)&&(X=U,a(U));let S=s/2,G=n*fr,Q=St(U/.28),pt=St((U-.3)/.18),Et=St((U-.47)/.28),Kt=St((U-.62)/.26),ot=Rn(Et)*Math.hypot(s/2,Math.max(G,n-G))*1.06;if($+=(x-$)*.05,v+=(J-v)*.05,e.globalCompositeOperation="source-over",e.globalAlpha=1,Et<1){e.fillStyle="#05060f",e.fillRect(0,0,s,n);let Mt=V(i.stars);for(let mt=0;mt<4;mt++){e.fillStyle=`rgba(255,236,190,${(.15+mt*.2).toFixed(2)})`;for(let At=0;At<Mt;At++){let gt=i.stars[At];Math.min(3,Math.floor(gt.a*(.5+.5*Math.sin(f*gt.f+gt.ph))*5))===mt&&e.fillRect(gt.x+$*4,gt.y+v*3,gt.s,gt.s)}}e.globalCompositeOperation="lighter";let xt=1-St(U/.1);if(xt>0){let mt=V(i.trail);for(let At=0;At<mt;At++){let gt=i.trail[At];if(gt.at>L)continue;let[me,Yt]=I(gt.at,S,G),zt=L-gt.at,Lt=.5+.5*Math.sin(f*gt.f+gt.ph);w($t(ue,"glow"),me+gt.dx*zt*3,Yt+gt.dy*zt*2,gt.s*i.u*1.4,(.25+.6*Lt)*xt*(1-zt*.5))}if(L<1)for(let At=0;At<22;At++){let gt=L-At*.012;if(gt<0)break;let[me,Yt]=I(gt,S,G);w($t(At?Rt:Ft,"glow"),me,Yt,(At?26-At:40)*i.u,(1-At/22)*.9)}}let ht=St((L-.92)/.08)*(1-St(U/.12));ht>.01&&(w($t(Rt,"glow"),S,G,160*i.u,.8*ht),w($t(Ft,"glow"),S,G,50*i.u,ht));let Ct=St(U/.06)*(1-pt)*(.75+.25*Math.sin(f*5));Ct>.01&&(e.save(),e.translate(S,G),e.scale(1,.35),w($t(de,"glow"),0,0,260*i.u,.55*Ct),e.restore(),w($t(Rt,"glow"),S,G,70*i.u,.7*Ct),w($t(Ft,"glow"),S,G,22*i.u,.8*Ct));let It=Math.exp(-(((U-.48)/.05)**2));if(k(S,G,.5+Ie(pt)*1+It*.8,Ie(pt)*(1-St((Et-.15)/.2)),f),Q>0&&Q<1){let mt=1-Q;e.save(),e.translate(S,G),e.scale(1,.18),w($t(Rt,"glow"),0,0,(120+Q*s*.5)*i.u+80,.9*mt),e.restore(),e.lineWidth=2,e.globalAlpha=1;for(let Lt=0;Lt<4;Lt++){let Pt=St(Q*1.3-Lt*.14);Pt<=0||(e.strokeStyle=`rgba(${ue},${(.55*(1-Pt)).toFixed(3)})`,e.beginPath(),e.ellipse(S,G,20+Pt*s*.42,(20+Pt*s*.42)*.16,0,0,Math.PI*2),e.stroke())}let At=26*i.u+10,gt=1+Q*2.4,me=V(i.crown),Yt=[];e.strokeStyle=`rgba(${Rt},${(.32*mt).toFixed(3)})`,e.lineWidth=3*i.u+1,e.globalAlpha=1,e.beginPath();for(let Lt=0;Lt<me;Lt++){let Pt=i.crown[Lt],xe=S+Math.cos(Pt.ang)*At*gt,Ne=G+Math.sin(Pt.ang)*At*gt*.18,vs=xe+Math.cos(Pt.ang)*Pt.out*Q,$s=Ne-Pt.v*4*Q*(1-Q)*(.6+.4*Math.abs(Math.cos(Pt.ang)));Pt.streak&&(e.moveTo(xe,Ne),e.lineTo(vs,$s)),Yt.push([Pt,vs,$s])}e.stroke();for(let[Lt,Pt,xe]of Yt)w($t(Lt.streak?Ft:Rt,"glow"),Pt,xe,Lt.s*i.u*(1-Q*.4),mt**.7);let zt=V(i.rise);for(let Lt=0;Lt<zt;Lt++){let Pt=i.rise[Lt];w($t(ue,"glow"),S+Pt.x*(1+Q),G-Q*n*.55*Pt.v,Pt.s*i.u*2,.8*mt)}}}if(Et>0){e.save(),Et<1&&(e.beginPath(),e.arc(S,G,Math.max(1,ot),0,Math.PI*2),e.clip()),_(f,Kt),e.restore(),e.globalCompositeOperation="lighter";let Mt=1-Et**2;if(Mt>0&&ot>2){if(e.globalAlpha=1,e.strokeStyle=`rgba(${Rt},${.2*Mt})`,e.lineWidth=34,e.beginPath(),e.arc(S,G,ot,0,Math.PI*2),e.stroke(),o){let ht=e.createConicGradient(f*.4,S,G);["#ff8a8a","#ffd36b","#8dffb0","#7fe7f0","#a99bff","#ff8adf","#ff8a8a"].forEach((Ct,It,mt)=>ht.addColorStop(It/(mt.length-1),Ct)),e.strokeStyle=ht,e.globalAlpha=.6*Mt}else e.strokeStyle=`rgba(${Ft},${.6*Mt})`;e.lineWidth=6,e.beginPath(),e.arc(S,G,ot+4,0,Math.PI*2),e.stroke(),e.globalAlpha=1,e.strokeStyle=`rgba(${Ft},${.85*Mt})`,e.lineWidth=2,e.beginPath(),e.arc(S,G,ot,0,Math.PI*2),e.stroke()}let xt=Math.sin(Math.PI*Math.min(1,Et*1.15))*.6;if(xt>.01){let ht=Ie(Et),Ct=V(i.burst);for(let It=0;It<Ct;It++){let mt=i.burst[It];w($t(mt.c,"bokeh"),S+Math.cos(mt.ang)*mt.d*r*.5*ht,G+Math.sin(mt.ang)*mt.d*r*.4*ht,mt.s*(.6+ht*.6),xt)}}}let z=Math.exp(-(((U-.48)/.045)**2));z>.01&&(e.globalCompositeOperation="lighter",w($t(Ft,"glow"),S,G,r*1.1*z,z*.9),e.globalAlpha=1,e.fillStyle=`rgba(255,236,190,${(z*.3).toFixed(3)})`,e.fillRect(0,0,s,n)),e.globalCompositeOperation="source-over",e.globalAlpha=1}let j=()=>{let f=Math.min(devicePixelRatio||1,Ye[C].dpr);Z=Ye[C].q,t.width=Math.round(s*f),t.height=Math.round(n*f),e.setTransform(f,0,0,f,0,0),u=null},q=f=>{if(Y){let D=f-Y;D<250&&(at=at*.9+D*.1,T+=1)}Y=f,T>40&&at>25&&C<Ye.length-1&&(C+=1,j(),T=0,at=16.7)},M=f=>{p&&(q(f),K(f/1e3),requestAnimationFrame(M))},F=()=>{let f=t.offsetWidth,D=t.offsetHeight;if(!f||!D||Math.abs(f-s)<2&&Math.abs(D-n)<2&&i.stars)return;let R=!i.stars||Math.abs(f-s)>=2||Math.abs(D-n)>140;s=f,n=D,r=Math.hypot(s,n),R&&st(),j(),p||K(performance.now()/1e3)},W=()=>{let f=!we()&&h&&!document.hidden;if(f&&!p){let D=performance.now();A?m&&(g+=D-m):(g=D,A=!0),m=0,p=!0,Y=0,requestAnimationFrame(M)}else!f&&p?(p=!1,m=performance.now(),s&&K(m/1e3)):!f&&s&&K(performance.now()/1e3)},ct=f=>{x=f.clientX/innerWidth-.5,J=f.clientY/innerHeight-.5},lt=new ResizeObserver(F);lt.observe(t);let yt=new IntersectionObserver(f=>{h=f[0].isIntersecting,W()});yt.observe(t),document.addEventListener("visibilitychange",W),addEventListener("pointermove",ct,{passive:!0}),F();let wt=0;return{toggle:W,finish(){A=!0,m=0,g=performance.now()-(Ke.start+Ke.span+1)*1e3,!p&&s&&K(performance.now()/1e3)},restart(){A=!0,m=0,g=performance.now(),X=-1},tap(f,D){wt+=1,B.push({x:f,y:D,t:performance.now()/1e3,id:wt,water:D>H(f)+4}),B.length>8&&B.shift()},destroy(){p=!1,lt.disconnect(),yt.disconnect(),document.removeEventListener("visibilitychange",W),removeEventListener("pointermove",ct)}}}function wr(t,a){t.classList.add("view-home");let e=!we();t.innerHTML=`
  <section class="aw${e?" is-live":""}" aria-labelledby="aw-title">
    <canvas class="aw-canvas" aria-hidden="true"></canvas>
    <div class="aw-cap">
      <p class="aw-kicker">SHOPPING RELICS</p>
      <h1 class="aw-title" id="aw-title"><span class="nw">\u51FA\u767C\u4E4B\u524D\uFF0C</span><span class="nw">\u5149\u5DF2\u6EFF\u6EA2\u3002</span></h1>
      <p class="aw-sub"><span class="nw">\u60F3\u8981\u7684\u90FD\u5BEB\u5728\u9019\u88E1\uFF0C</span><span class="nw">\u6642\u9593\u5168\u7559\u7D66\u65C5\u7A0B\u3002</span></p>
      <p class="aw-alt" lang="ja"><span class="nw">\u65C5\u7ACB\u3061\u306E\u524D\u306B\u3001\u5149\u306F\u6E80\u3061\u308B\u3002</span><span class="nw">\u307B\u3057\u3044\u3082\u306E\u306F\u3001\u3053\u3053\u306B\u8A18\u3057\u3066\u3002</span><span class="nw">\u6642\u9593\u306F\u3059\u3079\u3066\u3001\u65C5\u306E\u305F\u3081\u306B\u3002</span></p>
      <ul class="aw-stats" aria-label="\u6E05\u55AE\u6982\u6CC1" data-stats>${Fn(a).join("")}</ul>
      <div class="aw-cta" data-cta>
        <a class="btn btn-gold" href="#/list">${c("auto_awesome")}\u958B\u555F\u6E05\u55AE</a>
        <button type="button" class="btn btn-ghost-light" data-add>${c("add_circle")}<span data-add-label>${Cn(a.state)}</span></button>
      </div>
      <button type="button" class="aw-replay" data-replay>${c("movie","sm")}\u91CD\u64AD\u7247\u982D</button>
    </div>
    <button type="button" class="aw-skip" data-skipintro hidden>\u8DF3\u904E\u7247\u982D${c("fast_forward","sm")}</button>
  </section>`;let o=t.querySelector(".aw"),s=t.querySelector(".aw-cap"),n=t.querySelector("[data-skipintro]"),r=null,i=-1,l=m=>{let $=St((m-.8)/.14);(Math.abs($-i)>.004||$===1&&i!==1)&&(i=$,o.style.setProperty("--c",$.toFixed(3)),s.querySelectorAll("[data-cta], [data-replay]").forEach(x=>{x.inert=$<.6}));let v=m>=mr;if(v!==r){r=v;let x=o.classList.contains("is-live")&&!r;document.body.classList.toggle("home-intro",x),n.hidden=!x,r&&hr()}},u=e&&gr();document.body.classList.toggle("home-intro",e&&!u),u&&o.classList.add("is-quick");let p=null,h=()=>{let m=t.querySelector(".aw-canvas"),$=m.cloneNode(!1);m.replaceWith($),o.classList.remove("is-gl"),p=yr($,l)};Xe()==="gl"&&(p=Pn(t.querySelector(".aw-canvas"),l,we,()=>{p.destroy(),h(),p.finish()})),p?o.classList.add("is-gl"):h(),u&&p.finish();let g=matchMedia("(prefers-reduced-motion: reduce)"),A=()=>{o.classList.toggle("is-live",!we()),we()&&p.finish(),p.toggle()};return g.addEventListener?.("change",A),t.addEventListener("click",m=>{m.target.closest("[data-add]")&&document.dispatchEvent(new CustomEvent("app:add")),m.target.closest("[data-skipintro]")&&(p.finish(),m.detail===0&&requestAnimationFrame(()=>s.querySelector("[data-cta] a")?.focus())),m.target.closest("[data-replay]")&&(o.classList.remove("is-quick"),p.restart(),m.detail===0?requestAnimationFrame(()=>n.focus()):document.activeElement?.blur())}),o.addEventListener("pointerdown",m=>{if(!r||we()||m.button>0||m.target.closest("a, button, .aw-title, .aw-sub, .aw-alt, .aw-stats, .aw-kicker"))return;let $=o.getBoundingClientRect();p.tap(m.clientX-$.left,m.clientY-$.top)}),{update(m){t.querySelector("[data-stats]").innerHTML=Fn(m).join(""),t.querySelector("[data-add-label]").textContent=Cn(m.state)},destroy(){g.removeEventListener?.("change",A),p.destroy(),document.body.classList.remove("home-intro")}}}function Dn(){let t=He(),a=Ae(),e='<p class="hint">\u53EA\u53D6\u5F97 Google \u63D0\u4F9B\u7684<strong>\u5E33\u865F\u8B58\u5225\u78BC</strong>\uFF08\u4E0D\u542B\u59D3\u540D\u3001Email\uFF09\uFF0C\u6E05\u55AE\u5B58\u5728<strong>\u4F60\u81EA\u5DF1 Google Drive \u7684\u61C9\u7528\u7A0B\u5F0F\u5C08\u7528\u96B1\u85CF\u8CC7\u6599\u593E</strong>\u3002\u672C\u7DB2\u7AD9\u6C92\u6709\u4F3A\u670D\u5668\uFF0C\u770B\u4E0D\u5230\u4F60\u7684\u8CC7\u6599\u3002<a href="privacy.html" target="_blank" rel="noopener">\u96B1\u79C1\u6B0A\u8AAA\u660E<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a></p>';if(!t.ok)return`${e}<p class="cloud-status is-off">${c("info","sm")}${t.reason==="config"?"\u96F2\u7AEF\u540C\u6B65\u5C1A\u672A\u555F\u7528\uFF1A\u7DB2\u7AD9\u9084\u6C92\u8A2D\u5B9A Google \u7528\u6236\u7AEF ID\u3002":"\u96F2\u7AEF\u540C\u6B65\u9700\u8981\u5F9E\u7DB2\u5740\uFF08https\uFF09\u958B\u555F\u7DB2\u7AD9\uFF0C\u76F4\u63A5\u958B\u555F\u6A94\u6848\u6642\u7121\u6CD5\u4F7F\u7528\u3002"}</p>`;if(!a.linked)return`${e}
      <div class="btn-row"><button type="button" class="btn btn-ghost" data-cloud="connect" ${a.state==="syncing"?'disabled aria-busy="true"':""}>${c("sync")}\u7528 Google \u5E33\u865F\u9023\u7D50</button></div>
      ${a.state==="error"?`<p class="cloud-status is-error">${c("error","sm")}${d(a.message)}</p>`:""}`;let o={syncing:[`${c("sync","sm")}\u540C\u6B65\u4E2D\u2026`,""],conflict:[`${c("warning","sm")}${d(a.message)}`,"is-warn"],auth:[`${c("info","sm")}\u9023\u7DDA\u5DF2\u903E\u6642\uFF0C\u6309\u300C\u7ACB\u5373\u540C\u6B65\u300D\u91CD\u65B0\u9023\u7DDA`,"is-warn"],error:[`${c("error","sm")}${d(a.message)}`,"is-error"]}[a.state]??(a.dirty?[`${c("pending","sm")}\u9019\u53F0\u6709\u5C1A\u672A\u540C\u6B65\u7684\u4FEE\u6539${a.hasToken?"\uFF0C\u7A0D\u5F8C\u6703\u81EA\u52D5\u4E0A\u50B3":"\uFF0C\u6309\u300C\u7ACB\u5373\u540C\u6B65\u300D\u4E0A\u50B3"}`,"is-warn"]:[`${c("check_circle","sm")}\u5DF2\u540C\u6B65${a.lastSyncAt?` \xB7 ${jt(a.lastSyncAt)}`:""}`,"is-ok"]);return`${e}
    <p class="cloud-account">${c("verified","sm")}\u5DF2\u9023\u7D50 Google \u5E33\u865F\uFF08\u8B58\u5225\u78BC\u672B 4 \u78BC ${d(a.idTail)}\uFF09</p>
    <p class="cloud-status ${o[1]}">${o[0]}</p>
    <div class="btn-row">
      <button type="button" class="btn btn-ghost" data-cloud="sync" ${a.state==="syncing"?'disabled aria-busy="true"':""}>${c("sync")}\u7ACB\u5373\u540C\u6B65</button>
      <button type="button" class="btn btn-ghost" data-cloud="disconnect">${c("close")}\u4E2D\u65B7\u9023\u7D50</button>
      <button type="button" class="btn btn-danger-ghost" data-cloud="delete">${c("delete_forever")}\u522A\u9664\u96F2\u7AEF\u8CC7\u6599</button>
    </div>
    <p class="hint">\u9023\u7DDA\u5F8C\uFF0C\u4FEE\u6539\u6703\u81EA\u52D5\u4E0A\u50B3\uFF1B\u91CD\u65B0\u958B\u555F\u7DB2\u7AD9\u5F8C\uFF0C\u6309\u4E00\u6B21\u300C\u7ACB\u5373\u540C\u6B65\u300D\u5C31\u6703\u7E7C\u7E8C\u540C\u6B65\u3002</p>`}var Za=t=>`${t} \u4EF6\u5546\u54C1`;async function xa(t){try{let a=await t();if(a?.action==="conflict"){let e=await Ds({title:"\u8981\u4FDD\u7559\u54EA\u4E00\u4EFD\u6E05\u55AE\uFF1F",body:`<p>\u96F2\u7AEF\u548C\u9019\u53F0\u88DD\u7F6E\u7684\u8CC7\u6599\u4E0D\u4E00\u6A23\uFF1A</p>
          <ul class="choice-facts"><li>\u96F2\u7AEF\uFF1A${Za(a.remoteCount)}\uFF0C${jt(a.remoteAt)} \u5132\u5B58</li><li>\u9019\u53F0\uFF1A${Za(a.localCount)}</li></ul>
          <p>\u6C92\u9078\u5230\u7684\u90A3\u4EFD\u6703\u88AB\u53D6\u4EE3\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u4E0D\u78BA\u5B9A\u7684\u8A71\uFF0C\u5148\u53D6\u6D88\u4E26\u532F\u51FA\u9019\u53F0\u7684\u5099\u4EFD\u3002</p>`,choices:[{value:"cloud",text:"\u7528\u96F2\u7AEF\u8CC7\u6599\u53D6\u4EE3\u9019\u53F0",tone:"gold"},{value:"local",text:"\u7528\u9019\u53F0\u8CC7\u6599\u8986\u84CB\u96F2\u7AEF"}]});e&&(await nn(e),N({title:e==="cloud"?"\u5DF2\u63DB\u6210\u96F2\u7AEF\u8CC7\u6599":"\u5DF2\u4E0A\u50B3\u5230\u96F2\u7AEF",tone:"muted",duration:3e3}))}else a?.action==="downloaded"?N({title:"\u5DF2\u5F9E\u96F2\u7AEF\u8F09\u5165\u6E05\u55AE",message:Za(y.state.items.length),tone:"muted",duration:3e3}):a?.action==="uploaded"?N({title:"\u5DF2\u540C\u6B65\u5230 Google Drive",tone:"muted",duration:2500}):a?.action==="none"&&N({title:"\u5DF2\u662F\u6700\u65B0\u72C0\u614B",tone:"muted",duration:2500})}catch(a){a?.code!=="denied"&&N({title:"\u540C\u6B65\u5931\u6557",message:d(a?.message||"\u8ACB\u7A0D\u5F8C\u518D\u8A66"),tone:"error",duration:6e3})}}function xr(t){let a=e=>`<span class="skin-half" style="--p-bg:${e.bg};--p-surface:${e.surface};--p-accent:${e.accent}"><span class="skin-key"></span></span>`;return`<label class="skin-card">
    <input type="radio" name="skin" value="${t.id}" ${$e()===t.id?"checked":""}>
    <span class="skin-body">
      <span class="skin-preview" aria-hidden="true">${a(t.preview.light)}${a(t.preview.dark)}</span>
      <span class="skin-name">${d(t.label)}${c("check_circle","sm")}</span>
      <span class="skin-desc">${d(t.desc)}</span>
    </span>
  </label>`}function qn(){let t=ye(),a=y.state;return`
    <p class="hint">\u76EE\u524D\uFF1A<strong>${d(a.settings.tripName)}</strong>\uFF08${a.items.length} \u4EF6\u5546\u54C1\uFF09\u3002\u5C01\u5B58\u5F8C\u53EF\u4EE5\u958B\u59CB\u65B0\u7684\u4E00\u8D9F\uFF0C\u4E4B\u5F8C\u96A8\u6642\u5207\u63DB\u56DE\u4F86\u3002</p>
    <div class="btn-row">
      <button type="button" class="btn btn-ghost" data-trip="new">${c("add_circle")}\u5C01\u5B58\u4E26\u958B\u59CB\u65B0\u65C5\u7A0B</button>
    </div>
    ${t.length?`<ul class="trip-list">
      ${t.map(e=>`<li>
        <div><strong>${d(e.name)}</strong><span class="muted small">${e.count} \u4EF6\u5546\u54C1 \xB7 ${jt(e.savedAt)} \u5C01\u5B58</span></div>
        <button type="button" class="btn btn-sm btn-ghost" data-trip="switch" data-id="${d(e.id)}">${c("swap_horiz","sm")}\u5207\u63DB</button>
        <button type="button" class="icon-btn icon-btn-sm icon-btn-danger" data-trip="remove" data-id="${d(e.id)}" aria-label="\u522A\u9664\u5C01\u5B58\u7684\u65C5\u7A0B\u300C${d(e.name)}\u300D" title="\u522A\u9664">${c("delete","sm")}</button>
      </li>`).join("")}
    </ul>`:""}
    <p class="hint">\u5C01\u5B58\u7684\u65C5\u7A0B\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\uFF0C\u96F2\u7AEF\u540C\u6B65\u53EA\u540C\u6B65\u76EE\u524D\u9019\u8D9F\uFF1B\u532F\u51FA\u5099\u4EFD\u6642\u6703\u4E00\u4F75\u5E36\u51FA\u3002</p>`}function kr(){let t=y.state.settings;return`
  <form class="dlg-shell settings-shell" novalidate>
    <header class="dlg-head">
      <p class="eyebrow">${c("tune","sm")}SETTINGS \xB7 \u8A2D\u5B9A</p>
      <h2 id="settings-title" class="dlg-title">\u65C5\u7A0B\u8A2D\u5B9A\u8207\u8CC7\u6599\u5099\u4EFD</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8A2D\u5B9A">${c("close")}</button>
    </header>
    <div class="dlg-scroll">
      <fieldset class="fs">
        <legend class="fs-title">${c("auto_awesome","sm")}\u4E3B\u984C</legend>
        <div class="skin-grid" role="radiogroup" aria-label="\u4E3B\u984C">
          ${Qt.map(xr).join("")}
        </div>
        <p class="hint">\u4E3B\u984C\u6C7A\u5B9A\u6574\u9AD4\u7684\u8A2D\u8A08\u98A8\u683C\uFF0C\u9078\u64C7\u5F8C\u7ACB\u5373\u5957\u7528\u3002\u9996\u9801\u7247\u982D\u7DAD\u6301\u91D1\u8272\u591C\u666F\uFF0C\u4E0D\u96A8\u4E3B\u984C\u6539\u8B8A\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("light_mode","sm")}\u5916\u89C0</legend>
        <div class="seg-pills" role="radiogroup" aria-label="\u5916\u89C0\uFF08\u6DF1\u6DFA\u8272\uFF09">
          ${Pe.map(a=>`<label class="pill"><input type="radio" name="theme" value="${a.id}" ${ce()===a.id?"checked":""}><span>${c(a.icon,"sm")}${a.label}</span></label>`).join("")}
        </div>
        <p class="hint">\u9078\u64C7\u5F8C\u7ACB\u5373\u5957\u7528\uFF0C\u4E26\u8A18\u5728\u9019\u53F0\u88DD\u7F6E\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("movie","sm")}\u9996\u9801\u7247\u982D</legend>
        <div class="seg-pills" role="radiogroup" aria-label="\u9996\u9801\u7247\u982D\u7684\u7248\u672C">
          <label class="pill"><input type="radio" name="intro" value="gl" ${Xe()==="gl"?"checked":""}><span>${c("auto_awesome","sm")}\u83EF\u9E97\u7248</span></label>
          <label class="pill"><input type="radio" name="intro" value="2d" ${Xe()==="2d"?"checked":""}><span>${c("light_mode","sm")}\u8F15\u91CF\u7248</span></label>
        </div>
        <p class="hint">\u83EF\u9E97\u7248\u9700\u8981\u8F03\u65B0\u7684\u88DD\u7F6E\uFF0C\u8DD1\u4E0D\u52D5\u6642\u6703\u81EA\u52D5\u6539\u7528\u8F15\u91CF\u7248\u3002\u8B8A\u66F4\u5F8C\u4E0B\u6B21\u56DE\u5230\u9996\u9801\u751F\u6548\uFF1B\u5B8C\u6574\u7684\u7247\u982D\u53EA\u5728\u7B2C\u4E00\u6B21\u64AD\uFF0C\u4E4B\u5F8C\u53EF\u5728\u9996\u9801\u6309\u300C\u91CD\u64AD\u7247\u982D\u300D\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("flight_takeoff","sm")}\u65C5\u7A0B\u8207\u9810\u7B97</legend>
        <div class="grid-2">
          <div class="field span2">
            <label for="st-trip">\u65C5\u7A0B\u540D\u7A31</label>
            <input id="st-trip" name="tripName" value="${d(t.tripName)}" maxlength="40">
          </div>
          <div class="field">
            <label for="st-budget">\u8CFC\u7269\u9810\u7B97\uFF08\u65E5\u5713\uFF09</label>
            <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="st-budget" name="budget" type="number" inputmode="numeric" min="0" step="1000" value="${t.budget}"></div>
          </div>
          <div class="field">
            <label for="st-fee">\u9810\u8A2D\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
            <input id="st-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${t.refundFeePct}" aria-describedby="hint-st-fee">
            <p class="hint" id="hint-st-fee">\u65B0\u5236\u7531\u5E97\u5BB6\u6C7A\u5B9A\uFF0C\u9996\u65E5\u56DE\u5831\u591A\u5728 0%\uFF5E2.3%\uFF0C\u4E5F\u6709\u6BCF\u7B46\u6536\u56FA\u5B9A\u91D1\u984D\u7684\u5E97\uFF1B\u5510\u5409\u8A36\u5FB7\u3001Bic Camera \u70BA 0\uFF08\u5DF2\u5167\u5EFA\uFF09\u3002\u672C\u7DB2\u7AD9\u4EE5\u542B\u7A05\u50F9\u4F30\u7B97</p>
          </div>
          <div class="field">
            <label for="st-rebate">\u5237\u5361\u6DE8\u56DE\u994B %</label>
            <input id="st-rebate" name="cardRebatePct" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${t.cardRebatePct}" aria-describedby="hint-st-rebate">
            <p class="hint" id="hint-st-rebate">\u56DE\u994B\u6263\u6389\u6D77\u5916\u624B\u7E8C\u8CBB\u5F8C\u7684\u6578\u5B57\uFF0C\u4E0D\u7528\u53EF\u586B 0</p>
          </div>
        </div>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("currency_exchange","sm")}\u532F\u7387</legend>
        <div class="rate-row">
          <div class="field grow">
            <label for="st-rate">1 \u65E5\u5713 = ? \u53F0\u5E63</label>
            <input id="st-rate" name="rate" type="number" inputmode="decimal" min="0.01" max="5" step="0.0001" value="${t.rate}">
          </div>
          <button type="button" class="btn btn-ghost" data-sync>${c("sync")}\u6293\u6700\u65B0\u532F\u7387</button>
        </div>
        <p class="hint">\u76EE\u524D\u4F86\u6E90\uFF1A${t.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":t.rateSource==="api"?d(t.rateProvider||"\u516C\u958B\u532F\u7387 API"):"\u9810\u8A2D\u503C"}${t.rateUpdatedAt?` \xB7 ${jt(t.rateUpdatedAt)}`:""}\u3002\u4FEE\u6539\u6578\u5B57\u5F8C\u5132\u5B58\uFF0C\u5C31\u6703\u6539\u7528\u624B\u52D5\u532F\u7387\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("luggage","sm")}\u884C\u674E</legend>
        <div class="grid-2">
          <div class="field"><label for="st-cl">\u8A17\u904B\u9650\u91CD\uFF08kg\uFF09</label><input id="st-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${t.checkedLimit}"></div>
          <div class="field"><label for="st-cb">\u8A17\u904B\u57FA\u672C\u91CD\u91CF\uFF08kg\uFF09</label><input id="st-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${t.checkedBase}" aria-describedby="hint-base"></div>
          <div class="field"><label for="st-pl">\u96A8\u8EAB\u9650\u91CD\uFF08kg\uFF09</label><input id="st-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${t.carryLimit}"></div>
          <div class="field"><label for="st-pb">\u96A8\u8EAB\u57FA\u672C\u91CD\u91CF\uFF08kg\uFF09</label><input id="st-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${t.carryBase}"></div>
        </div>
        <p class="hint" id="hint-base">\u57FA\u672C\u91CD\u91CF\uFF1D\u884C\u674E\u7BB1\u672C\u8EAB\u52A0\u4E0A\u8863\u7269\u7B49\u975E\u8CFC\u7269\u54C1\u3002</p>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("inventory_2","sm")}\u591A\u8D9F\u65C5\u7A0B</legend>
        <div data-trips-region>${qn()}</div>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("sync_alt","sm")}\u96F2\u7AEF\u540C\u6B65\uFF08Google Drive\uFF09</legend>
        <div data-cloud-region aria-live="polite">${Dn()}</div>
      </fieldset>

      <fieldset class="fs">
        <legend class="fs-title">${c("database","sm")}\u8CC7\u6599\u5099\u4EFD</legend>
        <p class="hint">\u6E05\u55AE\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u7684\u700F\u89BD\u5668\uFF1B\u6C92\u6709\u9023\u7D50 Google \u7684\u8A71\uFF0C\u63DB\u624B\u6A5F\u6216\u6E05\u9664\u700F\u89BD\u8CC7\u6599\u524D\uFF0C\u8A18\u5F97\u5148\u532F\u51FA\u5099\u4EFD\u3002</p>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-export>${c("download")}\u532F\u51FA\u5099\u4EFD\uFF08JSON\uFF09</button>
          <label class="btn btn-ghost file-btn">${c("upload")}\u532F\u5165\u5099\u4EFD<input type="file" accept="application/json,.json" class="sr-only" data-import></label>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-demo>${c("auto_awesome")}\u8F09\u5165\u793A\u7BC4\u8CC7\u6599</button>
          <button type="button" class="btn btn-danger-ghost" data-reset>${c("delete_forever")}\u6E05\u9664\u5168\u90E8\u8CC7\u6599</button>
        </div>
      </fieldset>
    </div>
    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-cancel>\u53D6\u6D88</button>
      <button type="submit" class="btn btn-gold">${c("save")}\u5132\u5B58\u8A2D\u5B9A</button>
    </footer>
  </form>`}function jn(){let t=qt("dlg-settings",kr(),"settings-title"),a=t.querySelector("form"),e=y.state.settings.rate;pa();let o=t.querySelector("[data-cloud-region]"),s=Zs(()=>{if(!t.isConnected){s();return}let n=document.activeElement?.dataset?.cloud;o.innerHTML=Dn(),n&&o.querySelector(`[data-cloud="${n}"]`)?.focus()});t.addEventListener("click",async n=>{let r=n.target,i=r.closest("[data-cloud]")?.dataset.cloud;if(i==="connect"&&xa(sn),i==="sync"&&xa(()=>Le({interactive:!0})),i==="disconnect"&&await Jt({title:"\u4E2D\u65B7 Google \u9023\u7D50\uFF1F",body:"\u9019\u53F0\u7684\u6E05\u55AE\u548C\u96F2\u7AEF\u7684\u540C\u6B65\u6A94\u90FD\u6703\u4FDD\u7559\uFF0C\u53EA\u662F\u4E4B\u5F8C\u4E0D\u518D\u81EA\u52D5\u540C\u6B65\u3002",confirmText:"\u4E2D\u65B7\u9023\u7D50"})&&(Ba(),N({title:"\u5DF2\u4E2D\u65B7\u9023\u7D50",tone:"muted",duration:2500})),i==="delete"&&await Jt({title:"\u522A\u9664\u96F2\u7AEF\u8CC7\u6599\uFF1F",body:"\u6703\u522A\u9664\u4F60 Google Drive \u96B1\u85CF\u8CC7\u6599\u593E\u88E1\u7684<strong>\u540C\u6B65\u6A94</strong>\u4E26\u4E2D\u65B7\u9023\u7D50\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u9019\u53F0\u88DD\u7F6E\u7684\u6E05\u55AE\u6703\u4FDD\u7559\u3002",confirmText:"\u522A\u9664\u96F2\u7AEF\u8CC7\u6599",danger:!0}))try{await on(),N({title:"\u96F2\u7AEF\u8CC7\u6599\u5DF2\u522A\u9664",tone:"muted",duration:3e3})}catch(p){N({title:"\u522A\u9664\u5931\u6557",message:d(p?.message||"\u8ACB\u7A0D\u5F8C\u518D\u8A66"),tone:"error"})}if(r.closest(".dlg-close, [data-cancel]")){ft(t);return}if(r.closest("[data-sync]")){let u=r.closest("[data-sync]");u.disabled=!0,u.setAttribute("aria-busy","true");let p=await Se({force:!0});u.disabled=!1,u.removeAttribute("aria-busy"),p.ok?(a.elements.rate.value=p.rate,N({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${ut(p.rate,4)} TWD`,tone:"muted",duration:3e3})):N({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u3002",tone:"error"})}let l=r.closest("[data-trip]");if(l){let u=l.dataset.trip,p=ye().find(g=>g.id===l.dataset.id),h=()=>N({title:"\u5132\u5B58\u7A7A\u9593\u4E0D\u8DB3",message:"\u700F\u89BD\u5668\u7684\u5132\u5B58\u7A7A\u9593\u6EFF\u4E86\uFF0C\u8ACB\u5148\u522A\u9664\u4E0D\u9700\u8981\u7684\u5C01\u5B58\u65C5\u7A0B\u6216\u5546\u54C1\u7167\u7247\u3002",tone:"error"});if(u==="new"){if(!await Jt({title:"\u5C01\u5B58\u4E26\u958B\u59CB\u65B0\u65C5\u7A0B\uFF1F",body:`\u300C${d(y.state.settings.tripName)}\u300D\u7684 <strong>${y.state.items.length} \u4EF6\u5546\u54C1</strong>\u3001\u6536\u6B3E\u8207\u6253\u5305\u8A18\u9304\u6703\u5C01\u5B58\u8D77\u4F86\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5207\u63DB\u56DE\u4F86\u3002\u65B0\u65C5\u7A0B\u6703\u6CBF\u7528\u532F\u7387\u3001\u9810\u7B97\u3001\u884C\u674E\u9650\u91CD\u8207\u81EA\u8A02\u5E97\u92EA\u3002`,confirmText:"\u5C01\u5B58\u4E26\u958B\u59CB"}))return;if(!mn("\u65B0\u7684\u65C5\u7A0B")){h();return}ft(t),N({title:"\u5DF2\u958B\u59CB\u65B0\u7684\u65C5\u7A0B",message:"\u53EF\u4EE5\u5728\u8A2D\u5B9A\u88E1\u4FEE\u6539\u65C5\u7A0B\u540D\u7A31\u3002",tone:"muted"})}else if(u==="switch"&&p){if(!await Jt({title:`\u5207\u63DB\u5230\u300C${p.name}\u300D\uFF1F`,body:y.state.items.length?`\u76EE\u524D\u7684\u300C${d(y.state.settings.tripName)}\u300D\u6703\u5148\u5C01\u5B58\uFF0C\u518D\u8F09\u5165\u300C${d(p.name)}\u300D\u7684 ${p.count} \u4EF6\u5546\u54C1\u3002`:`\u76EE\u524D\u7684\u300C${d(y.state.settings.tripName)}\u300D\u6C92\u6709\u5546\u54C1\uFF0C\u4E0D\u6703\u5C01\u5B58\uFF1B\u76F4\u63A5\u8F09\u5165\u300C${d(p.name)}\u300D\u7684 ${p.count} \u4EF6\u5546\u54C1\u3002`,confirmText:"\u5207\u63DB\u65C5\u7A0B"}))return;if(!fn(p.id)){h();return}ft(t),N({title:`\u5DF2\u5207\u63DB\u5230\u300C${p.name}\u300D`,tone:"muted"})}else if(u==="remove"&&p){if(!await Jt({title:`\u522A\u9664\u5C01\u5B58\u7684\u300C${p.name}\u300D\uFF1F`,body:`\u6703\u522A\u9664\u9019\u8D9F\u5C01\u5B58\u7684 <strong>${p.count} \u4EF6\u5546\u54C1</strong>\u8207\u6240\u6709\u8A18\u9304\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002`,confirmText:"\u522A\u9664\u9019\u8D9F\u65C5\u7A0B",danger:!0}))return;gn(p.id),t.querySelector("[data-trips-region]").innerHTML=qn(),t.querySelector('[data-trip="new"]')?.focus(),N({title:"\u5DF2\u522A\u9664\u5C01\u5B58\u7684\u65C5\u7A0B",tone:"muted",duration:3e3})}return}if(r.closest("[data-export]")){let u={...JSON.parse(y.exportJSON()),archivedTrips:ye()};na(`shopping-relics-backup-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(u,null,2),"application/json")}r.closest("[data-demo]")&&(y.loadDemo(),N({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u5728\u6E05\u55AE\u9801\u6E05\u9664\u3002"})),r.closest("[data-reset]")&&await Jt({title:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599\uFF1F",body:`\u6703\u522A\u9664\u6E05\u55AE\u4E2D\u7684 <strong>${y.state.items.length} \u4EF6\u5546\u54C1</strong>\u3001\u6253\u5305\u6E05\u55AE\u8207\u6240\u6709\u8A2D\u5B9A\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u5EFA\u8B70\u5148\u532F\u51FA\u5099\u4EFD\u3002`,confirmText:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599",danger:!0})&&(y.resetAll(),ft(t),N({title:"\u8CC7\u6599\u5DF2\u5168\u90E8\u6E05\u9664",tone:"muted"}))}),a.addEventListener("change",n=>{n.target.name==="skin"&&ga(n.target.value),n.target.name==="intro"&&Xa(n.target.value),n.target.name==="theme"&&fa(n.target.value)}),t.querySelector("[data-import]").addEventListener("change",async n=>{let r=n.target.files?.[0];if(!r)return;if(!await Jt({title:"\u7528\u5099\u4EFD\u6A94\u53D6\u4EE3\u76EE\u524D\u8CC7\u6599\uFF1F",body:`\u76EE\u524D\u7684 ${y.state.items.length} \u4EF6\u5546\u54C1\u6703\u88AB\u300C${d(r.name)}\u300D\u7684\u5167\u5BB9\u53D6\u4EE3\u3002`,confirmText:"\u532F\u5165\u4E26\u53D6\u4EE3",danger:!0})){n.target.value="";return}try{let l=await r.text();y.importJSON(l);let u=JSON.parse(l).archivedTrips;Array.isArray(u)&&ze(u),ft(t),N({title:"\u5099\u4EFD\u5DF2\u532F\u5165",message:`\u5171 ${y.state.items.length} \u4EF6\u5546\u54C1`})}catch(l){N({title:"\u532F\u5165\u5931\u6557",message:`\u9019\u500B\u6A94\u6848\u4E0D\u662F\u6709\u6548\u7684\u5099\u4EFD\uFF1A${d(l.message)}`,tone:"error",duration:8e3})}}),a.addEventListener("submit",n=>{n.preventDefault();let r=a.elements,i=(p,h)=>p.value===""||Number.isNaN(Number(p.value))?h:Math.max(0,Number(p.value)),l=y.state.settings;y.updateSettings({tripName:r.tripName.value.trim()||l.tripName,budget:i(r.budget,l.budget),refundFeePct:i(r.refundFeePct,0),cardRebatePct:i(r.cardRebatePct,0),checkedLimit:i(r.checkedLimit,l.checkedLimit),checkedBase:i(r.checkedBase,l.checkedBase),carryLimit:i(r.carryLimit,l.carryLimit),carryBase:i(r.carryBase,l.carryBase)});let u=Number(r.rate.value);u>0&&Math.abs(u-y.state.settings.rate)>1e-9&&u!==e&&aa(u),ft(t),N({title:"\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}),Dt(t,{backdropClose:!1})}function On(t){let a=document.createElement("div");a.className="theme-pop",a.id="theme-pop",a.setAttribute("role","dialog"),a.setAttribute("aria-label","\u5916\u89C0\u8207\u4E3B\u984C"),a.hidden=!0,document.body.appendChild(a),t.setAttribute("aria-controls","theme-pop");let e=()=>{a.innerHTML=`
      <p class="theme-pop-title" id="tp-l1">\u5916\u89C0</p>
      <div class="seg-pills" role="radiogroup" aria-labelledby="tp-l1">
        ${Pe.map(r=>`<label class="pill"><input type="radio" name="pop-theme" value="${r.id}" ${ce()===r.id?"checked":""}><span>${c(r.icon,"sm")}${r.label}</span></label>`).join("")}
      </div>
      <p class="theme-pop-title" id="tp-l2">\u4E3B\u984C</p>
      <div class="theme-pop-skins" role="radiogroup" aria-labelledby="tp-l2">
        ${Qt.map(r=>`<label class="theme-pop-skin"><input type="radio" name="pop-skin" value="${r.id}" ${$e()===r.id?"checked":""}>
          <span><i class="skin-dot" aria-hidden="true" style="--c1:${r.preview.light.accent};--c2:${r.preview.dark.bg}"></i>${d(r.label)}${c("check","sm")}</span></label>`).join("")}
      </div>`},o=()=>{let r=t.getBoundingClientRect(),i=a.offsetWidth;a.style.left=`${Math.max(12,Math.min(innerWidth-i-12,r.right-i))}px`,r.top>innerHeight/2?(a.style.top="auto",a.style.bottom=`${innerHeight-r.top+8}px`):(a.style.bottom="auto",a.style.top=`${r.bottom+8}px`)},s=(r=!1)=>{a.hidden||(a.hidden=!0,t.setAttribute("aria-expanded","false"),r&&t.focus())},n=()=>{e(),a.hidden=!1,t.setAttribute("aria-expanded","true"),o(),a.querySelector("input:checked")?.focus()};t.addEventListener("click",()=>a.hidden?n():s()),a.addEventListener("change",r=>{r.target.name==="pop-theme"&&fa(r.target.value),r.target.name==="pop-skin"&&ga(r.target.value)}),a.addEventListener("keydown",r=>{r.key==="Escape"&&(r.stopPropagation(),s(!0))}),document.addEventListener("pointerdown",r=>{!a.hidden&&!a.contains(r.target)&&!t.contains(r.target)&&s()}),a.addEventListener("focusout",r=>{r.relatedTarget&&!a.contains(r.relatedTarget)&&r.relatedTarget!==t&&s()}),addEventListener("hashchange",()=>s()),addEventListener("resize",()=>{a.hidden||o()})}function Un(){let t=location.protocol==="https:"||["localhost","127.0.0.1"].includes(location.hostname);if("serviceWorker"in navigator&&t){let a=!navigator.serviceWorker.controller;navigator.serviceWorker.register("./sw.js").then(e=>{if(!a)return;let o=e.installing??e.waiting;o?.addEventListener("statechange",()=>{o.state==="activated"&&N({title:"\u5DF2\u53EF\u96E2\u7DDA\u4F7F\u7528",message:"\u4E4B\u5F8C\u5728\u65E5\u672C\u6C92\u6709\u7DB2\u8DEF\u4E5F\u80FD\u6253\u958B\u6E05\u55AE\u3002",tone:"muted",duration:4e3})})}).catch(e=>console.info("\u96E2\u7DDA\u5FEB\u53D6\u672A\u555F\u7528\uFF1A",e.message))}window.addEventListener("offline",()=>{N({title:"\u76EE\u524D\u96E2\u7DDA",message:"\u6E05\u55AE\u7167\u5E38\u53EF\u7528\uFF0C\u532F\u7387\u66AB\u7528\u4E0A\u6B21\u7684\u6578\u503C\u3002",tone:"muted",duration:4e3})}),window.addEventListener("online",()=>{N({title:"\u5DF2\u6062\u5FA9\u9023\u7DDA",tone:"muted",duration:2500})})}var es={};fe(es,{mount:()=>Mr});var tt={cat:"all",status:"all",area:"all",who:"all",q:"",sort:"new",layout:"grid"};try{tt.layout=localStorage.getItem("shopping-relics:layout")||"grid"}catch{}function ts(t){let a=tt.q.trim().toLowerCase();return(tt.who==="all"||(tt.who==="__self__"?!t.buyFor:t.buyFor===tt.who))&&(!a||[t.name,t.nameJa,t.brand,...t.stores,t.purchasedStore,t.area,t.note,t.jan,t.buyFor].join(" ").toLowerCase().includes(a))}function Sr(t,a){let e=t.filter(s=>ts(s)&&(tt.cat==="all"||s.category===tt.cat)&&(tt.status==="all"||(tt.status==="done"?s.purchased:!s.purchased))&&(tt.area==="all"||(s.area||"\u672A\u6307\u5B9A")===tt.area)),o={new:(s,n)=>n.createdAt-s.createdAt,priority:(s,n)=>n.priority-s.priority||n.createdAt-s.createdAt,price:(s,n)=>a.get(n.id).pay-a.get(s.id).pay,area:(s,n)=>(s.area||"~").localeCompare(n.area||"~","zh-Hant")||s.store.localeCompare(n.store,"zh-Hant")};return e=[...e].sort(o[tt.sort]),e.sort((s,n)=>Number(s.purchased)-Number(n.purchased))}function Bn({state:t,sum:a,rate:e}){let{settings:o}=t,s=a.count?a.purchasedCount/a.count:0;return`
    ${Zt({label:"\u63A1\u8CB7\u9032\u5EA6",icon:"verified",value:a.purchasedCount,unit:` / ${a.count} \u4EF6`,bar:oe(s,{label:"\u63A1\u8CB7\u9032\u5EA6"}),foot:`<span>${a.purchasedCount} \u4EF6\u5DF2\u8CB7</span><span>${a.pendingCount} \u4EF6\u5F85\u8CB7</span>`})}
    ${Zt({label:"\u5DF2\u82B1\u8CBB",icon:"account_balance_wallet",value:b(a.paid),unit:` / ${b(o.budget)}`,bar:re([{value:a.paid,tone:"paid"},{value:a.pending,tone:"later"}],o.budget,`\u9810\u7B97 ${b(o.budget)}\uFF1A\u5DF2\u82B1 ${b(a.paid)}\uFF0C\u5F85\u8CB7 ${b(a.pending)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${b(a.pay)}</span><span class="${a.remaining<0?"text-danger":""}">${a.remaining<0?"\u5C07\u8D85\u652F":"\u8CB7\u5B8C\u5269"} ${b(Math.abs(a.remaining))}</span>`})}
    ${Zt({label:"\u9810\u4F30\u9000\u7A05",icon:"price_check",value:b(a.refund),foot:`<span>${a.eligibleStores} / ${a.taxFreeStores} \u5BB6\u5E97\u9054\u9580\u6ABB</span><span>\u2248 ${vt(a.refund,e)}</span>`,tone:"kpi-cyan"})}
    ${Zt({label:"\u8A17\u904B\u884C\u674E\uFF08\u76EE\u524D\uFF09",icon:"luggage",value:ut(a.totalCheckedNow,1),unit:` / ${o.checkedLimit} kg`,bar:re([{value:o.checkedBase,tone:"base"},{value:a.weightCheckedNow,tone:"paid"},{value:a.weightChecked-a.weightCheckedNow,tone:"later"}],o.checkedLimit,`\u8A17\u904B\u9650\u91CD ${o.checkedLimit} \u516C\u65A4\uFF1A\u76EE\u524D ${ut(a.totalCheckedNow,1)}\uFF0C\u5168\u90E8\u8CB7\u5B8C ${ut(a.totalChecked,1)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${Wt(a.totalChecked)}</span><span>${a.totalChecked>o.checkedLimit?'<b class="text-danger">\u8CB7\u5B8C\u6703\u8D85\u91CD</b>':`\u8CB7\u5B8C\u5269 ${Wt(o.checkedLimit-a.totalChecked)}`}</span>`})}`}function Gn(t){let a=[...new Set(t.map(e=>e.buyFor).filter(Boolean))].sort((e,o)=>e.localeCompare(o,"zh-Hant"));return tt.who!=="all"&&tt.who!=="__self__"&&!a.includes(tt.who)&&(tt.who="all"),`<div class="select-wrap">
    <label for="f-who" class="sr-only">\u5E6B\u8AB0\u8CB7</label>
    <select id="f-who">
      <option value="all">\u5168\u90E8\u5C0D\u8C61</option>
      <option value="__self__" ${tt.who==="__self__"?"selected":""}>\u81EA\u7528</option>
      ${a.map(e=>`<option value="${d(e)}" ${tt.who===e?"selected":""}>@${d(e)}</option>`).join("")}
    </select></div>`}function Jn(){return`<div class="search">
    <label for="f-q" class="sr-only">\u641C\u5C0B\u5546\u54C1</label>
    ${c("search")}
    <input id="f-q" type="search" placeholder="\u641C\u5C0B\u54C1\u540D\u3001\u54C1\u724C\u3001\u5E97\u5BB6\u3001\u670B\u53CB\u2026" value="${d(tt.q)}" autocomplete="off">
  </div>`}function Hn(t,a){if(a==="store")return`<div class="card toolbar"><div class="filters filters-store">${Jn()}${Gn(t)}</div></div>`;let e=Object.fromEntries(ge.map(n=>[n.id,0]));t.forEach(n=>{e[n.category]=(e[n.category]??0)+1});let o=[...new Set(t.map(n=>n.area||"\u672A\u6307\u5B9A"))].sort((n,r)=>n.localeCompare(r,"zh-Hant"));tt.area!=="all"&&!o.includes(tt.area)&&(tt.area="all");let s=ge.filter(n=>e[n.id]>0);return tt.cat!=="all"&&!e[tt.cat]&&(tt.cat="all"),`
  <div class="card toolbar">
    <div class="chips" role="group" aria-label="\u4F9D\u5206\u985E\u7BE9\u9078">
      <button type="button" class="chip ${tt.cat==="all"?"on":""}" data-cat="all" aria-pressed="${tt.cat==="all"}">${c("diamond","sm")}\u5168\u90E8 (${t.length})</button>
      ${s.map(n=>`<button type="button" class="chip ${tt.cat===n.id?"on":""}" data-cat="${n.id}" aria-pressed="${tt.cat===n.id}">${c(n.icon,"sm")}${n.label} (${e[n.id]})</button>`).join("")}
    </div>
    <div class="filters">
      ${Jn()}
      ${Gn(t)}
      <div class="select-wrap">
        <label for="f-status" class="sr-only">\u72C0\u614B</label>
        <select id="f-status">
          <option value="all">\u5168\u90E8\u72C0\u614B</option>
          <option value="todo" ${tt.status==="todo"?"selected":""}>\u5F85\u8CB7</option>
          <option value="done" ${tt.status==="done"?"selected":""}>\u5DF2\u8CB7</option>
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-area" class="sr-only">\u5730\u5340</label>
        <select id="f-area">
          <option value="all">\u5168\u90E8\u5730\u5340</option>
          ${o.map(n=>`<option ${tt.area===n?"selected":""}>${d(n)}</option>`).join("")}
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-sort" class="sr-only">\u6392\u5E8F</label>
        <select id="f-sort">
          <option value="new">\u6700\u65B0\u52A0\u5165</option>
          <option value="priority" ${tt.sort==="priority"?"selected":""}>\u512A\u5148\u5EA6</option>
          <option value="price" ${tt.sort==="price"?"selected":""}>\u50F9\u683C\u9AD8\u5230\u4F4E</option>
          <option value="area" ${tt.sort==="area"?"selected":""}>\u5730\u5340\u8207\u5E97\u5BB6</option>
        </select>
      </div>
      <div class="seg" role="group" aria-label="\u986F\u793A\u65B9\u5F0F">
        <button type="button" class="icon-btn ${tt.layout==="grid"?"on":""}" data-layout="grid" aria-pressed="${tt.layout==="grid"}" aria-label="\u5361\u7247\u986F\u793A" title="\u5361\u7247\u986F\u793A">${c("grid_view")}</button>
        <button type="button" class="icon-btn ${tt.layout==="list"?"on":""}" data-layout="list" aria-pressed="${tt.layout==="list"}" aria-label="\u5217\u8868\u986F\u793A" title="\u5217\u8868\u986F\u793A">${c("view_list")}</button>
      </div>
    </div>
  </div>`}function zn(t){return t.state.settings.listView==="store"?An(t,ts):Tr(t)}function Tr({state:t,sum:a,rate:e}){let o=Sr(t.items,a.byItem),s=`<p class="result-count" role="status">\u986F\u793A ${o.length} / ${t.items.length} \u4EF6</p>`;return o.length?`${s}<div class="item-grid layout-${tt.layout}">${o.map(n=>hn(n,a.byItem.get(n.id),e,tt.layout)).join("")}</div>`:`${s}<div class="card empty empty-sm"><p class="empty-text">\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5546\u54C1\u3002</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${c("filter_alt_off")}\u6E05\u9664\u7BE9\u9078</button></div>`}function Er({state:t,sum:a}){let e=["\u72C0\u614B","\u54C1\u540D","\u65E5\u6587\u540D\u7A31","\u54C1\u724C","\u5206\u985E","\u6578\u91CF","\u5E6B\u8AB0\u8CB7","\u5019\u9078\u5E97\u92EA","\u8CFC\u8CB7\u5E97\u5BB6","\u5730\u5340","\u9810\u8A08\u65E5\u671F","\u5E97\u982D\u652F\u4ED8(JPY)","\u9810\u4F30\u9000\u7A05(JPY)","\u5BE6\u969B\u6210\u672C(JPY)","\u53F0\u5E63(\u7D04)","\u91CD\u91CF(kg)","\u884C\u674E","JAN","\u5099\u8A3B"],o={checked:"\u8A17\u904B",carry:"\u96A8\u8EAB",none:"\u4E0D\u653E\u884C\u674E"},s=t.items.map(r=>{let i=a.byItem.get(r.id);return[r.purchased?"\u5DF2\u8CB7":"\u5F85\u8CB7",r.name,r.nameJa,r.brand,Vt(r.category).label,r.qty,r.buyFor,r.anyStore?"\u4E0D\u9650\u5E97\u92EA":r.stores.join("\u3001"),r.purchasedStore,r.area,r.planDate,i.pay,i.refund,i.net,Math.round(i.pay*t.settings.rate),i.weight,o[r.luggage],r.jan,r.note]}),n=[e,...s].map(r=>r.map(i=>`"${String(i??"").replace(/"/g,'""')}"`).join(",")).join(`\r
`);na(`shopping-list-${new Date().toISOString().slice(0,10)}.csv`,`\uFEFF${n}`,"text/csv")}function Mr(t,a){let e=a,o=()=>{t.dataset.view=e.state.settings.listView;let{state:n}=e,r=n.settings.listView,i=n.items.length>0,l=n.items.some(u=>u.demo);t.innerHTML=`
      ${Bt({eyebrow:`SHOPPING LIST \xB7 ${d(n.settings.tripName)}`,title:"\u63A1\u8CB7\u6E05\u55AE",sub:"\u884C\u524D\u898F\u5283\u3001\u73FE\u5834\u6383\u8CA8\u90FD\u5728\u9019\u9801\uFF1A\u9032\u5E97\u6642\u5207\u5230\u300C\u5E97\u92EA\u300D\u6253\u958B\u8A72\u5E97\u6E05\u55AE\u908A\u62FF\u908A\u52FE\uFF0C\u627E\u6771\u897F\u7528\u300C\u5206\u985E\u300D\u3002",subShort:"\u9032\u5E97\u5207\u5230\u300C\u5E97\u92EA\u300D\u908A\u62FF\u908A\u52FE\uFF0C\u627E\u6771\u897F\u7528\u300C\u5206\u985E\u300D\u3002",actions:i?`
          <div class="seg seg-text view-switch" role="group" aria-label="\u6E05\u55AE\u8996\u89D2">
            <button type="button" data-view="store" class="${r==="store"?"on":""}" aria-pressed="${r==="store"}">${c("storefront","sm")}\u5E97\u92EA</button>
            <button type="button" data-view="category" class="${r==="category"?"on":""}" aria-pressed="${r==="category"}">${c("category","sm")}\u5206\u985E</button>
          </div>
          <button type="button" class="btn btn-ghost" data-export>${c("download")}\u532F\u51FA CSV</button>
          <button type="button" class="btn btn-gold" data-add>${c("add_circle")}\u65B0\u589E\u5546\u54C1</button>`:""})}
      ${l?`<div class="notice notice-demo" role="note">${c("info")}<p>\u76EE\u524D\u6E05\u55AE\u542B<strong>\u793A\u7BC4\u8CC7\u6599</strong>\uFF0C\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u4E0D\u4EE3\u8868\u5BE6\u969B\u552E\u50F9\u3002</p>
        <button type="button" class="btn btn-sm btn-ghost" data-clear-demo>\u6E05\u9664\u793A\u7BC4\u8CC7\u6599</button></div>`:""}
      <div class="kpi-grid" data-region="kpi" role="group" aria-label="\u6E05\u55AE\u7D71\u8A08">${Bn(e)}</div>
      ${i?`<div data-region="toolbar">${Hn(n.items,r)}</div><div data-region="grid">${zn(e)}</div>`:Ce({title:"\u6E05\u55AE\u9084\u662F\u7A7A\u7684",text:"\u5148\u8A18\u4E0B\u7B2C\u4E00\u4EF6\u60F3\u8CB7\u7684\u5546\u54C1\u5427\u3002\u4E5F\u53EF\u4EE5\u8F09\u5165\u793A\u7BC4\u8CC7\u6599\uFF0C\u770B\u770B\u6574\u500B\u6D41\u7A0B\u600E\u9EBC\u904B\u4F5C\u3002",actions:`<button type="button" class="btn btn-gold" data-add>${c("add_circle")}\u65B0\u589E\u7B2C\u4E00\u4EF6</button>
                    <button type="button" class="btn btn-ghost" data-demo>${c("auto_awesome")}\u8F09\u5165\u793A\u7BC4\u8CC7\u6599</button>`})}`},s=()=>{let n=bt('[data-region="grid"]',t);n&&(n.innerHTML=zn(e))};return o(),Fe(t),Ln(t,{onMeta:Js,filterFn:ts}),t.addEventListener("click",n=>{let r=n.target.closest("button");if(r)if(r.matches("[data-add]"))Ut();else if(r.matches("[data-demo]"))y.loadDemo(),N({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u96A8\u6642\u6E05\u9664\u3002"});else if(r.matches("[data-clear-demo]"))y.clearDemo(),N({title:"\u5DF2\u6E05\u9664\u793A\u7BC4\u8CC7\u6599",tone:"muted",duration:3e3});else if(r.matches("[data-export]"))Er(e);else if(r.matches("[data-view]"))y.updateSettings({listView:r.dataset.view}),bt(`[data-view="${r.dataset.view}"]`,t)?.focus();else if(r.matches("[data-cat]"))tt.cat=r.dataset.cat,Te("[data-cat]",t).forEach(i=>{i.classList.toggle("on",i===r),i.setAttribute("aria-pressed",i===r)}),s();else if(r.matches("[data-layout]")){tt.layout=r.dataset.layout;try{localStorage.setItem("shopping-relics:layout",tt.layout)}catch{}Te("[data-layout]",t).forEach(i=>{i.classList.toggle("on",i===r),i.setAttribute("aria-pressed",i===r)}),s()}else r.matches("[data-reset-filter]")&&(Object.assign(tt,{cat:"all",status:"all",area:"all",who:"all",q:""}),o())}),t.addEventListener("input",n=>{n.target.id==="f-q"&&(tt.q=n.target.value,s())}),t.addEventListener("change",n=>{let r={"f-status":"status","f-area":"area","f-sort":"sort","f-who":"who"};r[n.target.id]&&(tt[r[n.target.id]]=n.target.value,s())}),{update(n){e=n;let r=!!bt('[data-region="toolbar"]',t),i=!!bt(".notice-demo",t);if(t.dataset.view!==n.state.settings.listView||r!==n.state.items.length>0||i!==n.state.items.some(J=>J.demo)){o();return}let p=bt('[data-region="kpi"]',t),h=Ee(p,".kpi-value");p.innerHTML=Bn(e),Me(p,".kpi-value",h);let g=bt('[data-region="toolbar"]',t);g&&!g.contains(document.activeElement)&&(g.innerHTML=Hn(e.state.items,e.state.settings.listView));let A=document.activeElement,m=A?.closest?.("[data-id]"),$=A?.closest?.("[data-group]"),v=$?`[data-group="${CSS.escape($.dataset.group)}"] `:"",x=m?`${v}[data-id="${m.dataset.id}"] [data-act="${A.dataset.act}"]`:null;!x&&A?.matches?.("[data-sg-open]")&&(x=`${v}[data-sg-open]`),s(),x&&bt(x,t)?.focus({preventScroll:!0})}}}var is={};fe(is,{addExtra:()=>as,mount:()=>Rr,unpaidFriendCount:()=>rs});function ka(t,a){let e=t.settings.paidFriends[a.name];return typeof e=="number"?e:e?a.total:0}function as(t=""){Ut(null,{buyFor:t,purchased:!0,mode:"extra"})}function os(t,a){let e=new Map;for(let s of t.items){if(!s.buyFor)continue;e.has(s.buyFor)||e.set(s.buyFor,{name:s.buyFor,bought:[],pending:[],total:0,refund:0,pendingEst:0});let n=e.get(s.buyFor),r=a.byItem.get(s.id);s.purchased?(n.bought.push({item:s,amount:r.net,refund:r.refund,pay:r.pay}),n.total+=r.net,n.refund+=r.refund):(n.pending.push({item:s,amount:r.net}),n.pendingEst+=r.net)}let o=t.settings.friendMeta||{};for(let s of e.values()){let n=o[s.name]||{};s.goods=s.total,s.feePct=Number(n.feePct)||0,s.feeFixed=Number(n.feeFixed)||0,s.fee=s.bought.length?Math.round(s.goods*s.feePct/100)+s.feeFixed:0,s.total=s.goods+s.fee,s.rateLocked=Number(n.rate)>0,s.rate=s.rateLocked?Number(n.rate):t.settings.rate,s.rateAt=n.rateAt||null}return[...e.values()].sort((s,n)=>n.total-s.total||s.name.localeCompare(n.name,"zh-Hant"))}var Sa=t=>[t.feePct?`${ut(t.feePct,t.feePct%1?1:0)}%`:"",t.feeFixed?b(t.feeFixed):""].filter(Boolean).join(" + ");function Ar(t){let a=t.rate,e=[`\u3010\u4EE3\u8CFC\u660E\u7D30\u3011${t.name}`];return t.bought.forEach(({item:o,amount:s},n)=>{e.push(`${n+1}. ${o.name}${o.qty>1?` \xD7${o.qty}`:""}\u3000${b(s)}`)}),t.fee&&e.push(`\u4EE3\u8CFC\u8CBB\uFF08${Sa(t)}\uFF09\u3000${b(t.fee)}`),e.push(`\u5408\u8A08 ${b(t.total)}\uFF08\u7D04 NT$ ${ut(t.total*a)}\uFF0C\u532F\u7387 1 JPY = ${ut(a,4)} TWD${t.rateLocked?"\uFF0C\u5DF2\u9396\u5B9A":""}\uFF09`),t.refund&&e.push(`\uFF0A\u91D1\u984D\u70BA\u6263\u9664\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C\uFF08\u5DF2\u6263\u9000\u7A05 ${b(t.refund)}\uFF09`),t.paid>0&&t.paid<t.total&&e.push(`\u5DF2\u6536 ${b(t.paid)}\uFF0C\u5C1A\u5DEE ${b(t.total-t.paid)}`),t.pending.length&&e.push(`\u5C1A\u672A\u8CB7\u5230\uFF1A${t.pending.map(({item:o})=>o.name).join("\u3001")}`),e.join(`
`)}function Wn({item:t,amount:a,refund:e,pay:o},s){return`
  <li class="split-row ${s?"":"is-pending"}" data-id="${t.id}">
    <button type="button" class="check ${s?"on":""}" data-act="toggle" role="checkbox" aria-checked="${s}"
      aria-label="${s?"\u5DF2\u8CB7":"\u6A19\u8A18\u5DF2\u8CB7"}\uFF1A${d(t.name)}">${c("check")}</button>
    <div class="split-main">
      <button type="button" class="split-name" data-act="open">${d(t.name)}${t.qty>1?` <small>\xD7 ${t.qty}</small>`:""}</button>
      <span class="split-at">${s?`${t.purchasedStore?d(t.purchasedStore):"\u672A\u8A18\u9304\u5E97\u5BB6"}${e?` \xB7 \u4ED8 ${b(o)}\uFF0C\u6263\u9000\u7A05 ${b(e)}`:""}`:`\u5F85\u8CB7 \xB7 ${t.anyStore?"\u4E0D\u9650\u5E97\u92EA":t.stores.length?d(t.stores.join("\u3001")):"\u672A\u9078\u5E97\u92EA"}`}</span>
    </div>
    <span class="split-amt ${s?"":"muted"}">${s?"":"\u7D04 "}${b(a)}</span>
    <div class="split-tools">
      <button type="button" class="icon-btn icon-btn-sm" data-act="edit" aria-label="\u7DE8\u8F2F ${d(t.name)}" title="\u7DE8\u8F2F">${c("edit","sm")}</button>
      <button type="button" class="icon-btn icon-btn-sm icon-btn-danger" data-act="delete" aria-label="\u522A\u9664 ${d(t.name)}" title="\u522A\u9664">${c("delete","sm")}</button>
    </div>
  </li>`}function ss(t,a){let e=t.settings.payLog?.[a.name];if(Array.isArray(e)&&e.length)return e;let o=ka(t,a);return o>0?[{amount:o,at:null}]:[]}function Lr(t,a,e,o){if(!t.total&&!t.paid)return"";let s=ss(a,t),n=Math.max(0,t.total-t.paid);return`
  <div class="pay-block">
    ${s.length?`<p class="split-sub">${c("payments","sm")}\u6536\u6B3E\u8A18\u9304</p>
    <ul class="pay-log">
      ${s.map((r,i)=>`<li><span class="muted small">${r.at?jt(r.at):"\u5148\u524D\u8A18\u9304"}</span><strong>${b(r.amount)}</strong>
        <button type="button" class="icon-btn icon-btn-sm" data-pay-del="${i}" aria-label="\u522A\u9664\u9019\u7B46\u6536\u6B3E ${b(r.amount)}" title="\u522A\u9664\u9019\u7B46">${c("close","sm")}</button></li>`).join("")}
    </ul>`:""}
    ${o?"":`<form class="inline-form pay-form" data-pay-add novalidate>
      <label for="pay-${e}">\u8A18\u9304\u6536\u6B3E</label>
      <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="pay-${e}" name="amount" type="number" inputmode="numeric" min="1" step="1" placeholder="\u5C1A\u5DEE ${ut(n)}" autocomplete="off"></div>
      <button type="submit" class="btn btn-slate btn-sm">\u8A18\u9304</button>
    </form>`}
  </div>`}var ns=new Set;function Pr(t,a,e){if(!t.bought.length&&!t.pending.length)return"";let o=a.settings.rate;return`
  <details class="friend-more" data-more ${ns.has(t.name)?"open":""}>
    <summary>${c("tune","sm")}\u4EE3\u8CFC\u8CBB\u8207\u532F\u7387<span class="muted small">${[t.fee?`\u4EE3\u8CFC\u8CBB ${Sa(t)}`:"",t.rateLocked?`\u532F\u7387\u9396\u5B9A ${ut(t.rate,4)}`:""].filter(Boolean).join(" \xB7 ")||"\u672A\u8A2D\u5B9A"}</span></summary>
    <form class="fee-form" data-fee novalidate>
      <div class="field"><label for="fee-pct-${e}">\u4EE3\u8CFC\u8CBB %</label>
        <input id="fee-pct-${e}" name="feePct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${t.feePct||""}" placeholder="0"></div>
      <div class="field"><label for="fee-fixed-${e}">\u56FA\u5B9A\u91D1\u984D\uFF08\u65E5\u5713\uFF09</label>
        <input id="fee-fixed-${e}" name="feeFixed" type="number" inputmode="numeric" min="0" step="100" value="${t.feeFixed||""}" placeholder="0"></div>
      <button type="submit" class="btn btn-slate btn-sm">${c("save","sm")}\u5132\u5B58\u4EE3\u8CFC\u8CBB</button>
    </form>
    <p class="hint">\u4EE3\u8CFC\u8CBB\uFF1D\u5DF2\u8CB7\u5546\u54C1\u91D1\u984D \xD7 \u767E\u5206\u6BD4\uFF0B\u56FA\u5B9A\u91D1\u984D\uFF0C\u6703\u52A0\u9032\u61C9\u6536\u91D1\u984D\u8207\u660E\u7D30\u3002</p>
    <div class="rate-lock">
      <p>${t.rateLocked?`\u63DB\u7B97\u532F\u7387\u5DF2\u9396\u5B9A\uFF1A<strong>1 JPY = ${ut(t.rate,4)} TWD</strong>${t.rateAt?`<span class="muted small">\uFF08${jt(t.rateAt)} \u9396\u5B9A\uFF09</span>`:""}`:`\u63DB\u7B97\u532F\u7387\u8DDF\u96A8\u76EE\u524D\u532F\u7387\uFF1A<strong>1 JPY = ${ut(o,4)} TWD</strong>`}</p>
      ${t.rateLocked?`<button type="button" class="btn btn-ghost btn-sm" data-rate-unlock>${c("undo","sm")}\u89E3\u9664\u9396\u5B9A</button>`:`<button type="button" class="btn btn-ghost btn-sm" data-rate-lock>${c("verified","sm")}\u9396\u5B9A\u76EE\u524D\u532F\u7387</button>`}
    </div>
    <p class="hint">\u9396\u5B9A\u5F8C\uFF0C\u9019\u4F4D\u670B\u53CB\u7684\u53F0\u5E63\u91D1\u984D\u4E0D\u6703\u518D\u96A8\u532F\u7387\u66F4\u65B0\u800C\u8B8A\u52D5\u3002</p>
  </details>`}function Cr(t,a){let e={v:1,n:t.name,t:a,r:t.rate,l:t.rateLocked?1:0,at:Date.now(),i:t.bought.map(({item:r,amount:i})=>[r.name,r.qty,Math.round(i)]),p:t.pending.map(({item:r})=>r.name),g:Math.round(t.goods),f:t.fee,fd:t.fee?Sa(t):"",rf:Math.round(t.refund),pd:Math.round(t.paid)},o=new TextEncoder().encode(JSON.stringify(e)),s="";o.forEach(r=>{s+=String.fromCharCode(r)});let n=btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");return`${location.href.split("#")[0]}#/share/${n}`}function Fr(t,a,e){let{rate:o}=a.settings,s=t.paid,n=t.total>0&&s>=t.total,r=s>0&&s<t.total,i;return n?i=`<span class="badge badge-cyan">${c("check_circle","sm")}\u5DF2\u6536\u9F4A ${b(s)}</span>`:r?i=`<span class="badge badge-warn">\u5DF2\u6536 ${b(s)}\uFF0C\u5C1A\u5DEE ${b(t.total-s)}</span>`:i=t.total?'<span class="badge badge-muted">\u5C1A\u672A\u6536\u6B3E</span>':"",`
  <section class="card friend-card ${n?"is-paid":""}" data-friend="${d(t.name)}" aria-labelledby="fr-${e}">
    <header class="card-head">
      <div class="friend-title">
        <span class="friend-avatar" aria-hidden="true">${d(t.name.slice(0,1))}</span>
        <div>
          <h2 id="fr-${e}" class="section-title-lg">@${d(t.name)}</h2>
          <p class="muted small">\u5DF2\u8CB7 ${t.bought.length} \u4EF6${t.pending.length?` \xB7 \u5F85\u8CB7 ${t.pending.length} \u4EF6\uFF08\u7D04 ${b(t.pendingEst)}\uFF09`:""}</p>
        </div>
      </div>
      <div class="friend-total">
        <span class="k">\u61C9\u6536</span>
        <strong>${b(t.total)}</strong>
        <span class="s">\u2248 ${vt(t.total,t.rate)}${t.rateLocked?" \xB7 \u532F\u7387\u5DF2\u9396\u5B9A":""}</span>
        ${i?`<span class="pay-state">${i}</span>`:""}
      </div>
    </header>
    ${t.bought.length?`<ul class="split-list">${t.bought.map(l=>Wn(l,!0)).join("")}</ul>`:'<p class="muted pad">\u9084\u6C92\u6709\u5DF2\u8CB7\u7684\u5546\u54C1\u3002</p>'}
    ${t.pending.length?`<p class="split-sub">${c("pending","sm")}\u5F85\u8CB7</p><ul class="split-list">${t.pending.map(l=>Wn(l,!1)).join("")}</ul>`:""}
    ${t.fee?`<p class="fee-row"><span>${c("percent","sm")}\u4EE3\u8CFC\u8CBB\uFF08${Sa(t)}\uFF09</span><strong>${b(t.fee)}</strong></p>`:""}
    ${Lr(t,a,e,n)}
    ${Pr(t,a,e)}
    <button type="button" class="btn btn-ghost btn-sm split-extra" data-extra>${c("add_circle","sm")}\u5E6B @${d(t.name)} \u52A0\u8CFC</button>
    ${t.bought.length||t.total?`<div class="friend-actions">
      ${t.bought.length?`<button type="button" class="btn ${n?"btn-ghost":"btn-gold"}" data-copy>${c("content_copy")}\u8907\u88FD\u660E\u7D30</button>`:""}
      ${t.total?n?`<button type="button" class="btn btn-ghost" data-unpaid>${c("undo")}\u53D6\u6D88\u5DF2\u6536\u6B3E</button>`:`<button type="button" class="btn btn-outline" data-paid>${c("check_circle")}${r?`\u6536\u9F4A\u5DEE\u984D ${b(t.total-s)}`:`\u6A19\u8A18\u5DF2\u6536 ${b(t.total)}`}</button>`:""}
      ${t.bought.length?`<button type="button" class="btn btn-ghost" data-link>${c("share")}\u8907\u88FD\u5206\u4EAB\u9023\u7D50</button>`:""}
      ${navigator.share&&t.bought.length?`<button type="button" class="btn btn-ghost" data-share>${c("share")}\u5206\u4EAB\u6587\u5B57</button>`:""}
    </div>`:""}
  </section>`}function Kn({state:t,sum:a}){let e=os(t,a);e.forEach(l=>{l.paid=ka(t,l)});let{rate:o}=t.settings;if(!e.length)return Ce({title:"\u9084\u6C92\u6709\u4EE3\u8CFC\u5546\u54C1",text:"\u65B0\u589E\u5546\u54C1\u6642\u5728\u300C\u5E6B\u8AB0\u8CB7\u300D\u586B\u4E0A\u670B\u53CB\u540D\u5B57\uFF0C\u6216\u76F4\u63A5\u6309\u300C\u81E8\u6642\u52A0\u8CFC\u300D\u8A18\u4E0B\u525B\u5E6B\u670B\u53CB\u8CB7\u7684\u6771\u897F\uFF0C\u9019\u88E1\u5C31\u6703\u81EA\u52D5\u4F9D\u4EBA\u52A0\u7E3D\u3001\u63DB\u7B97\u53F0\u5E63\u3002",actions:`<button type="button" class="btn btn-gold" data-extra-new>${c("add_circle")}\u81E8\u6642\u52A0\u8CFC</button>
                <a class="btn btn-ghost" href="#/list">${c("shopping_bag")}\u56DE\u63A1\u8CB7\u6E05\u55AE</a>`});let s=e.reduce((l,u)=>l+u.total,0),n=e.reduce((l,u)=>l+Math.min(u.paid,u.total),0),r=l=>`NT$ ${ut(e.reduce((u,p)=>u+l(p)*p.rate,0))}`,i=e.reduce((l,u)=>l+u.pending.length,0);return`
  <div class="kpi-grid" role="group" aria-label="\u4EE3\u8CFC\u7D71\u8A08">
    ${Zt({label:"\u4EE3\u8CFC\u7E3D\u984D\uFF08\u5DF2\u8CB7\uFF09",icon:"payments",value:b(s),foot:`<span>\u2248 ${r(l=>l.total)}</span>`})}
    ${Zt({label:"\u5DF2\u6536\u6B3E",icon:"check_circle",value:b(n),foot:`<span>\u2248 ${r(l=>Math.min(l.paid,l.total))}</span>`,tone:"kpi-cyan"})}
    ${Zt({label:"\u5F85\u6536\u6B3E",icon:"pending",value:b(s-n),foot:`<span>\u2248 ${r(l=>l.total-Math.min(l.paid,l.total))}</span>`})}
    ${Zt({label:"\u59D4\u8A17\u7684\u670B\u53CB",icon:"group",value:e.length,unit:" \u4F4D",foot:`<span>${i?`\u9084\u6709 ${i} \u4EF6\u5F85\u8CB7`:"\u5168\u90E8\u8CB7\u9F4A"}</span>`})}
  </div>
  <div class="notice" role="note">${c("info")}<p>\u91D1\u984D\u4F9D<strong>\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C</strong>\u8A08\u7B97\uFF0C\u4EE5\u76EE\u524D\u532F\u7387\u63DB\u7B97\u53F0\u5E63\uFF08\u5DF2\u9396\u5B9A\u532F\u7387\u7684\u670B\u53CB\u9664\u5916\uFF09\u3002</p>
    <details class="notice-more"><summary>\u4E86\u89E3\u8A08\u7B97\u65B9\u5F0F</summary><p>\u9000\u7A05\u70BA\u9810\u4F30\u503C\uFF0C\u5BE6\u969B\u4EE5\u51FA\u5883\u67E5\u9A57\u5F8C\u7684\u9000\u6B3E\u70BA\u6E96\u3002\u6536\u6B3E\u5F8C\u53C8\u52A0\u8CB7\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u300C\u5C1A\u5DEE\u300D\u91D1\u984D\u3002</p></details></div>
  <div class="friend-grid">${e.map((l,u)=>Fr(l,t,u)).join("")}</div>`}function rs(t,a){return os(t,a).filter(e=>e.total>0&&ka(t,e)<e.total).length}function Rr(t,a){let e=a;t.innerHTML=`
    ${Bt({eyebrow:`PROXY LEDGER \xB7 ${d(y.state.settings.tripName)}`,title:"\u4EE3\u8CFC\u5206\u5E33",sub:"\u4E3B\u6E05\u55AE\u6A19\u4E86 @\u670B\u53CB \u7684\u5546\u54C1\u6703\u81EA\u52D5\u6574\u7406\u5728\u9019\u88E1\uFF1B\u53EF\u76F4\u63A5\u52FE\u9078\u3001\u7DE8\u8F2F\uFF0C\u6216\u81E8\u6642\u52A0\u8CFC\uFF0C\u56DE\u98EF\u5E97\u6216\u56DE\u570B\u5F8C\u4E00\u9375\u8907\u88FD\u660E\u7D30\u50B3\u7D66\u670B\u53CB\u3002",subShort:"\u6A19\u4E86 @\u670B\u53CB \u7684\u5546\u54C1\u6703\u6574\u7406\u5728\u9019\u88E1\uFF0C\u8CB7\u5B8C\u4E00\u9375\u8907\u88FD\u660E\u7D30\u50B3\u7D66\u670B\u53CB\u3002",actions:`<button type="button" class="btn btn-gold" data-extra-new>${c("add_circle")}\u81E8\u6642\u52A0\u8CFC</button>`})}
    <div data-region="main">${Kn(e)}</div>`;let o=bt('[data-region="main"]',t),s=l=>{let u=os(e.state,e.sum).find(p=>p.name===l.closest("[data-friend]")?.dataset.friend);return u&&(u.paid=ka(e.state,u)),u};Fe(t);let n=(l,u)=>y.updateSettings({payLog:{...e.state.settings.payLog,[l]:u},paidFriends:{...e.state.settings.paidFriends,[l]:u.reduce((p,h)=>p+h.amount,0)}}),r=(l,u)=>n(l.name,[...ss(e.state,l),{amount:u,at:Date.now()}]),i=(l,u)=>y.updateSettings({friendMeta:{...e.state.settings.friendMeta,[l]:{...e.state.settings.friendMeta?.[l],...u}}});return t.addEventListener("click",async l=>{let u=l.target.closest("button");if(!u||u.closest("[data-id]"))return;if(u.matches("[data-extra-new]")){as();return}let p=s(u);if(!p)return;if(u.matches("[data-extra]")){as(p.name);return}if(u.matches("[data-paid]")){r(p,Math.max(0,p.total-p.paid)),N({title:`@${p.name} \u5DF2\u6536\u9F4A`,message:`\u5171 ${b(p.total)}`,tone:"muted",duration:2500});return}if(u.matches("[data-unpaid]")){n(p.name,[]);return}if(u.matches("[data-rate-lock]")){i(p.name,{rate:e.state.settings.rate,rateAt:Date.now()}),N({title:`\u5DF2\u9396\u5B9A @${p.name} \u7684\u532F\u7387`,message:`1 JPY = ${ut(e.state.settings.rate,4)} TWD`,tone:"muted",duration:3e3});return}if(u.matches("[data-rate-unlock]")){i(p.name,{rate:0,rateAt:null}),N({title:`@${p.name} \u6539\u56DE\u8DDF\u96A8\u76EE\u524D\u532F\u7387`,tone:"muted",duration:3e3});return}if(u.matches("[data-link]")){let g=Cr(p,e.state.settings.tripName);try{await navigator.clipboard.writeText(g),N({title:`\u5DF2\u8907\u88FD @${p.name} \u7684\u5206\u4EAB\u9023\u7D50`,message:"\u5C0D\u65B9\u6253\u958B\u9023\u7D50\u5C31\u80FD\u770B\u5230\u9019\u4EFD\u660E\u7D30\uFF08\u552F\u8B80\uFF0C\u5167\u5BB9\u662F\u73FE\u5728\u9019\u4E00\u523B\u7684\u5FEB\u7167\uFF09\u3002",tone:"muted",duration:4e3})}catch{if(navigator.share)try{await navigator.share({title:`\u4EE3\u8CFC\u660E\u7D30\uFF1A${p.name}`,url:g})}catch{}else N({title:"\u7121\u6CD5\u8907\u88FD\u9023\u7D50",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\u3002",tone:"error"})}return}if(u.dataset.payDel!==void 0){let g=ss(e.state,p).filter((A,m)=>m!==Number(u.dataset.payDel));n(p.name,g),N({title:"\u5DF2\u522A\u9664\u4E00\u7B46\u6536\u6B3E",tone:"muted",duration:2500});return}let h=Ar(p,e.state.settings.rate);if(u.matches("[data-copy]"))try{await navigator.clipboard.writeText(h),N({title:`\u5DF2\u8907\u88FD @${p.name} \u7684\u660E\u7D30`,message:"\u8CBC\u5230 LINE \u6216\u8A0A\u606F\u50B3\u7D66\u670B\u53CB\u5373\u53EF\u3002",tone:"muted",duration:3e3})}catch{N({title:"\u7121\u6CD5\u8907\u88FD",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\u3002",tone:"error"})}else if(u.matches("[data-share]"))try{await navigator.share({title:`\u4EE3\u8CFC\u660E\u7D30\uFF1A${p.name}`,text:h})}catch{}}),t.addEventListener("toggle",l=>{if(!l.target.matches?.("[data-more]"))return;let u=l.target.closest("[data-friend]")?.dataset.friend;l.target.open?ns.add(u):ns.delete(u)},!0),t.addEventListener("submit",l=>{let u=l.target.closest("[data-fee]");if(u){l.preventDefault();let $=s(u);if(!$)return;let v=Math.min(100,Math.max(0,Number(u.elements.feePct.value)||0)),x=Math.max(0,Math.round(Number(u.elements.feeFixed.value)||0)),J=$.name;i(J,{feePct:v,feeFixed:x}),N({title:`@${J} \u7684\u4EE3\u8CFC\u8CBB\u5DF2\u66F4\u65B0`,message:v||x?[v?`${v}%`:"",x?b(x):""].filter(Boolean).join(" + "):"\u4E0D\u6536\u4EE3\u8CFC\u8CBB",tone:"muted",duration:3e3}),o.querySelector(`[data-friend="${CSS.escape(J)}"] [data-fee] button`)?.focus({preventScroll:!0});return}let p=l.target.closest("[data-pay-add]");if(!p)return;l.preventDefault();let h=s(p),g=Math.round(Number(p.elements.amount.value));if(!h)return;if(!(g>0)){N({title:"\u8ACB\u8F38\u5165\u6536\u6B3E\u91D1\u984D",message:"\u8F38\u5165\u9019\u6B21\u6536\u5230\u7684\u65E5\u5713\u91D1\u984D\uFF0C\u4F8B\u5982 10000\u3002",tone:"error"}),p.elements.amount.focus();return}let A=h.name,m=h.total-h.paid-g;r(h,g),N({title:`\u5DF2\u8A18\u9304 @${A} \u4ED8 ${b(g)}`,message:m>0?`\u5C1A\u5DEE ${b(m)}`:m<0?`\u591A\u6536 ${b(-m)}`:"\u5DF2\u6536\u9F4A",tone:"muted",duration:3e3}),o.querySelector(`[data-friend="${CSS.escape(A)}"] :is([name="amount"], [data-unpaid])`)?.focus({preventScroll:!0})}),{update(l){e=l;let u=document.activeElement,p=u?.closest?.("[data-friend]")?.dataset.friend,h=u?.closest?.("[data-id]"),g=null;if(p&&h)g=`[data-id="${h.dataset.id}"] [data-act="${u.dataset.act}"]`;else if(p){let m=["data-paid","data-unpaid","data-copy","data-share","data-link","data-extra","data-rate-lock","data-rate-unlock"].find(v=>u.hasAttribute(v)),$={"data-paid":"[data-unpaid], [data-paid]","data-unpaid":"[data-paid], [data-unpaid]","data-rate-lock":"[data-rate-unlock]","data-rate-unlock":"[data-rate-lock]"}[m];g=`[data-friend="${CSS.escape(p)}"] :is(${$??`[${m}]`})`}let A=Ee(o,".kpi-value");o.innerHTML=Kn(e),Me(o,".kpi-value",A),g&&bt(g,o)?.focus({preventScroll:!0})}}}var ls={};fe(ls,{mount:()=>Nr});var _t={price:1e4,includesTax:!0,taxRate:10,discountPct:0,feePct:null},Ea=1e4;function Yn({state:t}){let a=t.settings,e=a.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":a.rateSource==="api"?a.rateProvider||"\u516C\u958B\u532F\u7387 API":"\u9810\u8A2D\u503C\uFF08\u5C1A\u672A\u9023\u7DDA\u66F4\u65B0\uFF09";return`
  <section class="card rate-card" aria-labelledby="rate-title">
    <div class="rate-glow" aria-hidden="true"></div>
    <p class="eyebrow eyebrow-light">${c("currency_exchange","sm")}EXCHANGE RATE \xB7 \u532F\u7387</p>
    <h2 id="rate-title" class="sr-only">\u532F\u7387</h2>
    <p class="rate-big"><span>1 JPY =</span> <strong>${ut(a.rate,4)}</strong> <span>TWD</span></p>
    <p class="rate-src">${d(e)}${a.rateUpdatedAt?` \xB7 ${jt(a.rateUpdatedAt)}`:""}</p>
    <p class="rate-note">\u5E02\u5834\u53C3\u8003\u532F\u7387\uFF0C\u5BE6\u969B\u63DB\u532F\u6216\u5237\u5361\u91D1\u984D\u6703\u56E0\u9280\u884C\u532F\u5DEE\u3001\u624B\u7E8C\u8CBB\u800C\u4E0D\u540C\u3002</p>
    <div class="rate-actions">
      <button type="button" class="btn btn-gold btn-sm" data-sync>${c("sync","sm")}\u6293\u6700\u65B0\u532F\u7387</button>
      <form class="rate-manual" data-manual>
        <label for="rate-input" class="sr-only">\u624B\u52D5\u8F38\u5165\u532F\u7387</label>
        <input id="rate-input" type="number" inputmode="decimal" step="0.0001" min="0.01" max="5" placeholder="${ut(a.rate,4)}">
        <button type="submit" class="btn btn-ghost-light btn-sm">${c("tune","sm")}\u5957\u7528</button>
      </form>
    </div>
    <div class="converter">
      <label for="conv-yen">\u63DB\u7B97</label>
      <div class="input-affix input-dark"><span aria-hidden="true">\xA5</span><input id="conv-yen" type="number" inputmode="numeric" min="0" value="${Ea}"></div>
      <span class="conv-eq" aria-hidden="true">${c("sync_alt")}</span>
      <output for="conv-yen" class="conv-out" data-conv>${vt(Ea,a.rate)}</output>
    </div>
  </section>`}function Vn({state:t,sum:a,rate:e}){let o=t.settings,s=o.budget?a.paid/o.budget*100:0,n=o.budget?a.pending/o.budget*100:0,r=a.remaining<0;return`
  <section class="card budget-card" aria-labelledby="budget-title">
    <div class="card-head">
      <h2 id="budget-title" class="section-title">${c("account_balance_wallet","sm")}\u9810\u7B97\u7E3D\u89BD</h2>
      <span class="badge ${r?"badge-danger":"badge-cyan"}">${c(r?"warning":"shield","sm")}${r?a.paid>o.budget?"\u5DF2\u8D85\u51FA\u9810\u7B97":"\u8CB7\u5B8C\u6703\u8D85\u652F":"\u9810\u7B97\u5B89\u5168"}</span>
    </div>
    <p class="muted">\u9810\u7B97 ${b(o.budget)}\uFF08\u2248 ${vt(o.budget,e)}\uFF09</p>
    <div class="dual-stat">
      <div class="is-now"><span class="k">\u76EE\u524D\u5DF2\u652F\u4ED8</span><span class="v">${b(a.paid)}</span>
        <span class="s">\u2248 ${vt(a.paid,e)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetUsedPct*100)}%</span></div>
      <div><span class="k">\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30</span><span class="v">${b(a.pay)}</span>
        <span class="s">\u2248 ${vt(a.pay,e)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetPlannedPct*100)}%</span></div>
    </div>
    <div class="stack-bar" role="img" aria-label="\u5DF2\u652F\u4ED8 ${b(a.paid)}\uFF0C\u5F85\u8CB7 ${b(a.pending)}\uFF0C\u9810\u7B97 ${b(o.budget)}">
      <span class="seg-paid" style="--w:${Math.min(100,s)}%"></span>
      <span class="seg-later" style="--w:${Math.max(0,Math.min(100-Math.min(100,s),n))}%"></span>
    </div>
    <dl class="legend-grid">
      <div><dt><i class="dot dot-gold"></i>\u5DF2\u652F\u4ED8\uFF08${a.purchasedCount} \u4EF6\uFF09</dt><dd>${b(a.paid)}</dd></div>
      <div><dt><i class="dot dot-later"></i>\u5F85\u8CB7\uFF08${a.pendingCount} \u4EF6\uFF09</dt><dd>${b(a.pending)}</dd></div>
      <div class="${r?"text-danger":""}"><dt><i class="dot dot-slate"></i>${r?"\u8CB7\u5B8C\u8D85\u652F":"\u8CB7\u5B8C\u5269\u9918"}</dt><dd>${b(Math.abs(a.remaining))} <small>(${vt(Math.abs(a.remaining),e)})</small></dd></div>
    </dl>
    <form class="inline-form" data-budget>
      <label for="budget-input">\u4FEE\u6539\u9810\u7B97</label>
      <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="budget-input" type="number" inputmode="numeric" min="0" step="1000" value="${o.budget}"></div>
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
    </form>
    <form class="inline-form" data-rebate>
      <label for="rebate-input">\u5237\u5361\u6DE8\u56DE\u994B %</label>
      <input id="rebate-input" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${o.cardRebatePct}">
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
      ${o.cardRebatePct?`<p class="muted small grow">\u5168\u90E8\u5237\u5361\u7D04\u53EF\u56DE\u994B ${vt(a.rebate,e)}</p>`:""}
    </form>
  </section>`}var Ta="\u672A\u8A18\u9304\u65E5\u671F";function Xn({state:t,sum:a,rate:e}){if(!t.items.length)return"";let o=new Map,s=new Map,n={self:{paid:0,pending:0},proxy:{paid:0,pending:0}};for(let g of t.items){let A=a.byItem.get(g.id).pay,m=o.get(g.category)??{paid:0,pending:0};if(m[g.purchased?"paid":"pending"]+=A,o.set(g.category,m),n[g.buyFor?"proxy":"self"][g.purchased?"paid":"pending"]+=A,g.purchased){let $=g.purchasedAt?ne(g.purchasedAt):Ta;s.set($,(s.get($)??0)+A)}}let r=[...o.entries()].map(([g,A])=>({...Vt(g),...A,all:A.paid+A.pending})).sort((g,A)=>A.all-g.all),i=Math.max(...r.map(g=>g.all),1),l=[...s.entries()].sort((g,A)=>(g[0]===Ta)-(A[0]===Ta)||g[0].localeCompare(A[0])),u=g=>g===Ta?g:g.slice(5).replace("-","/"),p=Math.max(...l.map(g=>g[1]),1),h=(g,A)=>`<div><dt>${g}</dt><dd>${b(A.paid)}<small>\u5DF2\u4ED8${A.pending?`\uFF0C\u5F85\u8CB7 ${b(A.pending)}`:""}</small></dd></div>`;return`
  <section class="card analysis-card" aria-labelledby="analysis-title">
    <div class="card-head">
      <h2 id="analysis-title" class="section-title">${c("category","sm")}\u82B1\u8CBB\u5206\u6790</h2>
      <span class="legend"><i class="dot dot-gold"></i>\u5DF2\u4ED8<i class="dot dot-later"></i>\u5F85\u8CB7</span>
    </div>
    <h3 class="analysis-sub">\u4F9D\u5206\u985E</h3>
    <ul class="analysis-list">
      ${r.map(g=>`<li>
        <p class="row-between"><span>${c(g.icon,"sm")}${d(g.label)}</span><span><strong>${b(g.paid)}</strong>${g.pending?`<small> \uFF0B\u5F85\u8CB7 ${b(g.pending)}</small>`:""}</span></p>
        ${re([{value:g.paid,tone:"paid"},{value:g.pending,tone:"later"}],i,`${g.label}\uFF1A\u5DF2\u4ED8 ${b(g.paid)}\uFF0C\u5F85\u8CB7 ${b(g.pending)}`)}
      </li>`).join("")}
    </ul>
    <h3 class="analysis-sub">\u81EA\u7528\u8207\u4EE3\u8CFC</h3>
    <dl class="analysis-dl">
      ${h("\u81EA\u7528",n.self)}
      ${h("\u5E6B\u670B\u53CB\u4EE3\u8CFC",n.proxy)}
    </dl>
    <h3 class="analysis-sub">\u4F9D\u8CFC\u8CB7\u65E5\u671F</h3>
    ${l.length?`<ul class="analysis-list">
      ${l.map(([g,A])=>`<li>
        <p class="row-between"><span>${u(g)}</span><span><strong>${b(A)}</strong><small> \u2248 ${vt(A,e)}</small></span></p>
        ${re([{value:A,tone:"paid"}],p,`${u(g)} \u82B1\u8CBB ${b(A)}`)}
      </li>`).join("")}
    </ul>`:'<p class="muted small">\u9084\u6C92\u6709\u5DF2\u8CB7\u7684\u5546\u54C1\u3002</p>'}
    <p class="muted small">\u91D1\u984D\u70BA\u5E97\u982D\u652F\u4ED8\u7684\u542B\u7A05\u50F9\uFF0C\u5C1A\u672A\u6263\u9664\u9000\u7A05\u3002</p>
  </section>`}function Qn({state:t,sum:a,rate:e}){let o=t.settings,s=[...a.groups.values()].filter(r=>r.store&&r.hasTaxFreeItems).sort((r,i)=>Number(i.eligible)-Number(r.eligible)||i.eligibleExcl-r.eligibleExcl),n=r=>r.items.reduce((i,l)=>i+a.byItem.get(l.id).refund,0);return`
  <section class="card refund-card" aria-labelledby="refund-title">
    <div class="refund-hero">
      <div>
        <p class="eyebrow eyebrow-light">${c("savings","sm")}TAX REFUND \xB7 \u9000\u7A05</p>
        <h2 id="refund-title" class="refund-big">\u9810\u4F30\u9000\u7A05 ${b(a.refund)}</h2>
      </div>
      <p class="refund-twd">\u2248 ${vt(a.refund,e)}</p>
    </div>
    ${s.length?`<ul class="refund-list">
      ${s.map(r=>`
        <li>
          <div class="row-between"><strong>${d(r.store)}${r.date?` <small>${r.date.slice(5).replace("-","/")}</small>`:""}</strong>
            ${r.eligible?`<span class="badge badge-cyan">\u9000 ${b(n(r))}</span>`:`<span class="badge badge-warn">\u5DEE ${b(r.shortfall)}</span>`}</div>
          ${oe(r.progress,{label:`${r.store} \u514D\u7A05\u9580\u6ABB`,tone:r.eligible?"cyan":"gold"})}
          <p class="muted small">\u672A\u7A05\u5408\u8A08 ${b(r.eligibleExcl)} / ${b(dt)}</p>
        </li>`).join("")}
    </ul>`:'<p class="muted pad">\u9084\u6C92\u6709\u52FE\u9078\u300C\u8FA6\u7406\u514D\u7A05\u300D\u4E14\u586B\u4E86\u5E97\u5BB6\u7684\u5546\u54C1\u3002</p>'}
  </section>`}function Zn(t){let a=_t.feePct??y.state.settings.refundFeePct,e=Cs({..._t,feePct:a});return`
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u91D1\u984D\uFF08\u6298\u6263\u5F8C\uFF09</dt><dd>${b(e.excl)}</dd></div>
      <div><dt>\u6D88\u8CBB\u7A05 ${_t.taxRate}%</dt><dd>${b(e.tax)}</dd></div>
      <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${b(e.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05${a?`\uFF08\u6263\u624B\u7E8C\u8CBB ${a}%\uFF09`:""}</dt><dd>${e.eligible?`\u2212 ${b(e.refund)}`:"\u672A\u9054\u9580\u6ABB"}</dd></div>
    </dl>
    <div class="ledger-total">
      <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${b(e.net)}</span></div>
      <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${vt(e.net,t)}</span></div>
    </div>
    <p class="calc-status ${e.eligible?"ok":"warn"}">${c(e.eligible?"celebration":"info","sm")}${e.eligible?`\u6BD4\u539F\u50F9\u7701\u4E0B ${b(e.saved)}\uFF08\u2248 ${vt(e.saved,t)}\uFF09`:`\u55AE\u7B46\u672A\u7A05\u672A\u6EFF ${b(dt)}\uFF0C\u9700\u8207\u540C\u5E97\u540C\u65E5\u5176\u4ED6\u5546\u54C1\u5408\u4F75\u8A08\u7B97`}</p>`}function Ir({rate:t}){let a=[0,5,7,10];return`
  <section class="card calc-card" aria-labelledby="calc-title">
    <div class="card-head">
      <h2 id="calc-title" class="section-title">${c("calculate","sm")}\u55AE\u7B46\u9000\u7A05\u8A66\u7B97\u76E4</h2>
    </div>
    <div class="calc-layout">
      <form class="calc-form" data-calc-form>
        <div class="field">
          <label for="qc-price">\u6A19\u50F9\uFF08\u65E5\u5713\uFF09</label>
          <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="qc-price" name="price" type="number" inputmode="numeric" min="0" value="${_t.price}"></div>
        </div>
        <div class="grid-2 tight">
          <div class="field"><span class="label" id="qc-l1">\u6A19\u50F9</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l1">
              <label class="pill"><input type="radio" name="includesTax" value="true" ${_t.includesTax?"checked":""}><span>\u542B\u7A05</span></label>
              <label class="pill"><input type="radio" name="includesTax" value="false" ${_t.includesTax?"":"checked"}><span>\u672A\u7A05</span></label>
            </div></div>
          <div class="field"><span class="label" id="qc-l2">\u7A05\u7387</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l2">
              <label class="pill"><input type="radio" name="taxRate" value="10" ${_t.taxRate===10?"checked":""}><span>10%</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="8" ${_t.taxRate===8?"checked":""}><span>8% \u98DF\u54C1</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="1" ${_t.taxRate===1?"checked":""}><span>1% \u98DF\u54C1</span></label>
            </div>
            <p class="hint">1% \u98DF\u54C1\u70BA 2027/4 \u8D77\u7684\u7A05\u7387\uFF0C\u6CD5\u6848\u5BE9\u8B70\u4E2D\u3002</p></div>
        </div>
        <div class="field"><span class="label" id="qc-l3">\u6298\u6263\uFF0F\u512A\u60E0\u5238</span>
          <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l3">
            ${a.map(e=>`<label class="pill"><input type="radio" name="discountPct" value="${e}" ${_t.discountPct===e?"checked":""}><span>${e?`${e}%`:"\u7121"}</span></label>`).join("")}
          </div>
        </div>
        <div class="field">
          <label for="qc-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
          <input id="qc-fee" name="feePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${_t.feePct??""}" placeholder="\u9810\u8A2D ${y.state.settings.refundFeePct}">
        </div>
      </form>
      <div class="calc-out" aria-live="polite" data-calc-out>${Zn(t)}</div>
    </div>
  </section>`}function _r(){return`
  <section class="card guide-link" aria-labelledby="guide-title">
    <div>
      <p class="eyebrow">${c("payments","sm")}TAX REFUND GUIDE</p>
      <h2 id="guide-title" class="section-title-lg">\u9000\u7A05\u6307\u5357\uFF1A2026/11 \u65B0\u5236\u600E\u9EBC\u9000</h2>
      <p class="muted small">\u6D41\u7A0B\u3001\u9000\u7A05\u516C\u53F8\u3001\u6A5F\u5834\u73FE\u91D1\u3001\u4FE1\u7528\u5361\u3001\u624B\u7E8C\u8CBB\u8207\u65B0\u5236\u5EA6\uFF0C\u6574\u7406\u5728\u7368\u7ACB\u7684\u4E00\u9801\u3002</p>
    </div>
    <a class="btn btn-ghost" href="#/guide">${c("payments")}\u6253\u958B\u9000\u7A05\u6307\u5357</a>
  </section>`}function Nr(t,a){let e=a;t.innerHTML=`
    ${Bt({eyebrow:`BUDGET & TAX \xB7 ${d(y.state.settings.tripName)}`,title:"\u9810\u7B97\u532F\u7387",sub:"\u5373\u6642\u63DB\u7B97\u53F0\u5E63\u3001\u638C\u63E1\u9810\u7B97\u9918\u984D\uFF0C\u4E26\u9810\u4F30\u6BCF\u5BB6\u5E97\u80FD\u9000\u591A\u5C11\u6D88\u8CBB\u7A05\u3002",subShort:"\u63DB\u7B97\u53F0\u5E63\u3001\u638C\u63E1\u9810\u7B97\uFF0C\u9810\u4F30\u6BCF\u5BB6\u5E97\u80FD\u9000\u591A\u5C11\u7A05\u3002"})}
    ${ha([{id:"rate-title",label:"\u532F\u7387"},{id:"budget-title",label:"\u9810\u7B97"},{id:"analysis-title",label:"\u5206\u6790"},{id:"calc-title",label:"\u8A66\u7B97"},{id:"refund-title",label:"\u9000\u7A05"},{id:"guide-title",label:"\u9000\u7A05\u6307\u5357"}])}
    <div class="budget-layout">
      <div class="col">
        <div data-region="rate">${Yn(e)}</div>
        <div data-region="budget">${Vn(e)}</div>
        <div data-region="analysis">${Xn(e)}</div>
        ${Ir(e)}
      </div>
      <div class="col">
        <div data-region="refund">${Qn(e)}</div>
        ${_r()}
      </div>
    </div>`;let o=()=>{bt("[data-calc-out]",t).innerHTML=Zn(e.rate)};t.addEventListener("click",async n=>{let r=n.target.closest("[data-sync]");if(!r)return;r.disabled=!0,r.setAttribute("aria-busy","true");let i=await Se({force:!0});i.ok?N({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${ut(i.rate,4)} TWD\uFF08${d(i.provider)}\uFF09`,tone:"muted",duration:3e3}):N({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u532F\u7387\u3002",tone:"error"});let l=bt("[data-sync]",t);l&&(l.disabled=!1,l.removeAttribute("aria-busy"),l.focus())}),t.addEventListener("submit",n=>{n.preventDefault();let r=n.target;if(r.matches("[data-manual]")){let i=Number(r.querySelector("input").value);if(!(i>0&&i<5)){N({title:"\u532F\u7387\u683C\u5F0F\u4E0D\u5C0D",message:"\u8ACB\u8F38\u5165 0 \u5230 5 \u4E4B\u9593\u7684\u6578\u5B57\uFF0C\u4F8B\u5982 0.2150\u3002",tone:"error"});return}aa(i),N({title:"\u5DF2\u6539\u7528\u624B\u52D5\u532F\u7387",message:`1 JPY = ${ut(i,4)} TWD`,tone:"muted",duration:3e3})}else if(r.matches("[data-budget]")){let i=Number(r.querySelector("input").value);i>=0&&(y.updateSettings({budget:i}),N({title:"\u9810\u7B97\u5DF2\u66F4\u65B0",message:b(i),tone:"muted",duration:2500}))}else if(r.matches("[data-rebate]")){let i=Number(r.querySelector("input").value);i>=0&&(y.updateSettings({cardRebatePct:i}),N({title:"\u56DE\u994B\u7387\u5DF2\u66F4\u65B0",message:`${i}%`,tone:"muted",duration:2500}))}}),t.addEventListener("input",n=>{let r=n.target;if(r.id==="conv-yen"&&(Ea=Number(r.value)||0,bt("[data-conv]",t).textContent=vt(Ea,e.rate)),r.closest("[data-calc-form]")){let i=new FormData(r.form);_t.price=Number(i.get("price"))||0,_t.includesTax=i.get("includesTax")==="true",_t.taxRate=Number(i.get("taxRate")),_t.discountPct=Number(i.get("discountPct")),_t.feePct=i.get("feePct")===""?null:Number(i.get("feePct")),o()}}),t.addEventListener("change",n=>{n.target.closest("[data-calc-form]")&&n.target.dispatchEvent(new Event("input",{bubbles:!0}))});let s=ba(t);return{destroy(){s.destroy()},update(n){e=n;for(let[r,i]of[["rate",Yn],["budget",Vn],["analysis",Xn],["refund",Qn]]){let l=bt(`[data-region="${r}"]`,t);if(!l.contains(document.activeElement)||document.activeElement.tagName==="BUTTON"){let u=document.activeElement?.matches?.("[data-sync]")&&l.contains(document.activeElement)?"[data-sync]":null;l.innerHTML=i(e),u&&bt(u,l)?.focus()}}o()}}}var us={};fe(us,{mount:()=>Br});var Dr=[{id:"taxfree",tone:"danger",icon:"priority_high",title:"\u514D\u7A05\u5546\u54C1\u5148\u67E5\u9A57\u3001\u518D\u8A17\u904B",points:["2026/11/1 \u8D77\u7684\u9000\u7A05\u65B0\u5236\uFF0C\u8981\u5728<strong>\u8CFC\u8CB7\u5F8C 90 \u5929\u5167\u3001\u8A17\u904B\u884C\u674E\u4E4B\u524D</strong>\u6301\u8B77\u7167\u5230\u6A5F\u53F0\u8FA6\u7406\u3002","\u6D77\u95DC\u4EE5<strong>\u6536\u64DA\u70BA\u55AE\u4F4D</strong>\u67E5\u9A57\uFF0C\u540C\u4E00\u5F35\u6536\u64DA\u7684\u5546\u54C1\u8981\u5168\u90E8\u653E\u5728\u597D\u62FF\u51FA\u4F86\u7684\u4F4D\u7F6E\u3002","\u5C11\u4E00\u4EF6\uFF0C\u6574\u5F35\u6536\u64DA\u90FD\u4E0D\u80FD\u9000\u3002"]},{id:"battery",tone:"danger",icon:"battery_alert",title:"\u884C\u52D5\u96FB\u6E90\uFF1A\u6BCF\u4EBA\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u7981\u7528",points:["\u65E5\u672C\u51FA\u767C\u822A\u73ED\u81EA 2026/4/24 \u8D77\u3001\u53F0\u7063\u6C11\u822A\u5C40\u81EA 2026/4/8 \u8D77\u9069\u7528\u3002","\u6BCF\u4EBA\u6700\u591A\u5E36 2 \u9846\uFF08160Wh \u4EE5\u4E0B\uFF0C\u8D85\u904E 100Wh \u9700\u822A\u7A7A\u516C\u53F8\u540C\u610F\uFF09\u3002","<strong>\u6A5F\u4E0A\u4E0D\u80FD\u4F7F\u7528\u3001\u4E5F\u4E0D\u80FD\u5145\u96FB</strong>\uFF0C\u4E0D\u53EF\u8A17\u904B\u3002","\u8ACB\u653E\u5728\u8EAB\u908A\uFF0C\u4E0D\u8981\u653E\u9032\u4E0A\u65B9\u7F6E\u7269\u6AC3\u3002"]},{id:"liquid",tone:"warn",icon:"water_drop",title:"\u6DB2\u9AD4\u3001\u5200\u526A",points:["\u624B\u63D0\u6DB2\u9AD4\u55AE\u74F6\u901A\u5E38\u9650 100ml\u3002","\u5200\u526A\u53EA\u80FD\u8A17\u904B\u3002","\u5BE6\u969B\u9650\u5236\u4EE5\u822A\u7A7A\u516C\u53F8\u8207\u6A5F\u5834\u516C\u544A\u70BA\u6E96\u3002"]},{id:"customs",tone:"warn",icon:"shield",title:"\u56DE\u53F0\u7063\u5165\u5883\uFF1A\u514D\u7A05\u984D\u8207\u7981\u5E36\u54C1",points:["\u884C\u674E\u514D\u7A05\u984D <strong>NT$35,000</strong>\uFF1B\u9152\u985E <strong>1.5 \u516C\u5347</strong>\uFF08\u5E74\u6EFF 18 \u6B72\uFF09\u3002","<strong>\u8089\u88FD\u54C1\u4E00\u5F8B\u4E0D\u80FD\u5E36</strong>\uFF0C\u5305\u62EC\u8089\u4E7E\u3001\u8089\u9B06\u3001\u9999\u8178\u3001\u542B\u8089\u584A\u6216\u8089\u5305\u7684\u6CE1\u9EB5\uFF08\u4F8B\u5982\u4E00\u98A8\u5802\u3001AFURI \u67DA\u5B50\u62C9\u9EB5\uFF09\uFF0C\u9055\u8005\u7F70 NT$1 \u842C\uFF5E100 \u842C\u3002","\u65B0\u9BAE\u6C34\u679C\u4E5F\u4E0D\u80FD\u5E36\u3002","\u5E36\u5230\u4E86\u8ACB\u5728\u5165\u5883\u524D\u4E1F\u9032\u6AA2\u75AB\u7BB1\u3002","\u4E0D\u78BA\u5B9A\u7684\u8A71\u5230\u52D5\u690D\u7269\u6AA2\u75AB\u6AC3\u53F0\u4E3B\u52D5\u7533\u5831\uFF0C\u4E0D\u5408\u683C\u53EA\u8981\u92B7\u6BC0\u5C31\u4E0D\u6703\u53D7\u7F70\u3002"]},{id:"pack",tone:"ok",icon:"check",title:"\u91CD\u7269\u653E\u5E95\u5C64\u3001\u6613\u788E\u653E\u4E2D\u592E",points:["\u9152\u985E\u3001\u74F6\u88DD\u4FDD\u990A\u54C1\u5305\u597D\uFF0C\u653E\u9760\u8FD1\u8F2A\u5B50\u7684\u5E95\u90E8\u3002","\u6613\u788E\u54C1\u653E\u4E2D\u592E\uFF0C\u56DB\u5468\u7528\u8863\u7269\u7DE9\u885D\u3002"]}],ds=new Set;function qr(t,a){let e=Gt(t);return`
  <li class="pack-item ${t.packed?"is-packed":""}" data-id="${t.id}">
    <button type="button" class="check ${t.packed?"on":""}" data-k="pack" role="checkbox" aria-checked="${t.packed}" aria-label="\u5DF2\u88DD\u7BB1\uFF1A${d(t.name)}">${c("check")}</button>
    <div class="pack-main">
      <button type="button" class="pack-name" data-k="open">${d(t.name)}${t.qty>1?` <small>\xD7 ${t.qty}</small>`:""}</button>
      <p class="pack-meta">
        <span>${c(Vt(t.category).icon,"sm")}${t.weightKg?Wt(t.weightKg*t.qty):'<span class="text-warn">\u672A\u586B\u91CD\u91CF</span>'}</span>
        ${t.buyFor?`<span class="who-tag">@${d(t.buyFor)}</span>`:""}
        ${t.liquid?`<span class="badge badge-cyan">${c("water_drop","sm")}\u6DB2\u9AD4</span>`:""}
        ${t.blade?`<span class="badge badge-warn">${c("content_cut","sm")}\u5200\u526A</span>`:""}
        ${t.battery?`<span class="badge badge-danger">${c("battery_alert","sm")}\u92F0\u96FB\u6C60</span>`:""}
        ${t.fragile?`<span class="badge badge-warn">${c("wine_bar","sm")}\u6613\u788E</span>`:""}
        ${t.taxFree&&t.purchasedStore?`<span class="badge badge-gold">${c("receipt_long","sm")}\u514D\u7A05\u54C1</span>`:""}
      </p>
    </div>
    ${a?`<button type="button" class="btn btn-ghost btn-xs" data-k="move" aria-label="\u628A ${d(t.name)} \u6539\u653E${e==="checked"?"\u624B\u63D0":"\u8A17\u904B"}">${c("swap_horiz","sm")}${e==="checked"?"\u8A17\u904B":"\u624B\u63D0"}</button>`:""}
  </li>`}function cs(t,a,e,o,s,n,r=!1){if(!n.length)return"";let i=n.filter(l=>l.packed).length;return`
  <section class="pack-sec pack-${o}" aria-labelledby="pk-${t}">
    <header class="pack-sec-head">
      <h2 id="pk-${t}" class="section-title">${c(e,"sm")}${a}</h2>
      <span class="badge ${i===n.length?"badge-cyan":"badge-muted"}">${i} / ${n.length} \u5DF2\u88DD\u7BB1</span>
    </header>
    <p class="hint">${s}</p>
    <ul class="pack-list">${n.map(l=>qr(l,r)).join("")}</ul>
  </section>`}var jr={checked:"\u8A17\u904B",carry:"\u624B\u63D0",none:"\u4E0D\u653E\u884C\u674E"};function Or(t,a){let e=t.settings.inspectedGroups||{},o=[...a.groups.values()].map(n=>({g:n,items:n.items.filter(r=>r.purchased&&r.taxFree)})).filter(n=>n.g.eligible&&n.g.store&&n.items.length);if(!o.length)return"";let s=o.filter(n=>!e[n.g.key]).length;return`
  <section class="card inspect-card" aria-labelledby="pk-inspect">
    <header class="card-head">
      <h2 id="pk-inspect" class="section-title">${c("receipt_long","sm")}\u514D\u7A05\u54C1\u67E5\u9A57\u6E05\u55AE</h2>
      <span class="badge ${s?"badge-warn":"badge-cyan"}">${s?`${s} \u5F35\u6536\u64DA\u5F85\u67E5\u9A57`:"\u5168\u90E8\u67E5\u9A57\u5B8C\u6210"}</span>
    </header>
    <p class="muted small">\u4F9D\u6536\u64DA\uFF08\u540C\u4E00\u5BB6\u5E97\u3001\u540C\u4E00\u5929\uFF09\u5206\u7D44\u3002\u5230\u6A5F\u5834\u5148\u8FA6\u67E5\u9A57\u3001\u518D\u8A17\u904B\uFF1B\u540C\u4E00\u7D44\u7684\u5546\u54C1\u8981\u5168\u90E8\u62FF\u5F97\u51FA\u4F86\u3002</p>
    <ul class="inspect-list">
      ${o.map(({g:n,items:r})=>{let i=r.reduce((u,p)=>u+a.byItem.get(p.id).refund,0),l=r.some(u=>Gt(u)==="checked");return`
        <li class="inspect-group ${e[n.key]?"is-done":""}">
          <div class="inspect-head">
            <p class="inspect-title"><strong>${d(n.store)}</strong>${n.date?` <small>${n.date.slice(5).replace("-","/")}</small>`:""}
              <span class="badge badge-gold">\u9000 ${b(i)}</span></p>
            <label class="inspect-check"><input type="checkbox" data-insp="${d(n.key)}" ${e[n.key]?"checked":""}><span>\u5DF2\u67E5\u9A57</span></label>
          </div>
          <ul class="inspect-items">
            ${r.map(u=>`<li><span>${d(u.name)}${u.qty>1?` \xD7 ${u.qty}`:""}</span><span class="badge badge-muted">${jr[Gt(u)]}</span></li>`).join("")}
          </ul>
          ${l&&!e[n.key]?`<p class="hint text-warn">${c("priority_high","sm")}\u9019\u7D44\u6709\u8981\u8A17\u904B\u7684\u5546\u54C1\uFF0C\u8ACB\u5148\u67E5\u9A57\u518D\u4EA4\u884C\u674E\u3002</p>`:""}
        </li>`}).join("")}
    </ul>
  </section>`}function Ur(t,a){let e=Rs(t,a);if(!e.count&&!e.planned)return"";let o=s=>`NT$ ${ut(s)}`;return`
  <section class="card allow-card" aria-labelledby="pk-allow">
    <header class="card-head">
      <h2 id="pk-allow" class="section-title">${c("shield","sm")}\u5165\u5883\u514D\u7A05\u984D\u8A66\u7B97</h2>
      <span class="badge ${e.over?"badge-danger":e.plannedOver?"badge-warn":"badge-cyan"}">${e.over?"\u5DF2\u8D85\u904E\u514D\u7A05\u984D":e.plannedOver?"\u5168\u90E8\u8CB7\u5B8C\u6703\u8D85\u904E":"\u5728\u514D\u7A05\u984D\u5167"}</span>
    </header>
    <p class="allow-now"><strong>\u7D04 ${o(e.now)}</strong> / ${o(e.limit)}</p>
    ${oe(Math.min(1,e.now/e.limit),{label:`\u5DF2\u8CB7\u5546\u54C1\u7D04 ${o(e.now)}\uFF0C\u514D\u7A05\u984D ${o(e.limit)}`,tone:e.over?"gold":"cyan"})}
    <dl class="allow-dl">
      <div><dt>\u5DF2\u8CB7\uFF08${e.count} \u4EF6\uFF09</dt><dd>${e.over?`<span class="text-danger">\u8D85\u904E\u7D04 ${o(e.over)}</span>`:`\u9084\u6709\u7D04 ${o(e.limit-e.now)}`}</dd></div>
      <div><dt>\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30</dt><dd class="${e.plannedOver?"text-danger":""}">\u7D04 ${o(e.planned)}${e.plannedOver?`\uFF08\u8D85\u904E\u7D04 ${o(e.plannedOver)}\uFF09`:""}</dd></div>
    </dl>
    ${e.over?`<p class="notice">${c("info")}\u8D85\u904E\u514D\u7A05\u984D\u6642\uFF0C\u5165\u5883\u8ACB\u8D70\u7D05\u7DDA\u6AAF\u5411\u6D77\u95DC\u7533\u5831\u3002</p>`:""}
    <p class="muted small">\u4EE5\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C\u3001\u76EE\u524D\u532F\u7387\u4F30\u7B97\uFF1B\u6D77\u95DC\u662F\u4EE5\u5B8C\u7A05\u50F9\u683C\u8A8D\u5B9A\uFF0C\u7D50\u679C\u53EF\u80FD\u4E0D\u540C\u3002\u984D\u5EA6\u4EE5\u6BCF\u4EBA\u8A08\u7B97\u3002${e.liquorCount?`\u9152\u985E ${e.liquorCount} \u4EF6\u4E0D\u8A08\u5165\uFF08\u53E6\u6709 1.5 \u516C\u5347\u7684\u514D\u7A05\u91CF\uFF09\u3002`:"\u9152\u985E\u4E0D\u8A08\u5165\uFF08\u53E6\u6709 1.5 \u516C\u5347\u7684\u514D\u7A05\u91CF\uFF09\u3002"}\u8A2D\u5B9A\u70BA\u300C\u4E0D\u653E\u884C\u674E\u300D\u7684\u5546\u54C1\u4E5F\u4E0D\u8A08\u5165\u3002</p>
    <p class="muted small">\u898F\u5B9A\u67E5\u8B49\u65E5 ${Fs}\uFF08\u8CA1\u653F\u90E8\u95DC\u52D9\u7F72\uFF09\u3002</p>
  </section>`}function to(){let t=y.state,{settings:a,packing:e}=t,o=ea(t),s=t.items.filter(h=>h.purchased&&Gt(h)!=="none"),n=s.filter(h=>!h.battery&&Gt(h)==="checked"&&(h.liquid||h.blade)),r=s.filter(h=>h.battery),i=s.filter(h=>!n.includes(h)&&!r.includes(h)),l=t.items.filter(h=>!h.purchased).length,u=e.filter(h=>h.done).length,p=(h,g,A,m,$)=>`
    <div class="pack-weight ${g>$?"is-over":""}">
      <p class="row-between"><span class="k">${h}</span><span><strong>${ut(g,1)}</strong> / ${$} kg</span></p>
      ${re([{value:A,tone:"base"},{value:m,tone:"paid"}],$,`${h} ${ut(g,1)} \u516C\u65A4\uFF0C\u9650\u91CD ${$}`)}
      <p class="small ${g>$?"text-danger":"muted"}">${g>$?`\u8D85\u91CD ${Wt(g-$)}`:`\u9084\u53EF\u88DD ${Wt($-g)}`}</p>
    </div>`;return`
  <div class="packing-layout">
    <div class="col">
      <div class="pack-weights" role="group" aria-labelledby="pk-weights">
        <h2 id="pk-weights" class="sr-only">\u884C\u674E\u91CD\u91CF</h2>
        ${p("\u8A17\u904B\u884C\u674E",o.totalCheckedNow,a.checkedBase,o.weightCheckedNow,a.checkedLimit)}
        ${p("\u624B\u63D0\u884C\u674E",o.totalCarryNow,a.carryBase,o.weightCarryNow,a.carryLimit)}
        <button type="button" class="link-btn pack-limits-link" data-edit-limits>${c("tune","sm")}\u4FEE\u6539\u9650\u91CD\u8207\u884C\u674E\u7BB1\u91CD\u91CF</button>
      </div>
      ${s.length?"":`<p class="notice">${c("info")}\u9084\u6C92\u6709\u5DF2\u8CB7\u7684\u5546\u54C1\u3002\u5728\u63A1\u8CB7\u6E05\u55AE\u52FE\u9078\u300C\u5DF2\u8CB7\u300D\u5F8C\uFF0C\u5546\u54C1\u6703\u51FA\u73FE\u5728\u9019\u88E1\u3002</p>`}
      ${cs("checked","\u5FC5\u9808\u8A17\u904B\uFF08\u6DB2\u9AD4\uFF0F\u5200\u526A\uFF09","luggage","checked","\u6DB2\u9AD4\u8D85\u904E 100ml\u3001\u5200\u526A\u985E\u4E0D\u80FD\u5E36\u4E0A\u98DB\u6A5F\u5BA2\u8259\u3002\uFF08\u5728\u51FA\u5883\u7BA1\u5236\u5340\u514D\u7A05\u5E97\u8CB7\u7684\u6DB2\u9AD4\u4E0D\u5728\u6B64\u9650\uFF0C\u6703\u5217\u5728\u4E00\u822C\u5546\u54C1\uFF09",n)}
      ${cs("carry","\u5FC5\u9808\u624B\u63D0\uFF08\u92F0\u96FB\u6C60\uFF09","backpack","carry","\u884C\u52D5\u96FB\u6E90\u8207\u5099\u7528\u92F0\u96FB\u6C60\u4E0D\u80FD\u8A17\u904B\uFF0C\u6BCF\u4EBA\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u4E0D\u80FD\u4F7F\u7528\u6216\u5145\u96FB\uFF1B\u5167\u5EFA\u96FB\u6C60\u7684\u96FB\u5668\u4F9D\u822A\u7A7A\u516C\u53F8\u898F\u5B9A\u3002",r)}
      ${cs("general","\u4E00\u822C\u5546\u54C1","inventory_2","general","\u8A17\u904B\u6216\u624B\u63D0\u90FD\u53EF\u4EE5\uFF0C\u6309\u53F3\u5074\u6309\u9215\u5207\u63DB\u653E\u54EA\u88E1\u3002",i,!0)}
      ${l?`<p class="hint">${c("pending","sm")}\u9084\u6709 ${l} \u4EF6\u5F85\u8CB7\uFF0C\u8CB7\u5230\u5F8C\u6703\u51FA\u73FE\u5728\u9019\u88E1\u3002</p>`:""}
      ${Or(t,o)}
      ${Ur(t,o)}
    </div>
    <div class="col">
      <section class="card dark-card" aria-labelledby="pk-rules">
        <p class="eyebrow eyebrow-light">${c("gavel","sm")}DEPARTURE CHECKLIST</p>
        <h2 id="pk-rules" class="section-title-lg">\u51FA\u5883\u8207\u5165\u5883\u63D0\u9192</h2>
        <p class="rule-hint">\u9EDE\u6A19\u984C\u5C55\u958B\u7D30\u7BC0\u3002</p>
        <ul class="rule-cards">
          ${Dr.map(h=>`
          <li class="rule ${h.tone}"><details data-rule="${h.id}" ${ds.has(h.id)?"open":""}>
            <summary><span class="rule-icon">${c(h.icon)}</span><strong>${h.title}</strong><span class="rule-chevron" aria-hidden="true">${c("add","sm")}</span></summary>
            <ul class="rule-points">${h.points.map(g=>`<li>${g}</li>`).join("")}</ul>
          </details></li>`).join("")}
        </ul>
      </section>

      <section class="card packing-card" aria-labelledby="pk-todo">
        <header class="card-head">
          <h2 id="pk-todo" class="section-title">${c("checklist","sm")}\u96A8\u8EAB\u88DD\u5099\u6E05\u55AE</h2>
          <span class="badge badge-muted">${u} / ${e.length} \u5099\u59A5</span>
        </header>
        <ul class="todo-list">
          ${e.map((h,g)=>`
            <li class="todo ${h.done?"is-done":""}">
              <label><input type="checkbox" data-p="toggle" data-idx="${g}" ${h.done?"checked":""}><span>${d(h.text)}</span></label>
              <button type="button" class="icon-btn icon-btn-sm" data-p="remove" data-idx="${g}" aria-label="\u79FB\u9664\u300C${d(h.text)}\u300D">${c("close","sm")}</button>
            </li>`).join("")}
        </ul>
        <form class="todo-add" data-p-add>
          <label for="todo-input" class="sr-only">\u65B0\u589E\u88DD\u5099\u9805\u76EE</label>
          <input id="todo-input" placeholder="\u65B0\u589E\u9805\u76EE\uFF0C\u4F8B\u5982\uFF1A\u8F49\u63A5\u982D" maxlength="40" autocomplete="off">
          <button type="submit" class="btn btn-slate btn-sm">${c("add","sm")}\u65B0\u589E</button>
        </form>
      </section>

      <details class="more card-more">
        <summary class="more-summary">
          <span class="more-title">${c("flight_takeoff","sm")}\u822A\u73ED\u8207\u884C\u674E\u984D\u5EA6</span>
          <span class="more-desc">${a.flightNote?d(a.flightNote):"\u9650\u91CD\u3001\u884C\u674E\u7BB1\u672C\u8EAB\u91CD\u91CF"}</span>
          <span class="more-chevron" aria-hidden="true">${c("add")}</span>
        </summary>
        <form class="flight-form more-body" data-flight>
          <div class="field span2"><label for="fl-note">\u822A\u73ED\u5099\u8A3B</label>
            <input id="fl-note" name="flightNote" value="${d(a.flightNote)}" placeholder="\u4F8B\u5982\uFF1ABR197 \u6210\u7530 \u2192 \u6843\u5712 11/20 14:30" maxlength="60"></div>
          <div class="field"><label for="fl-cl">\u8A17\u904B\u9650\u91CD kg</label><input id="fl-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${a.checkedLimit}"></div>
          <div class="field"><label for="fl-cb">\u8A17\u904B\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${a.checkedBase}"></div>
          <div class="field"><label for="fl-pl">\u624B\u63D0\u9650\u91CD kg</label><input id="fl-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${a.carryLimit}"></div>
          <div class="field"><label for="fl-pb">\u624B\u63D0\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${a.carryBase}"></div>
          <button type="submit" class="btn btn-slate span2">${c("save","sm")}\u5132\u5B58\u884C\u674E\u8A2D\u5B9A</button>
        </form>
      </details>
    </div>
  </div>`}function Br(t){t.innerHTML=`
    ${Bt({eyebrow:`PACKING & CUSTOMS \xB7 ${d(y.state.settings.tripName)}`,title:"\u6253\u5305\u8207\u6D77\u95DC",sub:"\u56DE\u7A0B\u6574\u7406\u884C\u674E\u6642\u770B\u9019\u9801\uFF1A\u5DF2\u8CB7\u7684\u5546\u54C1\u4F9D\u300C\u5FC5\u9808\u8A17\u904B\uFF0F\u5FC5\u9808\u624B\u63D0\uFF0F\u4E00\u822C\u300D\u5206\u7D44\uFF0C\u9010\u4E00\u88DD\u7BB1\u6253\u52FE\u3002",subShort:"\u56DE\u7A0B\u88DD\u7BB1\u7528\uFF1A\u5DF2\u8CB7\u7684\u5546\u54C1\u4F9D\u8A17\u904B\u3001\u624B\u63D0\u5206\u7D44\uFF0C\u88DD\u597D\u5C31\u6253\u52FE\u3002"})}
    ${ha([{id:"pk-weights",label:"\u91CD\u91CF"},{id:"pk-checked",label:"\u8A17\u904B"},{id:"pk-carry",label:"\u624B\u63D0"},{id:"pk-general",label:"\u4E00\u822C"},{id:"pk-inspect",label:"\u67E5\u9A57"},{id:"pk-allow",label:"\u5165\u5883\u8A66\u7B97"},{id:"pk-rules",label:"\u6D77\u95DC\u63D0\u9192"},{id:"pk-todo",label:"\u96A8\u8EAB\u88DD\u5099"}])}
    <div data-region="main">${to()}</div>`;let a=t.querySelector('[data-region="main"]'),e=()=>{let s=document.activeElement,n=a.querySelector("details.card-more")?.open,r=null;s?.dataset?.k?r=`[data-id="${s.closest("[data-id]")?.dataset.id}"] [data-k="${s.dataset.k}"]`:s?.dataset?.p==="toggle"?r=`[data-p="toggle"][data-idx="${s.dataset.idx}"]`:s?.dataset?.insp?r=`[data-insp="${CSS.escape(s.dataset.insp)}"]`:s?.id==="todo-input"?r="#todo-input":s?.closest?.("[data-flight]")&&(r='[data-flight] button[type="submit"]'),a.innerHTML=to(),n&&(a.querySelector("details.card-more").open=!0),r&&a.querySelector(r)?.focus({preventScroll:!0}),o?.refresh()},o=null;return t.addEventListener("click",s=>{let n=s.target.closest("button");if(!n)return;if("editLimits"in n.dataset){let l=a.querySelector("details.card-more");l.open=!0,l.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}),l.querySelector("#fl-cl")?.focus({preventScroll:!0});return}if(n.dataset.p==="remove"){let l=[...y.state.packing];l.splice(Number(n.dataset.idx),1),y.setPacking(l),t.querySelector("#todo-input")?.focus();return}let r=n.closest("[data-id]")?.dataset.id,i=r&&y.getItem(r);i&&(n.dataset.k==="pack"&&y.updateItem(r,{packed:!i.packed}),n.dataset.k==="open"&&va(r),n.dataset.k==="move"&&y.updateItem(r,{luggage:Gt(i)==="checked"?"carry":"checked"}))}),t.addEventListener("change",s=>{if(s.target.dataset.insp){let r={...y.state.settings.inspectedGroups};s.target.checked?r[s.target.dataset.insp]=!0:delete r[s.target.dataset.insp],y.updateSettings({inspectedGroups:r});return}if(s.target.dataset.p!=="toggle")return;let n=Number(s.target.dataset.idx);y.setPacking(y.state.packing.map((r,i)=>i===n?{...r,done:s.target.checked}:r))}),t.addEventListener("submit",s=>{s.preventDefault();let n=s.target;if(n.matches("[data-p-add]")){let r=n.querySelector("input").value.trim();r&&y.setPacking([...y.state.packing,{text:r,done:!1}]),t.querySelector("#todo-input")?.focus()}else if(n.matches("[data-flight]")){let r=n.elements,i=y.state.settings,l=(u,p)=>u.value===""||Number.isNaN(Number(u.value))?p:Math.max(0,Number(u.value));y.updateSettings({flightNote:r.flightNote.value.trim(),checkedLimit:l(r.checkedLimit,i.checkedLimit),checkedBase:l(r.checkedBase,i.checkedBase),carryLimit:l(r.carryLimit,i.carryLimit),carryBase:l(r.carryBase,i.carryBase)}),N({title:"\u884C\u674E\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}}),t.addEventListener("toggle",s=>{let n=s.target.dataset?.rule;n&&(s.target.open?ds.add(n):ds.delete(n))},!0),o=ba(t),{destroy(){o.destroy()},update(){let s=document.activeElement;a.querySelector("[data-flight]")?.contains(s)&&s.tagName!=="BUTTON"||e()}}}var ms={};fe(ms,{mount:()=>ei});var Gr="2026/11/7",so="shopping-relics:guide-tab",Jr=([t,a])=>`<a href="${a}" target="_blank" rel="noopener">${t}<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`,_e=t=>`<p class="source">\u8CC7\u6599\u4F86\u6E90\uFF1A${t.map(Jr).join("\u3001")}</p>`,Tt={jta:["\u65E5\u672C\u89C0\u5149\u5EF3\u3008What is the Refund Method?\u3009","https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html"],jtaFaq:["\u65E5\u672C\u89C0\u5149\u5EF3\u3008\u65C5\u5BA2\u5E38\u898B\u554F\u984C\u3009","https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html"],jtaPdf:["\u65E5\u672C\u89C0\u5149\u5EF3 \u65B0\u5236\u8AAA\u660E\uFF08PDF\uFF09","https://www.mlit.go.jp/kankocho/tax-free/content/001978459.pdf"],jnto:["JNTO\u3008Japan's new tax-free shopping system\u3009","https://www.japan.travel/en/us/blog/everything-you-need-to-know-japans-new-tax-free-shopping-system/"],linshibi:["\u6797\u6C0F\u74A7\u3008\u65E5\u672C\u514D\u7A05\u65B0\u5236\u5EA6\u3009","https://linshibi.com/?p=48616"],newtalk:["\u65B0\u982D\u6BBC\u30086 \u5927\u9000\u7A05\u516C\u53F8\u6536\u8CBB\u4E00\u6B21\u770B\u3009\uFF082026/11/1\uFF09","https://newtalk.tw/news/view/2026-11-01/1068651"],ayaca:["ayaca\u3008\u65E5\u672C\u9000\u7A05\u5E73\u53F0\u6BD4\u8F03\u3009","https://ayaca.tw/japan-tax-refund-apps/"],apps:["jptaxrefund.com\u3008Japan Tax Refund Apps 2026\u3009","https://jptaxrefund.com/blog/japan-tax-refund-apps"],rojico:["Rojico\u30088 \u6A5F\u5834\u73FE\u91D1\u9000\u7A05\u9EDE\u3009","https://rojico.com/en/blog/japan-tax-free-refund-method-airport-guide-2026/"],sth:["\u661F\u5CF6\u3008Cash Japan \u8207 Self Tax Refund \u6BD4\u8F03\u3009","https://www.stheadline.com/travel/3628833/"],moodie:["Moodie Davitt\u3008Cash Japan\u3009","https://moodiedavittreport.com/global-blue-establishes-cash-japan-at-japanese-airports-as-new-tax-free-shopping-refund-system-kicks-in/"],bnext:["\u6578\u4F4D\u6642\u4EE3\u3008Global Blue \u5148\u588A\u9322\u3009","https://www.bnext.com.tw/article/92860/japan-tax-free-refund-2026-yodobashi-global-blue"],getaround:["Get Around Japan\u3008Tax Refund Fees 2026\u3009","https://www.getaroundjapan.jp/?p=11496"],chinatimes:["\u4E2D\u6642\u3008\u5510\u5409\u8A36\u5FB7\u624B\u7E8C\u8CBB 0 \u5143\u3009","https://www.chinatimes.com/realtimenews/20261006001646-260405"],ettoday:["ETtoday\u3008Bic Camera \u624B\u7E8C\u8CBB 0 \u5143\u3009","https://travel.ettoday.net/article/3251542.htm"]};function Hr(){return`
    <ol class="g-steps">
      ${[["\u51FA\u767C\u524D","event",`<ul>
      <li>\u5148\u5728 <strong>Visit Japan Web</strong> \u767B\u9304\u8B77\u7167\uFF1B\u6210\u7530\u3001\u7FBD\u7530\u3001\u95DC\u897F\u3001\u4E2D\u90E8\u3001\u65B0\u5343\u6B72\u3001\u798F\u5CA1\u3001\u90A3\u9738\u53EF\u5728\u6A5F\u5834\u5148\u4E0A\u7DB2\u8FA6\u90E8\u5206\u624B\u7E8C\u3002</li>
      <li>\u60F3\u7528\u4FE1\u7528\u5361\u9000\u6B3E\u7684\u8A71\uFF0C<strong>JPrefund\u3001PIE VAT\u3001Global Blue</strong> \u53EF\u4EE5\u51FA\u767C\u524D\u5148\u8A3B\u518A\u5E33\u865F\u3001\u7D81\u597D\u5361\uFF08J-TaxRefund \u8981\u8CB7\u904E\u6771\u897F\u624D\u80FD\u8A3B\u518A\uFF09\u3002</li>
      <li>\u6E96\u5099\u4E00\u5F35<strong>\u82F1\u6587\u59D3\u540D\u8207\u8B77\u7167\u4E00\u81F4</strong>\u7684\u4FE1\u7528\u5361\uFF0C\u4EE5\u53CA\u80FD\u6536\u7C21\u8A0A\u9A57\u8B49\u78BC\u7684\u624B\u6A5F\u865F\u78BC\u3002</li></ul>`],["\u7D50\u5E33\u6642","shopping_bag",`<ul>
      <li>\u51FA\u793A\u8B77\u7167\uFF0C<strong>\u5148\u4ED8\u542B\u7A05\u50F9</strong>\u3002\u540C\u4E00\u5929\u3001\u540C\u4E00\u5BB6\u5E97\u672A\u7A05\u5408\u8A08 ${b(dt)} \u4EE5\u4E0A\u624D\u80FD\u8FA6\u3002</li>
      <li>\u554F\u5E97\u54E1\u5169\u4EF6\u4E8B\uFF1A<strong>\u7528\u54EA\u5BB6\u9000\u7A05\u516C\u53F8</strong>\u3001<strong>\u624B\u7E8C\u8CBB\u591A\u5C11</strong>\u3002</li>
      <li>\u4F9D\u6307\u793A\u6383\u6536\u64DA\u4E0A\u7684 QR code\uFF08\u6216\u8F38\u5165\u4EE3\u78BC\uFF09\uFF0C\u5728\u8A72\u516C\u53F8\u7DB2\u9801\uFF0FApp \u767B\u8A18\u9000\u6B3E\u65B9\u5F0F\uFF1BPIE VAT \u6709\u4E9B\u5E97<strong>\u8981\u7576\u5929\u5728 App \u5B8C\u6210</strong>\u3002</li>
      <li>\u6536\u64DA\u8207 QR code \u4E00\u5B9A\u8981\u7559\u8457\uFF0C\u5546\u54C1\u4E0D\u8981\u5728\u65E5\u672C\u62C6\u958B\u4F7F\u7528\u3002</li></ul>`],["\u6A5F\u5834\uFF0C\u8A17\u904B\u524D","flight_takeoff",`<ul>
      <li>\u8CFC\u8CB7\u5F8C <strong>90 \u5929\u5167</strong>\uFF0C\u5728<strong>\u6700\u5F8C\u96E2\u958B\u65E5\u672C\u7684\u6A5F\u5834</strong>\u8FA6\u7406\uFF08\u4F8B\u5982\u570B\u5167\u7DDA\u8F49\u6A5F\uFF0C\u8981\u5728\u6700\u5F8C\u51FA\u5883\u7684\u6A5F\u5834\u8FA6\uFF09\u3002</li>
      <li>\u5230\u51FA\u5883\u5927\u5EF3\u7684<strong>\u514D\u7A05\u624B\u7E8C\u6A5F\u53F0\u5237\u8B77\u7167</strong>\uFF1A\u7DA0\u71C8\u5B8C\u6210\uFF1B\u7D05\u71C8\u5E36\u5546\u54C1\u5230\u6D77\u95DC\u6AA2\u67E5\u5340\u3002</li>
      <li>\u6D77\u95DC<strong>\u4EE5\u6536\u64DA\u70BA\u55AE\u4F4D</strong>\u67E5\u9A57\uFF1A\u540C\u4E00\u5F35\u6536\u64DA\u5C11\u4E00\u4EF6\uFF0C\u6574\u5F35\u90FD\u4E0D\u80FD\u9000\u3002</li>
      <li><strong>\u78BA\u8A8D\u5B8C\u624D\u53BB\u8A17\u904B</strong>\uFF0C\u884C\u674E\u8A17\u904B\u5F8C\u5C31\u62FF\u4E0D\u56DE\u4F86\u8FA6\u4E86\u3002\u5728\u65E5\u672C\u7528\u6389\u7684\u5546\u54C1\uFF0C\u6539\u5411\u6D77\u95DC\u6AC3\u6AAF\u8AAA\u660E\u3002</li></ul>`],["\u9818\u9000\u6B3E","payments",`<ul>
      <li><strong>\u4FE1\u7528\u5361\uFF0F\u96FB\u5B50\u652F\u4ED8</strong>\uFF1A\u6D77\u95DC\u78BA\u8A8D\u5F8C\u7531\u9000\u7A05\u516C\u53F8\u9000\u56DE\uFF0C\u5165\u5E33\u7D04\u6578\u5929\u5230\u5169\u500B\u6708\u4E0D\u7B49\u3002</li>
      <li><strong>\u6A5F\u5834\u73FE\u91D1</strong>\uFF1A\u51FA\u5883\u5F8C\uFF08\u6210\u7530\u90E8\u5206\u5728\u51FA\u5883\u524D\uFF09\u5230 Cash JAPAN \u6216 Self Tax Refund \u6A5F\u53F0\u9818\u65E5\u5713\uFF0C\u53E6\u6536\u670D\u52D9\u8CBB\u3002</li>
      <li>\u9000\u6B3E\u7531<strong>\u9000\u7A05\u516C\u53F8</strong>\u652F\u4ED8\uFF0C<strong>\u6D77\u95DC\u4E0D\u767C\u9322</strong>\u3002</li></ul>`]].map(([a,e,o],s)=>`
        <li class="g-step"><span class="g-step-no" aria-hidden="true">${s+1}</span>
          <div><h3>${c(e,"sm")}${a}</h3>${o}</div></li>`).join("")}
    </ol>
    <div class="g-callout">${c("lightbulb","sm")}<p><strong>\u5E38\u898B\u5931\u8AA4\uFF1A</strong>\u5148\u8A17\u904B\u624D\u60F3\u5230\u8981\u9000\u7A05\u3001\u514D\u7A05\u54C1\u88AB\u585E\u9032\u8A17\u904B\u884C\u674E\u3001\u540C\u4E00\u5F35\u6536\u64DA\u7684\u6771\u897F\u5206\u958B\u653E\u3001\u5728 90 \u5929\u5F8C\u624D\u51FA\u5883\u3001\u5728\u570B\u5167\u7DDA\u6A5F\u5834\u5148\u8FA6\u624B\u7E8C\u3002\u9019\u4E9B\u60C5\u6CC1\u90FD\u62FF\u4E0D\u5230\u9000\u6B3E\u3002</p></div>
    ${_e([Tt.jta,Tt.jtaFaq,Tt.jnto,Tt.jtaPdf])}`}var zr=[{name:"J-TaxRefund",co:"J&J Tax Free",site:"j-taxrefund.com",stores:"\u5510\u5409\u8A36\u5FB7\u3001Bic Camera\u3001\u591A\u6176\u5C4B\u3001\u9DB4\u7FBD\u85E5\u599D\u3001\u677E\u672C\u6E05\u3001GU\u3001\u6771\u6B66\u767E\u8CA8\u3001\u4F0A\u85E4\u6D0B\u83EF\u5802",rows:[["\u5F62\u5F0F","\u7DB2\u9801\uFF0C\u4E0D\u7528\u4E0B\u8F09 App\uFF1B\u6709\u7E41\u9AD4\u4E2D\u6587"],["\u8A3B\u518A","<strong>\u8CB7\u904E\u624D\u80FD\u8A3B\u518A</strong>\uFF1A\u7D50\u5E33\u5F8C\u6383\u6536\u64DA QR code\uFF0C\u586B\u8B77\u7167\u3001\u806F\u7D61\u65B9\u5F0F\u3001\u9000\u6B3E\u65B9\u5F0F\uFF0C\u7C21\u8A0A\u9A57\u8B49\u3002\u4E4B\u5F8C\u5728\u5176\u4ED6 J-TaxRefund \u5E97\u5BB6\u4E0D\u7528\u91CD\u586B"],["\u9000\u6B3E\u65B9\u5F0F","\u4FE1\u7528\u5361\u3001\u7C3D\u5E33\u5361\u3001\u652F\u4ED8\u5BF6\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u6A5F\u5834\u73FE\u91D1\uFF1B\u9280\u884C\u532F\u6B3E\u9650\u91D1\u984D\u8F03\u5927\u7684\u9000\u6B3E"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 180 \u5929"],["\u5165\u5E33","\u6578\u9031\u5230\u7D04\u5169\u500B\u6708"],["\u63D0\u9818\u8CBB\u7528","\u6A5F\u5834\u9818\u73FE\u91D1\u7D04 1.1%\uFF1BVisa \u5361 \xA52,000 \u4EE5\u4E0B\u7684\u9000\u6B3E\u6BCF\u7B46\u7D04 US$0.70"]]},{name:"JPrefund",co:"Smart Detax\uFF08Smart Technologies & Resources\uFF09",site:"jprefund.com",stores:"3COINS\u3001\u963F\u5361\u5C07\u672C\u8216\u3001\u601D\u5922\u6A02\u3001MURASAKI SPORTS\u3001GRAND FRONT OSAKA",rows:[["\u5F62\u5F0F","\u7DB2\u9801"],["\u8A3B\u518A","<strong>\u53EF\u51FA\u767C\u524D\u5148\u8A3B\u518A</strong>\uFF1A\u767B\u9304\u8B77\u7167\u3001\u7D81\u4FE1\u7528\u5361\uFF1B\u4E4B\u5F8C\u5728\u5E97\u88E1\u51FA\u793A\u8B77\u7167\uFF0C\u8CFC\u8CB7\u7D00\u9304\u6703\u81EA\u52D5\u9023\u5230\u5E33\u865F"],["\u9000\u6B3E\u65B9\u5F0F","\u4FE1\u7528\u5361\uFF08\u76EE\u524D\u4EE5 Visa\u3001Mastercard \u70BA\u4E3B\uFF09\u3001\u6A5F\u5834\u73FE\u91D1\uFF08\u6BCF\u8D9F\u4E0A\u9650 \xA5100,000\uFF09\uFF1B\u53F0\u5E63\u5E33\u6236\u4E0D\u80FD\u9078\u9280\u884C\u532F\u6B3E"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 200 \u5929\uFF0C\u56DE\u570B\u5F8C\u4E5F\u80FD\u7533\u8ACB"],["\u63D0\u9818\u8CBB\u7528","\u9280\u884C\u6216\u91D1\u6D41\u624B\u7E8C\u8CBB\uFF1B\u6709\u5831\u5C0E\u6307\u51FA\u53E6\u52A0\u9000\u7A05\u984D\u7D04 5% \u7684\u532F\u6B3E\u624B\u7E8C\u8CBB\uFF08\u5F85\u78BA\u8A8D\uFF09"]]},{name:"Global Blue",co:"Global Blue TFS Japan",site:"App\u300CShop Tax Free\u300D",stores:"\u9AD8\u5CF6\u5C4B\u3001\u5927\u4E38\uFF0F\u677E\u5742\u5C4B\u7B49\u767E\u8CA8\u3001Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09\u3001EDION",rows:[["\u5F62\u5F0F","App\u300CShop Tax Free\u300D\u6216\u7DB2\u9801\uFF1B\u4ECB\u9762\u7121\u7E41\u9AD4\u4E2D\u6587\uFF08\u6709\u7C21\u4E2D\u3001\u82F1\u3001\u65E5\uFF09"],["\u8A3B\u518A","\u53EF\u51FA\u767C\u524D\u5148\u5728 App \u52A0\u5165\u4FE1\u7528\u5361\u6216\u96FB\u5B50\u9322\u5305"],["\u9000\u6B3E\u65B9\u5F0F","Visa\u3001Mastercard\u3001AMEX\u3001JCB\u3001\u9280\u806F\u3001\u652F\u4ED8\u5BF6\u7B49\uFF1B\u6A5F\u5834 Cash JAPAN \u53EF\u9818\u73FE\u91D1"],["\u5E02\u5340\u5148\u9818\u73FE\u91D1","Yodobashi \u7B49 11 \u5BB6\u5927\u578B\u9580\u5E02\u53EF<strong>\u51FA\u5883\u524D\u5148\u9818\u73FE\u91D1</strong>\uFF08\u4E0D\u9650\u5728 Yodobashi \u8CB7\u7684\uFF0CGlobal Blue \u52A0\u76DF\u5E97\u7684\u4EA4\u6613\u90FD\u53EF\u4EE5\uFF09\uFF0C\u4F46\u8981<strong>\u767B\u8A18\u4FE1\u7528\u5361\u64D4\u4FDD</strong>\uFF0C\u51FA\u5883\u6C92\u5B8C\u6210\u6D77\u95DC\u78BA\u8A8D\u6703\u5F9E\u5361\u6263\u56DE"],["\u671F\u9650","<strong>\u96E2\u958B\u65E5\u672C\u5F8C 3 \u9031\u5167</strong>\u8981\u6307\u5B9A\u9000\u6B3E\u65B9\u5F0F\uFF0C\u5426\u5247\u6539\u5BC4\u9810\u4ED8\u5361\uFF08\u6703\u6263\u8CBB\uFF09\uFF1B\u6D77\u95DC\u78BA\u8A8D\u5F8C 3 \u500B\u6708\u5167\u6709\u6548"],["\u5165\u5E33","\u6D77\u95DC\u78BA\u8A8D\u5F8C\u7D04 3\uFF5E5 \u5929"]]},{name:"PIE VAT",co:"Pie Systems Japan",site:"App\u300CPIE VAT\u300D",stores:"\u4E09\u4E95 Outlet Park\u3001LaLaport\u3001\u6F80\u8C37 109\u3001Montbell",rows:[["\u5F62\u5F0F","App\uFF08iOS\uFF0FAndroid\uFF09\u6216\u7DB2\u9801"],["\u8A3B\u518A","\u53EF\u51FA\u767C\u524D\u5EFA\u7ACB\u5E33\u865F\u3001\u6383\u8B77\u7167\uFF1B\u7D50\u5E33\u5F8C\u6383\u5E97\u5BB6 QR code \u6216\u8F38\u5165 6 \u78BC\u7533\u8ACB\u4EE3\u78BC\u3002<strong>\u90E8\u5206\u5E97\u5BB6\u8981\u7576\u5929\u5B8C\u6210</strong>"],["\u9000\u6B3E\u65B9\u5F0F","\u53F0\u7063\u65C5\u5BA2\u4EE5\u4FE1\u7528\u5361\u6216\u7C3D\u5E33\u91D1\u878D\u5361\u70BA\u4E3B\uFF1B<strong>\u4E0D\u652F\u63F4\u6A5F\u5834\u73FE\u91D1</strong>"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 18 \u500B\u6708"],["\u5165\u5E33","\u7D04 5\uFF5E15 \u500B\u5DE5\u4F5C\u5929"],["\u63D0\u9818\u8CBB\u7528","\u670D\u52D9\u8CBB 1.5%\uFF5E3%\uFF0B\u63D0\u9818\u8CBB\u7D04\u672A\u7A05\u50F9 0.28%\uFF5E0.32%\uFF08\u4F9D\u5E97\u5BB6\u6216\u5546\u5834\uFF09"]]},{name:"Global Tax Free-Planet",co:"Planet",site:"\u4F9D\u5E97\u5BB6\u8AAA\u660E",stores:"AEON \u6C38\u65FA\u5922\u6A02\u57CE",rows:[["\u9000\u6B3E\u65B9\u5F0F","\u4F9D\u5E97\u5BB6\u8AAA\u660E\uFF1B\u6A5F\u5834\u53EF\u7528 Self Tax Refund \u6A5F\u53F0\u9818\u73FE\u91D1"],["\u5E97\u5BB6\u624B\u7E8C\u8CBB","AEON \u56DE\u5831\u70BA 1.5%"]]},{name:"Ocean Tax Refund",co:"Ocean",site:"App\u3001\u7DB2\u9801\u3001\u5FAE\u4FE1\uFF0FLINE \u5C0F\u7A0B\u5F0F",stores:"Animate\uFF08\u5B89\u5229\u7F8E\u7279\uFF09",rows:[["\u9000\u6B3E\u65B9\u5F0F","\u9280\u884C\u3001\u4FE1\u7528\u5361\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u652F\u4ED8\u5BF6\u3001PayPal\u3001\u6A5F\u5834\u65E5\u5713\u73FE\u91D1"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 180 \u5929"],["\u63D0\u9818\u8CBB\u7528","\u9000\u56DE\u4FE1\u7528\u5361\u6700\u4F4E \xA5180 \u6216\u672A\u7A05\u50F9 0.5%\uFF08\u7B2C\u4E09\u65B9\u63D0\u9818\u8CBB\uFF09"]]}];function Wr(){return`
    <p class="g-lead">\u540C\u4E00\u5BB6\u5E97\u901A\u5E38\u53EA\u7528\u4E00\u5BB6\u9000\u7A05\u516C\u53F8\uFF0C\u7D50\u5E33\u6642\u770B\u6536\u64DA\u6216\u554F\u5E97\u54E1\u5C31\u77E5\u9053\u3002\u4EE5\u4E0B\u300C\u5E38\u898B\u5E97\u5BB6\u300D\u70BA 11/1 \u4E0A\u8DEF\u5F8C\u7684\u56DE\u5831\u6574\u7406\uFF0C\u53EF\u80FD\u8B8A\u52D5\u3002</p>
    <div class="g-ops">
      ${zr.map(t=>`
        <details class="g-op">
          <summary>
            <span class="g-op-name">${t.name}<small>${t.co}</small></span>
            <span class="g-op-stores">${t.stores}</span>
            <span class="g-op-chev" aria-hidden="true">${c("expand_more","sm")}</span>
          </summary>
          <dl class="g-dl">
            <div><dt>\u5E73\u53F0</dt><dd>${t.site}</dd></div>
            ${t.rows.map(([a,e])=>`<div><dt>${a}</dt><dd>${e}</dd></div>`).join("")}
          </dl>
        </details>`).join("")}
    </div>
    <div class="g-callout">${c("info","sm")}<p>\u5176\u4ED6\u9084\u6709 AddSmart\u3001LINKTIVITY\u3001IntaSect\u3001SAMURAI TAX \u7B49\u696D\u8005\uFF0C\u65E5\u672C\u5168\u570B\u514D\u7A05\u5E97\u5354\u6703\u5217\u51FA\u7684\u5171\u7D04 12 \u5BB6\u3002\u9047\u5230\u4E0D\u719F\u7684\u516C\u53F8\uFF0C\u4EE5\u6536\u64DA\u4E0A\u7684\u8AAA\u660E\u70BA\u6E96\u3002</p></div>
    ${_e([Tt.ayaca,Tt.apps,Tt.newtalk,Tt.linshibi,Tt.bnext])}`}var Kr=[["\u6210\u7530","T1 \u5357\uFF0F\u5317\u7FFC 3F\u3001T2 3F\u3001T3 3F","Cash JAPAN","\u6AC3\u53F0 6:00\u201323:00\uFF08T3 \u81F3 22:00\uFF09\uFF1B\u6A5F\u53F0 24 \u5C0F\u6642"],["\u6210\u7530","T1 \u4E2D\u592E\u5927\u6A13 4F\u3001T2 \u672C\u9928 3F\uFF08<strong>\u51FA\u5883\u524D</strong>\uFF09","Self Tax Refund","6:00\u201324:00"],["\u7FBD\u7530","T2 \u570B\u969B\u7DDA\u3001T3 3F \u51FA\u5883\u5F8C\uFF08\u5404 5 \u53F0\uFF09","Self Tax Refund","T2 6:45\u2013\u7FCC 1:30\uFF1BT3 24 \u5C0F\u6642"],["\u95DC\u897F","T1 \u51FA\u5883\u5F8C\uFF0816 \u53F0\uFF0B\u6AC3\u53F0\uFF09\u3001T2 1F \u51FA\u5883\u5F8C\uFF085 \u53F0\uFF09","Cash JAPAN","T1 \u6AC3\u53F0 7:00\u201324:00"],["\u4E2D\u90E8","T1 3F \u514D\u7A05\u5340\uFF08\u7B2C 20 \u767B\u6A5F\u9580\u9644\u8FD1\uFF09\u3001T2 2F \u51FA\u5883\u5F8C","Cash JAPAN","T1 7:00\u201322:15\uFF1BT2 10:00\u201321:30"],["\u798F\u5CA1","\u570B\u969B\u7DDA 3F \u51FA\u5883\u5F8C\u514D\u7A05\u5340","Cash JAPAN","\u6A5F\u53F0 6:00\u201321:00\uFF1B\u6AC3\u53F0 7:00\u201321:00"],["\u65B0\u5343\u6B72","\u570B\u969B\u7DDA 3F","Cash JAPAN","\u6AC3\u53F0 7:00\u201320:00\uFF1B\u6A5F\u53F0 6:00\u201320:30"],["\u795E\u6236","T2 1F \u51FA\u5883\u5F8C\uFF082 \u53F0\uFF09","Cash JAPAN","24 \u5C0F\u6642"],["\u90A3\u9738","\u570B\u969B\u7DDA 2F \u51FA\u5883\u5F8C","Self Tax Refund","6:00\u201321:00\uFF08\u4F9D\u822A\u73ED\u8ABF\u6574\uFF09"]];function Yr(){return`
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
        <tbody>${Kr.map(([t,a,e,o])=>`<tr><th scope="row">${t}<small class="g-tag">${e}</small></th><td>${a}</td><td>${o}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <h3 class="g-sub">\u600E\u9EBC\u9818</h3>
    <ol class="g-ol">
      <li>\u5148\u5B8C\u6210\u514D\u7A05\u624B\u7E8C\u6A5F\u53F0\uFF08\u7DA0\u71C8\uFF09\uFF0C\u7D05\u71C8\u8981\u5148\u904E\u6D77\u95DC\u6AA2\u67E5\uFF0C\u7D50\u679C\u50B3\u5230\u9818\u9322\u6A5F\u53F0\u53EF\u80FD\u8981\u7B49\u5E7E\u5206\u9418\u3002</li>
      <li>\u8A17\u904B\u3001\u5B89\u6AA2\u3001\u51FA\u5883\uFF08\u6210\u7530\u7684 Self Tax Refund \u5728\u51FA\u5883\u524D\uFF0C\u9806\u5E8F\u76F8\u53CD\uFF09\u3002</li>
      <li>\u5230\u6A5F\u53F0\u5237\u8B77\u7167\uFF0C\u756B\u9762\u6703\u5217\u51FA<strong>\u53EF\u9818\u91D1\u984D\u8207\u6263\u6389\u7684\u8CBB\u7528</strong>\uFF0C\u78BA\u8A8D\u5F8C\u9818\u65E5\u5713\u73FE\u91D1\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u6A5F\u5834\u514D\u7A05\u5E97\u82B1\u6389\u3002</li>
    </ol>
    <div class="g-callout">${c("warning","sm")}<p><strong>PIE VAT \u7684\u5E97\u5BB6\u4E0D\u80FD\u5728\u6A5F\u5834\u9818\u73FE\u91D1</strong>\uFF08\u4F8B\u5982\u4E09\u4E95 Outlet\u3001LaLaport\uFF09\u3002\u53E6\u5916\uFF0C\u73FE\u91D1\u6BD4\u9000\u56DE\u4FE1\u7528\u5361\u591A\u6263\u7D04 1%\uFF0C\u91D1\u984D\u5927\u6642\u5DEE\u8DDD\u660E\u986F\uFF1B\u8D95\u98DB\u6A5F\u6216\u60F3\u7576\u5834\u628A\u9322\u82B1\u6389\u6642\u518D\u9078\u73FE\u91D1\u3002</p></div>
    ${_e([Tt.rojico,Tt.sth,Tt.moodie,Tt.getaround])}`}function Vr(){return`
    <ul class="g-checks">
      <li>${c("check_circle","sm")}<div><strong>\u4ED8\u73FE\u91D1\u4E5F\u80FD\u9000\u56DE\u4FE1\u7528\u5361</strong><p>\u9000\u7A05\u8DDF\u4ED8\u6B3E\u65B9\u5F0F\u7121\u95DC\uFF0C\u4ED8\u73FE\u91D1\u3001\u4EA4\u901A\u5361\u3001PayPay \u90FD\u53EF\u4EE5\u9078\u9000\u5230\u4FE1\u7528\u5361\u3002</p></div></li>
      <li>${c("check_circle","sm")}<div><strong>\u82F1\u6587\u59D3\u540D\u8981\u548C\u8B77\u7167\u4E00\u81F4</strong><p>\u56DB\u5927\u516C\u53F8\u90FD\u8981\u7C21\u8A0A\u9A57\u8B49\uFF0C\u8ACB\u5E36\u53EF\u6536\u570B\u969B\u7C21\u8A0A\u7684\u624B\u6A5F\u865F\u78BC\u3002</p></div></li>
      <li>${c("check_circle","sm")}<div><strong>\u9078\u65E5\u5713\u5165\u5E33\uFF0C\u4E0D\u8981\u9078\u53F0\u5E63</strong><p>\u756B\u9762\u554F\u5E63\u5225\u6642\u9078\u65E5\u5713\uFF08JPY\uFF09\u3002\u9078\u53F0\u5E63\u6703\u7528\u52D5\u614B\u8CA8\u5E63\u8F49\u63DB\uFF08DCC\uFF09\uFF0C\u532F\u7387\u901A\u5E38\u6BD4\u8F03\u5DEE\uFF1B\u767C\u5361\u9280\u884C\u53E6\u6536\u7684\u6D77\u5916\u624B\u7E8C\u8CBB\u4F9D\u4F60\u7684\u5361\u800C\u5B9A\u3002</p></div></li>
      <li>${c("check_circle","sm")}<div><strong>\u5361\u5225</strong><p>JPrefund \u76EE\u524D\u4EE5 Visa\u3001Mastercard \u70BA\u4E3B\uFF1BGlobal Blue \u652F\u63F4 Visa\u3001Mastercard\u3001AMEX\u3001JCB\u3001\u9280\u806F\u3002PIE VAT \u5C0D\u53F0\u7063\u65C5\u5BA2\u4EE5\u4FE1\u7528\u5361\u6216\u7C3D\u5E33\u91D1\u878D\u5361\u70BA\u4E3B\u3002</p></div></li>
      <li>${c("check_circle","sm")}<div><strong>\u5165\u5E33\u6642\u9593</strong><p>Global Blue \u7D04 3\uFF5E5 \u5929\u3001PIE VAT \u7D04 5\uFF5E15 \u500B\u5DE5\u4F5C\u5929\u3001J-TaxRefund \u6578\u9031\u5230\u7D04\u5169\u500B\u6708\u3002\u9801\u9762\u986F\u793A\u300C\u5B8C\u4E86\u300D\u624D\u7B97\u771F\u7684\u9000\u6B3E\u3002</p></div></li>
      <li>${c("check_circle","sm")}<div><strong>\u8A18\u5F97\u5728\u671F\u9650\u5167\u8A2D\u5B9A</strong><p>Global Blue \u96E2\u5883\u5F8C 3 \u9031\u5167\u6C92\u6307\u5B9A\u9000\u6B3E\u65B9\u5F0F\uFF0C\u6703\u6539\u5BC4\u9810\u4ED8\u5361\u4E26\u6263\u8CBB\u3002\u5176\u4ED6\u516C\u53F8\u671F\u9650\uFF1AJ-TaxRefund 180 \u5929\u3001JPrefund 200 \u5929\u3001PIE VAT 18 \u500B\u6708\u3002</p></div></li>
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
    ${_e([Tt.ayaca,Tt.apps,Tt.linshibi,Tt.getaround])}`}var eo=[["\u5510\u5409\u8A36\u5FB7","J-TaxRefund","0%"],["Bic Camera","J-TaxRefund","0%"],["\u591A\u6176\u5C4B","J-TaxRefund","0%"],["\u9DB4\u7FBD\u85E5\u599D","J-TaxRefund","0%"],["\u672D\u5E4C\u85E5\u599D","J-TaxRefund","0%"],["\u677E\u672C\u6E05","J-TaxRefund","\u7D04 0.33%\uFF08\u5F85\u78BA\u8A8D\uFF09"],["GU","J-TaxRefund","1%"],["\u6771\u6B66\u767E\u8CA8","J-TaxRefund","1%"],["\u4E8C\u6728\u9AD8\u723E\u592B","J-TaxRefund","1.5%"],["\u4F0A\u85E4\u6D0B\u83EF\u5802","J-TaxRefund","1.65%"],["\u677E\u5C4B\u9280\u5EA7","J-TaxRefund","\u542B\u7A05\u50F9 2.15%"],["\u4E09\u4E95 Outlet\u3001LaLaport","PIE VAT","1.5%"],["\u6F80\u8C37 109","PIE VAT","1.55%"],["Montbell","PIE VAT","2%\uFF5E3%"],["Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09","Global Blue","0%\uFF08\u9996\u65E5\u56DE\u5831\uFF09"],["\u9AD8\u5CF6\u5C4B","Global Blue","1.55%"],["\u5927\u4E38\uFF0F\u677E\u5742\u5C4B","Global Blue","2.3%"],["EDION","Global Blue","\u6BCF\u7B46 \xA5210"],["3COINS","JPrefund","\u6BCF\u7B46 \xA5320"],["\u963F\u5361\u5C07\u672C\u8216","JPrefund","\u542B\u7A05\u50F9 1.1%"],["GRAND FRONT OSAKA","JPrefund","1.5%"],["\u601D\u5922\u6A02","JPrefund","1%\uFF5E2.5%"],["AEON \u6C38\u65FA\u5922\u6A02\u57CE","Planet","1.5%"],["Animate","Ocean","2.1%"]];function Xr(){return`
    <p class="g-lead">\u624B\u7E8C\u8CBB<strong>\u7531\u5E97\u5BB6\u6C7A\u5B9A</strong>\uFF0C\u653F\u5E9C\u6C92\u6709\u4E0A\u9650\uFF1B\u5E97\u5BB6\u53EF\u4EE5\u81EA\u5DF1\u5438\u6536\uFF0C\u4E5F\u53EF\u4EE5\u8F49\u7D66\u65C5\u5BA2\u3002\u8A08\u7B97\u57FA\u6E96\u5404\u5E97\u4E0D\u540C\uFF0C\u6709\u7684\u4EE5<strong>\u672A\u7A05\u50F9</strong>\u3001\u6709\u7684\u4EE5<strong>\u542B\u7A05\u50F9</strong>\u8A08\u7B97\uFF08\u4E0B\u8868\u6709\u8A3B\u660E\u7684\u70BA\u542B\u7A05\u50F9\uFF09\u3002\u4EE5\u672A\u7A05\u50F9\u8A08\u6642\uFF0C\u6D88\u8CBB\u7A05 10%\u3001\u624B\u7E8C\u8CBB 1.5%\uFF0C\u53EF\u4EE5\u62FF\u56DE\u672A\u7A05\u50F9\u7684 8.5%\u3002</p>
    <div class="g-calc">${c("calculate","sm")}<p><strong>\u5B9A\u984D\u6536\u8CBB\u8981\u5C0F\u5FC3\uFF1A</strong>3COINS \u6BCF\u7B46\u6536 \xA5320\u3002\u672A\u7A05 ${b(5e3)} \u9000\u7A05 \xA5500\uFF0C\u6263\u6389\u5F8C\u53EA\u5269 \xA5180\uFF0C\u7B49\u65BC\u624B\u7E8C\u8CBB 6.4%\uFF1B\u8CB7\u5230\u672A\u7A05 \xA510,000 \u624D\u964D\u5230 3.2%\u3002\u540C\u4E00\u5BB6\u5E97<strong>\u76E1\u91CF\u5408\u4F75\u6210\u4E00\u5F35\u6536\u64DA</strong>\u3002</p></div>
    <div class="table-wrap">
      <table class="g-table g-fees">
        <caption>\u5404\u5E97\u9000\u7A05\u624B\u7E8C\u8CBB\uFF08\u4F9D\u9000\u7A05\u516C\u53F8\u5206\u7D44\uFF1B11/1 \u4E0A\u8DEF\u9996\u65E5\u56DE\u5831\uFF0C\u6703\u8B8A\u52D5\uFF09</caption>
        <thead><tr><th scope="col">\u5E97\u5BB6</th><th scope="col">\u5E97\u5BB6\u624B\u7E8C\u8CBB</th></tr></thead>
        ${[...new Set(eo.map(([,t])=>t))].map(t=>`
        <tbody>
          <tr class="g-group"><th scope="colgroup" colspan="2">${t}</th></tr>
          ${eo.filter(([,a])=>a===t).map(([a,,e])=>`<tr${e.startsWith("0%")?' class="is-free"':""}><th scope="row">${a}</th><td>${e}</td></tr>`).join("")}
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
    ${_e([Tt.newtalk,Tt.linshibi,Tt.chinatimes,Tt.ettoday,Tt.getaround])}`}var Qr=[{date:"2026/7/1",title:"\u65E5\u672C\u51FA\u570B\u7A05\u8ABF\u9AD8\u70BA \xA53,000",icon:"flight_takeoff",state:"done",body:`<p>\u570B\u969B\u89C0\u5149\u65C5\u5BA2\u7A05\u5F9E\u6BCF\u6B21\u51FA\u5883 \xA51,000 \u8ABF\u9AD8\u70BA <strong>\xA53,000</strong>\uFF0C\u901A\u5E38\u5DF2\u542B\u5728\u6A5F\u7968\u88E1\u3002</p>
      <ul><li>\u4EE5<strong>\u8CFC\u7968\u65E5</strong>\u5224\u65B7\uFF1A2026/6/30 \u524D\u8CB7\u7684\u6A5F\u7968\u4ECD\u662F \xA51,000\uFF1B\u4E4B\u5F8C\u6539\u7968\u5247\u9069\u7528\u65B0\u7A05\u984D\u3002</li>
      <li>\u672A\u6EFF 2 \u6B72\u3001\u5165\u5883\u5F8C 24 \u5C0F\u6642\u5167\u8F49\u6A5F\u51FA\u5883\u8005\u514D\u5FB5\u3002</li></ul>`,src:[["\u4E58\u308A\u3082\u306E\u30CB\u30E5\u30FC\u30B9\u3008\u51FA\u570B\u7A05 3 \u500D\u3009","https://trafficnews.jp/post/667615"]]},{date:"2026/11/1",title:"\u514D\u7A05\u6539\u70BA\u300C\u51FA\u5883\u5F8C\u9000\u7A05\u300D\uFF08\u30EA\u30D5\u30A1\u30F3\u30C9\u65B9\u5F0F\uFF09",icon:"receipt_long",state:"done",body:`<ul><li>\u5E97\u982D\u5148\u4ED8\u542B\u7A05\u50F9\uFF0C\u51FA\u5883\u67E5\u9A57\u5F8C\u7531\u9000\u7A05\u516C\u53F8\u9000\u6B3E\uFF1B\u9580\u6ABB\u540C\u4E00\u5929\u540C\u4E00\u5BB6\u5E97\u672A\u7A05 ${b(dt)}\u3002</li>
      <li><strong>\u6D88\u8017\u54C1 50 \u842C\u65E5\u5713\u7684\u4E0A\u9650\u53D6\u6D88</strong>\uFF0C\u4E5F\u4E0D\u518D\u9700\u8981\u7279\u6B8A\u5BC6\u5C01\u5305\u88DD\u3002</li>
      <li>\u672A\u7A05\u55AE\u50F9 100 \u842C\u65E5\u5713\u4EE5\u4E0A\u7684\u5546\u54C1\uFF0C\u5E97\u5BB6\u8981\u63D0\u4F9B\u5E8F\u865F\u7B49\u5546\u54C1\u8CC7\u8A0A\u3002</li>
      <li><strong>\u6C92\u6709\u904E\u6E21\u671F</strong>\uFF0C11/1 \u8D77\u8CFC\u8CB7\u7684\u5546\u54C1\u4E00\u5F8B\u9069\u7528\u65B0\u5236\u3002\u8A73\u7D30\u6D41\u7A0B\u898B\u300C\u6D41\u7A0B\u300D\u5206\u9801\u3002</li></ul>`,src:[Tt.jta,Tt.jtaPdf]},{date:"2027/4/1",title:"\u98DF\u54C1\u6D88\u8CBB\u7A05\u9810\u8A08\u964D\u70BA 1%\uFF08\u70BA\u671F 2 \u5E74\uFF09",icon:"bakery_dining",state:"pending",body:`<p>\u9069\u7528 8% \u8F15\u6E1B\u7A05\u7387\u7684\u98F2\u98DF\u6599\u54C1\uFF0C\u9810\u8A08 2027/4/1\uFF5E2029/3/31 \u964D\u70BA <strong>1%</strong>\uFF1B<strong>\u9152\u985E\u8207\u5167\u7528\u9910\u98F2\u7DAD\u6301 10%</strong>\u3002</p>
      <ul><li>\u5C0D\u65C5\u5BA2\u7684\u5F71\u97FF\uFF1A\u98DF\u54C1\u6A19\u50F9\u8B8A\u4FBF\u5B9C\uFF0C\u4F46\u80FD<strong>\u9000\u7684\u7A05\u4E5F\u8DDF\u8457\u8B8A\u5C11</strong>\uFF08\u5F9E 8% \u8B8A 1%\uFF09\uFF0C\u8CB7\u98DF\u54C1\u6642\u8FA6\u514D\u7A05\u7684\u5212\u7B97\u7A0B\u5EA6\u6703\u964D\u4F4E\u3002</li>
      <li>\u6CD5\u6848 2026/11/6 \u773E\u8B70\u9662\u901A\u904E\uFF0C<strong>\u53C3\u8B70\u9662\u5BE9\u8B70\u4E2D\u3001\u5C1A\u672A\u6210\u7ACB</strong>\u3002\u65C5\u884C\u5728\u9019\u6BB5\u671F\u9593\u3001\u6CD5\u6848\u901A\u904E\u5F8C\uFF0C\u65B0\u589E\u5546\u54C1\u6642\u53EF\u628A\u7A05\u7387\u9078\u6210\u300C1% \u98DF\u54C1\u300D\u3002</li></ul>`,src:[["NHK\u3008\u98DF\u6599\u54C1\u306E\u6D88\u8CBB\u7A0E\u6E1B\u7A0E\u95A2\u9023\u6CD5\u6848 \u8846\u8B70\u9662\u3092\u901A\u904E\u3009","https://news.web.nhk/newsweb/na/nd-20261106de71359"],["\u6642\u4E8B\u901A\u4FE1\u3008\u6D88\u8CBB\u6E1B\u7A0E\u65B9\u91DD\u3092\u95A3\u8B70\u6C7A\u5B9A\u3009","https://www.jiji.com/jc/article?k=2026080500718&g=pol"]]},{date:"2028 \u5E74\u5EA6",title:"\u96FB\u5B50\u5165\u5883\u8A31\u53EF JESTA\uFF08\u9810\u5B9A\uFF09",icon:"event",state:"plan",body:"<p>\u65E5\u672C\u8A08\u756B\u5C0D\u514D\u7C3D\u65C5\u5BA2\u5BE6\u65BD\u4E8B\u5148\u4E0A\u7DB2\u7533\u8ACB\u7684\u5165\u5883\u8A31\u53EF\uFF0C\u653F\u5E9C\u76EE\u6A19\u70BA 2028 \u5E74\u5EA6\uFF0C\u8CBB\u7528\u8207\u9069\u7528\u570B\u5BB6\u5C1A\u672A\u516C\u5E03\u3002<strong>2027 \u5E74\u524D\u5F80\u65E5\u672C\u9084\u4E0D\u9700\u8981\u7533\u8ACB\u3002</strong></p>",src:[["VisasNews\u3008JESTA planned for 2028\u3009","https://visasnews.com/en/japans-parliament-unveils-new-details-on-jesta-the-electronic-travel-authorization-planned-for-2028/"]]}],Zr={done:["\u5DF2\u5BE6\u65BD","badge-cyan"],soon:["\u5373\u5C07\u5BE6\u65BD","badge-warn"],pending:["\u5BE9\u8B70\u4E2D","badge-warn"],plan:["\u9810\u5B9A","badge-muted"]};function ti(){return`
    <p class="g-lead">\u9000\u7A05\u65B9\u5F0F\u3001\u51FA\u570B\u7A05\u3001\u98DF\u54C1\u7A05\u7387\u90FD\u6709\u8B8A\u52D5\u3002\u884C\u52D5\u96FB\u6E90\u8207\u56DE\u53F0\u7063\u5165\u5883\u898F\u5B9A\uFF0C\u8ACB\u770B\u300C\u6253\u5305\u8207\u6D77\u95DC\u300D\u9801\u3002</p>
    <ol class="rule-timeline">
      ${Qr.map(t=>{let[a,e]=Zr[t.state];return`
        <li class="rt-item rt-${t.state}">
          <span class="rt-dot" aria-hidden="true">${c(t.icon,"sm")}</span>
          <div class="rt-body">
            <p class="rt-meta"><time>${t.date}</time><span class="badge ${e}">${a}</span></p>
            <h3 class="rt-title">${t.title}</h3>
            ${t.body}
            ${_e(t.src)}
          </div>
        </li>`}).join("")}
    </ol>`}var ps=[{id:"flow",label:"\u6D41\u7A0B",render:Hr},{id:"ops",label:"\u9000\u7A05\u516C\u53F8",render:Wr},{id:"cash",label:"\u6A5F\u5834\u73FE\u91D1",render:Yr},{id:"card",label:"\u4FE1\u7528\u5361",render:Vr},{id:"fees",label:"\u624B\u7E8C\u8CBB",render:Xr},{id:"rules",label:"\u65B0\u5236\u5EA6",render:ti}],ao=()=>{try{return localStorage.getItem(so)}catch{return null}};function no({heading:t=!0}={}){let a=ps.some(e=>e.id===ao())?ao():"flow";return`
  <section class="card guide-card" ${t?'aria-labelledby="guide-title"':'aria-label="\u9000\u7A05\u6307\u5357\u5167\u5BB9"'}>
    ${t?`<p class="eyebrow">${c("payments","sm")}TAX REFUND GUIDE</p>
    <h2 id="guide-title" class="section-title-lg">\u9000\u7A05\u6307\u5357\uFF1A2026/11 \u65B0\u5236\u600E\u9EBC\u9000</h2>`:""}
    <p class="muted small">\u8CC7\u6599\u67E5\u8B49\u65E5 ${Gr}\u3002\u65B0\u5236\u525B\u4E0A\u8DEF\uFF0C\u8CBB\u7387\u8207\u6D41\u7A0B\u4EE5\u5404\u5E97\u3001\u5404\u9000\u7A05\u516C\u53F8\u516C\u544A\u70BA\u6E96\u3002</p>
    <div class="g-tabs" role="tablist" aria-label="\u9000\u7A05\u6307\u5357\u5206\u9801">
      ${ps.map(e=>`<button type="button" role="tab" id="gtab-${e.id}" aria-controls="gpanel-${e.id}" aria-selected="${e.id===a}" tabindex="${e.id===a?0:-1}" class="g-tab">${e.label}</button>`).join("")}
    </div>
    ${ps.map(e=>`<div class="g-panel" role="tabpanel" id="gpanel-${e.id}" aria-labelledby="gtab-${e.id}" tabindex="0"${e.id===a?"":" hidden"}>${e.render()}</div>`).join("")}
  </section>`}function oo(t){let a=t.querySelector(".g-tabs");if(!a)return;let e=[...a.querySelectorAll('[role="tab"]')],o=(s,n=!1)=>{e.forEach(r=>{let i=r===s;r.setAttribute("aria-selected",i),r.tabIndex=i?0:-1,t.querySelector(`#${r.getAttribute("aria-controls")}`).hidden=!i}),n&&s.focus(),a.scrollLeft=s.offsetLeft-(a.clientWidth-s.offsetWidth)/2;try{localStorage.setItem(so,s.id.replace("gtab-",""))}catch{}};a.addEventListener("click",s=>{let n=s.target.closest('[role="tab"]');n&&o(n)}),a.addEventListener("keydown",s=>{let n=e.indexOf(document.activeElement);if(n<0)return;let r={ArrowRight:n+1,ArrowLeft:n-1,Home:0,End:e.length-1}[s.key];r!==void 0&&(s.preventDefault(),o(e[(r+e.length)%e.length],!0))})}function ei(t){return t.innerHTML=`
    ${Bt({eyebrow:`TAX REFUND GUIDE \xB7 ${d(y.state.settings.tripName)}`,title:"\u9000\u7A05\u6307\u5357",sub:"2026/11 \u65B0\u5236\u600E\u9EBC\u9000\uFF1A\u6D41\u7A0B\u3001\u9000\u7A05\u516C\u53F8\u3001\u6A5F\u5834\u73FE\u91D1\u3001\u4FE1\u7528\u5361\u8207\u624B\u7E8C\u8CBB\u3002",actions:`<a class="btn btn-ghost" href="#/budget">${c("undo")}\u56DE\u9810\u7B97\u532F\u7387</a>`})}
    ${no({heading:!1})}`,oo(t),{}}var fs={};fe(fs,{mount:()=>si});function ai(){try{let t=location.hash.replace(/^#\/?share\/?/,"").split(/[/?]/)[0];if(!t)return null;let a=atob(t.replace(/-/g,"+").replace(/_/g,"/")),e=JSON.parse(new TextDecoder().decode(Uint8Array.from(a,s=>s.charCodeAt(0))));if(e?.v!==1||typeof e.n!="string"||!Array.isArray(e.i))return null;let o=s=>Number.isFinite(Number(s))?Number(s):0;return{name:e.n.slice(0,40),trip:String(e.t??"").slice(0,60),rate:o(e.r),locked:!!e.l,at:o(e.at),items:e.i.filter(Array.isArray).slice(0,200).map(([s,n,r])=>({name:String(s??"").slice(0,120),qty:o(n)||1,amount:o(r)})),pending:(Array.isArray(e.p)?e.p:[]).slice(0,200).map(s=>String(s).slice(0,120)),goods:o(e.g),fee:o(e.f),feeDesc:String(e.fd??"").slice(0,40),refund:o(e.rf),paid:o(e.pd)}}catch{return null}}function si(t){let a=ai();if(!a)return t.innerHTML=`
      ${Bt({eyebrow:"SHARED \xB7 \u4EE3\u8CFC\u660E\u7D30",title:"\u4EE3\u8CFC\u660E\u7D30"})}
      ${Ce({title:"\u9019\u500B\u9023\u7D50\u8B80\u4E0D\u5230\u660E\u7D30",text:"\u9023\u7D50\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF08\u8907\u88FD\u6642\u88AB\u622A\u65B7\uFF09\uFF0C\u8ACB\u5C0D\u65B9\u91CD\u65B0\u8907\u88FD\u4E00\u6B21\u5206\u4EAB\u9023\u7D50\u3002",actions:`<a class="btn btn-ghost" href="#/home">${c("auto_awesome")}\u770B\u770B\u9019\u500B\u7DB2\u7AD9</a>`})}`,{};let e=a.goods+a.fee,o=e-a.paid,s=n=>`NT$ ${ut(n*a.rate)}`;return t.innerHTML=`
    ${Bt({eyebrow:`SHARED \xB7 ${d(a.trip||"\u4EE3\u8CFC\u660E\u7D30")}`,title:`@${d(a.name)} \u7684\u4EE3\u8CFC\u660E\u7D30`,sub:`\u9019\u662F${a.at?` ${jt(a.at)} `:""}\u7522\u751F\u7684\u552F\u8B80\u660E\u7D30\uFF0C\u4E0D\u6703\u96A8\u4E4B\u5F8C\u7684\u4FEE\u6539\u66F4\u65B0\u3002`})}
    <section class="card share-card" aria-labelledby="share-title">
      <header class="card-head">
        <h2 id="share-title" class="section-title">${c("receipt_long","sm")}\u5DF2\u8CB7\u5230\u7684\u5546\u54C1</h2>
        <span class="badge ${o<=0&&e?"badge-cyan":a.paid?"badge-warn":"badge-muted"}">${o<=0&&e?"\u5DF2\u4ED8\u6E05":a.paid?`\u5DF2\u4ED8 ${b(a.paid)}`:"\u5C1A\u672A\u4ED8\u6B3E"}</span>
      </header>
      ${a.items.length?`<ol class="share-list">
        ${a.items.map(n=>`<li><span>${d(n.name)}${n.qty>1?` \xD7 ${n.qty}`:""}</span><strong>${b(n.amount)}</strong></li>`).join("")}
      </ol>`:'<p class="muted pad">\u9084\u6C92\u6709\u8CB7\u5230\u7684\u5546\u54C1\u3002</p>'}
      <dl class="share-sum">
        ${a.fee?`<div><dt>\u5546\u54C1\u5C0F\u8A08</dt><dd>${b(a.goods)}</dd></div>
        <div><dt>\u4EE3\u8CFC\u8CBB${a.feeDesc?`\uFF08${d(a.feeDesc)}\uFF09`:""}</dt><dd>${b(a.fee)}</dd></div>`:""}
        <div class="strong"><dt>\u5408\u8A08</dt><dd>${b(e)}<small>\u7D04 ${s(e)}</small></dd></div>
        ${a.paid?`<div><dt>\u5DF2\u4ED8</dt><dd>${b(a.paid)}</dd></div>
        <div class="strong"><dt>${o>0?"\u5C1A\u5DEE":o<0?"\u591A\u4ED8":"\u9918\u984D"}</dt><dd>${b(Math.abs(o))}<small>\u7D04 ${s(Math.abs(o))}</small></dd></div>`:""}
      </dl>
      <p class="muted small">\u532F\u7387 1 JPY = ${ut(a.rate,4)} TWD${a.locked?"\uFF08\u5DF2\u9396\u5B9A\uFF09":""}\u3002${a.refund?`\u91D1\u984D\u70BA\u6263\u9664\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C\uFF08\u5DF2\u6263\u9000\u7A05 ${b(a.refund)}\uFF09\u3002`:""}</p>
      ${a.pending.length?`<p class="share-pending">${c("pending","sm")}\u9084\u6C92\u8CB7\u5230\uFF1A${a.pending.map(d).join("\u3001")}</p>`:""}
    </section>`,{}}var Ma={home:{view:Qa,title:"\u9996\u9801"},list:{view:es,title:"\u63A1\u8CB7\u6E05\u55AE"},split:{view:is,title:"\u4EE3\u8CFC\u5206\u5E33"},budget:{view:ls,title:"\u9810\u7B97\u532F\u7387"},packing:{view:us,title:"\u6253\u5305\u8207\u6D77\u95DC"},guide:{view:ms,title:"\u9000\u7A05\u6307\u5357",nav:"budget"},share:{view:fs,title:"\u4EE3\u8CFC\u660E\u7D30",nav:"none"}},hs=null;function ni(){let t=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0];return Ma[t]?t:"home"}function lo(){let t=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0];t==="areas"?(y.updateSettings({listView:"store"}),history.replaceState(null,"","#/list")):t==="luggage"&&history.replaceState(null,"","#/packing")}function bs(){let t=y.state;return{state:t,sum:ea(t),rate:t.settings.rate}}function co({focus:t=!0}={}){let a=ni();hs?.instance?.destroy?.();let e=document.createElement("div");e.id="view",e.className="view",bt("#view").replaceWith(e);let o=Ma[a].view.mount(e,bs());hs={name:a,instance:o},document.body.dataset.route=a,document.documentElement.classList.remove("boot-home","boot-intro","booting"),ma(),document.title=`${Ma[a].title}\uFF5CShopping Relics \u65E5\u672C\u8CFC\u7269\u6E05\u55AE`,Te("[data-route]").forEach(s=>{s.dataset.route===(Ma[a].nav||a)?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")}),t&&(window.scrollTo({top:0}),e.querySelector("h1")?.setAttribute("tabindex","-1"),e.querySelector("h1")?.focus({preventScroll:!0}))}"scrollRestoration"in history&&(history.scrollRestoration="manual");function uo(){let{state:t,sum:a}=bs(),e=bt("#hdr-rate");e.querySelector(".chip-v-full").textContent=`1 JPY = ${ut(t.settings.rate,4)} TWD`,e.querySelector(".chip-v-short").textContent=`\xA51,000 \u2248 NT$${ut(t.settings.rate*1e3)}`;let o=bt("#hdr-total"),s=Ee(o,".chip-v");bt("#hdr-total .chip-v").innerHTML=`${b(a.pay)} <small>/ ${a.count} \u4EF6</small>`,Me(o,".chip-v",s),ro("list",a.pendingCount,`${a.pendingCount} \u4EF6\u5F85\u8CB7`);let n=rs(t,a);ro("split",n,`${n} \u4F4D\u670B\u53CB\u5C1A\u672A\u6536\u9F4A`)}function ro(t,a,e){Te(`.nav-desktop [data-route="${t}"], .nav-mobile [data-route="${t}"]`).forEach(o=>{let s=o.querySelector(".nav-badge");if(!a){s?.remove();return}s||(s=document.createElement("span"),s.className="nav-badge",o.appendChild(s)),s.innerHTML=`<span aria-hidden="true">${a>99?"99+":a}</span><span class="sr-only">\uFF08${e}\uFF09</span>`})}y.subscribe(()=>{uo(),hs?.instance?.update?.(bs())});window.addEventListener("hashchange",()=>{lo(),co()});bt("#fab-add").addEventListener("click",()=>Ut());bt("#btn-settings").addEventListener("click",()=>jn());On(bt("#btn-theme"));var gs=scrollY;addEventListener("scroll",()=>{let t=scrollY;t>gs+8&&t>160?document.body.classList.add("fab-hide"):(t<gs-8||t<160)&&document.body.classList.remove("fab-hide"),gs=t},{passive:!0});dn();Un();document.addEventListener("app:add",t=>Ut(null,t.detail??{}));window.addEventListener("store:quota",()=>{N({title:"\u5132\u5B58\u7A7A\u9593\u4E0D\u8DB3",message:"\u700F\u89BD\u5668\u5BB9\u91CF\u5DF2\u6EFF\uFF0C\u8ACB\u79FB\u9664\u90E8\u5206\u5546\u54C1\u7167\u7247\u5F8C\u518D\u8A66\u3002",tone:"error",duration:8e3})});uo();lo();co({focus:!1});var io="shopping-relics:cloud-nudged";function po(){if(!(!He().ok||!Ae().linked||/^#\/home|^#?$/.test(location.hash))){try{if(sessionStorage.getItem(io))return;sessionStorage.setItem(io,"1")}catch{}pa(),N({title:"\u540C\u6B65 Google Drive \u6E05\u55AE\uFF1F",message:"\u53D6\u5F97\u5176\u4ED6\u88DD\u7F6E\u7684\u6700\u65B0\u4FEE\u6539\uFF0C\u4E4B\u5F8C\u7684\u4FEE\u6539\u4E5F\u6703\u81EA\u52D5\u4E0A\u50B3\u3002",actionText:"\u540C\u6B65",onAction:()=>xa(()=>Le({interactive:!0})),tone:"muted",duration:1e4})}}addEventListener("hashchange",po);po();Se().then(t=>{t.ok===!1&&console.info("\u532F\u7387\u66AB\u6642\u7121\u6CD5\u66F4\u65B0\uFF0C\u6CBF\u7528\u4E0A\u6B21\u6578\u503C")});})();
