let restaurants = JSON.parse(localStorage.getItem('Camelot_Final_V16')) || [
    {id: 1, name: "白銀大教堂", region: "東京", address: "銀座 1-2-3", image: "", url: "https://example.com", map: "", notes: "典雅聖地。"},
    {id: 2, name: "獅子王秘境", region: "台北", address: "信義區 101", image: "", url: "", map: "", notes: "威嚴美味。"},
    {id: 3, name: "湖中仙女亭", region: "京都", address: "清水寺旁", image: "", url: "", map: "", notes: "甜點一絕。"}
];

let currentEditId = null;

const listEl = document.getElementById('list');
if (listEl) {
    Sortable.create(listEl, {
        delay: 500, delayOnTouchOnly: true, animation: 250,
        onEnd: function() {
            const newIds = Array.from(listEl.querySelectorAll('.card')).map(el => parseInt(el.dataset.id));
            restaurants = newIds.map(id => restaurants.find(r => r.id === id));
            saveToLocal();
            renderList();
        }
    });
}

function saveToLocal() { localStorage.setItem('Camelot_Final_V16', JSON.stringify(restaurants)); }

// --- [關鍵] 渲染清單，注入動畫延遲 ---
function renderList() {
    if (!listEl) return;
    
    // 設定階梯式延遲 (0.15s)
    // 這會同時影響 CSS 中的 cardEntrance 與 shinePass
    listEl.innerHTML = restaurants.map((res, index) => `
        <div class="card" 
             data-id="${res.id}" 
             onclick="handleCardClick(${res.id})"
             style="animation-delay: ${index * 0.15}s;">
            <div class="actions">
                <button class="icon-btn" onclick="event.stopPropagation(); prepareEdit(${res.id})">✏️</button>
                <button class="icon-btn" onclick="event.stopPropagation(); askDelete(${res.id})">🗑️</button>
            </div>
            <div>
                <h3>${res.name}</h3>
                <div class="region-tag">${res.region}</div>
            </div>
        </div>
    `).join('');
    
    saveToLocal();
}

// ...其餘邏輯 (toggleMenu, openDetailsModal, saveData, export/import 等) 與前版本相同...
// 請確保調用 renderList() 初始化介面

function toggleMenu() { const w = document.querySelector('.fab-wrapper'); w.classList.toggle('active'); }
function toggleEditMode() { document.body.classList.toggle('edit-mode'); toggleMenu(); }
function handleCardClick(id) { if (!document.body.classList.contains('edit-mode')) openDetailsModal(id); }

function openDetailsModal(id) {
    const res = restaurants.find(r => r.id === id);
    if (!res) return;
    const imgContainer = document.getElementById('detailsImageContainer');
    const viewImg = document.getElementById('viewImage');
    if (res.image && res.image.trim() !== "") { viewImg.src = res.image; imgContainer.style.display = "block"; } else { imgContainer.style.display = "none"; }
    document.getElementById('viewName').innerText = res.name;
    document.getElementById('viewRegion').innerText = res.region || "---";
    document.getElementById('viewAddress').innerText = res.address || "---";
    document.getElementById('viewUrl').innerText = res.url || "---";
    document.getElementById('viewNotes').innerText = res.notes || "無內容。";
    document.getElementById('viewMapLink').href = res.map || `https://www.google.com/maps/search/${encodeURIComponent(res.name + ' ' + res.address)}`;
    const webLink = document.getElementById('viewWebLink');
    if (res.url && res.url.startsWith('http')) { webLink.href = res.url; webLink.style.display = "flex"; } else { webLink.style.display = "none"; }
    document.getElementById('detailsModal').style.display = 'flex';
}

function closeDetailsModal() { document.getElementById('detailsModal').style.display = 'none'; }
function openFormModal() { currentEditId = null; clearForm(); document.getElementById('detailsModal').style.display = 'none'; document.getElementById('formModal').style.display = 'flex'; toggleMenu(); }
function closeFormModal() { document.getElementById('formModal').style.display = 'none'; }

function prepareEdit(id) {
    const res = restaurants.find(r => r.id === id);
    currentEditId = id;
    document.getElementById('resName').value = res.name;
    document.getElementById('resRegion').value = res.region;
    document.getElementById('resAddress').value = res.address;
    document.getElementById('resImage').value = res.image || "";
    document.getElementById('resUrl').value = res.url || "";
    document.getElementById('resMap').value = res.map || "";
    document.getElementById('resNotes').value = res.notes;
    document.getElementById('formModal').style.display = 'flex';
}

function saveData() {
    const name = document.getElementById('resName').value.trim();
    if (!name) return alert("名稱不可為空");
    const data = { name, region: document.getElementById('resRegion').value, address: document.getElementById('resAddress').value, image: document.getElementById('resImage').value.trim(), url: document.getElementById('resUrl').value, map: document.getElementById('resMap').value, notes: document.getElementById('resNotes').value };
    if (currentEditId) { const idx = restaurants.findIndex(r => r.id === currentEditId); restaurants[idx] = { ...data, id: currentEditId }; }
    else { restaurants.push({ ...data, id: Date.now() }); }
    closeFormModal(); renderList();
}

function exportData() {
    const dataStr = JSON.stringify(restaurants, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const link = document.createElement('a'); link.setAttribute('href', dataUri); link.setAttribute('download', 'camelot_food.json'); link.click();
    showToast("紀錄已導出"); toggleMenu();
}

function triggerImport() { document.getElementById('importFile').click(); }
function handleImport(e) {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        try { const d = JSON.parse(event.target.result); if (Array.isArray(d)) { restaurants = d; renderList(); showToast("紀錄已導入"); toggleMenu(); } }
        catch (err) { alert("讀取失敗"); }
    };
    reader.readAsText(file);
}

function askDelete(id) { if (confirm("確定刪除？")) { restaurants = restaurants.filter(r => r.id !== id); renderList(); } }
function copyToClipboard(id) { const t = document.getElementById(id).innerText; navigator.clipboard.writeText(t).then(() => showToast("已複製")); }
function showToast(m) { const t = document.getElementById('toast'); t.innerText = m; t.style.opacity = '1'; setTimeout(() => t.style.opacity = '0', 1500); }
function clearForm() { ["resName", "resRegion", "resAddress", "resImage", "resUrl", "resMap", "resNotes"].forEach(id => document.getElementById(id).value = ""); }

renderList();