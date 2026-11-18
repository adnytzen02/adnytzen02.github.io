(()=>{var _o=Object.defineProperty;var xe=(t,a)=>{for(var e in a)_o(t,e,{get:a[e],enumerable:!0})};var ke=[{id:"beauty",label:"\u85E5\u599D\u7F8E\u808C",icon:"spa"},{id:"luxury",label:"\u5C08\u6AC3\u7CBE\u54C1",icon:"diamond"},{id:"souvenir",label:"\u5FC5\u8CB7\u4F34\u624B\u79AE",icon:"bakery_dining"},{id:"tech",label:"3C \u5BB6\u96FB",icon:"devices"},{id:"anime",label:"\u52D5\u6F2B\u9650\u5B9A",icon:"sports_esports"},{id:"craft",label:"\u9802\u7D1A\u5DE5\u85DD",icon:"handyman"},{id:"liquor",label:"\u73CD\u7A00\u9298\u9152",icon:"liquor"},{id:"fashion",label:"\u670D\u98FE\u96DC\u8CA8",icon:"checkroom"},{id:"other",label:"\u5176\u4ED6",icon:"category"}],te=t=>ke.find(a=>a.id===t)??ke.at(-1),Nn=["\u9280\u5EA7","\u65B0\u5BBF","\u6F80\u8C37","\u6C60\u888B","\u79CB\u8449\u539F","\u4E0A\u91CE\u30FB\u6DFA\u8349","\u6771\u4EAC\u8ECA\u7AD9","\u8868\u53C3\u9053\u30FB\u539F\u5BBF","\u53F0\u5834","\u5927\u962A\u6885\u7530","\u5FC3\u9F4B\u6A4B\u30FB\u96E3\u6CE2","\u4EAC\u90FD","\u795E\u6236","\u540D\u53E4\u5C4B","\u798F\u5CA1\u5929\u795E","\u672D\u5E4C","\u6210\u7530\u6A5F\u5834","\u7FBD\u7530\u6A5F\u5834","\u95DC\u897F\u6A5F\u5834"],pa=[{value:3,stars:"\u2605\u2605\u2605",label:"\u5FC5\u8CB7"},{value:2,stars:"\u2605\u2605",label:"\u5FC3\u9858"},{value:1,stars:"\u2605",label:"\u9806\u4FBF"}],fa=t=>pa.find(a=>a.value===Number(t))??pa[1],Dn=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u306E\u5728\u5EAB\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u500B\u5546\u54C1\u9084\u6709\u73FE\u8CA8\u55CE\uFF1F"},{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"},{ja:"\u514D\u7A0E\u30AB\u30A6\u30F3\u30BF\u30FC\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u514D\u7A05\u6AC3\u53F0\u5728\u54EA\u88E1\uFF1F"},{ja:"\u30C6\u30B9\u30BF\u30FC\u3092\u8A66\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u8A66\u7528\u8A66\u7528\u54C1\u55CE\uFF1F"},{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u5F35\u512A\u60E0\u5238\u53EF\u4EE5\u4F7F\u7528\u55CE\uFF1F"},{ja:"\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u3067\u3001\u4E00\u62EC\u6255\u3044\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002",zh:"\u6211\u7528\u4FE1\u7528\u5361\u4E00\u6B21\u4ED8\u6E05\u3002"},{ja:"\u30D7\u30EC\u30BC\u30F3\u30C8\u7528\u306B\u5305\u88C5\u3057\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u505A\u79AE\u7269\u5305\u88DD\u55CE\uFF1F"},{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5E6B\u6211\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"},{ja:"\u888B\u3092\u5206\u3051\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u5206\u958B\u88DD\u888B\u55CE\uFF1F"},{ja:"\u30EC\u30B7\u30FC\u30C8\u3092\u304F\u3060\u3055\u3044\u3002",zh:"\u8ACB\u7D66\u6211\u6536\u64DA\u3002"}],qn=[{name:"\u5C71\u5D0E \u55AE\u4E00\u9EA5\u82BD\u5A01\u58EB\u5FCC 700ml",nameJa:"\u30B7\u30F3\u30B0\u30EB\u30E2\u30EB\u30C8\u30A6\u30A4\u30B9\u30AD\u30FC \u5C71\u5D0E 700ml",brand:"SUNTORY",category:"liquor",priority:3,qty:1,price:7700,priceIncludesTax:!0,taxRate:10,area:"\u7FBD\u7530\u6A5F\u5834",stores:["\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"],taxFree:!1,weightKg:1.4,luggage:"carry",fragile:!0,liquid:!0,purchased:!0,purchasedStore:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97",note:"\u51FA\u5883\u7BA1\u5236\u5340\u8CFC\u8CB7\uFF0C\u53EF\u96A8\u8EAB\u5E36\u4E0A\u6A5F\u3002"},{name:"EVE QUICK \u6B62\u75DB\u9320 40 \u9320",nameJa:"\u30A4\u30D6\u30AF\u30A4\u30C3\u30AF\u982D\u75DB\u85ACDX 40\u9320",brand:"SSP",category:"beauty",priority:3,qty:3,price:1480,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",stores:["\u677E\u672C\u6E05"],buyFor:"\u5C0F\u7F8E",weightKg:.05,luggage:"checked"},{name:"\u53C3\u5929\u773C\u85E5\u6C34",nameJa:"\u30B5\u30F3\u30C6 \u76EE\u85AC",brand:"Santen",category:"beauty",priority:2,qty:2,price:1280,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",stores:["\u677E\u672C\u6E05","\u5927\u570B\u85E5\u599D"],weightKg:.03,luggage:"checked",liquid:!0,note:"\u5169\u5BB6\u90FD\u6709\u8CE3\uFF0C\u54EA\u5BB6\u4FBF\u5B9C\u5C31\u5728\u54EA\u8CB7\u3002"},{name:"\u5C0F\u5F62\u7F8A\u7FB9 10 \u5165",nameJa:"\u5C0F\u5F62\u7F8A\u7FB9 10\u672C\u5165",brand:"\u864E\u5C4B TORAYA",category:"souvenir",priority:2,qty:2,price:3240,priceIncludesTax:!0,taxRate:8,taxFree:!0,area:"\u9280\u5EA7",stores:["\u4F0A\u52E2\u4E39"],buyFor:"\u5ABD\u5ABD",weightKg:.6,luggage:"checked",fragile:!0,note:"\u9001\u79AE\u7528\uFF0C\u8ACB\u5E97\u5BB6\u9644\u7D19\u888B\u3002"},{name:"\u8CC7\u751F\u5802 \u7CBE\u83EF\u6DB2 30ml",nameJa:"\u8CC7\u751F\u5802 \u7F8E\u5BB9\u6DB2 30ml",brand:"SHISEIDO",category:"luxury",priority:3,qty:1,price:38500,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:5,area:"\u9280\u5EA7",stores:["\u4F0A\u52E2\u4E39"],buyFor:"\u5C0F\u7F8E",weightKg:.4,luggage:"checked",fragile:!0,liquid:!0,purchased:!0,purchasedStore:"\u4F0A\u52E2\u4E39"},{name:"Tanker 2Way \u516C\u4E8B\u5305",nameJa:"\u30BF\u30F3\u30AB\u30FC 2WAY\u30D6\u30EA\u30FC\u30D5\u30B1\u30FC\u30B9",brand:"PORTER",category:"fashion",priority:2,qty:1,price:42e3,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["PORTER \u6F80\u8C37"],weightKg:1,luggage:"checked"},{name:"nanocare \u5439\u98A8\u6A5F",nameJa:"\u30D8\u30A2\u30FC\u30C9\u30E9\u30A4\u30E4\u30FC \u30CA\u30CE\u30B1\u30A2",brand:"Panasonic",category:"tech",priority:2,qty:1,price:38610,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:7,area:"\u6709\u6A02\u753A",stores:["Bic Camera","Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09"],weightKg:.9,luggage:"checked",note:"\u78BA\u8A8D\u662F\u5426\u6709\u6D77\u5916\u96FB\u58D3\u7248\u672C\u3002"},{name:"\u4EFB\u5929\u5802 \u9650\u5B9A\u5468\u908A",nameJa:"Nintendo TOKYO \u9650\u5B9A\u30B0\u30C3\u30BA",brand:"Nintendo TOKYO",category:"anime",priority:1,qty:1,price:5500,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["\u4EFB\u5929\u5802\u5546\u5E97"],buyFor:"\u963F\u54F2",weightKg:.8,luggage:"checked"},{name:"\u7D05\u8336\u5DE7\u514B\u529B",nameJa:"\u30ED\u30A4\u30E4\u30EB\u30E2\u30F3\u30BF\u30FC\u30CB\u30E5",brand:"LeTAO",category:"souvenir",priority:1,qty:4,price:918,priceIncludesTax:!0,taxRate:8,area:"\u7FBD\u7530\u6A5F\u5834",stores:["\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"],taxFree:!1,weightKg:.15,luggage:"carry",purchased:!0,purchasedStore:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97"},{name:"\u62B9\u8336\u7C89 40g",nameJa:"\u62B9\u8336 40g\u7F36",brand:"\u4E00\u4FDD\u5802\u8336\u8217",category:"souvenir",priority:2,qty:2,price:2160,priceIncludesTax:!0,taxRate:8,taxFree:!1,area:"\u4EAC\u90FD",stores:["\u4E00\u4FDD\u5802\u8336\u8217 \u4EAC\u90FD\u672C\u5E97"],weightKg:.12,luggage:"checked",note:"\u55AE\u5E97\u672A\u9054\u514D\u7A05\u9580\u6ABB\u4E5F\u6C92\u95DC\u4FC2\u3002"},{name:"\u6307\u7532\u526A",nameJa:"\u722A\u5207\u308A",brand:"\u8C9D\u5370 KAI",category:"craft",priority:2,qty:2,price:1100,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09","LoFt"],buyFor:"\u963F\u54F2",weightKg:.05,luggage:"checked",blade:!0,purchased:!0,purchasedStore:"Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09"},{name:"\u5408\u5229\u4ED6\u547D EX Plus",nameJa:"\u30A2\u30EA\u30CA\u30DF\u30F3EX\u30D7\u30E9\u30B9",brand:"Alinamin",category:"beauty",priority:3,qty:1,price:6578,priceIncludesTax:!0,taxRate:10,taxFree:!0,anyStore:!0,weightKg:.2,luggage:"checked",note:"\u5230\u8655\u90FD\u6709\uFF0C\u770B\u5230\u4FBF\u5B9C\u5C31\u8CB7\u3002"},{name:"\u4F11\u8DB3\u6642\u9593 \u8CBC\u5E03",nameJa:"\u4F11\u8DB3\u6642\u9593",brand:"Lion",category:"beauty",priority:1,qty:3,price:1078,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",stores:["\u5510\u5409\u8A36\u5FB7"],weightKg:.15,luggage:"checked"}],Ye=[{text:"\u8B77\u7167",done:!1},{text:"\u884C\u52D5\u96FB\u6E90\uFF08\u96A8\u8EAB\u3001\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u4E0D\u80FD\u7528\uFF09",done:!1},{text:"\u884C\u674E\u79E4",done:!1},{text:"\u6613\u788E\u54C1\u7528\u6C23\u6CE1\u888B",done:!1}];function st(t){return String(t??"").normalize("NFKC").toLowerCase().replace(/[\s・·•\-‐–—_()（）「」『』[\]【】.,，、。/／|]/g,"")}var jn=t=>st(t).replace(/(本店|本館|店舗|店)$/,"");function On(t,a){if(!st(t)||st(t)===st(a))return!1;let e=jn(t),s=jn(a);if(!e||!s)return!1;if(e===s)return!0;let n=e.length<=s.length?e:s,o=e.length<=s.length?s:e;if(n.length>=3&&o.includes(n))return!0;let r=new Set(e),i=new Set(s),d=[...r].filter(m=>i.has(m)).length/new Set([...r,...i]).size;return n.length>=2&&d>=.75&&Math.abs(e.length-s.length)<=3}function Bn(t,a){let e=st(t);if(!e)return[];let s=new Set;return a.filter(n=>{let o=st(n);return o===e||s.has(o)?!1:(s.add(o),On(t,n))})}function Un(t,a=[]){let e=[...new Map(t.filter(Boolean).map(n=>[st(n),n.trim()])).values()],s=[];for(let n=0;n<e.length;n++)for(let o=n+1;o<e.length;o++){if(!On(e[n],e[o]))continue;let r=Ba(e[n],e[o]);a.includes(r)||s.push([e[n],e[o]])}return s}var Ba=(t,a)=>[st(t),st(a)].sort().join("\uFF5C");var Gn="shopping-relics:v1",ma={tripName:"\u6211\u7684\u65E5\u672C\u8CFC\u7269\u4E4B\u65C5",rate:.21,rateSource:"default",rateUpdatedAt:null,budget:15e4,refundFeePct:0,cardRebatePct:0,checkedLimit:23,carryLimit:7,checkedBase:8,carryBase:3,flightNote:"",ignoredStorePairs:[],customStores:[],storeMeta:{},paidFriends:{},payLog:{},inspectedGroups:{},friendMeta:{},listView:"store"},No=()=>crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`;function oe(t={}){let a=r=>String(r??"").trim(),e=Array.isArray(t.stores)?t.stores.map(a).filter(Boolean):a(t.store)?[a(t.store)]:[];e=e.filter((r,i)=>e.findIndex(l=>st(l)===st(r))===i).slice(0,3);let s=!!t.anyStore&&e.length===0,n=!!t.purchased,o=n?a(t.purchasedStore??(Array.isArray(t.stores)?"":t.store)):"";return{id:t.id||No(),name:String(t.name??"").trim(),nameJa:String(t.nameJa??"").trim(),brand:String(t.brand??"").trim(),category:t.category||"other",priority:Number(t.priority)||2,qty:Math.max(1,Math.round(Number(t.qty)||1)),price:Math.max(0,Number(t.price)||0),priceIncludesTax:t.priceIncludesTax!==!1,taxRate:[1,8].includes(Number(t.taxRate))?Number(t.taxRate):10,taxFree:t.taxFree!==!1,discountPct:Math.min(100,Math.max(0,Number(t.discountPct)||0)),refundFeePct:t.refundFeePct===""||t.refundFeePct==null?null:Number(t.refundFeePct),area:String(t.area??"").trim(),stores:e,anyStore:s,purchasedStore:o,store:n?o||e[0]||"":e[0]||"",buyFor:String(t.buyFor??"").replace(/^[@＠]+/,"").trim(),planDate:t.planDate||"",jan:String(t.jan??"").replace(/\D/g,""),weightKg:Math.max(0,Number(t.weightKg)||0),luggage:["checked","carry","none"].includes(t.luggage)?t.luggage:"checked",fragile:!!t.fragile,liquid:!!t.liquid,battery:!!t.battery,blade:!!t.blade,packed:!!t.packed,purchased:n,purchasedAt:t.purchasedAt||null,image:t.image||"",note:String(t.note??""),demo:!!t.demo,createdAt:t.createdAt||Date.now()}}function Do(){try{let t=JSON.parse(localStorage.getItem(Gn)||"null");if(t&&Array.isArray(t.items))return{items:t.items.map(oe),settings:{...ma,...t.settings},packing:Array.isArray(t.packing)?t.packing:structuredClone(Ye)}}catch{}return{items:[],settings:{...ma},packing:structuredClone(Ye)}}var it=Do(),Ua=new Set;function qo(){try{return localStorage.setItem(Gn,JSON.stringify(it)),!0}catch(t){return console.warn("\u5132\u5B58\u5931\u6557",t),window.dispatchEvent(new CustomEvent("store:quota")),!1}}function Gt(){let t=qo();return Ua.forEach(a=>a(it)),t}var w={get state(){return it},subscribe(t){return Ua.add(t),()=>Ua.delete(t)},getItem(t){return it.items.find(a=>a.id===t)},addItem(t){let a=oe(t);return it.items=[a,...it.items],Gt(),a},updateItem(t,a){return it.items=it.items.map(e=>e.id===t?oe({...e,...a,id:t}):e),Gt()},removeItem(t){let a=this.getItem(t);return it.items=it.items.filter(e=>e.id!==t),Gt(),a},restoreItem(t,a=0){let e=[...it.items];e.splice(a,0,t),it.items=e,Gt()},togglePurchased(t,a,e){let s=this.getItem(t);if(!s)return null;let n=a??!s.purchased;return this.updateItem(t,{purchased:n,purchasedAt:n?Date.now():null,purchasedStore:n?e??s.stores[0]??"":""}),this.getItem(t)},addCustomStore(t){let a=String(t??"").trim();!a||it.settings.customStores.some(e=>st(e)===st(a))||(it.settings={...it.settings,customStores:[...it.settings.customStores,a]},Gt())},setStoreMeta(t,a){let e=st(t),s={...it.settings.storeMeta,[e]:{...it.settings.storeMeta[e],...a}};it.settings={...it.settings,storeMeta:s},Gt()},renameStore(t,a){let e=st(t),s=n=>st(n)===e?a:n;return it.items=it.items.map(n=>oe({...n,stores:n.stores.map(s),purchasedStore:s(n.purchasedStore)})),it.settings={...it.settings,customStores:it.settings.customStores.map(s)},Gt()},updateSettings(t){it.settings={...it.settings,...t},Gt()},setPacking(t){it.packing=t,Gt()},loadDemo(){let t=Date.now(),a=qn.map((e,s)=>oe({...e,demo:!0,createdAt:t-s*1e3}));it.items=[...it.items,...a],Gt()},clearDemo(){it.items=it.items.filter(t=>!t.demo),Gt()},exportJSON(){return JSON.stringify({app:"shopping-relics",version:1,exportedAt:new Date().toISOString(),...it},null,2)},dataJSON(){return JSON.stringify(it)},importJSON(t){this.importData(JSON.parse(t))},importData(t){if(!t||!Array.isArray(t.items))throw new Error("\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26");it={items:t.items.map(oe),settings:{...ma,...t.settings},packing:Array.isArray(t.packing)?t.packing:structuredClone(Ye)},Gt()},resetAll(){it={items:[],settings:{...ma},packing:structuredClone(Ye)},Gt()}};var Jn="2026/11/7",pe="\u4E0D\u9650\u5E97\u92EA\uFF08\u6BD4\u50F9\u4E2D\uFF09",jo="\u767E\u8CA8\u9000\u7A05\u591A\u534A\u6703\u6536\u624B\u7E8C\u8CBB\uFF0C\u65B0\u5236\u8CBB\u7387\u4F9D\u5E97\u5BB6\u516C\u544A\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF1A\u9AD8\u5CF6\u5C4B 1.55%\u3001\u5927\u4E38\uFF0F\u677E\u5742\u5C4B 2.3%\uFF09\u3002",Ve=[{id:"drug",label:"\u85E5\u599D\u7F8E\u599D",icon:"spa",stores:[{name:"\u677E\u672C\u6E05"},{name:"\u5927\u570B\u85E5\u599D"},{name:"Sundrug\uFF08\u5C1A\u90FD\u6A02\u5BA2\uFF09",coupons:[{pct:3,min:1e4},{pct:5,min:3e4},{pct:7,min:5e4}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA510,000\uFF0F\xA530,000\uFF0F\xA550,000\uFF0C\u5206\u5225\u518D\u6298 3%\uFF0F5%\uFF0F7%\uFF1B\u5C08\u6AC3\u4FDD\u990A\u54C1\u3001\u83F8\u9152\u7B49\u9664\u5916\uFF0C\u7D50\u5E33\u524D\u51FA\u793A\u3002",couponUrl:"https://app.likejapan.com/en-us/coupon/SUNDRUG-pharmacy-coupon-7percent",source:"LikeJapan\uFF082025/12 \u66F4\u65B0\uFF09"},{name:"OS Drug",noTaxFree:!0,note:"\u4F9D\u4F60\u7684\u5099\u8A3B\uFF1A\u4E0D\u8FA6\u514D\u7A05\uFF0C\u4F46\u73FE\u91D1\u50F9\u5F88\u4F4E\u3002"},{name:"@cosme TOKYO"}]},{id:"variety",label:"\u7D9C\u5408\u8CE3\u5834\uFF0F\u96DC\u8CA8",icon:"storefront",stores:[{name:"\u5510\u5409\u8A36\u5FB7",coupons:[{pct:5,min:1e4},{pct:7,min:3e4}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA510,000 \u518D\u6298 5%\u3001\u6EFF \xA530,000 \u6298 7%\uFF1B\u9152\u3001\u83F8\u3001\u904A\u6232\u4E3B\u6A5F\u7B49\u9664\u5916\u3002\u9700\u7D50\u5E33\u524D\u51FA\u793A\u5373\u6642\u689D\u78BC\uFF0C\u622A\u5716\u7121\u6548\u3002",couponUrl:"https://livejapan.com/public/operation/coupon/donki/ja.html",source:"LIVE JAPAN\uFF082026/4/28 \u66F4\u65B0\uFF09",refundFeePct:0,feeNote:"\u65B0\u5236\u9000\u7A05\u624B\u7E8C\u8CBB 0 \u5143\uFF1A\u6BCD\u516C\u53F8 PPIH \u5BA3\u5E03 2026/11/1 \u8D77\u5168\u65E5\u672C\u9580\u5E02\u7531\u5E97\u5BB6\u5438\u6536\uFF08\u671F\u9593\u8207\u689D\u4EF6\u53EF\u80FD\u8ABF\u6574\uFF09\u3002\u82E5\u5230\u6A5F\u5834\u9818\u73FE\u91D1\uFF0C\u6A5F\u53F0\u696D\u8005\u4ECD\u6703\u53E6\u6536\u670D\u52D9\u8CBB\u3002"},{name:"LoFt"},{name:"Hands\uFF08\u6771\u6025\u624B\u5275\u9928\uFF09"},{name:"\u7121\u5370\u826F\u54C1"},{name:"3COINS"},{name:"Life \u8D85\u5E02"},{name:"\u696D\u52D9\u8D85\u5E02"}]},{id:"tech",label:"\u96FB\u5668\uFF0F\u52D5\u6F2B",icon:"devices",stores:[{name:"Bic Camera",coupons:[{pct:7,min:5e3,label:"\u5BB6\u96FB\u30FB\u76F8\u6A5F\u30FB\u624B\u9336",categories:["tech","craft"]},{pct:5,min:5e3,label:"\u85E5\u599D\u30FB\u65E5\u7528\u54C1",categories:["beauty","other","fashion"]},{pct:3,min:5e3,label:"\u65E5\u672C\u9152",categories:["liquor"]}],couponNote:"\u514D\u7A05\u5546\u54C1\u672A\u7A05\u6EFF \xA55,000\uFF0C\u4F9D\u985E\u5225\u518D\u6298 7%\uFF08\u5BB6\u96FB\u3001\u76F8\u6A5F\u3001\u624B\u9336\uFF09\uFF0F5%\uFF08\u85E5\u599D\u3001\u65E5\u7528\u54C1\uFF09\uFF0F3%\uFF08\u65E5\u672C\u9152\uFF09\uFF1BApple\u3001\u904A\u6232\u4E3B\u6A5F\u7B49\u9664\u5916\u3002\u5B98\u65B9\u9801\u9762\u6A19\u793A\u6709\u6548\u81F3 2026/8/31\uFF0C\u8ACB\u78BA\u8A8D\u65B0\u7248\u512A\u60E0\u5238\u3002",couponUrl:"https://livejapan.com/public/operation/coupon/biccamera/en.html",source:"LIVE JAPAN",refundFeePct:0,feeNote:"\u65B0\u5236\u9000\u7A05\u624B\u7E8C\u8CBB 0 \u5143\uFF08\u4F9D 2026/10 \u5831\u5C0E\uFF0C\u7531\u5E97\u5BB6\u5438\u6536\uFF0C\u689D\u4EF6\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002\u82E5\u5230\u6A5F\u5834\u9818\u73FE\u91D1\uFF0C\u6A5F\u53F0\u696D\u8005\u4ECD\u6703\u53E6\u6536\u670D\u52D9\u8CBB\u3002"},{name:"Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09",feeNote:"\u90E8\u5206\u5927\u578B\u9580\u5E02\u8A2D\u6709 Global Blue \u5E02\u5340\u73FE\u91D1\u9000\u7A05\u6AC3\u53F0\uFF0C\u53EF\u5728\u5E97\u5167\u5148\u9818\u73FE\u91D1\uFF08\u9700\u767B\u8A18\u4FE1\u7528\u5361\u64D4\u4FDD\uFF09\uFF1B\u51FA\u5883\u6642\u4ECD\u8981\u5728\u6A5F\u5834\u5B8C\u6210\u6D77\u95DC\u78BA\u8A8D\uFF0C\u5426\u5247\u6703\u5F9E\u4FE1\u7528\u5361\u6263\u56DE\u3002\u5E97\u5BB6\u624B\u7E8C\u8CBB\u9996\u65E5\u56DE\u5831\u70BA 0%\uFF08\u5C1A\u5F85\u5B98\u65B9\u516C\u544A\uFF09\u3002"},{name:"Animate\uFF08\u5B89\u5229\u7F8E\u7279\uFF09"},{name:"\u79CB\u8449\u539F\u5C08\u8CE3\u5E97"},{name:"\u4E2D\u91CE\u767E\u8001\u532F"},{name:"\u5BF6\u53EF\u5922\u4E2D\u5FC3"},{name:"\u4EFB\u5929\u5802\u5546\u5E97"}]},{id:"gift",label:"\u4F34\u624B\u79AE\uFF0F\u767E\u8CA8",icon:"bakery_dining",stores:[{name:"\u6210\u7530\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u7FBD\u7530\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u95DC\u897F\u6A5F\u5834\u514D\u7A05\u5E97",dutyFree:!0},{name:"\u6771\u4EAC\u8ECA\u7AD9\u4E00\u756A\u8857"},{name:"\u4F0A\u52E2\u4E39",dept:!0},{name:"\u9AD8\u5CF6\u5C4B",dept:!0,feeNote:"\u65B0\u5236\u9000\u7A05\u516C\u53F8\u70BA Global Blue\uFF0C\u624B\u7E8C\u8CBB 1.55%\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF0C\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002"},{name:"\u5927\u4E38",dept:!0,feeNote:"\u65B0\u5236\u9000\u7A05\u516C\u53F8\u70BA Global Blue\uFF0C\u5927\u4E38\uFF0F\u677E\u5742\u5C4B\u624B\u7E8C\u8CBB 2.3%\uFF0811/1 \u9996\u65E5\u56DE\u5831\uFF0C\u4EE5\u5E97\u5167\u516C\u544A\u70BA\u6E96\uFF09\u3002"},{name:"\u962A\u6025\u767E\u8CA8",dept:!0,couponNote:"\u51FA\u793A\u8B77\u7167\u53EF\u9818\u5916\u570B\u65C5\u5BA2 5% \u512A\u5F85\u5238\uFF0C\u767C\u5238\u8D77 7 \u5929\u5167\u53EF\u7528\uFF1B\u7279\u50F9\u54C1\u3001\u98DF\u54C1\u3001\u672A\u7A05 \xA51,000 \u4EE5\u4E0B\u5546\u54C1\u9664\u5916\u3002",couponUrl:"https://global.hankyu-hanshin-dept.co.jp/store/hankyuhonten/service/",source:"\u962A\u6025\u767E\u8CA8\u5B98\u7DB2"}]},{id:"cvs",label:"\u4FBF\u5229\u5546\u5E97",icon:"local_convenience_store",stores:[{name:"7-11"},{name:"Lawson"},{name:"FamilyMart"}]}],Hn=new Map;for(let t of Ve)for(let a of t.stores)Hn.set(st(a.name),{...a,group:t.id});function re(t){return Hn.get(st(t))??null}function Se(t,a={}){let e=re(t)??{},s=a[st(t)]??{},n={...e,...s,name:t};return e.dept&&!n.feeNote&&(n.feeNote=jo),e.dutyFree&&(n.dutyNote="\u51FA\u5883\u7BA1\u5236\u5340\u5167\u7684\u514D\u7A05\u5E97\u552E\u50F9\u5DF2\u4E0D\u542B\u6D88\u8CBB\u7A05\uFF0C\u4E0D\u9700\u53E6\u8FA6\u9000\u7A05\u3002"),n}function zn(t,a){return t?.coupons?.length?t.coupons.find(s=>s.categories?.includes(a))??null:null}var dt=5e3;var jt=t=>Math.round(t);function zt(t){return t.battery?"carry":t.blade||t.liquid&&!(t.purchased&&re(t.purchasedStore)?.dutyFree)?"checked":t.luggage}var fe=t=>{let a=new Date(t);return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`};function Fe(t,a){let e=t.taxRate/100,s=t.priceIncludesTax?t.price/(1+e):t.price,n=1-t.discountPct/100,o=s*n*t.qty,r=o*e,i=o+r,l=t.refundFeePct??re(t.purchasedStore||t.store)?.refundFeePct??a.refundFeePct??0,d=s*(1+e)*t.qty;return{unitExcl:jt(s),unitIncl:jt(s*(1+e)),listIncl:jt(d),discount:jt(d-i),lineExcl:jt(o),tax:jt(r),pay:jt(i),fee:jt(i*(l/100)),feePct:l}}var Oo=t=>`${st(t.store)}|${t.purchased&&t.purchasedAt?fe(t.purchasedAt):t.planDate||fe(Date.now())}`;function Bo(t,a){let e=new Map;for(let s of t){let n=s.store.trim()?Oo(s):`__solo__${s.id}`;e.has(n)||e.set(n,{key:n,store:s.store.trim(),area:s.area,date:s.purchased&&s.purchasedAt?fe(s.purchasedAt):s.planDate||"",items:[],eligibleExcl:0,totalPay:0});let o=e.get(n),r=Fe(s,a);o.items.push(s),o.totalPay+=r.pay,s.taxFree&&(o.eligibleExcl+=r.lineExcl),!o.area&&s.area&&(o.area=s.area)}for(let s of e.values())s.hasTaxFreeItems=s.items.some(n=>n.taxFree),s.eligible=s.hasTaxFreeItems&&s.eligibleExcl>=dt,s.shortfall=Math.max(0,dt-s.eligibleExcl),s.progress=Math.min(1,s.eligibleExcl/dt),s.undatedMerge=!!s.store&&!s.date&&s.hasTaxFreeItems&&s.items.filter(n=>n.taxFree).length>=2,s.mergeNeeded=s.undatedMerge&&s.eligible&&s.items.every(n=>!n.taxFree||Fe(n,a).lineExcl<dt);return e}function Te(t,a){let e=Bo(t,a),s=new Map;for(let n of e.values())for(let o of n.items){let r=Fe(o,a),i=o.taxFree&&n.eligible,l=i?Math.max(0,r.tax-r.fee):0;s.set(o.id,{...r,refundable:i,refund:l,net:r.pay-l,group:n,weight:o.weightKg*o.qty})}return{groups:e,byItem:s}}function Re(t){let{items:a,settings:e}=t,{groups:s,byItem:n}=Te(a,e),o={count:a.length,purchasedCount:0,pendingCount:0,pay:0,paid:0,pending:0,refund:0,refundPaid:0,net:0,discount:0,weightChecked:0,weightCarry:0,weightCheckedNow:0,weightCarryNow:0,packedCount:0,packableCount:0,groups:s,byItem:n};for(let r of a){let i=n.get(r.id);o.pay+=i.pay,o.refund+=i.refund,o.net+=i.net,o.discount+=i.discount,r.purchased?(o.purchasedCount+=1,o.paid+=i.pay,o.refundPaid+=i.refund):(o.pendingCount+=1,o.pending+=i.pay);let l=zt(r);l==="checked"&&(o.weightChecked+=i.weight),l==="carry"&&(o.weightCarry+=i.weight),r.purchased&&l==="checked"&&(o.weightCheckedNow+=i.weight),r.purchased&&l==="carry"&&(o.weightCarryNow+=i.weight),l!=="none"&&(o.packableCount+=1,r.packed&&(o.packedCount+=1))}return o.remaining=e.budget-o.pay,o.budgetUsedPct=e.budget>0?o.paid/e.budget:0,o.budgetPlannedPct=e.budget>0?o.pay/e.budget:0,o.rebate=Math.round(o.pay*(e.cardRebatePct/100)),o.totalChecked=e.checkedBase+o.weightChecked,o.totalCarry=e.carryBase+o.weightCarry,o.totalCheckedNow=e.checkedBase+o.weightCheckedNow,o.totalCarryNow=e.carryBase+o.weightCarryNow,o.undatedGroups=[...s.values()].filter(r=>r.undatedMerge),o.eligibleStores=[...s.values()].filter(r=>r.eligible).length,o.taxFreeStores=[...s.values()].filter(r=>r.hasTaxFreeItems&&r.store).length,o}function Wn({price:t,includesTax:a,taxRate:e,discountPct:s,feePct:n}){let o=e/100,r=(a?t/(1+o):t)*(1-s/100),i=r*o,l=r+i,d=r>=dt,m=l*(n/100),h=d?Math.max(0,i-m):0,f=a?t:t*(1+o);return{excl:jt(r),tax:jt(i),pay:jt(l),fee:jt(m),refund:jt(h),net:jt(l-h),eligible:d,saved:jt(f-(l-h))}}var Uo=35e3,Kn="2026/11/11";function Yn(t,a){let{rate:e}=t.settings,s={now:0,planned:0,count:0,liquorCount:0,limit:Uo};for(let n of t.items){if(zt(n)==="none")continue;if(n.category==="liquor"){n.purchased&&(s.liquorCount+=1);continue}let o=a.byItem.get(n.id).net*e;s.planned+=o,n.purchased&&(s.now+=o,s.count+=1)}return s.now=Math.round(s.now),s.planned=Math.round(s.planned),s.over=Math.max(0,s.now-s.limit),s.plannedOver=Math.max(0,s.planned-s.limit),s}var Go=[{name:"ExchangeRate-API",url:"https://open.er-api.com/v6/latest/JPY",pick:t=>t?.result==="success"?t.rates?.TWD:void 0},{name:"fawazahmed0 currency-api",url:"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/jpy.min.json",pick:t=>t?.jpy?.twd}],Jo=6*60*60*1e3;async function Ho(t,a=8e3){let e=new AbortController,s=setTimeout(()=>e.abort(),a);try{let n=await fetch(t,{signal:e.signal,cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);return await n.json()}finally{clearTimeout(s)}}async function Ie({force:t=!1}={}){let{settings:a}=w.state;if(!t&&a.rateSource==="manual")return{skipped:"manual"};if(!t&&a.rateUpdatedAt&&Date.now()-a.rateUpdatedAt<Jo)return{skipped:"fresh"};for(let e of Go)try{let s=Number(e.pick(await Ho(e.url)));if(s>0&&s<10)return w.updateSettings({rate:s,rateSource:"api",rateUpdatedAt:Date.now(),rateProvider:e.name}),{ok:!0,rate:s,provider:e.name}}catch(s){console.info(`\u532F\u7387\u4F86\u6E90 ${e.name} \u7121\u6CD5\u4F7F\u7528\uFF1A`,s.message)}return{ok:!1}}function ga(t){w.updateSettings({rate:t,rateSource:"manual",rateUpdatedAt:Date.now(),rateProvider:"\u624B\u52D5\u8F38\u5165"})}var zo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u=t=>String(t??"").replace(/[&<>"']/g,a=>zo[a]),vt=(t,a=document)=>a.querySelector(t),_e=(t,a=document)=>[...a.querySelectorAll(t)],Wo=new Intl.NumberFormat("ja-JP"),Ko=new Intl.NumberFormat("zh-TW",{maximumFractionDigits:0}),y=t=>`\xA5${Wo.format(Math.round(t||0))}`,$t=(t,a)=>`NT$ ${Ko.format(Math.round((t||0)*a))}`,ut=(t,a=0)=>new Intl.NumberFormat("zh-TW",{minimumFractionDigits:a,maximumFractionDigits:a}).format(t||0),Vt=t=>`${ut(t,t>=10?1:2)} kg`;var Vn=t=>{let a=String(t).match(/-?\d[\d,]*(\.\d+)?/);return a?{str:a[0],val:parseFloat(a[0].replace(/,/g,""))}:null};function Ne(t,a){let e=new Map;return t?.querySelectorAll(a).forEach((s,n)=>e.set(s.dataset.countKey??n,s.textContent)),e}function De(t,a,e){!t||matchMedia("(prefers-reduced-motion: reduce)").matches||t.querySelectorAll(a).forEach((s,n)=>{let o=e.get(s.dataset.countKey??n);if(o==null)return;let r=Vn(o),i=Vn(s.textContent);if(!r||!i||r.val===i.val)return;let l=document.createTreeWalker(s,NodeFilter.SHOW_TEXT),d=l.nextNode();for(;d&&!d.nodeValue.includes(i.str);)d=l.nextNode();if(!d)return;let m=(i.str.split(".")[1]||"").length,h=v=>v.toLocaleString("en-US",{minimumFractionDigits:m,maximumFractionDigits:m}),f=d.nodeValue,k=performance.now(),g=v=>{let p=Math.min(1,(v-k)/400),$=1-(1-p)**3;d.nodeValue=p<1?f.replace(i.str,h(r.val+(i.val-r.val)*$)):f,p<1&&requestAnimationFrame(g)};requestAnimationFrame(g)})}var c=(t,a="")=>`<span class="ms ${a}" aria-hidden="true">${t}</span>`;function Xe(t){if(!t)return"";let a=typeof t=="number"?new Date(t):new Date(`${t}T00:00:00`);return new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",weekday:"short"}).format(a)}function Ot(t){return t?new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)):""}var Ga=[];function Bt(t,{onClose:a,backdropClose:e=!0}={}){let s=document.activeElement;t.addEventListener("close",function o(){t.removeEventListener("close",o);let r=Ga.indexOf(t);r>-1&&Ga.splice(r,1),a?.(),s&&document.contains(s)&&s.focus({preventScroll:!0})}),e&&t.addEventListener("click",o=>{o.target===t&&mt(t)}),Ga.push(t),t.showModal(),(t.querySelector("[autofocus]")??t.querySelector(".dlg-close"))?.focus()}function Yo(t){let a=document.getElementById("toast-region");if(!a||!t.contains(a))return;([...document.querySelectorAll("dialog[open]:not(.closing)")].filter(s=>s!==t).at(-1)??document.body).append(a)}function mt(t){if(!t?.open)return;let a=matchMedia("(prefers-reduced-motion: reduce)").matches,e=()=>{Yo(t),t.close(),t.remove()};if(a){e();return}t.classList.add("closing"),setTimeout(e,180)}function Ut(t,a,e){let s=document.createElement("dialog");return s.className=`dlg ${t}`,e&&s.setAttribute("aria-labelledby",e),s.innerHTML=a,document.body.append(s),s.addEventListener("cancel",n=>{n.preventDefault(),mt(s)}),s}function Wt({title:t,body:a,confirmText:e,danger:s=!1}){return new Promise(n=>{let o=!1,r=Ut("dlg-confirm",`
      <form method="dialog" class="confirm-body">
        <h2 id="confirm-title" class="confirm-title">${u(t)}</h2>
        <p class="confirm-text">${a}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-act="cancel" autofocus>\u53D6\u6D88</button>
          <button type="button" class="btn ${s?"btn-danger":"btn-gold"}" data-act="ok">${u(e)}</button>
        </div>
      </form>`,"confirm-title");r.addEventListener("click",i=>{let l=i.target.closest("[data-act]")?.dataset.act;l&&(o=l==="ok",mt(r))}),Bt(r,{onClose:()=>n(o)})})}function Zn({title:t,body:a,choices:e}){return new Promise(s=>{let n=null,o=Ut("dlg-confirm",`
      <form method="dialog" class="confirm-body">
        <h2 id="choice-title" class="confirm-title">${u(t)}</h2>
        <div class="confirm-text">${a}</div>
        <div class="confirm-actions confirm-actions-stack">
          ${e.map(r=>`<button type="button" class="btn ${r.tone==="danger"?"btn-danger":r.tone==="gold"?"btn-gold":"btn-ghost"}" data-choice="${u(r.value)}">${r.icon?c(r.icon):""}${u(r.text)}</button>`).join("")}
          <button type="button" class="btn btn-ghost" data-choice="" autofocus>\u53D6\u6D88</button>
        </div>
      </form>`,"choice-title");o.addEventListener("click",r=>{let i=r.target.closest("[data-choice]");i&&(n=i.dataset.choice||null,mt(o))}),Bt(o,{onClose:()=>s(n)})})}var Xn;function G({title:t,message:a="",actionText:e,onAction:s,tone:n="gold",duration:o=5e3}){let r=vt("#toast-region");clearTimeout(Xn),r.innerHTML=`
    <div class="toast toast-${n}" role="status">
      <span class="toast-icon">${c(n==="error"?"error":"stars")}</span>
      <div class="toast-text">
        <strong>${u(t)}</strong>
        ${a?`<span>${a}</span>`:""}
      </div>
      ${e?`<button type="button" class="toast-action">${u(e)}</button>`:""}
      <button type="button" class="toast-close" aria-label="\u95DC\u9589\u901A\u77E5">${c("close")}</button>
    </div>`;let i=r.firstElementChild,l=[...document.querySelectorAll("dialog[open]:not(.closing)")].at(-1);l&&r.parentElement!==l?l.append(r):!l&&r.parentElement!==document.body&&document.body.append(r);let d=()=>{i.classList.add("out"),setTimeout(()=>i.remove(),200)};i.querySelector(".toast-close").addEventListener("click",d),i.querySelector(".toast-action")?.addEventListener("click",()=>{s?.(),d()}),Xn=setTimeout(d,o)}var ha=["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],Vo=ha.map(t=>[...t].map(a=>a==="0"?"1":"0").reverse().join("")),Qn=ha.map(t=>[...t].map(a=>a==="0"?"1":"0").join("")),Xo=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];function Qe(t){if(!/^\d{13}$/.test(t)&&!/^\d{8}$/.test(t))return!1;let a=[...t].map(Number),e=a.pop();return(10-a.reverse().reduce((n,o,r)=>n+o*(r%2===0?3:1),0)%10)%10===e}function ts(t){if(!Qe(t))return"";let a=[...t].map(Number),e="101";if(a.length===13){let r=Xo[a[0]];for(let i=1;i<=6;i++)e+=(r[i-1]==="L"?ha:Vo)[a[i]];e+="01010";for(let i=7;i<=12;i++)e+=Qn[a[i]]}else{for(let r=0;r<4;r++)e+=ha[a[r]];e+="01010";for(let r=4;r<8;r++)e+=Qn[a[r]]}e+="101";let s=9,n=e.length+s*2,o="";return[...e].forEach((r,i)=>{r==="1"&&(o+=`<rect x="${i+s}" y="0" width="1" height="50"/>`)}),`<svg class="barcode" viewBox="0 0 ${n} 50" preserveAspectRatio="none" role="img" aria-label="JAN \u689D\u78BC ${t}"><rect width="${n}" height="50" fill="#fff"/><g fill="#000">${o}</g></svg>`}function es(t,a=480,e=.78){return new Promise((s,n)=>{let o=new FileReader;o.onerror=()=>n(new Error("\u8B80\u53D6\u5716\u7247\u5931\u6557")),o.onload=()=>{let r=new Image;r.onerror=()=>n(new Error("\u7121\u6CD5\u89E3\u6790\u9019\u5F35\u5716\u7247")),r.onload=()=>{let i=Math.min(1,a/Math.max(r.width,r.height)),l=document.createElement("canvas");l.width=Math.round(r.width*i),l.height=Math.round(r.height*i),l.getContext("2d").drawImage(r,0,0,l.width,l.height),s(l.toDataURL("image/jpeg",e))},r.src=o.result},o.readAsDataURL(t)})}function ba(t,a,e="text/plain"){let s=new Blob([a],{type:`${e};charset=utf-8`}),n=URL.createObjectURL(s),o=Object.assign(document.createElement("a"),{href:n,download:t});document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function as(){let t=null,a=0,e=null,s=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,n=r=>new Promise(i=>setTimeout(i,r)),o=()=>{if(!t)return Promise.resolve();if(e)return e;let r=t;return r.classList.remove("is-in"),e=n(s()?0:320).then(()=>{try{r.hidePopover?.()}catch{}r.remove(),t=null,e=null}),e};return{show(){if(t)return;t=document.createElement("div"),t.className="sync-ov",t.innerHTML=`<div class="sync-ov-card" role="status" aria-live="polite">
        <div class="sync-ov-anim" aria-hidden="true">
          <svg viewBox="0 0 100 100"><defs><linearGradient id="sync-ov-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3c4"/><stop offset=".5" stop-color="#e8c25a"/><stop offset="1" stop-color="#b8892a"/></linearGradient></defs>
            <circle class="sync-ov-track" cx="50" cy="50" r="42"/><circle class="sync-ov-arc" cx="50" cy="50" r="42" pathLength="100"/></svg>
          <span class="sync-ov-dot"></span><span class="sync-ov-dot"></span><span class="sync-ov-dot"></span>
          <span class="ms sync-ov-icon">sync</span>
        </div>
        <p class="sync-ov-title">\u6B63\u5728\u540C\u6B65 Google Drive\u2026</p>
        <p class="sync-ov-sub">\u6BD4\u5C0D\u9019\u53F0\u548C\u96F2\u7AEF\u7684\u6E05\u55AE\uFF0C\u8ACB\u7A0D\u5019</p>
      </div>`;let r=t.showPopover?document.body:[...document.querySelectorAll("dialog[open]")].at(-1)??document.body;t.showPopover&&t.setAttribute("popover","manual"),r.append(t);try{t.showPopover?.()}catch{}t.addEventListener("click",()=>{t?.classList.contains("is-fail")&&o()}),a=performance.now(),requestAnimationFrame(()=>requestAnimationFrame(()=>t?.classList.add("is-in")))},async done({title:r,sub:i=""}){t&&(await n(Math.max(0,900-(performance.now()-a))),t&&(t.classList.add("is-done"),t.querySelector(".sync-ov-icon").textContent="check",t.querySelector(".sync-ov-title").textContent=r,t.querySelector(".sync-ov-sub").textContent=i,await n(1500),await o()))},async fail({title:r,sub:i=""}){this.show(),await n(Math.max(0,500-(performance.now()-a))),t&&(t.classList.add("is-fail"),t.querySelector(".sync-ov-icon").textContent="error",t.querySelector(".sync-ov-title").textContent=r,t.querySelector(".sync-ov-sub").textContent=i,await n(4e3),await o())},close:o}}function ns(t,a){let e=URL.createObjectURL(a),s=Object.assign(document.createElement("a"),{href:e,download:t});document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}function me(t,{label:a,tone:e="gold",max:s=1}={}){let n=Math.max(0,Math.min(s,t));return`<div class="bar bar-${t>s?"danger":e}" role="progressbar" aria-label="${u(a)}"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(t/s*100)}">
      <span style="--w:${n/s*100}%"></span></div>`}function ge(t,a,e){let s=0,n=t.map(o=>{let r=a>0?Math.max(0,Math.min(100-s,o.value/a*100)):0;return s+=r,`<span class="seg-${o.tone}" style="--w:${r}%"></span>`}).join("");return`<div class="stack-bar stack-sm" role="img" aria-label="${u(e)}">${n}</div>`}var Ja=3;function Ze(){let{items:t,settings:a}=w.state,e=[...a.customStores,...t.flatMap(n=>[...n.stores,n.purchasedStore])].filter(Boolean),s=new Set;return e.filter(n=>{let o=st(n);return s.has(o)||re(n)?!1:(s.add(o),!0)})}var ss=(t,a)=>`<button type="button" class="chip chip-sm store-chip ${a?"on":""}" data-pick="${u(t)}" aria-pressed="${a}">${u(t)}</button>`;function va(t){let a=[];if(t.noTaxFree&&a.push(`<li>${c("block","sm")}${u(t.note??"\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05\u3002")}</li>`),t.dutyNote&&a.push(`<li>${c("flight_takeoff","sm")}${u(t.dutyNote)}</li>`),t.couponNote&&a.push(`<li>${c("local_offer","sm")}${u(t.couponNote)}</li>`),t.feeNote&&a.push(`<li>${c("info","sm")}${u(t.feeNote)}</li>`),t.myNote&&a.push(`<li>${c("edit_note","sm")}${u(t.myNote)}</li>`),!a.length)return"";let e=t.source?`\u8CC7\u6599\u4F86\u6E90\uFF1A${u(t.source)}\uFF0C`:"";return`<ul class="store-notes">${a.join("")}</ul>
    <p class="store-src">${e}${re(t.name)?`\u67E5\u8B49\u65E5 ${Jn}\uFF0C`:""}\u5BE6\u969B\u4EE5\u5E97\u5BB6\u516C\u544A\u70BA\u6E96\u3002</p>`}function os(t,a){return`
  <div class="field store-field">
    <span class="label" id="lb-store">\u76EE\u6A19\u5E97\u92EA <small>\uFF08\u53EF\u8907\u9078 ${Ja} \u5BB6\uFF0C\u7B2C\u4E00\u5BB6\u70BA\u4E3B\u9078\uFF09</small></span>
    <div class="store-selected" data-store-selected aria-live="polite"></div>
    <button type="button" class="btn btn-ghost btn-sm store-open" data-store-open aria-expanded="false" aria-controls="store-panel">${c("storefront","sm")}<span>\u9078\u64C7\u5E97\u92EA</span></button>
    <div class="store-panel" id="store-panel" role="group" aria-labelledby="lb-store" hidden>
      <div class="store-custom">
        <label for="fi-store-custom" class="sr-only">\u8F38\u5165\u81EA\u8A02\u5E97\u540D</label>
        <input id="fi-store-custom" list="dl-store" placeholder="\u8F38\u5165\u81EA\u8A02\u5E97\u540D\uFF0C\u4F8B\u5982\uFF1A\u5409\u4F0A\u5361\u54C7\u6A02\u5712" autocomplete="off" enterkeyhint="done">
        <button type="button" class="btn btn-slate btn-sm" data-store-add>${c("add","sm")}\u52A0\u5165</button>
      </div>
      <datalist id="dl-store">${Ze().map(e=>`<option value="${u(e)}">`).join("")}</datalist>
      <div class="store-suggest" data-store-suggest aria-live="polite"></div>
      <div data-store-groups></div>
    </div>
    <div class="store-info" data-store-info></div>
  </div>`}function rs(t,a,e){let s=[...a.stores],n=a.anyStore,o=g=>t.querySelector(g),r=o("#store-panel"),i=o("[data-store-open]"),l=()=>{let g=p=>s.some($=>st($)===st(p)),v=Ze();o("[data-store-groups]").innerHTML=`
      ${v.length?`<p class="store-group-title">${c("bookmark","sm")}\u6211\u7684\u5E97\u92EA</p><div class="pills">${v.map(p=>ss(p,g(p))).join("")}</div>`:""}
      ${Ve.map(p=>`<p class="store-group-title">${c(p.icon,"sm")}${p.label}</p>
        <div class="pills">${p.stores.map($=>ss($.name,g($.name))).join("")}</div>`).join("")}
      <p class="store-group-title">${c("compare_arrows","sm")}\u9084\u6C92\u6C7A\u5B9A</p>
      <div class="pills"><button type="button" class="chip chip-sm store-chip ${n?"on":""}" data-any aria-pressed="${n}">${pe}</button></div>`},d=()=>{let g=o("[data-store-selected]");n?g.innerHTML=`<span class="sel-chip sel-any">${c("compare_arrows","sm")}${pe}<button type="button" class="sel-x" data-any aria-label="\u53D6\u6D88\u4E0D\u9650\u5E97\u92EA">${c("close","sm")}</button></span>`:s.length?g.innerHTML=s.map((p,$)=>`
        <span class="sel-chip ${$===0?"is-main":""}">
          <span class="sel-role">${$===0?"\u4E3B\u9078":"\u5099\u9078"}</span>${u(p)}
          ${$>0?`<button type="button" class="sel-x" data-main="${$}" aria-label="\u628A ${u(p)} \u8A2D\u70BA\u4E3B\u9078">${c("arrow_upward","sm")}</button>`:""}
          <button type="button" class="sel-x" data-remove="${$}" aria-label="\u79FB\u9664 ${u(p)}">${c("close","sm")}</button>
        </span>`).join(""):g.innerHTML='<span class="sel-empty">\u5C1A\u672A\u9078\u64C7\uFF0C\u6309\u4E0B\u65B9\u6309\u9215\u6311\u9078\u6216\u8F38\u5165\u5E97\u540D</span>';let v=s[0]?Se(s[0],w.state.settings.storeMeta):null;o("[data-store-info]").innerHTML=v?va(v):""},m=g=>{d(),r.hidden||l(),e({stores:[...s],anyStore:n,picked:g})},h=g=>{let v=String(g??"").trim();return!v||s.some(p=>st(p)===st(v))?!1:s.length>=Ja?(G({title:`\u6700\u591A\u9078 ${Ja} \u5BB6\u5E97`,message:"\u8ACB\u5148\u79FB\u9664\u4E00\u5BB6\u518D\u52A0\u5165\u3002",tone:"muted",duration:2500}),!1):(s.push(v),n=!1,!0)};t.addEventListener("click",g=>{let v=g.target.closest("button");if(!(!v||!t.contains(v))){if(v.matches("[data-store-open]")){r.hidden=!r.hidden,i.setAttribute("aria-expanded",String(!r.hidden)),i.querySelector("span:last-child").textContent=r.hidden?"\u9078\u64C7\u5E97\u92EA":"\u6536\u8D77\u5E97\u92EA\u9078\u55AE",r.hidden||l();return}if(v.matches("[data-pick]")){let p=v.dataset.pick,$=s.findIndex(L=>st(L)===st(p));if($>-1)s.splice($,1);else if(!h(p))return;m($>-1?null:p),t.querySelector(`[data-pick="${CSS.escape(p)}"]`)?.focus()}else if(v.matches("[data-any]"))n=!n,n&&(s=[]),m(null),t.querySelector("[data-store-groups] [data-any], [data-store-open]")?.focus();else if(v.matches("[data-remove]"))s.splice(Number(v.dataset.remove),1),m(null),i.focus();else if(v.matches("[data-main]")){let[p]=s.splice(Number(v.dataset.main),1);s.unshift(p),m(p)}else v.matches("[data-store-add]")?k():v.matches("[data-use-store]")&&(o("#fi-store-custom").value=v.dataset.useStore,k())}});let f=o("#fi-store-custom");function k(){let g=f.value.trim();if(!g){f.focus();return}let p=[...Ze(),...Ve.flatMap($=>$.stores.map(L=>L.name))].find($=>st($)===st(g))??g;h(p)&&(re(p)||w.addCustomStore(p),f.value="",o("[data-store-suggest]").innerHTML="",m(p)),f.focus()}return f.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),k())}),f.addEventListener("input",()=>{let g=[...Ze(),...Ve.flatMap(p=>p.stores.map($=>$.name))],v=Bn(f.value,g).slice(0,3);o("[data-store-suggest]").innerHTML=v.length?`
      <p>${c("storefront","sm")}\u662F\u9019\u5BB6\u55CE\uFF1F\u540D\u7A31\u4E00\u81F4\u624D\u6703\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\uFF1A</p>
      <div class="pills">${v.map(p=>`<button type="button" class="chip chip-sm" data-use-store="${u(p)}">\u6539\u7528\u300C${u(p)}\u300D</button>`).join("")}</div>`:""}),d(),{get value(){return{stores:[...s],anyStore:n}}}}function is(t){return new Promise(a=>{let e=null,s=Ze().filter(o=>!t.stores.some(r=>st(r)===st(o))).slice(0,6),n=Ut("dlg-confirm dlg-pick",`
      <div class="confirm-body">
        <h2 id="pick-title" class="confirm-title">\u5728\u54EA\u5BB6\u8CB7\u5230\u300C${u(t.name)}\u300D\uFF1F</h2>
        <p class="confirm-text">\u8A18\u9304\u8CFC\u8CB7\u5E97\u5BB6\uFF0C\u624D\u80FD\u6B63\u78BA\u7D2F\u8A08\u8A72\u5E97\u7684\u514D\u7A05\u9580\u6ABB\u3002</p>
        ${t.stores.length?`<p class="store-group-title">\u6E05\u55AE\u4E0A\u7684\u5E97\u92EA</p><div class="pills">${t.stores.map(o=>`<button type="button" class="chip" data-at="${u(o)}">${u(o)}</button>`).join("")}</div>`:""}
        ${s.length?`<p class="store-group-title">\u5176\u4ED6\u5E97\u92EA</p><div class="pills">${s.map(o=>`<button type="button" class="chip chip-sm" data-at="${u(o)}">${u(o)}</button>`).join("")}</div>`:""}
        <form class="store-custom" data-at-form>
          <label for="pick-custom" class="sr-only">\u8F38\u5165\u5E97\u540D</label>
          <input id="pick-custom" placeholder="\u5176\u4ED6\u5E97\u540D" autocomplete="off">
          <button type="submit" class="btn btn-slate btn-sm">\u78BA\u5B9A</button>
        </form>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-at-cancel>\u53D6\u6D88</button>
          <button type="button" class="btn btn-ghost" data-at="">\u5148\u4E0D\u8A18\u9304\u5E97\u5BB6</button>
        </div>
      </div>`,"pick-title");n.addEventListener("click",o=>{let r=o.target.closest("[data-at], [data-at-cancel]");r&&(e=r.matches("[data-at-cancel]")?null:r.dataset.at,mt(n))}),n.querySelector("[data-at-form]").addEventListener("submit",o=>{o.preventDefault();let r=n.querySelector("#pick-custom").value.trim();if(!r)return;let i=re(r);i||w.addCustomStore(r),e=i?.name??r,mt(n)}),Bt(n,{onClose:()=>a(e)}),n.querySelector(".chip, #pick-custom")?.focus()})}function ls(t){let a=Se(t,w.state.settings.storeMeta),e=Ut("dlg-confirm",`
    <form class="confirm-body" data-store-meta novalidate>
      <h2 id="sm-title" class="confirm-title">${u(t)}\uFF1A\u512A\u60E0\u5238\u8A2D\u5B9A</h2>
      ${va(a)}
      <div class="field">
        <label for="sm-url">\u512A\u60E0\u5238\u9023\u7D50</label>
        <input id="sm-url" name="couponUrl" type="url" inputmode="url" value="${u(a.couponUrl??"")}" placeholder="https://\u2026" aria-describedby="sm-url-err">
        <p class="err" id="sm-url-err" hidden>\u8ACB\u8F38\u5165 https:// \u958B\u982D\u7684\u7DB2\u5740</p>
      </div>
      <div class="field">
        <label for="sm-note">\u6211\u7684\u5099\u8A3B</label>
        <input id="sm-note" name="myNote" value="${u(a.myNote??"")}" placeholder="\u4F8B\u5982\uFF1A\u6703\u54E1\u5361\u5728 LINE \u88E1">
      </div>
      <div class="confirm-actions">
        <button type="button" class="btn btn-ghost" data-cancel>\u53D6\u6D88</button>
        <button type="submit" class="btn btn-gold">${c("save","sm")}\u5132\u5B58</button>
      </div>
    </form>`,"sm-title"),s=e.querySelector("form");e.querySelector("[data-cancel]").addEventListener("click",()=>mt(e)),s.addEventListener("submit",n=>{n.preventDefault();let o=s.elements.couponUrl.value.trim();if(o&&!/^https?:\/\//i.test(o)){e.querySelector("#sm-url-err").hidden=!1,s.elements.couponUrl.setAttribute("aria-invalid","true"),s.elements.couponUrl.focus();return}w.setStoreMeta(t,{couponUrl:o,myNote:s.elements.myNote.value.trim()}),mt(e),G({title:"\u5DF2\u5132\u5B58\u5E97\u92EA\u8A2D\u5B9A",message:u(t),tone:"muted",duration:2500})}),Bt(e,{backdropClose:!1})}var ee=(t,a,e,s,n="")=>`<label class="pill"><input type="radio" name="${t}" value="${a}" ${String(e)===String(a)?"checked":""} ${n}><span>${s}</span></label>`;function Qo(t,a,e=!1){let{items:s}=w.state,n=[...new Set(s.map(r=>r.buyFor).filter(Boolean))],o=[...new Set([...s.map(r=>r.area).filter(Boolean),...Nn])];return`
  <form class="dlg-shell form-shell" novalidate>
    <header class="dlg-head dlg-head-center">
      <p class="eyebrow eyebrow-center">${a?"EDIT ITEM \xB7 \u7DE8\u8F2F":e?"QUICK ADD \xB7 \u81E8\u6642\u52A0\u8CFC":"NEW ITEM \xB7 \u65B0\u589E"}</p>
      <h2 id="form-title" class="dlg-title">${a?"\u7DE8\u8F2F\u5546\u54C1":e?`\u81E8\u6642\u52A0\u8CFC${t.buyFor?`\uFF1A\u5E6B @${u(t.buyFor)}`:""}`:"\u65B0\u589E\u60F3\u8CB7\u7684\u5546\u54C1"}</h2>
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
          <input id="fi-name" name="name" required value="${u(t.name)}" autocomplete="off" aria-describedby="err-name" autofocus enterkeyhint="next">
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
              <input id="fi-buyfor" name="buyFor" list="dl-friends" value="${u(t.buyFor)}" autocomplete="off" placeholder="\u670B\u53CB\u540D\u5B57" enterkeyhint="done">
            </div>
            <datalist id="dl-friends">${n.map(r=>`<option value="${u(r)}">`).join("")}</datalist>
          </div>
        </div>
        ${os(t.stores,t.anyStore)}
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
                <input id="fi-ja" name="nameJa" lang="ja" value="${u(t.nameJa)}" autocomplete="off">
              </div>
              <div class="field">
                <label for="fi-brand">\u54C1\u724C</label>
                <input id="fi-brand" name="brand" value="${u(t.brand)}" autocomplete="off">
              </div>
            </div>
            <div class="field">
              <span class="label" id="lb-cat">\u5206\u985E</span>
              <div class="pills" role="radiogroup" aria-labelledby="lb-cat">
                ${ke.map(r=>ee("category",r.id,t.category,`${c(r.icon,"sm")}${r.label}`)).join("")}
              </div>
            </div>
            <div class="grid-2">
              <div class="field">
                <span class="label" id="lb-prio">\u512A\u5148\u5EA6</span>
                <div class="pills" role="radiogroup" aria-labelledby="lb-prio">
                  ${pa.map(r=>ee("priority",r.value,t.priority,`<span aria-hidden="true">${r.stars}</span> ${r.label}`)).join("")}
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
                      ${ee("priceIncludesTax","true",t.priceIncludesTax,"\u542B\u7A05")}
                      ${ee("priceIncludesTax","false",t.priceIncludesTax,"\u672A\u7A05")}
                    </div>
                  </div>
                  <div class="field">
                    <span class="label" id="lb-rate">\u6D88\u8CBB\u7A05\u7387</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-rate">
                      ${ee("taxRate",10,t.taxRate,"10%")}
                      ${ee("taxRate",8,t.taxRate,"8% \u98DF\u54C1")}
                      ${ee("taxRate",1,t.taxRate,"1% \u98DF\u54C1")}
                    </div>
                    <p class="hint">\u300C1% \u98DF\u54C1\u300D\uFF1A\u65E5\u672C\u9810\u8A08 2027/4/1\uFF5E2029/3/31 \u5C07\u98DF\u54C1\u6D88\u8CBB\u7A05\u964D\u70BA 1%\uFF08\u6CD5\u6848\u5BE9\u8B70\u4E2D\uFF0C\u9152\u985E\u4ECD\u662F 10%\uFF09\u3002\u65C5\u884C\u5728\u9019\u6BB5\u671F\u9593\u3001\u6CD5\u6848\u901A\u904E\u5F8C\u518D\u9078\u3002</p>
                  </div>
                </div>
                <label class="check-row">
                  <input type="checkbox" name="taxFree" ${t.taxFree?"checked":""}>
                  <span><strong>\u8FA6\u7406\u514D\u7A05</strong><small>\u540C\u4E00\u5929\u540C\u4E00\u5E97\u5BB6\u672A\u7A05\u5408\u8A08 ${y(dt)} \u4EE5\u4E0A\u53EF\u9000\u6D88\u8CBB\u7A05</small></span>
                </label>
                <div class="grid-2 tight">
                  <div class="field">
                    <label for="fi-disc">\u6298\u6263\uFF0F\u512A\u60E0\u5238 %</label>
                    <input id="fi-disc" name="discountPct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${t.discountPct||""}" placeholder="0">
                  </div>
                  <div class="field">
                    <label for="fi-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
                    <input id="fi-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${t.refundFeePct??""}" placeholder="\u9810\u8A2D ${w.state.settings.refundFeePct}" aria-describedby="hint-fee">
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
                <input id="fi-area" name="area" list="dl-area" value="${u(t.area)}" autocomplete="off" placeholder="\u4F8B\u5982\uFF1A\u9280\u5EA7" aria-describedby="hint-area">
                <datalist id="dl-area">${o.map(r=>`<option value="${u(r)}">`).join("")}</datalist>
                <p class="hint" id="hint-area">\u9078\u64C7\u5DF2\u8A18\u9304\u904E\u7684\u5E97\u5BB6\u6642\u6703\u81EA\u52D5\u5E36\u5165</p>
              </div>
              <div class="field">
                <label for="fi-date">\u9810\u8A08\u8CFC\u8CB7\u65E5</label>
                <input id="fi-date" name="planDate" type="date" value="${u(t.planDate)}">
              </div>
              <div class="field span2">
                <label for="fi-jan">JAN \u689D\u78BC <small>\uFF088 \u6216 13 \u78BC\uFF0C\u5E97\u54E1\u6383\u63CF\u6700\u5FEB\uFF09</small></label>
                <input id="fi-jan" name="jan" inputmode="numeric" pattern="[0-9]*" maxlength="13" value="${u(t.jan)}" aria-describedby="err-jan">
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
                  ${ee("luggage","checked",t.luggage,"\u8A17\u904B")}
                  ${ee("luggage","carry",t.luggage,"\u96A8\u8EAB")}
                  ${ee("luggage","none",t.luggage,"\u4E0D\u653E\u884C\u674E")}
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
              <div class="photo-preview" data-photo>${t.image?`<img src="${u(t.image)}" alt="\u5546\u54C1\u7167\u7247\u9810\u89BD">`:c("add_photo_alternate")}</div>
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
              <textarea id="fi-note" name="note" rows="3" placeholder="\u4F8B\u5982\uFF1A\u6AC3\u4F4D\u6A13\u5C64\u3001\u8981\u8CB7\u7684\u8272\u865F\u3001\u9001\u8AB0">${u(t.note)}</textarea>
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
  </form>`}function cs(t,a,e){let s=new FormData(t),{stores:n,anyStore:o}=e?.value??{stores:[],anyStore:!1};return{stores:n,anyStore:o,buyFor:s.get("buyFor"),blade:s.has("blade"),name:s.get("name"),nameJa:s.get("nameJa"),brand:s.get("brand"),category:s.get("category"),priority:s.get("priority"),qty:s.get("qty"),price:s.get("price"),priceIncludesTax:s.get("priceIncludesTax")==="true",taxRate:s.get("taxRate"),taxFree:s.has("taxFree"),discountPct:s.get("discountPct"),refundFeePct:s.get("refundFeePct"),area:s.get("area"),planDate:s.get("planDate"),jan:s.get("jan"),weightKg:s.get("weightKg"),luggage:s.get("luggage"),fragile:s.has("fragile"),liquid:s.has("liquid"),battery:s.has("battery"),note:s.get("note"),purchased:s.has("purchased"),image:a}}function Zo(t,a){let{settings:e,items:s}=w.state,n=s.filter(m=>m.id!==a),o=oe({...t,id:a||"__draft__"}),{byItem:r}=Te([...n,o],e),i=r.get(o.id),l=i.group,d;return o.taxFree?o.store?l.eligible?d=`<p class="calc-status ok">${c("check_circle","sm")}${u(o.store)} \u5408\u8A08\u5DF2\u9054 ${y(dt)} \u9580\u6ABB</p>`:d=`<p class="calc-status warn">${c("info","sm")}${u(o.store)} \u9084\u5DEE ${y(l.shortfall)}\uFF08\u672A\u7A05\uFF09</p>`:d='<p class="calc-status">\u9078\u64C7\u5E97\u92EA\u5F8C\u53EF\u5408\u4F75\u8A08\u7B97\u9580\u6ABB</p>':d='<p class="calc-status">\u4E0D\u8FA6\u514D\u7A05</p>',{html:`
    <h3 class="calc-title">${c("calculate","sm")}\u9000\u7A05\u7CBE\u7B97\u660E\u7D30</h3>
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u5C0F\u8A08</dt><dd>${y(i.lineExcl)}</dd></div>
      ${i.discount?`<div class="minus"><dt>\u6298\u6263</dt><dd>\u2212 ${y(i.discount)}</dd></div>`:""}
      <div><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${y(i.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05</dt><dd>${i.refundable?`\u2212 ${y(i.refund)}`:"\u2014"}</dd></div>
    </dl>
    <div class="calc-total">
      <span class="ledger-k">\u5BE6\u969B\u6210\u672C</span>
      <span class="calc-yen">${y(i.net)}</span>
      <span class="calc-twd">\u2248 ${$t(i.net,e.rate)}</span>
    </div>
    ${d}`,quick:o.price?`${c("payments","sm")}<span>\u5E97\u982D\u652F\u4ED8 <strong>${y(i.pay)}</strong> \u2248 ${$t(i.pay,e.rate)}</span>${i.refundable?`<span class="ok">${c("check_circle","sm")}\u53EF\u9000\u7A05 ${y(i.refund)}\uFF0C\u5BE6\u969B ${y(i.net)}</span>`:o.taxFree&&o.store?`<span class="warn">${c("info","sm")}${u(o.store)} \u9084\u5DEE ${y(l.shortfall)} \u9054\u514D\u7A05\u9580\u6ABB</span>`:""}${l.undatedMerge&&o.taxFree&&l.items.length>1?`<span class="note">${c("event","sm")}\u5DF2\u8207\u540C\u5E97 ${l.items.length-1} \u4EF6\u5408\u4F75\u8A08\u7B97\uFF1B\u5206\u4E0D\u540C\u5929\u8CB7\u8ACB\u5728\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u586B\u9810\u8A08\u65E5\u671F</span>`:""}`:"",foot:`${c("auto_awesome","sm")}\u52A0\u5165\u5F8C\u7E3D\u984D ${y(n.reduce((m,h)=>m+r.get(h.id).pay,0)+i.pay)} \xB7 \u884C\u674E +${(i.weight||0).toFixed(2)} kg`}}function Jt(t=null,a={}){let e=t?w.getItem(t):null,s=e??oe({category:"other",priority:2,luggage:"checked",taxFree:!0,...a}),n=s.image,o=Ut("dlg-form",Qo(s,!!e,a.mode==="extra"),"form-title"),r=o.querySelector("form"),i=!1,l=!!e?.discountPct,d=null,m=()=>{let g=Zo(cs(r,n,d),e?.id);o.querySelector("[data-calc]").innerHTML=g.html,o.querySelector("[data-foot-summary]").innerHTML=g.foot,o.querySelector("[data-quick]").innerHTML=g.quick;let v=r.elements.priceIncludesTax.value==="true";o.querySelector('label[for="fi-price"] small').textContent=v?"\uFF08\u542B\u7A05\uFF09":"\uFF08\u672A\u7A05\uFF09"};m(),d=rs(r.querySelector(".store-field"),{stores:s.stores,anyStore:s.anyStore},({stores:g,picked:v})=>{i=!0;let p=g[0];if(p&&v===p){let $=Se(p,w.state.settings.storeMeta),L=[];($.noTaxFree||$.dutyFree)&&r.elements.taxFree.checked&&(r.elements.taxFree.checked=!1,L.push($.dutyFree?"\u6A5F\u5834\u514D\u7A05\u5E97\u552E\u50F9\u5DF2\u4E0D\u542B\u7A05\uFF0C\u5DF2\u53D6\u6D88\u300C\u8FA6\u7406\u514D\u7A05\u300D":"\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05\uFF0C\u5DF2\u53D6\u6D88\u300C\u8FA6\u7406\u514D\u7A05\u300D"));let P=zn($,r.elements.category.value);if(P&&!l&&(r.elements.discountPct.value=P.pct,L.push(`\u5DF2\u4F9D\u5206\u985E\u5957\u7528 ${$.name} \u512A\u60E0 ${P.pct}%\uFF08${P.label}\uFF0C\u9700\u672A\u7A05\u6EFF ${y(P.min)}\uFF09\uFF0C\u53EF\u5728\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u4FEE\u6539`)),!r.elements.area.value.trim()){let S=w.state.items.find(D=>D.area&&D.stores.some(I=>st(I)===st(p)));S&&(r.elements.area.value=S.area)}L.length&&G({title:"\u5DF2\u5E36\u5165\u5E97\u92EA\u8A2D\u5B9A",message:L.map(u).join("\uFF1B"),tone:"muted",duration:5e3})}m()}),m();let h={name:g=>g.trim().length>0,price:g=>g!==""&&Number(g)>=0,jan:g=>g===""||/^\d{8}$|^\d{13}$/.test(g)},f=(g,v)=>{let p=o.querySelector(`#err-${g.name}`);p&&(p.hidden=!v,g.setAttribute("aria-invalid",v?"true":"false"))};r.addEventListener("focusout",g=>{let v=h[g.target.name];v&&g.target.dataset.touched&&f(g.target,!v(g.target.value))}),r.addEventListener("input",g=>{i=!0,g.target.dataset.touched="1";let v=h[g.target.name];v&&g.target.getAttribute("aria-invalid")==="true"&&v(g.target.value)&&f(g.target,!1),m()}),r.addEventListener("change",g=>{g.target.name==="discountPct"&&(l=!0),["battery","liquid","blade"].includes(g.target.name)&&g.target.checked&&(r.elements.luggage.value=g.target.name==="battery"?"carry":"checked"),m()}),r.elements.discountPct.addEventListener("input",()=>{l=!0}),r.addEventListener("click",g=>{let v=g.target.closest("[data-step]");if(v){let p=r.elements.qty;p.value=Math.max(1,(Number(p.value)||1)+Number(v.dataset.step)),i=!0,m()}g.target.closest("[data-remove-photo]")&&(n="",i=!0,o.querySelector("[data-photo]").innerHTML=c("add_photo_alternate"),g.target.closest("[data-remove-photo]").hidden=!0),g.target.closest(".dlg-close, [data-cancel]")&&k()}),o.querySelector("[data-file]").addEventListener("change",async g=>{let v=g.target.files?.[0];if(v)try{n=await es(v),i=!0,o.querySelector("[data-photo]").innerHTML=`<img src="${n}" alt="\u5546\u54C1\u7167\u7247\u9810\u89BD">`,o.querySelector("[data-remove-photo]").hidden=!1}catch(p){G({title:"\u7167\u7247\u7121\u6CD5\u4F7F\u7528",message:u(p.message),tone:"error"})}});async function k(){i&&!await Wt({title:"\u653E\u68C4\u5C1A\u672A\u5132\u5B58\u7684\u5167\u5BB9\uFF1F",body:"\u9019\u500B\u8868\u55AE\u6709\u4FEE\u6539\u9084\u6C92\u5132\u5B58\uFF0C\u96E2\u958B\u5F8C\u4E0D\u6703\u4FDD\u7559\u3002",confirmText:"\u653E\u68C4\u4FEE\u6539",danger:!0})||mt(o)}o.addEventListener("cancel",g=>{g.preventDefault(),g.stopImmediatePropagation(),k()},{capture:!0}),r.addEventListener("submit",g=>{g.preventDefault();let v=null;for(let[$,L]of Object.entries(h)){let P=r.elements[$],S=L(P.value);f(P,!S),!S&&!v&&(v=P)}if(v){let $=v.closest("details");$&&($.open=!0),v.focus();return}let p=cs(r,n,d);if(p.jan&&!Qe(p.jan)&&G({title:"JAN \u6AA2\u67E5\u78BC\u4E0D\u7B26",message:"\u5DF2\u5132\u5B58\uFF0C\u4F46\u689D\u78BC\u53EF\u80FD\u8F38\u5165\u932F\u8AA4\uFF0C\u51FA\u793A\u5361\u4E0D\u6703\u986F\u793A\u689D\u78BC\u5716\u3002",tone:"muted"}),e){let $=e.purchased;if(!w.updateItem(e.id,{...p,purchasedAt:p.purchased?$?e.purchasedAt:Date.now():null,purchasedStore:p.purchased?$&&e.purchasedStore?e.purchasedStore:p.stores[0]??"":""}))return;G({title:"\u5DF2\u5132\u5B58\u8B8A\u66F4",message:u(p.name),tone:"muted",duration:3e3})}else{let $=w.addItem({...p,purchasedAt:p.purchased?Date.now():null,purchasedStore:p.purchased?p.stores[0]??"":""});G({title:"\u5DF2\u52A0\u5165\u6E05\u55AE",message:`\u300C${u($.name)}\u300D`})}i=!1,mt(o)}),Bt(o,{backdropClose:!1})}var Ha="765218807056-3eov7jfc0389dslrh2g9fpsupturihmn.apps.googleusercontent.com";var Ka="shopping-relics:cloud",gs="shopping-relics.json",Za="https://www.googleapis.com/auth/drive.appdata",tn=`openid ${Za}`,qe="https://www.googleapis.com/auth/drive.file",ds="Shopping Relics",Ee="https://www.googleapis.com/drive/v3",Ya="https://www.googleapis.com/upload/drive/v3",$a="id,version,modifiedTime",tr=4e3,le=null,us=null,za=null,ta=null,Wa=!1,ea=null,Va=!1,ps=null,en={state:"idle",message:""},ya=new Set,er=()=>{try{return JSON.parse(localStorage.getItem(Ka)||"null")||{}}catch{return{}}},ht=er();function aa(t){ht=t===null?{}:{...ht,...t};try{t===null?localStorage.removeItem(Ka):localStorage.setItem(Ka,JSON.stringify(ht))}catch{}}function ar(t){let a=2166136261;for(let e=0;e<t.length;e++)a^=t.charCodeAt(e),a=Math.imul(a,16777619);return(a>>>0).toString(36)+t.length.toString(36)}var xa=()=>ar(w.dataJSON());function ie(t,a="",e=""){en={state:t,message:a,phase:e},ya.forEach(s=>s(ce()))}var Nt=class extends Error{constructor(a,e){super(e),this.code=a}};function ae(){if(!Ha)return{ok:!1,reason:"config"};let{protocol:t,hostname:a}=location;return t!=="https:"&&a!=="localhost"&&a!=="127.0.0.1"?{ok:!1,reason:"origin"}:{ok:!0}}function ce(){return{linked:!!ht.sub,idTail:ht.sub?String(ht.sub).slice(-4):"",lastSyncAt:ht.at||0,hasToken:sa(),dirty:!!ht.sub&&ht.hash!==xa(),...en}}function je(){ae().ok&&hs().catch(()=>{})}function na(t){return ya.add(t),()=>ya.delete(t)}function hs(){return window.google?.accounts?.oauth2?Promise.resolve():(za??(za=new Promise((t,a)=>{let e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.onload=()=>t(),e.onerror=()=>{za=null,a(new Nt("network","\u7121\u6CD5\u8F09\u5165 Google \u767B\u5165\u5143\u4EF6"))},document.head.append(e)})),za)}var sa=(t=Za)=>!!(le&&le.exp-Date.now()>6e4&&t.split(" ").every(a=>a==="openid"||le.scope.split(" ").includes(a)));async function bs(t=tn,a=Za){return await hs(),new Promise((e,s)=>{us=window.google.accounts.oauth2.initTokenClient({client_id:Ha,scope:t,include_granted_scopes:!0,callback:n=>{if(n.error){s(new Nt("denied","\u5DF2\u53D6\u6D88\u6388\u6B0A"));return}if(!window.google.accounts.oauth2.hasGrantedAllScopes(n,a)){s(new Nt("scope",a===qe?"\u6C92\u6709\u52FE\u9078\u300C\u5EFA\u7ACB Google Drive \u6A94\u6848\u300D\u7684\u6B0A\u9650\uFF0C\u7121\u6CD5\u5B58\u5230\u96F2\u7AEF":"\u6C92\u6709\u52FE\u9078 Google Drive \u6B0A\u9650\uFF0C\u7121\u6CD5\u540C\u6B65"));return}le={value:n.access_token,exp:Date.now()+Number(n.expires_in||3600)*1e3,scope:String(n.scope||"")},Va=!0,e()},error_callback:n=>s(new Nt(n?.type==="popup_failed_to_open"?"popup":"denied",n?.type==="popup_failed_to_open"?"\u767B\u5165\u8996\u7A97\u88AB\u700F\u89BD\u5668\u64CB\u4F4F\u4E86\uFF0C\u8ACB\u5141\u8A31\u5F48\u51FA\u8996\u7A97\u5F8C\u518D\u8A66":"\u767B\u5165\u8996\u7A97\u5DF2\u95DC\u9589"))}),us.requestAccessToken({prompt:ht.sub?"":"consent"})})}async function an(t){if(!sa(tn)){if(!t)throw new Nt("auth","\u9700\u8981\u91CD\u65B0\u9023\u7DDA Google");await bs()}}async function Xt(t,a={}){let e;try{e=await fetch(t,{...a,headers:{Authorization:`Bearer ${le.value}`,...a.headers}})}catch{throw new Nt("network","\u7DB2\u8DEF\u9023\u7DDA\u5931\u6557")}if(e.status===401)throw le=null,new Nt("auth","\u9023\u7DDA\u5DF2\u903E\u6642\uFF0C\u8ACB\u91CD\u65B0\u9023\u7DDA");if(e.status===403)throw new Nt("http","Google \u62D2\u7D55\u4E86\u9019\u500B\u64CD\u4F5C\uFF0C\u8ACB\u78BA\u8A8D\u5DF2\u540C\u610F\u6B0A\u9650\uFF08403\uFF09");if(e.status===404)return null;if(!e.ok)throw new Nt("http",`Google \u56DE\u61C9\u932F\u8AA4\uFF08${e.status}\uFF09`);return e.status===204?!0:e.json()}async function vs(){let t=encodeURIComponent(`name='${gs}' and trashed=false`);return(await Xt(`${Ee}/files?spaces=appDataFolder&q=${t}&orderBy=modifiedTime desc&fields=files(${$a})`))?.files?.[0]??null}var $s=t=>Xt(`${Ee}/files/${t}?fields=${$a}`),fs=t=>Xt(`${Ee}/files/${t}?alt=media`);function nr(){return JSON.stringify({app:"shopping-relics",version:1,savedAt:new Date().toISOString(),data:w.state})}async function Xa(t){let a=nr();if(t)return Xt(`${Ya}/files/${t}?uploadType=media&fields=${$a}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:a});let e=`sr${Date.now().toString(36)}`,s=[`--${e}`,"Content-Type: application/json; charset=UTF-8","",JSON.stringify({name:gs,parents:["appDataFolder"],mimeType:"application/json"}),`--${e}`,"Content-Type: application/json; charset=UTF-8","",a,`--${e}--`].join(`\r
`);return Xt(`${Ya}/files?uploadType=multipart&fields=${$a}`,{method:"POST",headers:{"Content-Type":`multipart/related; boundary=${e}`},body:s})}function wa(t){aa({fileId:t.id,version:String(t.version),hash:xa(),at:Date.now()})}function Qa(t,a){if(!a||a.app!=="shopping-relics"||!a.data)throw new Nt("format","\u96F2\u7AEF\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26");w.importData(a.data),wa(t)}async function sr(t){if(await an(t),ie("syncing","\u540C\u6B65\u4E2D\u2026","transfer"),Va||!ht.sub){let o=await Xt("https://openidconnect.googleapis.com/v1/userinfo");if(!o?.sub)throw new Nt("http","\u7121\u6CD5\u53D6\u5F97 Google \u5E33\u865F\u8B58\u5225");ht.sub&&ht.sub!==o.sub&&aa(null),aa({sub:o.sub}),Va=!1}let a=ht.fileId?await $s(ht.fileId):null;a??(a=await vs());let e=ht.hash!==xa();if(!a)return wa(await Xa(null)),{action:"uploaded"};let s=a.id!==ht.fileId||String(a.version)!==ht.version;if(!ht.hash){let o=await fs(a.id);return w.state.items.length?ms(a,o):(Qa(a,o),{action:"downloaded"})}if(!s&&!e)return{action:"none"};if(!s&&e)return wa(await Xa(a.id)),{action:"uploaded"};let n=await fs(a.id);return e?ms(a,n):(Qa(a,n),{action:"downloaded"})}function ms(t,a){return ea={remote:t,data:a},{action:"conflict",remoteAt:a?.savedAt?new Date(a.savedAt).getTime():new Date(t.modifiedTime).getTime(),remoteCount:a?.data?.items?.length??0,localCount:w.state.items.length}}async function Oe({interactive:t=!0}={}){return ta?(Wa=!0,ta):(ie("syncing","\u540C\u6B65\u4E2D\u2026","auth"),ta=(async()=>{try{let a=await sr(t);return ie(a.action==="conflict"?"conflict":"ok",a.action==="conflict"?"\u96F2\u7AEF\u548C\u9019\u53F0\u90FD\u6709\u4FEE\u6539\uFF0C\u8ACB\u9078\u64C7\u8981\u4FDD\u7559\u54EA\u4E00\u4EFD":""),a}catch(a){throw a.code==="denied"?ie("idle"):ie(a.code==="auth"?"auth":"error",a.message||"\u540C\u6B65\u5931\u6557"),a}finally{ta=null,Wa&&(Wa=!1,xs())}})(),ta)}var ka=()=>Oe({interactive:!0});async function ys(t){if(!ea)return;let{remote:a,data:e}=ea;ea=null,ie("syncing","\u540C\u6B65\u4E2D\u2026");try{await an(!0),t==="cloud"?Qa(a,e):wa(await Xa(a.id)),ie("ok")}catch(s){throw ie(s.code==="auth"?"auth":"error",s.message||"\u540C\u6B65\u5931\u6557"),s}}function nn(){le&&window.google?.accounts?.oauth2&&window.google.accounts.oauth2.revoke(le.value,()=>{}),le=null,ea=null,aa(null),ie("idle")}async function ws(){await an(!0);let t=ht.fileId?await $s(ht.fileId):await vs();t&&await Xt(`${Ee}/files/${t.id}`,{method:"DELETE"}),nn()}function xs(){clearTimeout(ps),!(!ht.sub||!sa()||en.state==="conflict")&&(ps=setTimeout(()=>{ht.hash!==xa()&&Oe({interactive:!1}).catch(()=>{})},tr))}w.subscribe(()=>{xs(),ht.sub&&ya.forEach(t=>t(ce()))});async function ks(){if(!ae().ok)throw new Nt("config","\u96F2\u7AEF\u529F\u80FD\u9700\u8981\u5F9E\u7DB2\u5740\uFF08https\uFF09\u958B\u555F\u7DB2\u7AD9");sa(qe)||await bs(ht.sub?`${tn} ${qe}`:qe,qe)}async function or(){if(ht.pdfFolder){let s=await Xt(`${Ee}/files/${ht.pdfFolder}?fields=id,trashed`);if(s&&!s.trashed)return s.id}let t=encodeURIComponent(`name='${ds}' and mimeType='application/vnd.google-apps.folder' and trashed=false`),e=(await Xt(`${Ee}/files?q=${t}&fields=files(id)&pageSize=1`))?.files?.[0]?.id;if(e||(e=(await Xt(`${Ee}/files?fields=id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:ds,mimeType:"application/vnd.google-apps.folder"})}))?.id),!e)throw new Nt("http","\u7121\u6CD5\u5728 Google Drive \u5EFA\u7ACB\u8CC7\u6599\u593E");return aa({pdfFolder:e}),e}async function Ss(t,a){if(!sa(qe))throw new Nt("auth","\u9023\u7DDA\u5DF2\u903E\u6642\uFF0C\u8ACB\u518D\u6309\u4E00\u6B21");let e=await or(),s=`srpdf${Date.now().toString(36)}`,n=new Blob([`--${s}\r
Content-Type: application/json; charset=UTF-8\r
\r
`,JSON.stringify({name:a,parents:[e],mimeType:"application/pdf"}),`\r
--${s}\r
Content-Type: application/pdf\r
\r
`,t,`\r
--${s}--`]),o=await Xt(`${Ya}/files?uploadType=multipart&fields=id,webViewLink`,{method:"POST",headers:{"Content-Type":`multipart/related; boundary=${s}`},body:n});if(!o?.id)throw new Nt("http","\u4E0A\u50B3\u5931\u6557");return{id:o.id,link:o.webViewLink||`https://drive.google.com/file/d/${o.id}/view`}}var Kt=595.28,Me=841.89,Sa=2.4,Lt=40,rr=28,ir="'Noto Sans TC', 'Noto Sans CJK TC', 'PingFang TC', 'Microsoft JhengHei', 'Hiragino Sans', system-ui, sans-serif",Ft={ink:"#1d1b2e",dim:"#5d5a6e",faint:"#8a8798",line:"#dcd6c8",gold:"#9a7417",band:"#f6f1e4",done:"#2f7a4f"},he=t=>`\xA5${Math.round(t||0).toLocaleString("ja-JP")}`,lr=(t,a)=>`NT$ ${Math.round((t||0)*a).toLocaleString("zh-TW")}`,Ts=()=>{let t=new Date;return`${t.getFullYear()}/${String(t.getMonth()+1).padStart(2,"0")}/${String(t.getDate()).padStart(2,"0")}`};function cr(t){let a=new Map;for(let n of t){let o;n.purchased?o=n.purchasedStore||"\u5DF2\u8CB7\uFF08\u672A\u8A18\u9304\u5E97\u5BB6\uFF09":n.anyStore?o=pe:o=n.stores[0]||"\u672A\u6307\u5B9A\u5E97\u92EA";let r=n.purchased||n.anyStore||n.stores[0]?st(o)||o:"__none__";a.has(r)||a.set(r,{name:o,items:[]}),a.get(r).items.push(n)}let e=n=>n.name===pe||n.name==="\u672A\u6307\u5B9A\u5E97\u92EA"||n.name==="\u5DF2\u8CB7\uFF08\u672A\u8A18\u9304\u5E97\u5BB6\uFF09"?1:0,s=n=>n.items.filter(o=>!o.purchased).length;return[...a.values()].sort((n,o)=>e(n)-e(o)||(s(o)>0)-(s(n)>0)||s(o)-s(n)||n.name.localeCompare(o.name,"zh-Hant"))}function oa(t,a,e,s=99){let n=String(a).match(/[A-Za-z0-9.,'’\-+/%&]+\s*|\s+|./gu)||[],o=[],r="";for(let i of n){if(t.measureText(r+i).width<=e||!r){r+=i;continue}if(o.push(r.trimEnd()),r=i.trimStart(),o.length===s)break}if(o.length<s&&r&&o.push(r.trimEnd()),o.length===s&&n.join("").length>o.join("").length+1){let i=o[s-1];for(;i&&t.measureText(`${i}\u2026`).width>e;)i=i.slice(0,-1);o[s-1]=`${i}\u2026`}return o}function dr(t){return new Promise(a=>{if(!t){a(null);return}let e=new Image;e.onload=()=>a(e),e.onerror=()=>a(null),e.src=t})}async function ur(t,{scope:a="all"}={}){try{await Promise.race([document.fonts?.ready,new Promise(M=>setTimeout(M,1500))])}catch{}let{settings:e}=t,s=Re(t),n=a==="pending"?t.items.filter(M=>!M.purchased):t.items,o=cr(n),r=new Map(await Promise.all(n.filter(M=>M.image).map(async M=>[M.id,await dr(M.image)]))),i=[],l,d=0,m=Me-Lt-rr,h=()=>{let M=document.createElement("canvas");M.width=Math.round(Kt*Sa),M.height=Math.round(Me*Sa),l=M.getContext("2d"),l.scale(Sa,Sa),l.fillStyle="#fff",l.fillRect(0,0,Kt,Me),l.textBaseline="alphabetic",i.push(M),d=Lt},f=(M,_=400)=>{l.font=`${_} ${M}px ${ir}`},k=(M,_,H,{size:tt=10,weight:V=400,color:F=Ft.ink,align:x="left"}={})=>{f(tt,V),l.fillStyle=F,l.textAlign=x,l.fillText(M,_,H)},g=(M,_=Ft.line,H=.6)=>{l.strokeStyle=_,l.lineWidth=H,l.beginPath(),l.moveTo(Lt,M),l.lineTo(Kt-Lt,M),l.stroke()};h(),k("SHOPPING RELICS \xB7 \u8CFC\u7269\u6E05\u55AE",Lt,d+9,{size:8.5,weight:700,color:Ft.gold}),f(20,700);let v=oa(l,e.tripName||"\u6211\u7684\u8CFC\u7269\u6E05\u55AE",Kt-Lt*2,2);v.forEach((M,_)=>k(M,Lt,d+34+_*26,{size:20,weight:700})),d+=34+(v.length-1)*26+18;let p=`\u532F\u7387 1 JPY = ${Number(e.rate).toFixed(4)} TWD`;k(`\u532F\u51FA\u65E5\u671F ${Ts()}\u3000\xB7\u3000${p}\u3000\xB7\u3000${a==="pending"?"\u53EA\u5217\u5F85\u8CB7\u5546\u54C1":"\u5168\u90E8\u5546\u54C1"}`,Lt,d,{size:9,color:Ft.dim}),d+=14;let $=50;l.fillStyle=Ft.band,l.fillRect(Lt,d,Kt-Lt*2,$);let L=[["\u5546\u54C1",`${s.count} \u4EF6`,`\u5F85\u8CB7 ${s.pendingCount}\u30FB\u5DF2\u8CB7 ${s.purchasedCount}`],["\u9810\u4F30\u82B1\u8CBB\uFF08\u542B\u7A05\uFF09",he(s.pay),lr(s.pay,e.rate)],["\u9810\u4F30\u9000\u7A05",he(s.refund),"\u9054\u514D\u7A05\u9580\u6ABB\u7684\u5E97\u5BB6\u624D\u8A08\u5165"],["\u8CFC\u7269\u9810\u7B97",he(e.budget),s.remaining>=0?`\u5269 ${he(s.remaining)}`:`\u8D85\u51FA ${he(-s.remaining)}`]],P=(Kt-Lt*2)/L.length;L.forEach(([M,_,H],tt)=>{let V=Lt+12+P*tt;k(M,V,d+14,{size:8,color:Ft.dim}),k(_,V,d+30,{size:13,weight:700}),k(H,V,d+43,{size:7.5,color:Ft.faint})}),d+=$+22,n.length||k(a==="pending"?"\u6C92\u6709\u5F85\u8CB7\u7684\u5546\u54C1\u3002":"\u6E05\u55AE\u662F\u7A7A\u7684\u3002",Lt,d,{size:11,color:Ft.dim});let S=Lt+2,D=Lt+20,I=34,Q=Kt-Lt,E=Q-92,et=M=>{let _=r.get(M.id),H=_?D+I+8:D,tt=E-(M.purchased?70:40)-H;f(10.5,500);let V=oa(l,M.name||"\uFF08\u672A\u547D\u540D\uFF09",tt,2);f(8.5);let F=[M.nameJa,M.brand].filter(Boolean).join("\u3000"),x=F?oa(l,F,tt,1):[],at=[!M.purchased&&M.stores.length>1?`\u5099\u9078\uFF1A${M.stores.slice(1).join("\u3001")}`:"",M.buyFor?`\u4EE3\u8CFC\uFF1A${M.buyFor}`:"",M.note?`\u5099\u8A3B\uFF1A${M.note.replace(/\s+/g," ")}`:""].filter(Boolean).join("\u3000"),T=at?oa(l,at,tt,2):[],q=Math.max(_?I+6:0,V.length*14+x.length*12+T.length*12+6);return{img:_,xText:H,nameLines:V,subLines:x,extraLines:T,h:q}};for(let M of o){let _=M.items.reduce((V,F)=>V+(s.byItem.get(F.id)?.pay||0),0),H=M.items.filter(V=>!V.purchased).length;d+26+et(M.items[0]).h+6>m&&h(),g(d-2,Ft.gold,1),f(12,700);let tt=oa(l,M.name,Kt-Lt*2-150,1)[0];k(tt,Lt,d+14,{size:12,weight:700}),k(`${M.items.length} \u4EF6${H&&H!==M.items.length?`\uFF08\u5F85\u8CB7 ${H}\uFF09`:""} \xB7 ${he(_)}`,Kt-Lt,d+14,{size:9,color:Ft.dim,align:"right"}),d+=26;for(let V of M.items){let F=s.byItem.get(V.id),{img:x,xText:at,nameLines:T,subLines:q,extraLines:C,h:O}=et(V);if(d+O>m&&h(),l.strokeStyle=V.purchased?Ft.done:Ft.dim,l.lineWidth=.9,l.strokeRect(S,d+2,10,10),V.purchased&&(l.beginPath(),l.moveTo(S+2,d+7),l.lineTo(S+4.4,d+9.6),l.lineTo(S+8.4,d+4),l.stroke()),x){let j=Math.min(x.naturalWidth,x.naturalHeight);l.save(),l.beginPath(),l.roundRect?l.roundRect(D,d,I,I,4):l.rect(D,d,I,I),l.clip(),l.drawImage(x,(x.naturalWidth-j)/2,(x.naturalHeight-j)/2,j,j,D,d,I,I),l.restore()}let Y=d+11,z=V.purchased?Ft.faint:Ft.ink;T.forEach(j=>{k(j,at,Y,{size:10.5,weight:500,color:z}),Y+=14}),q.forEach(j=>{k(j,at,Y-1,{size:8.5,color:Ft.dim}),Y+=12}),C.forEach(j=>{k(j,at,Y-1,{size:8.5,color:Ft.dim}),Y+=12}),V.purchased&&k("\u5DF2\u8CB7",E-34,d+11,{size:8,weight:700,color:Ft.done,align:"right"}),k(`\xD7 ${V.qty}`,E,d+11,{size:10,color:Ft.dim,align:"right"}),k(he(F?.pay),Q,d+11,{size:10.5,weight:700,align:"right"}),F?.refund&&k(`\u9000\u7A05 ${he(F.refund)}`,Q,d+24,{size:8,color:Ft.done,align:"right"}),d+=O,g(d),d+=6}d+=12}return i.forEach((M,_)=>{l=M.getContext("2d"),k("\u91D1\u984D\u70BA\u542B\u7A05\u9810\u4F30\uFF0C\u5BE6\u969B\u4EE5\u5E97\u5BB6\u7D50\u5E33\u70BA\u6E96\uFF1B\u9000\u7A05\u4F9D\u5404\u5E97\u662F\u5426\u9054\u514D\u7A05\u9580\u6ABB\u4F30\u7B97\u3002",Lt,Me-Lt+8,{size:7.5,color:Ft.faint}),k(`${_+1} / ${i.length}`,Kt-Lt,Me-Lt+8,{size:8,color:Ft.faint,align:"right"})}),i}var pr=new TextEncoder;function fr(t){let a="FEFF";for(let e of String(t)){let s=e.codePointAt(0);(s>65535?[55296+(s-65536>>10),56320+(s-65536&1023)]:[s]).forEach(o=>{a+=o.toString(16).padStart(4,"0").toUpperCase()})}return`<${a}>`}var mr=t=>new Promise((a,e)=>{t.toBlob(s=>s?s.arrayBuffer().then(n=>a(new Uint8Array(n)),e):e(new Error("\u7121\u6CD5\u7522\u751F\u9801\u9762\u5716\u7247")),"image/jpeg",.86)});async function gr(t,a){let e=[],s=[],n=0,o=h=>{let f=typeof h=="string"?pr.encode(h):h;e.push(f),n+=f.length},r=(h,f)=>{s[h]=n,o(`${h} 0 obj
`),f(),o(`
endobj
`)};o(`%PDF-1.4
`),o(new Uint8Array([37,226,227,207,211,10]));let i=t.length,l=h=>4+h*3;r(1,()=>o("<< /Type /Catalog /Pages 2 0 R >>")),r(2,()=>o(`<< /Type /Pages /Count ${i} /Kids [${t.map((h,f)=>`${l(f)} 0 R`).join(" ")}] >>`)),r(3,()=>o(`<< /Title ${fr(a)} /Producer (Shopping Relics) /Creator (Shopping Relics) >>`));for(let h=0;h<i;h++){let f=t[h],k=await mr(f),g=l(h),v=`q ${Kt} 0 0 ${Me} 0 0 cm /Im0 Do Q`;r(g,()=>o(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${Kt} ${Me}] /Resources << /XObject << /Im0 ${g+2} 0 R >> >> /Contents ${g+1} 0 R >>`)),r(g+1,()=>o(`<< /Length ${v.length} >>
stream
${v}
endstream`)),r(g+2,()=>{o(`<< /Type /XObject /Subtype /Image /Width ${f.width} /Height ${f.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${k.length} >>
stream
`),o(k),o(`
endstream`)}),f.width=0,f.height=0}let d=n,m=4+i*3;o(`xref
0 ${m}
0000000000 65535 f 
`);for(let h=1;h<m;h++)o(`${String(s[h]).padStart(10,"0")} 00000 n 
`);return o(`trailer
<< /Size ${m} /Root 1 0 R /Info 3 0 R >>
startxref
${d}
%%EOF
`),new Blob(e,{type:"application/pdf"})}function Es(t){return`${(t.settings.tripName||"\u8CFC\u7269\u6E05\u55AE").replace(/[\\/:*?"<>|]/g,"").trim().slice(0,40)||"\u8CFC\u7269\u6E05\u55AE"}-\u8CFC\u7269\u6E05\u55AE-${Ts().replace(/\//g,"")}.pdf`}async function Ms(t,a){let e=await ur(t,a);return gr(e,`${t.settings.tripName||"\u8CFC\u7269\u6E05\u55AE"}\u30FB\u8CFC\u7269\u6E05\u55AE`)}var sn="relics",ne=[{id:"relics",label:"\u91D1\u8272\u907A\u7269",desc:"\u767D\u8272\u5927\u7406\u77F3\u3001\u91D1\u8272\u908A\u98FE\u8207\u9752\u8272\u6298\u5C04\u5149\uFF08\u539F\u59CB\u914D\u8272\uFF09",themeColor:{light:"#f4f7f9",dark:"#0b1422"},preview:{light:{bg:"#f4f7f9",surface:"#ffffff",accent:"#d4af37"},dark:{bg:"#0b1422",surface:"#172740",accent:"#e2bd45"}}},{id:"dotglow",label:"\u9EDE\u9663\u67D4\u5149",desc:"\u64EC\u7269\u5316\u51F9\u69FD\u8207\u6309\u9375\uFF0C\u767D\u5929\u7425\u73C0\u6A58\u3001\u591C\u665A\u85CD\u7D2B\u5149\u6688",themeColor:{light:"#efeae2",dark:"#0b0b12"},preview:{light:{bg:"#efeae2",surface:"#ffffff",accent:"#f0921e"},dark:{bg:"#0b0b12",surface:"#29283f",accent:"#8c82ff"}}},{id:"matcha",label:"\u62B9\u8336\u548C\u7D19",desc:"\u548C\u7D19\u7C73\u767D\u914D\u62B9\u8336\u7DA0\uFF0C\u9EDE\u7DB4\u7119\u8336\u68D5\uFF1B\u591C\u665A\u662F\u6DF1\u6797\u58A8\u7DA0",themeColor:{light:"#f1f2e8",dark:"#0e140d"},preview:{light:{bg:"#f1f2e8",surface:"#ffffff",accent:"#8fb043"},dark:{bg:"#0e140d",surface:"#2a3a28",accent:"#a8c75a"}}},{id:"sakura",label:"\u591C\u6AFB",desc:"\u6AFB\u82B1\u767D\u914D\u6AFB\u7C89\uFF0C\u9EDE\u7DB4\u85E4\u7D2B\uFF1B\u591C\u665A\u662F\u6DF1\u6885\u7D2B\u8207\u7C89\u8272\u5149\u6688",themeColor:{light:"#f8f1f2",dark:"#140d14"},preview:{light:{bg:"#f8f1f2",surface:"#ffffff",accent:"#ee86a4"},dark:{bg:"#140d14",surface:"#3a283a",accent:"#f08aa8"}}}];var hr="shopping-relics:theme",br="shopping-relics:skin";var Be=[{id:"light",label:"\u6DFA\u8272",icon:"light_mode"},{id:"dark",label:"\u6DF1\u8272",icon:"dark_mode"},{id:"auto",label:"\u8DDF\u96A8\u7CFB\u7D71",icon:"brightness_auto"}];function be(){let t=document.documentElement.dataset.theme;return Be.some(a=>a.id===t)?t:"light"}function Ae(){let t=document.documentElement.dataset.skin;return ne.some(a=>a.id===t)?t:sn}function As(t){return t==="dark"||t==="auto"&&matchMedia("(prefers-color-scheme: dark)").matches}function vr(t=be()){document.documentElement.dataset.scheme=As(t)?"dark":"light"}function on(t){let a=Be.find(s=>s.id===t),e=document.getElementById("btn-theme");e&&(e.querySelector(".ms").textContent=a.icon,e.setAttribute("aria-label",`\u5916\u89C0\u8207\u4E3B\u984C\uFF08\u76EE\u524D\uFF1A${a.label}\uFF09`),e.title=`\u5916\u89C0\u8207\u4E3B\u984C\uFF08\u76EE\u524D\uFF1A${a.label}\uFF09`),vr(t),Ta(t)}function Ta(t=be()){let a=document.body?.dataset.route==="home",e=ne.find(s=>s.id===Ae()).themeColor;document.querySelector('meta[name="theme-color"]')?.setAttribute("content",a?"#010104":As(t)?e.dark:e.light)}function Ea(t){document.documentElement.dataset.theme=t;try{localStorage.setItem(hr,t)}catch{}on(t)}function Ls(t){document.documentElement.dataset.fx=t.fx===!1?"off":"on"}function Ma(t){let a=ne.find(e=>e.id===t)||ne.find(e=>e.id===sn);document.documentElement.dataset.skin=a.id,Ls(a);try{localStorage.setItem(br,a.id)}catch{}return Ta(),a}function Ps(){document.documentElement.dataset.skin=Ae(),Ls(ne.find(t=>t.id===Ae())),on(be()),matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>on(be()))}var Cs="shopping-relics:trips",$r=()=>crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`;function Le(){try{let t=JSON.parse(localStorage.getItem(Cs)||"[]");return Array.isArray(t)?t.filter(a=>a&&a.data&&Array.isArray(a.data.items)):[]}catch{return[]}}function ra(t){try{return localStorage.setItem(Cs,JSON.stringify(t)),!0}catch{return!1}}var Fs=()=>{let t=JSON.parse(w.dataJSON());return{id:$r(),name:t.settings.tripName,savedAt:Date.now(),count:t.items.length,data:t}},yr=["rate","rateSource","rateUpdatedAt","rateProvider","budget","refundFeePct","cardRebatePct","checkedLimit","carryLimit","checkedBase","carryBase","customStores","storeMeta","listView"];function Rs(t){let a=Fs();if(!ra([a,...Le()]))return!1;let e={tripName:t};return yr.forEach(s=>{s in a.data.settings&&(e[s]=a.data.settings[s])}),w.importData({items:[],settings:e}),!0}function Is(t){let a=Le(),e=a.find(n=>n.id===t);if(!e)return!1;let s=a.filter(n=>n.id!==t);return ra(w.state.items.length?[Fs(),...s]:s)?(w.importData(e.data),!0):!1}function _s(t){return ra(Le().filter(a=>a.id!==t))}var mn={};xe(mn,{getIntroMode:()=>ua,mount:()=>Zr,setIntroMode:()=>fn});function rn(t,a=""){let e=te(t.category),s=`<span class="sr-only">\u5206\u985E\uFF1A${u(e.label)}</span>${t.demo?'<span class="thumb-demo">\u793A\u7BC4</span>':""}<span class="thumb-qty">\xD7 ${t.qty}</span>`;return t.image?`<div class="thumb ${a}" title="${u(e.label)}"><img src="${u(t.image)}" alt="" loading="lazy" decoding="async"><span class="thumb-cat" aria-hidden="true">${c(e.icon,"sm")}</span>${s}</div>`:`<div class="thumb thumb-icon ${a} cat-${e.id}" title="${u(e.label)}">${c(e.icon)}${s}</div>`}function wr(t,a){return t.taxFree?a.refundable?`<span class="badge badge-cyan">${c("verified","sm")}\u53EF\u9000\u7A05 ${y(a.refund)}</span>`:t.store?`<span class="badge badge-warn">\u5DEE ${y(a.group.shortfall)} \u9054\u6A19</span>`:'<span class="badge badge-muted">\u672A\u9078\u5E97\u92EA</span>':'<span class="badge badge-muted">\u4E0D\u8FA6\u514D\u7A05</span>'}function xr(t){if(t.purchased&&t.purchasedStore)return`<span class="tag tag-store" title="\u5728 ${u(t.purchasedStore)} \u8CB7\u5230">${c("storefront","sm")}<span class="tag-text">${u(t.purchasedStore)}</span></span>`;if(t.anyStore)return`<span class="tag tag-store">${c("compare_arrows","sm")}<span class="tag-text">\u4E0D\u9650\u5E97\u92EA</span></span>`;if(!t.stores.length)return'<span class="tag tag-store tag-empty">\u672A\u9078\u5E97\u92EA</span>';let a=t.stores.length-1;return`<span class="tag tag-store" title="${u(t.stores.join("\u3001"))}">${c("storefront","sm")}<span class="tag-text">${u(t.stores[0])}</span>${a?`<span class="tag-more">+${a}</span>`:""}</span>`}function Ns(t,a,e,s="grid"){let n=fa(t.priority),o=t.brand?`${t.brand}\uFF5C${t.name}`:t.name;return`
  <article class="card item-card ${t.purchased?"is-done":""} layout-${s}" data-id="${t.id}">
    <div class="item-top">
      ${xr(t)}
      <span class="tag tag-prio p${n.value}" title="${n.label}"><span aria-hidden="true">${n.stars}</span><span>${n.label}</span></span>
      <button type="button" class="check ${t.purchased?"on":""}" data-act="toggle"
        role="checkbox" aria-checked="${t.purchased}" aria-label="\u5DF2\u8CB7\uFF1A${u(t.name)}">${c("check")}</button>
    </div>
    <div class="item-body">
      ${rn(t)}
      <div class="item-main">
        ${t.brand?`<p class="item-brand">${u(t.brand)}</p>`:""}
        <h3 class="item-name"><button type="button" class="card-link" data-act="open" aria-label="\u67E5\u770B\u8A73\u60C5\uFF1A${u(o)}">${u(t.name)}</button></h3>
        ${t.nameJa?`<p class="item-ja" lang="ja">${u(t.nameJa)}</p>`:""}
        ${t.note?`<p class="item-note">${c("edit_note","sm")}${u(t.note)}</p>`:""}
      </div>
    </div>
    <div class="item-meta">
      ${t.buyFor?`<span class="who-tag">@${u(t.buyFor)}</span>`:""}
      ${wr(t,a)}
      ${t.weightKg?`<span class="meta-text">${c("luggage","sm")}${Vt(a.weight)}</span>`:""}
      ${t.planDate?`<span class="meta-text">${c("event","sm")}${Xe(t.planDate)}</span>`:""}
    </div>
    <div class="item-foot">
      <p class="price">
        <span class="price-yen">${y(a.pay)}</span>
        <span class="price-twd">\u2248 ${$t(a.pay,e)}</span>
      </p>
      <div class="item-actions">
        <button type="button" class="icon-btn" data-act="edit" aria-label="\u7DE8\u8F2F ${u(t.name)}" title="\u7DE8\u8F2F">${c("edit")}</button>
        <button type="button" class="icon-btn" data-act="delete" aria-label="\u522A\u9664 ${u(t.name)}" title="\u522A\u9664">${c("delete")}</button>
      </div>
    </div>
  </article>`}function se({label:t,icon:a,value:e,unit:s="",foot:n="",bar:o="",tone:r=""}){return`
  <section class="card kpi ${r}">
    <div class="kpi-head"><h2 class="kpi-label">${t}</h2><span class="kpi-icon">${c(a)}</span></div>
    <p class="kpi-value" data-count-key="${t}">${e}${s?`<small>${s}</small>`:""}</p>
    ${o}
    ${n?`<div class="kpi-foot">${n}</div>`:""}
  </section>`}function Ht({eyebrow:t,title:a,sub:e,subShort:s="",actions:n=""}){return`
  <header class="page-head">
    <div>
      <p class="eyebrow">${c("auto_awesome","sm")}${t}</p>
      <h1 class="page-title">${a}</h1>
      ${e?`<p class="page-sub">${s?`<span class="sub-full">${e}</span><span class="sub-short">${s}</span>`:e}</p>`:""}
    </div>
    ${n?`<div class="page-actions">${n}</div>`:""}
  </header>`}function Aa(t){return`
  <nav class="jump-nav" aria-label="\u672C\u9801\u5340\u584A" data-jump-nav>
    <div class="jump-track">
      ${t.map(a=>`<button type="button" class="jump-chip" data-jump="${a.id}">${a.label}</button>`).join("")}
    </div>
  </nav>`}function La(t){let a=t.querySelector("[data-jump-nav]");if(!a)return{refresh(){},destroy(){}};let e=[...a.querySelectorAll("[data-jump]")],s=h=>t.querySelector(`#${CSS.escape(h)}`),n=h=>h?.closest("section, .pack-weights, .card")??h,o=()=>(document.querySelector(".topbar")?.offsetHeight??0)+a.offsetHeight+12,r="",i=h=>{h!==r&&(r=h,e.forEach(f=>{let k=f.dataset.jump===h;if(k?f.setAttribute("aria-current","true"):f.removeAttribute("aria-current"),k){let g=f.parentElement;g.scrollLeft=f.offsetLeft-(g.clientWidth-f.offsetWidth)/2}}))},l=()=>e.forEach(h=>{h.hidden=!s(h.dataset.jump)}),d=0,m=()=>{d||(d=requestAnimationFrame(()=>{d=0;let h=o()+4,f="";for(let k of e){if(k.hidden)continue;let g=n(s(k.dataset.jump));g&&g.getBoundingClientRect().top<=h&&(f=k.dataset.jump)}i(f||e.find(k=>!k.hidden)?.dataset.jump||"")}))};return a.addEventListener("click",h=>{let f=h.target.closest("[data-jump]");if(!f)return;let k=s(f.dataset.jump);if(!k)return;let g=n(k),v=matchMedia("(prefers-reduced-motion: reduce)").matches;scrollTo({top:g.getBoundingClientRect().top+scrollY-o(),behavior:v?"auto":"smooth"}),k.hasAttribute("tabindex")||k.setAttribute("tabindex","-1"),k.focus({preventScroll:!0}),i(f.dataset.jump)}),addEventListener("scroll",m,{passive:!0}),l(),m(),{refresh(){l(),m()},destroy(){removeEventListener("scroll",m)}}}function Ue({title:t,text:a,actions:e}){return`
  <div class="card empty">
    <div class="empty-orb" aria-hidden="true">${c("auto_awesome")}</div>
    <h2 class="empty-title">${t}</h2>
    <p class="empty-text">${a}</p>
    <div class="empty-actions">${e}</div>
  </div>`}var de="ja";function Ds(t){let a=t.nameJa||t.name,e=t.jan?ts(t.jan):"",s=o=>de==="both"?`<span class="zh">${u(o)}</span>`:"",n=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u3092\u63A2\u3057\u3066\u3044\u307E\u3059\u3002",zh:"\u6211\u5728\u627E\u9019\u500B\u5546\u54C1\u3002"},t.taxFree?{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"}:null,t.discountPct?{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\uFF08\u512A\u5F85\uFF09\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u53EF\u4EE5\u4F7F\u7528\u512A\u60E0\u5238\uFF08\u512A\u60E0\uFF09\u55CE\uFF1F"}:null,t.fragile?{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"}:null].filter(Boolean);return`
  <div class="dlg-shell counter-shell" data-mode="${de}">
    <header class="dlg-head">
      <p class="eyebrow">${c("stars","sm")}COUNTER MEMO CARD \xB7 \u5C08\u6AC3\u51FA\u793A\u5361</p>
      <h2 id="counter-title" class="dlg-title">${u(t.name)}</h2>
      <div class="seg seg-text" role="group" aria-label="\u986F\u793A\u6A21\u5F0F">
        <button type="button" class="${de==="ja"?"on":""}" aria-pressed="${de==="ja"}" data-mode="ja">${c("visibility","sm")}\u65E5\u6587\u5927\u5B57</button>
        <button type="button" class="${de==="both"?"on":""}" aria-pressed="${de==="both"}" data-mode="both">${c("translate","sm")}\u4E2D\u65E5\u5C0D\u7167</button>
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
        <button type="button" class="counter-barcode" data-barcode aria-label="\u653E\u5927 JAN \u689D\u78BC ${u(t.jan)}\uFF0C\u5168\u87A2\u5E55\u7D66\u5E97\u54E1\u6383\u63CF">
          ${e}
          <span class="counter-barcode-num mono">${u(t.jan)}</span>
          <span class="counter-barcode-hint">${c("zoom_in","sm")}\u9EDE\u689D\u78BC\u53EF\u5168\u87A2\u5E55\u653E\u5927</span>
        </button>`:t.jan?`<p class="counter-jan-text"><span class="counter-label" lang="ja">JAN</span> <span class="mono">${u(t.jan)}</span></p>`:""}
        <p class="counter-label" lang="ja">\u5BFE\u8C61\u5546\u54C1</p>
        <p class="counter-name" lang="ja">${u(a)}</p>
        ${t.brand?`<p class="counter-brand">${u(t.brand)}</p>`:""}
        <p class="counter-qty" lang="ja">\u5E0C\u671B\u6570\u91CF\uFF1A<strong>${t.qty}</strong> \u70B9${de==="both"?`<span class="zh">\uFF08\u60F3\u8CB7 ${t.qty} \u4EF6\uFF09</span>`:""}</p>
      </section>

      <section class="counter-lines">
        ${n.map(o=>`<button type="button" class="phrase phrase-lg" data-ja="${u(o.ja)}" data-zh="${u(o.zh)}"><span lang="ja">\u300C${u(o.ja)}\u300D</span>${s(o.zh)}</button>`).join("")}
      </section>

      <section class="counter-phrases" aria-labelledby="ph-title">
        <h3 id="ph-title" class="section-title">${c("touch_app","sm")}\u6307\u5DEE\u6703\u8A71\uFF1A\u9EDE\u4E00\u4E0B\u653E\u5927\u7D66\u5E97\u54E1\u770B</h3>
        <div class="phrase-grid">
          ${Dn.map(o=>`<button type="button" class="phrase" data-ja="${u(o.ja)}" data-zh="${u(o.zh)}"><span lang="ja">\u300C${u(o.ja)}\u300D</span><span class="zh">${u(o.zh)}</span></button>`).join("")}
        </div>
      </section>
    </div>

    <footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-full>${c("fullscreen")}\u5168\u87A2\u5E55</button>
      <button type="button" class="btn btn-gold grow" data-copy>${c("content_copy")}\u8907\u88FD\u65E5\u6587</button>
    </footer>

    <div class="phrase-zoom" data-zoom hidden>
      <div class="zoom-barcode" data-zoom-bar hidden>${e}<p class="mono">${u(t.jan)}</p></div>
      <p class="zoom-ja" lang="ja"></p>
      <p class="zoom-zh"></p>
      <button type="button" class="btn btn-slate" data-zoom-close>${c("close")}\u6536\u8D77</button>
    </div>
  </div>`}function qs(t){let a=w.getItem(t);if(!a)return;let e=Ut("dlg-counter",Ds(a),"counter-title"),s=null,n=()=>{let r=w.getItem(t);if(!r){mt(e);return}e.querySelector(".dlg-shell").outerHTML=Ds(r)};e.addEventListener("click",async r=>{let i=r.target;if(i.closest(".dlg-close")){mt(e);return}let l=i.closest("[data-mode]");if(l&&l.tagName==="BUTTON"){de=l.dataset.mode,n(),e.querySelector(`button[data-mode="${de}"]`)?.focus();return}if(i.closest("[data-fix]")){Jt(t);return}let d=i.closest(".phrase, [data-barcode]");if(d){s=d;let m=e.querySelector("[data-zoom]"),h=d.matches("[data-barcode]");m.classList.toggle("is-barcode",h),m.querySelector("[data-zoom-bar]").hidden=!h,m.querySelector(".zoom-ja").textContent=h?"":d.dataset.ja,m.querySelector(".zoom-zh").textContent=h?"":d.dataset.zh,m.hidden=!1,m.querySelector("[data-zoom-close]").focus();return}if(i.closest("[data-zoom-close]")){e.querySelector("[data-zoom]").hidden=!0,s?.focus();return}if(i.closest("[data-full]")){try{document.fullscreenElement?await document.exitFullscreen():await e.querySelector(".counter-shell").requestFullscreen()}catch{G({title:"\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u5168\u87A2\u5E55",message:"\u53EF\u4EE5\u628A\u624B\u6A5F\u8F49\u6A6B\u5411\u6216\u653E\u5927\u756B\u9762\u3002",tone:"muted"})}return}if(i.closest("[data-copy]")){let m=w.getItem(t),h=[`\u5BFE\u8C61\u5546\u54C1\uFF1A${m.nameJa||m.name}`,`\u5E0C\u671B\u6570\u91CF\uFF1A${m.qty}\u70B9`,m.jan?`JAN\uFF1A${m.jan}`:"",m.taxFree?"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002":""].filter(Boolean).join(`
`);try{await navigator.clipboard.writeText(h),G({title:"\u5DF2\u8907\u88FD\u65E5\u6587",message:"\u53EF\u4EE5\u8CBC\u5230\u7FFB\u8B6F App \u6216\u8A0A\u606F\u88E1\u3002",tone:"muted",duration:3e3})}catch{G({title:"\u7121\u6CD5\u8907\u88FD",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\uFF0C\u8ACB\u624B\u52D5\u9078\u53D6\u6587\u5B57\u3002",tone:"error"})}}}),e.addEventListener("keydown",r=>{let i=e.querySelector("[data-zoom]");r.key==="Escape"&&!i.hidden&&(r.preventDefault(),r.stopPropagation(),i.hidden=!0,s?.focus())},{capture:!0});let o=w.subscribe(n);Bt(e,{onClose:()=>{o(),document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}})}var kr={checked:"\u8A17\u904B\u884C\u674E",carry:"\u96A8\u8EAB\u884C\u674E",none:"\u4E0D\u653E\u884C\u674E\uFF08\u5BC4\u9001\uFF0F\u73FE\u5834\u4F7F\u7528\uFF09"};function js(t){let{settings:a}=w.state,e=a.rate,{byItem:s}=Te(w.state.items,a),n=s.get(t.id),o=n.group,r=te(t.category),i=fa(t.priority),l;return t.taxFree?t.store?o.eligible?l=`${u(o.store)}${o.date?`\uFF08${Xe(o.date)}\uFF09`:""} \u514D\u7A05\u5546\u54C1\u672A\u7A05\u5408\u8A08 ${y(o.eligibleExcl)}\uFF0C\u5DF2\u9054 ${y(dt)} \u9580\u6ABB\u3002`:l=`${u(o.store)} \u76EE\u524D\u672A\u7A05\u5408\u8A08 ${y(o.eligibleExcl)}\uFF0C\u518D <strong>${y(o.shortfall)}</strong>\uFF08\u672A\u7A05\uFF09\u5373\u53EF\u9000\u7A05\u3002`:l="\u9078\u64C7\u5E97\u92EA\u5F8C\uFF0C\u624D\u80FD\u548C\u540C\u5E97\u5546\u54C1\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\u3002":l="\u9019\u4EF6\u5546\u54C1\u8A2D\u5B9A\u70BA\u4E0D\u8FA6\u514D\u7A05\u3002",`
  <div class="dlg-shell drawer-shell">
    <header class="dlg-head">
      <p class="eyebrow">${c(r.icon,"sm")}${u(r.label)}${t.buyFor?` \xB7 @${u(t.buyFor)}`:""}</p>
      <h2 id="detail-title" class="dlg-title">${u(t.name)}</h2>
      ${t.nameJa?`<p class="dlg-ja" lang="ja">${u(t.nameJa)}</p>`:""}
      <div class="tag-row">
        <span class="badge ${t.purchased?"badge-gold":"badge-muted"}">${c(t.purchased?"verified":"pending","sm")}${t.purchased?`\u5DF2\u8CB7${t.purchasedAt?` \xB7 ${Ot(t.purchasedAt)}`:""}`:"\u5F85\u8CB7"}</span>
        <span class="badge badge-prio">${i.stars} ${i.label}</span>
        ${t.demo?'<span class="badge badge-muted">\u793A\u7BC4\u8CC7\u6599</span>':""}
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8A73\u60C5">${c("close")}</button>
    </header>

    <div class="dlg-scroll" tabindex="0" role="region" aria-label="\u5546\u54C1\u8A73\u60C5\u5167\u5BB9">
      <div class="detail-hero">
        ${rn(t,"thumb-lg")}
        <dl class="info-grid">
          ${t.brand?`<div><dt>\u54C1\u724C</dt><dd>${u(t.brand)}</dd></div>`:""}
          <div><dt>\u6578\u91CF</dt><dd>${t.qty}</dd></div>
          <div><dt>\u5E6B\u8AB0\u8CB7</dt><dd>${t.buyFor?`@${u(t.buyFor)}`:"\u81EA\u7528"}</dd></div>
          <div class="span2"><dt>${t.purchased?"\u8CFC\u8CB7\u5E97\u5BB6":"\u76EE\u6A19\u5E97\u92EA"}</dt><dd>${t.purchased?u(t.purchasedStore||"\u672A\u8A18\u9304"):t.anyStore?"\u4E0D\u9650\u5E97\u92EA\uFF08\u6BD4\u50F9\u4E2D\uFF09":t.stores.length?t.stores.map((d,m)=>`${u(d)}${m===0&&t.stores.length>1?"<small>\uFF08\u4E3B\u9078\uFF09</small>":""}`).join("\u3001"):"\u672A\u9078\u5E97\u92EA"}</dd></div>
          <div><dt>\u5730\u5340</dt><dd>${u(t.area||"\u672A\u6307\u5B9A")}</dd></div>
          <div><dt>\u9810\u8A08\u65E5\u671F</dt><dd>${t.planDate?Xe(t.planDate):"\u672A\u5B9A"}</dd></div>
          <div><dt>\u91CD\u91CF</dt><dd>${t.weightKg?Vt(n.weight):"\u672A\u586B"}</dd></div>
          <div><dt>\u884C\u674E</dt><dd>${kr[zt(t)]}${zt(t)!==t.luggage?"<small>\uFF08\u4F9D\u5305\u88DD\u5C6C\u6027\uFF09</small>":""}</dd></div>
          ${t.jan?`<div class="span2"><dt>JAN \u689D\u78BC</dt><dd class="mono">${u(t.jan)}${Qe(t.jan)?"":' <small class="text-warn">\uFF08\u6AA2\u67E5\u78BC\u4E0D\u7B26\uFF09</small>'}</dd></div>`:""}
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
          <div><dt>\u5B9A\u50F9\uFF08\u542B\u7A05 ${t.taxRate}%\uFF09\xD7 ${t.qty}</dt><dd>${y(n.listIncl)}</dd></div>
          ${n.discount?`<div class="minus"><dt>\u6298\u6263 ${t.discountPct}%</dt><dd>\u2212 ${y(n.discount)}</dd></div>`:""}
          <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${y(n.pay)}</dd></div>
          ${n.refundable?`
            <div class="minus"><dt>\u96E2\u5883\u9000\u7A05\uFF08\u6D88\u8CBB\u7A05 ${t.taxRate}%\uFF09</dt><dd>\u2212 ${y(n.tax)}</dd></div>
            ${n.fee?`<div class="plus"><dt>\u9000\u7A05\u624B\u7E8C\u8CBB ${n.feePct}%</dt><dd>+ ${y(n.fee)}</dd></div>`:""}`:""}
        </dl>
        <div class="ledger-total">
          <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${y(n.net)}</span></div>
          <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${$t(n.net,e)}</span></div>
        </div>
        ${a.cardRebatePct?`<p class="hint">${c("credit_card","sm")}\u5237\u5361\u6DE8\u56DE\u994B ${a.cardRebatePct}%\uFF0C\u7D04\u518D\u7701 ${$t(n.pay*a.cardRebatePct/100,e)}</p>`:""}
      </section>

      <section class="threshold ${o.eligible&&t.taxFree?"ok":""}" aria-labelledby="th-title">
        <h3 id="th-title" class="section-title">${c("percent","sm")}\u514D\u7A05\u9580\u6ABB\uFF08\u540C\u5E97\u540C\u65E5\u672A\u7A05 ${y(dt)}\uFF09</h3>
        ${t.taxFree&&t.store?me(o.progress,{label:"\u514D\u7A05\u9580\u6ABB\u9032\u5EA6",tone:o.eligible?"cyan":"gold"}):""}
        <p>${l}</p>
        ${o.undatedMerge&&t.taxFree?`<p class="small">${c("event","sm")} \u540C\u5E97\u5546\u54C1\u5206\u4E0D\u540C\u5929\u8CB7\u6642\uFF0C\u8ACB\u586B\u9810\u8A08\u65E5\u671F\uFF08\u76EE\u524D\u8996\u70BA\u540C\u4E00\u5929\u5408\u4F75\u8A08\u7B97${o.mergeNeeded?"\uFF0C\u5206\u958B\u8CB7\u53EF\u80FD\u5C31\u4E0D\u5230\u9580\u6ABB":""}\uFF09\u3002</p>`:""}
      </section>

      ${t.note?`<section><h3 class="section-title">${c("edit_note","sm")}\u5099\u8A3B</h3><p class="note-box">${u(t.note)}</p></section>`:""}
    </div>

    <footer class="dlg-foot">
      <button type="button" class="icon-btn icon-btn-lg" data-d="delete" aria-label="\u522A\u9664 ${u(t.name)}" title="\u522A\u9664">${c("delete")}</button>
      <button type="button" class="btn btn-ghost" data-d="edit">${c("edit")}\u7DE8\u8F2F</button>
      <button type="button" class="btn btn-slate" data-d="counter">${c("translate")}\u51FA\u793A\u7D66\u5E97\u54E1</button>
      <button type="button" class="btn ${t.purchased?"btn-ghost":"btn-gold"} grow" data-d="toggle">
        ${c(t.purchased?"undo":"check_circle")}${t.purchased?"\u6539\u56DE\u5F85\u8CB7":"\u6A19\u8A18\u5DF2\u8CB7"}
      </button>
    </footer>
  </div>`}function Pa(t){let a=w.getItem(t);if(!a)return;let e=Ut("dlg-drawer",js(a),"detail-title"),s=w.subscribe(()=>{let n=w.getItem(t);if(!n){mt(e);return}let o=e.querySelector(".dlg-scroll")?.scrollTop??0,r=document.activeElement?.dataset?.d;e.querySelector(".dlg-shell").outerHTML=js(n),e.querySelector(".dlg-scroll").scrollTop=o,r&&e.querySelector(`[data-d="${r}"]`)?.focus()});e.addEventListener("click",async n=>{if(n.target.closest(".dlg-close")){mt(e);return}let o=n.target.closest("[data-d]")?.dataset.d;o==="toggle"?ln(t):o==="edit"?Jt(t):o==="counter"?qs(t):o==="delete"&&await cn(t)&&mt(e)}),Bt(e,{onClose:s})}var Os=t=>requestAnimationFrame(()=>requestAnimationFrame(t));function Bs(t){Os(()=>{document.querySelectorAll(`[data-id="${CSS.escape(t)}"] .check.on`).forEach(a=>{a.classList.add("just-checked");let e=document.createElement("span");e.className="hanko",e.setAttribute("aria-hidden","true"),e.textContent="\u6E08",a.append(e),setTimeout(()=>{e.remove(),a.classList.remove("just-checked")},1600)})})}function Us(t){Os(()=>{document.querySelectorAll(`[data-group="${CSS.escape(t)}"]`).forEach(a=>{a.classList.add("just-reached");let e=document.createElement("span");e.className="taxfree-pop",e.setAttribute("aria-hidden","true"),e.innerHTML=`${c("verified","sm")}\u514D\u7A05\u9054\u6210`,(a.querySelector(".sg-head, .dlg-head")??a).append(e),setTimeout(()=>{e.remove(),a.classList.remove("just-reached")},2600)})})}async function ln(t,a){let e=w.getItem(t);if(!e)return;let s=a;if(!e.purchased&&s===void 0)if(e.stores.length===1)s=e.stores[0];else if(e.stores.length>1||e.anyStore){if(s=await is(e),s===null)return}else s="";let n=!e.purchased&&s&&e.taxFree?dn(w.state.items,w.state.settings,s):0,o=w.togglePurchased(t,void 0,s);if(!o.purchased){G({title:"\u5DF2\u6539\u56DE\u5F85\u8CB7",message:u(o.name),tone:"muted",duration:3e3});return}let{byItem:r}=Te(w.state.items,w.state.settings),i=r.get(t),l=[o.purchasedStore?`\u5728 ${u(o.purchasedStore)} \u8CB7\u5230`:"",`\u652F\u4ED8 ${y(i.pay)}`].filter(Boolean);i.refund&&l.push(`\u9810\u4F30\u9000\u7A05 ${y(i.refund)}`),i.group.eligible&&i.group.store&&l.push(`${u(i.group.store)} \u5DF2\u9054\u514D\u7A05\u9580\u6ABB`);let d=!!s&&n<dt&&dn(w.state.items,w.state.settings,s)>=dt;Bs(t),d&&Us(st(s)),G({title:d?`\u5DF2\u8CB7\u30FB${u(s)} \u514D\u7A05\u9054\u6210`:"\u5DF2\u8CB7",message:`\u300C${u(o.name)}\u300D\xB7 ${l.join(" \xB7 ")}`,actionText:"\u5FA9\u539F",onAction:()=>w.togglePurchased(t,!1)})}async function cn(t){let a=w.getItem(t);if(!a||!await Wt({title:"\u522A\u9664\u9019\u500B\u5546\u54C1\uFF1F",body:`\u300C<strong>${u(a.name)}</strong>\u300D\u6703\u5F9E\u6E05\u55AE\u79FB\u9664\u3002\u522A\u9664\u5F8C 5 \u79D2\u5167\u53EF\u4EE5\u6309\u300C\u5FA9\u539F\u300D\u3002`,confirmText:`\u522A\u9664\u300C${a.name.length>10?`${a.name.slice(0,10)}\u2026`:a.name}\u300D`,danger:!0}))return!1;let s=w.state.items.findIndex(o=>o.id===t),n=w.removeItem(t);return G({title:"\u5DF2\u522A\u9664",message:u(n.name),actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>w.restoreItem(n,s)}),!0}function Ge(t){t.addEventListener("click",a=>{let e=a.target.closest("[data-act]"),s=a.target.closest("[data-id]");if(!e||!s||!t.contains(s))return;let{id:n}=s.dataset;switch(e.dataset.act){case"toggle":ln(n,e.dataset.at);break;case"open":Pa(n);break;case"edit":Jt(n);break;case"delete":cn(n);break;default:break}})}var un="__none__",ia="__any__",pn="__unknown__";function Gs(t){let a=new Map,e=(s,n,o,r)=>{a.has(s)||a.set(s,{key:s,name:n,rows:[]}),a.get(s).rows.push({item:o,role:r})};for(let s of t)if(s.purchased){let n=s.purchasedStore;e(n?st(n):pn,n||"\u5DF2\u8CB7\uFF08\u672A\u8A18\u9304\u5E97\u5BB6\uFF09",s,"bought")}else s.anyStore?e(ia,pe,s,"any"):s.stores.length?s.stores.forEach((n,o)=>e(st(n),n,s,o===0?"main":"backup")):e(un,"\u672A\u6307\u5B9A\u5E97\u92EA",s,"none");return[...a.values()]}function dn(t,a,e){let s=Gs(t).find(n=>n.key===st(e));return s?Js(s,a).todayExcl:0}function Js(t,a){let e=fe(Date.now()),s=0,n=0,o=0,r=0,i=0;for(let{item:l}of t.rows){let d=Fe(l,a).lineExcl;if(l.purchased){if(i+=1,!l.taxFree)continue;l.purchasedAt&&fe(l.purchasedAt)===e?s+=d:n+=d}else r+=1,l.taxFree&&(o+=d)}return{todayExcl:s,otherDaysExcl:n,pendingExcl:o,pendingCount:r,boughtCount:i}}function Hs(t,a,e){if(e)return{status:"",bar:""};if(a.noTaxFree)return{status:`<span class="sg-plan">${c("block","sm")}\u6B64\u5E97\u4E0D\u8FA6\u514D\u7A05</span>`,bar:""};if(a.dutyFree)return{status:`<span class="sg-plan">${c("flight_takeoff","sm")}\u51FA\u5883\u5340\u514D\u7A05\u5E97\uFF0C\u552E\u50F9\u5DF2\u4E0D\u542B\u7A05</span>`,bar:""};let s=t.todayExcl>=dt,n=t.todayExcl+t.pendingExcl;if(!t.todayExcl&&!t.pendingExcl)return{status:t.pendingCount?`<span class="sg-plan">${c("info","sm")}\u6E05\u55AE\u88E1\u6C92\u6709\u8981\u8FA6\u514D\u7A05\u7684\u5546\u54C1</span>`:"",bar:""};if(!t.todayExcl&&t.pendingExcl){let i=t.pendingExcl>=dt,l=`<span class="sg-now">\u6E05\u55AE\u5408\u8A08 <strong>${y(t.pendingExcl)}</strong><small>\uFF08\u672A\u7A05\uFF09</small></span>${i?`<span class="sg-plan ok">${c("verified","sm")}\u5168\u8CB7\u53EF\u514D\u7A05</span>`:`<span class="sg-plan">\u9084\u5DEE ${y(dt-t.pendingExcl)} \u624D\u80FD\u514D\u7A05</span>`}`,d=`<div class="sg-bar is-plan" role="img" aria-label="\u6E05\u55AE\u5F85\u8CB7\u672A\u7A05 ${y(t.pendingExcl)}\uFF0C\u514D\u7A05\u9580\u6ABB ${y(dt)}${i?"\uFF0C\u5168\u8CB7\u53EF\u9054\u6A19":""}">
      <span class="seg-later" style="--w:${Math.min(100,t.pendingExcl/dt*100)}%"></span>
    </div>`;return{status:l,bar:d}}let o=s?`<span class="sg-ok">${c("verified","sm")}\u4ECA\u5929\u5DF2\u9054\u514D\u7A05\uFF08\u672A\u7A05 ${y(t.todayExcl)}\uFF09</span>`:`<span class="sg-now">\u4ECA\u5929\u5DF2\u8CB7 <strong>${y(t.todayExcl)}</strong>\uFF08\u5DEE <strong>${y(dt-t.todayExcl)}</strong> \u514D\u7A05\uFF09</span>`;t.pendingExcl&&!s&&(o+=n>=dt?'<span class="sg-plan ok">\u6E05\u55AE\u5168\u8CB7\u53EF\u9054\u6A19</span>':`<span class="sg-plan">\u6E05\u55AE\u5168\u8CB7\u4ECD\u5DEE ${y(dt-n)}</span>`);let r=`<div class="sg-bar" role="img" aria-label="\u4ECA\u5929\u672A\u7A05 ${y(t.todayExcl)}\uFF0C\u6E05\u55AE\u5F85\u8CB7 ${y(t.pendingExcl)}\uFF0C\u514D\u7A05\u9580\u6ABB ${y(dt)}">
    <span class="seg-paid" style="--w:${Math.min(100,t.todayExcl/dt*100)}%"></span>
    <span class="seg-later" style="--w:${Math.max(0,Math.min(100-t.todayExcl/dt*100,t.pendingExcl/dt*100))}%"></span>
  </div>`;return{status:o,bar:r}}var zs=t=>c(t===ia?"compare_arrows":t?"help":"storefront"),Ws=t=>[t.pendingCount?`\u5F85\u8CB7 ${t.pendingCount}`:"",t.boughtCount?`\u5DF2\u8CB7 ${t.boughtCount}`:""].filter(Boolean).join(" \xB7 ");function Sr(t){let{st:a,info:e,special:s}=t,{status:n,bar:o}=Hs(a,e,s),r=t.rows.filter(l=>!l.item.purchased).slice(0,3).map(l=>u(l.item.name)),i=a.pendingCount-r.length;return`
  <article class="card sg ${a.pendingCount?"":"is-clear"}" data-group="${u(t.key)}">
    <div class="sg-head">
      <h3 class="sg-heading">
        <button type="button" class="sg-toggle card-link-sg" data-sg-open aria-haspopup="dialog">
          <span class="sg-icon">${zs(s)}</span>
          <span class="sg-title">
            <span class="sg-name">${u(t.name)}</span>
            <span class="sg-count">${Ws(a)}</span>
          </span>
          <span class="sg-chevron" aria-hidden="true">${c("chevron_right")}</span>
        </button>
      </h3>
      ${n?`<div class="sg-status">${n}</div>`:""}
      ${o}
      ${r.length?`<p class="sg-preview">${c("shopping_bag","sm")}<span>${r.join("\u3001")}${i>0?` \u7B49 ${a.pendingCount} \u4EF6`:""}</span></p>`:`<p class="sg-preview muted">${c("check_circle","sm")}<span>\u9019\u5BB6\u5E97\u7684\u6E05\u55AE\u5DF2\u8CB7\u9F4A</span></p>`}
      ${s||!e.couponUrl?"":`<div class="sg-actions">
        <a class="btn btn-xs btn-gold" href="${u(e.couponUrl)}" target="_blank" rel="noopener">${c("local_offer","sm")}\u958B\u555F\u512A\u60E0\u5238<span class="sr-only">\uFF08${u(t.name)}\uFF0C\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>
      </div>`}
    </div>
  </article>`}function Tr(t,a){let e=(t.coupons??[]).filter(o=>!o.categories).sort((o,r)=>o.min-r.min);if(!e.length)return"";let s=e.find(o=>a.todayExcl<o.min),n=[...e].reverse().find(o=>a.todayExcl>=o.min);return s?`<p class="tip">${c("local_offer","sm")}<span>${n?`\u5DF2\u53EF\u7528 ${n.pct}% \u5238\uFF1B`:""}\u4ECA\u5929\u518D\u8CB7\u672A\u7A05 ${y(s.min-a.todayExcl)}\uFF0C\u53EF\u7528 ${s.pct}% \u512A\u60E0\u5238${a.todayExcl+a.pendingExcl>=s.min?"\uFF08\u6E05\u55AE\u5168\u8CB7\u5C31\u9054\u5230\uFF09":""}\u3002</span></p>`:`<p class="tip tip-info">${c("local_offer","sm")}<span>\u4ECA\u5929\u5DF2\u9054\u6700\u9AD8\u512A\u60E0\u9580\u6ABB\uFF0C\u7D50\u5E33\u524D\u51FA\u793A\u512A\u60E0\u5238\u53EF\u518D\u6298 ${n.pct}%\u3002</span></p>`}function Er({item:t,role:a},e,s,n){let o=Fe(t,s),r=t.stores.filter(d=>st(d)!==e.key),i=[];t.qty>1&&i.push(`\xD7 ${t.qty}`),t.buyFor&&i.push(`<span class="who-tag">@${u(t.buyFor)}</span>`),a==="backup"&&i.push('<span class="role-tag">\u5099\u9078</span>'),!t.purchased&&r.length&&i.push(`<span class="alt-stores">\u4E5F\u53EF\u5728\uFF1A${r.map(u).join("\u3001")}</span>`),t.taxFree||i.push('<span class="muted">\u4E0D\u8FA6\u514D\u7A05</span>');let l=t.purchased||e.key===ia||e.key===un||e.key===pn?"":` data-at="${u(e.name)}"`;return`
  <li class="sg-row ${t.purchased?"is-done":""}" data-id="${t.id}">
    <button type="button" class="check ${t.purchased?"on":""}" data-act="toggle"${l}
      role="checkbox" aria-checked="${t.purchased}" aria-label="${t.purchased?"\u5DF2\u8CB7":`\u5728${u(e.name)}\u8CB7\u5230`}\uFF1A${u(t.name)}">${c("check")}</button>
    <div class="sg-main">
      <button type="button" class="sg-name-btn" data-act="open">${u(t.name)}</button>
      ${i.length?`<p class="sg-meta">${i.join('<span aria-hidden="true">\xB7</span>')}</p>`:""}
    </div>
    <p class="sg-price"><span>${y(o.pay)}</span><small>\u2248 ${$t(o.pay,n)}</small></p>
  </li>`}function Ca(t,a){let{settings:e}=t,s=t.items.filter(a);return Gs(s).map(o=>{let r=[ia,un,pn].includes(o.key)?o.key:null;return{...o,special:r,st:Js(o,e),info:r?{}:Se(o.name,e.storeMeta)}}).sort((o,r)=>(o.special?1:0)-(r.special?1:0)||(r.st.pendingCount>0)-(o.st.pendingCount>0)||r.st.pendingCount-o.st.pendingCount||o.name.localeCompare(r.name,"zh-Hant"))}function Ks({state:t},a){let{settings:e}=t,s=Ca(t,a),n=Un(t.items.flatMap(r=>[...r.stores,r.purchasedStore]),e.ignoredStorePairs),o=n.length?`<div class="merge-list" role="region" aria-label="\u53EF\u80FD\u662F\u540C\u4E00\u5BB6\u5E97">${n.map(([r,i])=>`
    <div class="notice notice-warn merge-notice" data-a="${u(r)}" data-b="${u(i)}">
      ${c("storefront")}
      <p><strong>\u300C${u(r)}\u300D\u548C\u300C${u(i)}\u300D\u662F\u540C\u4E00\u5BB6\u5E97\u55CE\uFF1F</strong><br>\u5E97\u540D\u4E0D\u540C\u6703\u5206\u958B\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\uFF0C\u5408\u4F75\u5F8C\u624D\u6703\u6B63\u78BA\u52A0\u7E3D\u3002</p>
      <div class="btn-row merge-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-merge="a">\u5408\u4F75\u70BA\u300C${u(r)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="b">\u5408\u4F75\u70BA\u300C${u(i)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="no">\u4E0D\u662F\u540C\u4E00\u5BB6</button>
      </div>
    </div>`).join("")}</div>`:"";return s.length?`${o}
  <p class="result-count" role="status">${s.filter(r=>!r.special).length} \u5BB6\u5E97 \xB7 \u9EDE\u5E97\u92EA\u5361\u7247\u6253\u958B\u8A72\u5E97\u7684\u63A1\u8CB7\u6E05\u55AE\uFF0C\u908A\u62FF\u908A\u52FE\u9078</p>
  <div class="item-grid sg-grid">${s.map(Sr).join("")}</div>`:`${o}<div class="card empty empty-sm"><p class="empty-text">\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5546\u54C1\u3002</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${c("filter_alt_off")}\u6E05\u9664\u7BE9\u9078</button></div>`}function Mr(t,a,e){if(!t)return`<div class="dlg-shell sheet-shell">
      <header class="dlg-head"><h2 id="sheet-title" class="dlg-title">\u9019\u5BB6\u5E97\u6C92\u6709\u5546\u54C1\u4E86</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589">${c("close")}</button></header>
      <div class="dlg-scroll"><p class="muted">\u5546\u54C1\u53EF\u80FD\u5DF2\u88AB\u522A\u9664\u3001\u6539\u5230\u5176\u4ED6\u5E97\uFF0C\u6216\u4E0D\u7B26\u5408\u76EE\u524D\u7684\u7BE9\u9078\u689D\u4EF6\u3002</p></div></div>`;let{st:s,info:n,special:o}=t,{status:r,bar:i}=Hs(s,n,o),l=!o&&t.rows.filter(m=>!m.item.purchased&&m.item.taxFree&&!m.item.planDate).length>=2,d=[...t.rows].sort((m,h)=>Number(m.item.purchased)-Number(h.item.purchased));return`
  <div class="dlg-shell sheet-shell" data-group="${u(t.key)}">
    <header class="dlg-head">
      <p class="eyebrow">${zs(o)}${o?"\u63A1\u8CB7\u6E05\u55AE":"STORE LIST \xB7 \u5E97\u92EA\u63A1\u8CB7\u6E05\u55AE"}</p>
      <h2 id="sheet-title" class="dlg-title">${u(t.name)}</h2>
      <p class="sg-count">${Ws(s)}</p>
      ${r?`<div class="sg-status">${r}</div>`:""}
      ${i}
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589 ${u(t.name)} \u63A1\u8CB7\u6E05\u55AE">${c("close")}</button>
    </header>
    <div class="dlg-scroll" tabindex="0" role="region" aria-label="${u(t.name)} \u7684\u5546\u54C1">
      ${o?"":va(n)}
      ${o?"":Tr(n,s)}
      ${s.otherDaysExcl?`<p class="tip tip-info">${c("event","sm")}<span>\u5176\u4ED6\u5929\u5728\u9019\u5BB6\u8CB7\u7684 ${y(s.otherDaysExcl)}\uFF08\u672A\u7A05\uFF09\u53E6\u5916\u8A08\u7B97\uFF0C\u4E0D\u4F75\u5165\u4ECA\u5929\u7684\u9580\u6ABB\u3002</span></p>`:""}
      ${l?`<p class="tip tip-info">${c("event","sm")}<span>\u540C\u5E97\u5546\u54C1\u5206\u4E0D\u540C\u5929\u8CB7\u6642\uFF0C\u8ACB\u5728\u5546\u54C1\u7684\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u586B\u9810\u8A08\u65E5\u671F\uFF0C\u9000\u7A05\u624D\u4E0D\u6703\u9AD8\u4F30\u3002</span></p>`:""}
      ${t.key===ia?`<p class="tip tip-info">${c("compare_arrows","sm")}<span>\u52FE\u9078\u6642\u6703\u8A62\u554F\u5728\u54EA\u5BB6\u8CB7\u5230\uFF0C\u4EE5\u4FBF\u7D2F\u8A08\u8A72\u5E97\u7684\u514D\u7A05\u9580\u6ABB\u3002</span></p>`:""}
      <ul class="sg-rows">${d.map(m=>Er(m,t,a,e)).join("")}</ul>
      ${o?"":`<a class="link-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.name)}" target="_blank" rel="noopener">${c("map","sm")}\u5728 Google \u5730\u5716\u627E\u9644\u8FD1\u5206\u5E97<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`}
    </div>
    ${o?"":`<footer class="dlg-foot">
      <button type="button" class="btn btn-ghost" data-sg-meta="${u(t.name)}">${c("tune","sm")}${n.couponUrl?"\u512A\u60E0\u5238\u8A2D\u5B9A":"\u52A0\u5165\u512A\u60E0\u5238\u9023\u7D50"}</button>
      ${n.couponUrl?`<a class="btn btn-gold grow" href="${u(n.couponUrl)}" target="_blank" rel="noopener">${c("local_offer","sm")}\u958B\u555F\u512A\u60E0\u5238<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`:""}
    </footer>`}
  </div>`}function Ar(t,a,{onMeta:e}){let s=()=>Ca(w.state,a).find(l=>l.key===t),n=()=>Mr(s(),w.state.settings,w.state.settings.rate),o=Ut("dlg-drawer dlg-sheet",n(),"sheet-title"),r=()=>{let l=o.querySelector(".dlg-scroll")?.scrollTop??0,d=document.activeElement,m=d?.closest?.("[data-id]")?.dataset.id,h=d?.dataset?.act;o.querySelector(".dlg-shell").outerHTML=n(),o.querySelector(".dlg-scroll").scrollTop=l,m&&h&&o.querySelector(`[data-id="${m}"] [data-act="${h}"]`)?.focus({preventScroll:!0})},i=w.subscribe(r);o.addEventListener("click",l=>{if(l.target.closest(".dlg-close")){mt(o);return}let d=l.target.closest("[data-sg-meta]");d&&e(d.dataset.sgMeta)}),Ge(o),Bt(o,{onClose:()=>{i(),requestAnimationFrame(()=>document.querySelector(`#view [data-group="${CSS.escape(t)}"] [data-sg-open]`)?.focus({preventScroll:!0}))}})}function Ys(t,{onMeta:a,filterFn:e}){t.addEventListener("click",s=>{let n=s.target.closest("[data-sg-open], [data-merge], [data-sg-meta]");if(n){if(n.matches("[data-sg-open]"))Ar(n.closest("[data-group]").dataset.group,e,{onMeta:a});else if(n.matches("[data-sg-meta]"))a(n.dataset.sgMeta);else if(n.matches("[data-merge]")){let o=n.closest(".merge-notice"),{a:r,b:i}=o.dataset;if(n.dataset.merge==="no")w.updateSettings({ignoredStorePairs:[...w.state.settings.ignoredStorePairs,Ba(r,i)]}),G({title:"\u5DF2\u8A18\u4F4F\uFF1A\u5169\u5BB6\u662F\u4E0D\u540C\u7684\u5E97",tone:"muted",duration:2500});else{let l=n.dataset.merge==="a"?r:i,d=l===r?i:r,m=w.state.items.map(h=>({id:h.id,stores:h.stores,purchasedStore:h.purchasedStore}));w.renameStore(d,l),G({title:`\u5DF2\u5408\u4F75\u70BA\u300C${l}\u300D`,message:"\u514D\u7A05\u9580\u6ABB\u5DF2\u91CD\u65B0\u8A08\u7B97\u3002",actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>m.forEach(h=>w.updateItem(h.id,{stores:h.stores,purchasedStore:h.purchasedStore}))})}}}})}var Je={crown:1.72,burst:3.3,sea:4.6,start:1.6,span:5.875,settle:9.5},Fa=[{dpr:1.5,q:1},{dpr:1.15,q:.7},{dpr:.85,q:.45}];function Ra(t){let a=t>>>0;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}var Lr=`
  attribute vec2 aPos;
  varying vec2 vUv;
  void main() { vUv = aPos * .5 + .5; gl_Position = vec4(aPos, 0., 1.); }`,Pr=`
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
  }`,Cr=`
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
  }`,Fr=`
  precision mediump float;
  varying vec2 vUv; uniform sampler2D uTex;
  void main() {
    vec3 c = texture2D(uTex, vUv).rgb;
    float b = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(.25, .9, b), 1.);
  }`,Rr=`
  precision mediump float;
  varying vec2 vUv; uniform sampler2D uTex; uniform vec2 uDir;
  void main() {
    vec3 c = texture2D(uTex, vUv).rgb * .2270270;
    c += (texture2D(uTex, vUv + uDir * 1.3846154).rgb + texture2D(uTex, vUv - uDir * 1.3846154).rgb) * .3162162;
    c += (texture2D(uTex, vUv + uDir * 3.2307692).rgb + texture2D(uTex, vUv - uDir * 3.2307692).rgb) * .0702703;
    gl_FragColor = vec4(c, 1.);
  }`,Ir=`
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
  }`;function _r(t){let a={alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"},e=t.getContext("webgl2",a),s=!!e;if(e||(e=t.getContext("webgl",a)),!e)return{error:"\u7121\u6CD5\u4F7F\u7528 WebGL"};function n($,L=Lr){let P=(Q,E)=>{let et=e.createShader(Q);if(e.shaderSource(et,E),e.compileShader(et),!e.getShaderParameter(et,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(et));return et},S=e.createProgram();if(e.attachShader(S,P(e.VERTEX_SHADER,L)),e.attachShader(S,P(e.FRAGMENT_SHADER,$)),e.linkProgram(S),!e.getProgramParameter(S,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(S));let D={},I=e.getProgramParameter(S,e.ACTIVE_UNIFORMS);for(let Q=0;Q<I;Q++){let E=e.getActiveUniform(S,Q).name;D[E]=e.getUniformLocation(S,E)}return{p:S,u:D}}let o;try{o={sprite:n(Cr,Pr),pre:n(Fr),blur:n(Rr),comp:n(Ir)}}catch($){return{error:`\u8457\u8272\u5668\u7DE8\u8B6F\u5931\u6557\uFF1A${$.message}`}}let r=null;if(s)(e.getExtension("EXT_color_buffer_float")||e.getExtension("EXT_color_buffer_half_float"))&&(r={internal:e.RGBA16F,type:e.HALF_FLOAT});else{let $=e.getExtension("OES_texture_half_float");$&&e.getExtension("OES_texture_half_float_linear")&&e.getExtension("EXT_color_buffer_half_float")&&(r={internal:e.RGBA,type:$.HALF_FLOAT_OES})}function i($,L){let P=e.createTexture();e.bindTexture(e.TEXTURE_2D,P);let S=r||{internal:e.RGBA,type:e.UNSIGNED_BYTE};e.texImage2D(e.TEXTURE_2D,0,S.internal,$,L,0,e.RGBA,S.type,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let D=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,P,0),{tex:P,fbo:D,w:$,h:L,ok:e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}}let l=$=>{$&&(e.deleteTexture($.tex),e.deleteFramebuffer($.fbo))};r&&!i(4,4).ok&&(r=null);let d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let m=12,h=6e3,f=new Float32Array(h*6*m),k=e.createBuffer(),g=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1],v=0,p={gl:e,gl2:s,hdr:!!r,P:o,W:0,H:0,U:0,scene:null,bloom:[],bloomOn:!0,maxDpr:1.5,program:n,target:i,drop:l,push($,L,P,S,D,I,Q,E,et,M=0){if(v>=h||E<=.002)return;let _=v*6*m;for(let H=0;H<6;H++)f[_++]=$,f[_++]=L,f[_++]=g[H*2],f[_++]=g[H*2+1],f[_++]=P,f[_++]=S,f[_++]=D,f[_++]=I,f[_++]=Q,f[_++]=E,f[_++]=et,f[_++]=M;v+=1},flush($=p.W,L=p.H){if(!v)return;let{p:P,u:S}=o.sprite;e.useProgram(P),e.uniform2f(S.uRes,$,L),e.bindBuffer(e.ARRAY_BUFFER,k),e.bufferData(e.ARRAY_BUFFER,f.subarray(0,v*6*m),e.DYNAMIC_DRAW);let D=4*m,I=(Q,E,et)=>{let M=e.getAttribLocation(P,Q);e.enableVertexAttribArray(M),e.vertexAttribPointer(M,E,e.FLOAT,!1,D,et*4)};I("aCenter",2,0),I("aCorner",2,2),I("aSize",2,4),I("aColor",4,6),I("aKind",2,10),e.drawArrays(e.TRIANGLES,0,v*6),v=0},fullscreen($){e.useProgram($.p),e.bindBuffer(e.ARRAY_BUFFER,d);let L=e.getAttribLocation($.p,"aPos");e.enableVertexAttribArray(L),e.vertexAttribPointer(L,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLES,0,6)},bindTex($,L,P){e.activeTexture(e.TEXTURE0+$),e.bindTexture(e.TEXTURE_2D,L),e.uniform1i(P,$)},additive($){$?(e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE)):e.disable(e.BLEND)},resize(){let $=Math.min(window.devicePixelRatio||1,p.maxDpr),L=Math.max(2,Math.round(t.clientWidth*$)),P=Math.max(2,Math.round(t.clientHeight*$));return L===p.W&&P===p.H||t.clientWidth<2||t.clientHeight<2?!1:(p.W=L,p.H=P,p.U=Math.min(L,P),t.width=L,t.height=P,l(p.scene),p.bloom.forEach(S=>{l(S.a),l(S.b)}),p.scene=i(L,P),p.bloom=[2,4,8,16].map(S=>{let D=Math.max(2,Math.ceil(L/S)),I=Math.max(2,Math.ceil(P/S));return{a:i(D,I),b:i(D,I)}}),!0)},begin(){e.disable(e.DEPTH_TEST),p.toScene(),e.disable(e.BLEND),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)},toScene(){e.bindFramebuffer(e.FRAMEBUFFER,p.scene.fbo),e.viewport(0,0,p.W,p.H)},finish({bloom:$=.5,exposure:L=1}={}){e.disable(e.BLEND);let P=p.scene;p.bloom.forEach((S,D)=>{e.bindFramebuffer(e.FRAMEBUFFER,S.a.fbo),e.viewport(0,0,S.a.w,S.a.h);let I=D===0?o.pre:o.blur;e.useProgram(I.p),p.bindTex(0,P.tex,I.u.uTex),D>0&&e.uniform2f(I.u.uDir,0,0),p.fullscreen(I);for(let Q=0;Q<2;Q++){let E=Q?S.b:S.a,et=Q?S.a:S.b;e.bindFramebuffer(e.FRAMEBUFFER,et.fbo),e.useProgram(o.blur.p),p.bindTex(0,E.tex,o.blur.u.uTex),e.uniform2f(o.blur.u.uDir,Q?0:1/S.a.w,Q?1/S.a.h:0),p.fullscreen(o.blur)}P=S.a}),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,p.W,p.H),e.useProgram(o.comp.p),p.bindTex(0,p.scene.tex,o.comp.u.uScene),p.bloom.forEach((S,D)=>p.bindTex(D+1,S.a.tex,o.comp.u[`uB${D}`])),e.uniform1f(o.comp.u.uBloom,p.bloomOn?$:0),e.uniform1f(o.comp.u.uExposure,L),p.fullscreen(o.comp)}};return p}function Nr(t){let a=t.push,e=Ra(20261114),s=S=>Math.min(1,Math.max(0,S)),n=S=>1-(1-S)**3,o=S=>S<.5?2*S*S:1-(-2*S+2)**2/2,r=Math.PI*2,i=1.6,l=6.2,d=[1,.76,.16],m=[1,.5,.06],h=[1,.9,.55],f=[1,.97,.88],k=[.7,.8,1],g=3,v=64,p=Array.from({length:760},()=>({s:e(),rf:e()**1.6,ph:e()*r,spin:(e()-.5)*3,v:.12+e()*.3,size:.0024+e()**2*.007,f:3+e()*9,tp:e()*r,star:e()<.13,c:e()<.12?f:e()<.6?h:d})),$=Array.from({length:84},()=>({ang:e()*r,len:.12+e()**1.8*.75,w:.0012+e()*.0026,a:.3+e()*.7,c:e()<.3?k:e()<.7?f:h,off:.03+e()*.1,f:1+e()*3,ph:e()*r})),L=Array.from({length:16},()=>({x:e(),y:e()*.9,s:.002+e()*.004,rot:e()*Math.PI,f:.4+e(),ph:e()*r})),P=(S,D,I)=>D*(.003+.125*S**.8)*(1+.2*Math.sin(S*7-I*1.6));return{emit(S,D){let{W:I,H:Q,U:E}=t,et=I/2,M=Q*.74,_=S-i,H=o(s(S/i)),tt=-Q*.08+(M+Q*.08)*H,V=Math.max(Q*.9,tt+Q*.25),F=s(1-(_-2.2)/.6),x=_<=0?0:(_<.55?n(_/.55):1-.78*s((_-.9)/1.3))*F,at=(.25+.75*H)*(_>0?s(1-_/.4):1);for(let C of L){let O=.35+.65*Math.sin(D*C.f+C.ph)**2;a(C.x*I,C.y*Q,E*C.s*2.2,E*C.s,...h,.9*O,0,C.rot)}let T=s((H-.6)/.4);a(et,M+E*.03,E*.75,E*.05,.4,.3,.75,.22*T*F,0),a(et,M+E*.012,E*.3,E*.02,...m,.5*T*F,0);let q=1.7;for(let C=0;C<g;C++){let O=0,Y=0;for(let z=0;z<=v;z++){let j=z/v,R=tt-j*V,B=j*q*r+D*2.2+C/g*r,Z=et+Math.sin(B)*P(j,E,D);if(z&&R<Q+20&&Y>-20){let ct=.5+.5*Math.cos(B),lt=Z-O,wt=R-Y,xt=Math.hypot(lt,wt),b=(.3+.9*ct)*s(j*14)*(1-.4*j)*F;a((Z+O)/2,(R+Y)/2,xt*1.5,E*(.002+.0032*ct),...h,b,5,Math.atan2(wt,lt))}O=Z,Y=R}}for(let C of p){let O=((C.s-D*C.v)%1+1)%1,Y=tt-O*V;if(Y<-10||Y>Q+10)continue;let z=P(O,E,D)*(.15+1.05*C.rf),j=et+Math.sin(C.ph+D*C.spin+O*7)*z,R=.3+.7*Math.sin(D*C.f+C.tp)**2,B=E*C.size*(C.star?4.2:1)*(.7+.6*O);a(j,Y,B,B,...C.c,(C.star?2:1.7)*R*s(O*10)*F,C.star?3:0)}if(at>.01&&(a(et,tt,E*.28,E*.2,...m,.35*at,0),a(et,tt,E*.2,E*.0045,...d,2.2*at,5),a(et,tt,E*.075,E*.004,...d,2*at,5,Math.PI/2),a(et,tt,E*.03,E*.03,...f,2.6*at,0)),x>.01){let C=.35+.65*x;for(let O of $){let Y=.6+.4*Math.sin(D*O.f+O.ph),z=E*O.len*C,j=E*O.off,R=Math.cos(O.ang),B=Math.sin(O.ang);a(et+R*(j+z/2),M+B*(j+z/2),z/2,E*O.w,...O.c,O.a*Y*x*1.1,5,O.ang)}a(et,M,I*.36*C,E*.012,...d,1.3*x,5),a(et,M,I*.46*C,E*.0035,...f,3*x,5),a(et,M,Q*.3*C,E*.01,...d,1.1*x,5,Math.PI/2),a(et,M,Q*.38*C,E*.003,...f,2.4*x,5,Math.PI/2),a(et,M,E*.42,E*.42,...m,.42*x,0),a(et,M,E*.16,E*.16,...d,1.6*x,0),a(et,M,E*.06,E*.06,...f,5*x,0);for(let[O,Y,z]of[[.19,.42,.7],[.215,.26,.4]])for(let j of[0,Math.PI])for(let B=0;B<9;B++){let Z=B/8,ct=j+(Z-.5)*Y*2,lt=E*O*(.8+.2*x);a(et+Math.cos(ct)*lt,M+Math.sin(ct)*lt,lt*Y*2/9,E*.0022,...h,z*x*Math.sin(Math.PI*Z),5,ct+Math.PI/2)}}}}}var Dr=`
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
  }`,qr=`
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
  }`;function jr(t){let{gl:a}=t,e=t.push,s={water:t.program(Dr),liquid:t.program(qr)},n=0,o=0,r=0,i=null,l=Ra(20261112),d=13,m=Array.from({length:d},(F,x)=>({th:(x+(l()-.5)*.55)/d*Math.PI*2,h:.72+l()*.55,lean:.18+l()*.34,detach:.4+l()*.2,w:.85+l()*.4})),h=60,f=Array.from({length:54},()=>({th:l()*Math.PI*2,v:.5+l()*.75,out:.05+l()*.36,s:.4+l()*.8,delay:l()*.12})),k=Array.from({length:150},()=>({x:l()-.5,y:l(),s:.35+l()*.9,f:2+l()*7,ph:l()*6.28,star:l()<.16,v:.04+l()*.1})),g=F=>Math.min(1,Math.max(0,F)),v=F=>1-(1-F)**3,p=F=>F*F,$=.24,L=.5,P=2.3,S=.75,D=5.4,I=F=>F<.2?v(F/.2):F<.58?1-.1*((F-.2)/.38):.9*(1-p(g((F-.58)/.42))),Q=F=>r*(.075+.085*v(g(F*1.15)));function E(F){let x=0;for(let at of m){let T=Math.abs(F-at.th)%(Math.PI*2);T>Math.PI&&(T=Math.PI*2-T),x=Math.max(x,Math.exp(-((T/.17)**2))*at.h)}return x}function et(F,x,at){let T=at/P;if(T<=0||T>=1)return;let q=I(T),C=Q(T),O=r*.37,Y=1-.35*g((T-.45)/.55),z=(j,R,B,Z)=>e(j,R,B,B,Z,0,0,1,1);for(let j=0;j<h;j++){let R=j/h*Math.PI*2,B=Math.cos(R),Z=Math.sin(R),ct=.86+.14*Z,lt=O*q*(.24+.24*E(R)),wt=5;for(let xt=0;xt<wt;xt++){let b=xt/(wt-1),J=F+B*C*(1+L*b),U=x+Z*C*$*(1+L*b)-lt*b;z(J,U,r*(.05-.022*b)*ct*Y,.27)}}for(let j of m){let R=Math.cos(j.th),B=Math.sin(j.th),Z=.86+.14*B,ct=O*q*(.24+.24*j.h),lt=T>j.detach?g((T-j.detach)/.24):0,wt=I(g(T*1.08))*(1-lt*lt*(3-2*lt)),xt=O*(.66*j.h)*wt,b=1-.38*g((T-j.detach+.1)/.1)*(1-lt),J=15,U={x:0,y:0};for(let N=1;N<=J;N++){let W=N/J,A=1+L+j.lean*wt*(W*.9+W*W*.9),K=F+R*C*A,nt=x+B*C*$*A-ct-xt*(W-.12*W*W),pt=N<J?(1-.5*W*(1-.6*lt))*(.45+.55*b):1.3;N===J&&(U.x=K,U.y=nt),(N<J||T<=j.detach)&&z(K,nt,r*.046*j.w*pt*Z*Y*(1-.5*lt),.32)}if(T>j.detach){let N=(T-j.detach)*P,W=j.detach,A=Q(W),K=1+L+j.lean*I(g(W*1.08))*1.8,nt=F+R*A*K,pt=x+B*A*$*K-O*I(W)*(.24+.24*j.h)-O*(.66*j.h)*I(g(W*1.08))*.88,Et=nt+R*r*.05*N,Qt=pt-r*.1*N+r*.42*N*N;Qt<x+B*C*$&&z(Et,Qt,r*.036*j.w*Z,.36)}}for(let j of f){let R=at-j.delay;if(R<=0)continue;let B=F+Math.cos(j.th)*(C*.9+r*j.out*R),Z=x+Math.sin(j.th)*C*$-r*j.v*R+r*.62*R*R;Z>x+r*.02||z(B,Z,r*.02*j.s,.36)}z(F,x-O*.04*q,r*.085*q,.34)}function M(F,x,at,T,q){let C=T/P;if(at<S){let O=p(at/S),Y=-r*.05+(x+r*.05)*O;for(let z=0;z<26;z++){let j=Y-z*r*.022*(.4+O);if(j<-40)break;let R=Math.sin(j*.02+z)*r*.006;e(F+R,j,r*(.03-z*9e-4),r*(.03-z*9e-4),1,z?.72:.95,z?.18:.7,(1-z/26)*1.6,0)}}if(T>0){let O=C<1?I(C):0,Y=g(1-(T-P*.85)/1.6),z=Math.exp(-((T/.09)**2));e(F,x,r*.5*z+1,r*.5*z+1,1,.85,.5,z*3.5,0);let j=(.35+.65*O)*Y;e(F,x,r*.24,r*.058,1,.9,.55,1.5*j,0),e(F,x,r*.42,r*.1,1,.55,.08,.8*j,0),e(F,x-r*.1,r*.3,r*.3,1,.6,.1,.5*O,0);for(let R=0;R<5;R++){let B=T-R*.22;if(B<=0)continue;let Z=r*(.1+B*.2);e(F,x,Z,Z*$,1,.74,.2,g(1-B/2.6)*.9,2)}for(let R of k){let B=(R.y+T*R.v)%1,Z=F+R.x*r*(.22+.5*B),ct=x-r*(.12+B*.78),lt=.5+.5*Math.sin(q*R.f+R.ph),wt=g(T/.5)*Y*(1-B)*(.25+.75*lt)*1.5,xt=r*.008*R.s*(R.star?3.2:1);e(Z,ct,xt,xt,1,.82,.32,wt,R.star?3:0)}}}let _=0,H=0,tt=0,V=0;return{pre(F){(n!==t.W||o!==t.H)&&(n=t.W,o=t.H,r=t.U,t.drop(i),i=t.target(Math.ceil(n/2),Math.ceil(o/2))),_=n/2,H=o*.74,tt=F,V=g(tt/.25)*g(1-(tt-P)/2),!(tt>=P)&&(a.bindFramebuffer(a.FRAMEBUFFER,i.fbo),a.viewport(0,0,i.w,i.h),a.disable(a.BLEND),a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),t.additive(!0),et(_,H,tt),t.flush())},bg(F){V<=0||(a.useProgram(s.water.p),a.uniform2f(s.water.u.uRes,n,o),a.uniform2f(s.water.u.uImpact,_,H),a.uniform1f(s.water.u.uUnit,r),a.uniform1f(s.water.u.uTau,tt),a.uniform1f(s.water.u.uTime,F),a.uniform1f(s.water.u.uPower,V),t.fullscreen(s.water))},emit(F){M(_,H,S+tt,tt,F)},post(){tt>=P||(a.useProgram(s.liquid.p),t.bindTex(0,i.tex,s.liquid.u.uField),a.uniform2f(s.liquid.u.uTexel,1/i.w,1/i.h),a.uniform1f(s.liquid.u.uBaseY,1-H/o),a.uniform1f(s.liquid.u.uSpan,r*.42/o),a.uniform1f(s.liquid.u.uPower,1.15),t.fullscreen(s.liquid))},end:P+2}}var Or=`
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
  }`;function Br(t){let{gl:a}=t,e=t.push,s=t.program(Or),n=null,o=0,r=0,i=Ra(20261113),l=T=>Math.min(1,Math.max(0,T)),d=T=>1-(1-T)**3,m=T=>T*T,h=Math.PI*2,f=.9,k=5.6,g=[1,.76,.14],v=[1,.5,.06],p=[1,.88,.42],$=[1,.97,.88],L=[.55,.72,1],P=()=>{let T=i();return T<.05?$:T<.3?p:T<.75?g:v},S=Array.from({length:70},()=>({ang:i()*Math.PI,len:.22+i()**1.6*.95,w:.0025+i()*.005,a:.35+i()*.65,c:i()<.2?L:p,f:1+i()*3,ph:i()*h})),D=Array.from({length:620},()=>{let T=.008+i()**2.2*.07;return{ang:i()*h,dist:.04+i()**1.35*1.05,s:T,delay:i()*.35,c:P(),a:1.7-T*14,drift:(i()-.5)*.05,lift:i()*.05,f:.5+i()*2,ph:i()*h}}),I=Array.from({length:340},()=>({ang:i()*h,dist:.2+i()*1.25,s:.003+i()*.006,delay:i()*.25,c:i()<.5?p:g,f:3+i()*8,ph:i()*h,star:i()<.1})),Q=Array.from({length:11},(T,q)=>({a0:q/11*h+i()*.4,spin:(q%2?-1:1)*(1.5+i()*1.4),reach:.55+i()*.6,w:.6+i()*.9,delay:i()*.3})),E=D.length,et=I.length,M=0,_=0,H=0,tt=0,V=0,F=0,x=0,at=0;return{setQ(T){E=Math.ceil(D.length*T),et=Math.ceil(I.length*T)},pre(T,q){({W:M,H:_,U:H}=t),tt=Math.hypot(M,_),V=M/2,F=_*.74,x=T-f,at=x>0?l(x/.35)*l(1-(x-1.5)/1.9):0,(o!==M||r!==_)&&(o=M,r=_,t.drop(n),n=t.target(Math.ceil(M/2),Math.ceil(_/2))),!(at<=0)&&(a.bindFramebuffer(a.FRAMEBUFFER,n.fbo),a.viewport(0,0,n.w,n.h),a.disable(a.BLEND),a.useProgram(s.p),a.uniform2f(s.u.uRes,M,_),a.uniform2f(s.u.uCenter,V,F),a.uniform1f(s.u.uUnit,H),a.uniform1f(s.u.uTime,q),a.uniform1f(s.u.uPower,1.25*at),a.uniform1f(s.u.uReach,.5+1.5*d(l(x/1.6))),t.fullscreen(s))},bg(){at<=0||(a.useProgram(t.P.blur.p),t.bindTex(0,n.tex,t.P.blur.u.uTex),a.uniform2f(t.P.blur.u.uDir,0,0),t.fullscreen(t.P.blur))},emit(T,q){let C=m(l(T/f)),O=Math.exp(-((x/.16)**2)),Y=x>0?l(1-x/2.6):1,z=((.15+.85*C)*(.25+.75*Y)+O*1.1)*l(1-(x-2.2)/1.2);if(x>0){let R=l(x/.3)*l(1-(x-1.2)/2.6);e(V,F,tt*.75,tt*.6,...v,.6*R,0),e(V,F,tt*.4,tt*.3,...g,.7*R,0),e(V,F-_*.45,tt*.6,tt*.45,.2,.22,.7,.16*R,0)}let j=H*(.35+.65*C+O*.5);for(let R of S){let B=.55+.45*Math.sin(q*R.f+R.ph);e(V,F,j*R.len,H*R.w*(1+O),...R.c,R.a*B*z*.9,5,R.ang+q*.05)}if(e(V,F,M*.78*(.4+.6*C),H*.03,...g,.9*z,5),e(V,F,M*.95*(.4+.6*C),H*.006,...$,2.4*z,5),e(V,F,_*.6*(.4+.6*C),H*.02,...g,.7*z,5,Math.PI/2),e(V,F,_*.75*(.4+.6*C),H*.005,...$,1.8*z,5,Math.PI/2),e(V,F,H*.6,H*.6,...v,.55*z,0),e(V,F,H*.26,H*.26,...g,1.8*z,0),e(V,F,H*.1,H*.1,...$,5*z,0),e(V,F,tt*.62,tt*.62,...g,O*1.5,0),x>0){for(let R of Q){let B=x-R.delay;if(B<=0)continue;let Z=d(l(B/1.3)),ct=l(B/.2)*l(1-(B-.9)/1.4);if(ct<=0)continue;let lt=30,wt=0,xt=0;for(let b=0;b<=lt;b++){let J=b/lt,U=H*R.reach*(.1+J*.95)*Z,N=R.a0+R.spin*(J*.85+B*.6),W=V+Math.cos(N)*U,A=F+Math.sin(N)*U*.78;if(b){let K=W-wt,nt=A-xt,pt=Math.hypot(K,nt);e((W+wt)/2,(A+xt)/2,pt*1.6,H*.013*R.w*Math.sin(Math.PI*J)**1.5+.5,...g,ct*Math.sin(Math.PI*J)*1.3,5,Math.atan2(nt,K))}wt=W,xt=A}}for(let R=0;R<E;R++){let B=D[R],Z=x-B.delay;if(Z<=0)continue;let ct=d(l(Z/1.5)),lt=l(Z/.12)*l(1-(Z-1.7)/2.2);if(lt<=0)continue;let wt=tt*.5*B.dist*ct,xt=V+Math.cos(B.ang)*wt+H*B.drift*Z,b=F+Math.sin(B.ang)*wt*.82-H*B.lift*Z,J=H*B.s*(.7+.5*ct),U=.8+.2*Math.sin(q*B.f+B.ph);e(xt,b,J,J,...B.c,Math.max(.45,B.a)*lt*U,4)}for(let R=0;R<et;R++){let B=I[R],Z=x-B.delay;if(Z<=0)continue;let ct=d(l(Z/1.1)),lt=l(Z/.1)*l(1-(Z-1.2)/2);if(lt<=0)continue;let wt=tt*.5*B.dist*ct,xt=.4+.6*Math.sin(q*B.f+B.ph)**2,b=H*B.s*(B.star?4:1);e(V+Math.cos(B.ang)*wt,F+Math.sin(B.ang)*wt*.82,b,b,...B.c,1.6*lt*xt,B.star?3:0)}}},post(){if(x>0){let T=Math.round(_-F),q=(C,O)=>{for(let[Y,z,j]of[[0,1,.015],[.2,.4,.007]]){let R=l((x-Y)/1.5);if(R<=0||R>=1)continue;let B=H*.06+tt*.62*d(R),Z=O*z*(1-R)**.9*l(R/.05),ct=(lt,wt)=>{let xt=B+lt;e(V,F,xt,xt*C,1,1,1,wt,6,lt/xt)};ct(H*j,1.25*Z),ct(H*j*4.5,.16*Z)}t.flush()};a.enable(a.SCISSOR_TEST),a.scissor(0,T,M,_-T),q(1,1),a.scissor(0,0,M,T),q(.22,.32),a.disable(a.SCISSOR_TEST)}},end:f+4.4}}var Ur=`
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
  }`;function Gr(t){let{gl:a}=t,e=t.push,s=t.program(Ur),n=Ra(20261115),o=E=>Math.min(1,Math.max(0,E)),r=Math.PI*2,i=1.75,l=[1,.76,.14],d=[1,.5,.06],m=[1,.88,.42],h=[1,.97,.88],f=()=>{let E=n();return E<.04?h:E<.3?m:E<.76?l:d},k=()=>{let E=n();return E<.3?m:E<.72?l:d},g=()=>n()<.45?-.45+(n()-.5)*.5:(n()-.5)*1.9,v=Array.from({length:420},()=>{let E=n()**1.8*.62;return{a:g(),dz:E,s:.005+E**1.15*.11+n()*.006,c:f(),k:o(1.25-E*1.7),f:.4+n()*2.2,ph:n()*r,drift:(n()-.5)*.012}}),p=Array.from({length:300},()=>({a:g(),h:n(),top:.1+n()**1.7*.7,v:.015+n()*.05,s:.004+n()**3.2*.045,c:k(),f:.5+n()*2.5,ph:n()*r,sway:(n()-.5)*.05})),$=Array.from({length:12},()=>({a:(n()-.5)*2,dz:-.3+n()*1.1,s:.07+n()*.1,c:d,k:.22+n()*.2,f:.2+n()*.5,ph:n()*r})),L=Array.from({length:320},()=>({a:g(),h:(n()-.42)*.3,s:.0018+n()*.004,f:2+n()*8,ph:n()*r,star:n()<.08})),P=[{a:-.3,len:.5,w:1.5,ph:.3},{a:-.06,len:.62,w:1.9,ph:2.1},{a:.26,len:.42,w:1.2,ph:4.2}],S=v.length,D=p.length,I=L.length,Q=null;return{setQ(E){S=Math.ceil(v.length*E),D=Math.ceil(p.length*E),I=Math.ceil(L.length*E)},bg(E,et){let{W:M,H:_,U:H}=t,tt=.1*Math.sin(et*.11+.9),V=.1*Math.sin(et*.07+2),F=-.2*(_/H)+.02*Math.sin(et*.09),x=Math.cos(tt),at=Math.sin(tt),T=F-i;Q={roll:tt,cr:x,sr:at,at:(C,O)=>{let Y=Math.sin(C)*(i+O)-V,z=T+Math.cos(C)*(i+O);return[M/2+(x*Y-at*z)*H,_/2-(at*Y+x*z)*H]},power:E},a.useProgram(s.p),a.uniform2f(s.u.uRes,M,_),a.uniform1f(s.u.uUnit,H),a.uniform1f(s.u.uTime,et),a.uniform1f(s.u.uRoll,tt),a.uniform2f(s.u.uPan,V,0),a.uniform1f(s.u.uRh,i),a.uniform1f(s.u.uH0,F),a.uniform1f(s.u.uPower,E),t.fullscreen(s)},emit(E){let{W:et,H:M,U:_}=t,{roll:H,cr:tt,sr:V,at:F,power:x}=Q,at=(T,q,C)=>T>-C&&T<et+C&&q>-C&&q<M+C;for(let T of P){let q=(.55+.45*Math.sin(E*.35+T.ph))*x,[C,O]=F(T.a,0),Y=C-V*T.len*_,z=O-tt*T.len*_,j=Math.atan2(z-O,Y-C),R=Math.hypot(Y-C,z-O),B=lt=>[C+(Y-C)*lt,O+(z-O)*lt],[Z,ct]=B(.5);e(Z,ct,R*.62,_*.02*T.w,...l,.7*q,5,j),e(Z,ct,R*.55,_*.0055*T.w,...h,2.6*q,5,j),[Z,ct]=B(.12),e(Z,ct,R*.3,_*.011*T.w,...m,2.2*q,5,j),e(C,O,_*.1*T.w,_*.1*T.w,...l,1.3*q,0),[Z,ct]=B(-.2),e(Z,ct,R*.3,_*.012*T.w,...l,.9*q,5,j)}for(let T=0;T<S;T++){let q=v[T],[C,O]=F(q.a+q.drift*Math.sin(E*.3+q.ph),-q.dz),Y=_*q.s;if(!at(C,O,Y))continue;let z=.6+.4*Math.sin(E*q.f+q.ph);e(C,O,Y,Y*(.55+.45*o(q.dz*3)),...q.c,(.35+.95*q.k)*z*x,4,H)}for(let T=0;T<D;T++){let q=p[T],C=(q.h+E*q.v)%1,[O,Y]=F(q.a+q.sway*C,C*q.top),z=_*q.s*(.8+.6*C);if(!at(O,Y,z))continue;let j=.65+.35*Math.sin(E*q.f+q.ph);e(O,Y,z,z,...q.c,1.5*o(C*8)*(1-C)**1.3*j*x,4)}for(let T of $){let[q,C]=F(T.a,-T.dz),O=_*T.s;at(q,C,O)&&e(q,C,O,O,...T.c,T.k*(.7+.3*Math.sin(E*T.f+T.ph))*x,4)}for(let T=0;T<I;T++){let q=L[T],[C,O]=F(q.a,q.h);if(!at(C,O,8))continue;let Y=Math.sin(E*q.f+q.ph)**2,z=_*q.s*(q.star?4:1);e(C,O,z,z,...m,1.8*Y*x,q.star?3:0)}}}}function Vs(t,a,e,s){let n,o,r,i,l;try{if(n=_r(t),n.error)return null;o=Nr(n),r=jr(n),i=Br(n),l=Gr(n)}catch{return null}let d=x=>Math.min(1,Math.max(0,x)),m=!1,h=!1,f=!1,k=!1,g=performance.now(),v=0,p=-1,$=0,L=0,P=16.7,S=0,D=0,I=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4||navigator.deviceMemory&&navigator.deviceMemory<=4?1:0,Q=()=>{n.maxDpr=Fa[I].dpr,i.setQ(Fa[I].q),l.setQ(Fa[I].q)};Q();function E(x){if(f)return;let at=e(),T=at?99:(x-g)/1e3,q=at?12:x/1e3,C=d((T-Je.start)/Je.span);if((Math.abs(C-p)>.001||C===1&&p!==1)&&(p=C,a(C)),n.resize(),!n.W)return;let O=T-Je.crown,Y=T-Je.burst,z=T-Je.sea,j=T<4.6,R=O>0&&O<r.end,B=Y>0&&Y<i.end,Z=z>0;R&&r.pre(O),B&&i.pre(Y,q),n.begin(),n.additive(!0),Z&&l.bg(d(z/1.4),q),R&&r.bg(q),B&&i.bg(),j&&o.emit(T,q),R&&r.emit(q),B&&i.emit(Y,q),Z&&l.emit(q),n.flush(),R&&r.post(),B&&i.post(),n.finish({bloom:.55,exposure:1.02})}let et=x=>{if($){let at=x-$;at<250&&(P=P*.9+at*.1,S+=1)}$=x,S>45&&P>28?I<Fa.length-1?(I+=1,Q(),S=0,P=16.7):P>55&&(D+=1)>120&&s&&(_(),s()):D=0},M=x=>{m&&(requestAnimationFrame(M),et(x),!((x-g)/1e3>Je.settle&&x-L<30)&&(L=x,E(x)))};function _(){m=!1}let H=()=>{if(f)return;let x=!e()&&h&&!document.hidden;if(x&&!m){let at=performance.now();k?v&&(g+=at-v):(g=at,k=!0),v=0,m=!0,$=0,requestAnimationFrame(M)}else!x&&m?(m=!1,v=performance.now(),E(v)):x||E(performance.now())},tt=x=>{x.preventDefault(),_(),f=!0,s&&s()},V=new ResizeObserver(()=>{m||E(performance.now())});V.observe(t);let F=new IntersectionObserver(x=>{h=x[0].isIntersecting,H()});return F.observe(t),document.addEventListener("visibilitychange",H),t.addEventListener("webglcontextlost",tt),{toggle:H,finish(){k=!0,v=0,g=performance.now()-6e4,m||E(performance.now())},restart(){k=!0,v=0,g=performance.now(),p=-1},tap(){},destroy(){_(),f=!0,V.disconnect(),F.disconnect(),document.removeEventListener("visibilitychange",H),t.removeEventListener("webglcontextlost",tt),n.gl.getExtension("WEBGL_lose_context")?.loseContext()}}}var ao="shopping-relics:intro-played";try{localStorage.removeItem("shopping-relics:intro-seen"),sessionStorage.removeItem("shopping-relics:intro-seen-session")}catch{}var no="shopping-relics:intro-mode",ua=()=>{try{return localStorage.getItem(no)==="2d"?"2d":"gl"}catch{return"gl"}},fn=t=>{try{localStorage.setItem(no,t==="2d"?"2d":"gl")}catch{}},la={comet:1.9,start:1.95,span:5.2},Jr=.94,Hr=.75,Pe=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,zr=()=>{try{return localStorage.getItem(ao)==="1"}catch{return!1}},Wr=()=>{try{localStorage.setItem(ao,"1")}catch{}},Xs=t=>t.items.length?"\u518D\u52A0\u4E00\u4EF6\u5546\u54C1":"\u65B0\u589E\u7B2C\u4E00\u4EF6\u5546\u54C1";function Kr(){let t=ae(),a=ce();return t.ok?a.state==="syncing"?{label:"\u9023\u7DDA\u4E2D\u2026",note:"\u6B63\u5728\u548C Google Drive \u540C\u6B65\u3002",busy:!0}:a.linked?{label:"\u540C\u6B65\u5F8C\u518D\u958B\u59CB",note:`\u5DF2\u9023\u7D50 Google \u5E33\u865F\uFF08\u8B58\u5225\u78BC\u672B 4 \u78BC ${a.idTail}\uFF09\uFF0C\u5148\u53D6\u5F97\u5176\u4ED6\u88DD\u7F6E\u7684\u6700\u65B0\u6E05\u55AE\u3002`}:{label:"\u767B\u5165\u5F8C\u518D\u958B\u59CB",note:"\u7528 Google \u5E33\u865F\u767B\u5165\uFF0C\u6E05\u55AE\u6703\u5B58\u5230\u4F60\u81EA\u5DF1\u7684 Google Drive\uFF0C\u63DB\u624B\u6A5F\u6216\u96FB\u8166\u4E5F\u80FD\u63A5\u8457\u7528\u3002"}:{label:"\u767B\u5165\u5F8C\u518D\u958B\u59CB",note:"Google \u767B\u5165\u5C1A\u672A\u555F\u7528\uFF0C\u76EE\u524D\u8ACB\u5148\u9078\u300C\u76F4\u63A5\u958B\u59CB\u300D\u3002",off:!0}}function Qs(){let t=Kr();return`<button type="button" class="btn btn-ghost-light" data-login aria-describedby="aw-note-login"${t.off?' aria-disabled="true"':""}${t.busy?' disabled aria-busy="true"':""}>${c("sync")}${t.label}</button>
          <p class="aw-note" id="aw-note-login">${t.note}</p>`}function Zs({state:t,sum:a}){if(!t.items.length)return["<li>\u6E05\u55AE\u9084\u662F\u7A7A\u7684\uFF0C\u5F9E\u7B2C\u4E00\u4EF6\u5546\u54C1\u958B\u59CB</li>"];let e=Ca(t,()=>!0).filter(s=>!s.special).length;return[`<li>\u5F85\u8CB7 <b>${a.pendingCount}</b> \u4EF6</li>`,`<li><b>${e}</b> \u5BB6\u5E97</li>`,`<li>\u9810\u4F30\u9000\u7A05 <b>${y(a.refund)}</b></li>`]}var It="255,247,226",_t="255,208,100",ve="255,166,58",$e="255,232,160",St=t=>Math.min(1,Math.max(0,t)),He=t=>1-(1-t)**3,to=t=>t<.5?4*t*t*t:1-(-2*t+2)**3/2,da=(t,a)=>{let e=document.createElement("canvas");return e.width=Math.max(1,Math.round(t)),e.height=Math.max(1,Math.round(a)),e},ye=(t,a,e)=>{let s=Math.sin(t*127.1+a*311.7+e*74.7)*43758.5453;return s-Math.floor(s)},Yr=9,ue={};function yt(t,a){let e=t+a;if(ue[e])return ue[e];let s=128,n=s/2,o=da(s,s),r=o.getContext("2d"),i=r.createRadialGradient(n,n,0,n,n,n);return a==="glow"?(i.addColorStop(0,`rgba(${t},1)`),i.addColorStop(.12,`rgba(${t},.85)`),i.addColorStop(.35,`rgba(${t},.25)`),i.addColorStop(1,`rgba(${t},0)`)):(i.addColorStop(0,`rgba(${t},.42)`),i.addColorStop(.72,`rgba(${t},.5)`),i.addColorStop(.88,`rgba(${t},.62)`),i.addColorStop(.96,`rgba(${t},.2)`),i.addColorStop(1,`rgba(${t},0)`)),r.fillStyle=i,r.fillRect(0,0,s,s),ue[e]=o,o}function Vr(t){let a=`beam${t}`;if(ue[a])return ue[a];let e=da(512,32),s=e.getContext("2d"),n=s.createLinearGradient(0,0,512,0);n.addColorStop(0,`rgba(${t},0)`),n.addColorStop(.5,`rgba(${t},1)`),n.addColorStop(1,`rgba(${t},0)`),s.fillStyle=n,s.fillRect(0,0,512,32),s.globalCompositeOperation="destination-in";let o=s.createLinearGradient(0,0,0,32);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(.5,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=o,s.fillRect(0,0,512,32),ue[a]=e,e}function Xr(t,a){let e=`pillar${t}${a}`;if(ue[e])return ue[e];let s=da(16,256),n=s.getContext("2d"),o=n.createLinearGradient(0,256,0,0);return o.addColorStop(0,`rgba(${t},${a})`),o.addColorStop(1,`rgba(${t},0)`),n.fillStyle=o,n.fillRect(0,0,16,256),ue[e]=s,s}function eo(t){let a=t>>>0;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}var ca=[{dpr:1.5,q:1},{dpr:1,q:.6},{dpr:.75,q:.38}];function Qr(t,a){let e=t.getContext("2d"),s=typeof e.createConicGradient=="function",n=0,o=0,r=0,i={},l=null,d=null,m=!1,h=!1,f=performance.now(),k=!1,g=0,v=0,p=0,$=0,L=0,P=[],S=navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4||navigator.deviceMemory&&navigator.deviceMemory<=4?1:0,D=ca[S].q,I=0,Q=16.7,E=0,et=-1,M=b=>Math.ceil(b.length*D),_=()=>({cx:n/2,hy:o*.62,RB:Math.max(n,o)*1.7}),H=b=>{let{cx:J,hy:U,RB:N}=_();return U+N-Math.sqrt(Math.max(0,N*N-(b-J)**2))},tt=()=>{let b=eo(20261105),J=n*o,U=Math.min(n,o)/800;i={u:U,stars:Array.from({length:Math.round(J/2600)},()=>({x:b()*n,y:b()*o,s:.5+b()*1.2,a:.2+b()*.6,f:.5+b()*2,ph:b()*6.3})),trail:Array.from({length:90},()=>({at:b(),dx:(b()-.5)*40*U,dy:(b()-.3)*30*U,s:3+b()*9,f:1+b()*3,ph:b()*6.3})),crown:Array.from({length:150},()=>({ang:b()*Math.PI*2,v:(.18+b()*.3)*o,out:(.02+b()*.12)*n,s:6+b()*16,streak:b()<.45})),rise:Array.from({length:50},()=>({x:(b()-.5)*.16*n,v:.15+b()*.5,s:3+b()*7})),burst:Array.from({length:70},()=>({ang:b()*Math.PI*2,d:.15+b()*1.1,s:(18+b()*80)*Math.max(.7,U),c:b()<.2?It:b()<.6?_t:ve})),ripples:Array.from({length:190},()=>({x:b()*n,y:b(),w:8+b()*34,ph:b()*6.3,f:.6+b()*1.4,a:.14+b()*.42})),motes:Array.from({length:Math.round(60+J/16e3)},()=>({x:b()*n,v:8+b()*30,off:b(),s:2+b()*14*Math.max(.7,U),sw:6+b()*18,ph:b()*6.3,c:b()<.25?It:b()<.7?_t:ve})),tide:Array.from({length:90},()=>{let N=b()<.3;return{x:b()*n,dy:b()**1.6*.17*o,onWater:N,vx:(b()-.5)*14,s:(3+b()**2*26)*Math.max(.7,U),f:.6+b()*1.8,ph:b()*6.3,c:b()<.3?It:b()<.75?_t:ve}}),fore:Array.from({length:9},(N,W)=>({x:(W%2?.82+b()*.2:-.04+b()*.2)*n,y:b()*o,s:(90+b()*150)*Math.max(.6,U),a:.1+b()*.16,ph:b()*6.3}))},l=null,d=null};function V(){let b=eo(7),J=Math.min(n,o)*.55*2.2,U=Math.min(640,Math.round(J*2)),N=da(U,U),W=N.getContext("2d"),A=U/2;W.lineCap="round";for(let K=0;K<46;K++){let nt=b()*Math.PI*2,pt=(.25+b()*.75)*A,Et=W.createLinearGradient(A,A,A+Math.cos(nt)*pt,A+Math.sin(nt)*pt);Et.addColorStop(0,`rgba(${$e},${.35+b()*.4})`),Et.addColorStop(1,`rgba(${$e},0)`),W.strokeStyle=Et,W.lineWidth=1.4+b()*1.8,W.beginPath(),W.moveTo(A,A),W.lineTo(A+Math.cos(nt)*pt,A+Math.sin(nt)*pt),W.stroke()}l={c:N,size:J*2}}function F(){let b=ca[S].dpr,{cx:J,hy:U,RB:N}=_(),W=da(n*b,o*b),A=W.getContext("2d");A.setTransform(b,0,0,b,0,0);let K=A.createLinearGradient(0,0,0,U);K.addColorStop(0,"#05071c"),K.addColorStop(.5,"#15164a"),K.addColorStop(.82,"#43306f"),K.addColorStop(1,"#b8703a"),A.fillStyle=K,A.fillRect(0,0,n,o),A.globalCompositeOperation="lighter";let nt=A.createRadialGradient(n*.98,U*.82,0,n*.98,U*.82,Math.max(n,o)*.42);nt.addColorStop(0,"rgba(62,200,210,.28)"),nt.addColorStop(1,"rgba(62,200,210,0)"),A.fillStyle=nt,A.fillRect(0,0,n,o),A.globalAlpha=.55,A.drawImage(yt(ve,"glow"),J-n*.6,U-n*.6,n*1.2,n*1.2),A.globalAlpha=1,A.globalCompositeOperation="source-over",A.save(),A.beginPath(),A.arc(J,U+N,N,0,Math.PI*2),A.clip();let pt=A.createLinearGradient(0,U,0,o);pt.addColorStop(0,"#8a5c34"),pt.addColorStop(.2,"#4a2f3a"),pt.addColorStop(1,"#130c1c"),A.fillStyle=pt,A.fillRect(0,U-40,n,o),A.globalCompositeOperation="lighter",A.save(),A.translate(J,U),A.scale(1,.55),A.globalAlpha=.6,A.drawImage(yt(_t,"glow"),-n*.5,60-n*.5,n,n),A.restore(),A.globalAlpha=.4,A.drawImage(yt(ve,"glow"),J-n*.6,U-n*.6,n*1.2,n*1.2),A.restore(),A.globalCompositeOperation="lighter",A.globalAlpha=1;for(let[Et,Qt,rt]of[[44,ve,.12],[14,_t,.38],[3.2,It,.95]])A.strokeStyle=`rgba(${Qt},${rt})`,A.lineWidth=Et,A.beginPath(),A.arc(J,U+N,N,Math.PI*1.25,Math.PI*1.75),A.stroke();d=W}let x=(b,J,U,N,W)=>{W<=.003||(e.globalAlpha=Math.min(1,W),e.drawImage(b,J-N/2,U-N/2,N,N))},at=(b,J,U,N,W,A,K)=>{W<=.003||(e.save(),e.translate(b,J),A&&e.rotate(Math.PI/2),e.globalAlpha=Math.min(1,W),e.drawImage(Vr(K),-U/2,-N/2,U,N),e.restore())};function T(b,J,U,N,W){if(N<=0)return;x(yt(ve,"glow"),b,J,420*U*i.u,.35*N),x(yt(_t,"glow"),b,J,170*U*i.u,.85*N),x(yt(It,"glow"),b,J,70*U*i.u,N),l||V();let A=l.size*(U/2.2);e.save(),e.translate(b,J),e.rotate(W*.025),e.globalAlpha=N*(.8+.2*Math.sin(W*1.3)),e.drawImage(l.c,-A/2,-A/2,A,A),e.restore();let K=n*.72*U,nt=o*.52*U;at(b,J,K,34*U,.5*N,!1,_t),at(b,J,K,5,.95*N,!1,It),at(b,J,nt,26*U,.45*N,!0,_t),at(b,J,nt,4.4,.9*N,!0,It)}let q=(b,J,U)=>{let N=to(b);return[J+Math.sin(b*Math.PI*5)*n*.035*(1-N),-o*.08+(U+o*.08)*N]};function C(b){for(let J=P.length-1;J>=0;J--){let U=P[J],N=b-U.t;if(N>2.2||N<0){P.splice(J,1);continue}if(U.water){let W=St((U.y-o*.62)/(o*.38)),A=.5+W*1.2;e.lineWidth=1.6,e.globalAlpha=1;for(let nt=0;nt<3;nt++){let pt=St(N/1.7-nt*.15);if(pt<=0)continue;e.strokeStyle=`rgba(${$e},${(.65*(1-pt)).toFixed(3)})`;let Et=(10+pt*n*.13)*A;e.beginPath(),e.ellipse(U.x,U.y,Et,Et*.2*(.6+W),0,0,Math.PI*2),e.stroke()}x(yt(It,"glow"),U.x,U.y,70*A,St(1-N/.6));let K=St(N/.9);if(K<1)for(let nt=0;nt<16;nt++){let pt=ye(nt,U.id,1)*Math.PI*2,Et=(.04+ye(U.id,nt,2)*.07)*o*A,Qt=U.x+Math.cos(pt)*(8+26*K)*A,rt=U.y+Math.sin(pt)*4*A-Et*4*K*(1-K);x(yt(nt%3?_t:It,"glow"),Qt,rt,(6+nt%3*3)*A,(1-K)**.7)}}else{let W=He(St(N/1.3)),A=1-St(N/1.3);x(yt(_t,"glow"),U.x,U.y,90*i.u+30,A*.6);for(let K=0;K<18;K++){let nt=ye(K,U.id,3)*Math.PI*2,pt=(30+ye(U.id,K,4)*70)*i.u*W;x(yt(K%4?$e:It,"glow"),U.x+Math.cos(nt)*pt,U.y+Math.sin(nt)*pt+N*14,7+K%3*3,A*(.5+.5*Math.sin(b*9+K)))}}}}function O(b,J){let{cx:U,hy:N}=_();e.globalCompositeOperation="source-over",e.globalAlpha=1,d||F(),e.drawImage(d,0,0,n,o),e.globalCompositeOperation="lighter",e.lineCap="round";let W=new Map,A=M(i.ripples);for(let rt=0;rt<A;rt++){let X=i.ripples[rt],Mt=N+6+X.y*X.y*(o-N);if(Mt<H(X.x)+3)continue;let kt=(Mt-N)/(o-N),bt=X.x+Math.sin(b*.3+X.ph)*12,Rt=1-Math.min(1,Math.abs(bt-U)/(n*.6)),Dt=X.a*(.45+.55*Math.sin(b*X.f+X.ph)**2)*(.5+Rt),ft=`${Math.min(5,Math.round(Dt*6))}|${Math.round(kt*3)}`;W.has(ft)||W.set(ft,[]),W.get(ft).push([bt,Mt,X.w*(.4+kt*2.2),(2+kt*5)*Math.sin(b*X.f+X.ph)])}e.globalAlpha=1;for(let[rt,X]of W){let[Mt,kt]=rt.split("|").map(Number);if(Mt){e.strokeStyle=`rgba(${$e},${(Mt/6).toFixed(3)})`,e.lineWidth=.8+kt/3*2.4,e.beginPath();for(let[bt,Rt,Dt,ft]of X)e.moveTo(bt-Dt,Rt),e.quadraticCurveTo(bt,Rt-ft,bt+Dt,Rt);e.stroke()}}let K=He(J),nt=Math.ceil(Yr*D);for(let rt=0;rt<nt;rt++){let X=2.6+rt*1.37%1.9,Mt=(b+rt*.61*X)/X,kt=Math.floor(Mt),bt=Mt-kt;if(bt>.72)continue;let Rt=He(St(bt/.12)),Dt=St(bt/.05)*St((.72-bt)/.16),ft=.55+.45*(.5+.5*Math.sin(b*(11+rt*1.7)))*(.6+.4*Math.sin(b*(3.3+rt*.9)+kt));ye(rt,Math.floor(b*12),kt)<.12&&(ft*=.35);let At=Dt*ft*K;if(At<.02)continue;let gt=U+(ye(rt,kt,1)-.5)*.84*n,we=(.35+ye(rt,kt,2)*.65)*Rt*K,Zt=.6+ye(rt,kt,3)*.8,Yt=N-(N-o*.02)*we;if(!(Yt>=N-2)){for(let[Pt,Ct,Ce]of[[(26*i.u+10)*Zt,_t,.16],[3.2*Zt,It,.9]]){let Ke=Xr(Ct,Ce);e.globalAlpha=At,e.drawImage(Ke,gt-Pt/2,Yt,Pt,N-Yt),e.save(),e.translate(0,N),e.scale(1,-1),e.globalAlpha=.6*At,e.drawImage(Ke,gt-Pt/2,-(N-Yt)*.45,Pt,(N-Yt)*.45),e.restore()}x(yt(It,"glow"),gt,H(gt),(60*i.u+20)*Zt,.9*At)}}let pt=M(i.tide);for(let rt=0;rt<pt;rt++){let X=i.tide[rt],Mt=((X.x+X.vx*b+v*30*(X.s/20))%n+n)%n,kt=H(Mt),bt=.5+.5*Math.sin(b*X.f+X.ph),Rt=X.onWater?kt+6+X.dy*.7:kt-3-X.dy+Math.sin(b*.6+X.ph)*4,Dt=X.onWater?.55:1-X.dy/(.2*o);x(yt(X.c,X.s>10?"bokeh":"glow"),Mt,Rt,X.s*(X.s>10?1.4:2),(.25+.6*bt)*Dt*K)}C(b);let Et=M(i.motes);for(let rt=0;rt<Et;rt++){let X=i.motes[rt],Mt=N*.95,kt=N+20-(b*X.v+X.off*Mt)%Mt,bt=St((N-kt)/40)*St(kt/(o*.25)),Rt=X.x+Math.sin(b*.5+X.ph)*X.sw+v*X.s*.6;x(yt(X.c,X.s>9?"bokeh":"glow"),Rt,kt,X.s*(X.s>9?1.6:2.2),(.3+.45*J)*bt)}let Qt=M(i.fore);for(let rt=0;rt<Qt;rt++){let X=i.fore[rt];x(yt(_t,"bokeh"),X.x+Math.sin(b*.2+X.ph)*20+v*40,X.y+Math.cos(b*.15+X.ph)*16+p*30,X.s,X.a)}}function Y(b){let J=Pe(),U=(performance.now()-f)/1e3,N=J?1:St(U/la.comet),W=J?1:St((U-la.start)/la.span);(Math.abs(W-et)>.001||W===1&&et!==1)&&(et=W,a(W));let A=n/2,K=o*Hr,nt=St(W/.28),pt=St((W-.3)/.18),Et=St((W-.47)/.28),Qt=St((W-.62)/.26),rt=to(Et)*Math.hypot(n/2,Math.max(K,o-K))*1.06;if(v+=($-v)*.05,p+=(L-p)*.05,e.globalCompositeOperation="source-over",e.globalAlpha=1,Et<1){e.fillStyle="#05060f",e.fillRect(0,0,n,o);let Mt=M(i.stars);for(let ft=0;ft<4;ft++){e.fillStyle=`rgba(255,236,190,${(.15+ft*.2).toFixed(2)})`;for(let At=0;At<Mt;At++){let gt=i.stars[At];Math.min(3,Math.floor(gt.a*(.5+.5*Math.sin(b*gt.f+gt.ph))*5))===ft&&e.fillRect(gt.x+v*4,gt.y+p*3,gt.s,gt.s)}}e.globalCompositeOperation="lighter";let kt=1-St(W/.1);if(kt>0){let ft=M(i.trail);for(let At=0;At<ft;At++){let gt=i.trail[At];if(gt.at>N)continue;let[we,Zt]=q(gt.at,A,K),Yt=N-gt.at,Pt=.5+.5*Math.sin(b*gt.f+gt.ph);x(yt($e,"glow"),we+gt.dx*Yt*3,Zt+gt.dy*Yt*2,gt.s*i.u*1.4,(.25+.6*Pt)*kt*(1-Yt*.5))}if(N<1)for(let At=0;At<22;At++){let gt=N-At*.012;if(gt<0)break;let[we,Zt]=q(gt,A,K);x(yt(At?_t:It,"glow"),we,Zt,(At?26-At:40)*i.u,(1-At/22)*.9)}}let bt=St((N-.92)/.08)*(1-St(W/.12));bt>.01&&(x(yt(_t,"glow"),A,K,160*i.u,.8*bt),x(yt(It,"glow"),A,K,50*i.u,bt));let Rt=St(W/.06)*(1-pt)*(.75+.25*Math.sin(b*5));Rt>.01&&(e.save(),e.translate(A,K),e.scale(1,.35),x(yt(ve,"glow"),0,0,260*i.u,.55*Rt),e.restore(),x(yt(_t,"glow"),A,K,70*i.u,.7*Rt),x(yt(It,"glow"),A,K,22*i.u,.8*Rt));let Dt=Math.exp(-(((W-.48)/.05)**2));if(T(A,K,.5+He(pt)*1+Dt*.8,He(pt)*(1-St((Et-.15)/.2)),b),nt>0&&nt<1){let ft=1-nt;e.save(),e.translate(A,K),e.scale(1,.18),x(yt(_t,"glow"),0,0,(120+nt*n*.5)*i.u+80,.9*ft),e.restore(),e.lineWidth=2,e.globalAlpha=1;for(let Pt=0;Pt<4;Pt++){let Ct=St(nt*1.3-Pt*.14);Ct<=0||(e.strokeStyle=`rgba(${$e},${(.55*(1-Ct)).toFixed(3)})`,e.beginPath(),e.ellipse(A,K,20+Ct*n*.42,(20+Ct*n*.42)*.16,0,0,Math.PI*2),e.stroke())}let At=26*i.u+10,gt=1+nt*2.4,we=M(i.crown),Zt=[];e.strokeStyle=`rgba(${_t},${(.32*ft).toFixed(3)})`,e.lineWidth=3*i.u+1,e.globalAlpha=1,e.beginPath();for(let Pt=0;Pt<we;Pt++){let Ct=i.crown[Pt],Ce=A+Math.cos(Ct.ang)*At*gt,Ke=K+Math.sin(Ct.ang)*At*gt*.18,In=Ce+Math.cos(Ct.ang)*Ct.out*nt,_n=Ke-Ct.v*4*nt*(1-nt)*(.6+.4*Math.abs(Math.cos(Ct.ang)));Ct.streak&&(e.moveTo(Ce,Ke),e.lineTo(In,_n)),Zt.push([Ct,In,_n])}e.stroke();for(let[Pt,Ct,Ce]of Zt)x(yt(Pt.streak?It:_t,"glow"),Ct,Ce,Pt.s*i.u*(1-nt*.4),ft**.7);let Yt=M(i.rise);for(let Pt=0;Pt<Yt;Pt++){let Ct=i.rise[Pt];x(yt($e,"glow"),A+Ct.x*(1+nt),K-nt*o*.55*Ct.v,Ct.s*i.u*2,.8*ft)}}}if(Et>0){e.save(),Et<1&&(e.beginPath(),e.arc(A,K,Math.max(1,rt),0,Math.PI*2),e.clip()),O(b,Qt),e.restore(),e.globalCompositeOperation="lighter";let Mt=1-Et**2;if(Mt>0&&rt>2){if(e.globalAlpha=1,e.strokeStyle=`rgba(${_t},${.2*Mt})`,e.lineWidth=34,e.beginPath(),e.arc(A,K,rt,0,Math.PI*2),e.stroke(),s){let bt=e.createConicGradient(b*.4,A,K);["#ff8a8a","#ffd36b","#8dffb0","#7fe7f0","#a99bff","#ff8adf","#ff8a8a"].forEach((Rt,Dt,ft)=>bt.addColorStop(Dt/(ft.length-1),Rt)),e.strokeStyle=bt,e.globalAlpha=.6*Mt}else e.strokeStyle=`rgba(${It},${.6*Mt})`;e.lineWidth=6,e.beginPath(),e.arc(A,K,rt+4,0,Math.PI*2),e.stroke(),e.globalAlpha=1,e.strokeStyle=`rgba(${It},${.85*Mt})`,e.lineWidth=2,e.beginPath(),e.arc(A,K,rt,0,Math.PI*2),e.stroke()}let kt=Math.sin(Math.PI*Math.min(1,Et*1.15))*.6;if(kt>.01){let bt=He(Et),Rt=M(i.burst);for(let Dt=0;Dt<Rt;Dt++){let ft=i.burst[Dt];x(yt(ft.c,"bokeh"),A+Math.cos(ft.ang)*ft.d*r*.5*bt,K+Math.sin(ft.ang)*ft.d*r*.4*bt,ft.s*(.6+bt*.6),kt)}}}let X=Math.exp(-(((W-.48)/.045)**2));X>.01&&(e.globalCompositeOperation="lighter",x(yt(It,"glow"),A,K,r*1.1*X,X*.9),e.globalAlpha=1,e.fillStyle=`rgba(255,236,190,${(X*.3).toFixed(3)})`,e.fillRect(0,0,n,o)),e.globalCompositeOperation="source-over",e.globalAlpha=1}let z=()=>{let b=Math.min(devicePixelRatio||1,ca[S].dpr);D=ca[S].q,t.width=Math.round(n*b),t.height=Math.round(o*b),e.setTransform(b,0,0,b,0,0),d=null},j=b=>{if(I){let J=b-I;J<250&&(Q=Q*.9+J*.1,E+=1)}I=b,E>40&&Q>25&&S<ca.length-1&&(S+=1,z(),E=0,Q=16.7)},R=b=>{m&&(j(b),Y(b/1e3),requestAnimationFrame(R))},B=()=>{let b=t.offsetWidth,J=t.offsetHeight;if(!b||!J||Math.abs(b-n)<2&&Math.abs(J-o)<2&&i.stars)return;let U=!i.stars||Math.abs(b-n)>=2||Math.abs(J-o)>140;n=b,o=J,r=Math.hypot(n,o),U&&tt(),z(),m||Y(performance.now()/1e3)},Z=()=>{let b=!Pe()&&h&&!document.hidden;if(b&&!m){let J=performance.now();k?g&&(f+=J-g):(f=J,k=!0),g=0,m=!0,I=0,requestAnimationFrame(R)}else!b&&m?(m=!1,g=performance.now(),n&&Y(g/1e3)):!b&&n&&Y(performance.now()/1e3)},ct=b=>{$=b.clientX/innerWidth-.5,L=b.clientY/innerHeight-.5},lt=new ResizeObserver(B);lt.observe(t);let wt=new IntersectionObserver(b=>{h=b[0].isIntersecting,Z()});wt.observe(t),document.addEventListener("visibilitychange",Z),addEventListener("pointermove",ct,{passive:!0}),B();let xt=0;return{toggle:Z,finish(){k=!0,g=0,f=performance.now()-(la.start+la.span+1)*1e3,!m&&n&&Y(performance.now()/1e3)},restart(){k=!0,g=0,f=performance.now(),et=-1},tap(b,J){xt+=1,P.push({x:b,y:J,t:performance.now()/1e3,id:xt,water:J>H(b)+4}),P.length>8&&P.shift()},destroy(){m=!1,lt.disconnect(),wt.disconnect(),document.removeEventListener("visibilitychange",Z),removeEventListener("pointermove",ct)}}}function Zr(t,a){t.classList.add("view-home");let e=!Pe();t.innerHTML=`
  <section class="aw${e?" is-live":""}" aria-labelledby="aw-title">
    <canvas class="aw-canvas" aria-hidden="true"></canvas>
    <div class="aw-cap">
      <p class="aw-kicker">SHOPPING RELICS</p>
      <h1 class="aw-title" id="aw-title"><span class="nw">\u51FA\u767C\u4E4B\u524D\uFF0C</span><span class="nw">\u5149\u5DF2\u6EFF\u6EA2\u3002</span></h1>
      <p class="aw-sub"><span class="nw">\u60F3\u8981\u7684\u90FD\u5BEB\u5728\u9019\u88E1\uFF0C</span><span class="nw">\u6642\u9593\u5168\u7559\u7D66\u65C5\u7A0B\u3002</span></p>
      <p class="aw-alt" lang="ja"><span class="nw">\u65C5\u7ACB\u3061\u306E\u524D\u306B\u3001\u5149\u306F\u6E80\u3061\u308B\u3002</span><span class="nw">\u307B\u3057\u3044\u3082\u306E\u306F\u3001\u3053\u3053\u306B\u8A18\u3057\u3066\u3002</span><span class="nw">\u6642\u9593\u306F\u3059\u3079\u3066\u3001\u65C5\u306E\u305F\u3081\u306B\u3002</span></p>
      <ul class="aw-stats" aria-label="\u6E05\u55AE\u6982\u6CC1" data-stats>${Zs(a).join("")}</ul>
      <div class="aw-cta" data-cta>
        <div class="aw-opt">
          <a class="btn btn-gold" href="#/list" aria-describedby="aw-note-start">${c("auto_awesome")}\u76F4\u63A5\u958B\u59CB</a>
          <p class="aw-note" id="aw-note-start">\u4E0D\u7528\u767B\u5165\uFF0C\u6E05\u55AE\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u7684\u700F\u89BD\u5668\u88E1\u3002</p>
        </div>
        <div class="aw-opt" data-login-opt>${Qs()}</div>
      </div>
      <div class="aw-minor" data-minor>
        <button type="button" class="aw-replay" data-add>${c("add_circle","sm")}<span data-add-label>${Xs(a.state)}</span></button>
        <button type="button" class="aw-replay" data-replay>${c("movie","sm")}\u91CD\u64AD\u7247\u982D</button>
      </div>
    </div>
    <button type="button" class="aw-skip" data-skipintro hidden>\u8DF3\u904E\u7247\u982D${c("fast_forward","sm")}</button>
  </section>`;let s=t.querySelector(".aw"),n=t.querySelector(".aw-cap"),o=t.querySelector("[data-skipintro]"),r=null,i=-1,l=p=>{let $=St((p-.8)/.14);(Math.abs($-i)>.004||$===1&&i!==1)&&(i=$,s.style.setProperty("--c",$.toFixed(3)),n.querySelectorAll("[data-cta], [data-minor]").forEach(P=>{P.inert=$<.6}));let L=p>=Jr;if(L!==r){r=L;let P=s.classList.contains("is-live")&&!r;document.body.classList.toggle("home-intro",P),o.hidden=!P,r&&Wr()}},d=e&&zr();document.body.classList.toggle("home-intro",e&&!d),d&&s.classList.add("is-quick");let m=null,h=()=>{let p=t.querySelector(".aw-canvas"),$=p.cloneNode(!1);p.replaceWith($),s.classList.remove("is-gl"),m=Qr($,l)};ua()==="gl"&&(m=Vs(t.querySelector(".aw-canvas"),l,Pe,()=>{m.destroy(),h(),m.finish()})),m?s.classList.add("is-gl"):h(),d&&m.finish();let f=matchMedia("(prefers-reduced-motion: reduce)"),k=()=>{s.classList.toggle("is-live",!Pe()),Pe()&&m.finish(),m.toggle()};f.addEventListener?.("change",k);let g=t.querySelector("[data-login-opt]"),v=na(()=>{let p=g.contains(document.activeElement);g.innerHTML=Qs(),p&&g.querySelector("[data-login]:not(:disabled)")?.focus()});return je(),t.addEventListener("click",async p=>{p.target.closest("[data-add]")&&document.dispatchEvent(new CustomEvent("app:add"));let $=p.target.closest("[data-login]");if($){if($.getAttribute("aria-disabled")==="true"){G({title:"Google \u767B\u5165\u5C1A\u672A\u555F\u7528",message:"\u53EF\u4EE5\u5148\u9078\u300C\u76F4\u63A5\u958B\u59CB\u300D\uFF0C\u6E05\u55AE\u6703\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\u3002",tone:"muted",duration:5e3});return}await ze(ka);let L=ce();if(L.linked&&L.hasToken&&L.state==="ok"){try{sessionStorage.setItem("shopping-relics:cloud-nudged","1")}catch{}location.hash="#/list"}return}p.target.closest("[data-skipintro]")&&(m.finish(),p.detail===0&&requestAnimationFrame(()=>n.querySelector("[data-cta] a")?.focus())),p.target.closest("[data-replay]")&&(s.classList.remove("is-quick"),m.restart(),p.detail===0?requestAnimationFrame(()=>o.focus()):document.activeElement?.blur())}),s.addEventListener("pointerdown",p=>{if(!r||Pe()||p.button>0||p.target.closest("a, button, .aw-title, .aw-sub, .aw-alt, .aw-stats, .aw-kicker"))return;let $=s.getBoundingClientRect();m.tap(p.clientX-$.left,p.clientY-$.top)}),{update(p){t.querySelector("[data-stats]").innerHTML=Zs(p).join(""),t.querySelector("[data-add-label]").textContent=Xs(p.state)},destroy(){f.removeEventListener?.("change",k),v(),m.destroy(),document.body.classList.remove("home-intro")}}}var so=`<details class="cloud-more">
    <summary>${c("help","sm")}\u540C\u6B65\u6A94\u5B58\u5728\u54EA\u88E1\uFF1F\u70BA\u4EC0\u9EBC\u5728 Google Drive \u88E1\u770B\u4E0D\u5230\uFF1F</summary>
    <div class="cloud-more-body">
      <p>\u540C\u6B65\u6A94\u5B58\u5728\u4F60 Google Drive \u7684<strong>\u300C\u61C9\u7528\u7A0B\u5F0F\u5C08\u7528\u96B1\u85CF\u8CC7\u6599\u593E\u300D</strong>\uFF0C\u6240\u4EE5\u5728\u96F2\u7AEF\u786C\u789F\u7684\u6A94\u6848\u6E05\u55AE\u88E1<strong>\u770B\u4E0D\u5230\uFF0C\u9019\u662F\u6B63\u5E38\u7684</strong>\u3002\u4E5F\u56E0\u70BA\u53EA\u7528\u9019\u500B\u96B1\u85CF\u8CC7\u6599\u593E\uFF0C\u672C\u7DB2\u7AD9\u78B0\u4E0D\u5230\u4F60 Drive \u88E1\u7684\u5176\u4ED6\u6A94\u6848\u3002</p>
      <p><strong>\u60F3\u78BA\u8A8D\u6709\u5B58\u4E0A\u53BB\uFF1A</strong>\u7528\u96FB\u8166\u6253\u958B drive.google.com \u2192 \u53F3\u4E0A\u89D2\u9F52\u8F2A\u300C\u8A2D\u5B9A\u300D\u2192 \u5DE6\u5074\u300C\u7BA1\u7406\u61C9\u7528\u7A0B\u5F0F\u300D\uFF0C\u627E\u5230\u672C\u7DB2\u7AD9\uFF08\u540D\u7A31\u548C\u767B\u5165\u6642\u6388\u6B0A\u756B\u9762\u4E0A\u7684\u4E00\u6A23\uFF09\uFF0C\u8AAA\u660E\u4E0B\u65B9\u6703\u986F\u793A\u96B1\u85CF\u8CC7\u6599\u7684\u5927\u5C0F\u3002</p>
      <p>\u532F\u51FA\u7684 PDF \u4E0D\u4E00\u6A23\uFF1A\u5B58\u5728\u300C\u6211\u7684\u96F2\u7AEF\u786C\u789F \u203A Shopping Relics\u300D\u8CC7\u6599\u593E\uFF0C\u770B\u5F97\u5230\u3001\u53EF\u4EE5\u5206\u4EAB\u3002</p>
    </div>
  </details>`,gn='<p class="hint">\u672C\u7DB2\u7AD9\u53EA\u53D6\u5F97 Google \u7684<strong>\u5E33\u865F\u8B58\u5225\u78BC</strong>\uFF08\u4E0D\u542B\u59D3\u540D\u3001Email\uFF09\uFF0C\u6C92\u6709\u81EA\u5DF1\u7684\u4F3A\u670D\u5668\uFF0C\u770B\u4E0D\u5230\u4F60\u7684\u6E05\u55AE\u3002<a href="privacy.html" target="_blank" rel="noopener">\u96B1\u79C1\u6B0A\u8AAA\u660E<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a></p>',Ia=(t,a,e)=>`<div class="cloud-act">${t.replace("<button ",`<button aria-describedby="${a}" `)}<p class="cloud-act-desc" id="${a}">${e}</p></div>`;function oo(){let t=ae(),a=ce();if(!t.ok)return`<p class="cloud-status is-off">${c("info","sm")}${t.reason==="config"?"\u96F2\u7AEF\u540C\u6B65\u5C1A\u672A\u555F\u7528\uFF1A\u7DB2\u7AD9\u9084\u6C92\u8A2D\u5B9A Google \u7528\u6236\u7AEF ID\u3002":"\u96F2\u7AEF\u540C\u6B65\u9700\u8981\u5F9E\u7DB2\u5740\uFF08https\uFF09\u958B\u555F\u7DB2\u7AD9\uFF0C\u76F4\u63A5\u958B\u555F\u6A94\u6848\u6642\u7121\u6CD5\u4F7F\u7528\u3002"}</p>${gn}`;let e=a.state==="syncing"?' disabled aria-busy="true"':"";if(!a.linked)return`<p class="cloud-lead">\u767B\u5165 Google \u5F8C\uFF0C\u6E05\u55AE\u6703\u5B58\u5230\u4F60\u81EA\u5DF1\u7684 Google Drive\u3002\u63DB\u624B\u6A5F\u6216\u96FB\u8166\u6642\uFF0C\u767B\u5165\u540C\u4E00\u500B\u5E33\u865F\u5C31\u80FD\u63A5\u8457\u7528\u3002</p>
      ${Ia(`<button type="button" class="btn btn-gold" data-cloud="connect"${e}>${c("sync")}\u767B\u5165 Google \u4E26\u958B\u59CB\u540C\u6B65</button>`,"cloud-d-connect","\u7B2C\u4E00\u6B21\u767B\u5165\u6642\uFF1A\u96F2\u7AEF\u9084\u6C92\u6709\u8CC7\u6599\uFF0C\u5C31\u628A\u9019\u53F0\u7684\u6E05\u55AE\u5B58\u4E0A\u53BB\uFF1B\u96F2\u7AEF\u5DF2\u6709\u8CC7\u6599\u3001\u9019\u53F0\u662F\u7A7A\u7684\uFF0C\u5C31\u8F09\u5165\u96F2\u7AEF\u7684\u6E05\u55AE\uFF1B\u5169\u908A\u90FD\u6709\u6E05\u55AE\uFF0C\u6703\u5148\u554F\u4F60\u8981\u4FDD\u7559\u54EA\u4E00\u4EFD\u3002")}
      ${a.state==="error"?`<p class="cloud-status is-error">${c("error","sm")}${u(a.message)}</p>`:""}
      ${so}${gn}`;let s={syncing:[`${c("sync","sm")}\u540C\u6B65\u4E2D\u2026`,""],conflict:[`${c("warning","sm")}${u(a.message)}`,"is-warn"],auth:[`${c("info","sm")}\u9023\u7DDA\u5DF2\u903E\u6642\uFF0C\u6309\u300C\u7ACB\u5373\u540C\u6B65\u300D\u91CD\u65B0\u9023\u7DDA`,"is-warn"],error:[`${c("error","sm")}${u(a.message)}`,"is-error"]}[a.state]??(a.dirty?[`${c("pending","sm")}\u9019\u53F0\u6709\u5C1A\u672A\u540C\u6B65\u7684\u4FEE\u6539${a.hasToken?"\uFF0C\u5E7E\u79D2\u5F8C\u6703\u81EA\u52D5\u4E0A\u50B3":"\uFF0C\u6309\u300C\u7ACB\u5373\u540C\u6B65\u300D\u4E0A\u50B3"}`,"is-warn"]:a.hasToken?[`${c("check_circle","sm")}\u5DF2\u540C\u6B65${a.lastSyncAt?` \xB7 ${Ot(a.lastSyncAt)}`:""}\uFF0C\u4E4B\u5F8C\u7684\u4FEE\u6539\u6703\u81EA\u52D5\u4E0A\u50B3`,"is-ok"]:[`${c("check_circle","sm")}\u4E0A\u6B21\u540C\u6B65${a.lastSyncAt?`\uFF1A${Ot(a.lastSyncAt)}`:""}\u3002\u8981\u53D6\u5F97\u5176\u4ED6\u88DD\u7F6E\u7684\u4FEE\u6539\uFF0C\u8ACB\u6309\u300C\u7ACB\u5373\u540C\u6B65\u300D`,"is-ok"]);return`<p class="cloud-account">${c("verified","sm")}\u5DF2\u767B\u5165 Google\uFF08\u5E33\u865F\u8B58\u5225\u78BC\u672B 4 \u78BC ${u(a.idTail)}\uFF09</p>
    <p class="cloud-status ${s[1]}">${s[0]}</p>
    <div class="cloud-acts">
      ${Ia(`<button type="button" class="btn btn-gold" data-cloud="sync"${e}>${c("sync")}\u7ACB\u5373\u540C\u6B65</button>`,"cloud-d-sync","\u6BD4\u5C0D\u9019\u53F0\u548C\u96F2\u7AEF\uFF0C\u628A\u6BD4\u8F03\u65B0\u7684\u4E00\u4EFD\u5E36\u5230\u53E6\u4E00\u908A\uFF1B\u5169\u908A\u90FD\u6539\u904E\u6642\uFF0C\u6703\u5148\u554F\u4F60\u8981\u4FDD\u7559\u54EA\u4E00\u4EFD\u3002<strong>\u6BCF\u6B21\u6253\u958B\u7DB2\u7AD9\u5F8C\u5148\u6309\u4E00\u6B21</strong>\uFF0C\u4E4B\u5F8C\u7D04 1 \u5C0F\u6642\u5167\u7684\u4FEE\u6539\u6703\u81EA\u52D5\u4E0A\u50B3\u3002")}
      ${Ia(`<button type="button" class="btn btn-ghost" data-cloud="disconnect">${c("logout")}\u767B\u51FA Google</button>`,"cloud-d-out","\u505C\u6B62\u540C\u6B65\u3002\u9019\u53F0\u7684\u6E05\u55AE\u548C\u96F2\u7AEF\u7684\u8CC7\u6599\u90FD\u6703\u4FDD\u7559\uFF0C\u4E4B\u5F8C\u767B\u5165\u540C\u4E00\u500B\u5E33\u865F\u5C31\u80FD\u63A5\u8457\u540C\u6B65\u3002")}
      ${Ia(`<button type="button" class="btn btn-danger-ghost" data-cloud="delete">${c("delete_forever")}\u522A\u9664\u96F2\u7AEF\u8CC7\u6599</button>`,"cloud-d-del","\u522A\u6389 Google Drive \u88E1\u7684\u540C\u6B65\u6A94\u4E26\u767B\u51FA\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\uFF1B\u9019\u53F0\u7684\u6E05\u55AE\u6703\u4FDD\u7559\u3002")}
    </div>
    ${so}${gn}`}var _a=t=>`${t} \u4EF6\u5546\u54C1`;async function ze(t){let a=as(),e=na(s=>{s.state==="syncing"&&s.phase==="transfer"?a.show():s.state==="conflict"&&a.close()});try{let s=await t();if(e(),s?.action==="conflict"){await a.close();let o=await Zn({title:"\u8981\u4FDD\u7559\u54EA\u4E00\u4EFD\u6E05\u55AE\uFF1F",body:`<p>\u96F2\u7AEF\u548C\u9019\u53F0\u88DD\u7F6E\u7684\u8CC7\u6599\u4E0D\u4E00\u6A23\uFF1A</p>
          <ul class="choice-facts"><li>\u96F2\u7AEF\uFF1A${_a(s.remoteCount)}\uFF0C${Ot(s.remoteAt)} \u5132\u5B58</li><li>\u9019\u53F0\uFF1A${_a(s.localCount)}</li></ul>
          <p>\u6C92\u9078\u5230\u7684\u90A3\u4EFD\u6703\u88AB\u53D6\u4EE3\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u4E0D\u78BA\u5B9A\u7684\u8A71\uFF0C\u5148\u53D6\u6D88\u4E26\u532F\u51FA\u9019\u53F0\u7684\u5099\u4EFD\u3002</p>`,choices:[{value:"cloud",text:"\u7528\u96F2\u7AEF\u8CC7\u6599\u53D6\u4EE3\u9019\u53F0",tone:"gold",icon:"cloud_download"},{value:"local",text:"\u7528\u9019\u53F0\u8CC7\u6599\u8986\u84CB\u96F2\u7AEF",icon:"cloud_upload"}]});return o?(a.show(),await ys(o),await a.done(o==="cloud"?{title:"\u5DF2\u63DB\u6210\u96F2\u7AEF\u7684\u6E05\u55AE",sub:`\u5171 ${_a(w.state.items.length)}`}:{title:"\u5DF2\u7528\u9019\u53F0\u7684\u6E05\u55AE\u8986\u84CB\u96F2\u7AEF",sub:"\u5176\u4ED6\u88DD\u7F6E\u540C\u6B65\u5F8C\u5C31\u6703\u770B\u5230"}),{action:"resolved"}):{action:"conflict"}}let n={downloaded:{title:"\u5DF2\u5F9E\u96F2\u7AEF\u8F09\u5165\u6E05\u55AE",sub:`\u5171 ${_a(w.state.items.length)}`},uploaded:{title:"\u5DF2\u5B58\u5230 Google Drive",sub:"\u5176\u4ED6\u88DD\u7F6E\u767B\u5165\u540C\u4E00\u500B\u5E33\u865F\u5C31\u80FD\u770B\u5230"},none:{title:"\u540C\u6B65\u5B8C\u6210",sub:"\u9019\u53F0\u548C\u96F2\u7AEF\u7684\u6E05\u55AE\u5DF2\u662F\u6700\u65B0"}}[s?.action];return n?(a.show(),await a.done(n)):await a.close(),s}catch(s){return e(),s?.code==="denied"?await a.close():await a.fail({title:"\u540C\u6B65\u5931\u6557",sub:s?.message||"\u8ACB\u7A0D\u5F8C\u518D\u8A66"}),null}}function ti(t){let a=e=>`<span class="skin-half" style="--p-bg:${e.bg};--p-surface:${e.surface};--p-accent:${e.accent}"><span class="skin-key"></span></span>`;return`<label class="skin-card">
    <input type="radio" name="skin" value="${t.id}" ${Ae()===t.id?"checked":""}>
    <span class="skin-body">
      <span class="skin-preview" aria-hidden="true">${a(t.preview.light)}${a(t.preview.dark)}</span>
      <span class="skin-name">${u(t.label)}${c("check_circle","sm")}</span>
      <span class="skin-desc">${u(t.desc)}</span>
    </span>
  </label>`}function ro(){let t=Le(),a=w.state;return`
    <p class="hint">\u76EE\u524D\uFF1A<strong>${u(a.settings.tripName)}</strong>\uFF08${a.items.length} \u4EF6\u5546\u54C1\uFF09\u3002\u5C01\u5B58\u5F8C\u53EF\u4EE5\u958B\u59CB\u65B0\u7684\u4E00\u8D9F\uFF0C\u4E4B\u5F8C\u96A8\u6642\u5207\u63DB\u56DE\u4F86\u3002</p>
    <div class="btn-row">
      <button type="button" class="btn btn-ghost" data-trip="new">${c("add_circle")}\u5C01\u5B58\u4E26\u958B\u59CB\u65B0\u65C5\u7A0B</button>
    </div>
    ${t.length?`<ul class="trip-list">
      ${t.map(e=>`<li>
        <div><strong>${u(e.name)}</strong><span class="muted small">${e.count} \u4EF6\u5546\u54C1 \xB7 ${Ot(e.savedAt)} \u5C01\u5B58</span></div>
        <button type="button" class="btn btn-sm btn-ghost" data-trip="switch" data-id="${u(e.id)}">${c("swap_horiz","sm")}\u5207\u63DB</button>
        <button type="button" class="icon-btn icon-btn-sm icon-btn-danger" data-trip="remove" data-id="${u(e.id)}" aria-label="\u522A\u9664\u5C01\u5B58\u7684\u65C5\u7A0B\u300C${u(e.name)}\u300D" title="\u522A\u9664">${c("delete","sm")}</button>
      </li>`).join("")}
    </ul>`:""}
    <p class="hint">\u5C01\u5B58\u7684\u65C5\u7A0B\u53EA\u5B58\u5728\u9019\u53F0\u88DD\u7F6E\uFF0C\u96F2\u7AEF\u540C\u6B65\u53EA\u540C\u6B65\u76EE\u524D\u9019\u8D9F\uFF1B\u532F\u51FA\u5099\u4EFD\u6642\u6703\u4E00\u4F75\u5E36\u51FA\u3002</p>`}function ei(){let t=w.state.settings;return`
  <form class="dlg-shell settings-shell" novalidate>
    <header class="dlg-head">
      <p class="eyebrow">${c("tune","sm")}SETTINGS \xB7 \u8A2D\u5B9A</p>
      <h2 id="settings-title" class="dlg-title">\u65C5\u7A0B\u8A2D\u5B9A\u8207\u8CC7\u6599\u5099\u4EFD</h2>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8A2D\u5B9A">${c("close")}</button>
      <!-- \u5206\u985E\u5C0E\u89BD\uFF1A\u5E38\u7528\u7684\u5E33\u865F\u540C\u6B65\u3001\u532F\u51FA\u653E\u6700\u524D\u9762\uFF0C\u9EDE\u4E00\u4E0B\u76F4\u63A5\u8DF3\u5230\u8A72\u5340 -->
      <nav class="st-nav" aria-label="\u8A2D\u5B9A\u5206\u985E">
        <button type="button" class="st-nav-btn" data-goto="sec-sync">\u5E33\u865F\u540C\u6B65</button>
        <button type="button" class="st-nav-btn" data-goto="sec-export">\u532F\u51FA PDF</button>
        <button type="button" class="st-nav-btn" data-goto="sec-trip">\u65C5\u7A0B\u9810\u7B97</button>
        <button type="button" class="st-nav-btn" data-goto="sec-rate">\u532F\u7387</button>
        <button type="button" class="st-nav-btn" data-goto="sec-luggage">\u884C\u674E</button>
        <button type="button" class="st-nav-btn" data-goto="sec-trips">\u591A\u8D9F\u65C5\u7A0B</button>
        <button type="button" class="st-nav-btn" data-goto="sec-look">\u5916\u89C0</button>
        <button type="button" class="st-nav-btn" data-goto="sec-data">\u5099\u4EFD</button>
      </nav>
    </header>
    <div class="dlg-scroll">
      <fieldset class="fs" id="sec-sync" tabindex="-1">
        <legend class="fs-title">${c("sync_alt","sm")}\u5E33\u865F\u8207\u96F2\u7AEF\u540C\u6B65\uFF08Google Drive\uFF09</legend>
        <div data-cloud-region aria-live="polite">${oo()}</div>
      </fieldset>

      <fieldset class="fs" id="sec-export" tabindex="-1">
        <legend class="fs-title">${c("picture_as_pdf","sm")}\u532F\u51FA\u6E05\u55AE\uFF08PDF\uFF09</legend>
        <p class="hint">\u628A\u76EE\u524D\u9019\u8D9F\u7684\u8CFC\u7269\u6E05\u55AE\u4F9D\u5E97\u92EA\u6392\u597D\u3001\u505A\u6210 A4 \u7684 PDF\uFF0C\u53EF\u4EE5\u5217\u5370\u3001\u50B3\u7D66\u540C\u884C\u7684\u4EBA\uFF0C\u6216\u5728\u6C92\u7DB2\u8DEF\u6642\u6253\u958B\u3002</p>
        <div class="seg-pills" role="radiogroup" aria-label="PDF \u8981\u5305\u542B\u54EA\u4E9B\u5546\u54C1">
          <label class="pill"><input type="radio" name="pdfScope" value="all" checked><span>\u5168\u90E8\u5546\u54C1</span></label>
          <label class="pill"><input type="radio" name="pdfScope" value="pending"><span>\u53EA\u5217\u5F85\u8CB7</span></label>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-ghost" data-pdf="local">${c("download")}\u4E0B\u8F09\u5230\u9019\u53F0\u88DD\u7F6E</button>
          <button type="button" class="btn btn-ghost" data-pdf="cloud"${ae().ok?"":' aria-disabled="true"'} aria-describedby="hint-pdf-cloud">${c("cloud_upload")}\u5B58\u5230 Google Drive</button>
        </div>
        <p class="hint" id="hint-pdf-cloud">${ae().ok?"\u5B58\u5230\u300C\u6211\u7684\u96F2\u7AEF\u786C\u789F \u203A Shopping Relics\u300D\u8CC7\u6599\u593E\u3002\u7B2C\u4E00\u6B21\u6703\u8ACB\u4F60\u540C\u610F\u300C\u5EFA\u7ACB Google Drive \u6A94\u6848\u300D\u7684\u6B0A\u9650\uFF0C\u672C\u7DB2\u7AD9\u53EA\u80FD\u5B58\u53D6\u81EA\u5DF1\u5EFA\u7ACB\u7684\u6A94\u6848\u3002":"\u5B58\u5230 Google Drive \u9700\u8981\u5F9E\u7DB2\u5740\uFF08https\uFF09\u958B\u555F\u7DB2\u7AD9\u3002"}</p>
        <div data-pdf-status role="status" aria-live="polite"></div>
      </fieldset>

      <fieldset class="fs" id="sec-trip" tabindex="-1">
        <legend class="fs-title">${c("flight_takeoff","sm")}\u65C5\u7A0B\u8207\u9810\u7B97</legend>
        <div class="grid-2">
          <div class="field span2">
            <label for="st-trip">\u65C5\u7A0B\u540D\u7A31</label>
            <input id="st-trip" name="tripName" value="${u(t.tripName)}" maxlength="40">
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

      <fieldset class="fs" id="sec-rate" tabindex="-1">
        <legend class="fs-title">${c("currency_exchange","sm")}\u532F\u7387</legend>
        <div class="rate-row">
          <div class="field grow">
            <label for="st-rate">1 \u65E5\u5713 = ? \u53F0\u5E63</label>
            <input id="st-rate" name="rate" type="number" inputmode="decimal" min="0.01" max="5" step="0.0001" value="${t.rate}">
          </div>
          <button type="button" class="btn btn-ghost" data-sync>${c("sync")}\u6293\u6700\u65B0\u532F\u7387</button>
        </div>
        <p class="hint">\u76EE\u524D\u4F86\u6E90\uFF1A${t.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":t.rateSource==="api"?u(t.rateProvider||"\u516C\u958B\u532F\u7387 API"):"\u9810\u8A2D\u503C"}${t.rateUpdatedAt?` \xB7 ${Ot(t.rateUpdatedAt)}`:""}\u3002\u4FEE\u6539\u6578\u5B57\u5F8C\u5132\u5B58\uFF0C\u5C31\u6703\u6539\u7528\u624B\u52D5\u532F\u7387\u3002</p>
      </fieldset>

      <fieldset class="fs" id="sec-luggage" tabindex="-1">
        <legend class="fs-title">${c("luggage","sm")}\u884C\u674E</legend>
        <div class="grid-2">
          <div class="field"><label for="st-cl">\u8A17\u904B\u9650\u91CD\uFF08kg\uFF09</label><input id="st-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${t.checkedLimit}"></div>
          <div class="field"><label for="st-cb">\u8A17\u904B\u57FA\u672C\u91CD\u91CF\uFF08kg\uFF09</label><input id="st-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${t.checkedBase}" aria-describedby="hint-base"></div>
          <div class="field"><label for="st-pl">\u96A8\u8EAB\u9650\u91CD\uFF08kg\uFF09</label><input id="st-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${t.carryLimit}"></div>
          <div class="field"><label for="st-pb">\u96A8\u8EAB\u57FA\u672C\u91CD\u91CF\uFF08kg\uFF09</label><input id="st-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${t.carryBase}"></div>
        </div>
        <p class="hint" id="hint-base">\u57FA\u672C\u91CD\u91CF\uFF1D\u884C\u674E\u7BB1\u672C\u8EAB\u52A0\u4E0A\u8863\u7269\u7B49\u975E\u8CFC\u7269\u54C1\u3002</p>
      </fieldset>

      <fieldset class="fs" id="sec-trips" tabindex="-1">
        <legend class="fs-title">${c("inventory_2","sm")}\u591A\u8D9F\u65C5\u7A0B</legend>
        <div data-trips-region>${ro()}</div>
      </fieldset>

      <fieldset class="fs" id="sec-look" tabindex="-1">
        <legend class="fs-title">${c("auto_awesome","sm")}\u4E3B\u984C</legend>
        <div class="skin-grid" role="radiogroup" aria-label="\u4E3B\u984C">
          ${ne.map(ti).join("")}
        </div>
        <p class="hint">\u4E3B\u984C\u6C7A\u5B9A\u6574\u9AD4\u7684\u8A2D\u8A08\u98A8\u683C\uFF0C\u9078\u64C7\u5F8C\u7ACB\u5373\u5957\u7528\u3002\u9996\u9801\u7247\u982D\u7DAD\u6301\u91D1\u8272\u591C\u666F\uFF0C\u4E0D\u96A8\u4E3B\u984C\u6539\u8B8A\u3002</p>
      </fieldset>

      <fieldset class="fs" id="sec-look2" tabindex="-1">
        <legend class="fs-title">${c("light_mode","sm")}\u5916\u89C0</legend>
        <div class="seg-pills" role="radiogroup" aria-label="\u5916\u89C0\uFF08\u6DF1\u6DFA\u8272\uFF09">
          ${Be.map(a=>`<label class="pill"><input type="radio" name="theme" value="${a.id}" ${be()===a.id?"checked":""}><span>${c(a.icon,"sm")}${a.label}</span></label>`).join("")}
        </div>
        <p class="hint">\u9078\u64C7\u5F8C\u7ACB\u5373\u5957\u7528\uFF0C\u4E26\u8A18\u5728\u9019\u53F0\u88DD\u7F6E\u3002</p>
      </fieldset>

      <fieldset class="fs" id="sec-intro" tabindex="-1">
        <legend class="fs-title">${c("movie","sm")}\u9996\u9801\u7247\u982D</legend>
        <div class="seg-pills" role="radiogroup" aria-label="\u9996\u9801\u7247\u982D\u7684\u7248\u672C">
          <label class="pill"><input type="radio" name="intro" value="gl" ${ua()==="gl"?"checked":""}><span>${c("auto_awesome","sm")}\u83EF\u9E97\u7248</span></label>
          <label class="pill"><input type="radio" name="intro" value="2d" ${ua()==="2d"?"checked":""}><span>${c("light_mode","sm")}\u8F15\u91CF\u7248</span></label>
        </div>
        <p class="hint">\u83EF\u9E97\u7248\u9700\u8981\u8F03\u65B0\u7684\u88DD\u7F6E\uFF0C\u8DD1\u4E0D\u52D5\u6642\u6703\u81EA\u52D5\u6539\u7528\u8F15\u91CF\u7248\u3002\u8B8A\u66F4\u5F8C\u4E0B\u6B21\u56DE\u5230\u9996\u9801\u751F\u6548\uFF1B\u5B8C\u6574\u7684\u7247\u982D\u53EA\u5728\u7B2C\u4E00\u6B21\u64AD\uFF0C\u4E4B\u5F8C\u53EF\u5728\u9996\u9801\u6309\u300C\u91CD\u64AD\u7247\u982D\u300D\u3002</p>
      </fieldset>

      <fieldset class="fs" id="sec-data" tabindex="-1">
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
  </form>`}function io(){let t=Ut("dlg-settings",ei(),"settings-title"),a=t.querySelector("form"),e=w.state.settings.rate;je();let s=t.querySelector("[data-cloud-region]"),n=na(()=>{if(!t.isConnected){n();return}let v=document.activeElement?.dataset?.cloud;s.innerHTML=oo(),v&&s.querySelector(`[data-cloud="${v}"]`)?.focus()}),o=t.querySelector(".dlg-scroll"),r=[...t.querySelectorAll("[data-goto]")],i=[...t.querySelectorAll(".dlg-scroll > fieldset[id]")],l=v=>r.find(p=>p.dataset.goto===v)??r.find(p=>p.dataset.goto==="sec-look"),d=null,m=()=>{let v=o.getBoundingClientRect().top+24,$=o.scrollTop+o.clientHeight>=o.scrollHeight-4?i.at(-1):i.filter(D=>D.getBoundingClientRect().top<=v).at(-1)??i[0],L=l($.id);if(L===d)return;d?.removeAttribute("aria-current"),L.setAttribute("aria-current","true"),d=L;let P=L.parentElement,S=L.offsetLeft-P.offsetLeft;(S<P.scrollLeft||S+L.offsetWidth>P.scrollLeft+P.clientWidth)&&(P.scrollLeft=S-16)},h=0;o.addEventListener("scroll",()=>{cancelAnimationFrame(h),h=requestAnimationFrame(m)},{passive:!0}),requestAnimationFrame(m);let f=t.querySelector("[data-pdf-status]"),k=!1;async function g(v){if(k)return;let p=v.dataset.pdf;if(v.getAttribute("aria-disabled")==="true"){G({title:"\u76EE\u524D\u7121\u6CD5\u5B58\u5230 Google Drive",message:"\u9700\u8981\u5F9E\u7DB2\u5740\uFF08https\uFF09\u958B\u555F\u7DB2\u7AD9\uFF0C\u53EF\u4EE5\u5148\u4E0B\u8F09\u5230\u9019\u53F0\u88DD\u7F6E\u3002",tone:"muted",duration:5e3});return}let $=a.elements.pdfScope.value,L=$==="pending"?w.state.items.filter(S=>!S.purchased).length:w.state.items.length;if(!L){G({title:$==="pending"?"\u6C92\u6709\u5F85\u8CB7\u7684\u5546\u54C1":"\u6E05\u55AE\u662F\u7A7A\u7684",message:"\u52A0\u5165\u5546\u54C1\u5F8C\u518D\u532F\u51FA\u3002",tone:"muted",duration:3500});return}k=!0;let P=v.innerHTML;try{p==="cloud"&&await ks(),v.disabled=!0,v.setAttribute("aria-busy","true"),v.innerHTML=`${c("pending")}\u7522\u751F\u4E2D\u2026`,f.innerHTML=`<p class="cloud-status">${c("pending","sm")}\u6B63\u5728\u7522\u751F PDF\uFF08${L} \u4EF6\u5546\u54C1\uFF09\u2026</p>`;let S=await Ms(w.state,{scope:$}),D=Es(w.state),I=S.size>1048576?`${(S.size/1048576).toFixed(1)} MB`:`${Math.max(1,Math.round(S.size/1024))} KB`;if(p==="local")ns(D,S),f.innerHTML=`<p class="cloud-status is-ok">${c("check_circle","sm")}\u5DF2\u4E0B\u8F09\u300C${u(D)}\u300D\uFF08${I}\uFF09</p>`;else{v.innerHTML=`${c("cloud_upload")}\u4E0A\u50B3\u4E2D\u2026`,f.innerHTML=`<p class="cloud-status">${c("cloud_upload","sm")}\u6B63\u5728\u4E0A\u50B3\u5230 Google Drive\uFF08${I}\uFF09\u2026</p>`;let{link:Q}=await Ss(S,D);f.innerHTML=`<p class="cloud-status is-ok">${c("check_circle","sm")}<span>\u5DF2\u5B58\u5230\u300C\u6211\u7684\u96F2\u7AEF\u786C\u789F \u203A Shopping Relics\u300D\u3002<a href="${u(Q)}" target="_blank" rel="noopener">\u5728 Google Drive \u958B\u555F${c("open_in_new","sm")}<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a></span></p>`,G({title:"\u5DF2\u5B58\u5230 Google Drive",message:u(D),tone:"muted",duration:3500})}}catch(S){S?.code==="denied"?f.innerHTML="":f.innerHTML=`<p class="cloud-status is-error">${c("error","sm")}${u(S?.message||"\u532F\u51FA\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66")}</p>`}finally{k=!1,v.disabled=!1,v.removeAttribute("aria-busy"),v.innerHTML=P}}t.addEventListener("click",async v=>{let p=v.target,$=p.closest("[data-goto]");if($){let D=t.querySelector(`#${$.dataset.goto}`),I=!matchMedia("(prefers-reduced-motion: reduce)").matches,Q=D.getBoundingClientRect().top-o.getBoundingClientRect().top+o.scrollTop-8;o.scrollTo({top:Q,behavior:I?"smooth":"auto"}),D.focus({preventScroll:!0});return}let L=p.closest("[data-pdf]");if(L){g(L);return}let P=p.closest("[data-cloud]")?.dataset.cloud;if(P==="connect"&&ze(ka),P==="sync"&&ze(()=>Oe({interactive:!0})),P==="disconnect"&&await Wt({title:"\u767B\u51FA Google \u5E33\u865F\uFF1F",body:"\u9019\u53F0\u7684\u6E05\u55AE\u548C\u96F2\u7AEF\u7684\u540C\u6B65\u6A94\u90FD\u6703\u4FDD\u7559\uFF0C\u53EA\u662F\u4E4B\u5F8C\u4E0D\u518D\u81EA\u52D5\u540C\u6B65\u3002\u518D\u767B\u5165\u540C\u4E00\u500B\u5E33\u865F\u5C31\u80FD\u63A5\u8457\u540C\u6B65\u3002",confirmText:"\u767B\u51FA"})&&(nn(),G({title:"\u5DF2\u767B\u51FA Google",tone:"muted",duration:2500})),P==="delete"&&await Wt({title:"\u522A\u9664\u96F2\u7AEF\u8CC7\u6599\uFF1F",body:"\u6703\u522A\u9664\u4F60 Google Drive \u96B1\u85CF\u8CC7\u6599\u593E\u88E1\u7684<strong>\u540C\u6B65\u6A94</strong>\u4E26\u767B\u51FA\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u9019\u53F0\u88DD\u7F6E\u7684\u6E05\u55AE\u6703\u4FDD\u7559\u3002",confirmText:"\u522A\u9664\u96F2\u7AEF\u8CC7\u6599",danger:!0}))try{await ws(),G({title:"\u96F2\u7AEF\u8CC7\u6599\u5DF2\u522A\u9664",tone:"muted",duration:3e3})}catch(I){G({title:"\u522A\u9664\u5931\u6557",message:u(I?.message||"\u8ACB\u7A0D\u5F8C\u518D\u8A66"),tone:"error"})}if(p.closest(".dlg-close, [data-cancel]")){mt(t);return}if(p.closest("[data-sync]")){let D=p.closest("[data-sync]");D.disabled=!0,D.setAttribute("aria-busy","true");let I=await Ie({force:!0});D.disabled=!1,D.removeAttribute("aria-busy"),I.ok?(a.elements.rate.value=I.rate,G({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${ut(I.rate,4)} TWD`,tone:"muted",duration:3e3})):G({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u3002",tone:"error"})}let S=p.closest("[data-trip]");if(S){let D=S.dataset.trip,I=Le().find(E=>E.id===S.dataset.id),Q=()=>G({title:"\u5132\u5B58\u7A7A\u9593\u4E0D\u8DB3",message:"\u700F\u89BD\u5668\u7684\u5132\u5B58\u7A7A\u9593\u6EFF\u4E86\uFF0C\u8ACB\u5148\u522A\u9664\u4E0D\u9700\u8981\u7684\u5C01\u5B58\u65C5\u7A0B\u6216\u5546\u54C1\u7167\u7247\u3002",tone:"error"});if(D==="new"){if(!await Wt({title:"\u5C01\u5B58\u4E26\u958B\u59CB\u65B0\u65C5\u7A0B\uFF1F",body:`\u300C${u(w.state.settings.tripName)}\u300D\u7684 <strong>${w.state.items.length} \u4EF6\u5546\u54C1</strong>\u3001\u6536\u6B3E\u8207\u6253\u5305\u8A18\u9304\u6703\u5C01\u5B58\u8D77\u4F86\uFF0C\u4E4B\u5F8C\u53EF\u4EE5\u5207\u63DB\u56DE\u4F86\u3002\u65B0\u65C5\u7A0B\u6703\u6CBF\u7528\u532F\u7387\u3001\u9810\u7B97\u3001\u884C\u674E\u9650\u91CD\u8207\u81EA\u8A02\u5E97\u92EA\u3002`,confirmText:"\u5C01\u5B58\u4E26\u958B\u59CB"}))return;if(!Rs("\u65B0\u7684\u65C5\u7A0B")){Q();return}mt(t),G({title:"\u5DF2\u958B\u59CB\u65B0\u7684\u65C5\u7A0B",message:"\u53EF\u4EE5\u5728\u8A2D\u5B9A\u88E1\u4FEE\u6539\u65C5\u7A0B\u540D\u7A31\u3002",tone:"muted"})}else if(D==="switch"&&I){if(!await Wt({title:`\u5207\u63DB\u5230\u300C${I.name}\u300D\uFF1F`,body:w.state.items.length?`\u76EE\u524D\u7684\u300C${u(w.state.settings.tripName)}\u300D\u6703\u5148\u5C01\u5B58\uFF0C\u518D\u8F09\u5165\u300C${u(I.name)}\u300D\u7684 ${I.count} \u4EF6\u5546\u54C1\u3002`:`\u76EE\u524D\u7684\u300C${u(w.state.settings.tripName)}\u300D\u6C92\u6709\u5546\u54C1\uFF0C\u4E0D\u6703\u5C01\u5B58\uFF1B\u76F4\u63A5\u8F09\u5165\u300C${u(I.name)}\u300D\u7684 ${I.count} \u4EF6\u5546\u54C1\u3002`,confirmText:"\u5207\u63DB\u65C5\u7A0B"}))return;if(!Is(I.id)){Q();return}mt(t),G({title:`\u5DF2\u5207\u63DB\u5230\u300C${I.name}\u300D`,tone:"muted"})}else if(D==="remove"&&I){if(!await Wt({title:`\u522A\u9664\u5C01\u5B58\u7684\u300C${I.name}\u300D\uFF1F`,body:`\u6703\u522A\u9664\u9019\u8D9F\u5C01\u5B58\u7684 <strong>${I.count} \u4EF6\u5546\u54C1</strong>\u8207\u6240\u6709\u8A18\u9304\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002`,confirmText:"\u522A\u9664\u9019\u8D9F\u65C5\u7A0B",danger:!0}))return;_s(I.id),t.querySelector("[data-trips-region]").innerHTML=ro(),t.querySelector('[data-trip="new"]')?.focus(),G({title:"\u5DF2\u522A\u9664\u5C01\u5B58\u7684\u65C5\u7A0B",tone:"muted",duration:3e3})}return}if(p.closest("[data-export]")){let D={...JSON.parse(w.exportJSON()),archivedTrips:Le()};ba(`shopping-relics-backup-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(D,null,2),"application/json")}p.closest("[data-demo]")&&(w.loadDemo(),G({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u5728\u6E05\u55AE\u9801\u6E05\u9664\u3002"})),p.closest("[data-reset]")&&await Wt({title:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599\uFF1F",body:`\u6703\u522A\u9664\u6E05\u55AE\u4E2D\u7684 <strong>${w.state.items.length} \u4EF6\u5546\u54C1</strong>\u3001\u6253\u5305\u6E05\u55AE\u8207\u6240\u6709\u8A2D\u5B9A\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u5EFA\u8B70\u5148\u532F\u51FA\u5099\u4EFD\u3002`,confirmText:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599",danger:!0})&&(w.resetAll(),mt(t),G({title:"\u8CC7\u6599\u5DF2\u5168\u90E8\u6E05\u9664",tone:"muted"}))}),a.addEventListener("change",v=>{v.target.name==="skin"&&Ma(v.target.value),v.target.name==="intro"&&fn(v.target.value),v.target.name==="theme"&&Ea(v.target.value)}),t.querySelector("[data-import]").addEventListener("change",async v=>{let p=v.target.files?.[0];if(!p)return;if(!await Wt({title:"\u7528\u5099\u4EFD\u6A94\u53D6\u4EE3\u76EE\u524D\u8CC7\u6599\uFF1F",body:`\u76EE\u524D\u7684 ${w.state.items.length} \u4EF6\u5546\u54C1\u6703\u88AB\u300C${u(p.name)}\u300D\u7684\u5167\u5BB9\u53D6\u4EE3\u3002`,confirmText:"\u532F\u5165\u4E26\u53D6\u4EE3",danger:!0})){v.target.value="";return}try{let L=await p.text();w.importJSON(L);let P=JSON.parse(L).archivedTrips;Array.isArray(P)&&ra(P),mt(t),G({title:"\u5099\u4EFD\u5DF2\u532F\u5165",message:`\u5171 ${w.state.items.length} \u4EF6\u5546\u54C1`})}catch(L){G({title:"\u532F\u5165\u5931\u6557",message:`\u9019\u500B\u6A94\u6848\u4E0D\u662F\u6709\u6548\u7684\u5099\u4EFD\uFF1A${u(L.message)}`,tone:"error",duration:8e3})}}),a.addEventListener("submit",v=>{v.preventDefault();let p=a.elements,$=(S,D)=>S.value===""||Number.isNaN(Number(S.value))?D:Math.max(0,Number(S.value)),L=w.state.settings;w.updateSettings({tripName:p.tripName.value.trim()||L.tripName,budget:$(p.budget,L.budget),refundFeePct:$(p.refundFeePct,0),cardRebatePct:$(p.cardRebatePct,0),checkedLimit:$(p.checkedLimit,L.checkedLimit),checkedBase:$(p.checkedBase,L.checkedBase),carryLimit:$(p.carryLimit,L.carryLimit),carryBase:$(p.carryBase,L.carryBase)});let P=Number(p.rate.value);P>0&&Math.abs(P-w.state.settings.rate)>1e-9&&P!==e&&ga(P),mt(t),G({title:"\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}),Bt(t,{backdropClose:!1})}function lo(t){let a=document.createElement("div");a.className="theme-pop",a.id="theme-pop",a.setAttribute("role","dialog"),a.setAttribute("aria-label","\u5916\u89C0\u8207\u4E3B\u984C"),a.hidden=!0,document.body.appendChild(a),t.setAttribute("aria-controls","theme-pop");let e=()=>{a.innerHTML=`
      <p class="theme-pop-title" id="tp-l1">\u5916\u89C0</p>
      <div class="seg-pills" role="radiogroup" aria-labelledby="tp-l1">
        ${Be.map(r=>`<label class="pill"><input type="radio" name="pop-theme" value="${r.id}" ${be()===r.id?"checked":""}><span>${c(r.icon,"sm")}${r.label}</span></label>`).join("")}
      </div>
      <p class="theme-pop-title" id="tp-l2">\u4E3B\u984C</p>
      <div class="theme-pop-skins" role="radiogroup" aria-labelledby="tp-l2">
        ${ne.map(r=>`<label class="theme-pop-skin"><input type="radio" name="pop-skin" value="${r.id}" ${Ae()===r.id?"checked":""}>
          <span><i class="skin-dot" aria-hidden="true" style="--c1:${r.preview.light.accent};--c2:${r.preview.dark.bg}"></i>${u(r.label)}${c("check","sm")}</span></label>`).join("")}
      </div>`},s=()=>{let r=t.getBoundingClientRect(),i=a.offsetWidth;a.style.left=`${Math.max(12,Math.min(innerWidth-i-12,r.right-i))}px`,r.top>innerHeight/2?(a.style.top="auto",a.style.bottom=`${innerHeight-r.top+8}px`):(a.style.bottom="auto",a.style.top=`${r.bottom+8}px`)},n=(r=!1)=>{a.hidden||(a.hidden=!0,t.setAttribute("aria-expanded","false"),r&&t.focus())},o=()=>{e(),a.hidden=!1,t.setAttribute("aria-expanded","true"),s(),a.querySelector("input:checked")?.focus()};t.addEventListener("click",()=>a.hidden?o():n()),a.addEventListener("change",r=>{r.target.name==="pop-theme"&&Ea(r.target.value),r.target.name==="pop-skin"&&Ma(r.target.value)}),a.addEventListener("keydown",r=>{r.key==="Escape"&&(r.stopPropagation(),n(!0))}),document.addEventListener("pointerdown",r=>{!a.hidden&&!a.contains(r.target)&&!t.contains(r.target)&&n()}),a.addEventListener("focusout",r=>{r.relatedTarget&&!a.contains(r.relatedTarget)&&r.relatedTarget!==t&&n()}),addEventListener("hashchange",()=>n()),addEventListener("resize",()=>{a.hidden||s()})}function co(){let t=location.protocol==="https:"||["localhost","127.0.0.1"].includes(location.hostname);if("serviceWorker"in navigator&&t){let a=!navigator.serviceWorker.controller;navigator.serviceWorker.register("./sw.js").then(e=>{if(!a)return;let s=e.installing??e.waiting;s?.addEventListener("statechange",()=>{s.state==="activated"&&G({title:"\u5DF2\u53EF\u96E2\u7DDA\u4F7F\u7528",message:"\u4E4B\u5F8C\u5728\u65E5\u672C\u6C92\u6709\u7DB2\u8DEF\u4E5F\u80FD\u6253\u958B\u6E05\u55AE\u3002",tone:"muted",duration:4e3})})}).catch(e=>console.info("\u96E2\u7DDA\u5FEB\u53D6\u672A\u555F\u7528\uFF1A",e.message))}window.addEventListener("offline",()=>{G({title:"\u76EE\u524D\u96E2\u7DDA",message:"\u6E05\u55AE\u7167\u5E38\u53EF\u7528\uFF0C\u532F\u7387\u66AB\u7528\u4E0A\u6B21\u7684\u6578\u503C\u3002",tone:"muted",duration:4e3})}),window.addEventListener("online",()=>{G({title:"\u5DF2\u6062\u5FA9\u9023\u7DDA",tone:"muted",duration:2500})})}var bn={};xe(bn,{mount:()=>oi});var ot={cat:"all",status:"all",area:"all",who:"all",q:"",sort:"new",layout:"grid"};try{ot.layout=localStorage.getItem("shopping-relics:layout")||"grid"}catch{}function hn(t){let a=ot.q.trim().toLowerCase();return(ot.who==="all"||(ot.who==="__self__"?!t.buyFor:t.buyFor===ot.who))&&(!a||[t.name,t.nameJa,t.brand,...t.stores,t.purchasedStore,t.area,t.note,t.jan,t.buyFor].join(" ").toLowerCase().includes(a))}function ai(t,a){let e=t.filter(n=>hn(n)&&(ot.cat==="all"||n.category===ot.cat)&&(ot.status==="all"||(ot.status==="done"?n.purchased:!n.purchased))&&(ot.area==="all"||(n.area||"\u672A\u6307\u5B9A")===ot.area)),s={new:(n,o)=>o.createdAt-n.createdAt,priority:(n,o)=>o.priority-n.priority||o.createdAt-n.createdAt,price:(n,o)=>a.get(o.id).pay-a.get(n.id).pay,area:(n,o)=>(n.area||"~").localeCompare(o.area||"~","zh-Hant")||n.store.localeCompare(o.store,"zh-Hant")};return e=[...e].sort(s[ot.sort]),e.sort((n,o)=>Number(n.purchased)-Number(o.purchased))}function uo({state:t,sum:a,rate:e}){let{settings:s}=t,n=a.count?a.purchasedCount/a.count:0;return`
    ${se({label:"\u63A1\u8CB7\u9032\u5EA6",icon:"verified",value:a.purchasedCount,unit:` / ${a.count} \u4EF6`,bar:me(n,{label:"\u63A1\u8CB7\u9032\u5EA6"}),foot:`<span>${a.purchasedCount} \u4EF6\u5DF2\u8CB7</span><span>${a.pendingCount} \u4EF6\u5F85\u8CB7</span>`})}
    ${se({label:"\u5DF2\u82B1\u8CBB",icon:"account_balance_wallet",value:y(a.paid),unit:` / ${y(s.budget)}`,bar:ge([{value:a.paid,tone:"paid"},{value:a.pending,tone:"later"}],s.budget,`\u9810\u7B97 ${y(s.budget)}\uFF1A\u5DF2\u82B1 ${y(a.paid)}\uFF0C\u5F85\u8CB7 ${y(a.pending)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${y(a.pay)}</span><span class="${a.remaining<0?"text-danger":""}">${a.remaining<0?"\u5C07\u8D85\u652F":"\u8CB7\u5B8C\u5269"} ${y(Math.abs(a.remaining))}</span>`})}
    ${se({label:"\u9810\u4F30\u9000\u7A05",icon:"price_check",value:y(a.refund),foot:`<span>${a.eligibleStores} / ${a.taxFreeStores} \u5BB6\u5E97\u9054\u9580\u6ABB</span><span>\u2248 ${$t(a.refund,e)}</span>`,tone:"kpi-cyan"})}
    ${se({label:"\u8A17\u904B\u884C\u674E\uFF08\u76EE\u524D\uFF09",icon:"luggage",value:ut(a.totalCheckedNow,1),unit:` / ${s.checkedLimit} kg`,bar:ge([{value:s.checkedBase,tone:"base"},{value:a.weightCheckedNow,tone:"paid"},{value:a.weightChecked-a.weightCheckedNow,tone:"later"}],s.checkedLimit,`\u8A17\u904B\u9650\u91CD ${s.checkedLimit} \u516C\u65A4\uFF1A\u76EE\u524D ${ut(a.totalCheckedNow,1)}\uFF0C\u5168\u90E8\u8CB7\u5B8C ${ut(a.totalChecked,1)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${Vt(a.totalChecked)}</span><span>${a.totalChecked>s.checkedLimit?'<b class="text-danger">\u8CB7\u5B8C\u6703\u8D85\u91CD</b>':`\u8CB7\u5B8C\u5269 ${Vt(s.checkedLimit-a.totalChecked)}`}</span>`})}`}function po(t){let a=[...new Set(t.map(e=>e.buyFor).filter(Boolean))].sort((e,s)=>e.localeCompare(s,"zh-Hant"));return ot.who!=="all"&&ot.who!=="__self__"&&!a.includes(ot.who)&&(ot.who="all"),`<div class="select-wrap">
    <label for="f-who" class="sr-only">\u5E6B\u8AB0\u8CB7</label>
    <select id="f-who">
      <option value="all">\u5168\u90E8\u5C0D\u8C61</option>
      <option value="__self__" ${ot.who==="__self__"?"selected":""}>\u81EA\u7528</option>
      ${a.map(e=>`<option value="${u(e)}" ${ot.who===e?"selected":""}>@${u(e)}</option>`).join("")}
    </select></div>`}function fo(){return`<div class="search">
    <label for="f-q" class="sr-only">\u641C\u5C0B\u5546\u54C1</label>
    ${c("search")}
    <input id="f-q" type="search" placeholder="\u641C\u5C0B\u54C1\u540D\u3001\u54C1\u724C\u3001\u5E97\u5BB6\u3001\u670B\u53CB\u2026" value="${u(ot.q)}" autocomplete="off">
  </div>`}function mo(t,a){if(a==="store")return`<div class="card toolbar"><div class="filters filters-store">${fo()}${po(t)}</div></div>`;let e=Object.fromEntries(ke.map(o=>[o.id,0]));t.forEach(o=>{e[o.category]=(e[o.category]??0)+1});let s=[...new Set(t.map(o=>o.area||"\u672A\u6307\u5B9A"))].sort((o,r)=>o.localeCompare(r,"zh-Hant"));ot.area!=="all"&&!s.includes(ot.area)&&(ot.area="all");let n=ke.filter(o=>e[o.id]>0);return ot.cat!=="all"&&!e[ot.cat]&&(ot.cat="all"),`
  <div class="card toolbar">
    <div class="chips" role="group" aria-label="\u4F9D\u5206\u985E\u7BE9\u9078">
      <button type="button" class="chip ${ot.cat==="all"?"on":""}" data-cat="all" aria-pressed="${ot.cat==="all"}">${c("diamond","sm")}\u5168\u90E8 (${t.length})</button>
      ${n.map(o=>`<button type="button" class="chip ${ot.cat===o.id?"on":""}" data-cat="${o.id}" aria-pressed="${ot.cat===o.id}">${c(o.icon,"sm")}${o.label} (${e[o.id]})</button>`).join("")}
    </div>
    <div class="filters">
      ${fo()}
      ${po(t)}
      <div class="select-wrap">
        <label for="f-status" class="sr-only">\u72C0\u614B</label>
        <select id="f-status">
          <option value="all">\u5168\u90E8\u72C0\u614B</option>
          <option value="todo" ${ot.status==="todo"?"selected":""}>\u5F85\u8CB7</option>
          <option value="done" ${ot.status==="done"?"selected":""}>\u5DF2\u8CB7</option>
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-area" class="sr-only">\u5730\u5340</label>
        <select id="f-area">
          <option value="all">\u5168\u90E8\u5730\u5340</option>
          ${s.map(o=>`<option ${ot.area===o?"selected":""}>${u(o)}</option>`).join("")}
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-sort" class="sr-only">\u6392\u5E8F</label>
        <select id="f-sort">
          <option value="new">\u6700\u65B0\u52A0\u5165</option>
          <option value="priority" ${ot.sort==="priority"?"selected":""}>\u512A\u5148\u5EA6</option>
          <option value="price" ${ot.sort==="price"?"selected":""}>\u50F9\u683C\u9AD8\u5230\u4F4E</option>
          <option value="area" ${ot.sort==="area"?"selected":""}>\u5730\u5340\u8207\u5E97\u5BB6</option>
        </select>
      </div>
      <div class="seg" role="group" aria-label="\u986F\u793A\u65B9\u5F0F">
        <button type="button" class="icon-btn ${ot.layout==="grid"?"on":""}" data-layout="grid" aria-pressed="${ot.layout==="grid"}" aria-label="\u5361\u7247\u986F\u793A" title="\u5361\u7247\u986F\u793A">${c("grid_view")}</button>
        <button type="button" class="icon-btn ${ot.layout==="list"?"on":""}" data-layout="list" aria-pressed="${ot.layout==="list"}" aria-label="\u5217\u8868\u986F\u793A" title="\u5217\u8868\u986F\u793A">${c("view_list")}</button>
      </div>
    </div>
  </div>`}function go(t){return t.state.settings.listView==="store"?Ks(t,hn):ni(t)}function ni({state:t,sum:a,rate:e}){let s=ai(t.items,a.byItem),n=`<p class="result-count" role="status">\u986F\u793A ${s.length} / ${t.items.length} \u4EF6</p>`;return s.length?`${n}<div class="item-grid layout-${ot.layout}">${s.map(o=>Ns(o,a.byItem.get(o.id),e,ot.layout)).join("")}</div>`:`${n}<div class="card empty empty-sm"><p class="empty-text">\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5546\u54C1\u3002</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${c("filter_alt_off")}\u6E05\u9664\u7BE9\u9078</button></div>`}function si({state:t,sum:a}){let e=["\u72C0\u614B","\u54C1\u540D","\u65E5\u6587\u540D\u7A31","\u54C1\u724C","\u5206\u985E","\u6578\u91CF","\u5E6B\u8AB0\u8CB7","\u5019\u9078\u5E97\u92EA","\u8CFC\u8CB7\u5E97\u5BB6","\u5730\u5340","\u9810\u8A08\u65E5\u671F","\u5E97\u982D\u652F\u4ED8(JPY)","\u9810\u4F30\u9000\u7A05(JPY)","\u5BE6\u969B\u6210\u672C(JPY)","\u53F0\u5E63(\u7D04)","\u91CD\u91CF(kg)","\u884C\u674E","JAN","\u5099\u8A3B"],s={checked:"\u8A17\u904B",carry:"\u96A8\u8EAB",none:"\u4E0D\u653E\u884C\u674E"},n=t.items.map(r=>{let i=a.byItem.get(r.id);return[r.purchased?"\u5DF2\u8CB7":"\u5F85\u8CB7",r.name,r.nameJa,r.brand,te(r.category).label,r.qty,r.buyFor,r.anyStore?"\u4E0D\u9650\u5E97\u92EA":r.stores.join("\u3001"),r.purchasedStore,r.area,r.planDate,i.pay,i.refund,i.net,Math.round(i.pay*t.settings.rate),i.weight,s[r.luggage],r.jan,r.note]}),o=[e,...n].map(r=>r.map(i=>`"${String(i??"").replace(/"/g,'""')}"`).join(",")).join(`\r
`);ba(`shopping-list-${new Date().toISOString().slice(0,10)}.csv`,`\uFEFF${o}`,"text/csv")}function oi(t,a){let e=a,s=()=>{t.dataset.view=e.state.settings.listView;let{state:o}=e,r=o.settings.listView,i=o.items.length>0,l=o.items.some(d=>d.demo);t.innerHTML=`
      ${Ht({eyebrow:`SHOPPING LIST \xB7 ${u(o.settings.tripName)}`,title:"\u63A1\u8CB7\u6E05\u55AE",sub:"\u884C\u524D\u898F\u5283\u3001\u73FE\u5834\u6383\u8CA8\u90FD\u5728\u9019\u9801\uFF1A\u9032\u5E97\u6642\u5207\u5230\u300C\u5E97\u92EA\u300D\u6253\u958B\u8A72\u5E97\u6E05\u55AE\u908A\u62FF\u908A\u52FE\uFF0C\u627E\u6771\u897F\u7528\u300C\u5206\u985E\u300D\u3002",subShort:"\u9032\u5E97\u5207\u5230\u300C\u5E97\u92EA\u300D\u908A\u62FF\u908A\u52FE\uFF0C\u627E\u6771\u897F\u7528\u300C\u5206\u985E\u300D\u3002",actions:i?`
          <div class="seg seg-text view-switch" role="group" aria-label="\u6E05\u55AE\u8996\u89D2">
            <button type="button" data-view="store" class="${r==="store"?"on":""}" aria-pressed="${r==="store"}">${c("storefront","sm")}\u5E97\u92EA</button>
            <button type="button" data-view="category" class="${r==="category"?"on":""}" aria-pressed="${r==="category"}">${c("category","sm")}\u5206\u985E</button>
          </div>
          <button type="button" class="btn btn-ghost" data-export>${c("download")}\u532F\u51FA CSV</button>
          <button type="button" class="btn btn-gold" data-add>${c("add_circle")}\u65B0\u589E\u5546\u54C1</button>`:""})}
      ${l?`<div class="notice notice-demo" role="note">${c("info")}<p>\u76EE\u524D\u6E05\u55AE\u542B<strong>\u793A\u7BC4\u8CC7\u6599</strong>\uFF0C\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u4E0D\u4EE3\u8868\u5BE6\u969B\u552E\u50F9\u3002</p>
        <button type="button" class="btn btn-sm btn-ghost" data-clear-demo>\u6E05\u9664\u793A\u7BC4\u8CC7\u6599</button></div>`:""}
      <div class="kpi-grid" data-region="kpi" role="group" aria-label="\u6E05\u55AE\u7D71\u8A08">${uo(e)}</div>
      ${i?`<div data-region="toolbar">${mo(o.items,r)}</div><div data-region="grid">${go(e)}</div>`:Ue({title:"\u6E05\u55AE\u9084\u662F\u7A7A\u7684",text:"\u5148\u8A18\u4E0B\u7B2C\u4E00\u4EF6\u60F3\u8CB7\u7684\u5546\u54C1\u5427\u3002\u4E5F\u53EF\u4EE5\u8F09\u5165\u793A\u7BC4\u8CC7\u6599\uFF0C\u770B\u770B\u6574\u500B\u6D41\u7A0B\u600E\u9EBC\u904B\u4F5C\u3002",actions:`<button type="button" class="btn btn-gold" data-add>${c("add_circle")}\u65B0\u589E\u7B2C\u4E00\u4EF6</button>
                    <button type="button" class="btn btn-ghost" data-demo>${c("auto_awesome")}\u8F09\u5165\u793A\u7BC4\u8CC7\u6599</button>`})}`},n=()=>{let o=vt('[data-region="grid"]',t);o&&(o.innerHTML=go(e))};return s(),Ge(t),Ys(t,{onMeta:ls,filterFn:hn}),t.addEventListener("click",o=>{let r=o.target.closest("button");if(r)if(r.matches("[data-add]"))Jt();else if(r.matches("[data-demo]"))w.loadDemo(),G({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u96A8\u6642\u6E05\u9664\u3002"});else if(r.matches("[data-clear-demo]"))w.clearDemo(),G({title:"\u5DF2\u6E05\u9664\u793A\u7BC4\u8CC7\u6599",tone:"muted",duration:3e3});else if(r.matches("[data-export]"))si(e);else if(r.matches("[data-view]"))w.updateSettings({listView:r.dataset.view}),vt(`[data-view="${r.dataset.view}"]`,t)?.focus();else if(r.matches("[data-cat]"))ot.cat=r.dataset.cat,_e("[data-cat]",t).forEach(i=>{i.classList.toggle("on",i===r),i.setAttribute("aria-pressed",i===r)}),n();else if(r.matches("[data-layout]")){ot.layout=r.dataset.layout;try{localStorage.setItem("shopping-relics:layout",ot.layout)}catch{}_e("[data-layout]",t).forEach(i=>{i.classList.toggle("on",i===r),i.setAttribute("aria-pressed",i===r)}),n()}else r.matches("[data-reset-filter]")&&(Object.assign(ot,{cat:"all",status:"all",area:"all",who:"all",q:""}),s())}),t.addEventListener("input",o=>{o.target.id==="f-q"&&(ot.q=o.target.value,n())}),t.addEventListener("change",o=>{let r={"f-status":"status","f-area":"area","f-sort":"sort","f-who":"who"};r[o.target.id]&&(ot[r[o.target.id]]=o.target.value,n())}),{update(o){e=o;let r=!!vt('[data-region="toolbar"]',t),i=!!vt(".notice-demo",t);if(t.dataset.view!==o.state.settings.listView||r!==o.state.items.length>0||i!==o.state.items.some(L=>L.demo)){s();return}let m=vt('[data-region="kpi"]',t),h=Ne(m,".kpi-value");m.innerHTML=uo(e),De(m,".kpi-value",h);let f=vt('[data-region="toolbar"]',t);f&&!f.contains(document.activeElement)&&(f.innerHTML=mo(e.state.items,e.state.settings.listView));let k=document.activeElement,g=k?.closest?.("[data-id]"),v=k?.closest?.("[data-group]"),p=v?`[data-group="${CSS.escape(v.dataset.group)}"] `:"",$=g?`${p}[data-id="${g.dataset.id}"] [data-act="${k.dataset.act}"]`:null;!$&&k?.matches?.("[data-sg-open]")&&($=`${p}[data-sg-open]`),n(),$&&vt($,t)?.focus({preventScroll:!0})}}}var kn={};xe(kn,{addExtra:()=>vn,mount:()=>ui,unpaidFriendCount:()=>xn});function Na(t,a){let e=t.settings.paidFriends[a.name];return typeof e=="number"?e:e?a.total:0}function vn(t=""){Jt(null,{buyFor:t,purchased:!0,mode:"extra"})}function wn(t,a){let e=new Map;for(let n of t.items){if(!n.buyFor)continue;e.has(n.buyFor)||e.set(n.buyFor,{name:n.buyFor,bought:[],pending:[],total:0,refund:0,pendingEst:0});let o=e.get(n.buyFor),r=a.byItem.get(n.id);n.purchased?(o.bought.push({item:n,amount:r.net,refund:r.refund,pay:r.pay}),o.total+=r.net,o.refund+=r.refund):(o.pending.push({item:n,amount:r.net}),o.pendingEst+=r.net)}let s=t.settings.friendMeta||{};for(let n of e.values()){let o=s[n.name]||{};n.goods=n.total,n.feePct=Number(o.feePct)||0,n.feeFixed=Number(o.feeFixed)||0,n.fee=n.bought.length?Math.round(n.goods*n.feePct/100)+n.feeFixed:0,n.total=n.goods+n.fee,n.rateLocked=Number(o.rate)>0,n.rate=n.rateLocked?Number(o.rate):t.settings.rate,n.rateAt=o.rateAt||null}return[...e.values()].sort((n,o)=>o.total-n.total||n.name.localeCompare(o.name,"zh-Hant"))}var Da=t=>[t.feePct?`${ut(t.feePct,t.feePct%1?1:0)}%`:"",t.feeFixed?y(t.feeFixed):""].filter(Boolean).join(" + ");function ri(t){let a=t.rate,e=[`\u3010\u4EE3\u8CFC\u660E\u7D30\u3011${t.name}`];return t.bought.forEach(({item:s,amount:n},o)=>{e.push(`${o+1}. ${s.name}${s.qty>1?` \xD7${s.qty}`:""}\u3000${y(n)}`)}),t.fee&&e.push(`\u4EE3\u8CFC\u8CBB\uFF08${Da(t)}\uFF09\u3000${y(t.fee)}`),e.push(`\u5408\u8A08 ${y(t.total)}\uFF08\u7D04 NT$ ${ut(t.total*a)}\uFF0C\u532F\u7387 1 JPY = ${ut(a,4)} TWD${t.rateLocked?"\uFF0C\u5DF2\u9396\u5B9A":""}\uFF09`),t.refund&&e.push(`\uFF0A\u91D1\u984D\u70BA\u6263\u9664\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C\uFF08\u5DF2\u6263\u9000\u7A05 ${y(t.refund)}\uFF09`),t.paid>0&&t.paid<t.total&&e.push(`\u5DF2\u6536 ${y(t.paid)}\uFF0C\u5C1A\u5DEE ${y(t.total-t.paid)}`),t.pending.length&&e.push(`\u5C1A\u672A\u8CB7\u5230\uFF1A${t.pending.map(({item:s})=>s.name).join("\u3001")}`),e.join(`
`)}function ho({item:t,amount:a,refund:e,pay:s},n){return`
  <li class="split-row ${n?"":"is-pending"}" data-id="${t.id}">
    <button type="button" class="check ${n?"on":""}" data-act="toggle" role="checkbox" aria-checked="${n}"
      aria-label="${n?"\u5DF2\u8CB7":"\u6A19\u8A18\u5DF2\u8CB7"}\uFF1A${u(t.name)}">${c("check")}</button>
    <div class="split-main">
      <button type="button" class="split-name" data-act="open">${u(t.name)}${t.qty>1?` <small>\xD7 ${t.qty}</small>`:""}</button>
      <span class="split-at">${n?`${t.purchasedStore?u(t.purchasedStore):"\u672A\u8A18\u9304\u5E97\u5BB6"}${e?` \xB7 \u4ED8 ${y(s)}\uFF0C\u6263\u9000\u7A05 ${y(e)}`:""}`:`\u5F85\u8CB7 \xB7 ${t.anyStore?"\u4E0D\u9650\u5E97\u92EA":t.stores.length?u(t.stores.join("\u3001")):"\u672A\u9078\u5E97\u92EA"}`}</span>
    </div>
    <span class="split-amt ${n?"":"muted"}">${n?"":"\u7D04 "}${y(a)}</span>
    <div class="split-tools">
      <button type="button" class="icon-btn icon-btn-sm" data-act="edit" aria-label="\u7DE8\u8F2F ${u(t.name)}" title="\u7DE8\u8F2F">${c("edit","sm")}</button>
      <button type="button" class="icon-btn icon-btn-sm icon-btn-danger" data-act="delete" aria-label="\u522A\u9664 ${u(t.name)}" title="\u522A\u9664">${c("delete","sm")}</button>
    </div>
  </li>`}function $n(t,a){let e=t.settings.payLog?.[a.name];if(Array.isArray(e)&&e.length)return e;let s=Na(t,a);return s>0?[{amount:s,at:null}]:[]}function ii(t,a,e,s){if(!t.total&&!t.paid)return"";let n=$n(a,t),o=Math.max(0,t.total-t.paid);return`
  <div class="pay-block">
    ${n.length?`<p class="split-sub">${c("payments","sm")}\u6536\u6B3E\u8A18\u9304</p>
    <ul class="pay-log">
      ${n.map((r,i)=>`<li><span class="muted small">${r.at?Ot(r.at):"\u5148\u524D\u8A18\u9304"}</span><strong>${y(r.amount)}</strong>
        <button type="button" class="icon-btn icon-btn-sm" data-pay-del="${i}" aria-label="\u522A\u9664\u9019\u7B46\u6536\u6B3E ${y(r.amount)}" title="\u522A\u9664\u9019\u7B46">${c("close","sm")}</button></li>`).join("")}
    </ul>`:""}
    ${s?"":`<form class="inline-form pay-form" data-pay-add novalidate>
      <label for="pay-${e}">\u8A18\u9304\u6536\u6B3E</label>
      <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="pay-${e}" name="amount" type="number" inputmode="numeric" min="1" step="1" placeholder="\u5C1A\u5DEE ${ut(o)}" autocomplete="off"></div>
      <button type="submit" class="btn btn-slate btn-sm">\u8A18\u9304</button>
    </form>`}
  </div>`}var yn=new Set;function li(t,a,e){if(!t.bought.length&&!t.pending.length)return"";let s=a.settings.rate;return`
  <details class="friend-more" data-more ${yn.has(t.name)?"open":""}>
    <summary>${c("tune","sm")}\u4EE3\u8CFC\u8CBB\u8207\u532F\u7387<span class="muted small">${[t.fee?`\u4EE3\u8CFC\u8CBB ${Da(t)}`:"",t.rateLocked?`\u532F\u7387\u9396\u5B9A ${ut(t.rate,4)}`:""].filter(Boolean).join(" \xB7 ")||"\u672A\u8A2D\u5B9A"}</span></summary>
    <form class="fee-form" data-fee novalidate>
      <div class="field"><label for="fee-pct-${e}">\u4EE3\u8CFC\u8CBB %</label>
        <input id="fee-pct-${e}" name="feePct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${t.feePct||""}" placeholder="0"></div>
      <div class="field"><label for="fee-fixed-${e}">\u56FA\u5B9A\u91D1\u984D\uFF08\u65E5\u5713\uFF09</label>
        <input id="fee-fixed-${e}" name="feeFixed" type="number" inputmode="numeric" min="0" step="100" value="${t.feeFixed||""}" placeholder="0"></div>
      <button type="submit" class="btn btn-slate btn-sm">${c("save","sm")}\u5132\u5B58\u4EE3\u8CFC\u8CBB</button>
    </form>
    <p class="hint">\u4EE3\u8CFC\u8CBB\uFF1D\u5DF2\u8CB7\u5546\u54C1\u91D1\u984D \xD7 \u767E\u5206\u6BD4\uFF0B\u56FA\u5B9A\u91D1\u984D\uFF0C\u6703\u52A0\u9032\u61C9\u6536\u91D1\u984D\u8207\u660E\u7D30\u3002</p>
    <div class="rate-lock">
      <p>${t.rateLocked?`\u63DB\u7B97\u532F\u7387\u5DF2\u9396\u5B9A\uFF1A<strong>1 JPY = ${ut(t.rate,4)} TWD</strong>${t.rateAt?`<span class="muted small">\uFF08${Ot(t.rateAt)} \u9396\u5B9A\uFF09</span>`:""}`:`\u63DB\u7B97\u532F\u7387\u8DDF\u96A8\u76EE\u524D\u532F\u7387\uFF1A<strong>1 JPY = ${ut(s,4)} TWD</strong>`}</p>
      ${t.rateLocked?`<button type="button" class="btn btn-ghost btn-sm" data-rate-unlock>${c("undo","sm")}\u89E3\u9664\u9396\u5B9A</button>`:`<button type="button" class="btn btn-ghost btn-sm" data-rate-lock>${c("verified","sm")}\u9396\u5B9A\u76EE\u524D\u532F\u7387</button>`}
    </div>
    <p class="hint">\u9396\u5B9A\u5F8C\uFF0C\u9019\u4F4D\u670B\u53CB\u7684\u53F0\u5E63\u91D1\u984D\u4E0D\u6703\u518D\u96A8\u532F\u7387\u66F4\u65B0\u800C\u8B8A\u52D5\u3002</p>
  </details>`}function ci(t,a){let e={v:1,n:t.name,t:a,r:t.rate,l:t.rateLocked?1:0,at:Date.now(),i:t.bought.map(({item:r,amount:i})=>[r.name,r.qty,Math.round(i)]),p:t.pending.map(({item:r})=>r.name),g:Math.round(t.goods),f:t.fee,fd:t.fee?Da(t):"",rf:Math.round(t.refund),pd:Math.round(t.paid)},s=new TextEncoder().encode(JSON.stringify(e)),n="";s.forEach(r=>{n+=String.fromCharCode(r)});let o=btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");return`${location.href.split("#")[0]}#/share/${o}`}function di(t,a,e){let{rate:s}=a.settings,n=t.paid,o=t.total>0&&n>=t.total,r=n>0&&n<t.total,i;return o?i=`<span class="badge badge-cyan">${c("check_circle","sm")}\u5DF2\u6536\u9F4A ${y(n)}</span>`:r?i=`<span class="badge badge-warn">\u5DF2\u6536 ${y(n)}\uFF0C\u5C1A\u5DEE ${y(t.total-n)}</span>`:i=t.total?'<span class="badge badge-muted">\u5C1A\u672A\u6536\u6B3E</span>':"",`
  <section class="card friend-card ${o?"is-paid":""}" data-friend="${u(t.name)}" aria-labelledby="fr-${e}">
    <header class="card-head">
      <div class="friend-title">
        <span class="friend-avatar" aria-hidden="true">${u(t.name.slice(0,1))}</span>
        <div>
          <h2 id="fr-${e}" class="section-title-lg">@${u(t.name)}</h2>
          <p class="muted small">\u5DF2\u8CB7 ${t.bought.length} \u4EF6${t.pending.length?` \xB7 \u5F85\u8CB7 ${t.pending.length} \u4EF6\uFF08\u7D04 ${y(t.pendingEst)}\uFF09`:""}</p>
        </div>
      </div>
      <div class="friend-total">
        <span class="k">\u61C9\u6536</span>
        <strong>${y(t.total)}</strong>
        <span class="s">\u2248 ${$t(t.total,t.rate)}${t.rateLocked?" \xB7 \u532F\u7387\u5DF2\u9396\u5B9A":""}</span>
        ${i?`<span class="pay-state">${i}</span>`:""}
      </div>
    </header>
    ${t.bought.length?`<ul class="split-list">${t.bought.map(l=>ho(l,!0)).join("")}</ul>`:'<p class="muted pad">\u9084\u6C92\u6709\u5DF2\u8CB7\u7684\u5546\u54C1\u3002</p>'}
    ${t.pending.length?`<p class="split-sub">${c("pending","sm")}\u5F85\u8CB7</p><ul class="split-list">${t.pending.map(l=>ho(l,!1)).join("")}</ul>`:""}
    ${t.fee?`<p class="fee-row"><span>${c("percent","sm")}\u4EE3\u8CFC\u8CBB\uFF08${Da(t)}\uFF09</span><strong>${y(t.fee)}</strong></p>`:""}
    ${ii(t,a,e,o)}
    ${li(t,a,e)}
    <button type="button" class="btn btn-ghost btn-sm split-extra" data-extra>${c("add_circle","sm")}\u5E6B @${u(t.name)} \u52A0\u8CFC</button>
    ${t.bought.length||t.total?`<div class="friend-actions">
      ${t.bought.length?`<button type="button" class="btn ${o?"btn-ghost":"btn-gold"}" data-copy>${c("content_copy")}\u8907\u88FD\u660E\u7D30</button>`:""}
      ${t.total?o?`<button type="button" class="btn btn-ghost" data-unpaid>${c("undo")}\u53D6\u6D88\u5DF2\u6536\u6B3E</button>`:`<button type="button" class="btn btn-outline" data-paid>${c("check_circle")}${r?`\u6536\u9F4A\u5DEE\u984D ${y(t.total-n)}`:`\u6A19\u8A18\u5DF2\u6536 ${y(t.total)}`}</button>`:""}
      ${t.bought.length?`<button type="button" class="btn btn-ghost" data-link>${c("share")}\u8907\u88FD\u5206\u4EAB\u9023\u7D50</button>`:""}
      ${navigator.share&&t.bought.length?`<button type="button" class="btn btn-ghost" data-share>${c("share")}\u5206\u4EAB\u6587\u5B57</button>`:""}
    </div>`:""}
  </section>`}function bo({state:t,sum:a}){let e=wn(t,a);e.forEach(l=>{l.paid=Na(t,l)});let{rate:s}=t.settings;if(!e.length)return Ue({title:"\u9084\u6C92\u6709\u4EE3\u8CFC\u5546\u54C1",text:"\u65B0\u589E\u5546\u54C1\u6642\u5728\u300C\u5E6B\u8AB0\u8CB7\u300D\u586B\u4E0A\u670B\u53CB\u540D\u5B57\uFF0C\u6216\u76F4\u63A5\u6309\u300C\u81E8\u6642\u52A0\u8CFC\u300D\u8A18\u4E0B\u525B\u5E6B\u670B\u53CB\u8CB7\u7684\u6771\u897F\uFF0C\u9019\u88E1\u5C31\u6703\u81EA\u52D5\u4F9D\u4EBA\u52A0\u7E3D\u3001\u63DB\u7B97\u53F0\u5E63\u3002",actions:`<button type="button" class="btn btn-gold" data-extra-new>${c("add_circle")}\u81E8\u6642\u52A0\u8CFC</button>
                <a class="btn btn-ghost" href="#/list">${c("shopping_bag")}\u56DE\u63A1\u8CB7\u6E05\u55AE</a>`});let n=e.reduce((l,d)=>l+d.total,0),o=e.reduce((l,d)=>l+Math.min(d.paid,d.total),0),r=l=>`NT$ ${ut(e.reduce((d,m)=>d+l(m)*m.rate,0))}`,i=e.reduce((l,d)=>l+d.pending.length,0);return`
  <div class="kpi-grid" role="group" aria-label="\u4EE3\u8CFC\u7D71\u8A08">
    ${se({label:"\u4EE3\u8CFC\u7E3D\u984D\uFF08\u5DF2\u8CB7\uFF09",icon:"payments",value:y(n),foot:`<span>\u2248 ${r(l=>l.total)}</span>`})}
    ${se({label:"\u5DF2\u6536\u6B3E",icon:"check_circle",value:y(o),foot:`<span>\u2248 ${r(l=>Math.min(l.paid,l.total))}</span>`,tone:"kpi-cyan"})}
    ${se({label:"\u5F85\u6536\u6B3E",icon:"pending",value:y(n-o),foot:`<span>\u2248 ${r(l=>l.total-Math.min(l.paid,l.total))}</span>`})}
    ${se({label:"\u59D4\u8A17\u7684\u670B\u53CB",icon:"group",value:e.length,unit:" \u4F4D",foot:`<span>${i?`\u9084\u6709 ${i} \u4EF6\u5F85\u8CB7`:"\u5168\u90E8\u8CB7\u9F4A"}</span>`})}
  </div>
  <div class="notice" role="note">${c("info")}<p>\u91D1\u984D\u4F9D<strong>\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C</strong>\u8A08\u7B97\uFF0C\u4EE5\u76EE\u524D\u532F\u7387\u63DB\u7B97\u53F0\u5E63\uFF08\u5DF2\u9396\u5B9A\u532F\u7387\u7684\u670B\u53CB\u9664\u5916\uFF09\u3002</p>
    <details class="notice-more"><summary>\u4E86\u89E3\u8A08\u7B97\u65B9\u5F0F</summary><p>\u9000\u7A05\u70BA\u9810\u4F30\u503C\uFF0C\u5BE6\u969B\u4EE5\u51FA\u5883\u67E5\u9A57\u5F8C\u7684\u9000\u6B3E\u70BA\u6E96\u3002\u6536\u6B3E\u5F8C\u53C8\u52A0\u8CB7\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u300C\u5C1A\u5DEE\u300D\u91D1\u984D\u3002</p></details></div>
  <div class="friend-grid">${e.map((l,d)=>di(l,t,d)).join("")}</div>`}function xn(t,a){return wn(t,a).filter(e=>e.total>0&&Na(t,e)<e.total).length}function ui(t,a){let e=a;t.innerHTML=`
    ${Ht({eyebrow:`PROXY LEDGER \xB7 ${u(w.state.settings.tripName)}`,title:"\u4EE3\u8CFC\u5206\u5E33",sub:"\u4E3B\u6E05\u55AE\u6A19\u4E86 @\u670B\u53CB \u7684\u5546\u54C1\u6703\u81EA\u52D5\u6574\u7406\u5728\u9019\u88E1\uFF1B\u53EF\u76F4\u63A5\u52FE\u9078\u3001\u7DE8\u8F2F\uFF0C\u6216\u81E8\u6642\u52A0\u8CFC\uFF0C\u56DE\u98EF\u5E97\u6216\u56DE\u570B\u5F8C\u4E00\u9375\u8907\u88FD\u660E\u7D30\u50B3\u7D66\u670B\u53CB\u3002",subShort:"\u6A19\u4E86 @\u670B\u53CB \u7684\u5546\u54C1\u6703\u6574\u7406\u5728\u9019\u88E1\uFF0C\u8CB7\u5B8C\u4E00\u9375\u8907\u88FD\u660E\u7D30\u50B3\u7D66\u670B\u53CB\u3002",actions:`<button type="button" class="btn btn-gold" data-extra-new>${c("add_circle")}\u81E8\u6642\u52A0\u8CFC</button>`})}
    <div data-region="main">${bo(e)}</div>`;let s=vt('[data-region="main"]',t),n=l=>{let d=wn(e.state,e.sum).find(m=>m.name===l.closest("[data-friend]")?.dataset.friend);return d&&(d.paid=Na(e.state,d)),d};Ge(t);let o=(l,d)=>w.updateSettings({payLog:{...e.state.settings.payLog,[l]:d},paidFriends:{...e.state.settings.paidFriends,[l]:d.reduce((m,h)=>m+h.amount,0)}}),r=(l,d)=>o(l.name,[...$n(e.state,l),{amount:d,at:Date.now()}]),i=(l,d)=>w.updateSettings({friendMeta:{...e.state.settings.friendMeta,[l]:{...e.state.settings.friendMeta?.[l],...d}}});return t.addEventListener("click",async l=>{let d=l.target.closest("button");if(!d||d.closest("[data-id]"))return;if(d.matches("[data-extra-new]")){vn();return}let m=n(d);if(!m)return;if(d.matches("[data-extra]")){vn(m.name);return}if(d.matches("[data-paid]")){r(m,Math.max(0,m.total-m.paid)),G({title:`@${m.name} \u5DF2\u6536\u9F4A`,message:`\u5171 ${y(m.total)}`,tone:"muted",duration:2500});return}if(d.matches("[data-unpaid]")){o(m.name,[]);return}if(d.matches("[data-rate-lock]")){i(m.name,{rate:e.state.settings.rate,rateAt:Date.now()}),G({title:`\u5DF2\u9396\u5B9A @${m.name} \u7684\u532F\u7387`,message:`1 JPY = ${ut(e.state.settings.rate,4)} TWD`,tone:"muted",duration:3e3});return}if(d.matches("[data-rate-unlock]")){i(m.name,{rate:0,rateAt:null}),G({title:`@${m.name} \u6539\u56DE\u8DDF\u96A8\u76EE\u524D\u532F\u7387`,tone:"muted",duration:3e3});return}if(d.matches("[data-link]")){let f=ci(m,e.state.settings.tripName);try{await navigator.clipboard.writeText(f),G({title:`\u5DF2\u8907\u88FD @${m.name} \u7684\u5206\u4EAB\u9023\u7D50`,message:"\u5C0D\u65B9\u6253\u958B\u9023\u7D50\u5C31\u80FD\u770B\u5230\u9019\u4EFD\u660E\u7D30\uFF08\u552F\u8B80\uFF0C\u5167\u5BB9\u662F\u73FE\u5728\u9019\u4E00\u523B\u7684\u5FEB\u7167\uFF09\u3002",tone:"muted",duration:4e3})}catch{if(navigator.share)try{await navigator.share({title:`\u4EE3\u8CFC\u660E\u7D30\uFF1A${m.name}`,url:f})}catch{}else G({title:"\u7121\u6CD5\u8907\u88FD\u9023\u7D50",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\u3002",tone:"error"})}return}if(d.dataset.payDel!==void 0){let f=$n(e.state,m).filter((k,g)=>g!==Number(d.dataset.payDel));o(m.name,f),G({title:"\u5DF2\u522A\u9664\u4E00\u7B46\u6536\u6B3E",tone:"muted",duration:2500});return}let h=ri(m,e.state.settings.rate);if(d.matches("[data-copy]"))try{await navigator.clipboard.writeText(h),G({title:`\u5DF2\u8907\u88FD @${m.name} \u7684\u660E\u7D30`,message:"\u8CBC\u5230 LINE \u6216\u8A0A\u606F\u50B3\u7D66\u670B\u53CB\u5373\u53EF\u3002",tone:"muted",duration:3e3})}catch{G({title:"\u7121\u6CD5\u8907\u88FD",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\u3002",tone:"error"})}else if(d.matches("[data-share]"))try{await navigator.share({title:`\u4EE3\u8CFC\u660E\u7D30\uFF1A${m.name}`,text:h})}catch{}}),t.addEventListener("toggle",l=>{if(!l.target.matches?.("[data-more]"))return;let d=l.target.closest("[data-friend]")?.dataset.friend;l.target.open?yn.add(d):yn.delete(d)},!0),t.addEventListener("submit",l=>{let d=l.target.closest("[data-fee]");if(d){l.preventDefault();let v=n(d);if(!v)return;let p=Math.min(100,Math.max(0,Number(d.elements.feePct.value)||0)),$=Math.max(0,Math.round(Number(d.elements.feeFixed.value)||0)),L=v.name;i(L,{feePct:p,feeFixed:$}),G({title:`@${L} \u7684\u4EE3\u8CFC\u8CBB\u5DF2\u66F4\u65B0`,message:p||$?[p?`${p}%`:"",$?y($):""].filter(Boolean).join(" + "):"\u4E0D\u6536\u4EE3\u8CFC\u8CBB",tone:"muted",duration:3e3}),s.querySelector(`[data-friend="${CSS.escape(L)}"] [data-fee] button`)?.focus({preventScroll:!0});return}let m=l.target.closest("[data-pay-add]");if(!m)return;l.preventDefault();let h=n(m),f=Math.round(Number(m.elements.amount.value));if(!h)return;if(!(f>0)){G({title:"\u8ACB\u8F38\u5165\u6536\u6B3E\u91D1\u984D",message:"\u8F38\u5165\u9019\u6B21\u6536\u5230\u7684\u65E5\u5713\u91D1\u984D\uFF0C\u4F8B\u5982 10000\u3002",tone:"error"}),m.elements.amount.focus();return}let k=h.name,g=h.total-h.paid-f;r(h,f),G({title:`\u5DF2\u8A18\u9304 @${k} \u4ED8 ${y(f)}`,message:g>0?`\u5C1A\u5DEE ${y(g)}`:g<0?`\u591A\u6536 ${y(-g)}`:"\u5DF2\u6536\u9F4A",tone:"muted",duration:3e3}),s.querySelector(`[data-friend="${CSS.escape(k)}"] :is([name="amount"], [data-unpaid])`)?.focus({preventScroll:!0})}),{update(l){e=l;let d=document.activeElement,m=d?.closest?.("[data-friend]")?.dataset.friend,h=d?.closest?.("[data-id]"),f=null;if(m&&h)f=`[data-id="${h.dataset.id}"] [data-act="${d.dataset.act}"]`;else if(m){let g=["data-paid","data-unpaid","data-copy","data-share","data-link","data-extra","data-rate-lock","data-rate-unlock"].find(p=>d.hasAttribute(p)),v={"data-paid":"[data-unpaid], [data-paid]","data-unpaid":"[data-paid], [data-unpaid]","data-rate-lock":"[data-rate-unlock]","data-rate-unlock":"[data-rate-lock]"}[g];f=`[data-friend="${CSS.escape(m)}"] :is(${v??`[${g}]`})`}let k=Ne(s,".kpi-value");s.innerHTML=bo(e),De(s,".kpi-value",k),f&&vt(f,s)?.focus({preventScroll:!0})}}}var Sn={};xe(Sn,{mount:()=>mi});var qt={price:1e4,includesTax:!0,taxRate:10,discountPct:0,feePct:null},ja=1e4;function vo({state:t}){let a=t.settings,e=a.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":a.rateSource==="api"?a.rateProvider||"\u516C\u958B\u532F\u7387 API":"\u9810\u8A2D\u503C\uFF08\u5C1A\u672A\u9023\u7DDA\u66F4\u65B0\uFF09";return`
  <section class="card rate-card" aria-labelledby="rate-title">
    <div class="rate-glow" aria-hidden="true"></div>
    <p class="eyebrow eyebrow-light">${c("currency_exchange","sm")}EXCHANGE RATE \xB7 \u532F\u7387</p>
    <h2 id="rate-title" class="sr-only">\u532F\u7387</h2>
    <p class="rate-big"><span>1 JPY =</span> <strong>${ut(a.rate,4)}</strong> <span>TWD</span></p>
    <p class="rate-src">${u(e)}${a.rateUpdatedAt?` \xB7 ${Ot(a.rateUpdatedAt)}`:""}</p>
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
      <div class="input-affix input-dark"><span aria-hidden="true">\xA5</span><input id="conv-yen" type="number" inputmode="numeric" min="0" value="${ja}"></div>
      <span class="conv-eq" aria-hidden="true">${c("sync_alt")}</span>
      <output for="conv-yen" class="conv-out" data-conv>${$t(ja,a.rate)}</output>
    </div>
  </section>`}function $o({state:t,sum:a,rate:e}){let s=t.settings,n=s.budget?a.paid/s.budget*100:0,o=s.budget?a.pending/s.budget*100:0,r=a.remaining<0;return`
  <section class="card budget-card" aria-labelledby="budget-title">
    <div class="card-head">
      <h2 id="budget-title" class="section-title">${c("account_balance_wallet","sm")}\u9810\u7B97\u7E3D\u89BD</h2>
      <span class="badge ${r?"badge-danger":"badge-cyan"}">${c(r?"warning":"shield","sm")}${r?a.paid>s.budget?"\u5DF2\u8D85\u51FA\u9810\u7B97":"\u8CB7\u5B8C\u6703\u8D85\u652F":"\u9810\u7B97\u5B89\u5168"}</span>
    </div>
    <p class="muted">\u9810\u7B97 ${y(s.budget)}\uFF08\u2248 ${$t(s.budget,e)}\uFF09</p>
    <div class="dual-stat">
      <div class="is-now"><span class="k">\u76EE\u524D\u5DF2\u652F\u4ED8</span><span class="v">${y(a.paid)}</span>
        <span class="s">\u2248 ${$t(a.paid,e)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetUsedPct*100)}%</span></div>
      <div><span class="k">\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30</span><span class="v">${y(a.pay)}</span>
        <span class="s">\u2248 ${$t(a.pay,e)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetPlannedPct*100)}%</span></div>
    </div>
    <div class="stack-bar" role="img" aria-label="\u5DF2\u652F\u4ED8 ${y(a.paid)}\uFF0C\u5F85\u8CB7 ${y(a.pending)}\uFF0C\u9810\u7B97 ${y(s.budget)}">
      <span class="seg-paid" style="--w:${Math.min(100,n)}%"></span>
      <span class="seg-later" style="--w:${Math.max(0,Math.min(100-Math.min(100,n),o))}%"></span>
    </div>
    <dl class="legend-grid">
      <div><dt><i class="dot dot-gold"></i>\u5DF2\u652F\u4ED8\uFF08${a.purchasedCount} \u4EF6\uFF09</dt><dd>${y(a.paid)}</dd></div>
      <div><dt><i class="dot dot-later"></i>\u5F85\u8CB7\uFF08${a.pendingCount} \u4EF6\uFF09</dt><dd>${y(a.pending)}</dd></div>
      <div class="${r?"text-danger":""}"><dt><i class="dot dot-slate"></i>${r?"\u8CB7\u5B8C\u8D85\u652F":"\u8CB7\u5B8C\u5269\u9918"}</dt><dd>${y(Math.abs(a.remaining))} <small>(${$t(Math.abs(a.remaining),e)})</small></dd></div>
    </dl>
    <form class="inline-form" data-budget>
      <label for="budget-input">\u4FEE\u6539\u9810\u7B97</label>
      <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="budget-input" type="number" inputmode="numeric" min="0" step="1000" value="${s.budget}"></div>
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
    </form>
    <form class="inline-form" data-rebate>
      <label for="rebate-input">\u5237\u5361\u6DE8\u56DE\u994B %</label>
      <input id="rebate-input" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${s.cardRebatePct}">
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
      ${s.cardRebatePct?`<p class="muted small grow">\u5168\u90E8\u5237\u5361\u7D04\u53EF\u56DE\u994B ${$t(a.rebate,e)}</p>`:""}
    </form>
  </section>`}var qa="\u672A\u8A18\u9304\u65E5\u671F";function yo({state:t,sum:a,rate:e}){if(!t.items.length)return"";let s=new Map,n=new Map,o={self:{paid:0,pending:0},proxy:{paid:0,pending:0}};for(let f of t.items){let k=a.byItem.get(f.id).pay,g=s.get(f.category)??{paid:0,pending:0};if(g[f.purchased?"paid":"pending"]+=k,s.set(f.category,g),o[f.buyFor?"proxy":"self"][f.purchased?"paid":"pending"]+=k,f.purchased){let v=f.purchasedAt?fe(f.purchasedAt):qa;n.set(v,(n.get(v)??0)+k)}}let r=[...s.entries()].map(([f,k])=>({...te(f),...k,all:k.paid+k.pending})).sort((f,k)=>k.all-f.all),i=Math.max(...r.map(f=>f.all),1),l=[...n.entries()].sort((f,k)=>(f[0]===qa)-(k[0]===qa)||f[0].localeCompare(k[0])),d=f=>f===qa?f:f.slice(5).replace("-","/"),m=Math.max(...l.map(f=>f[1]),1),h=(f,k)=>`<div><dt>${f}</dt><dd>${y(k.paid)}<small>\u5DF2\u4ED8${k.pending?`\uFF0C\u5F85\u8CB7 ${y(k.pending)}`:""}</small></dd></div>`;return`
  <section class="card analysis-card" aria-labelledby="analysis-title">
    <div class="card-head">
      <h2 id="analysis-title" class="section-title">${c("category","sm")}\u82B1\u8CBB\u5206\u6790</h2>
      <span class="legend"><i class="dot dot-gold"></i>\u5DF2\u4ED8<i class="dot dot-later"></i>\u5F85\u8CB7</span>
    </div>
    <h3 class="analysis-sub">\u4F9D\u5206\u985E</h3>
    <ul class="analysis-list">
      ${r.map(f=>`<li>
        <p class="row-between"><span>${c(f.icon,"sm")}${u(f.label)}</span><span><strong>${y(f.paid)}</strong>${f.pending?`<small> \uFF0B\u5F85\u8CB7 ${y(f.pending)}</small>`:""}</span></p>
        ${ge([{value:f.paid,tone:"paid"},{value:f.pending,tone:"later"}],i,`${f.label}\uFF1A\u5DF2\u4ED8 ${y(f.paid)}\uFF0C\u5F85\u8CB7 ${y(f.pending)}`)}
      </li>`).join("")}
    </ul>
    <h3 class="analysis-sub">\u81EA\u7528\u8207\u4EE3\u8CFC</h3>
    <dl class="analysis-dl">
      ${h("\u81EA\u7528",o.self)}
      ${h("\u5E6B\u670B\u53CB\u4EE3\u8CFC",o.proxy)}
    </dl>
    <h3 class="analysis-sub">\u4F9D\u8CFC\u8CB7\u65E5\u671F</h3>
    ${l.length?`<ul class="analysis-list">
      ${l.map(([f,k])=>`<li>
        <p class="row-between"><span>${d(f)}</span><span><strong>${y(k)}</strong><small> \u2248 ${$t(k,e)}</small></span></p>
        ${ge([{value:k,tone:"paid"}],m,`${d(f)} \u82B1\u8CBB ${y(k)}`)}
      </li>`).join("")}
    </ul>`:'<p class="muted small">\u9084\u6C92\u6709\u5DF2\u8CB7\u7684\u5546\u54C1\u3002</p>'}
    <p class="muted small">\u91D1\u984D\u70BA\u5E97\u982D\u652F\u4ED8\u7684\u542B\u7A05\u50F9\uFF0C\u5C1A\u672A\u6263\u9664\u9000\u7A05\u3002</p>
  </section>`}function wo({state:t,sum:a,rate:e}){let s=t.settings,n=[...a.groups.values()].filter(r=>r.store&&r.hasTaxFreeItems).sort((r,i)=>Number(i.eligible)-Number(r.eligible)||i.eligibleExcl-r.eligibleExcl),o=r=>r.items.reduce((i,l)=>i+a.byItem.get(l.id).refund,0);return`
  <section class="card refund-card" aria-labelledby="refund-title">
    <div class="refund-hero">
      <div>
        <p class="eyebrow eyebrow-light">${c("savings","sm")}TAX REFUND \xB7 \u9000\u7A05</p>
        <h2 id="refund-title" class="refund-big">\u9810\u4F30\u9000\u7A05 ${y(a.refund)}</h2>
      </div>
      <p class="refund-twd">\u2248 ${$t(a.refund,e)}</p>
    </div>
    ${n.length?`<ul class="refund-list">
      ${n.map(r=>`
        <li>
          <div class="row-between"><strong>${u(r.store)}${r.date?` <small>${r.date.slice(5).replace("-","/")}</small>`:""}</strong>
            ${r.eligible?`<span class="badge badge-cyan">\u9000 ${y(o(r))}</span>`:`<span class="badge badge-warn">\u5DEE ${y(r.shortfall)}</span>`}</div>
          ${me(r.progress,{label:`${r.store} \u514D\u7A05\u9580\u6ABB`,tone:r.eligible?"cyan":"gold"})}
          <p class="muted small">\u672A\u7A05\u5408\u8A08 ${y(r.eligibleExcl)} / ${y(dt)}</p>
        </li>`).join("")}
    </ul>`:'<p class="muted pad">\u9084\u6C92\u6709\u52FE\u9078\u300C\u8FA6\u7406\u514D\u7A05\u300D\u4E14\u586B\u4E86\u5E97\u5BB6\u7684\u5546\u54C1\u3002</p>'}
  </section>`}function xo(t){let a=qt.feePct??w.state.settings.refundFeePct,e=Wn({...qt,feePct:a});return`
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u91D1\u984D\uFF08\u6298\u6263\u5F8C\uFF09</dt><dd>${y(e.excl)}</dd></div>
      <div><dt>\u6D88\u8CBB\u7A05 ${qt.taxRate}%</dt><dd>${y(e.tax)}</dd></div>
      <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${y(e.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05${a?`\uFF08\u6263\u624B\u7E8C\u8CBB ${a}%\uFF09`:""}</dt><dd>${e.eligible?`\u2212 ${y(e.refund)}`:"\u672A\u9054\u9580\u6ABB"}</dd></div>
    </dl>
    <div class="ledger-total">
      <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${y(e.net)}</span></div>
      <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${$t(e.net,t)}</span></div>
    </div>
    <p class="calc-status ${e.eligible?"ok":"warn"}">${c(e.eligible?"celebration":"info","sm")}${e.eligible?`\u6BD4\u539F\u50F9\u7701\u4E0B ${y(e.saved)}\uFF08\u2248 ${$t(e.saved,t)}\uFF09`:`\u55AE\u7B46\u672A\u7A05\u672A\u6EFF ${y(dt)}\uFF0C\u9700\u8207\u540C\u5E97\u540C\u65E5\u5176\u4ED6\u5546\u54C1\u5408\u4F75\u8A08\u7B97`}</p>`}function pi({rate:t}){let a=[0,5,7,10];return`
  <section class="card calc-card" aria-labelledby="calc-title">
    <div class="card-head">
      <h2 id="calc-title" class="section-title">${c("calculate","sm")}\u55AE\u7B46\u9000\u7A05\u8A66\u7B97\u76E4</h2>
    </div>
    <div class="calc-layout">
      <form class="calc-form" data-calc-form>
        <div class="field">
          <label for="qc-price">\u6A19\u50F9\uFF08\u65E5\u5713\uFF09</label>
          <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="qc-price" name="price" type="number" inputmode="numeric" min="0" value="${qt.price}"></div>
        </div>
        <div class="grid-2 tight">
          <div class="field"><span class="label" id="qc-l1">\u6A19\u50F9</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l1">
              <label class="pill"><input type="radio" name="includesTax" value="true" ${qt.includesTax?"checked":""}><span>\u542B\u7A05</span></label>
              <label class="pill"><input type="radio" name="includesTax" value="false" ${qt.includesTax?"":"checked"}><span>\u672A\u7A05</span></label>
            </div></div>
          <div class="field"><span class="label" id="qc-l2">\u7A05\u7387</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l2">
              <label class="pill"><input type="radio" name="taxRate" value="10" ${qt.taxRate===10?"checked":""}><span>10%</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="8" ${qt.taxRate===8?"checked":""}><span>8% \u98DF\u54C1</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="1" ${qt.taxRate===1?"checked":""}><span>1% \u98DF\u54C1</span></label>
            </div>
            <p class="hint">1% \u98DF\u54C1\u70BA 2027/4 \u8D77\u7684\u7A05\u7387\uFF0C\u6CD5\u6848\u5BE9\u8B70\u4E2D\u3002</p></div>
        </div>
        <div class="field"><span class="label" id="qc-l3">\u6298\u6263\uFF0F\u512A\u60E0\u5238</span>
          <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l3">
            ${a.map(e=>`<label class="pill"><input type="radio" name="discountPct" value="${e}" ${qt.discountPct===e?"checked":""}><span>${e?`${e}%`:"\u7121"}</span></label>`).join("")}
          </div>
        </div>
        <div class="field">
          <label for="qc-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
          <input id="qc-fee" name="feePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${qt.feePct??""}" placeholder="\u9810\u8A2D ${w.state.settings.refundFeePct}">
        </div>
      </form>
      <div class="calc-out" aria-live="polite" data-calc-out>${xo(t)}</div>
    </div>
  </section>`}function fi(){return`
  <section class="card guide-link" aria-labelledby="guide-title">
    <div>
      <p class="eyebrow">${c("payments","sm")}TAX REFUND GUIDE</p>
      <h2 id="guide-title" class="section-title-lg">\u9000\u7A05\u6307\u5357\uFF1A2026/11 \u65B0\u5236\u600E\u9EBC\u9000</h2>
      <p class="muted small">\u6D41\u7A0B\u3001\u9000\u7A05\u516C\u53F8\u3001\u6A5F\u5834\u73FE\u91D1\u3001\u4FE1\u7528\u5361\u3001\u624B\u7E8C\u8CBB\u8207\u65B0\u5236\u5EA6\uFF0C\u6574\u7406\u5728\u7368\u7ACB\u7684\u4E00\u9801\u3002</p>
    </div>
    <a class="btn btn-ghost" href="#/guide">${c("payments")}\u6253\u958B\u9000\u7A05\u6307\u5357</a>
  </section>`}function mi(t,a){let e=a;t.innerHTML=`
    ${Ht({eyebrow:`BUDGET & TAX \xB7 ${u(w.state.settings.tripName)}`,title:"\u9810\u7B97\u532F\u7387",sub:"\u5373\u6642\u63DB\u7B97\u53F0\u5E63\u3001\u638C\u63E1\u9810\u7B97\u9918\u984D\uFF0C\u4E26\u9810\u4F30\u6BCF\u5BB6\u5E97\u80FD\u9000\u591A\u5C11\u6D88\u8CBB\u7A05\u3002",subShort:"\u63DB\u7B97\u53F0\u5E63\u3001\u638C\u63E1\u9810\u7B97\uFF0C\u9810\u4F30\u6BCF\u5BB6\u5E97\u80FD\u9000\u591A\u5C11\u7A05\u3002"})}
    ${Aa([{id:"rate-title",label:"\u532F\u7387"},{id:"budget-title",label:"\u9810\u7B97"},{id:"analysis-title",label:"\u5206\u6790"},{id:"calc-title",label:"\u8A66\u7B97"},{id:"refund-title",label:"\u9000\u7A05"},{id:"guide-title",label:"\u9000\u7A05\u6307\u5357"}])}
    <div class="budget-layout">
      <div class="col">
        <div data-region="rate">${vo(e)}</div>
        <div data-region="budget">${$o(e)}</div>
        <div data-region="analysis">${yo(e)}</div>
        ${pi(e)}
      </div>
      <div class="col">
        <div data-region="refund">${wo(e)}</div>
        ${fi()}
      </div>
    </div>`;let s=()=>{vt("[data-calc-out]",t).innerHTML=xo(e.rate)};t.addEventListener("click",async o=>{let r=o.target.closest("[data-sync]");if(!r)return;r.disabled=!0,r.setAttribute("aria-busy","true");let i=await Ie({force:!0});i.ok?G({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${ut(i.rate,4)} TWD\uFF08${u(i.provider)}\uFF09`,tone:"muted",duration:3e3}):G({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u532F\u7387\u3002",tone:"error"});let l=vt("[data-sync]",t);l&&(l.disabled=!1,l.removeAttribute("aria-busy"),l.focus())}),t.addEventListener("submit",o=>{o.preventDefault();let r=o.target;if(r.matches("[data-manual]")){let i=Number(r.querySelector("input").value);if(!(i>0&&i<5)){G({title:"\u532F\u7387\u683C\u5F0F\u4E0D\u5C0D",message:"\u8ACB\u8F38\u5165 0 \u5230 5 \u4E4B\u9593\u7684\u6578\u5B57\uFF0C\u4F8B\u5982 0.2150\u3002",tone:"error"});return}ga(i),G({title:"\u5DF2\u6539\u7528\u624B\u52D5\u532F\u7387",message:`1 JPY = ${ut(i,4)} TWD`,tone:"muted",duration:3e3})}else if(r.matches("[data-budget]")){let i=Number(r.querySelector("input").value);i>=0&&(w.updateSettings({budget:i}),G({title:"\u9810\u7B97\u5DF2\u66F4\u65B0",message:y(i),tone:"muted",duration:2500}))}else if(r.matches("[data-rebate]")){let i=Number(r.querySelector("input").value);i>=0&&(w.updateSettings({cardRebatePct:i}),G({title:"\u56DE\u994B\u7387\u5DF2\u66F4\u65B0",message:`${i}%`,tone:"muted",duration:2500}))}}),t.addEventListener("input",o=>{let r=o.target;if(r.id==="conv-yen"&&(ja=Number(r.value)||0,vt("[data-conv]",t).textContent=$t(ja,e.rate)),r.closest("[data-calc-form]")){let i=new FormData(r.form);qt.price=Number(i.get("price"))||0,qt.includesTax=i.get("includesTax")==="true",qt.taxRate=Number(i.get("taxRate")),qt.discountPct=Number(i.get("discountPct")),qt.feePct=i.get("feePct")===""?null:Number(i.get("feePct")),s()}}),t.addEventListener("change",o=>{o.target.closest("[data-calc-form]")&&o.target.dispatchEvent(new Event("input",{bubbles:!0}))});let n=La(t);return{destroy(){n.destroy()},update(o){e=o;for(let[r,i]of[["rate",vo],["budget",$o],["analysis",yo],["refund",wo]]){let l=vt(`[data-region="${r}"]`,t);if(!l.contains(document.activeElement)||document.activeElement.tagName==="BUTTON"){let d=document.activeElement?.matches?.("[data-sync]")&&l.contains(document.activeElement)?"[data-sync]":null;l.innerHTML=i(e),d&&vt(d,l)?.focus()}}s()}}}var Mn={};xe(Mn,{mount:()=>yi});var gi=[{id:"taxfree",tone:"danger",icon:"priority_high",title:"\u514D\u7A05\u5546\u54C1\u5148\u67E5\u9A57\u3001\u518D\u8A17\u904B",points:["2026/11/1 \u8D77\u7684\u9000\u7A05\u65B0\u5236\uFF0C\u8981\u5728<strong>\u8CFC\u8CB7\u5F8C 90 \u5929\u5167\u3001\u8A17\u904B\u884C\u674E\u4E4B\u524D</strong>\u6301\u8B77\u7167\u5230\u6A5F\u53F0\u8FA6\u7406\u3002","\u6D77\u95DC\u4EE5<strong>\u6536\u64DA\u70BA\u55AE\u4F4D</strong>\u67E5\u9A57\uFF0C\u540C\u4E00\u5F35\u6536\u64DA\u7684\u5546\u54C1\u8981\u5168\u90E8\u653E\u5728\u597D\u62FF\u51FA\u4F86\u7684\u4F4D\u7F6E\u3002","\u5C11\u4E00\u4EF6\uFF0C\u6574\u5F35\u6536\u64DA\u90FD\u4E0D\u80FD\u9000\u3002"]},{id:"battery",tone:"danger",icon:"battery_alert",title:"\u884C\u52D5\u96FB\u6E90\uFF1A\u6BCF\u4EBA\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u7981\u7528",points:["\u65E5\u672C\u51FA\u767C\u822A\u73ED\u81EA 2026/4/24 \u8D77\u3001\u53F0\u7063\u6C11\u822A\u5C40\u81EA 2026/4/8 \u8D77\u9069\u7528\u3002","\u6BCF\u4EBA\u6700\u591A\u5E36 2 \u9846\uFF08160Wh \u4EE5\u4E0B\uFF0C\u8D85\u904E 100Wh \u9700\u822A\u7A7A\u516C\u53F8\u540C\u610F\uFF09\u3002","<strong>\u6A5F\u4E0A\u4E0D\u80FD\u4F7F\u7528\u3001\u4E5F\u4E0D\u80FD\u5145\u96FB</strong>\uFF0C\u4E0D\u53EF\u8A17\u904B\u3002","\u8ACB\u653E\u5728\u8EAB\u908A\uFF0C\u4E0D\u8981\u653E\u9032\u4E0A\u65B9\u7F6E\u7269\u6AC3\u3002"]},{id:"liquid",tone:"warn",icon:"water_drop",title:"\u6DB2\u9AD4\u3001\u5200\u526A",points:["\u624B\u63D0\u6DB2\u9AD4\u55AE\u74F6\u901A\u5E38\u9650 100ml\u3002","\u5200\u526A\u53EA\u80FD\u8A17\u904B\u3002","\u5BE6\u969B\u9650\u5236\u4EE5\u822A\u7A7A\u516C\u53F8\u8207\u6A5F\u5834\u516C\u544A\u70BA\u6E96\u3002"]},{id:"customs",tone:"warn",icon:"shield",title:"\u56DE\u53F0\u7063\u5165\u5883\uFF1A\u514D\u7A05\u984D\u8207\u7981\u5E36\u54C1",points:["\u884C\u674E\u514D\u7A05\u984D <strong>NT$35,000</strong>\uFF1B\u9152\u985E <strong>1.5 \u516C\u5347</strong>\uFF08\u5E74\u6EFF 18 \u6B72\uFF09\u3002","<strong>\u8089\u88FD\u54C1\u4E00\u5F8B\u4E0D\u80FD\u5E36</strong>\uFF0C\u5305\u62EC\u8089\u4E7E\u3001\u8089\u9B06\u3001\u9999\u8178\u3001\u542B\u8089\u584A\u6216\u8089\u5305\u7684\u6CE1\u9EB5\uFF08\u4F8B\u5982\u4E00\u98A8\u5802\u3001AFURI \u67DA\u5B50\u62C9\u9EB5\uFF09\uFF0C\u9055\u8005\u7F70 NT$1 \u842C\uFF5E100 \u842C\u3002","\u65B0\u9BAE\u6C34\u679C\u4E5F\u4E0D\u80FD\u5E36\u3002","\u5E36\u5230\u4E86\u8ACB\u5728\u5165\u5883\u524D\u4E1F\u9032\u6AA2\u75AB\u7BB1\u3002","\u4E0D\u78BA\u5B9A\u7684\u8A71\u5230\u52D5\u690D\u7269\u6AA2\u75AB\u6AC3\u53F0\u4E3B\u52D5\u7533\u5831\uFF0C\u4E0D\u5408\u683C\u53EA\u8981\u92B7\u6BC0\u5C31\u4E0D\u6703\u53D7\u7F70\u3002"]},{id:"pack",tone:"ok",icon:"check",title:"\u91CD\u7269\u653E\u5E95\u5C64\u3001\u6613\u788E\u653E\u4E2D\u592E",points:["\u9152\u985E\u3001\u74F6\u88DD\u4FDD\u990A\u54C1\u5305\u597D\uFF0C\u653E\u9760\u8FD1\u8F2A\u5B50\u7684\u5E95\u90E8\u3002","\u6613\u788E\u54C1\u653E\u4E2D\u592E\uFF0C\u56DB\u5468\u7528\u8863\u7269\u7DE9\u885D\u3002"]}],En=new Set;function hi(t,a){let e=zt(t);return`
  <li class="pack-item ${t.packed?"is-packed":""}" data-id="${t.id}">
    <button type="button" class="check ${t.packed?"on":""}" data-k="pack" role="checkbox" aria-checked="${t.packed}" aria-label="\u5DF2\u88DD\u7BB1\uFF1A${u(t.name)}">${c("check")}</button>
    <div class="pack-main">
      <button type="button" class="pack-name" data-k="open">${u(t.name)}${t.qty>1?` <small>\xD7 ${t.qty}</small>`:""}</button>
      <p class="pack-meta">
        <span>${c(te(t.category).icon,"sm")}${t.weightKg?Vt(t.weightKg*t.qty):'<span class="text-warn">\u672A\u586B\u91CD\u91CF</span>'}</span>
        ${t.buyFor?`<span class="who-tag">@${u(t.buyFor)}</span>`:""}
        ${t.liquid?`<span class="badge badge-cyan">${c("water_drop","sm")}\u6DB2\u9AD4</span>`:""}
        ${t.blade?`<span class="badge badge-warn">${c("content_cut","sm")}\u5200\u526A</span>`:""}
        ${t.battery?`<span class="badge badge-danger">${c("battery_alert","sm")}\u92F0\u96FB\u6C60</span>`:""}
        ${t.fragile?`<span class="badge badge-warn">${c("wine_bar","sm")}\u6613\u788E</span>`:""}
        ${t.taxFree&&t.purchasedStore?`<span class="badge badge-gold">${c("receipt_long","sm")}\u514D\u7A05\u54C1</span>`:""}
      </p>
    </div>
    ${a?`<button type="button" class="btn btn-ghost btn-xs" data-k="move" aria-label="\u628A ${u(t.name)} \u6539\u653E${e==="checked"?"\u624B\u63D0":"\u8A17\u904B"}">${c("swap_horiz","sm")}${e==="checked"?"\u8A17\u904B":"\u624B\u63D0"}</button>`:""}
  </li>`}function Tn(t,a,e,s,n,o,r=!1){if(!o.length)return"";let i=o.filter(l=>l.packed).length;return`
  <section class="pack-sec pack-${s}" aria-labelledby="pk-${t}">
    <header class="pack-sec-head">
      <h2 id="pk-${t}" class="section-title">${c(e,"sm")}${a}</h2>
      <span class="badge ${i===o.length?"badge-cyan":"badge-muted"}">${i} / ${o.length} \u5DF2\u88DD\u7BB1</span>
    </header>
    <p class="hint">${n}</p>
    <ul class="pack-list">${o.map(l=>hi(l,r)).join("")}</ul>
  </section>`}var bi={checked:"\u8A17\u904B",carry:"\u624B\u63D0",none:"\u4E0D\u653E\u884C\u674E"};function vi(t,a){let e=t.settings.inspectedGroups||{},s=[...a.groups.values()].map(o=>({g:o,items:o.items.filter(r=>r.purchased&&r.taxFree)})).filter(o=>o.g.eligible&&o.g.store&&o.items.length);if(!s.length)return"";let n=s.filter(o=>!e[o.g.key]).length;return`
  <section class="card inspect-card" aria-labelledby="pk-inspect">
    <header class="card-head">
      <h2 id="pk-inspect" class="section-title">${c("receipt_long","sm")}\u514D\u7A05\u54C1\u67E5\u9A57\u6E05\u55AE</h2>
      <span class="badge ${n?"badge-warn":"badge-cyan"}">${n?`${n} \u5F35\u6536\u64DA\u5F85\u67E5\u9A57`:"\u5168\u90E8\u67E5\u9A57\u5B8C\u6210"}</span>
    </header>
    <p class="muted small">\u4F9D\u6536\u64DA\uFF08\u540C\u4E00\u5BB6\u5E97\u3001\u540C\u4E00\u5929\uFF09\u5206\u7D44\u3002\u5230\u6A5F\u5834\u5148\u8FA6\u67E5\u9A57\u3001\u518D\u8A17\u904B\uFF1B\u540C\u4E00\u7D44\u7684\u5546\u54C1\u8981\u5168\u90E8\u62FF\u5F97\u51FA\u4F86\u3002</p>
    <ul class="inspect-list">
      ${s.map(({g:o,items:r})=>{let i=r.reduce((d,m)=>d+a.byItem.get(m.id).refund,0),l=r.some(d=>zt(d)==="checked");return`
        <li class="inspect-group ${e[o.key]?"is-done":""}">
          <div class="inspect-head">
            <p class="inspect-title"><strong>${u(o.store)}</strong>${o.date?` <small>${o.date.slice(5).replace("-","/")}</small>`:""}
              <span class="badge badge-gold">\u9000 ${y(i)}</span></p>
            <label class="inspect-check"><input type="checkbox" data-insp="${u(o.key)}" ${e[o.key]?"checked":""}><span>\u5DF2\u67E5\u9A57</span></label>
          </div>
          <ul class="inspect-items">
            ${r.map(d=>`<li><span>${u(d.name)}${d.qty>1?` \xD7 ${d.qty}`:""}</span><span class="badge badge-muted">${bi[zt(d)]}</span></li>`).join("")}
          </ul>
          ${l&&!e[o.key]?`<p class="hint text-warn">${c("priority_high","sm")}\u9019\u7D44\u6709\u8981\u8A17\u904B\u7684\u5546\u54C1\uFF0C\u8ACB\u5148\u67E5\u9A57\u518D\u4EA4\u884C\u674E\u3002</p>`:""}
        </li>`}).join("")}
    </ul>
  </section>`}function $i(t,a){let e=Yn(t,a);if(!e.count&&!e.planned)return"";let s=n=>`NT$ ${ut(n)}`;return`
  <section class="card allow-card" aria-labelledby="pk-allow">
    <header class="card-head">
      <h2 id="pk-allow" class="section-title">${c("shield","sm")}\u5165\u5883\u514D\u7A05\u984D\u8A66\u7B97</h2>
      <span class="badge ${e.over?"badge-danger":e.plannedOver?"badge-warn":"badge-cyan"}">${e.over?"\u5DF2\u8D85\u904E\u514D\u7A05\u984D":e.plannedOver?"\u5168\u90E8\u8CB7\u5B8C\u6703\u8D85\u904E":"\u5728\u514D\u7A05\u984D\u5167"}</span>
    </header>
    <p class="allow-now"><strong>\u7D04 ${s(e.now)}</strong> / ${s(e.limit)}</p>
    ${me(Math.min(1,e.now/e.limit),{label:`\u5DF2\u8CB7\u5546\u54C1\u7D04 ${s(e.now)}\uFF0C\u514D\u7A05\u984D ${s(e.limit)}`,tone:e.over?"gold":"cyan"})}
    <dl class="allow-dl">
      <div><dt>\u5DF2\u8CB7\uFF08${e.count} \u4EF6\uFF09</dt><dd>${e.over?`<span class="text-danger">\u8D85\u904E\u7D04 ${s(e.over)}</span>`:`\u9084\u6709\u7D04 ${s(e.limit-e.now)}`}</dd></div>
      <div><dt>\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30</dt><dd class="${e.plannedOver?"text-danger":""}">\u7D04 ${s(e.planned)}${e.plannedOver?`\uFF08\u8D85\u904E\u7D04 ${s(e.plannedOver)}\uFF09`:""}</dd></div>
    </dl>
    ${e.over?`<p class="notice">${c("info")}\u8D85\u904E\u514D\u7A05\u984D\u6642\uFF0C\u5165\u5883\u8ACB\u8D70\u7D05\u7DDA\u6AAF\u5411\u6D77\u95DC\u7533\u5831\u3002</p>`:""}
    <p class="muted small">\u4EE5\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C\u3001\u76EE\u524D\u532F\u7387\u4F30\u7B97\uFF1B\u6D77\u95DC\u662F\u4EE5\u5B8C\u7A05\u50F9\u683C\u8A8D\u5B9A\uFF0C\u7D50\u679C\u53EF\u80FD\u4E0D\u540C\u3002\u984D\u5EA6\u4EE5\u6BCF\u4EBA\u8A08\u7B97\u3002${e.liquorCount?`\u9152\u985E ${e.liquorCount} \u4EF6\u4E0D\u8A08\u5165\uFF08\u53E6\u6709 1.5 \u516C\u5347\u7684\u514D\u7A05\u91CF\uFF09\u3002`:"\u9152\u985E\u4E0D\u8A08\u5165\uFF08\u53E6\u6709 1.5 \u516C\u5347\u7684\u514D\u7A05\u91CF\uFF09\u3002"}\u8A2D\u5B9A\u70BA\u300C\u4E0D\u653E\u884C\u674E\u300D\u7684\u5546\u54C1\u4E5F\u4E0D\u8A08\u5165\u3002</p>
    <p class="muted small">\u898F\u5B9A\u67E5\u8B49\u65E5 ${Kn}\uFF08\u8CA1\u653F\u90E8\u95DC\u52D9\u7F72\uFF09\u3002</p>
  </section>`}function ko(){let t=w.state,{settings:a,packing:e}=t,s=Re(t),n=t.items.filter(h=>h.purchased&&zt(h)!=="none"),o=n.filter(h=>!h.battery&&zt(h)==="checked"&&(h.liquid||h.blade)),r=n.filter(h=>h.battery),i=n.filter(h=>!o.includes(h)&&!r.includes(h)),l=t.items.filter(h=>!h.purchased).length,d=e.filter(h=>h.done).length,m=(h,f,k,g,v)=>`
    <div class="pack-weight ${f>v?"is-over":""}">
      <p class="row-between"><span class="k">${h}</span><span><strong>${ut(f,1)}</strong> / ${v} kg</span></p>
      ${ge([{value:k,tone:"base"},{value:g,tone:"paid"}],v,`${h} ${ut(f,1)} \u516C\u65A4\uFF0C\u9650\u91CD ${v}`)}
      <p class="small ${f>v?"text-danger":"muted"}">${f>v?`\u8D85\u91CD ${Vt(f-v)}`:`\u9084\u53EF\u88DD ${Vt(v-f)}`}</p>
    </div>`;return`
  <div class="packing-layout">
    <div class="col">
      <div class="pack-weights" role="group" aria-labelledby="pk-weights">
        <h2 id="pk-weights" class="sr-only">\u884C\u674E\u91CD\u91CF</h2>
        ${m("\u8A17\u904B\u884C\u674E",s.totalCheckedNow,a.checkedBase,s.weightCheckedNow,a.checkedLimit)}
        ${m("\u624B\u63D0\u884C\u674E",s.totalCarryNow,a.carryBase,s.weightCarryNow,a.carryLimit)}
        <button type="button" class="link-btn pack-limits-link" data-edit-limits>${c("tune","sm")}\u4FEE\u6539\u9650\u91CD\u8207\u884C\u674E\u7BB1\u91CD\u91CF</button>
      </div>
      ${n.length?"":`<p class="notice">${c("info")}\u9084\u6C92\u6709\u5DF2\u8CB7\u7684\u5546\u54C1\u3002\u5728\u63A1\u8CB7\u6E05\u55AE\u52FE\u9078\u300C\u5DF2\u8CB7\u300D\u5F8C\uFF0C\u5546\u54C1\u6703\u51FA\u73FE\u5728\u9019\u88E1\u3002</p>`}
      ${Tn("checked","\u5FC5\u9808\u8A17\u904B\uFF08\u6DB2\u9AD4\uFF0F\u5200\u526A\uFF09","luggage","checked","\u6DB2\u9AD4\u8D85\u904E 100ml\u3001\u5200\u526A\u985E\u4E0D\u80FD\u5E36\u4E0A\u98DB\u6A5F\u5BA2\u8259\u3002\uFF08\u5728\u51FA\u5883\u7BA1\u5236\u5340\u514D\u7A05\u5E97\u8CB7\u7684\u6DB2\u9AD4\u4E0D\u5728\u6B64\u9650\uFF0C\u6703\u5217\u5728\u4E00\u822C\u5546\u54C1\uFF09",o)}
      ${Tn("carry","\u5FC5\u9808\u624B\u63D0\uFF08\u92F0\u96FB\u6C60\uFF09","backpack","carry","\u884C\u52D5\u96FB\u6E90\u8207\u5099\u7528\u92F0\u96FB\u6C60\u4E0D\u80FD\u8A17\u904B\uFF0C\u6BCF\u4EBA\u6700\u591A 2 \u9846\uFF0C\u6A5F\u4E0A\u4E0D\u80FD\u4F7F\u7528\u6216\u5145\u96FB\uFF1B\u5167\u5EFA\u96FB\u6C60\u7684\u96FB\u5668\u4F9D\u822A\u7A7A\u516C\u53F8\u898F\u5B9A\u3002",r)}
      ${Tn("general","\u4E00\u822C\u5546\u54C1","inventory_2","general","\u8A17\u904B\u6216\u624B\u63D0\u90FD\u53EF\u4EE5\uFF0C\u6309\u53F3\u5074\u6309\u9215\u5207\u63DB\u653E\u54EA\u88E1\u3002",i,!0)}
      ${l?`<p class="hint">${c("pending","sm")}\u9084\u6709 ${l} \u4EF6\u5F85\u8CB7\uFF0C\u8CB7\u5230\u5F8C\u6703\u51FA\u73FE\u5728\u9019\u88E1\u3002</p>`:""}
      ${vi(t,s)}
      ${$i(t,s)}
    </div>
    <div class="col">
      <section class="card dark-card" aria-labelledby="pk-rules">
        <p class="eyebrow eyebrow-light">${c("gavel","sm")}DEPARTURE CHECKLIST</p>
        <h2 id="pk-rules" class="section-title-lg">\u51FA\u5883\u8207\u5165\u5883\u63D0\u9192</h2>
        <p class="rule-hint">\u9EDE\u6A19\u984C\u5C55\u958B\u7D30\u7BC0\u3002</p>
        <ul class="rule-cards">
          ${gi.map(h=>`
          <li class="rule ${h.tone}"><details data-rule="${h.id}" ${En.has(h.id)?"open":""}>
            <summary><span class="rule-icon">${c(h.icon)}</span><strong>${h.title}</strong><span class="rule-chevron" aria-hidden="true">${c("add","sm")}</span></summary>
            <ul class="rule-points">${h.points.map(f=>`<li>${f}</li>`).join("")}</ul>
          </details></li>`).join("")}
        </ul>
      </section>

      <section class="card packing-card" aria-labelledby="pk-todo">
        <header class="card-head">
          <h2 id="pk-todo" class="section-title">${c("checklist","sm")}\u96A8\u8EAB\u88DD\u5099\u6E05\u55AE</h2>
          <span class="badge badge-muted">${d} / ${e.length} \u5099\u59A5</span>
        </header>
        <ul class="todo-list">
          ${e.map((h,f)=>`
            <li class="todo ${h.done?"is-done":""}">
              <label><input type="checkbox" data-p="toggle" data-idx="${f}" ${h.done?"checked":""}><span>${u(h.text)}</span></label>
              <button type="button" class="icon-btn icon-btn-sm" data-p="remove" data-idx="${f}" aria-label="\u79FB\u9664\u300C${u(h.text)}\u300D">${c("close","sm")}</button>
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
          <span class="more-desc">${a.flightNote?u(a.flightNote):"\u9650\u91CD\u3001\u884C\u674E\u7BB1\u672C\u8EAB\u91CD\u91CF"}</span>
          <span class="more-chevron" aria-hidden="true">${c("add")}</span>
        </summary>
        <form class="flight-form more-body" data-flight>
          <div class="field span2"><label for="fl-note">\u822A\u73ED\u5099\u8A3B</label>
            <input id="fl-note" name="flightNote" value="${u(a.flightNote)}" placeholder="\u4F8B\u5982\uFF1ABR197 \u6210\u7530 \u2192 \u6843\u5712 11/20 14:30" maxlength="60"></div>
          <div class="field"><label for="fl-cl">\u8A17\u904B\u9650\u91CD kg</label><input id="fl-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${a.checkedLimit}"></div>
          <div class="field"><label for="fl-cb">\u8A17\u904B\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${a.checkedBase}"></div>
          <div class="field"><label for="fl-pl">\u624B\u63D0\u9650\u91CD kg</label><input id="fl-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${a.carryLimit}"></div>
          <div class="field"><label for="fl-pb">\u624B\u63D0\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${a.carryBase}"></div>
          <button type="submit" class="btn btn-slate span2">${c("save","sm")}\u5132\u5B58\u884C\u674E\u8A2D\u5B9A</button>
        </form>
      </details>
    </div>
  </div>`}function yi(t){t.innerHTML=`
    ${Ht({eyebrow:`PACKING & CUSTOMS \xB7 ${u(w.state.settings.tripName)}`,title:"\u6253\u5305\u8207\u6D77\u95DC",sub:"\u56DE\u7A0B\u6574\u7406\u884C\u674E\u6642\u770B\u9019\u9801\uFF1A\u5DF2\u8CB7\u7684\u5546\u54C1\u4F9D\u300C\u5FC5\u9808\u8A17\u904B\uFF0F\u5FC5\u9808\u624B\u63D0\uFF0F\u4E00\u822C\u300D\u5206\u7D44\uFF0C\u9010\u4E00\u88DD\u7BB1\u6253\u52FE\u3002",subShort:"\u56DE\u7A0B\u88DD\u7BB1\u7528\uFF1A\u5DF2\u8CB7\u7684\u5546\u54C1\u4F9D\u8A17\u904B\u3001\u624B\u63D0\u5206\u7D44\uFF0C\u88DD\u597D\u5C31\u6253\u52FE\u3002"})}
    ${Aa([{id:"pk-weights",label:"\u91CD\u91CF"},{id:"pk-checked",label:"\u8A17\u904B"},{id:"pk-carry",label:"\u624B\u63D0"},{id:"pk-general",label:"\u4E00\u822C"},{id:"pk-inspect",label:"\u67E5\u9A57"},{id:"pk-allow",label:"\u5165\u5883\u8A66\u7B97"},{id:"pk-rules",label:"\u6D77\u95DC\u63D0\u9192"},{id:"pk-todo",label:"\u96A8\u8EAB\u88DD\u5099"}])}
    <div data-region="main">${ko()}</div>`;let a=t.querySelector('[data-region="main"]'),e=()=>{let n=document.activeElement,o=a.querySelector("details.card-more")?.open,r=null;n?.dataset?.k?r=`[data-id="${n.closest("[data-id]")?.dataset.id}"] [data-k="${n.dataset.k}"]`:n?.dataset?.p==="toggle"?r=`[data-p="toggle"][data-idx="${n.dataset.idx}"]`:n?.dataset?.insp?r=`[data-insp="${CSS.escape(n.dataset.insp)}"]`:n?.id==="todo-input"?r="#todo-input":n?.closest?.("[data-flight]")&&(r='[data-flight] button[type="submit"]'),a.innerHTML=ko(),o&&(a.querySelector("details.card-more").open=!0),r&&a.querySelector(r)?.focus({preventScroll:!0}),s?.refresh()},s=null;return t.addEventListener("click",n=>{let o=n.target.closest("button");if(!o)return;if("editLimits"in o.dataset){let l=a.querySelector("details.card-more");l.open=!0,l.scrollIntoView({block:"center",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}),l.querySelector("#fl-cl")?.focus({preventScroll:!0});return}if(o.dataset.p==="remove"){let l=[...w.state.packing];l.splice(Number(o.dataset.idx),1),w.setPacking(l),t.querySelector("#todo-input")?.focus();return}let r=o.closest("[data-id]")?.dataset.id,i=r&&w.getItem(r);i&&(o.dataset.k==="pack"&&w.updateItem(r,{packed:!i.packed}),o.dataset.k==="open"&&Pa(r),o.dataset.k==="move"&&w.updateItem(r,{luggage:zt(i)==="checked"?"carry":"checked"}))}),t.addEventListener("change",n=>{if(n.target.dataset.insp){let r={...w.state.settings.inspectedGroups};n.target.checked?r[n.target.dataset.insp]=!0:delete r[n.target.dataset.insp],w.updateSettings({inspectedGroups:r});return}if(n.target.dataset.p!=="toggle")return;let o=Number(n.target.dataset.idx);w.setPacking(w.state.packing.map((r,i)=>i===o?{...r,done:n.target.checked}:r))}),t.addEventListener("submit",n=>{n.preventDefault();let o=n.target;if(o.matches("[data-p-add]")){let r=o.querySelector("input").value.trim();r&&w.setPacking([...w.state.packing,{text:r,done:!1}]),t.querySelector("#todo-input")?.focus()}else if(o.matches("[data-flight]")){let r=o.elements,i=w.state.settings,l=(d,m)=>d.value===""||Number.isNaN(Number(d.value))?m:Math.max(0,Number(d.value));w.updateSettings({flightNote:r.flightNote.value.trim(),checkedLimit:l(r.checkedLimit,i.checkedLimit),checkedBase:l(r.checkedBase,i.checkedBase),carryLimit:l(r.carryLimit,i.carryLimit),carryBase:l(r.carryBase,i.carryBase)}),G({title:"\u884C\u674E\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}}),t.addEventListener("toggle",n=>{let o=n.target.dataset?.rule;o&&(n.target.open?En.add(o):En.delete(o))},!0),s=La(t),{destroy(){s.destroy()},update(){let n=document.activeElement;a.querySelector("[data-flight]")?.contains(n)&&n.tagName!=="BUTTON"||e()}}}var Ln={};xe(Ln,{mount:()=>Ri});var wi="2026/11/7",Eo="shopping-relics:guide-tab",xi=([t,a])=>`<a href="${a}" target="_blank" rel="noopener">${t}<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`,We=t=>`<p class="source">\u8CC7\u6599\u4F86\u6E90\uFF1A${t.map(xi).join("\u3001")}</p>`,Tt={jta:["\u65E5\u672C\u89C0\u5149\u5EF3\u3008What is the Refund Method?\u3009","https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html"],jtaFaq:["\u65E5\u672C\u89C0\u5149\u5EF3\u3008\u65C5\u5BA2\u5E38\u898B\u554F\u984C\u3009","https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html"],jtaPdf:["\u65E5\u672C\u89C0\u5149\u5EF3 \u65B0\u5236\u8AAA\u660E\uFF08PDF\uFF09","https://www.mlit.go.jp/kankocho/tax-free/content/001978459.pdf"],jnto:["JNTO\u3008Japan's new tax-free shopping system\u3009","https://www.japan.travel/en/us/blog/everything-you-need-to-know-japans-new-tax-free-shopping-system/"],linshibi:["\u6797\u6C0F\u74A7\u3008\u65E5\u672C\u514D\u7A05\u65B0\u5236\u5EA6\u3009","https://linshibi.com/?p=48616"],newtalk:["\u65B0\u982D\u6BBC\u30086 \u5927\u9000\u7A05\u516C\u53F8\u6536\u8CBB\u4E00\u6B21\u770B\u3009\uFF082026/11/1\uFF09","https://newtalk.tw/news/view/2026-11-01/1068651"],ayaca:["ayaca\u3008\u65E5\u672C\u9000\u7A05\u5E73\u53F0\u6BD4\u8F03\u3009","https://ayaca.tw/japan-tax-refund-apps/"],apps:["jptaxrefund.com\u3008Japan Tax Refund Apps 2026\u3009","https://jptaxrefund.com/blog/japan-tax-refund-apps"],rojico:["Rojico\u30088 \u6A5F\u5834\u73FE\u91D1\u9000\u7A05\u9EDE\u3009","https://rojico.com/en/blog/japan-tax-free-refund-method-airport-guide-2026/"],sth:["\u661F\u5CF6\u3008Cash Japan \u8207 Self Tax Refund \u6BD4\u8F03\u3009","https://www.stheadline.com/travel/3628833/"],moodie:["Moodie Davitt\u3008Cash Japan\u3009","https://moodiedavittreport.com/global-blue-establishes-cash-japan-at-japanese-airports-as-new-tax-free-shopping-refund-system-kicks-in/"],bnext:["\u6578\u4F4D\u6642\u4EE3\u3008Global Blue \u5148\u588A\u9322\u3009","https://www.bnext.com.tw/article/92860/japan-tax-free-refund-2026-yodobashi-global-blue"],getaround:["Get Around Japan\u3008Tax Refund Fees 2026\u3009","https://www.getaroundjapan.jp/?p=11496"],chinatimes:["\u4E2D\u6642\u3008\u5510\u5409\u8A36\u5FB7\u624B\u7E8C\u8CBB 0 \u5143\u3009","https://www.chinatimes.com/realtimenews/20261006001646-260405"],ettoday:["ETtoday\u3008Bic Camera \u624B\u7E8C\u8CBB 0 \u5143\u3009","https://travel.ettoday.net/article/3251542.htm"]};function ki(){return`
    <ol class="g-steps">
      ${[["\u51FA\u767C\u524D","event",`<ul>
      <li>\u5148\u5728 <strong>Visit Japan Web</strong> \u767B\u9304\u8B77\u7167\uFF1B\u6210\u7530\u3001\u7FBD\u7530\u3001\u95DC\u897F\u3001\u4E2D\u90E8\u3001\u65B0\u5343\u6B72\u3001\u798F\u5CA1\u3001\u90A3\u9738\u53EF\u5728\u6A5F\u5834\u5148\u4E0A\u7DB2\u8FA6\u90E8\u5206\u624B\u7E8C\u3002</li>
      <li>\u60F3\u7528\u4FE1\u7528\u5361\u9000\u6B3E\u7684\u8A71\uFF0C<strong>JPrefund\u3001PIE VAT\u3001Global Blue</strong> \u53EF\u4EE5\u51FA\u767C\u524D\u5148\u8A3B\u518A\u5E33\u865F\u3001\u7D81\u597D\u5361\uFF08J-TaxRefund \u8981\u8CB7\u904E\u6771\u897F\u624D\u80FD\u8A3B\u518A\uFF09\u3002</li>
      <li>\u6E96\u5099\u4E00\u5F35<strong>\u82F1\u6587\u59D3\u540D\u8207\u8B77\u7167\u4E00\u81F4</strong>\u7684\u4FE1\u7528\u5361\uFF0C\u4EE5\u53CA\u80FD\u6536\u7C21\u8A0A\u9A57\u8B49\u78BC\u7684\u624B\u6A5F\u865F\u78BC\u3002</li></ul>`],["\u7D50\u5E33\u6642","shopping_bag",`<ul>
      <li>\u51FA\u793A\u8B77\u7167\uFF0C<strong>\u5148\u4ED8\u542B\u7A05\u50F9</strong>\u3002\u540C\u4E00\u5929\u3001\u540C\u4E00\u5BB6\u5E97\u672A\u7A05\u5408\u8A08 ${y(dt)} \u4EE5\u4E0A\u624D\u80FD\u8FA6\u3002</li>
      <li>\u554F\u5E97\u54E1\u5169\u4EF6\u4E8B\uFF1A<strong>\u7528\u54EA\u5BB6\u9000\u7A05\u516C\u53F8</strong>\u3001<strong>\u624B\u7E8C\u8CBB\u591A\u5C11</strong>\u3002</li>
      <li>\u4F9D\u6307\u793A\u6383\u6536\u64DA\u4E0A\u7684 QR code\uFF08\u6216\u8F38\u5165\u4EE3\u78BC\uFF09\uFF0C\u5728\u8A72\u516C\u53F8\u7DB2\u9801\uFF0FApp \u767B\u8A18\u9000\u6B3E\u65B9\u5F0F\uFF1BPIE VAT \u6709\u4E9B\u5E97<strong>\u8981\u7576\u5929\u5728 App \u5B8C\u6210</strong>\u3002</li>
      <li>\u6536\u64DA\u8207 QR code \u4E00\u5B9A\u8981\u7559\u8457\uFF0C\u5546\u54C1\u4E0D\u8981\u5728\u65E5\u672C\u62C6\u958B\u4F7F\u7528\u3002</li></ul>`],["\u6A5F\u5834\uFF0C\u8A17\u904B\u524D","flight_takeoff",`<ul>
      <li>\u8CFC\u8CB7\u5F8C <strong>90 \u5929\u5167</strong>\uFF0C\u5728<strong>\u6700\u5F8C\u96E2\u958B\u65E5\u672C\u7684\u6A5F\u5834</strong>\u8FA6\u7406\uFF08\u4F8B\u5982\u570B\u5167\u7DDA\u8F49\u6A5F\uFF0C\u8981\u5728\u6700\u5F8C\u51FA\u5883\u7684\u6A5F\u5834\u8FA6\uFF09\u3002</li>
      <li>\u5230\u51FA\u5883\u5927\u5EF3\u7684<strong>\u514D\u7A05\u624B\u7E8C\u6A5F\u53F0\u5237\u8B77\u7167</strong>\uFF1A\u7DA0\u71C8\u5B8C\u6210\uFF1B\u7D05\u71C8\u5E36\u5546\u54C1\u5230\u6D77\u95DC\u6AA2\u67E5\u5340\u3002</li>
      <li>\u6D77\u95DC<strong>\u4EE5\u6536\u64DA\u70BA\u55AE\u4F4D</strong>\u67E5\u9A57\uFF1A\u540C\u4E00\u5F35\u6536\u64DA\u5C11\u4E00\u4EF6\uFF0C\u6574\u5F35\u90FD\u4E0D\u80FD\u9000\u3002</li>
      <li><strong>\u78BA\u8A8D\u5B8C\u624D\u53BB\u8A17\u904B</strong>\uFF0C\u884C\u674E\u8A17\u904B\u5F8C\u5C31\u62FF\u4E0D\u56DE\u4F86\u8FA6\u4E86\u3002\u5728\u65E5\u672C\u7528\u6389\u7684\u5546\u54C1\uFF0C\u6539\u5411\u6D77\u95DC\u6AC3\u6AAF\u8AAA\u660E\u3002</li></ul>`],["\u9818\u9000\u6B3E","payments",`<ul>
      <li><strong>\u4FE1\u7528\u5361\uFF0F\u96FB\u5B50\u652F\u4ED8</strong>\uFF1A\u6D77\u95DC\u78BA\u8A8D\u5F8C\u7531\u9000\u7A05\u516C\u53F8\u9000\u56DE\uFF0C\u5165\u5E33\u7D04\u6578\u5929\u5230\u5169\u500B\u6708\u4E0D\u7B49\u3002</li>
      <li><strong>\u6A5F\u5834\u73FE\u91D1</strong>\uFF1A\u51FA\u5883\u5F8C\uFF08\u6210\u7530\u90E8\u5206\u5728\u51FA\u5883\u524D\uFF09\u5230 Cash JAPAN \u6216 Self Tax Refund \u6A5F\u53F0\u9818\u65E5\u5713\uFF0C\u53E6\u6536\u670D\u52D9\u8CBB\u3002</li>
      <li>\u9000\u6B3E\u7531<strong>\u9000\u7A05\u516C\u53F8</strong>\u652F\u4ED8\uFF0C<strong>\u6D77\u95DC\u4E0D\u767C\u9322</strong>\u3002</li></ul>`]].map(([a,e,s],n)=>`
        <li class="g-step"><span class="g-step-no" aria-hidden="true">${n+1}</span>
          <div><h3>${c(e,"sm")}${a}</h3>${s}</div></li>`).join("")}
    </ol>
    <div class="g-callout">${c("lightbulb","sm")}<p><strong>\u5E38\u898B\u5931\u8AA4\uFF1A</strong>\u5148\u8A17\u904B\u624D\u60F3\u5230\u8981\u9000\u7A05\u3001\u514D\u7A05\u54C1\u88AB\u585E\u9032\u8A17\u904B\u884C\u674E\u3001\u540C\u4E00\u5F35\u6536\u64DA\u7684\u6771\u897F\u5206\u958B\u653E\u3001\u5728 90 \u5929\u5F8C\u624D\u51FA\u5883\u3001\u5728\u570B\u5167\u7DDA\u6A5F\u5834\u5148\u8FA6\u624B\u7E8C\u3002\u9019\u4E9B\u60C5\u6CC1\u90FD\u62FF\u4E0D\u5230\u9000\u6B3E\u3002</p></div>
    ${We([Tt.jta,Tt.jtaFaq,Tt.jnto,Tt.jtaPdf])}`}var Si=[{name:"J-TaxRefund",co:"J&J Tax Free",site:"j-taxrefund.com",stores:"\u5510\u5409\u8A36\u5FB7\u3001Bic Camera\u3001\u591A\u6176\u5C4B\u3001\u9DB4\u7FBD\u85E5\u599D\u3001\u677E\u672C\u6E05\u3001GU\u3001\u6771\u6B66\u767E\u8CA8\u3001\u4F0A\u85E4\u6D0B\u83EF\u5802",rows:[["\u5F62\u5F0F","\u7DB2\u9801\uFF0C\u4E0D\u7528\u4E0B\u8F09 App\uFF1B\u6709\u7E41\u9AD4\u4E2D\u6587"],["\u8A3B\u518A","<strong>\u8CB7\u904E\u624D\u80FD\u8A3B\u518A</strong>\uFF1A\u7D50\u5E33\u5F8C\u6383\u6536\u64DA QR code\uFF0C\u586B\u8B77\u7167\u3001\u806F\u7D61\u65B9\u5F0F\u3001\u9000\u6B3E\u65B9\u5F0F\uFF0C\u7C21\u8A0A\u9A57\u8B49\u3002\u4E4B\u5F8C\u5728\u5176\u4ED6 J-TaxRefund \u5E97\u5BB6\u4E0D\u7528\u91CD\u586B"],["\u9000\u6B3E\u65B9\u5F0F","\u4FE1\u7528\u5361\u3001\u7C3D\u5E33\u5361\u3001\u652F\u4ED8\u5BF6\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u6A5F\u5834\u73FE\u91D1\uFF1B\u9280\u884C\u532F\u6B3E\u9650\u91D1\u984D\u8F03\u5927\u7684\u9000\u6B3E"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 180 \u5929"],["\u5165\u5E33","\u6578\u9031\u5230\u7D04\u5169\u500B\u6708"],["\u63D0\u9818\u8CBB\u7528","\u6A5F\u5834\u9818\u73FE\u91D1\u7D04 1.1%\uFF1BVisa \u5361 \xA52,000 \u4EE5\u4E0B\u7684\u9000\u6B3E\u6BCF\u7B46\u7D04 US$0.70"]]},{name:"JPrefund",co:"Smart Detax\uFF08Smart Technologies & Resources\uFF09",site:"jprefund.com",stores:"3COINS\u3001\u963F\u5361\u5C07\u672C\u8216\u3001\u601D\u5922\u6A02\u3001MURASAKI SPORTS\u3001GRAND FRONT OSAKA",rows:[["\u5F62\u5F0F","\u7DB2\u9801"],["\u8A3B\u518A","<strong>\u53EF\u51FA\u767C\u524D\u5148\u8A3B\u518A</strong>\uFF1A\u767B\u9304\u8B77\u7167\u3001\u7D81\u4FE1\u7528\u5361\uFF1B\u4E4B\u5F8C\u5728\u5E97\u88E1\u51FA\u793A\u8B77\u7167\uFF0C\u8CFC\u8CB7\u7D00\u9304\u6703\u81EA\u52D5\u9023\u5230\u5E33\u865F"],["\u9000\u6B3E\u65B9\u5F0F","\u4FE1\u7528\u5361\uFF08\u76EE\u524D\u4EE5 Visa\u3001Mastercard \u70BA\u4E3B\uFF09\u3001\u6A5F\u5834\u73FE\u91D1\uFF08\u6BCF\u8D9F\u4E0A\u9650 \xA5100,000\uFF09\uFF1B\u53F0\u5E63\u5E33\u6236\u4E0D\u80FD\u9078\u9280\u884C\u532F\u6B3E"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 200 \u5929\uFF0C\u56DE\u570B\u5F8C\u4E5F\u80FD\u7533\u8ACB"],["\u63D0\u9818\u8CBB\u7528","\u9280\u884C\u6216\u91D1\u6D41\u624B\u7E8C\u8CBB\uFF1B\u6709\u5831\u5C0E\u6307\u51FA\u53E6\u52A0\u9000\u7A05\u984D\u7D04 5% \u7684\u532F\u6B3E\u624B\u7E8C\u8CBB\uFF08\u5F85\u78BA\u8A8D\uFF09"]]},{name:"Global Blue",co:"Global Blue TFS Japan",site:"App\u300CShop Tax Free\u300D",stores:"\u9AD8\u5CF6\u5C4B\u3001\u5927\u4E38\uFF0F\u677E\u5742\u5C4B\u7B49\u767E\u8CA8\u3001Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09\u3001EDION",rows:[["\u5F62\u5F0F","App\u300CShop Tax Free\u300D\u6216\u7DB2\u9801\uFF1B\u4ECB\u9762\u7121\u7E41\u9AD4\u4E2D\u6587\uFF08\u6709\u7C21\u4E2D\u3001\u82F1\u3001\u65E5\uFF09"],["\u8A3B\u518A","\u53EF\u51FA\u767C\u524D\u5148\u5728 App \u52A0\u5165\u4FE1\u7528\u5361\u6216\u96FB\u5B50\u9322\u5305"],["\u9000\u6B3E\u65B9\u5F0F","Visa\u3001Mastercard\u3001AMEX\u3001JCB\u3001\u9280\u806F\u3001\u652F\u4ED8\u5BF6\u7B49\uFF1B\u6A5F\u5834 Cash JAPAN \u53EF\u9818\u73FE\u91D1"],["\u5E02\u5340\u5148\u9818\u73FE\u91D1","Yodobashi \u7B49 11 \u5BB6\u5927\u578B\u9580\u5E02\u53EF<strong>\u51FA\u5883\u524D\u5148\u9818\u73FE\u91D1</strong>\uFF08\u4E0D\u9650\u5728 Yodobashi \u8CB7\u7684\uFF0CGlobal Blue \u52A0\u76DF\u5E97\u7684\u4EA4\u6613\u90FD\u53EF\u4EE5\uFF09\uFF0C\u4F46\u8981<strong>\u767B\u8A18\u4FE1\u7528\u5361\u64D4\u4FDD</strong>\uFF0C\u51FA\u5883\u6C92\u5B8C\u6210\u6D77\u95DC\u78BA\u8A8D\u6703\u5F9E\u5361\u6263\u56DE"],["\u671F\u9650","<strong>\u96E2\u958B\u65E5\u672C\u5F8C 3 \u9031\u5167</strong>\u8981\u6307\u5B9A\u9000\u6B3E\u65B9\u5F0F\uFF0C\u5426\u5247\u6539\u5BC4\u9810\u4ED8\u5361\uFF08\u6703\u6263\u8CBB\uFF09\uFF1B\u6D77\u95DC\u78BA\u8A8D\u5F8C 3 \u500B\u6708\u5167\u6709\u6548"],["\u5165\u5E33","\u6D77\u95DC\u78BA\u8A8D\u5F8C\u7D04 3\uFF5E5 \u5929"]]},{name:"PIE VAT",co:"Pie Systems Japan",site:"App\u300CPIE VAT\u300D",stores:"\u4E09\u4E95 Outlet Park\u3001LaLaport\u3001\u6F80\u8C37 109\u3001Montbell",rows:[["\u5F62\u5F0F","App\uFF08iOS\uFF0FAndroid\uFF09\u6216\u7DB2\u9801"],["\u8A3B\u518A","\u53EF\u51FA\u767C\u524D\u5EFA\u7ACB\u5E33\u865F\u3001\u6383\u8B77\u7167\uFF1B\u7D50\u5E33\u5F8C\u6383\u5E97\u5BB6 QR code \u6216\u8F38\u5165 6 \u78BC\u7533\u8ACB\u4EE3\u78BC\u3002<strong>\u90E8\u5206\u5E97\u5BB6\u8981\u7576\u5929\u5B8C\u6210</strong>"],["\u9000\u6B3E\u65B9\u5F0F","\u53F0\u7063\u65C5\u5BA2\u4EE5\u4FE1\u7528\u5361\u6216\u7C3D\u5E33\u91D1\u878D\u5361\u70BA\u4E3B\uFF1B<strong>\u4E0D\u652F\u63F4\u6A5F\u5834\u73FE\u91D1</strong>"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 18 \u500B\u6708"],["\u5165\u5E33","\u7D04 5\uFF5E15 \u500B\u5DE5\u4F5C\u5929"],["\u63D0\u9818\u8CBB\u7528","\u670D\u52D9\u8CBB 1.5%\uFF5E3%\uFF0B\u63D0\u9818\u8CBB\u7D04\u672A\u7A05\u50F9 0.28%\uFF5E0.32%\uFF08\u4F9D\u5E97\u5BB6\u6216\u5546\u5834\uFF09"]]},{name:"Global Tax Free-Planet",co:"Planet",site:"\u4F9D\u5E97\u5BB6\u8AAA\u660E",stores:"AEON \u6C38\u65FA\u5922\u6A02\u57CE",rows:[["\u9000\u6B3E\u65B9\u5F0F","\u4F9D\u5E97\u5BB6\u8AAA\u660E\uFF1B\u6A5F\u5834\u53EF\u7528 Self Tax Refund \u6A5F\u53F0\u9818\u73FE\u91D1"],["\u5E97\u5BB6\u624B\u7E8C\u8CBB","AEON \u56DE\u5831\u70BA 1.5%"]]},{name:"Ocean Tax Refund",co:"Ocean",site:"App\u3001\u7DB2\u9801\u3001\u5FAE\u4FE1\uFF0FLINE \u5C0F\u7A0B\u5F0F",stores:"Animate\uFF08\u5B89\u5229\u7F8E\u7279\uFF09",rows:[["\u9000\u6B3E\u65B9\u5F0F","\u9280\u884C\u3001\u4FE1\u7528\u5361\u3001\u5FAE\u4FE1\u652F\u4ED8\u3001\u652F\u4ED8\u5BF6\u3001PayPal\u3001\u6A5F\u5834\u65E5\u5713\u73FE\u91D1"],["\u671F\u9650","\u8CFC\u8CB7\u5F8C 180 \u5929"],["\u63D0\u9818\u8CBB\u7528","\u9000\u56DE\u4FE1\u7528\u5361\u6700\u4F4E \xA5180 \u6216\u672A\u7A05\u50F9 0.5%\uFF08\u7B2C\u4E09\u65B9\u63D0\u9818\u8CBB\uFF09"]]}];function Ti(){return`
    <p class="g-lead">\u540C\u4E00\u5BB6\u5E97\u901A\u5E38\u53EA\u7528\u4E00\u5BB6\u9000\u7A05\u516C\u53F8\uFF0C\u7D50\u5E33\u6642\u770B\u6536\u64DA\u6216\u554F\u5E97\u54E1\u5C31\u77E5\u9053\u3002\u4EE5\u4E0B\u300C\u5E38\u898B\u5E97\u5BB6\u300D\u70BA 11/1 \u4E0A\u8DEF\u5F8C\u7684\u56DE\u5831\u6574\u7406\uFF0C\u53EF\u80FD\u8B8A\u52D5\u3002</p>
    <div class="g-ops">
      ${Si.map(t=>`
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
    ${We([Tt.ayaca,Tt.apps,Tt.newtalk,Tt.linshibi,Tt.bnext])}`}var Ei=[["\u6210\u7530","T1 \u5357\uFF0F\u5317\u7FFC 3F\u3001T2 3F\u3001T3 3F","Cash JAPAN","\u6AC3\u53F0 6:00\u201323:00\uFF08T3 \u81F3 22:00\uFF09\uFF1B\u6A5F\u53F0 24 \u5C0F\u6642"],["\u6210\u7530","T1 \u4E2D\u592E\u5927\u6A13 4F\u3001T2 \u672C\u9928 3F\uFF08<strong>\u51FA\u5883\u524D</strong>\uFF09","Self Tax Refund","6:00\u201324:00"],["\u7FBD\u7530","T2 \u570B\u969B\u7DDA\u3001T3 3F \u51FA\u5883\u5F8C\uFF08\u5404 5 \u53F0\uFF09","Self Tax Refund","T2 6:45\u2013\u7FCC 1:30\uFF1BT3 24 \u5C0F\u6642"],["\u95DC\u897F","T1 \u51FA\u5883\u5F8C\uFF0816 \u53F0\uFF0B\u6AC3\u53F0\uFF09\u3001T2 1F \u51FA\u5883\u5F8C\uFF085 \u53F0\uFF09","Cash JAPAN","T1 \u6AC3\u53F0 7:00\u201324:00"],["\u4E2D\u90E8","T1 3F \u514D\u7A05\u5340\uFF08\u7B2C 20 \u767B\u6A5F\u9580\u9644\u8FD1\uFF09\u3001T2 2F \u51FA\u5883\u5F8C","Cash JAPAN","T1 7:00\u201322:15\uFF1BT2 10:00\u201321:30"],["\u798F\u5CA1","\u570B\u969B\u7DDA 3F \u51FA\u5883\u5F8C\u514D\u7A05\u5340","Cash JAPAN","\u6A5F\u53F0 6:00\u201321:00\uFF1B\u6AC3\u53F0 7:00\u201321:00"],["\u65B0\u5343\u6B72","\u570B\u969B\u7DDA 3F","Cash JAPAN","\u6AC3\u53F0 7:00\u201320:00\uFF1B\u6A5F\u53F0 6:00\u201320:30"],["\u795E\u6236","T2 1F \u51FA\u5883\u5F8C\uFF082 \u53F0\uFF09","Cash JAPAN","24 \u5C0F\u6642"],["\u90A3\u9738","\u570B\u969B\u7DDA 2F \u51FA\u5883\u5F8C","Self Tax Refund","6:00\u201321:00\uFF08\u4F9D\u822A\u73ED\u8ABF\u6574\uFF09"]];function Mi(){return`
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
        <tbody>${Ei.map(([t,a,e,s])=>`<tr><th scope="row">${t}<small class="g-tag">${e}</small></th><td>${a}</td><td>${s}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <h3 class="g-sub">\u600E\u9EBC\u9818</h3>
    <ol class="g-ol">
      <li>\u5148\u5B8C\u6210\u514D\u7A05\u624B\u7E8C\u6A5F\u53F0\uFF08\u7DA0\u71C8\uFF09\uFF0C\u7D05\u71C8\u8981\u5148\u904E\u6D77\u95DC\u6AA2\u67E5\uFF0C\u7D50\u679C\u50B3\u5230\u9818\u9322\u6A5F\u53F0\u53EF\u80FD\u8981\u7B49\u5E7E\u5206\u9418\u3002</li>
      <li>\u8A17\u904B\u3001\u5B89\u6AA2\u3001\u51FA\u5883\uFF08\u6210\u7530\u7684 Self Tax Refund \u5728\u51FA\u5883\u524D\uFF0C\u9806\u5E8F\u76F8\u53CD\uFF09\u3002</li>
      <li>\u5230\u6A5F\u53F0\u5237\u8B77\u7167\uFF0C\u756B\u9762\u6703\u5217\u51FA<strong>\u53EF\u9818\u91D1\u984D\u8207\u6263\u6389\u7684\u8CBB\u7528</strong>\uFF0C\u78BA\u8A8D\u5F8C\u9818\u65E5\u5713\u73FE\u91D1\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u6A5F\u5834\u514D\u7A05\u5E97\u82B1\u6389\u3002</li>
    </ol>
    <div class="g-callout">${c("warning","sm")}<p><strong>PIE VAT \u7684\u5E97\u5BB6\u4E0D\u80FD\u5728\u6A5F\u5834\u9818\u73FE\u91D1</strong>\uFF08\u4F8B\u5982\u4E09\u4E95 Outlet\u3001LaLaport\uFF09\u3002\u53E6\u5916\uFF0C\u73FE\u91D1\u6BD4\u9000\u56DE\u4FE1\u7528\u5361\u591A\u6263\u7D04 1%\uFF0C\u91D1\u984D\u5927\u6642\u5DEE\u8DDD\u660E\u986F\uFF1B\u8D95\u98DB\u6A5F\u6216\u60F3\u7576\u5834\u628A\u9322\u82B1\u6389\u6642\u518D\u9078\u73FE\u91D1\u3002</p></div>
    ${We([Tt.rojico,Tt.sth,Tt.moodie,Tt.getaround])}`}function Ai(){return`
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
    ${We([Tt.ayaca,Tt.apps,Tt.linshibi,Tt.getaround])}`}var So=[["\u5510\u5409\u8A36\u5FB7","J-TaxRefund","0%"],["Bic Camera","J-TaxRefund","0%"],["\u591A\u6176\u5C4B","J-TaxRefund","0%"],["\u9DB4\u7FBD\u85E5\u599D","J-TaxRefund","0%"],["\u672D\u5E4C\u85E5\u599D","J-TaxRefund","0%"],["\u677E\u672C\u6E05","J-TaxRefund","\u7D04 0.33%\uFF08\u5F85\u78BA\u8A8D\uFF09"],["GU","J-TaxRefund","1%"],["\u6771\u6B66\u767E\u8CA8","J-TaxRefund","1%"],["\u4E8C\u6728\u9AD8\u723E\u592B","J-TaxRefund","1.5%"],["\u4F0A\u85E4\u6D0B\u83EF\u5802","J-TaxRefund","1.65%"],["\u677E\u5C4B\u9280\u5EA7","J-TaxRefund","\u542B\u7A05\u50F9 2.15%"],["\u4E09\u4E95 Outlet\u3001LaLaport","PIE VAT","1.5%"],["\u6F80\u8C37 109","PIE VAT","1.55%"],["Montbell","PIE VAT","2%\uFF5E3%"],["Yodobashi\uFF08\u53CB\u90FD\u516B\u559C\uFF09","Global Blue","0%\uFF08\u9996\u65E5\u56DE\u5831\uFF09"],["\u9AD8\u5CF6\u5C4B","Global Blue","1.55%"],["\u5927\u4E38\uFF0F\u677E\u5742\u5C4B","Global Blue","2.3%"],["EDION","Global Blue","\u6BCF\u7B46 \xA5210"],["3COINS","JPrefund","\u6BCF\u7B46 \xA5320"],["\u963F\u5361\u5C07\u672C\u8216","JPrefund","\u542B\u7A05\u50F9 1.1%"],["GRAND FRONT OSAKA","JPrefund","1.5%"],["\u601D\u5922\u6A02","JPrefund","1%\uFF5E2.5%"],["AEON \u6C38\u65FA\u5922\u6A02\u57CE","Planet","1.5%"],["Animate","Ocean","2.1%"]];function Li(){return`
    <p class="g-lead">\u624B\u7E8C\u8CBB<strong>\u7531\u5E97\u5BB6\u6C7A\u5B9A</strong>\uFF0C\u653F\u5E9C\u6C92\u6709\u4E0A\u9650\uFF1B\u5E97\u5BB6\u53EF\u4EE5\u81EA\u5DF1\u5438\u6536\uFF0C\u4E5F\u53EF\u4EE5\u8F49\u7D66\u65C5\u5BA2\u3002\u8A08\u7B97\u57FA\u6E96\u5404\u5E97\u4E0D\u540C\uFF0C\u6709\u7684\u4EE5<strong>\u672A\u7A05\u50F9</strong>\u3001\u6709\u7684\u4EE5<strong>\u542B\u7A05\u50F9</strong>\u8A08\u7B97\uFF08\u4E0B\u8868\u6709\u8A3B\u660E\u7684\u70BA\u542B\u7A05\u50F9\uFF09\u3002\u4EE5\u672A\u7A05\u50F9\u8A08\u6642\uFF0C\u6D88\u8CBB\u7A05 10%\u3001\u624B\u7E8C\u8CBB 1.5%\uFF0C\u53EF\u4EE5\u62FF\u56DE\u672A\u7A05\u50F9\u7684 8.5%\u3002</p>
    <div class="g-calc">${c("calculate","sm")}<p><strong>\u5B9A\u984D\u6536\u8CBB\u8981\u5C0F\u5FC3\uFF1A</strong>3COINS \u6BCF\u7B46\u6536 \xA5320\u3002\u672A\u7A05 ${y(5e3)} \u9000\u7A05 \xA5500\uFF0C\u6263\u6389\u5F8C\u53EA\u5269 \xA5180\uFF0C\u7B49\u65BC\u624B\u7E8C\u8CBB 6.4%\uFF1B\u8CB7\u5230\u672A\u7A05 \xA510,000 \u624D\u964D\u5230 3.2%\u3002\u540C\u4E00\u5BB6\u5E97<strong>\u76E1\u91CF\u5408\u4F75\u6210\u4E00\u5F35\u6536\u64DA</strong>\u3002</p></div>
    <div class="table-wrap">
      <table class="g-table g-fees">
        <caption>\u5404\u5E97\u9000\u7A05\u624B\u7E8C\u8CBB\uFF08\u4F9D\u9000\u7A05\u516C\u53F8\u5206\u7D44\uFF1B11/1 \u4E0A\u8DEF\u9996\u65E5\u56DE\u5831\uFF0C\u6703\u8B8A\u52D5\uFF09</caption>
        <thead><tr><th scope="col">\u5E97\u5BB6</th><th scope="col">\u5E97\u5BB6\u624B\u7E8C\u8CBB</th></tr></thead>
        ${[...new Set(So.map(([,t])=>t))].map(t=>`
        <tbody>
          <tr class="g-group"><th scope="colgroup" colspan="2">${t}</th></tr>
          ${So.filter(([,a])=>a===t).map(([a,,e])=>`<tr${e.startsWith("0%")?' class="is-free"':""}><th scope="row">${a}</th><td>${e}</td></tr>`).join("")}
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
    ${We([Tt.newtalk,Tt.linshibi,Tt.chinatimes,Tt.ettoday,Tt.getaround])}`}var Pi=[{date:"2026/7/1",title:"\u65E5\u672C\u51FA\u570B\u7A05\u8ABF\u9AD8\u70BA \xA53,000",icon:"flight_takeoff",state:"done",body:`<p>\u570B\u969B\u89C0\u5149\u65C5\u5BA2\u7A05\u5F9E\u6BCF\u6B21\u51FA\u5883 \xA51,000 \u8ABF\u9AD8\u70BA <strong>\xA53,000</strong>\uFF0C\u901A\u5E38\u5DF2\u542B\u5728\u6A5F\u7968\u88E1\u3002</p>
      <ul><li>\u4EE5<strong>\u8CFC\u7968\u65E5</strong>\u5224\u65B7\uFF1A2026/6/30 \u524D\u8CB7\u7684\u6A5F\u7968\u4ECD\u662F \xA51,000\uFF1B\u4E4B\u5F8C\u6539\u7968\u5247\u9069\u7528\u65B0\u7A05\u984D\u3002</li>
      <li>\u672A\u6EFF 2 \u6B72\u3001\u5165\u5883\u5F8C 24 \u5C0F\u6642\u5167\u8F49\u6A5F\u51FA\u5883\u8005\u514D\u5FB5\u3002</li></ul>`,src:[["\u4E58\u308A\u3082\u306E\u30CB\u30E5\u30FC\u30B9\u3008\u51FA\u570B\u7A05 3 \u500D\u3009","https://trafficnews.jp/post/667615"]]},{date:"2026/11/1",title:"\u514D\u7A05\u6539\u70BA\u300C\u51FA\u5883\u5F8C\u9000\u7A05\u300D\uFF08\u30EA\u30D5\u30A1\u30F3\u30C9\u65B9\u5F0F\uFF09",icon:"receipt_long",state:"done",body:`<ul><li>\u5E97\u982D\u5148\u4ED8\u542B\u7A05\u50F9\uFF0C\u51FA\u5883\u67E5\u9A57\u5F8C\u7531\u9000\u7A05\u516C\u53F8\u9000\u6B3E\uFF1B\u9580\u6ABB\u540C\u4E00\u5929\u540C\u4E00\u5BB6\u5E97\u672A\u7A05 ${y(dt)}\u3002</li>
      <li><strong>\u6D88\u8017\u54C1 50 \u842C\u65E5\u5713\u7684\u4E0A\u9650\u53D6\u6D88</strong>\uFF0C\u4E5F\u4E0D\u518D\u9700\u8981\u7279\u6B8A\u5BC6\u5C01\u5305\u88DD\u3002</li>
      <li>\u672A\u7A05\u55AE\u50F9 100 \u842C\u65E5\u5713\u4EE5\u4E0A\u7684\u5546\u54C1\uFF0C\u5E97\u5BB6\u8981\u63D0\u4F9B\u5E8F\u865F\u7B49\u5546\u54C1\u8CC7\u8A0A\u3002</li>
      <li><strong>\u6C92\u6709\u904E\u6E21\u671F</strong>\uFF0C11/1 \u8D77\u8CFC\u8CB7\u7684\u5546\u54C1\u4E00\u5F8B\u9069\u7528\u65B0\u5236\u3002\u8A73\u7D30\u6D41\u7A0B\u898B\u300C\u6D41\u7A0B\u300D\u5206\u9801\u3002</li></ul>`,src:[Tt.jta,Tt.jtaPdf]},{date:"2027/4/1",title:"\u98DF\u54C1\u6D88\u8CBB\u7A05\u9810\u8A08\u964D\u70BA 1%\uFF08\u70BA\u671F 2 \u5E74\uFF09",icon:"bakery_dining",state:"pending",body:`<p>\u9069\u7528 8% \u8F15\u6E1B\u7A05\u7387\u7684\u98F2\u98DF\u6599\u54C1\uFF0C\u9810\u8A08 2027/4/1\uFF5E2029/3/31 \u964D\u70BA <strong>1%</strong>\uFF1B<strong>\u9152\u985E\u8207\u5167\u7528\u9910\u98F2\u7DAD\u6301 10%</strong>\u3002</p>
      <ul><li>\u5C0D\u65C5\u5BA2\u7684\u5F71\u97FF\uFF1A\u98DF\u54C1\u6A19\u50F9\u8B8A\u4FBF\u5B9C\uFF0C\u4F46\u80FD<strong>\u9000\u7684\u7A05\u4E5F\u8DDF\u8457\u8B8A\u5C11</strong>\uFF08\u5F9E 8% \u8B8A 1%\uFF09\uFF0C\u8CB7\u98DF\u54C1\u6642\u8FA6\u514D\u7A05\u7684\u5212\u7B97\u7A0B\u5EA6\u6703\u964D\u4F4E\u3002</li>
      <li>\u6CD5\u6848 2026/11/6 \u773E\u8B70\u9662\u901A\u904E\uFF0C<strong>\u53C3\u8B70\u9662\u5BE9\u8B70\u4E2D\u3001\u5C1A\u672A\u6210\u7ACB</strong>\u3002\u65C5\u884C\u5728\u9019\u6BB5\u671F\u9593\u3001\u6CD5\u6848\u901A\u904E\u5F8C\uFF0C\u65B0\u589E\u5546\u54C1\u6642\u53EF\u628A\u7A05\u7387\u9078\u6210\u300C1% \u98DF\u54C1\u300D\u3002</li></ul>`,src:[["NHK\u3008\u98DF\u6599\u54C1\u306E\u6D88\u8CBB\u7A0E\u6E1B\u7A0E\u95A2\u9023\u6CD5\u6848 \u8846\u8B70\u9662\u3092\u901A\u904E\u3009","https://news.web.nhk/newsweb/na/nd-20261106de71359"],["\u6642\u4E8B\u901A\u4FE1\u3008\u6D88\u8CBB\u6E1B\u7A0E\u65B9\u91DD\u3092\u95A3\u8B70\u6C7A\u5B9A\u3009","https://www.jiji.com/jc/article?k=2026080500718&g=pol"]]},{date:"2028 \u5E74\u5EA6",title:"\u96FB\u5B50\u5165\u5883\u8A31\u53EF JESTA\uFF08\u9810\u5B9A\uFF09",icon:"event",state:"plan",body:"<p>\u65E5\u672C\u8A08\u756B\u5C0D\u514D\u7C3D\u65C5\u5BA2\u5BE6\u65BD\u4E8B\u5148\u4E0A\u7DB2\u7533\u8ACB\u7684\u5165\u5883\u8A31\u53EF\uFF0C\u653F\u5E9C\u76EE\u6A19\u70BA 2028 \u5E74\u5EA6\uFF0C\u8CBB\u7528\u8207\u9069\u7528\u570B\u5BB6\u5C1A\u672A\u516C\u5E03\u3002<strong>2027 \u5E74\u524D\u5F80\u65E5\u672C\u9084\u4E0D\u9700\u8981\u7533\u8ACB\u3002</strong></p>",src:[["VisasNews\u3008JESTA planned for 2028\u3009","https://visasnews.com/en/japans-parliament-unveils-new-details-on-jesta-the-electronic-travel-authorization-planned-for-2028/"]]}],Ci={done:["\u5DF2\u5BE6\u65BD","badge-cyan"],soon:["\u5373\u5C07\u5BE6\u65BD","badge-warn"],pending:["\u5BE9\u8B70\u4E2D","badge-warn"],plan:["\u9810\u5B9A","badge-muted"]};function Fi(){return`
    <p class="g-lead">\u9000\u7A05\u65B9\u5F0F\u3001\u51FA\u570B\u7A05\u3001\u98DF\u54C1\u7A05\u7387\u90FD\u6709\u8B8A\u52D5\u3002\u884C\u52D5\u96FB\u6E90\u8207\u56DE\u53F0\u7063\u5165\u5883\u898F\u5B9A\uFF0C\u8ACB\u770B\u300C\u6253\u5305\u8207\u6D77\u95DC\u300D\u9801\u3002</p>
    <ol class="rule-timeline">
      ${Pi.map(t=>{let[a,e]=Ci[t.state];return`
        <li class="rt-item rt-${t.state}">
          <span class="rt-dot" aria-hidden="true">${c(t.icon,"sm")}</span>
          <div class="rt-body">
            <p class="rt-meta"><time>${t.date}</time><span class="badge ${e}">${a}</span></p>
            <h3 class="rt-title">${t.title}</h3>
            ${t.body}
            ${We(t.src)}
          </div>
        </li>`}).join("")}
    </ol>`}var An=[{id:"flow",label:"\u6D41\u7A0B",render:ki},{id:"ops",label:"\u9000\u7A05\u516C\u53F8",render:Ti},{id:"cash",label:"\u6A5F\u5834\u73FE\u91D1",render:Mi},{id:"card",label:"\u4FE1\u7528\u5361",render:Ai},{id:"fees",label:"\u624B\u7E8C\u8CBB",render:Li},{id:"rules",label:"\u65B0\u5236\u5EA6",render:Fi}],To=()=>{try{return localStorage.getItem(Eo)}catch{return null}};function Mo({heading:t=!0}={}){let a=An.some(e=>e.id===To())?To():"flow";return`
  <section class="card guide-card" ${t?'aria-labelledby="guide-title"':'aria-label="\u9000\u7A05\u6307\u5357\u5167\u5BB9"'}>
    ${t?`<p class="eyebrow">${c("payments","sm")}TAX REFUND GUIDE</p>
    <h2 id="guide-title" class="section-title-lg">\u9000\u7A05\u6307\u5357\uFF1A2026/11 \u65B0\u5236\u600E\u9EBC\u9000</h2>`:""}
    <p class="muted small">\u8CC7\u6599\u67E5\u8B49\u65E5 ${wi}\u3002\u65B0\u5236\u525B\u4E0A\u8DEF\uFF0C\u8CBB\u7387\u8207\u6D41\u7A0B\u4EE5\u5404\u5E97\u3001\u5404\u9000\u7A05\u516C\u53F8\u516C\u544A\u70BA\u6E96\u3002</p>
    <div class="g-tabs" role="tablist" aria-label="\u9000\u7A05\u6307\u5357\u5206\u9801">
      ${An.map(e=>`<button type="button" role="tab" id="gtab-${e.id}" aria-controls="gpanel-${e.id}" aria-selected="${e.id===a}" tabindex="${e.id===a?0:-1}" class="g-tab">${e.label}</button>`).join("")}
    </div>
    ${An.map(e=>`<div class="g-panel" role="tabpanel" id="gpanel-${e.id}" aria-labelledby="gtab-${e.id}" tabindex="0"${e.id===a?"":" hidden"}>${e.render()}</div>`).join("")}
  </section>`}function Ao(t){let a=t.querySelector(".g-tabs");if(!a)return;let e=[...a.querySelectorAll('[role="tab"]')],s=(n,o=!1)=>{e.forEach(r=>{let i=r===n;r.setAttribute("aria-selected",i),r.tabIndex=i?0:-1,t.querySelector(`#${r.getAttribute("aria-controls")}`).hidden=!i}),o&&n.focus(),a.scrollLeft=n.offsetLeft-(a.clientWidth-n.offsetWidth)/2;try{localStorage.setItem(Eo,n.id.replace("gtab-",""))}catch{}};a.addEventListener("click",n=>{let o=n.target.closest('[role="tab"]');o&&s(o)}),a.addEventListener("keydown",n=>{let o=e.indexOf(document.activeElement);if(o<0)return;let r={ArrowRight:o+1,ArrowLeft:o-1,Home:0,End:e.length-1}[n.key];r!==void 0&&(n.preventDefault(),s(e[(r+e.length)%e.length],!0))})}function Ri(t){return t.innerHTML=`
    ${Ht({eyebrow:`TAX REFUND GUIDE \xB7 ${u(w.state.settings.tripName)}`,title:"\u9000\u7A05\u6307\u5357",sub:"2026/11 \u65B0\u5236\u600E\u9EBC\u9000\uFF1A\u6D41\u7A0B\u3001\u9000\u7A05\u516C\u53F8\u3001\u6A5F\u5834\u73FE\u91D1\u3001\u4FE1\u7528\u5361\u8207\u624B\u7E8C\u8CBB\u3002",actions:`<a class="btn btn-ghost" href="#/budget">${c("undo")}\u56DE\u9810\u7B97\u532F\u7387</a>`})}
    ${Mo({heading:!1})}`,Ao(t),{}}var Pn={};xe(Pn,{mount:()=>_i});function Ii(){try{let t=location.hash.replace(/^#\/?share\/?/,"").split(/[/?]/)[0];if(!t)return null;let a=atob(t.replace(/-/g,"+").replace(/_/g,"/")),e=JSON.parse(new TextDecoder().decode(Uint8Array.from(a,n=>n.charCodeAt(0))));if(e?.v!==1||typeof e.n!="string"||!Array.isArray(e.i))return null;let s=n=>Number.isFinite(Number(n))?Number(n):0;return{name:e.n.slice(0,40),trip:String(e.t??"").slice(0,60),rate:s(e.r),locked:!!e.l,at:s(e.at),items:e.i.filter(Array.isArray).slice(0,200).map(([n,o,r])=>({name:String(n??"").slice(0,120),qty:s(o)||1,amount:s(r)})),pending:(Array.isArray(e.p)?e.p:[]).slice(0,200).map(n=>String(n).slice(0,120)),goods:s(e.g),fee:s(e.f),feeDesc:String(e.fd??"").slice(0,40),refund:s(e.rf),paid:s(e.pd)}}catch{return null}}function _i(t){let a=Ii();if(!a)return t.innerHTML=`
      ${Ht({eyebrow:"SHARED \xB7 \u4EE3\u8CFC\u660E\u7D30",title:"\u4EE3\u8CFC\u660E\u7D30"})}
      ${Ue({title:"\u9019\u500B\u9023\u7D50\u8B80\u4E0D\u5230\u660E\u7D30",text:"\u9023\u7D50\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF08\u8907\u88FD\u6642\u88AB\u622A\u65B7\uFF09\uFF0C\u8ACB\u5C0D\u65B9\u91CD\u65B0\u8907\u88FD\u4E00\u6B21\u5206\u4EAB\u9023\u7D50\u3002",actions:`<a class="btn btn-ghost" href="#/home">${c("auto_awesome")}\u770B\u770B\u9019\u500B\u7DB2\u7AD9</a>`})}`,{};let e=a.goods+a.fee,s=e-a.paid,n=o=>`NT$ ${ut(o*a.rate)}`;return t.innerHTML=`
    ${Ht({eyebrow:`SHARED \xB7 ${u(a.trip||"\u4EE3\u8CFC\u660E\u7D30")}`,title:`@${u(a.name)} \u7684\u4EE3\u8CFC\u660E\u7D30`,sub:`\u9019\u662F${a.at?` ${Ot(a.at)} `:""}\u7522\u751F\u7684\u552F\u8B80\u660E\u7D30\uFF0C\u4E0D\u6703\u96A8\u4E4B\u5F8C\u7684\u4FEE\u6539\u66F4\u65B0\u3002`})}
    <section class="card share-card" aria-labelledby="share-title">
      <header class="card-head">
        <h2 id="share-title" class="section-title">${c("receipt_long","sm")}\u5DF2\u8CB7\u5230\u7684\u5546\u54C1</h2>
        <span class="badge ${s<=0&&e?"badge-cyan":a.paid?"badge-warn":"badge-muted"}">${s<=0&&e?"\u5DF2\u4ED8\u6E05":a.paid?`\u5DF2\u4ED8 ${y(a.paid)}`:"\u5C1A\u672A\u4ED8\u6B3E"}</span>
      </header>
      ${a.items.length?`<ol class="share-list">
        ${a.items.map(o=>`<li><span>${u(o.name)}${o.qty>1?` \xD7 ${o.qty}`:""}</span><strong>${y(o.amount)}</strong></li>`).join("")}
      </ol>`:'<p class="muted pad">\u9084\u6C92\u6709\u8CB7\u5230\u7684\u5546\u54C1\u3002</p>'}
      <dl class="share-sum">
        ${a.fee?`<div><dt>\u5546\u54C1\u5C0F\u8A08</dt><dd>${y(a.goods)}</dd></div>
        <div><dt>\u4EE3\u8CFC\u8CBB${a.feeDesc?`\uFF08${u(a.feeDesc)}\uFF09`:""}</dt><dd>${y(a.fee)}</dd></div>`:""}
        <div class="strong"><dt>\u5408\u8A08</dt><dd>${y(e)}<small>\u7D04 ${n(e)}</small></dd></div>
        ${a.paid?`<div><dt>\u5DF2\u4ED8</dt><dd>${y(a.paid)}</dd></div>
        <div class="strong"><dt>${s>0?"\u5C1A\u5DEE":s<0?"\u591A\u4ED8":"\u9918\u984D"}</dt><dd>${y(Math.abs(s))}<small>\u7D04 ${n(Math.abs(s))}</small></dd></div>`:""}
      </dl>
      <p class="muted small">\u532F\u7387 1 JPY = ${ut(a.rate,4)} TWD${a.locked?"\uFF08\u5DF2\u9396\u5B9A\uFF09":""}\u3002${a.refund?`\u91D1\u984D\u70BA\u6263\u9664\u9000\u7A05\u5F8C\u7684\u5BE6\u969B\u6210\u672C\uFF08\u5DF2\u6263\u9000\u7A05 ${y(a.refund)}\uFF09\u3002`:""}</p>
      ${a.pending.length?`<p class="share-pending">${c("pending","sm")}\u9084\u6C92\u8CB7\u5230\uFF1A${a.pending.map(u).join("\u3001")}</p>`:""}
    </section>`,{}}var Oa={home:{view:mn,title:"\u9996\u9801"},list:{view:bn,title:"\u63A1\u8CB7\u6E05\u55AE"},split:{view:kn,title:"\u4EE3\u8CFC\u5206\u5E33"},budget:{view:Sn,title:"\u9810\u7B97\u532F\u7387"},packing:{view:Mn,title:"\u6253\u5305\u8207\u6D77\u95DC"},guide:{view:Ln,title:"\u9000\u7A05\u6307\u5357",nav:"budget"},share:{view:Pn,title:"\u4EE3\u8CFC\u660E\u7D30",nav:"none"}},Fn=null;function Ni(){let t=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0];return Oa[t]?t:"home"}function Co(){let t=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0];t==="areas"?(w.updateSettings({listView:"store"}),history.replaceState(null,"","#/list")):t==="luggage"&&history.replaceState(null,"","#/packing")}function Rn(){let t=w.state;return{state:t,sum:Re(t),rate:t.settings.rate}}function Fo({focus:t=!0}={}){let a=Ni();Fn?.instance?.destroy?.();let e=document.createElement("div");e.id="view",e.className="view",vt("#view").replaceWith(e);let s=Oa[a].view.mount(e,Rn());Fn={name:a,instance:s},document.body.dataset.route=a,document.documentElement.classList.remove("boot-home","boot-intro","booting"),Ta(),document.title=`${Oa[a].title}\uFF5CShopping Relics \u65E5\u672C\u8CFC\u7269\u6E05\u55AE`,_e("[data-route]").forEach(n=>{n.dataset.route===(Oa[a].nav||a)?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),t&&(window.scrollTo({top:0}),e.querySelector("h1")?.setAttribute("tabindex","-1"),e.querySelector("h1")?.focus({preventScroll:!0}))}"scrollRestoration"in history&&(history.scrollRestoration="manual");function Ro(){let{state:t,sum:a}=Rn(),e=vt("#hdr-rate");e.querySelector(".chip-v-full").textContent=`1 JPY = ${ut(t.settings.rate,4)} TWD`,e.querySelector(".chip-v-short").textContent=`\xA51,000 \u2248 NT$${ut(t.settings.rate*1e3)}`;let s=vt("#hdr-total"),n=Ne(s,".chip-v");vt("#hdr-total .chip-v").innerHTML=`${y(a.pay)} <small>/ ${a.count} \u4EF6</small>`,De(s,".chip-v",n),Lo("list",a.pendingCount,`${a.pendingCount} \u4EF6\u5F85\u8CB7`);let o=xn(t,a);Lo("split",o,`${o} \u4F4D\u670B\u53CB\u5C1A\u672A\u6536\u9F4A`)}function Lo(t,a,e){_e(`.nav-desktop [data-route="${t}"], .nav-mobile [data-route="${t}"]`).forEach(s=>{let n=s.querySelector(".nav-badge");if(!a){n?.remove();return}n||(n=document.createElement("span"),n.className="nav-badge",s.appendChild(n)),n.innerHTML=`<span aria-hidden="true">${a>99?"99+":a}</span><span class="sr-only">\uFF08${e}\uFF09</span>`})}w.subscribe(()=>{Ro(),Fn?.instance?.update?.(Rn())});window.addEventListener("hashchange",()=>{Co(),Fo()});vt("#fab-add").addEventListener("click",()=>Jt());vt("#btn-settings").addEventListener("click",()=>io());lo(vt("#btn-theme"));var Cn=scrollY;addEventListener("scroll",()=>{let t=scrollY;t>Cn+8&&t>160?document.body.classList.add("fab-hide"):(t<Cn-8||t<160)&&document.body.classList.remove("fab-hide"),Cn=t},{passive:!0});Ps();co();document.addEventListener("app:add",t=>Jt(null,t.detail??{}));window.addEventListener("store:quota",()=>{G({title:"\u5132\u5B58\u7A7A\u9593\u4E0D\u8DB3",message:"\u700F\u89BD\u5668\u5BB9\u91CF\u5DF2\u6EFF\uFF0C\u8ACB\u79FB\u9664\u90E8\u5206\u5546\u54C1\u7167\u7247\u5F8C\u518D\u8A66\u3002",tone:"error",duration:8e3})});Ro();Co();Fo({focus:!1});var Po="shopping-relics:cloud-nudged";function Io(){if(!(!ae().ok||!ce().linked||/^#\/home|^#?$/.test(location.hash))){try{if(sessionStorage.getItem(Po))return;sessionStorage.setItem(Po,"1")}catch{}je(),G({title:"\u540C\u6B65 Google Drive \u6E05\u55AE\uFF1F",message:"\u53D6\u5F97\u5176\u4ED6\u88DD\u7F6E\u7684\u6700\u65B0\u4FEE\u6539\uFF0C\u4E4B\u5F8C\u7684\u4FEE\u6539\u4E5F\u6703\u81EA\u52D5\u4E0A\u50B3\u3002",actionText:"\u540C\u6B65",onAction:()=>ze(()=>Oe({interactive:!0})),tone:"muted",duration:1e4})}}addEventListener("hashchange",Io);Io();Ie().then(t=>{t.ok===!1&&console.info("\u532F\u7387\u66AB\u6642\u7121\u6CD5\u66F4\u65B0\uFF0C\u6CBF\u7528\u4E0A\u6B21\u6578\u503C")});})();
