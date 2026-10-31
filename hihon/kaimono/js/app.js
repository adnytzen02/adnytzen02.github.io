(()=>{var $t=Object.defineProperty;var le=(e,a)=>{for(var t in a)$t(e,t,{get:a[t],enumerable:!0})};var Y=[{id:"beauty",label:"\u85E5\u599D\u7F8E\u808C",icon:"spa"},{id:"luxury",label:"\u5C08\u6AC3\u7CBE\u54C1",icon:"diamond"},{id:"souvenir",label:"\u5FC5\u8CB7\u4F34\u624B\u79AE",icon:"bakery_dining"},{id:"tech",label:"3C \u5BB6\u96FB",icon:"devices"},{id:"anime",label:"\u52D5\u6F2B\u9650\u5B9A",icon:"sports_esports"},{id:"craft",label:"\u9802\u7D1A\u5DE5\u85DD",icon:"handyman"},{id:"liquor",label:"\u73CD\u7A00\u9298\u9152",icon:"liquor"},{id:"fashion",label:"\u670D\u98FE\u96DC\u8CA8",icon:"checkroom"},{id:"other",label:"\u5176\u4ED6",icon:"category"}],K=e=>Y.find(a=>a.id===e)??Y.at(-1),Me=["\u9280\u5EA7","\u65B0\u5BBF","\u6F80\u8C37","\u6C60\u888B","\u79CB\u8449\u539F","\u4E0A\u91CE\u30FB\u6DFA\u8349","\u6771\u4EAC\u8ECA\u7AD9","\u8868\u53C3\u9053\u30FB\u539F\u5BBF","\u53F0\u5834","\u5927\u962A\u6885\u7530","\u5FC3\u9F4B\u6A4B\u30FB\u96E3\u6CE2","\u4EAC\u90FD","\u795E\u6236","\u540D\u53E4\u5C4B","\u798F\u5CA1\u5929\u795E","\u672D\u5E4C","\u6210\u7530\u6A5F\u5834","\u7FBD\u7530\u6A5F\u5834","\u95DC\u897F\u6A5F\u5834"],oe=[{value:3,stars:"\u2605\u2605\u2605",label:"\u5FC5\u8CB7"},{value:2,stars:"\u2605\u2605",label:"\u5FC3\u9858"},{value:1,stars:"\u2605",label:"\u9806\u4FBF"}],ie=e=>oe.find(a=>a.value===Number(e))??oe[1],De=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u306E\u5728\u5EAB\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u500B\u5546\u54C1\u9084\u6709\u73FE\u8CA8\u55CE\uFF1F"},{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"},{ja:"\u514D\u7A0E\u30AB\u30A6\u30F3\u30BF\u30FC\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u514D\u7A05\u6AC3\u53F0\u5728\u54EA\u88E1\uFF1F"},{ja:"\u30C6\u30B9\u30BF\u30FC\u3092\u8A66\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u8A66\u7528\u8A66\u7528\u54C1\u55CE\uFF1F"},{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u9019\u5F35\u512A\u60E0\u5238\u53EF\u4EE5\u4F7F\u7528\u55CE\uFF1F"},{ja:"\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u3067\u3001\u4E00\u62EC\u6255\u3044\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002",zh:"\u6211\u7528\u4FE1\u7528\u5361\u4E00\u6B21\u4ED8\u6E05\u3002"},{ja:"\u30D7\u30EC\u30BC\u30F3\u30C8\u7528\u306B\u5305\u88C5\u3057\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u505A\u79AE\u7269\u5305\u88DD\u55CE\uFF1F"},{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5E6B\u6211\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"},{ja:"\u888B\u3092\u5206\u3051\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u53EF\u4EE5\u5E6B\u6211\u5206\u958B\u88DD\u888B\u55CE\uFF1F"},{ja:"\u30EC\u30B7\u30FC\u30C8\u3092\u304F\u3060\u3055\u3044\u3002",zh:"\u8ACB\u7D66\u6211\u6536\u64DA\u3002"}],Fe=[{name:"\u5C71\u5D0E \u55AE\u4E00\u9EA5\u82BD\u5A01\u58EB\u5FCC 700ml",nameJa:"\u30B7\u30F3\u30B0\u30EB\u30E2\u30EB\u30C8\u30A6\u30A4\u30B9\u30AD\u30FC \u5C71\u5D0E 700ml",brand:"SUNTORY",category:"liquor",priority:3,qty:1,price:7700,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u7FBD\u7530\u6A5F\u5834",store:"\u7FBD\u7530\u6A5F\u5834 \u514D\u7A05\u5E97",weightKg:1.4,luggage:"carry",fragile:!0,liquid:!0,purchased:!0,note:"\u51FA\u5883\u7BA1\u5236\u5340\u8CFC\u8CB7\uFF0C\u53EF\u96A8\u8EAB\u5E36\u4E0A\u6A5F\u3002"},{name:"EVE QUICK \u6B62\u75DB\u9320 40 \u9320",nameJa:"\u30A4\u30D6\u30AF\u30A4\u30C3\u30AF\u982D\u75DB\u85ACDX 40\u9320",brand:"SSP",category:"beauty",priority:3,qty:3,price:1480,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",store:"\u677E\u672C\u6E05 \u65B0\u5BBF\u6771\u53E3\u5E97",weightKg:.05,luggage:"checked"},{name:"\u53C3\u5929\u773C\u85E5\u6C34",nameJa:"\u30B5\u30F3\u30C6 \u76EE\u85AC",brand:"Santen",category:"beauty",priority:2,qty:2,price:1280,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u65B0\u5BBF",store:"\u677E\u672C\u6E05 \u65B0\u5BBF\u6771\u53E3\u5E97",weightKg:.03,luggage:"checked",liquid:!0},{name:"\u5C0F\u5F62\u7F8A\u7FB9 10 \u5165",nameJa:"\u5C0F\u5F62\u7F8A\u7FB9 10\u672C\u5165",brand:"\u864E\u5C4B TORAYA",category:"souvenir",priority:2,qty:2,price:3240,priceIncludesTax:!0,taxRate:8,taxFree:!0,area:"\u9280\u5EA7",store:"\u9280\u5EA7\u4E09\u8D8A",weightKg:.6,luggage:"checked",fragile:!0,note:"\u9001\u79AE\u7528\uFF0C\u8ACB\u5E97\u5BB6\u9644\u7D19\u888B\u3002"},{name:"\u8CC7\u751F\u5802 \u7CBE\u83EF\u6DB2 30ml",nameJa:"\u8CC7\u751F\u5802 \u7F8E\u5BB9\u6DB2 30ml",brand:"SHISEIDO",category:"luxury",priority:3,qty:1,price:38500,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:5,area:"\u9280\u5EA7",store:"\u9280\u5EA7\u4E09\u8D8A",weightKg:.4,luggage:"checked",fragile:!0,liquid:!0,purchased:!0},{name:"Tanker 2Way \u516C\u4E8B\u5305",nameJa:"\u30BF\u30F3\u30AB\u30FC 2WAY\u30D6\u30EA\u30FC\u30D5\u30B1\u30FC\u30B9",brand:"PORTER",category:"fashion",priority:2,qty:1,price:42e3,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",store:"PORTER \u6F80\u8C37",weightKg:1,luggage:"checked"},{name:"nanocare \u5439\u98A8\u6A5F",nameJa:"\u30D8\u30A2\u30FC\u30C9\u30E9\u30A4\u30E4\u30FC \u30CA\u30CE\u30B1\u30A2",brand:"Panasonic",category:"tech",priority:2,qty:1,price:38610,priceIncludesTax:!0,taxRate:10,taxFree:!0,discountPct:7,area:"\u9280\u5EA7",store:"Bic Camera \u6709\u6A02\u753A",weightKg:.9,luggage:"checked",note:"\u78BA\u8A8D\u662F\u5426\u6709\u6D77\u5916\u96FB\u58D3\u7248\u672C\u3002"},{name:"\u4EFB\u5929\u5802 \u9650\u5B9A\u5468\u908A",nameJa:"Nintendo TOKYO \u9650\u5B9A\u30B0\u30C3\u30BA",brand:"Nintendo TOKYO",category:"anime",priority:1,qty:1,price:5500,priceIncludesTax:!0,taxRate:10,taxFree:!0,area:"\u6F80\u8C37",store:"Nintendo TOKYO \u6F80\u8C37 PARCO",weightKg:.8,luggage:"checked"},{name:"\u7D05\u8336\u5DE7\u514B\u529B",nameJa:"\u30ED\u30A4\u30E4\u30EB\u30E2\u30F3\u30BF\u30FC\u30CB\u30E5",brand:"LeTAO",category:"souvenir",priority:1,qty:4,price:918,priceIncludesTax:!0,taxRate:8,taxFree:!0,area:"\u7FBD\u7530\u6A5F\u5834",store:"\u7FBD\u7530\u6A5F\u5834 \u514D\u7A05\u5E97",weightKg:.15,luggage:"carry",purchased:!0},{name:"\u62B9\u8336\u7C89 40g",nameJa:"\u62B9\u8336 40g\u7F36",brand:"\u4E00\u4FDD\u5802\u8336\u8217",category:"souvenir",priority:2,qty:2,price:2160,priceIncludesTax:!0,taxRate:8,taxFree:!1,area:"\u4EAC\u90FD",store:"\u4E00\u4FDD\u5802\u8336\u8217 \u4EAC\u90FD\u672C\u5E97",weightKg:.12,luggage:"checked",note:"\u55AE\u5E97\u672A\u9054\u514D\u7A05\u9580\u6ABB\u4E5F\u6C92\u95DC\u4FC2\u3002"}],ae=[{text:"\u8B77\u7167",done:!1},{text:"\u884C\u52D5\u96FB\u6E90\uFF08\u96A8\u8EAB\uFF0C\u4E0D\u53EF\u8A17\u904B\uFF09",done:!1},{text:"\u884C\u674E\u79E4",done:!1},{text:"\u6613\u788E\u54C1\u7528\u6C23\u6CE1\u888B",done:!1}];function q(e){return String(e??"").normalize("NFKC").toLowerCase().replace(/[\s・·•\-‐–—_()（）「」『』[\]【】.,，、。/／|]/g,"")}var _e=e=>q(e).replace(/(本店|本館|店舗|店)$/,"");function Oe(e,a){if(!q(e)||q(e)===q(a))return!1;let t=_e(e),r=_e(a);if(!t||!r)return!1;if(t===r)return!0;let l=t.length<=r.length?t:r,s=t.length<=r.length?r:t;if(l.length>=3&&s.includes(l))return!0;let n=new Set(t),o=new Set(r),g=[...n].filter(b=>o.has(b)).length/new Set([...n,...o]).size;return l.length>=2&&g>=.75&&Math.abs(t.length-r.length)<=3}function Be(e,a){let t=q(e);if(!t)return[];let r=new Set;return a.filter(l=>{let s=q(l);return s===t||r.has(s)?!1:(r.add(s),Oe(e,l))})}function ze(e,a=[]){let t=[...new Map(e.filter(Boolean).map(l=>[q(l),l.trim()])).values()],r=[];for(let l=0;l<t.length;l++)for(let s=l+1;s<t.length;s++){if(!Oe(t[l],t[s]))continue;let n=he(t[l],t[s]);a.includes(n)||r.push([t[l],t[s]])}return r}var he=(e,a)=>[q(e),q(a)].sort().join("\uFF5C");var Je="shopping-relics:v1",ce={tripName:"\u6211\u7684\u65E5\u672C\u8CFC\u7269\u4E4B\u65C5",rate:.21,rateSource:"default",rateUpdatedAt:null,budget:15e4,refundFeePct:0,cardRebatePct:0,checkedLimit:23,carryLimit:7,checkedBase:8,carryBase:3,flightNote:"",ignoredStorePairs:[]},vt=()=>crypto.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`;function O(e={}){return{id:e.id||vt(),name:String(e.name??"").trim(),nameJa:String(e.nameJa??"").trim(),brand:String(e.brand??"").trim(),category:e.category||"other",priority:Number(e.priority)||2,qty:Math.max(1,Math.round(Number(e.qty)||1)),price:Math.max(0,Number(e.price)||0),priceIncludesTax:e.priceIncludesTax!==!1,taxRate:Number(e.taxRate)===8?8:10,taxFree:e.taxFree!==!1,discountPct:Math.min(100,Math.max(0,Number(e.discountPct)||0)),refundFeePct:e.refundFeePct===""||e.refundFeePct==null?null:Number(e.refundFeePct),area:String(e.area??"").trim(),store:String(e.store??"").trim(),planDate:e.planDate||"",jan:String(e.jan??"").replace(/\D/g,""),weightKg:Math.max(0,Number(e.weightKg)||0),luggage:["checked","carry","none"].includes(e.luggage)?e.luggage:"checked",fragile:!!e.fragile,liquid:!!e.liquid,battery:!!e.battery,packed:!!e.packed,purchased:!!e.purchased,purchasedAt:e.purchasedAt||null,image:e.image||"",note:String(e.note??""),demo:!!e.demo,createdAt:e.createdAt||Date.now()}}function yt(){try{let e=JSON.parse(localStorage.getItem(Je)||"null");if(e&&Array.isArray(e.items))return{items:e.items.map(O),settings:{...ce,...e.settings},packing:Array.isArray(e.packing)?e.packing:structuredClone(ae)}}catch{}return{items:[],settings:{...ce},packing:structuredClone(ae)}}var w=yt(),$e=new Set;function kt(){try{return localStorage.setItem(Je,JSON.stringify(w)),!0}catch(e){return console.warn("\u5132\u5B58\u5931\u6557",e),window.dispatchEvent(new CustomEvent("store:quota")),!1}}function R(){let e=kt();return $e.forEach(a=>a(w)),e}var p={get state(){return w},subscribe(e){return $e.add(e),()=>$e.delete(e)},getItem(e){return w.items.find(a=>a.id===e)},addItem(e){let a=O(e);return w.items=[a,...w.items],R(),a},updateItem(e,a){return w.items=w.items.map(t=>t.id===e?O({...t,...a,id:e}):t),R()},removeItem(e){let a=this.getItem(e);return w.items=w.items.filter(t=>t.id!==e),R(),a},restoreItem(e,a=0){let t=[...w.items];t.splice(a,0,e),w.items=t,R()},togglePurchased(e,a){let t=this.getItem(e);if(!t)return null;let r=a??!t.purchased;return this.updateItem(e,{purchased:r,purchasedAt:r?Date.now():null}),this.getItem(e)},renameStore(e,a){let t=q(e);return w.items=w.items.map(r=>q(r.store)===t?O({...r,store:a}):r),R()},updateSettings(e){w.settings={...w.settings,...e},R()},setPacking(e){w.packing=e,R()},loadDemo(){let e=Date.now(),a=Fe.map((t,r)=>O({...t,demo:!0,createdAt:e-r*1e3}));w.items=[...w.items,...a],R()},clearDemo(){w.items=w.items.filter(e=>!e.demo),R()},exportJSON(){return JSON.stringify({app:"shopping-relics",version:1,exportedAt:new Date().toISOString(),...w},null,2)},importJSON(e){let a=JSON.parse(e);if(!a||!Array.isArray(a.items))throw new Error("\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26");w={items:a.items.map(O),settings:{...ce,...a.settings},packing:Array.isArray(a.packing)?a.packing:structuredClone(ae)},R()},resetAll(){w={items:[],settings:{...ce},packing:structuredClone(ae)},R()}};var I=5e3,Ge="2026-11-01",C=e=>Math.round(e);function ve(e,a){let t=e.taxRate/100,r=e.priceIncludesTax?e.price/(1+t):e.price,l=1-e.discountPct/100,s=r*l*e.qty,n=s*t,o=s+n,c=e.refundFeePct??a.refundFeePct??0,g=r*(1+t)*e.qty;return{unitExcl:C(r),unitIncl:C(r*(1+t)),listIncl:C(g),discount:C(g-o),lineExcl:C(s),tax:C(n),pay:C(o),fee:C(o*(c/100)),feePct:c}}var xt=e=>`${q(e.store)}|${e.planDate||""}`;function wt(e,a){let t=new Map;for(let r of e){let l=r.store.trim()?xt(r):`__solo__${r.id}`;t.has(l)||t.set(l,{key:l,store:r.store.trim(),area:r.area,date:r.planDate||"",items:[],eligibleExcl:0,totalPay:0});let s=t.get(l),n=ve(r,a);s.items.push(r),s.totalPay+=n.pay,r.taxFree&&(s.eligibleExcl+=n.lineExcl),!s.area&&r.area&&(s.area=r.area)}for(let r of t.values())r.hasTaxFreeItems=r.items.some(l=>l.taxFree),r.eligible=r.hasTaxFreeItems&&r.eligibleExcl>=I,r.shortfall=Math.max(0,I-r.eligibleExcl),r.progress=Math.min(1,r.eligibleExcl/I),r.undatedMerge=!!r.store&&!r.date&&r.hasTaxFreeItems&&r.items.filter(l=>l.taxFree).length>=2,r.mergeNeeded=r.undatedMerge&&r.eligible&&r.items.every(l=>!l.taxFree||ve(l,a).lineExcl<I);return t}function W(e,a){let t=wt(e,a),r=new Map;for(let l of t.values())for(let s of l.items){let n=ve(s,a),o=s.taxFree&&l.eligible,c=o?Math.max(0,n.tax-n.fee):0;r.set(s.id,{...n,refundable:o,refund:c,net:n.pay-c,group:l,weight:s.weightKg*s.qty})}return{groups:t,byItem:r}}function He(e){let{items:a,settings:t}=e,{groups:r,byItem:l}=W(a,t),s={count:a.length,purchasedCount:0,pendingCount:0,pay:0,paid:0,pending:0,refund:0,refundPaid:0,net:0,discount:0,weightChecked:0,weightCarry:0,weightCheckedNow:0,weightCarryNow:0,packedCount:0,packableCount:0,groups:r,byItem:l};for(let n of a){let o=l.get(n.id);s.pay+=o.pay,s.refund+=o.refund,s.net+=o.net,s.discount+=o.discount,n.purchased?(s.purchasedCount+=1,s.paid+=o.pay,s.refundPaid+=o.refund):(s.pendingCount+=1,s.pending+=o.pay),n.luggage==="checked"&&(s.weightChecked+=o.weight),n.luggage==="carry"&&(s.weightCarry+=o.weight),n.purchased&&n.luggage==="checked"&&(s.weightCheckedNow+=o.weight),n.purchased&&n.luggage==="carry"&&(s.weightCarryNow+=o.weight),n.luggage!=="none"&&(s.packableCount+=1,n.packed&&(s.packedCount+=1))}return s.remaining=t.budget-s.pay,s.budgetUsedPct=t.budget>0?s.paid/t.budget:0,s.budgetPlannedPct=t.budget>0?s.pay/t.budget:0,s.rebate=Math.round(s.pay*(t.cardRebatePct/100)),s.totalChecked=t.checkedBase+s.weightChecked,s.totalCarry=t.carryBase+s.weightCarry,s.totalCheckedNow=t.checkedBase+s.weightCheckedNow,s.totalCarryNow=t.carryBase+s.weightCarryNow,s.undatedGroups=[...r.values()].filter(n=>n.undatedMerge),s.eligibleStores=[...r.values()].filter(n=>n.eligible).length,s.taxFreeStores=[...r.values()].filter(n=>n.hasTaxFreeItems&&n.store).length,s}function Ke({price:e,includesTax:a,taxRate:t,discountPct:r,feePct:l}){let s=t/100,n=(a?e/(1+s):e)*(1-r/100),o=n*s,c=n+o,g=n>=I,b=c*(l/100),v=g?Math.max(0,o-b):0,P=a?e:e*(1+s);return{excl:C(n),tax:C(o),pay:C(c),fee:C(b),refund:C(v),net:C(c-v),eligible:g,saved:C(P-(c-v))}}var St=[{name:"ExchangeRate-API",url:"https://open.er-api.com/v6/latest/JPY",pick:e=>e?.result==="success"?e.rates?.TWD:void 0},{name:"fawazahmed0 currency-api",url:"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/jpy.min.json",pick:e=>e?.jpy?.twd}],Et=6*60*60*1e3;async function Tt(e,a=8e3){let t=new AbortController,r=setTimeout(()=>t.abort(),a);try{let l=await fetch(e,{signal:t.signal,cache:"no-store"});if(!l.ok)throw new Error(`HTTP ${l.status}`);return await l.json()}finally{clearTimeout(r)}}async function Q({force:e=!1}={}){let{settings:a}=p.state;if(!e&&a.rateSource==="manual")return{skipped:"manual"};if(!e&&a.rateUpdatedAt&&Date.now()-a.rateUpdatedAt<Et)return{skipped:"fresh"};for(let t of St)try{let r=Number(t.pick(await Tt(t.url)));if(r>0&&r<10)return p.updateSettings({rate:r,rateSource:"api",rateUpdatedAt:Date.now(),rateProvider:t.name}),{ok:!0,rate:r,provider:t.name}}catch(r){console.info(`\u532F\u7387\u4F86\u6E90 ${t.name} \u7121\u6CD5\u4F7F\u7528\uFF1A`,r.message)}return{ok:!1}}function de(e){p.updateSettings({rate:e,rateSource:"manual",rateUpdatedAt:Date.now(),rateProvider:"\u624B\u52D5\u8F38\u5165"})}var Lt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},d=e=>String(e??"").replace(/[&<>"']/g,a=>Lt[a]),k=(e,a=document)=>a.querySelector(e),se=(e,a=document)=>[...a.querySelectorAll(e)],qt=new Intl.NumberFormat("ja-JP"),It=new Intl.NumberFormat("zh-TW",{maximumFractionDigits:0}),u=e=>`\xA5${qt.format(Math.round(e||0))}`,S=(e,a)=>`NT$ ${It.format(Math.round((e||0)*a))}`,x=(e,a=0)=>new Intl.NumberFormat("zh-TW",{minimumFractionDigits:a,maximumFractionDigits:a}).format(e||0),E=e=>`${x(e,e>=10?1:2)} kg`;var i=(e,a="")=>`<span class="ms ${a}" aria-hidden="true">${e}</span>`;function V(e){if(!e)return"";let a=typeof e=="number"?new Date(e):new Date(`${e}T00:00:00`);return new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",weekday:"short"}).format(a)}function Z(e){return e?new Intl.DateTimeFormat("zh-TW",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e)):""}var ye=[];function B(e,{onClose:a,backdropClose:t=!0}={}){let r=document.activeElement;e.addEventListener("close",function s(){e.removeEventListener("close",s);let n=ye.indexOf(e);n>-1&&ye.splice(n,1),a?.(),r&&document.contains(r)&&r.focus({preventScroll:!0})}),t&&e.addEventListener("click",s=>{s.target===e&&L(e)}),ye.push(e),e.showModal(),(e.querySelector("[autofocus]")??e.querySelector(".dlg-close"))?.focus()}function Ct(e){let a=document.getElementById("toast-region");if(!a||!e.contains(a))return;([...document.querySelectorAll("dialog[open]:not(.closing)")].filter(r=>r!==e).at(-1)??document.body).append(a)}function L(e){if(!e?.open)return;let a=matchMedia("(prefers-reduced-motion: reduce)").matches,t=()=>{Ct(e),e.close(),e.remove()};if(a){t();return}e.classList.add("closing"),setTimeout(t,180)}function z(e,a,t){let r=document.createElement("dialog");return r.className=`dlg ${e}`,t&&r.setAttribute("aria-labelledby",t),r.innerHTML=a,document.body.append(r),r.addEventListener("cancel",l=>{l.preventDefault(),L(r)}),r}function X({title:e,body:a,confirmText:t,danger:r=!1}){return new Promise(l=>{let s=!1,n=z("dlg-confirm",`
      <form method="dialog" class="confirm-body">
        <h2 id="confirm-title" class="confirm-title">${d(e)}</h2>
        <p class="confirm-text">${a}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-ghost" data-act="cancel" autofocus>\u53D6\u6D88</button>
          <button type="button" class="btn ${r?"btn-danger":"btn-gold"}" data-act="ok">${d(t)}</button>
        </div>
      </form>`,"confirm-title");n.addEventListener("click",o=>{let c=o.target.closest("[data-act]")?.dataset.act;c&&(s=c==="ok",L(n))}),B(n,{onClose:()=>l(s)})})}var Ue;function f({title:e,message:a="",actionText:t,onAction:r,tone:l="gold",duration:s=5e3}){let n=k("#toast-region");clearTimeout(Ue),n.innerHTML=`
    <div class="toast toast-${l}" role="status">
      <span class="toast-icon">${i(l==="error"?"error":"stars")}</span>
      <div class="toast-text">
        <strong>${d(e)}</strong>
        ${a?`<span>${a}</span>`:""}
      </div>
      ${t?`<button type="button" class="toast-action">${d(t)}</button>`:""}
      <button type="button" class="toast-close" aria-label="\u95DC\u9589\u901A\u77E5">${i("close")}</button>
    </div>`;let o=n.firstElementChild,c=[...document.querySelectorAll("dialog[open]:not(.closing)")].at(-1);c&&n.parentElement!==c?c.append(n):!c&&n.parentElement!==document.body&&document.body.append(n);let g=()=>{o.classList.add("out"),setTimeout(()=>o.remove(),200)};o.querySelector(".toast-close").addEventListener("click",g),o.querySelector(".toast-action")?.addEventListener("click",()=>{r?.(),g()}),Ue=setTimeout(g,s)}var ue=["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],Nt=ue.map(e=>[...e].map(a=>a==="0"?"1":"0").reverse().join("")),Ye=ue.map(e=>[...e].map(a=>a==="0"?"1":"0").join("")),Pt=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];function ne(e){if(!/^\d{13}$/.test(e)&&!/^\d{8}$/.test(e))return!1;let a=[...e].map(Number),t=a.pop();return(10-a.reverse().reduce((l,s,n)=>l+s*(n%2===0?3:1),0)%10)%10===t}function We(e){if(!ne(e))return"";let a=[...e].map(Number),t="101";if(a.length===13){let n=Pt[a[0]];for(let o=1;o<=6;o++)t+=(n[o-1]==="L"?ue:Nt)[a[o]];t+="01010";for(let o=7;o<=12;o++)t+=Ye[a[o]]}else{for(let n=0;n<4;n++)t+=ue[a[n]];t+="01010";for(let n=4;n<8;n++)t+=Ye[a[n]]}t+="101";let r=9,l=t.length+r*2,s="";return[...t].forEach((n,o)=>{n==="1"&&(s+=`<rect x="${o+r}" y="0" width="1" height="50"/>`)}),`<svg class="barcode" viewBox="0 0 ${l} 50" preserveAspectRatio="none" role="img" aria-label="JAN \u689D\u78BC ${e}"><rect width="${l}" height="50" fill="#fff"/><g fill="#000">${s}</g></svg>`}function Ve(e,a=480,t=.78){return new Promise((r,l)=>{let s=new FileReader;s.onerror=()=>l(new Error("\u8B80\u53D6\u5716\u7247\u5931\u6557")),s.onload=()=>{let n=new Image;n.onerror=()=>l(new Error("\u7121\u6CD5\u89E3\u6790\u9019\u5F35\u5716\u7247")),n.onload=()=>{let o=Math.min(1,a/Math.max(n.width,n.height)),c=document.createElement("canvas");c.width=Math.round(n.width*o),c.height=Math.round(n.height*o),c.getContext("2d").drawImage(n,0,0,c.width,c.height),r(c.toDataURL("image/jpeg",t))},n.src=s.result},s.readAsDataURL(e)})}function pe(e,a,t="text/plain"){let r=new Blob([a],{type:`${t};charset=utf-8`}),l=URL.createObjectURL(r),s=Object.assign(document.createElement("a"),{href:l,download:e});document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}function M(e,{label:a,tone:t="gold",max:r=1}={}){let l=Math.max(0,Math.min(r,e));return`<div class="bar bar-${e>r?"danger":t}" role="progressbar" aria-label="${d(a)}"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(e/r*100)}">
      <span style="--w:${l/r*100}%"></span></div>`}function ee(e,a,t){let r=0,l=e.map(s=>{let n=a>0?Math.max(0,Math.min(100-r,s.value/a*100)):0;return r+=n,`<span class="seg-${s.tone}" style="--w:${n}%"></span>`}).join("");return`<div class="stack-bar stack-sm" role="img" aria-label="${d(t)}">${l}</div>`}var J=(e,a,t,r,l="")=>`<label class="pill"><input type="radio" name="${e}" value="${a}" ${String(t)===String(a)?"checked":""} ${l}><span>${r}</span></label>`;function jt(e,a){let{items:t}=p.state,r=[...new Set(t.map(s=>s.store).filter(Boolean))],l=[...new Set([...t.map(s=>s.area).filter(Boolean),...Me])];return`
  <form class="dlg-shell form-shell" novalidate>
    <header class="dlg-head dlg-head-center">
      <p class="eyebrow eyebrow-center"><span aria-hidden="true">\u2726</span> SACRED RELIC ${a?"EDIT":"ACQUISITION"} <span aria-hidden="true">\u2726</span></p>
      <h2 id="form-title" class="dlg-title">${a?"\u7DE8\u8F2F\u63A1\u8CFC\u8056\u7269":"\u65B0\u589E\u65C5\u65E5\u63A1\u8CFC\u8056\u7269"}</h2>
      <p class="dlg-sub">${a?"\u4FEE\u6539\u5F8C\u6309\u300C\u5132\u5B58\u8B8A\u66F4\u300D\u3002":"\u5148\u8A18\u54C1\u540D\u548C\u50F9\u683C\u5C31\u80FD\u52A0\u5165\uFF0C\u5176\u4ED6\u8CC7\u6599\u4E4B\u5F8C\u518D\u88DC\u3002"}</p>
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
            <label for="fi-store">\u5E97\u5BB6\uFF0F\u5C08\u6AC3</label>
            <input id="fi-store" name="store" list="dl-store" value="${d(e.store)}" autocomplete="off" aria-describedby="hint-store" enterkeyhint="done">
            <datalist id="dl-store">${r.map(s=>`<option value="${d(s)}">`).join("")}</datalist>
            <p class="hint" id="hint-store">\u540C\u5E97\u540D\u7684\u5546\u54C1\u6703\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB</p>
            <div class="store-suggest" data-store-suggest aria-live="polite"></div>
          </div>
        </div>
        <p class="quick-calc" aria-live="polite" data-quick></p>
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
                ${Y.map(s=>J("category",s.id,e.category,`${i(s.icon,"sm")}${s.label}`)).join("")}
              </div>
            </div>
            <div class="grid-2">
              <div class="field">
                <span class="label" id="lb-prio">\u6E34\u671B\u7B49\u7D1A</span>
                <div class="pills" role="radiogroup" aria-labelledby="lb-prio">
                  ${oe.map(s=>J("priority",s.value,e.priority,`<span aria-hidden="true">${s.stars}</span> ${s.label}`)).join("")}
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
                      ${J("priceIncludesTax","true",e.priceIncludesTax,"\u542B\u7A05")}
                      ${J("priceIncludesTax","false",e.priceIncludesTax,"\u672A\u7A05")}
                    </div>
                  </div>
                  <div class="field">
                    <span class="label" id="lb-rate">\u6D88\u8CBB\u7A05\u7387</span>
                    <div class="seg-pills" role="radiogroup" aria-labelledby="lb-rate">
                      ${J("taxRate",10,e.taxRate,"10%")}
                      ${J("taxRate",8,e.taxRate,"8% \u98DF\u54C1")}
                    </div>
                  </div>
                </div>
                <label class="check-row">
                  <input type="checkbox" name="taxFree" ${e.taxFree?"checked":""}>
                  <span><strong>\u8FA6\u7406\u514D\u7A05</strong><small>\u540C\u4E00\u5929\u540C\u4E00\u5E97\u5BB6\u672A\u7A05\u5408\u8A08 ${u(I)} \u4EE5\u4E0A\u53EF\u9000\u6D88\u8CBB\u7A05</small></span>
                </label>
                <div class="grid-2 tight">
                  <div class="field">
                    <label for="fi-disc">\u6298\u6263\uFF0F\u512A\u60E0\u5238 %</label>
                    <input id="fi-disc" name="discountPct" type="number" inputmode="decimal" min="0" max="100" step="0.5" value="${e.discountPct||""}" placeholder="0">
                  </div>
                  <div class="field">
                    <label for="fi-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
                    <input id="fi-fee" name="refundFeePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${e.refundFeePct??""}" placeholder="\u9810\u8A2D ${p.state.settings.refundFeePct}" aria-describedby="hint-fee">
                    <p class="hint" id="hint-fee">\u7559\u7A7A\u5247\u7528\u8A2D\u5B9A\u4E2D\u7684\u9810\u8A2D\u503C</p>
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
                <datalist id="dl-area">${l.map(s=>`<option value="${d(s)}">`).join("")}</datalist>
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
                  ${J("luggage","checked",e.luggage,"\u8A17\u904B")}
                  ${J("luggage","carry",e.luggage,"\u96A8\u8EAB")}
                  ${J("luggage","none",e.luggage,"\u4E0D\u653E\u884C\u674E")}
                </div>
              </div>
            </div>
            <div class="pills" role="group" aria-label="\u5305\u88DD\u63D0\u9192">
              <label class="pill"><input type="checkbox" name="fragile" ${e.fragile?"checked":""}><span>${i("wine_bar","sm")}\u6613\u788E</span></label>
              <label class="pill"><input type="checkbox" name="liquid" ${e.liquid?"checked":""}><span>${i("water_drop","sm")}\u6DB2\u9AD4\uFF0F\u4E73\u971C</span></label>
              <label class="pill"><input type="checkbox" name="battery" ${e.battery?"checked":""}><span>${i("battery_alert","sm")}\u542B\u92F0\u96FB\u6C60</span></label>
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
            <label class="check-row">
              <input type="checkbox" name="purchased" ${e.purchased?"checked":""}>
              <span><strong>\u5DF2\u7D93\u8CB7\u5230\u4E86</strong><small>\u52FE\u9078\u5F8C\u6703\u5217\u5165\u5DF2\u5165\u624B</small></span>
            </label>
          </fieldset>
        </div>
      </details>
    </div>

    <footer class="dlg-foot">
      <p class="foot-summary" data-foot-summary></p>
      <button type="button" class="btn btn-ghost" data-cancel>\u53D6\u6D88</button>
      <button type="submit" class="btn btn-gold">${i(a?"save":"add_circle")}${a?"\u5132\u5B58\u8B8A\u66F4":"\u52A0\u5165\u6E05\u55AE"}</button>
    </footer>
  </form>`}function Xe(e,a){let t=new FormData(e);return{name:t.get("name"),nameJa:t.get("nameJa"),brand:t.get("brand"),category:t.get("category"),priority:t.get("priority"),qty:t.get("qty"),price:t.get("price"),priceIncludesTax:t.get("priceIncludesTax")==="true",taxRate:t.get("taxRate"),taxFree:t.has("taxFree"),discountPct:t.get("discountPct"),refundFeePct:t.get("refundFeePct"),area:t.get("area"),store:t.get("store"),planDate:t.get("planDate"),jan:t.get("jan"),weightKg:t.get("weightKg"),luggage:t.get("luggage"),fragile:t.has("fragile"),liquid:t.has("liquid"),battery:t.has("battery"),note:t.get("note"),purchased:t.has("purchased"),image:a}}function At(e,a){let{settings:t,items:r}=p.state,l=r.filter(b=>b.id!==a),s=O({...e,id:a||"__draft__"}),{byItem:n}=W([...l,s],t),o=n.get(s.id),c=o.group,g;return s.taxFree?s.store?c.eligible?g=`<p class="calc-status ok">${i("check_circle","sm")}${d(s.store)} \u5408\u8A08\u5DF2\u9054 ${u(I)} \u9580\u6ABB</p>`:g=`<p class="calc-status warn">${i("info","sm")}${d(s.store)} \u9084\u5DEE ${u(c.shortfall)}\uFF08\u672A\u7A05\uFF09</p>`:g='<p class="calc-status">\u586B\u5BEB\u5E97\u5BB6\u5F8C\u53EF\u5408\u4F75\u8A08\u7B97\u9580\u6ABB</p>':g='<p class="calc-status">\u4E0D\u8FA6\u514D\u7A05</p>',{html:`
    <h3 class="calc-title">${i("calculate","sm")}\u514D\u7A05\u7CBE\u7B97\u660E\u7D30</h3>
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u5C0F\u8A08</dt><dd>${u(o.lineExcl)}</dd></div>
      ${o.discount?`<div class="minus"><dt>\u6298\u6263</dt><dd>\u2212 ${u(o.discount)}</dd></div>`:""}
      <div><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${u(o.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05</dt><dd>${o.refundable?`\u2212 ${u(o.refund)}`:"\u2014"}</dd></div>
    </dl>
    <div class="calc-total">
      <span class="ledger-k">\u5BE6\u969B\u6210\u672C</span>
      <span class="calc-yen">${u(o.net)}</span>
      <span class="calc-twd">\u2248 ${S(o.net,t.rate)}</span>
    </div>
    ${g}`,quick:s.price?`${i("payments","sm")}<span>\u5E97\u982D\u652F\u4ED8 <strong>${u(o.pay)}</strong> \u2248 ${S(o.pay,t.rate)}</span>${o.refundable?`<span class="ok">${i("check_circle","sm")}\u53EF\u9000\u7A05 ${u(o.refund)}\uFF0C\u5BE6\u969B ${u(o.net)}</span>`:s.taxFree&&s.store?`<span class="warn">${i("info","sm")}${d(s.store)} \u9084\u5DEE ${u(c.shortfall)} \u9054\u514D\u7A05\u9580\u6ABB</span>`:""}${c.undatedMerge&&s.taxFree&&c.items.length>1?`<span class="note">${i("event","sm")}\u5DF2\u8207\u540C\u5E97 ${c.items.length-1} \u4EF6\u5408\u4F75\u8A08\u7B97\uFF1B\u5206\u4E0D\u540C\u5929\u8CB7\u8ACB\u5728\u300C\u66F4\u591A\u8A2D\u5B9A\u300D\u586B\u9810\u8A08\u65E5\u671F</span>`:""}`:"",foot:`${i("auto_awesome","sm")}\u52A0\u5165\u5F8C\u7E3D\u984D ${u(l.reduce((b,v)=>b+n.get(v.id).pay,0)+o.pay)} \xB7 \u884C\u674E +${(o.weight||0).toFixed(2)} kg`}}function D(e=null,a={}){let t=e?p.getItem(e):null,r=t??O({category:"other",priority:2,luggage:"checked",taxFree:!0,...a}),l=r.image,s=z("dlg-form",jt(r,!!t),"form-title"),n=s.querySelector("form"),o=!1,c=()=>{let m=At(Xe(n,l),t?.id);s.querySelector("[data-calc]").innerHTML=m.html,s.querySelector("[data-foot-summary]").innerHTML=m.foot,s.querySelector("[data-quick]").innerHTML=m.quick;let y=n.elements.priceIncludesTax.value==="true";s.querySelector('label[for="fi-price"] small').textContent=y?"\uFF08\u542B\u7A05\uFF09":"\uFF08\u672A\u7A05\uFF09"};c();let g=[...new Set(p.state.items.filter(m=>m.id!==t?.id).map(m=>m.store).filter(Boolean))],b=s.querySelector("[data-store-suggest]"),v=()=>{let m=Be(n.elements.store.value,g).slice(0,3);b.innerHTML=m.length?`
      <p>${i("storefront","sm")}\u662F\u540C\u4E00\u5BB6\u5E97\u55CE\uFF1F\u540D\u7A31\u4E00\u81F4\u624D\u6703\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\uFF1A</p>
      <div class="pills">${m.map(y=>`<button type="button" class="chip chip-sm" data-use-store="${d(y)}">\u6539\u7528\u300C${d(y)}\u300D</button>`).join("")}</div>`:""};v(),n.elements.store.addEventListener("input",v),b.addEventListener("click",m=>{let y=m.target.closest("[data-use-store]");y&&(n.elements.store.value=y.dataset.useStore,n.elements.store.dispatchEvent(new Event("change",{bubbles:!0})),v(),n.elements.store.focus())});let P={name:m=>m.trim().length>0,price:m=>m!==""&&Number(m)>=0,jan:m=>m===""||/^\d{8}$|^\d{13}$/.test(m)},A=(m,y)=>{let T=s.querySelector(`#err-${m.name}`);T&&(T.hidden=!y,m.setAttribute("aria-invalid",y?"true":"false"))};n.addEventListener("focusout",m=>{let y=P[m.target.name];y&&A(m.target,!y(m.target.value))}),n.addEventListener("input",m=>{o=!0;let y=P[m.target.name];y&&m.target.getAttribute("aria-invalid")==="true"&&y(m.target.value)&&A(m.target,!1),c()}),n.addEventListener("change",m=>{if(m.target.name==="store"&&!n.elements.area.value.trim()){let y=p.state.items.find(T=>q(T.store)===q(m.target.value)&&T.area);y&&(n.elements.area.value=y.area)}c()}),n.addEventListener("click",m=>{let y=m.target.closest("[data-step]");if(y){let T=n.elements.qty;T.value=Math.max(1,(Number(T.value)||1)+Number(y.dataset.step)),o=!0,c()}m.target.closest("[data-remove-photo]")&&(l="",o=!0,s.querySelector("[data-photo]").innerHTML=i("add_photo_alternate"),m.target.closest("[data-remove-photo]").hidden=!0),m.target.closest(".dlg-close, [data-cancel]")&&$()}),s.querySelector("[data-file]").addEventListener("change",async m=>{let y=m.target.files?.[0];if(y)try{l=await Ve(y),o=!0,s.querySelector("[data-photo]").innerHTML=`<img src="${l}" alt="\u5546\u54C1\u7167\u7247\u9810\u89BD">`,s.querySelector("[data-remove-photo]").hidden=!1}catch(T){f({title:"\u7167\u7247\u7121\u6CD5\u4F7F\u7528",message:d(T.message),tone:"error"})}});async function $(){o&&!await X({title:"\u653E\u68C4\u5C1A\u672A\u5132\u5B58\u7684\u5167\u5BB9\uFF1F",body:"\u9019\u500B\u8868\u55AE\u6709\u4FEE\u6539\u9084\u6C92\u5132\u5B58\uFF0C\u96E2\u958B\u5F8C\u4E0D\u6703\u4FDD\u7559\u3002",confirmText:"\u653E\u68C4\u4FEE\u6539",danger:!0})||L(s)}s.addEventListener("cancel",m=>{m.preventDefault(),m.stopImmediatePropagation(),$()},{capture:!0}),n.addEventListener("submit",m=>{m.preventDefault();let y=null;for(let[H,Ae]of Object.entries(P)){let fe=n.elements[H],Re=Ae(fe.value);A(fe,!Re),!Re&&!y&&(y=fe)}if(y){let H=y.closest("details");H&&(H.open=!0),y.focus();return}let T=Xe(n,l);if(T.jan&&!ne(T.jan)&&f({title:"JAN \u6AA2\u67E5\u78BC\u4E0D\u7B26",message:"\u5DF2\u5132\u5B58\uFF0C\u4F46\u689D\u78BC\u53EF\u80FD\u8F38\u5165\u932F\u8AA4\uFF0C\u51FA\u793A\u5361\u4E0D\u6703\u986F\u793A\u689D\u78BC\u5716\u3002",tone:"muted"}),t){let H=t.purchased;if(!p.updateItem(t.id,{...T,purchasedAt:T.purchased?H?t.purchasedAt:Date.now():null}))return;f({title:"\u5DF2\u5132\u5B58\u8B8A\u66F4",message:d(T.name),tone:"muted",duration:3e3})}else{let H=p.addItem({...T,purchasedAt:T.purchased?Date.now():null});f({title:"\u5DF2\u52A0\u5165\u6E05\u55AE",message:`\u300C${d(H.name)}\u300D`})}o=!1,L(s)}),B(s,{backdropClose:!1})}var Rt="shopping-relics:theme",_=[{id:"light",label:"\u6DFA\u8272",icon:"light_mode"},{id:"dark",label:"\u6DF1\u8272",icon:"dark_mode"},{id:"auto",label:"\u8DDF\u96A8\u7CFB\u7D71",icon:"brightness_auto"}];function re(){let e=document.documentElement.dataset.theme;return _.some(a=>a.id===e)?e:"light"}function Mt(e){return e==="dark"||e==="auto"&&matchMedia("(prefers-color-scheme: dark)").matches}function ke(e){let a=_.find(l=>l.id===e),t=_[(_.indexOf(a)+1)%_.length],r=document.getElementById("btn-theme");r&&(r.querySelector(".ms").textContent=a.icon,r.setAttribute("aria-label",`\u5916\u89C0\uFF1A${a.label}\uFF0C\u6309\u4E0B\u5207\u63DB\u70BA${t.label}`),r.title=`\u5916\u89C0\uFF1A${a.label}\uFF08\u6309\u4E0B\u5207\u63DB\u70BA${t.label}\uFF09`),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",Mt(e)?"#0b1422":"#f4f7f9")}function xe(e){document.documentElement.dataset.theme=e;try{localStorage.setItem(Rt,e)}catch{}ke(e)}function Qe(){let e=_.findIndex(t=>t.id===re()),a=_[(e+1)%_.length];return xe(a.id),a}function Ze(){ke(re()),matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>ke(re()))}function Dt(){let e=p.state.settings;return`
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
          ${_.map(a=>`<label class="pill"><input type="radio" name="theme" value="${a.id}" ${re()===a.id?"checked":""}><span>${i(a.icon,"sm")}${a.label}</span></label>`).join("")}
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
            <p class="hint" id="hint-st-fee">\u90E8\u5206\u767E\u8CA8\u6216\u9000\u7A05\u4EE3\u8FA6\u6703\u6536\u624B\u7E8C\u8CBB\uFF0C\u4F9D\u5E97\u5BB6\u516C\u544A\u586B\u5BEB</p>
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
        <p class="hint">\u76EE\u524D\u4F86\u6E90\uFF1A${e.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":e.rateSource==="api"?d(e.rateProvider||"\u516C\u958B\u532F\u7387 API"):"\u9810\u8A2D\u503C"}${e.rateUpdatedAt?` \xB7 ${Z(e.rateUpdatedAt)}`:""}\u3002\u4FEE\u6539\u6578\u5B57\u5F8C\u5132\u5B58\uFF0C\u5C31\u6703\u6539\u7528\u624B\u52D5\u532F\u7387\u3002</p>
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
  </form>`}function et(){let e=z("dlg-settings",Dt(),"settings-title"),a=e.querySelector("form"),t=p.state.settings.rate;e.addEventListener("click",async r=>{let l=r.target;if(l.closest(".dlg-close, [data-cancel]")){L(e);return}if(l.closest("[data-sync]")){let s=l.closest("[data-sync]");s.disabled=!0,s.setAttribute("aria-busy","true");let n=await Q({force:!0});s.disabled=!1,s.removeAttribute("aria-busy"),n.ok?(a.elements.rate.value=n.rate,f({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${x(n.rate,4)} TWD`,tone:"muted",duration:3e3})):f({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u3002",tone:"error"})}l.closest("[data-export]")&&pe(`shopping-relics-backup-${new Date().toISOString().slice(0,10)}.json`,p.exportJSON(),"application/json"),l.closest("[data-demo]")&&(p.loadDemo(),f({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u5728\u6E05\u55AE\u9801\u6E05\u9664\u3002"})),l.closest("[data-reset]")&&await X({title:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599\uFF1F",body:`\u6703\u522A\u9664\u6E05\u55AE\u4E2D\u7684 <strong>${p.state.items.length} \u4EF6\u5546\u54C1</strong>\u3001\u6253\u5305\u6E05\u55AE\u8207\u6240\u6709\u8A2D\u5B9A\uFF0C<strong>\u7121\u6CD5\u5FA9\u539F</strong>\u3002\u5EFA\u8B70\u5148\u532F\u51FA\u5099\u4EFD\u3002`,confirmText:"\u6E05\u9664\u5168\u90E8\u8CC7\u6599",danger:!0})&&(p.resetAll(),L(e),f({title:"\u8CC7\u6599\u5DF2\u5168\u90E8\u6E05\u9664",tone:"muted"}))}),a.addEventListener("change",r=>{r.target.name==="theme"&&xe(r.target.value)}),e.querySelector("[data-import]").addEventListener("change",async r=>{let l=r.target.files?.[0];if(!l)return;if(!await X({title:"\u7528\u5099\u4EFD\u6A94\u53D6\u4EE3\u76EE\u524D\u8CC7\u6599\uFF1F",body:`\u76EE\u524D\u7684 ${p.state.items.length} \u4EF6\u5546\u54C1\u6703\u88AB\u300C${d(l.name)}\u300D\u7684\u5167\u5BB9\u53D6\u4EE3\u3002`,confirmText:"\u532F\u5165\u4E26\u53D6\u4EE3",danger:!0})){r.target.value="";return}try{p.importJSON(await l.text()),L(e),f({title:"\u5099\u4EFD\u5DF2\u532F\u5165",message:`\u5171 ${p.state.items.length} \u4EF6\u5546\u54C1`})}catch(n){f({title:"\u532F\u5165\u5931\u6557",message:`\u9019\u500B\u6A94\u6848\u4E0D\u662F\u6709\u6548\u7684\u5099\u4EFD\uFF1A${d(n.message)}`,tone:"error",duration:8e3})}}),a.addEventListener("submit",r=>{r.preventDefault();let l=a.elements,s=(c,g)=>c.value===""||Number.isNaN(Number(c.value))?g:Math.max(0,Number(c.value)),n=p.state.settings;p.updateSettings({tripName:l.tripName.value.trim()||n.tripName,budget:s(l.budget,n.budget),refundFeePct:s(l.refundFeePct,0),cardRebatePct:s(l.cardRebatePct,0),checkedLimit:s(l.checkedLimit,n.checkedLimit),checkedBase:s(l.checkedBase,n.checkedBase),carryLimit:s(l.carryLimit,n.carryLimit),carryBase:s(l.carryBase,n.carryBase)});let o=Number(l.rate.value);o>0&&Math.abs(o-p.state.settings.rate)>1e-9&&o!==t&&de(o),L(e),f({title:"\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}),B(e,{backdropClose:!1})}function tt(){let e=location.protocol==="https:"||["localhost","127.0.0.1"].includes(location.hostname);if("serviceWorker"in navigator&&e){let a=!navigator.serviceWorker.controller;navigator.serviceWorker.register("./sw.js").then(t=>{if(!a)return;let r=t.installing??t.waiting;r?.addEventListener("statechange",()=>{r.state==="activated"&&f({title:"\u5DF2\u53EF\u96E2\u7DDA\u4F7F\u7528",message:"\u4E4B\u5F8C\u5728\u65E5\u672C\u6C92\u6709\u7DB2\u8DEF\u4E5F\u80FD\u6253\u958B\u6E05\u55AE\u3002",tone:"muted",duration:4e3})})}).catch(t=>console.info("\u96E2\u7DDA\u5FEB\u53D6\u672A\u555F\u7528\uFF1A",t.message))}window.addEventListener("offline",()=>{f({title:"\u76EE\u524D\u96E2\u7DDA",message:"\u6E05\u55AE\u7167\u5E38\u53EF\u7528\uFF0C\u532F\u7387\u66AB\u7528\u4E0A\u6B21\u7684\u6578\u503C\u3002",tone:"muted",duration:4e3})}),window.addEventListener("online",()=>{f({title:"\u5DF2\u6062\u5FA9\u9023\u7DDA",tone:"muted",duration:2500})})}var Te={};le(Te,{mount:()=>zt});function we(e,a=""){let t=K(e.category),r=`<span class="sr-only">\u5206\u985E\uFF1A${d(t.label)}</span>${e.demo?'<span class="thumb-demo">\u793A\u7BC4</span>':""}<span class="thumb-qty">\xD7 ${e.qty}</span>`;return e.image?`<div class="thumb ${a}" title="${d(t.label)}"><img src="${d(e.image)}" alt="" loading="lazy" decoding="async"><span class="thumb-cat" aria-hidden="true">${i(t.icon,"sm")}</span>${r}</div>`:`<div class="thumb thumb-icon ${a} cat-${t.id}" title="${d(t.label)}">${i(t.icon)}${r}</div>`}function Ft(e,a){return e.taxFree?a.refundable?`<span class="badge badge-cyan">${i("verified","sm")}\u53EF\u9000\u7A05 ${u(a.refund)}</span>`:e.store?`<span class="badge badge-warn">\u5DEE ${u(a.group.shortfall)} \u9054\u6A19</span>`:'<span class="badge badge-muted">\u672A\u586B\u5E97\u5BB6</span>':'<span class="badge badge-muted">\u4E0D\u8FA6\u514D\u7A05</span>'}function at(e,a,t,r="grid"){let l=ie(e.priority),s=e.brand?`${e.brand}\uFF5C${e.name}`:e.name;return`
  <article class="card item-card ${e.purchased?"is-done":""} layout-${r}" data-id="${e.id}">
    <div class="item-top">
      ${e.store?`<span class="tag tag-store" title="${d(e.store)}">${i("storefront","sm")}<span class="tag-text">${d(e.store)}</span></span>`:'<span class="tag tag-store tag-empty">\u672A\u586B\u5E97\u5BB6</span>'}
      <span class="tag tag-prio p${l.value}" title="${l.label}"><span aria-hidden="true">${l.stars}</span><span>${l.label}</span></span>
      <button type="button" class="check ${e.purchased?"on":""}" data-act="toggle"
        role="checkbox" aria-checked="${e.purchased}" aria-label="\u5DF2\u5165\u624B\uFF1A${d(e.name)}">${i("check")}</button>
    </div>
    <div class="item-body">
      ${we(e)}
      <div class="item-main">
        ${e.brand?`<p class="item-brand">${d(e.brand)}</p>`:""}
        <h3 class="item-name"><button type="button" class="card-link" data-act="open" aria-label="\u67E5\u770B\u8A73\u60C5\uFF1A${d(s)}">${d(e.name)}</button></h3>
        ${e.nameJa?`<p class="item-ja" lang="ja">${d(e.nameJa)}</p>`:""}
        ${e.note?`<p class="item-note">${i("edit_note","sm")}${d(e.note)}</p>`:""}
      </div>
    </div>
    <div class="item-meta">
      ${Ft(e,a)}
      ${e.weightKg?`<span class="meta-text">${i("luggage","sm")}${E(a.weight)}</span>`:""}
      ${e.planDate?`<span class="meta-text">${i("event","sm")}${V(e.planDate)}</span>`:""}
    </div>
    <div class="item-foot">
      <p class="price">
        <span class="price-yen">${u(a.pay)}</span>
        <span class="price-twd">\u2248 ${S(a.pay,t)}</span>
      </p>
      <div class="item-actions">
        <button type="button" class="icon-btn" data-act="edit" aria-label="\u7DE8\u8F2F ${d(e.name)}" title="\u7DE8\u8F2F">${i("edit")}</button>
        <button type="button" class="icon-btn" data-act="delete" aria-label="\u522A\u9664 ${d(e.name)}" title="\u522A\u9664">${i("delete")}</button>
      </div>
    </div>
  </article>`}function j({label:e,icon:a,value:t,unit:r="",foot:l="",bar:s="",tone:n=""}){return`
  <section class="card kpi ${n}">
    <div class="kpi-head"><h2 class="kpi-label">${e}</h2><span class="kpi-icon">${i(a)}</span></div>
    <p class="kpi-value">${t}${r?`<small>${r}</small>`:""}</p>
    ${s}
    ${l?`<div class="kpi-foot">${l}</div>`:""}
  </section>`}function U({eyebrow:e,title:a,sub:t,actions:r=""}){return`
  <header class="page-head">
    <div>
      <p class="eyebrow">${i("diamond","sm")}${e}</p>
      <h1 class="page-title">${a}</h1>
      ${t?`<p class="page-sub">${t}</p>`:""}
    </div>
    ${r?`<div class="page-actions">${r}</div>`:""}
  </header>`}function te({title:e,text:a,actions:t}){return`
  <div class="card empty">
    <div class="empty-orb" aria-hidden="true">${i("auto_awesome")}</div>
    <h2 class="empty-title">${e}</h2>
    <p class="empty-text">${a}</p>
    <div class="empty-actions">${t}</div>
  </div>`}var G="ja";function st(e){let a=e.nameJa||e.name,t=e.jan?We(e.jan):"",r=s=>G==="both"?`<span class="zh">${d(s)}</span>`:"",l=[{ja:"\u3053\u3061\u3089\u306E\u5546\u54C1\u3092\u63A2\u3057\u3066\u3044\u307E\u3059\u3002",zh:"\u6211\u5728\u627E\u9019\u500B\u5546\u54C1\u3002"},e.taxFree?{ja:"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u30D1\u30B9\u30DD\u30FC\u30C8\u306F\u3053\u3061\u3089\u3067\u3059\u3002",zh:"\u6211\u8981\u8FA6\u7406\u514D\u7A05\uFF0C\u9019\u662F\u6211\u7684\u8B77\u7167\u3002"}:null,e.discountPct?{ja:"\u3053\u306E\u30AF\u30FC\u30DD\u30F3\uFF08\u512A\u5F85\uFF09\u306F\u4F7F\u3048\u307E\u3059\u304B\uFF1F",zh:"\u8ACB\u554F\u53EF\u4EE5\u4F7F\u7528\u512A\u60E0\u5238\uFF08\u512A\u60E0\uFF09\u55CE\uFF1F"}:null,e.fragile?{ja:"\u5272\u308C\u7269\u306A\u306E\u3067\u3001\u3057\u3063\u304B\u308A\u5305\u3093\u3067\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F",zh:"\u9019\u662F\u6613\u788E\u54C1\uFF0C\u53EF\u4EE5\u5305\u5F97\u7262\u4E00\u9EDE\u55CE\uFF1F"}:null].filter(Boolean);return`
  <div class="dlg-shell counter-shell" data-mode="${G}">
    <header class="dlg-head">
      <p class="eyebrow">${i("stars","sm")}COUNTER MEMO CARD \xB7 \u5C08\u6AC3\u51FA\u793A\u5361</p>
      <h2 id="counter-title" class="dlg-title">${d(e.name)}</h2>
      <div class="seg seg-text" role="group" aria-label="\u986F\u793A\u6A21\u5F0F">
        <button type="button" class="${G==="ja"?"on":""}" aria-pressed="${G==="ja"}" data-mode="ja">${i("visibility","sm")}\u65E5\u6587\u5927\u5B57</button>
        <button type="button" class="${G==="both"?"on":""}" aria-pressed="${G==="both"}" data-mode="both">${i("translate","sm")}\u4E2D\u65E5\u5C0D\u7167</button>
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
        <p class="counter-qty" lang="ja">\u5E0C\u671B\u6570\u91CF\uFF1A<strong>${e.qty}</strong> \u70B9${G==="both"?`<span class="zh">\uFF08\u60F3\u8CB7 ${e.qty} \u4EF6\uFF09</span>`:""}</p>
      </section>

      <section class="counter-lines">
        ${l.map(s=>`<button type="button" class="phrase phrase-lg" data-ja="${d(s.ja)}" data-zh="${d(s.zh)}"><span lang="ja">\u300C${d(s.ja)}\u300D</span>${r(s.zh)}</button>`).join("")}
      </section>

      <section class="counter-phrases" aria-labelledby="ph-title">
        <h3 id="ph-title" class="section-title">${i("touch_app","sm")}\u6307\u5DEE\u6703\u8A71\uFF1A\u9EDE\u4E00\u4E0B\u653E\u5927\u7D66\u5E97\u54E1\u770B</h3>
        <div class="phrase-grid">
          ${De.map(s=>`<button type="button" class="phrase" data-ja="${d(s.ja)}" data-zh="${d(s.zh)}"><span lang="ja">\u300C${d(s.ja)}\u300D</span><span class="zh">${d(s.zh)}</span></button>`).join("")}
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
  </div>`}function nt(e){let a=p.getItem(e);if(!a)return;let t=z("dlg-counter",st(a),"counter-title"),r=null,l=()=>{let n=p.getItem(e);if(!n){L(t);return}t.querySelector(".dlg-shell").outerHTML=st(n)};t.addEventListener("click",async n=>{let o=n.target;if(o.closest(".dlg-close")){L(t);return}let c=o.closest("[data-mode]");if(c&&c.tagName==="BUTTON"){G=c.dataset.mode,l(),t.querySelector(`button[data-mode="${G}"]`)?.focus();return}if(o.closest("[data-fix]")){D(e);return}let g=o.closest(".phrase, [data-barcode]");if(g){r=g;let b=t.querySelector("[data-zoom]"),v=g.matches("[data-barcode]");b.classList.toggle("is-barcode",v),b.querySelector("[data-zoom-bar]").hidden=!v,b.querySelector(".zoom-ja").textContent=v?"":g.dataset.ja,b.querySelector(".zoom-zh").textContent=v?"":g.dataset.zh,b.hidden=!1,b.querySelector("[data-zoom-close]").focus();return}if(o.closest("[data-zoom-close]")){t.querySelector("[data-zoom]").hidden=!0,r?.focus();return}if(o.closest("[data-full]")){try{document.fullscreenElement?await document.exitFullscreen():await t.querySelector(".counter-shell").requestFullscreen()}catch{f({title:"\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u5168\u87A2\u5E55",message:"\u53EF\u4EE5\u628A\u624B\u6A5F\u8F49\u6A6B\u5411\u6216\u653E\u5927\u756B\u9762\u3002",tone:"muted"})}return}if(o.closest("[data-copy]")){let b=p.getItem(e),v=[`\u5BFE\u8C61\u5546\u54C1\uFF1A${b.nameJa||b.name}`,`\u5E0C\u671B\u6570\u91CF\uFF1A${b.qty}\u70B9`,b.jan?`JAN\uFF1A${b.jan}`:"",b.taxFree?"\u514D\u7A0E\u3067\u304A\u9858\u3044\u3057\u307E\u3059\u3002":""].filter(Boolean).join(`
`);try{await navigator.clipboard.writeText(v),f({title:"\u5DF2\u8907\u88FD\u65E5\u6587",message:"\u53EF\u4EE5\u8CBC\u5230\u7FFB\u8B6F App \u6216\u8A0A\u606F\u88E1\u3002",tone:"muted",duration:3e3})}catch{f({title:"\u7121\u6CD5\u8907\u88FD",message:"\u700F\u89BD\u5668\u4E0D\u5141\u8A31\u5B58\u53D6\u526A\u8CBC\u7C3F\uFF0C\u8ACB\u624B\u52D5\u9078\u53D6\u6587\u5B57\u3002",tone:"error"})}}}),t.addEventListener("keydown",n=>{let o=t.querySelector("[data-zoom]");n.key==="Escape"&&!o.hidden&&(n.preventDefault(),n.stopPropagation(),o.hidden=!0,r?.focus())},{capture:!0});let s=p.subscribe(l);B(t,{onClose:()=>{s(),document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}})}var _t={checked:"\u8A17\u904B\u884C\u674E",carry:"\u96A8\u8EAB\u884C\u674E",none:"\u4E0D\u653E\u884C\u674E\uFF08\u5BC4\u9001\uFF0F\u73FE\u5834\u4F7F\u7528\uFF09"};function rt(e){let{settings:a}=p.state,t=a.rate,{byItem:r}=W(p.state.items,a),l=r.get(e.id),s=l.group,n=K(e.category),o=ie(e.priority),c;return e.taxFree?e.store?s.eligible?c=`${d(s.store)}${s.date?`\uFF08${V(s.date)}\uFF09`:""} \u514D\u7A05\u5546\u54C1\u672A\u7A05\u5408\u8A08 ${u(s.eligibleExcl)}\uFF0C\u5DF2\u9054 ${u(I)} \u9580\u6ABB\u3002`:c=`${d(s.store)} \u76EE\u524D\u672A\u7A05\u5408\u8A08 ${u(s.eligibleExcl)}\uFF0C\u518D <strong>${u(s.shortfall)}</strong>\uFF08\u672A\u7A05\uFF09\u5373\u53EF\u9000\u7A05\u3002`:c="\u586B\u5BEB\u5E97\u5BB6\u5F8C\uFF0C\u624D\u80FD\u548C\u540C\u5E97\u5546\u54C1\u5408\u4F75\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\u3002":c="\u9019\u4EF6\u5546\u54C1\u8A2D\u5B9A\u70BA\u4E0D\u8FA6\u514D\u7A05\u3002",`
  <div class="dlg-shell drawer-shell">
    <header class="dlg-head">
      <p class="eyebrow">${i(n.icon,"sm")}${d(n.label)}${e.store?` \xB7 ${d(e.store)}`:""}</p>
      <h2 id="detail-title" class="dlg-title">${d(e.name)}</h2>
      ${e.nameJa?`<p class="dlg-ja" lang="ja">${d(e.nameJa)}</p>`:""}
      <div class="tag-row">
        <span class="badge ${e.purchased?"badge-gold":"badge-muted"}">${i(e.purchased?"verified":"pending","sm")}${e.purchased?`\u5DF2\u5165\u624B${e.purchasedAt?` \xB7 ${Z(e.purchasedAt)}`:""}`:"\u5F85\u8CFC\u8CB7"}</span>
        <span class="badge badge-prio">${o.stars} ${o.label}</span>
        ${e.demo?'<span class="badge badge-muted">\u793A\u7BC4\u8CC7\u6599</span>':""}
      </div>
      <button type="button" class="icon-btn dlg-close" aria-label="\u95DC\u9589\u8A73\u60C5">${i("close")}</button>
    </header>

    <div class="dlg-scroll">
      <div class="detail-hero">
        ${we(e,"thumb-lg")}
        <dl class="info-grid">
          ${e.brand?`<div><dt>\u54C1\u724C</dt><dd>${d(e.brand)}</dd></div>`:""}
          <div><dt>\u6578\u91CF</dt><dd>${e.qty}</dd></div>
          <div><dt>\u5730\u5340</dt><dd>${d(e.area||"\u672A\u6307\u5B9A")}</dd></div>
          <div><dt>\u9810\u8A08\u65E5\u671F</dt><dd>${e.planDate?V(e.planDate):"\u672A\u5B9A"}</dd></div>
          <div><dt>\u91CD\u91CF</dt><dd>${e.weightKg?E(l.weight):"\u672A\u586B"}</dd></div>
          <div><dt>\u884C\u674E</dt><dd>${_t[e.luggage]}</dd></div>
          ${e.jan?`<div class="span2"><dt>JAN \u689D\u78BC</dt><dd class="mono">${d(e.jan)}${ne(e.jan)?"":' <small class="text-warn">\uFF08\u6AA2\u67E5\u78BC\u4E0D\u7B26\uFF09</small>'}</dd></div>`:""}
        </dl>
      </div>

      ${e.fragile||e.liquid||e.battery?`<div class="tag-row">
        ${e.fragile?`<span class="badge badge-warn">${i("wine_bar","sm")}\u6613\u788E</span>`:""}
        ${e.liquid?`<span class="badge badge-cyan">${i("water_drop","sm")}\u6DB2\u9AD4</span>`:""}
        ${e.battery?`<span class="badge badge-danger">${i("battery_alert","sm")}\u542B\u92F0\u96FB\u6C60</span>`:""}
      </div>`:""}

      <section class="ledger" aria-labelledby="ledger-title">
        <h3 id="ledger-title" class="section-title">${i("account_balance_wallet","sm")}\u91D1\u984D\u8207\u514D\u7A05\u8A66\u7B97</h3>
        <dl class="ledger-rows">
          <div><dt>\u5B9A\u50F9\uFF08\u542B\u7A05 ${e.taxRate}%\uFF09\xD7 ${e.qty}</dt><dd>${u(l.listIncl)}</dd></div>
          ${l.discount?`<div class="minus"><dt>\u6298\u6263 ${e.discountPct}%</dt><dd>\u2212 ${u(l.discount)}</dd></div>`:""}
          <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${u(l.pay)}</dd></div>
          ${l.refundable?`
            <div class="minus"><dt>\u96E2\u5883\u9000\u7A05\uFF08\u6D88\u8CBB\u7A05 ${e.taxRate}%\uFF09</dt><dd>\u2212 ${u(l.tax)}</dd></div>
            ${l.fee?`<div class="plus"><dt>\u9000\u7A05\u624B\u7E8C\u8CBB ${l.feePct}%</dt><dd>+ ${u(l.fee)}</dd></div>`:""}`:""}
        </dl>
        <div class="ledger-total">
          <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${u(l.net)}</span></div>
          <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${S(l.net,t)}</span></div>
        </div>
        ${a.cardRebatePct?`<p class="hint">${i("credit_card","sm")}\u5237\u5361\u6DE8\u56DE\u994B ${a.cardRebatePct}%\uFF0C\u7D04\u518D\u7701 ${S(l.pay*a.cardRebatePct/100,t)}</p>`:""}
      </section>

      <section class="threshold ${s.eligible&&e.taxFree?"ok":""}" aria-labelledby="th-title">
        <h3 id="th-title" class="section-title">${i("percent","sm")}\u514D\u7A05\u9580\u6ABB\uFF08\u540C\u5E97\u540C\u65E5\u672A\u7A05 ${u(I)}\uFF09</h3>
        ${e.taxFree&&e.store?M(s.progress,{label:"\u514D\u7A05\u9580\u6ABB\u9032\u5EA6",tone:s.eligible?"cyan":"gold"}):""}
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
  </div>`}function ge(e){let a=p.getItem(e);if(!a)return;let t=z("dlg-drawer",rt(a),"detail-title"),r=p.subscribe(()=>{let l=p.getItem(e);if(!l){L(t);return}let s=t.querySelector(".dlg-scroll")?.scrollTop??0,n=document.activeElement?.dataset?.d;t.querySelector(".dlg-shell").outerHTML=rt(l),t.querySelector(".dlg-scroll").scrollTop=s,n&&t.querySelector(`[data-d="${n}"]`)?.focus()});t.addEventListener("click",async l=>{if(l.target.closest(".dlg-close")){L(t);return}let s=l.target.closest("[data-d]")?.dataset.d;s==="toggle"?Se(e):s==="edit"?D(e):s==="counter"?nt(e):s==="delete"&&await Ee(e)&&L(t)}),B(t,{onClose:r})}function Se(e){if(!p.getItem(e))return;let t=p.togglePurchased(e);if(!t.purchased){f({title:"\u5DF2\u6539\u56DE\u5F85\u8CFC\u8CB7",message:d(t.name),tone:"muted",duration:3e3});return}let{byItem:r}=W(p.state.items,p.state.settings),l=r.get(e),s=[`\u652F\u4ED8 ${u(l.pay)}`];l.refund&&s.push(`\u9810\u4F30\u9000\u7A05 ${u(l.refund)}`),l.group.eligible&&l.group.store&&s.push(`${d(l.group.store)} \u5DF2\u9054\u514D\u7A05\u9580\u6ABB`),f({title:"\u6230\u5229\u54C1\u5DF2\u5165\u5EAB",message:`\u300C${d(t.name)}\u300D\xB7 ${s.join(" \xB7 ")}`,actionText:"\u5FA9\u539F",onAction:()=>p.togglePurchased(e,!1)})}async function Ee(e){let a=p.getItem(e);if(!a||!await X({title:"\u522A\u9664\u9019\u500B\u5546\u54C1\uFF1F",body:`\u300C<strong>${d(a.name)}</strong>\u300D\u6703\u5F9E\u6E05\u55AE\u79FB\u9664\u3002\u522A\u9664\u5F8C 5 \u79D2\u5167\u53EF\u4EE5\u6309\u300C\u5FA9\u539F\u300D\u3002`,confirmText:`\u522A\u9664\u300C${a.name.length>10?`${a.name.slice(0,10)}\u2026`:a.name}\u300D`,danger:!0}))return!1;let r=p.state.items.findIndex(s=>s.id===e),l=p.removeItem(e);return f({title:"\u5DF2\u522A\u9664",message:d(l.name),actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>p.restoreItem(l,r)}),!0}function me(e){e.addEventListener("click",a=>{let t=a.target.closest("[data-act]"),r=a.target.closest("[data-id]");if(!t||!r||!e.contains(r))return;let{id:l}=r.dataset;switch(t.dataset.act){case"toggle":Se(l);break;case"open":ge(l);break;case"edit":D(l);break;case"delete":Ee(l);break;default:break}})}var h={cat:"all",status:"all",area:"all",q:"",sort:"new",layout:"grid"};try{h.layout=localStorage.getItem("shopping-relics:layout")||"grid"}catch{}function Ot(e,a){let t=h.q.trim().toLowerCase(),r=e.filter(s=>(h.cat==="all"||s.category===h.cat)&&(h.status==="all"||(h.status==="done"?s.purchased:!s.purchased))&&(h.area==="all"||(s.area||"\u672A\u6307\u5B9A")===h.area)&&(!t||[s.name,s.nameJa,s.brand,s.store,s.area,s.note,s.jan].join(" ").toLowerCase().includes(t))),l={new:(s,n)=>n.createdAt-s.createdAt,priority:(s,n)=>n.priority-s.priority||n.createdAt-s.createdAt,price:(s,n)=>a.get(n.id).pay-a.get(s.id).pay,area:(s,n)=>(s.area||"~").localeCompare(n.area||"~","zh-Hant")||s.store.localeCompare(n.store,"zh-Hant")};return r=[...r].sort(l[h.sort]),r.sort((s,n)=>Number(s.purchased)-Number(n.purchased))}function lt({state:e,sum:a,rate:t}){let{settings:r}=e,l=a.count?a.purchasedCount/a.count:0;return`
    ${j({label:"\u63A1\u8CFC\u5B8C\u6210\u9032\u5EA6",icon:"verified",value:a.purchasedCount,unit:` / ${a.count} \u4EF6`,bar:M(l,{label:"\u63A1\u8CFC\u5B8C\u6210\u9032\u5EA6"}),foot:`<span>${a.purchasedCount} \u4EF6\u5DF2\u5165\u624B</span><span>${a.pendingCount} \u4EF6\u5F85\u8CFC</span>`})}
    ${j({label:"\u5DF2\u82B1\u8CBB",icon:"account_balance_wallet",value:u(a.paid),unit:` / ${u(r.budget)}`,bar:ee([{value:a.paid,tone:"paid"},{value:a.pending,tone:"later"}],r.budget,`\u9810\u7B97 ${u(r.budget)}\uFF1A\u5DF2\u82B1 ${u(a.paid)}\uFF0C\u5F85\u8CB7 ${u(a.pending)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${u(a.pay)}</span><span class="${a.remaining<0?"text-danger":""}">${a.remaining<0?"\u5C07\u8D85\u652F":"\u8CB7\u5B8C\u5269"} ${u(Math.abs(a.remaining))}</span>`})}
    ${j({label:"\u9810\u4F30\u514D\u7A05\u9000\u7A05",icon:"price_check",value:u(a.refund),foot:`<span>${a.eligibleStores} / ${a.taxFreeStores} \u5BB6\u5E97\u9054\u9580\u6ABB</span><span>\u2248 ${S(a.refund,t)}</span>`,tone:"kpi-cyan"})}
    ${j({label:"\u8A17\u904B\u884C\u674E\uFF08\u76EE\u524D\uFF09",icon:"luggage",value:x(a.totalCheckedNow,1),unit:` / ${r.checkedLimit} kg`,bar:ee([{value:r.checkedBase,tone:"base"},{value:a.weightCheckedNow,tone:"paid"},{value:a.weightChecked-a.weightCheckedNow,tone:"later"}],r.checkedLimit,`\u8A17\u904B\u9650\u91CD ${r.checkedLimit} \u516C\u65A4\uFF1A\u76EE\u524D ${x(a.totalCheckedNow,1)}\uFF0C\u5168\u90E8\u8CB7\u5B8C ${x(a.totalChecked,1)}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${E(a.totalChecked)}</span><span>${a.totalChecked>r.checkedLimit?'<b class="text-danger">\u8CB7\u5B8C\u6703\u8D85\u91CD</b>':`\u8CB7\u5B8C\u5269 ${E(r.checkedLimit-a.totalChecked)}`}</span>`})}`}function ot(e){let a=Object.fromEntries(Y.map(l=>[l.id,0]));e.forEach(l=>{a[l.category]=(a[l.category]??0)+1});let t=[...new Set(e.map(l=>l.area||"\u672A\u6307\u5B9A"))].sort((l,s)=>l.localeCompare(s,"zh-Hant"));h.area!=="all"&&!t.includes(h.area)&&(h.area="all");let r=Y.filter(l=>a[l.id]>0);return h.cat!=="all"&&!a[h.cat]&&(h.cat="all"),`
  <div class="card toolbar">
    <div class="chips" role="group" aria-label="\u4F9D\u5206\u985E\u7BE9\u9078">
      <button type="button" class="chip ${h.cat==="all"?"on":""}" data-cat="all" aria-pressed="${h.cat==="all"}">${i("diamond","sm")}\u5168\u90E8 (${e.length})</button>
      ${r.map(l=>`<button type="button" class="chip ${h.cat===l.id?"on":""}" data-cat="${l.id}" aria-pressed="${h.cat===l.id}">${i(l.icon,"sm")}${l.label} (${a[l.id]})</button>`).join("")}
    </div>
    <div class="filters">
      <div class="search">
        <label for="f-q" class="sr-only">\u641C\u5C0B\u5546\u54C1</label>
        ${i("search")}
        <input id="f-q" type="search" placeholder="\u641C\u5C0B\u54C1\u540D\u3001\u54C1\u724C\u3001\u5E97\u5BB6\u2026" value="${d(h.q)}" autocomplete="off">
      </div>
      <div class="select-wrap">
        <label for="f-status" class="sr-only">\u72C0\u614B</label>
        <select id="f-status">
          <option value="all">\u5168\u90E8\u72C0\u614B</option>
          <option value="todo" ${h.status==="todo"?"selected":""}>\u5F85\u8CFC\u8CB7</option>
          <option value="done" ${h.status==="done"?"selected":""}>\u5DF2\u5165\u624B</option>
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-area" class="sr-only">\u5730\u5340</label>
        <select id="f-area">
          <option value="all">\u5168\u90E8\u5730\u5340</option>
          ${t.map(l=>`<option ${h.area===l?"selected":""}>${d(l)}</option>`).join("")}
        </select>
      </div>
      <div class="select-wrap">
        <label for="f-sort" class="sr-only">\u6392\u5E8F</label>
        <select id="f-sort">
          <option value="new">\u6700\u65B0\u52A0\u5165</option>
          <option value="priority" ${h.sort==="priority"?"selected":""}>\u6E34\u671B\u7B49\u7D1A</option>
          <option value="price" ${h.sort==="price"?"selected":""}>\u50F9\u683C\u9AD8\u5230\u4F4E</option>
          <option value="area" ${h.sort==="area"?"selected":""}>\u5730\u5340\u8207\u5E97\u5BB6</option>
        </select>
      </div>
      <div class="seg" role="group" aria-label="\u986F\u793A\u65B9\u5F0F">
        <button type="button" class="icon-btn ${h.layout==="grid"?"on":""}" data-layout="grid" aria-pressed="${h.layout==="grid"}" aria-label="\u5361\u7247\u986F\u793A" title="\u5361\u7247\u986F\u793A">${i("grid_view")}</button>
        <button type="button" class="icon-btn ${h.layout==="list"?"on":""}" data-layout="list" aria-pressed="${h.layout==="list"}" aria-label="\u5217\u8868\u986F\u793A" title="\u5217\u8868\u986F\u793A">${i("view_list")}</button>
      </div>
    </div>
  </div>`}function it({state:e,sum:a,rate:t}){let r=Ot(e.items,a.byItem),l=`<p class="result-count" role="status">\u986F\u793A ${r.length} / ${e.items.length} \u4EF6</p>`;return r.length?`${l}<div class="item-grid layout-${h.layout}">${r.map(s=>at(s,a.byItem.get(s.id),t,h.layout)).join("")}</div>`:`${l}<div class="card empty empty-sm"><p class="empty-text">\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u5546\u54C1\u3002</p>
      <button type="button" class="btn btn-ghost" data-reset-filter>${i("filter_alt_off")}\u6E05\u9664\u7BE9\u9078</button></div>`}function Bt({state:e,sum:a}){let t=["\u72C0\u614B","\u54C1\u540D","\u65E5\u6587\u540D\u7A31","\u54C1\u724C","\u5206\u985E","\u6578\u91CF","\u5730\u5340","\u5E97\u5BB6","\u9810\u8A08\u65E5\u671F","\u5E97\u982D\u652F\u4ED8(JPY)","\u9810\u4F30\u9000\u7A05(JPY)","\u5BE6\u969B\u6210\u672C(JPY)","\u53F0\u5E63(\u7D04)","\u91CD\u91CF(kg)","\u884C\u674E","JAN","\u5099\u8A3B"],r={checked:"\u8A17\u904B",carry:"\u96A8\u8EAB",none:"\u4E0D\u653E\u884C\u674E"},l=e.items.map(n=>{let o=a.byItem.get(n.id);return[n.purchased?"\u5DF2\u5165\u624B":"\u5F85\u8CFC",n.name,n.nameJa,n.brand,K(n.category).label,n.qty,n.area,n.store,n.planDate,o.pay,o.refund,o.net,Math.round(o.pay*e.settings.rate),o.weight,r[n.luggage],n.jan,n.note]}),s=[t,...l].map(n=>n.map(o=>`"${String(o??"").replace(/"/g,'""')}"`).join(",")).join(`\r
`);pe(`shopping-list-${new Date().toISOString().slice(0,10)}.csv`,`\uFEFF${s}`,"text/csv")}function zt(e,a){let t=a,r=()=>{let{state:s}=t,n=s.items.length>0,o=s.items.some(c=>c.demo);e.innerHTML=`
      ${U({eyebrow:`AETHER WISHLIST \xB7 ${d(s.settings.tripName)}`,title:"\u65C5\u65E5\u5FC5\u8CB7\u9858\u671B\u6E05\u55AE",sub:"\u8A18\u4E0B\u60F3\u8CB7\u7684\u5BF6\u7269\uFF0C\u5373\u6642\u63DB\u7B97\u53F0\u5E63\u3001\u8A66\u7B97\u514D\u7A05\u9000\u7A05\uFF0C\u901B\u8857\u6642\u4E00\u773C\u770B\u6E05\u9084\u5DEE\u4EC0\u9EBC\u3002",actions:n?`
          <button type="button" class="btn btn-ghost" data-export>${i("download")}\u532F\u51FA CSV</button>
          <button type="button" class="btn btn-gold" data-add>${i("add_circle")}\u65B0\u589E\u63A1\u8CFC\u9805\u76EE</button>`:""})}
      ${o?`<div class="notice notice-demo" role="note">${i("info")}<p>\u76EE\u524D\u6E05\u55AE\u542B<strong>\u793A\u7BC4\u8CC7\u6599</strong>\uFF0C\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u4E0D\u4EE3\u8868\u5BE6\u969B\u552E\u50F9\u3002</p>
        <button type="button" class="btn btn-sm btn-ghost" data-clear-demo>\u6E05\u9664\u793A\u7BC4\u8CC7\u6599</button></div>`:""}
      <div class="kpi-grid" data-region="kpi">${lt(t)}</div>
      ${n?`<div data-region="toolbar">${ot(s.items)}</div><div data-region="grid">${it(t)}</div>`:te({title:"\u6E05\u55AE\u9084\u662F\u7A7A\u7684",text:"\u5148\u628A\u60F3\u8CB7\u7684\u7B2C\u4E00\u4EF6\u5BF6\u7269\u8A18\u4E0B\u4F86\u5427\u3002\u4E5F\u53EF\u4EE5\u8F09\u5165\u793A\u7BC4\u8CC7\u6599\uFF0C\u770B\u770B\u6574\u500B\u6D41\u7A0B\u600E\u9EBC\u904B\u4F5C\u3002",actions:`<button type="button" class="btn btn-gold" data-add>${i("add_circle")}\u65B0\u589E\u7B2C\u4E00\u4EF6</button>
                    <button type="button" class="btn btn-ghost" data-demo>${i("auto_awesome")}\u8F09\u5165\u793A\u7BC4\u8CC7\u6599</button>`})}`},l=()=>{let s=k('[data-region="grid"]',e);s&&(s.innerHTML=it(t))};return r(),me(e),e.addEventListener("click",s=>{let n=s.target.closest("button");if(n)if(n.matches("[data-add]"))D();else if(n.matches("[data-demo]"))p.loadDemo(),f({title:"\u5DF2\u8F09\u5165\u793A\u7BC4\u8CC7\u6599",message:"\u50F9\u683C\u70BA\u793A\u610F\u6578\u5B57\uFF0C\u53EF\u96A8\u6642\u6E05\u9664\u3002"});else if(n.matches("[data-clear-demo]"))p.clearDemo(),f({title:"\u5DF2\u6E05\u9664\u793A\u7BC4\u8CC7\u6599",tone:"muted",duration:3e3});else if(n.matches("[data-export]"))Bt(t);else if(n.matches("[data-cat]"))h.cat=n.dataset.cat,se("[data-cat]",e).forEach(o=>{o.classList.toggle("on",o===n),o.setAttribute("aria-pressed",o===n)}),l();else if(n.matches("[data-layout]")){h.layout=n.dataset.layout;try{localStorage.setItem("shopping-relics:layout",h.layout)}catch{}se("[data-layout]",e).forEach(o=>{o.classList.toggle("on",o===n),o.setAttribute("aria-pressed",o===n)}),l()}else n.matches("[data-reset-filter]")&&(Object.assign(h,{cat:"all",status:"all",area:"all",q:""}),r())}),e.addEventListener("input",s=>{s.target.id==="f-q"&&(h.q=s.target.value,l())}),e.addEventListener("change",s=>{let n={"f-status":"status","f-area":"area","f-sort":"sort"};n[s.target.id]&&(h[n[s.target.id]]=s.target.value,l())}),{update(s){t=s;let n=!!k('[data-region="toolbar"]',e),o=!!k(".notice-demo",e);if(n!==s.state.items.length>0||o!==s.state.items.some(A=>A.demo)){r();return}k('[data-region="kpi"]',e).innerHTML=lt(t);let g=k('[data-region="toolbar"]',e);g&&!g.contains(document.activeElement)&&(g.innerHTML=ot(t.state.items));let b=document.activeElement,v=b?.closest?.("[data-id]"),P=v?`[data-id="${v.dataset.id}"] [data-act="${b.dataset.act}"]`:null;l(),P&&k(P,e)?.focus({preventScroll:!0})}}}var qe={};le(qe,{mount:()=>Ut});var F="all",Jt=e=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`;function Gt(e){let a=new Map;for(let t of e.values()){let r=t.area||"\u672A\u6307\u5B9A\u5730\u5340";a.has(r)||a.set(r,{name:r,groups:[],pay:0,pending:0,count:0});let l=a.get(r);l.groups.push(t),l.pay+=t.totalPay,l.count+=t.items.length,l.pending+=t.items.filter(s=>!s.purchased).length}for(let t of a.values())t.groups.sort((r,l)=>(r.store?0:1)-(l.store?0:1)||l.totalPay-r.totalPay);return[...a.values()].sort((t,r)=>(t.name==="\u672A\u6307\u5B9A\u5730\u5340")-(r.name==="\u672A\u6307\u5B9A\u5730\u5340")||r.pay-t.pay)}function Ht(e,a,t){let r=!e.store,l=r?"\u672A\u586B\u5E97\u5BB6":e.store,s="";!r&&e.hasTaxFreeItems?s=e.eligible?`<span class="badge badge-cyan">${i("verified","sm")}\u5DF2\u9054\u514D\u7A05\u9580\u6ABB</span>`:`<span class="badge badge-warn">\u5DEE ${u(e.shortfall)} \u9054\u6A19</span>`:r||(s='<span class="badge badge-muted">\u4E0D\u8FA6\u514D\u7A05</span>');let n=e.items.reduce((c,g)=>c+a.get(g.id).refund,0),o=!r&&e.hasTaxFreeItems&&!e.eligible&&e.shortfall<=2e3?`<p class="tip">${i("lightbulb","sm")}\u518D\u8CB7\u672A\u7A05 ${u(e.shortfall)} \u7684\u5546\u54C1\uFF0C\u9019\u5BB6\u5E97\u5C31\u80FD\u9000\u7A05\u3002</p>`:"";return`
  <article class="card store-card ${e.eligible?"is-ok":""}">
    <header class="store-head">
      <span class="store-icon">${i(r?"help":"storefront")}</span>
      <div class="store-title">
        <h3>${d(l)}</h3>
        <p>${e.date?`${i("event","sm")}${V(e.date)} \xB7 `:""}${e.items.length} \u4EF6 \xB7 \u5408\u8A08 ${u(e.totalPay)}</p>
      </div>
      ${s}
    </header>
    ${!r&&e.hasTaxFreeItems?`
      <div class="store-progress">
        <div class="row-between"><span>\u514D\u7A05\u672A\u7A05\u5408\u8A08</span><span><strong>${u(e.eligibleExcl)}</strong> / ${u(I)}</span></div>
        ${M(e.progress,{label:`${l} \u514D\u7A05\u9580\u6ABB\u9032\u5EA6`,tone:e.eligible?"cyan":"gold"})}
        ${n?`<p class="row-between muted"><span>\u9810\u4F30\u9000\u7A05</span><span>${u(n)}\uFF08\u2248 ${S(n,t)}\uFF09</span></p>`:""}
      </div>`:""}
    ${o}
    ${e.undatedMerge?`<p class="tip tip-info">${i("event","sm")}<span>\u540C\u5E97\u5546\u54C1\u5206\u4E0D\u540C\u5929\u8CB7\u6642\uFF0C\u8ACB\u586B\u9810\u8A08\u65E5\u671F\u3002\u76EE\u524D ${e.items.filter(c=>c.taxFree).length} \u4EF6\u8996\u70BA\u540C\u4E00\u5929\u5408\u4F75\u8A08\u7B97${e.mergeNeeded?"\uFF0C<strong>\u5206\u958B\u8CB7\u53EF\u80FD\u5C31\u4E0D\u5230\u514D\u7A05\u9580\u6ABB</strong>":""}\u3002</span></p>`:""}
    <ul class="mini-list">
      ${e.items.map(c=>{let g=a.get(c.id);return`<li class="mini-item ${c.purchased?"is-done":""}" data-id="${c.id}">
          <button type="button" class="check ${c.purchased?"on":""}" data-act="toggle" role="checkbox" aria-checked="${c.purchased}" aria-label="\u5DF2\u5165\u624B\uFF1A${d(c.name)}">${i("check")}</button>
          <button type="button" class="mini-name" data-act="open">${d(c.name)}${c.qty>1?` <small>\xD7 ${c.qty}</small>`:""}</button>
          <span class="mini-price">${u(g.pay)}</span>
        </li>`}).join("")}
    </ul>
    ${r?"":`<a class="link-btn" href="${Jt(`${e.store} ${e.area||""}`.trim())}" target="_blank" rel="noopener">${i("map","sm")}\u5728 Google \u5730\u5716\u958B\u555F<span class="sr-only">\uFF08${d(l)}\uFF0C\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a>`}
  </article>`}function Kt(e){let a=ze(e.items.map(t=>t.store),e.settings.ignoredStorePairs);return a.length?`<div class="merge-list" role="region" aria-label="\u53EF\u80FD\u662F\u540C\u4E00\u5BB6\u5E97">${a.map(([t,r])=>`
    <div class="notice notice-warn merge-notice" data-a="${d(t)}" data-b="${d(r)}">
      ${i("storefront")}
      <p><strong>\u300C${d(t)}\u300D\u548C\u300C${d(r)}\u300D\u662F\u540C\u4E00\u5BB6\u5E97\u55CE\uFF1F</strong><br>
      \u5E97\u540D\u4E0D\u540C\u6703\u5206\u958B\u8A08\u7B97\u514D\u7A05\u9580\u6ABB\u3002\u82E5\u662F\u540C\u4E00\u5BB6\uFF0C\u5408\u4F75\u5F8C\u624D\u6703\u6B63\u78BA\u52A0\u7E3D\u3002</p>
      <div class="btn-row merge-actions">
        <button type="button" class="btn btn-sm btn-ghost" data-merge="a">\u5408\u4F75\u70BA\u300C${d(t)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="b">\u5408\u4F75\u70BA\u300C${d(r)}\u300D</button>
        <button type="button" class="btn btn-sm btn-ghost" data-merge="no">\u4E0D\u662F\u540C\u4E00\u5BB6</button>
      </div>
    </div>`).join("")}</div>`:""}function Le(e){let{state:a,sum:t,rate:r}=e;if(!a.items.length)return te({title:"\u9084\u6C92\u6709\u4EFB\u4F55\u5730\u5340",text:"\u65B0\u589E\u5546\u54C1\u6642\u586B\u5BEB\u5730\u5340\u8207\u5E97\u5BB6\uFF0C\u9019\u88E1\u5C31\u6703\u81EA\u52D5\u6574\u7406\u51FA\u901B\u8857\u8DEF\u7DDA\u8207\u5404\u5E97\u514D\u7A05\u9032\u5EA6\u3002",actions:`<a class="btn btn-gold" href="#/list">${i("temple_buddhist")}\u524D\u5F80\u6E05\u55AE</a>`});let l=Gt(t.groups);F!=="all"&&!l.some(o=>o.name===F)&&(F="all");let s=l.filter(o=>F==="all"||o.name===F),n=[...t.groups.values()].filter(o=>o.store).length;return`
  <div class="kpi-grid">
    ${j({label:"\u5DE1\u79AE\u5730\u5340",icon:"travel_explore",value:l.filter(o=>o.name!=="\u672A\u6307\u5B9A\u5730\u5340").length,unit:" \u5340",foot:`<span>${l.map(o=>d(o.name)).slice(0,4).join(" / ")}${l.length>4?"\u2026":""}</span>`})}
    ${j({label:"\u5E97\u5BB6",icon:"storefront",value:n,unit:" \u5BB6",foot:`<span>${t.pendingCount} \u4EF6\u5F85\u8CFC</span><span>${t.purchasedCount} \u4EF6\u5DF2\u5165\u624B</span>`})}
    ${j({label:"\u514D\u7A05\u9054\u6A19",icon:"price_check",value:t.eligibleStores,unit:` / ${t.taxFreeStores} \u5BB6`,bar:M(t.taxFreeStores?t.eligibleStores/t.taxFreeStores:0,{label:"\u514D\u7A05\u9054\u6A19\u5E97\u5BB6\u6BD4\u4F8B",tone:"cyan"}),tone:"kpi-cyan"})}
    ${j({label:"\u9810\u4F30\u9000\u7A05",icon:"savings",value:u(t.refund),foot:`<span>\u2248 ${S(t.refund,r)}</span>`})}
  </div>

  <div class="card toolbar">
    <div class="chips" role="group" aria-label="\u4F9D\u5730\u5340\u7BE9\u9078">
      <button type="button" class="chip ${F==="all"?"on":""}" data-area="all" aria-pressed="${F==="all"}">${i("public","sm")}\u5168\u90E8</button>
      ${l.map(o=>`<button type="button" class="chip ${F===o.name?"on":""}" data-area="${d(o.name)}" aria-pressed="${F===o.name}">${d(o.name)} (${o.count})</button>`).join("")}
    </div>
  </div>

  ${Kt(a)}
  <div class="notice" role="note">${i("info")}<p>\u514D\u7A05\u9580\u6ABB\u4EE5<strong>\u540C\u4E00\u5929\u3001\u540C\u4E00\u5E97\u5BB6</strong>\u7684\u672A\u7A05\u5408\u8A08\u5224\u65B7\u3002\u540C\u5E97\u5546\u54C1\u82E5\u586B\u4E86\u4E0D\u540C\u7684\u9810\u8A08\u65E5\u671F\uFF0C\u6703\u5206\u958B\u8A08\u7B97\u3002</p></div>

  ${s.map((o,c)=>`
    <section class="area-section" aria-labelledby="area-h-${c}">
      <header class="area-head">
        <h2 id="area-h-${c}" class="area-title">${i("location_on")}${d(o.name)}</h2>
        <p class="area-meta">${o.groups.filter(g=>g.store).length} \u5BB6\u5E97 \xB7 ${o.count} \u4EF6 \xB7 ${u(o.pay)}</p>
      </header>
      <div class="store-grid">${o.groups.map(g=>Ht(g,t.byItem,r)).join("")}</div>
    </section>`).join("")}`}function Ut(e,a){let t=a;e.innerHTML=`
    ${U({eyebrow:"SACRED REALMS \xB7 \u5546\u5708\u8207\u5E97\u5BB6",title:"\u65E5\u672C\u5DE1\u79AE\u8CFC\u7269\u5730\u5716",sub:"\u4F9D\u5730\u5340\u8207\u5E97\u5BB6\u81EA\u52D5\u6574\u7406\u5F85\u8CFC\u6E05\u55AE\uFF0C\u770B\u6E05\u6BCF\u5BB6\u5E97\u96E2\u514D\u7A05\u9580\u6ABB\u9084\u5DEE\u591A\u5C11\u3002"})}
    <div data-region="content">${Le(t)}</div>`;let r=e.querySelector('[data-region="content"]');return me(e),e.addEventListener("click",l=>{let s=l.target.closest("[data-merge]");if(s){let o=s.closest(".merge-notice"),{a:c,b:g}=o.dataset,b=s.dataset.merge;if(b==="no")p.updateSettings({ignoredStorePairs:[...p.state.settings.ignoredStorePairs,he(c,g)]}),f({title:"\u5DF2\u8A18\u4F4F\uFF1A\u5169\u5BB6\u662F\u4E0D\u540C\u7684\u5E97",tone:"muted",duration:2500});else{let v=b==="a"?c:g,P=b==="a"?g:c,A=p.state.items.map($=>({id:$.id,store:$.store}));p.renameStore(P,v),f({title:`\u5DF2\u5408\u4F75\u70BA\u300C${v}\u300D`,message:"\u514D\u7A05\u9580\u6ABB\u5DF2\u91CD\u65B0\u8A08\u7B97\u3002",actionText:"\u5FA9\u539F",tone:"muted",onAction:()=>A.forEach($=>{p.getItem($.id)?.store!==$.store&&p.updateItem($.id,{store:$.store})})})}return}let n=l.target.closest("[data-area]");n&&(F=n.dataset.area,r.innerHTML=Le(t),r.querySelector(`[data-area="${CSS.escape(F)}"]`)?.focus())}),{update(l){t=l;let s=document.activeElement,n=s?.closest?.("[data-id]"),o=n?`[data-id="${n.dataset.id}"] [data-act="${s.dataset.act}"]`:null;r.innerHTML=Le(t),o&&r.querySelector(o)?.focus({preventScroll:!0})}}}var Ie={};le(Ie,{mount:()=>Vt});var N={price:1e4,includesTax:!0,taxRate:10,discountPct:0,feePct:null},be=1e4;function ct({state:e}){let a=e.settings,t=a.rateSource==="manual"?"\u624B\u52D5\u8F38\u5165":a.rateSource==="api"?a.rateProvider||"\u516C\u958B\u532F\u7387 API":"\u9810\u8A2D\u503C\uFF08\u5C1A\u672A\u9023\u7DDA\u66F4\u65B0\uFF09";return`
  <section class="card rate-card" aria-labelledby="rate-title">
    <div class="rate-glow" aria-hidden="true"></div>
    <p class="eyebrow eyebrow-light">${i("currency_exchange","sm")}AETHER CURRENCY</p>
    <h2 id="rate-title" class="sr-only">\u532F\u7387</h2>
    <p class="rate-big"><span>1 JPY =</span> <strong>${x(a.rate,4)}</strong> <span>TWD</span></p>
    <p class="rate-src">${d(t)}${a.rateUpdatedAt?` \xB7 ${Z(a.rateUpdatedAt)}`:""}</p>
    <p class="rate-note">\u5E02\u5834\u53C3\u8003\u532F\u7387\uFF0C\u5BE6\u969B\u63DB\u532F\u6216\u5237\u5361\u91D1\u984D\u6703\u56E0\u9280\u884C\u532F\u5DEE\u3001\u624B\u7E8C\u8CBB\u800C\u4E0D\u540C\u3002</p>
    <div class="rate-actions">
      <button type="button" class="btn btn-gold btn-sm" data-sync>${i("sync","sm")}\u6293\u6700\u65B0\u532F\u7387</button>
      <form class="rate-manual" data-manual>
        <label for="rate-input" class="sr-only">\u624B\u52D5\u8F38\u5165\u532F\u7387</label>
        <input id="rate-input" type="number" inputmode="decimal" step="0.0001" min="0.01" max="5" placeholder="${x(a.rate,4)}">
        <button type="submit" class="btn btn-ghost-light btn-sm">${i("tune","sm")}\u5957\u7528</button>
      </form>
    </div>
    <div class="converter">
      <label for="conv-yen">\u63DB\u7B97</label>
      <div class="input-affix input-dark"><span aria-hidden="true">\xA5</span><input id="conv-yen" type="number" inputmode="numeric" min="0" value="${be}"></div>
      <span class="conv-eq" aria-hidden="true">${i("sync_alt")}</span>
      <output for="conv-yen" class="conv-out" data-conv>${S(be,a.rate)}</output>
    </div>
  </section>`}function dt({state:e,sum:a,rate:t}){let r=e.settings,l=r.budget?a.paid/r.budget*100:0,s=r.budget?a.pending/r.budget*100:0,n=a.remaining<0;return`
  <section class="card budget-card" aria-labelledby="budget-title">
    <div class="card-head">
      <h2 id="budget-title" class="section-title">${i("account_balance_wallet","sm")}\u9810\u7B97\u7E3D\u89BD</h2>
      <span class="badge ${n?"badge-danger":"badge-cyan"}">${i(n?"warning":"shield","sm")}${n?a.paid>r.budget?"\u5DF2\u8D85\u51FA\u9810\u7B97":"\u8CB7\u5B8C\u6703\u8D85\u652F":"\u9810\u7B97\u5B89\u5168"}</span>
    </div>
    <p class="muted">\u9810\u7B97 ${u(r.budget)}\uFF08\u2248 ${S(r.budget,t)}\uFF09</p>
    <div class="dual-stat">
      <div class="is-now"><span class="k">\u76EE\u524D\u5DF2\u652F\u4ED8</span><span class="v">${u(a.paid)}</span>
        <span class="s">\u2248 ${S(a.paid,t)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetUsedPct*100)}%</span></div>
      <div><span class="k">\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30</span><span class="v">${u(a.pay)}</span>
        <span class="s">\u2248 ${S(a.pay,t)} \xB7 \u9810\u7B97\u7684 ${Math.round(a.budgetPlannedPct*100)}%</span></div>
    </div>
    <div class="stack-bar" role="img" aria-label="\u5DF2\u652F\u4ED8 ${u(a.paid)}\uFF0C\u5F85\u8CFC ${u(a.pending)}\uFF0C\u9810\u7B97 ${u(r.budget)}">
      <span class="seg-paid" style="--w:${Math.min(100,l)}%"></span>
      <span class="seg-later" style="--w:${Math.max(0,Math.min(100-Math.min(100,l),s))}%"></span>
    </div>
    <dl class="legend-grid">
      <div><dt><i class="dot dot-gold"></i>\u5DF2\u652F\u4ED8\uFF08${a.purchasedCount} \u4EF6\uFF09</dt><dd>${u(a.paid)}</dd></div>
      <div><dt><i class="dot dot-later"></i>\u5F85\u8CFC\uFF08${a.pendingCount} \u4EF6\uFF09</dt><dd>${u(a.pending)}</dd></div>
      <div class="${n?"text-danger":""}"><dt><i class="dot dot-slate"></i>${n?"\u8CB7\u5B8C\u8D85\u652F":"\u8CB7\u5B8C\u5269\u9918"}</dt><dd>${u(Math.abs(a.remaining))} <small>(${S(Math.abs(a.remaining),t)})</small></dd></div>
    </dl>
    <form class="inline-form" data-budget>
      <label for="budget-input">\u4FEE\u6539\u9810\u7B97</label>
      <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="budget-input" type="number" inputmode="numeric" min="0" step="1000" value="${r.budget}"></div>
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
    </form>
  </section>`}function ut({state:e,sum:a,rate:t}){let r=e.settings,l=[...a.groups.values()].filter(n=>n.store&&n.hasTaxFreeItems).sort((n,o)=>Number(o.eligible)-Number(n.eligible)||o.eligibleExcl-n.eligibleExcl),s=n=>n.items.reduce((o,c)=>o+a.byItem.get(c.id).refund,0);return`
  <section class="card refund-card" aria-labelledby="refund-title">
    <div class="refund-hero">
      <div>
        <p class="eyebrow eyebrow-light">${i("savings","sm")}SACRED TAX RELIEF</p>
        <h2 id="refund-title" class="refund-big">\u9810\u4F30\u9000\u7A05 ${u(a.refund)}</h2>
      </div>
      <p class="refund-twd">\u2248 ${S(a.refund,t)}</p>
    </div>
    ${l.length?`<ul class="refund-list">
      ${l.map(n=>`
        <li>
          <div class="row-between"><strong>${d(n.store)}${n.date?` <small>${n.date.slice(5).replace("-","/")}</small>`:""}</strong>
            ${n.eligible?`<span class="badge badge-cyan">\u9000 ${u(s(n))}</span>`:`<span class="badge badge-warn">\u5DEE ${u(n.shortfall)}</span>`}</div>
          ${M(n.progress,{label:`${n.store} \u514D\u7A05\u9580\u6ABB`,tone:n.eligible?"cyan":"gold"})}
          <p class="muted small">\u672A\u7A05\u5408\u8A08 ${u(n.eligibleExcl)} / ${u(I)}</p>
        </li>`).join("")}
    </ul>`:'<p class="muted pad">\u9084\u6C92\u6709\u52FE\u9078\u300C\u8FA6\u7406\u514D\u7A05\u300D\u4E14\u586B\u4E86\u5E97\u5BB6\u7684\u5546\u54C1\u3002</p>'}
    <form class="inline-form" data-rebate>
      <label for="rebate-input">\u5237\u5361\u6DE8\u56DE\u994B %</label>
      <input id="rebate-input" type="number" inputmode="decimal" min="0" max="30" step="0.1" value="${r.cardRebatePct}">
      <button type="submit" class="btn btn-slate btn-sm">\u5132\u5B58</button>
      ${r.cardRebatePct?`<p class="muted small grow">\u5168\u90E8\u5237\u5361\u7D04\u53EF\u56DE\u994B ${S(a.rebate,t)}</p>`:""}
    </form>
  </section>`}function pt(e){let a=N.feePct??p.state.settings.refundFeePct,t=Ke({...N,feePct:a});return`
    <dl class="ledger-rows">
      <div><dt>\u672A\u7A05\u91D1\u984D\uFF08\u6298\u6263\u5F8C\uFF09</dt><dd>${u(t.excl)}</dd></div>
      <div><dt>\u6D88\u8CBB\u7A05 ${N.taxRate}%</dt><dd>${u(t.tax)}</dd></div>
      <div class="strong"><dt>\u5E97\u982D\u652F\u4ED8\uFF08\u542B\u7A05\uFF09</dt><dd>${u(t.pay)}</dd></div>
      <div class="minus"><dt>\u96E2\u5883\u9000\u7A05${a?`\uFF08\u6263\u624B\u7E8C\u8CBB ${a}%\uFF09`:""}</dt><dd>${t.eligible?`\u2212 ${u(t.refund)}`:"\u672A\u9054\u9580\u6ABB"}</dd></div>
    </dl>
    <div class="ledger-total">
      <div><span class="ledger-k">\u5BE6\u969B\u6210\u672C</span><span class="ledger-v">${u(t.net)}</span></div>
      <div class="ledger-twd"><span class="ledger-k">\u7D04\u5408\u53F0\u5E63</span><span class="ledger-v">${S(t.net,e)}</span></div>
    </div>
    <p class="calc-status ${t.eligible?"ok":"warn"}">${i(t.eligible?"celebration":"info","sm")}${t.eligible?`\u6BD4\u539F\u50F9\u7701\u4E0B ${u(t.saved)}\uFF08\u2248 ${S(t.saved,e)}\uFF09`:`\u55AE\u7B46\u672A\u7A05\u672A\u6EFF ${u(I)}\uFF0C\u9700\u8207\u540C\u5E97\u540C\u65E5\u5176\u4ED6\u5546\u54C1\u5408\u4F75\u8A08\u7B97`}</p>`}function Yt({rate:e}){let a=[0,5,7,10];return`
  <section class="card calc-card" aria-labelledby="calc-title">
    <div class="card-head">
      <h2 id="calc-title" class="section-title">${i("calculate","sm")}\u55AE\u7B46\u9000\u7A05\u8A66\u7B97\u76E4</h2>
      <span class="badge badge-muted">\u5373\u6642\u8A08\u7B97</span>
    </div>
    <div class="calc-layout">
      <form class="calc-form" data-calc-form>
        <div class="field">
          <label for="qc-price">\u6A19\u50F9\uFF08\u65E5\u5713\uFF09</label>
          <div class="input-affix"><span aria-hidden="true">\xA5</span><input id="qc-price" name="price" type="number" inputmode="numeric" min="0" value="${N.price}"></div>
        </div>
        <div class="grid-2 tight">
          <div class="field"><span class="label" id="qc-l1">\u6A19\u50F9</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l1">
              <label class="pill"><input type="radio" name="includesTax" value="true" ${N.includesTax?"checked":""}><span>\u542B\u7A05</span></label>
              <label class="pill"><input type="radio" name="includesTax" value="false" ${N.includesTax?"":"checked"}><span>\u672A\u7A05</span></label>
            </div></div>
          <div class="field"><span class="label" id="qc-l2">\u7A05\u7387</span>
            <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l2">
              <label class="pill"><input type="radio" name="taxRate" value="10" ${N.taxRate===10?"checked":""}><span>10%</span></label>
              <label class="pill"><input type="radio" name="taxRate" value="8" ${N.taxRate===8?"checked":""}><span>8% \u98DF\u54C1</span></label>
            </div></div>
        </div>
        <div class="field"><span class="label" id="qc-l3">\u6298\u6263\uFF0F\u512A\u60E0\u5238</span>
          <div class="seg-pills" role="radiogroup" aria-labelledby="qc-l3">
            ${a.map(t=>`<label class="pill"><input type="radio" name="discountPct" value="${t}" ${N.discountPct===t?"checked":""}><span>${t?`${t}%`:"\u7121"}</span></label>`).join("")}
          </div>
        </div>
        <div class="field">
          <label for="qc-fee">\u9000\u7A05\u624B\u7E8C\u8CBB %</label>
          <input id="qc-fee" name="feePct" type="number" inputmode="decimal" min="0" max="20" step="0.01" value="${N.feePct??""}" placeholder="\u9810\u8A2D ${p.state.settings.refundFeePct}">
        </div>
      </form>
      <div class="calc-out" aria-live="polite" data-calc-out>${pt(e)}</div>
    </div>
  </section>`}function Wt(){let e=new Date>=new Date(`${Ge}T00:00:00+09:00`);return`
  <section class="card rules-card" aria-labelledby="rules-title">
    <p class="eyebrow">${i("gavel","sm")}CUSTOMS COMPLIANCE</p>
    <h2 id="rules-title" class="section-title-lg">\u65E5\u672C\u514D\u7A05\u65B0\u5236\uFF1A2026/11/1 \u8D77\u6539\u70BA\u300C\u51FA\u5883\u5F8C\u9000\u7A05\u300D</h2>
    <p class="muted">${e?"\u65B0\u5236\u5DF2\u4E0A\u8DEF\u3002":"\u65B0\u5236\u5373\u5C07\u4E0A\u8DEF\u3002"}\u672C\u9801\u7684\u8A08\u7B97\u65B9\u5F0F\u4F9D\u65B0\u5236\u8A2D\u8A08\uFF1A\u5E97\u982D\u5148\u4ED8\u542B\u7A05\u91D1\u984D\uFF0C\u51FA\u5883\u67E5\u9A57\u5F8C\u518D\u9000\u56DE\u6D88\u8CBB\u7A05\u3002</p>
    <ol class="rules-list">
      <li><strong>\u5E97\u982D\u5148\u4ED8\u542B\u7A05\u50F9</strong>\uFF1A\u5728\u514D\u7A05\u5E97\u8CFC\u7269\u6642\u7167\u5E38\u4ED8\u542B\u7A05\u91D1\u984D\uFF0C\u4E26\u4FDD\u7559\u6536\u64DA\u8207\u76F8\u95DC\u8CC7\u6599\u3002</li>
      <li><strong>\u9580\u6ABB</strong>\uFF1A\u540C\u4E00\u5929\u3001\u540C\u4E00\u5BB6\u5E97\uFF0C\u672A\u7A05\u5408\u8A08 ${u(I)} \u4EE5\u4E0A\u3002\u4E00\u822C\u54C1\u8207\u6D88\u8017\u54C1\u4E0D\u518D\u5206\u958B\u8A08\u7B97\u3002</li>
      <li><strong>\u8CFC\u8CB7\u5F8C 90 \u5929\u5167\u51FA\u5883\u67E5\u9A57</strong>\uFF1A\u5728\u6A5F\u5834<strong>\u8A17\u904B\u884C\u674E\u4E4B\u524D</strong>\uFF0C\u6301\u8B77\u7167\u8207\u5546\u54C1\u5230\u514D\u7A05\u624B\u7E8C\u6A5F\u53F0\u8FA6\u7406\uFF0C\u5FC5\u8981\u6642\u7531\u6D77\u95DC\u6AA2\u67E5\u5BE6\u54C1\u3002</li>
      <li><strong>\u5728\u65E5\u672C\u7528\u6389\u5C31\u4E0D\u80FD\u9000</strong>\uFF1A\u6D88\u8017\u54C1\u7684\u7279\u6B8A\u5BC6\u5C01\u5305\u88DD\u898F\u5B9A\u53D6\u6D88\uFF0C\u4F46\u82E5\u5728\u65E5\u672C\u5883\u5167\u4F7F\u7528\u6216\u98DF\u7528\uFF0C\u8A72\u7B46\u5C31\u4E0D\u80FD\u9000\u7A05\u3002</li>
      <li><strong>\u9000\u6B3E\u65B9\u5F0F\u8207\u624B\u7E8C\u8CBB</strong>\uFF1A\u7531\u514D\u7A05\u5E97\u6216\u5176\u59D4\u8A17\u7684\u9000\u7A05\u696D\u8005\u9000\u6B3E\uFF0C\u65B9\u5F0F\u8207\u624B\u7E8C\u8CBB\u4F9D\u5404\u5E97\u898F\u5B9A\u3002</li>
    </ol>
    <p class="source">\u8CC7\u6599\u4F86\u6E90\uFF1A<a href="https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html" target="_blank" rel="noopener">\u65E5\u672C\u89C0\u5149\u5EF3\u3008What is the Refund Method?\u3009<span class="sr-only">\uFF08\u53E6\u958B\u65B0\u8996\u7A97\uFF09</span></a></p>
  </section>`}function Vt(e,a){let t=a;e.innerHTML=`
    ${U({eyebrow:"AETHER CURRENCY VAULT \xB7 \u9810\u7B97\u30FB\u532F\u7387\u30FB\u514D\u7A05",title:"\u9810\u7B97\u30FB\u532F\u7387\u30FB\u514D\u7A05\u8A08\u7B97\u4E2D\u5FC3",sub:"\u5373\u6642\u63DB\u7B97\u53F0\u5E63\u3001\u638C\u63E1\u9810\u7B97\u9918\u984D\uFF0C\u4E26\u9810\u4F30\u6BCF\u5BB6\u5E97\u80FD\u9000\u591A\u5C11\u6D88\u8CBB\u7A05\u3002"})}
    <div class="budget-layout">
      <div class="col">
        <div data-region="rate">${ct(t)}</div>
        <div data-region="budget">${dt(t)}</div>
        ${Yt(t)}
      </div>
      <div class="col">
        <div data-region="refund">${ut(t)}</div>
        ${Wt()}
      </div>
    </div>`;let r=()=>{k("[data-calc-out]",e).innerHTML=pt(t.rate)};return e.addEventListener("click",async l=>{let s=l.target.closest("[data-sync]");if(!s)return;s.disabled=!0,s.setAttribute("aria-busy","true");let n=await Q({force:!0});n.ok?f({title:"\u532F\u7387\u5DF2\u66F4\u65B0",message:`1 JPY = ${x(n.rate,4)} TWD\uFF08${d(n.provider)}\uFF09`,tone:"muted",duration:3e3}):f({title:"\u66AB\u6642\u6293\u4E0D\u5230\u532F\u7387",message:"\u7DB2\u8DEF\u6216\u532F\u7387\u670D\u52D9\u7121\u56DE\u61C9\uFF0C\u53EF\u4EE5\u624B\u52D5\u8F38\u5165\u532F\u7387\u3002",tone:"error"});let o=k("[data-sync]",e);o&&(o.disabled=!1,o.removeAttribute("aria-busy"),o.focus())}),e.addEventListener("submit",l=>{l.preventDefault();let s=l.target;if(s.matches("[data-manual]")){let n=Number(s.querySelector("input").value);if(!(n>0&&n<5)){f({title:"\u532F\u7387\u683C\u5F0F\u4E0D\u5C0D",message:"\u8ACB\u8F38\u5165 0 \u5230 5 \u4E4B\u9593\u7684\u6578\u5B57\uFF0C\u4F8B\u5982 0.2150\u3002",tone:"error"});return}de(n),f({title:"\u5DF2\u6539\u7528\u624B\u52D5\u532F\u7387",message:`1 JPY = ${x(n,4)} TWD`,tone:"muted",duration:3e3})}else if(s.matches("[data-budget]")){let n=Number(s.querySelector("input").value);n>=0&&(p.updateSettings({budget:n}),f({title:"\u9810\u7B97\u5DF2\u66F4\u65B0",message:u(n),tone:"muted",duration:2500}))}else if(s.matches("[data-rebate]")){let n=Number(s.querySelector("input").value);n>=0&&(p.updateSettings({cardRebatePct:n}),f({title:"\u56DE\u994B\u7387\u5DF2\u66F4\u65B0",message:`${n}%`,tone:"muted",duration:2500}))}}),e.addEventListener("input",l=>{let s=l.target;if(s.id==="conv-yen"&&(be=Number(s.value)||0,k("[data-conv]",e).textContent=S(be,t.rate)),s.closest("[data-calc-form]")){let n=new FormData(s.form);N.price=Number(n.get("price"))||0,N.includesTax=n.get("includesTax")==="true",N.taxRate=Number(n.get("taxRate")),N.discountPct=Number(n.get("discountPct")),N.feePct=n.get("feePct")===""?null:Number(n.get("feePct")),r()}}),e.addEventListener("change",l=>{l.target.closest("[data-calc-form]")&&l.target.dispatchEvent(new Event("input",{bubbles:!0}))}),{update(l){t=l;for(let[s,n]of[["rate",ct],["budget",dt],["refund",ut]]){let o=k(`[data-region="${s}"]`,e);if(!o.contains(document.activeElement)||document.activeElement.tagName==="BUTTON"){let c=document.activeElement?.matches?.("[data-sync]")&&o.contains(document.activeElement)?"[data-sync]":null;o.innerHTML=n(t),c&&k(c,o)?.focus()}}r()}}}var Ce={};le(Ce,{mount:()=>aa});var Xt={checked:{title:"\u8A17\u904B\u884C\u674E\u7BB1",icon:"luggage",limitKey:"checkedLimit",baseKey:"checkedBase"},carry:{title:"\u96A8\u8EAB\u767B\u6A5F\u884C\u674E",icon:"backpack",limitKey:"carryLimit",baseKey:"carryBase"}};function Qt(e,a,t){let r=[],l=e.filter(c=>c.luggage==="carry"&&c.liquid),s=e.filter(c=>c.luggage==="checked"&&c.battery),n=e.filter(c=>c.luggage==="checked"&&c.fragile),o=(c,g,b,v)=>{g>v?r.push({tone:"danger",icon:"error",title:`${c}\u76EE\u524D\u5DF2\u8D85\u91CD`,text:`\u5DF2\u5165\u624B\u7684\u5546\u54C1\u52A0\u4E0A\u57FA\u672C\u91CD\u91CF\u70BA ${E(g)}\uFF0C\u8D85\u904E\u9650\u91CD ${E(g-v)}\u3002\u53EF\u6539\u653E\u96A8\u8EAB\u3001\u52A0\u8CFC\u884C\u674E\u984D\u5EA6\u6216\u5BC4\u9001\u3002`}):b>v&&r.push({tone:"warn",icon:"warning",title:`${c}\u5168\u90E8\u8CB7\u5B8C\u6703\u8D85\u91CD`,text:`\u76EE\u524D ${E(g)}\uFF0C\u6E05\u55AE\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30 ${E(b)}\uFF0C\u6703\u8D85\u904E\u9650\u91CD ${E(b-v)}\u3002`})};return o("\u8A17\u904B\u884C\u674E",a.totalCheckedNow,a.totalChecked,t.checkedLimit),o("\u96A8\u8EAB\u884C\u674E",a.totalCarryNow,a.totalCarry,t.carryLimit),s.length&&r.push({tone:"danger",icon:"battery_alert",title:"\u542B\u92F0\u96FB\u6C60\u7684\u5546\u54C1\u653E\u5728\u8A17\u904B",text:`${s.map(c=>`\u300C${d(c.name)}\u300D`).join("\u3001")}\uFF1A\u884C\u52D5\u96FB\u6E90\u8207\u5099\u7528\u92F0\u96FB\u6C60\u5FC5\u9808\u96A8\u8EAB\u651C\u5E36\uFF1B\u5167\u5EFA\u96FB\u6C60\u7684\u96FB\u5668\u8ACB\u4F9D\u822A\u7A7A\u516C\u53F8\u898F\u5B9A\u3002`}),l.length&&r.push({tone:"warn",icon:"water_drop",title:"\u96A8\u8EAB\u884C\u674E\u6709\u6DB2\u9AD4",text:`${l.map(c=>`\u300C${d(c.name)}\u300D`).join("\u3001")}\uFF1A\u5B89\u6AA2\u524D\u8CFC\u8CB7\u7684\u6DB2\u9AD4\uFF0C\u55AE\u74F6\u901A\u5E38\u9700\u5728 100ml \u4EE5\u4E0B\uFF1B\u51FA\u5883\u7BA1\u5236\u5340\u5167\u8CFC\u8CB7\u7684\u53E6\u4F9D\u898F\u5B9A\u5C01\u88DD\u3002`}),n.length&&r.push({tone:"info",icon:"wine_bar",title:"\u8A17\u904B\u7BB1\u6709\u6613\u788E\u54C1",text:`${n.length} \u4EF6\u6613\u788E\u54C1\uFF0C\u5EFA\u8B70\u7528\u6C23\u6CE1\u888B\u5305\u597D\uFF0C\u653E\u5728\u884C\u674E\u7BB1\u4E2D\u592E\u3001\u56DB\u5468\u7528\u8863\u7269\u586B\u6EFF\u3002`}),r}function gt(e,a,t,r){let l=Xt[e],s=a.filter($=>$.luggage===e),n=s.reduce(($,m)=>$+m.weightKg*m.qty,0),o=s.filter($=>$.purchased).reduce(($,m)=>$+m.weightKg*m.qty,0),c=r[l.baseKey],g=r[l.limitKey],b=c+n,v=c+o,P=b>g,A=v>g;return`
  <section class="card bag-card ${P?"is-over":""}" aria-labelledby="bag-${e}">
    <header class="card-head">
      <div class="bag-title">
        <span class="kpi-icon">${i(l.icon)}</span>
        <div><h2 id="bag-${e}" class="section-title-lg">${l.title}</h2>
        <p class="muted small">\u9650\u91CD ${E(g)} \xB7 \u57FA\u672C\u91CD\u91CF ${E(c)}</p></div>
      </div>
      <p class="bag-left ${A?"text-danger":""}"><small>${A?"\u76EE\u524D\u8D85\u91CD":"\u76EE\u524D\u5269\u9918"}</small><strong>${A?"+":""}${x(Math.abs(g-v),2)} kg</strong></p>
    </header>
    <div class="weight-bar">
      <div class="dual-stat">
        <div class="is-now"><span class="k">\u76EE\u524D\u5BE6\u969B\uFF08\u5DF2\u5165\u624B\uFF09</span><span class="v">${E(v)}</span><span class="s">\u6230\u5229\u54C1 ${E(o)}</span></div>
        <div><span class="k">\u5168\u90E8\u8CB7\u5B8C\u9810\u4F30</span><span class="v ${P?"text-danger":""}">${E(b)}</span><span class="s">${P?`\u8D85\u91CD ${E(b-g)}`:`\u5269 ${E(g-b)}`}</span></div>
      </div>
      ${ee([{value:c,tone:"base"},{value:o,tone:"paid"},{value:n-o,tone:"later"}],g,`${l.title}\u9650\u91CD ${x(g,1)} \u516C\u65A4\uFF1A\u57FA\u672C ${x(c,1)}\u3001\u5DF2\u5165\u624B ${x(o,2)}\u3001\u5F85\u8CB7 ${x(n-o,2)}`)}
      <p class="legend-inline small"><span><i class="dot dot-slate"></i>\u57FA\u672C\u91CD\u91CF</span><span><i class="dot dot-gold"></i>\u5DF2\u5165\u624B</span><span><i class="dot dot-later"></i>\u5F85\u8CB7</span></p>
    </div>
    ${s.length?`<ul class="pack-list">
      ${s.map($=>`
        <li class="pack-item ${$.packed?"is-packed":""}" data-id="${$.id}">
          <button type="button" class="check ${$.packed?"on":""}" data-l="pack" role="checkbox" aria-checked="${$.packed}" aria-label="\u5DF2\u88DD\u7BB1\uFF1A${d($.name)}">${i("check")}</button>
          <div class="pack-main">
            <button type="button" class="pack-name" data-l="open">${d($.name)}${$.qty>1?` <small>\xD7 ${$.qty}</small>`:""}</button>
            <p class="pack-meta">
              <span>${i(K($.category).icon,"sm")}${$.weightKg?E($.weightKg*$.qty):'<span class="text-warn">\u672A\u586B\u91CD\u91CF</span>'}</span>
              ${$.purchased?"":'<span class="badge badge-muted">\u5F85\u8CFC</span>'}
              ${$.fragile?`<span class="badge badge-warn">${i("wine_bar","sm")}\u6613\u788E</span>`:""}
              ${$.liquid?`<span class="badge badge-cyan">${i("water_drop","sm")}\u6DB2\u9AD4</span>`:""}
              ${$.battery?`<span class="badge badge-danger">${i("battery_alert","sm")}\u92F0\u96FB\u6C60</span>`:""}
            </p>
          </div>
          <button type="button" class="btn btn-ghost btn-xs" data-l="move" aria-label="\u628A ${d($.name)} \u6539\u653E${e==="checked"?"\u96A8\u8EAB":"\u8A17\u904B"}">${i("swap_horiz","sm")}\u6539\u653E${e==="checked"?"\u96A8\u8EAB":"\u8A17\u904B"}</button>
        </li>`).join("")}
    </ul>`:`<p class="muted pad">\u9084\u6C92\u6709\u6307\u6D3E\u5230${l.title}\u7684\u5546\u54C1\u3002</p>`}
  </section>`}function Zt(e){let a=e.filter(t=>t.done).length;return`
  <section class="card packing-card" aria-labelledby="packing-title">
    <header class="card-head">
      <h2 id="packing-title" class="section-title">${i("checklist","sm")}\u6253\u5305\u88DD\u5099\u6E05\u55AE</h2>
      <span class="badge badge-muted">${a} / ${e.length} \u5099\u59A5</span>
    </header>
    <ul class="todo-list">
      ${e.map((t,r)=>`
        <li class="todo ${t.done?"is-done":""}">
          <label><input type="checkbox" data-p="toggle" data-idx="${r}" ${t.done?"checked":""}><span>${d(t.text)}</span></label>
          <button type="button" class="icon-btn icon-btn-sm" data-p="remove" data-idx="${r}" aria-label="\u79FB\u9664\u300C${d(t.text)}\u300D">${i("close","sm")}</button>
        </li>`).join("")}
    </ul>
    <form class="todo-add" data-p-add>
      <label for="todo-input" class="sr-only">\u65B0\u589E\u6253\u5305\u9805\u76EE</label>
      <input id="todo-input" placeholder="\u65B0\u589E\u9805\u76EE\uFF0C\u4F8B\u5982\uFF1A\u8F49\u63A5\u982D" maxlength="40" autocomplete="off">
      <button type="submit" class="btn btn-slate btn-sm">${i("add","sm")}\u65B0\u589E</button>
    </form>
  </section>`}function ea(){return`
  <section class="card dark-card" aria-labelledby="lug-rules">
    <p class="eyebrow eyebrow-light">${i("gavel","sm")}DEPARTURE CHECKLIST</p>
    <h2 id="lug-rules" class="section-title-lg">\u51FA\u5883\u524D\u7684\u884C\u674E\u63D0\u9192</h2>
    <ul class="rule-cards">
      <li class="rule danger"><span class="rule-icon">${i("priority_high")}</span>
        <div><strong>\u514D\u7A05\u5546\u54C1\u5148\u67E5\u9A57\u3001\u518D\u8A17\u904B</strong><p>2026/11/1 \u8D77\u7684\u9000\u7A05\u65B0\u5236\uFF0C\u9700\u5728<strong>\u8A17\u904B\u884C\u674E\u4E4B\u524D</strong>\u6301\u8B77\u7167\u8207\u514D\u7A05\u5546\u54C1\u5230\u6A5F\u53F0\u8FA6\u7406\u67E5\u9A57\u3002\u6253\u5305\u6642\u628A\u514D\u7A05\u5546\u54C1\u653E\u5728\u597D\u62FF\u51FA\u7684\u4F4D\u7F6E\u3002</p></div></li>
      <li class="rule warn"><span class="rule-icon">${i("water_drop")}</span>
        <div><strong>\u6DB2\u9AD4\u8207\u92F0\u96FB\u6C60</strong><p>\u96A8\u8EAB\u6DB2\u9AD4\u55AE\u74F6\u901A\u5E38\u9650 100ml \u4EE5\u4E0B\uFF1B\u884C\u52D5\u96FB\u6E90\u8207\u5099\u7528\u92F0\u96FB\u6C60\u53EA\u80FD\u96A8\u8EAB\u3002\u5BE6\u969B\u9650\u5236\u4EE5\u822A\u7A7A\u516C\u53F8\u8207\u6A5F\u5834\u516C\u544A\u70BA\u6E96\u3002</p></div></li>
      <li class="rule ok"><span class="rule-icon">${i("check")}</span>
        <div><strong>\u91CD\u7269\u653E\u5E95\u5C64\u3001\u6613\u788E\u653E\u4E2D\u592E</strong><p>\u9152\u985E\u3001\u74F6\u88DD\u4FDD\u990A\u54C1\u5305\u597D\u653E\u9760\u8FD1\u8F2A\u5B50\u7684\u5E95\u90E8\uFF1B\u6613\u788E\u54C1\u653E\u4E2D\u592E\uFF0C\u56DB\u5468\u7528\u8863\u7269\u7DE9\u885D\u3002</p></div></li>
    </ul>
  </section>`}function ta(e){return`
  <section class="card flight-card" aria-labelledby="flight-title">
    <h2 id="flight-title" class="section-title">${i("flight_takeoff","sm")}\u822A\u73ED\u8207\u884C\u674E\u984D\u5EA6</h2>
    <form class="flight-form" data-flight>
      <div class="field span2">
        <label for="fl-note">\u822A\u73ED\u5099\u8A3B</label>
        <input id="fl-note" name="flightNote" value="${d(e.flightNote)}" placeholder="\u4F8B\u5982\uFF1ABR197 \u6210\u7530 \u2192 \u6843\u5712 11/20 14:30" maxlength="60">
      </div>
      <div class="field"><label for="fl-cl">\u8A17\u904B\u9650\u91CD kg</label><input id="fl-cl" name="checkedLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${e.checkedLimit}"></div>
      <div class="field"><label for="fl-cb">\u8A17\u904B\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-cb" name="checkedBase" type="number" inputmode="decimal" min="0" step="0.1" value="${e.checkedBase}"></div>
      <div class="field"><label for="fl-pl">\u96A8\u8EAB\u9650\u91CD kg</label><input id="fl-pl" name="carryLimit" type="number" inputmode="decimal" min="0" step="0.5" value="${e.carryLimit}"></div>
      <div class="field"><label for="fl-pb">\u96A8\u8EAB\u57FA\u672C\u91CD\u91CF kg</label><input id="fl-pb" name="carryBase" type="number" inputmode="decimal" min="0" step="0.1" value="${e.carryBase}"></div>
      <button type="submit" class="btn btn-slate span2">${i("save","sm")}\u5132\u5B58\u884C\u674E\u8A2D\u5B9A</button>
    </form>
    <p class="hint">\u9650\u91CD\u4F9D\u4F60\u7684\u822A\u7A7A\u516C\u53F8\u8207\u8259\u7B49\u586B\u5BEB\uFF1B\u57FA\u672C\u91CD\u91CF\u662F\u884C\u674E\u7BB1\u672C\u8EAB\u52A0\u8863\u7269\u7B49\u3002</p>
  </section>`}function mt(e,a,t,r,l,s,n,o,c=""){return j({label:e,icon:a,value:x(t,2),unit:` / ${o} kg`,tone:c,bar:ee([{value:l,tone:"base"},{value:s,tone:"paid"},{value:n-s,tone:"later"}],o,`${e}\uFF1A\u76EE\u524D ${x(t,1)} \u516C\u65A4\uFF0C\u5168\u90E8\u8CB7\u5B8C ${x(r,1)} \u516C\u65A4\uFF0C\u9650\u91CD ${o}`),foot:`<span>\u5168\u90E8\u8CB7\u5B8C ${E(r)}</span><span>${t>o?'<b class="text-danger">\u76EE\u524D\u8D85\u91CD</b>':r>o?'<b class="text-warn">\u8CB7\u5B8C\u6703\u8D85\u91CD</b>':`\u8CB7\u5B8C\u5269 ${E(o-r)}`}</span>`})}function bt(e){let{state:a,sum:t}=e,{settings:r,items:l}=a,s=Qt(l,t,r),n=t.packableCount?t.packedCount/t.packableCount:0;return`
  <div class="kpi-grid">
    ${mt("\u8A17\u904B\uFF08\u76EE\u524D\uFF09","luggage",t.totalCheckedNow,t.totalChecked,r.checkedBase,t.weightCheckedNow,t.weightChecked,r.checkedLimit)}
    ${mt("\u96A8\u8EAB\uFF08\u76EE\u524D\uFF09","backpack",t.totalCarryNow,t.totalCarry,r.carryBase,t.weightCarryNow,t.weightCarry,r.carryLimit,"kpi-cyan")}
    ${j({label:"\u6230\u5229\u54C1\u5165\u7BB1",icon:"inventory_2",value:t.packedCount,unit:` / ${t.packableCount} \u4EF6`,bar:M(n,{label:"\u5165\u7BB1\u9032\u5EA6",tone:"slate"}),foot:`<span>${t.packableCount-t.packedCount} \u4EF6\u5F85\u88DD\u7BB1</span>`})}
    ${j({label:"\u822A\u73ED",icon:"flight",value:r.flightNote?`<span class="kpi-text">${d(r.flightNote)}</span>`:'<span class="kpi-text muted">\u5C1A\u672A\u586B\u5BEB</span>',foot:"<span>\u53EF\u5728\u53F3\u5074\u300C\u822A\u73ED\u8207\u884C\u674E\u984D\u5EA6\u300D\u4FEE\u6539</span>"})}
  </div>
  ${s.length?`<div class="warn-list" role="region" aria-label="\u884C\u674E\u63D0\u9192">${s.map(o=>`
    <div class="notice notice-${o.tone}">${i(o.icon)}<p><strong>${o.title}</strong>\u3000${o.text}</p></div>`).join("")}</div>`:""}
  ${l.length?"":te({title:"\u884C\u674E\u7BB1\u9084\u662F\u7A7A\u7684",text:"\u65B0\u589E\u5546\u54C1\u6642\u586B\u5BEB\u91CD\u91CF\u8207\u300C\u653E\u5728\u54EA\u88E1\u300D\uFF0C\u9019\u88E1\u5C31\u6703\u5E6B\u4F60\u7B97\u7E3D\u91CD\u91CF\u8207\u6253\u5305\u9032\u5EA6\u3002",actions:`<a class="btn btn-gold" href="#/list">${i("temple_buddhist")}\u524D\u5F80\u6E05\u55AE</a>`})}
  <div class="luggage-layout">
    <div class="col">
      ${l.length?gt("checked",l,t,r)+gt("carry",l,t,r):""}
      ${Zt(a.packing)}
    </div>
    <div class="col">
      ${ta(r)}
      ${ea()}
    </div>
  </div>`}function aa(e,a){let t=a;e.innerHTML=`
    ${U({eyebrow:"SACRED LOGISTICS \xB7 \u884C\u674E\u8207\u6253\u5305",title:"\u884C\u674E\u6253\u5305\u8207\u8A17\u904B\u914D\u984D",sub:"\u770B\u6E05\u6BCF\u500B\u884C\u674E\u7BB1\u88DD\u4E86\u591A\u5C11\u6230\u5229\u54C1\u3001\u9084\u5269\u591A\u5C11\u984D\u5EA6\uFF0C\u51FA\u767C\u524D\u4E0D\u518D\u624B\u5FD9\u8173\u4E82\u3002"})}
    <div data-region="main">${bt(t)}</div>`;let r=k('[data-region="main"]',e),l=s=>{let n=window.scrollY;r.innerHTML=bt(t),window.scrollTo({top:n}),s&&k(s,r)?.focus({preventScroll:!0})};return e.addEventListener("click",s=>{let n=s.target.closest('[data-l], [data-p="remove"]');if(!n)return;if(n.dataset.p==="remove"){let g=[...p.state.packing],[b]=g.splice(Number(n.dataset.idx),1);p.setPacking(g),k("#todo-input",e)?.focus(),f({title:"\u5DF2\u79FB\u9664",message:d(b.text),tone:"muted",duration:2500});return}let o=n.closest("[data-id]")?.dataset.id,c=p.getItem(o);if(c&&(n.dataset.l==="pack"&&p.updateItem(o,{packed:!c.packed}),n.dataset.l==="open"&&ge(o),n.dataset.l==="move")){let g=c.luggage==="checked"?"carry":"checked";p.updateItem(o,{luggage:g}),f({title:`\u5DF2\u6539\u653E${g==="carry"?"\u96A8\u8EAB":"\u8A17\u904B"}`,message:d(c.name),tone:"muted",duration:2500})}}),e.addEventListener("change",s=>{if(s.target.dataset.p==="toggle"){let n=Number(s.target.dataset.idx);p.setPacking(p.state.packing.map((o,c)=>c===n?{...o,done:s.target.checked}:o))}}),e.addEventListener("submit",s=>{s.preventDefault();let n=s.target;if(n.matches("[data-p-add]")){let c=n.querySelector("input").value.trim();if(!c)return;p.setPacking([...p.state.packing,{text:c,done:!1}]),k("#todo-input",e)?.focus()}if(n.matches("[data-flight]")){let o=n.elements,c=(b,v)=>b.value===""||Number.isNaN(Number(b.value))?v:Math.max(0,Number(b.value)),g=p.state.settings;p.updateSettings({flightNote:o.flightNote.value.trim(),checkedLimit:c(o.checkedLimit,g.checkedLimit),checkedBase:c(o.checkedBase,g.checkedBase),carryLimit:c(o.carryLimit,g.carryLimit),carryBase:c(o.carryBase,g.carryBase)}),f({title:"\u884C\u674E\u8A2D\u5B9A\u5DF2\u5132\u5B58",tone:"muted",duration:2500})}}),{update(s){t=s;let n=document.activeElement;if(n?.closest?.("[data-flight]")&&n.tagName!=="BUTTON")return;let o=null;n?.dataset?.l?o=`[data-id="${n.closest("[data-id]")?.dataset.id}"] [data-l="${n.dataset.l}"]`:n?.dataset?.p==="toggle"?o=`[data-p="toggle"][data-idx="${n.dataset.idx}"]`:n?.id==="todo-input"?o="#todo-input":n?.closest?.("[data-flight]")&&(o='[data-flight] button[type="submit"]'),l(o)}}}var Ne={list:{view:Te,title:"\u8CFC\u7269\u8056\u5EAB"},areas:{view:qe,title:"\u8CFC\u8CB7\u5730\u5340"},budget:{view:Ie,title:"\u9810\u7B97\u532F\u7387"},luggage:{view:Ce,title:"\u884C\u7A0B\u884C\u674E"}},Pe=null;function sa(){let e=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0];return Ne[e]?e:"list"}function je(){let e=p.state;return{state:e,sum:He(e),rate:e.settings.rate}}function ft({focus:e=!0}={}){let a=sa();Pe?.instance?.destroy?.();let t=document.createElement("div");t.id="view",t.className="view",k("#view").replaceWith(t);let r=Ne[a].view.mount(t,je());Pe={name:a,instance:r},document.title=`${Ne[a].title}\uFF5CShopping Relics \u65E5\u672C\u8CFC\u7269\u6E05\u55AE`,se("[data-route]").forEach(l=>{l.dataset.route===a?l.setAttribute("aria-current","page"):l.removeAttribute("aria-current")}),e&&(window.scrollTo({top:0}),t.querySelector("h1")?.setAttribute("tabindex","-1"),t.querySelector("h1")?.focus({preventScroll:!0}))}function ht(){let{state:e,sum:a}=je(),t=k("#hdr-rate");t.querySelector(".chip-v-full").textContent=`1 JPY = ${x(e.settings.rate,4)} TWD`,t.querySelector(".chip-v-short").textContent=`\xA51,000 \u2248 NT$${x(e.settings.rate*1e3)}`,t.setAttribute("aria-label",`\u76EE\u524D\u532F\u7387 1 \u65E5\u5713\u7B49\u65BC ${x(e.settings.rate,4)} \u53F0\u5E63\uFF0C\u524D\u5F80\u9810\u7B97\u532F\u7387\u9801`),k("#hdr-total .chip-v").innerHTML=`${u(a.pay)} <small>/ ${a.count} \u4EF6</small>`}p.subscribe(()=>{ht(),Pe?.instance?.update?.(je())});window.addEventListener("hashchange",()=>ft());k("#fab-add").addEventListener("click",()=>D());k("#btn-settings").addEventListener("click",()=>et());k("#btn-theme").addEventListener("click",()=>{let e=Qe();f({title:`\u5916\u89C0\uFF1A${e.label}`,message:e.id==="auto"?"\u6703\u4F9D\u7167\u88DD\u7F6E\u7684\u6DF1\u6DFA\u8272\u8A2D\u5B9A\u81EA\u52D5\u5207\u63DB\u3002":"",tone:"muted",duration:2e3})});Ze();tt();document.addEventListener("app:add",e=>D(null,e.detail));window.addEventListener("store:quota",()=>{f({title:"\u5132\u5B58\u7A7A\u9593\u4E0D\u8DB3",message:"\u700F\u89BD\u5668\u5BB9\u91CF\u5DF2\u6EFF\uFF0C\u8ACB\u79FB\u9664\u90E8\u5206\u5546\u54C1\u7167\u7247\u5F8C\u518D\u8A66\u3002",tone:"error",duration:8e3})});ht();ft({focus:!1});Q().then(e=>{e.ok===!1&&console.info("\u532F\u7387\u66AB\u6642\u7121\u6CD5\u66F4\u65B0\uFF0C\u6CBF\u7528\u4E0A\u6B21\u6578\u503C")});})();
