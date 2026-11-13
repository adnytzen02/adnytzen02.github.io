// 串夾：Threads 收藏分類整理
// 資料全部存在 localStorage，沒有伺服器。
(() => {
  'use strict';

  const STORAGE_KEY = 'threads-shelf:v1';
  const UNCATEGORIZED = '__none';
  const NEW_CATEGORY = '__new';

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? '' : v);
    }
    for (const c of [].concat(children)) if (c) node.append(c);
    return node;
  };
  const svgIcon = (paths) => {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('aria-hidden', 'true');
    s.innerHTML = paths; // 固定字串，非使用者輸入
    return s;
  };
  const ICONS = {
    open: '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13 7 4 4"/>',
    trash: '<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-12"/><path d="M9 7V4h6v3"/>',
  };

  const uid = () =>
    (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));

  /* ---------- 資料存取 ---------- */
  const emptyData = () => ({ version: 1, categories: [], items: [] });
  let storageOk = true;

  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyData();
      return sanitizeData(JSON.parse(raw)) || emptyData();
    } catch (e) {
      storageOk = false;
      return emptyData();
    }
  }

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      storageOk = true;
    } catch (e) {
      storageOk = false;
      showToast('無法儲存到瀏覽器（可能是無痕模式或空間不足），請先匯出備份');
    }
  }

  // 檢查並整理資料格式（也用於匯入）
  function sanitizeData(obj) {
    if (!obj || !Array.isArray(obj.items)) return null;
    const categories = (Array.isArray(obj.categories) ? obj.categories : [])
      .filter((c) => c && typeof c.name === 'string' && c.name.trim())
      .map((c) => ({ id: String(c.id || uid()), name: c.name.trim().slice(0, 20) }));
    const catIds = new Set(categories.map((c) => c.id));
    const items = obj.items
      .map((it) => {
        const parsed = it && parseThreadsUrl(String(it.url || ''));
        if (!parsed) return null;
        return {
          id: String(it.id || uid()),
          url: parsed.url,
          author: parsed.author,
          postId: parsed.postId,
          note: typeof it.note === 'string' ? it.note : '',
          categoryId: catIds.has(it.categoryId) ? it.categoryId : null,
          tags: Array.isArray(it.tags) ? normalizeTags(it.tags.join(',')) : [],
          createdAt: Number(it.createdAt) || Date.now(),
          updatedAt: Number(it.updatedAt) || Number(it.createdAt) || Date.now(),
        };
      })
      .filter(Boolean);
    return { version: 1, categories, items };
  }

  /* ---------- 網址與標籤解析 ---------- */
  const THREADS_RE = /https?:\/\/(?:www\.)?threads\.(?:net|com)\/[^\s<>"']*/i;

  // 從任意文字中找出 Threads 網址，整理成統一格式
  function parseThreadsUrl(input) {
    let text = (input || '').trim();
    if (!text) return null;
    if (!/^https?:\/\//i.test(text) && /^(www\.)?threads\.(net|com)\//i.test(text)) text = 'https://' + text;
    const match = text.match(THREADS_RE);
    if (!match) return null;
    let u;
    try { u = new URL(match[0]); } catch (e) { return null; }
    if (!/(^|\.)threads\.(net|com)$/i.test(u.hostname)) return null;

    const path = u.pathname.replace(/\/+$/, '');
    if (!path || path === '/') return null;
    const author = (path.match(/^\/@([^/]+)/) || [])[1] || '';
    const postId = (path.match(/\/(?:post|t)\/([^/]+)/) || [])[1] || '';
    return {
      url: 'https://www.threads.com' + path, // 去掉追蹤參數，統一網域
      author: decodeURIComponent(author),
      postId,
    };
  }

  const itemKey = (it) => (it.postId ? 'p:' + it.postId : 'u:' + it.url.toLowerCase());

  function normalizeTags(str) {
    const seen = new Set();
    return String(str || '')
      .split(/[,，、;；\s#]+/)
      .map((t) => t.trim().slice(0, 20))
      .filter((t) => t && !seen.has(t.toLowerCase()) && seen.add(t.toLowerCase()));
  }

  /* ---------- 狀態 ---------- */
  let data = loadData();
  const view = { cat: 'all', tag: null, q: '', sort: 'new' };
  let editingId = null;
  let pendingNewCatTarget = null; // 從哪個下拉選單觸發「新增分類」

  const catName = (id) => (data.categories.find((c) => c.id === id) || {}).name || '未分類';
  const findDuplicate = (parsed) => data.items.find((it) => itemKey(it) === itemKey(parsed));

  /* ---------- DOM ---------- */
  const addForm = $('.add-form');
  const urlInput = $('#f-url');
  const urlMsg = $('#f-url-msg');
  const noteInput = $('#f-note');
  const catSelect = $('#f-cat');
  const tagsInput = $('#f-tags');
  const catListEl = $('[data-cat-list]');
  const cardsEl = $('[data-cards]');
  const emptyEl = $('[data-empty]');
  const searchInput = $('#q');
  const sortSelect = $('#sort');
  const activeFiltersEl = $('[data-active-filters]');
  const resultCountEl = $('[data-result-count]');
  const totalEl = $('[data-total]');

  const editDialog = $('[data-edit-dialog]');
  const editForm = $('[data-edit-form]');
  const catDialog = $('[data-cat-dialog]');
  const catManageEl = $('[data-cat-manage]');
  const newCatForm = $('[data-new-cat-form]');
  const newCatInput = $('#new-cat');
  const catMsg = $('[data-cat-msg]');

  function setMsg(node, text, type = 'info') {
    node.textContent = text;
    node.className = 'field__msg' + (text ? ' is-' + type : '');
  }

  /* ---------- 繪製 ---------- */
  function renderSelects() {
    const build = (select, withNew) => {
      const current = select.value;
      select.replaceChildren(
        el('option', { value: UNCATEGORIZED, text: '未分類' }),
        ...data.categories.map((c) => el('option', { value: c.id, text: c.name })),
        withNew ? el('option', { value: NEW_CATEGORY, text: '＋ 新增分類…' }) : null
      );
      const exists = [...select.options].some((o) => o.value === current && current !== NEW_CATEGORY);
      select.value = exists ? current : UNCATEGORIZED;
    };
    build(catSelect, true);
    build($('#e-cat'), true);
  }

  function renderCats() {
    const counts = new Map();
    for (const it of data.items) {
      const k = it.categoryId || UNCATEGORIZED;
      counts.set(k, (counts.get(k) || 0) + 1);
    }
    const entries = [
      { id: 'all', name: '全部', count: data.items.length },
      ...data.categories.map((c) => ({ id: c.id, name: c.name, count: counts.get(c.id) || 0 })),
      { id: UNCATEGORIZED, name: '未分類', count: counts.get(UNCATEGORIZED) || 0 },
    ];
    catListEl.replaceChildren(
      ...entries.map((c) =>
        el('li', {}, el('button', {
          type: 'button',
          class: 'cat-btn',
          'aria-pressed': String(view.cat === c.id),
          onclick: () => { view.cat = c.id; renderAll(); },
        }, [el('span', { text: c.name }), el('span', { class: 'cat-btn__count', text: String(c.count) })]))
      )
    );
  }

  function filteredItems() {
    const q = view.q.trim().toLowerCase();
    const list = data.items.filter((it) => {
      if (view.cat === UNCATEGORIZED && it.categoryId) return false;
      if (view.cat !== 'all' && view.cat !== UNCATEGORIZED && it.categoryId !== view.cat) return false;
      if (view.tag && !it.tags.some((t) => t.toLowerCase() === view.tag.toLowerCase())) return false;
      if (q) {
        const hay = [it.note, it.author, it.url, catName(it.categoryId), ...it.tags].join(' ').toLowerCase();
        if (!q.split(/\s+/).every((w) => hay.includes(w))) return false;
      }
      return true;
    });
    const by = {
      new: (a, b) => b.createdAt - a.createdAt,
      old: (a, b) => a.createdAt - b.createdAt,
      author: (a, b) => (a.author || '~').localeCompare(b.author || '~') || b.createdAt - a.createdAt,
    }[view.sort];
    return list.sort(by);
  }

  // 依作者名稱產生固定的柔和底色
  function avatarColor(name) {
    let h = 0;
    for (const ch of name) h = (h * 31 + ch.codePointAt(0)) % 360;
    return `hsl(${h} 70% 82%)`;
  }

  const dateFmt = new Intl.DateTimeFormat('zh-TW', { year: 'numeric', month: 'numeric', day: 'numeric' });

  function renderCard(it) {
    const authorLabel = it.author ? '@' + it.author : 'Threads 貼文';
    const avatar = el('span', { class: 'avatar', 'aria-hidden': 'true', text: (it.author || 'T').slice(0, 1) });
    avatar.style.background = avatarColor(it.author || 'threads');
    avatar.style.color = '#1d1b18';

    const tags = it.tags.length
      ? el('ul', { class: 'tags', 'aria-label': '標籤' },
          it.tags.map((t) => el('li', {}, el('button', {
            type: 'button', class: 'tag', text: '#' + t,
            'aria-label': `只看標籤 ${t}`,
            onclick: () => { view.tag = t; renderAll(); },
          }))))
      : null;

    return el('li', { class: 'card', 'data-id': it.id }, [
      el('div', { class: 'card__head' }, [
        el('div', { class: 'card__author' }, [avatar, el('span', { text: authorLabel })]),
        el('span', { class: 'card__cat', text: catName(it.categoryId) }),
      ]),
      el('p', {
        class: 'card__note' + (it.note ? '' : ' card__note--empty'),
        text: it.note || '沒有筆記',
      }),
      tags,
      el('p', { class: 'card__url', text: it.url.replace('https://www.', '') }),
      el('div', { class: 'card__foot' }, [
        el('time', { class: 'card__date', datetime: new Date(it.createdAt).toISOString(), text: dateFmt.format(it.createdAt) }),
        el('div', { class: 'card__actions' }, [
          el('a', {
            class: 'icon-btn', href: it.url, target: '_blank', rel: 'noopener noreferrer',
            'aria-label': `在 Threads 開啟 ${authorLabel} 的貼文`, title: '在 Threads 開啟',
          }, svgIcon(ICONS.open)),
          el('button', {
            type: 'button', class: 'icon-btn', 'aria-label': '複製網址', title: '複製網址',
            onclick: () => copyUrl(it.url),
          }, svgIcon(ICONS.copy)),
          el('button', {
            type: 'button', class: 'icon-btn', 'aria-label': '編輯', title: '編輯',
            onclick: () => openEdit(it.id),
          }, svgIcon(ICONS.edit)),
          el('button', {
            type: 'button', class: 'icon-btn icon-btn--danger', 'aria-label': '刪除', title: '刪除',
            onclick: () => removeItem(it.id),
          }, svgIcon(ICONS.trash)),
        ]),
      ]),
    ]);
  }

  function renderActiveFilters() {
    const chips = [];
    const chip = (label, clear) => el('button', {
      type: 'button', class: 'filter-chip', 'aria-label': `移除篩選：${label}`,
      onclick: () => { clear(); renderAll(); },
    }, [el('span', { text: label }), el('span', { 'aria-hidden': 'true', text: '×' })]);

    if (view.cat !== 'all') chips.push(chip('分類：' + (view.cat === UNCATEGORIZED ? '未分類' : catName(view.cat)), () => { view.cat = 'all'; }));
    if (view.tag) chips.push(chip('#' + view.tag, () => { view.tag = null; }));
    if (view.q.trim()) chips.push(chip('搜尋：' + view.q.trim(), () => { view.q = ''; searchInput.value = ''; }));
    activeFiltersEl.replaceChildren(...chips);
    activeFiltersEl.hidden = chips.length === 0;
  }

  function renderList() {
    const list = filteredItems();
    cardsEl.replaceChildren(...list.map(renderCard));
    const filtering = view.cat !== 'all' || view.tag || view.q.trim();
    resultCountEl.textContent = filtering && data.items.length ? `找到 ${list.length} 則` : '';

    emptyEl.hidden = list.length > 0;
    if (!list.length) {
      const none = data.items.length === 0;
      $('[data-empty-title]').textContent = none ? '還沒有任何收藏' : '找不到符合的收藏';
      $('[data-empty-text]').textContent = none
        ? '在 Threads 貼文按「分享」→「複製連結」，貼到「新增收藏」的網址欄，再選個分類就好。'
        : '換個關鍵字，或點上方的篩選條件把它移除。';
    }
    totalEl.textContent = String(data.items.length);
  }

  function renderAll() {
    renderCats();
    renderSelects();
    renderActiveFilters();
    renderList();
  }

  /* ---------- 提示訊息（含復原） ---------- */
  const toast = $('[data-toast]');
  const toastText = $('[data-toast-text]');
  const toastAction = $('[data-toast-action]');
  let toastTimer = null;
  let toastUndo = null;

  function showToast(text, undo) {
    clearTimeout(toastTimer);
    toastText.textContent = text;
    toastUndo = undo || null;
    toastAction.hidden = !undo;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; toastUndo = null; }, undo ? 7000 : 3500);
  }
  toastAction.addEventListener('click', () => {
    if (toastUndo) toastUndo();
    toast.hidden = true;
    toastUndo = null;
  });

  /* ---------- 新增 ---------- */
  function checkUrlField() {
    const raw = urlInput.value;
    if (!raw.trim()) { setMsg(urlMsg, ''); urlInput.removeAttribute('aria-invalid'); return null; }
    const parsed = parseThreadsUrl(raw);
    if (!parsed) {
      setMsg(urlMsg, '這看起來不是 Threads 貼文網址，網址應該以 threads.com 或 threads.net 開頭', 'error');
      urlInput.setAttribute('aria-invalid', 'true');
      return null;
    }
    urlInput.removeAttribute('aria-invalid');
    const dup = findDuplicate(parsed);
    if (dup) {
      setMsg(urlMsg, `這篇已經收藏過了（分類：${catName(dup.categoryId)}）`, 'error');
      return null;
    }
    setMsg(urlMsg, parsed.author ? `作者：@${parsed.author}` : '可以收藏（這種分享連結看不出作者）', 'ok');
    return parsed;
  }

  urlInput.addEventListener('change', checkUrlField);
  urlInput.addEventListener('input', () => {
    // 貼上整段分享文字時，自動只留下網址
    const parsed = parseThreadsUrl(urlInput.value);
    if (parsed && urlInput.value.trim() !== parsed.url && /\s/.test(urlInput.value.trim())) urlInput.value = parsed.url;
    // 貼上有效網址就立刻顯示結果；錯誤訊息等離開欄位才顯示，避免打字途中一直跳紅字
    if (parsed || urlInput.getAttribute('aria-invalid') || !urlInput.value.trim()) checkUrlField();
  });

  $('[data-paste]').addEventListener('click', async () => {
    try {
      const text = await navigator.clipboard.readText();
      const parsed = parseThreadsUrl(text);
      urlInput.value = parsed ? parsed.url : text.trim();
      checkUrlField();
      noteInput.focus();
    } catch (e) {
      setMsg(urlMsg, '瀏覽器不允許讀取剪貼簿，請在欄位上長按或按 Ctrl＋V 貼上', 'info');
      urlInput.focus();
    }
  });

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!urlInput.value.trim()) {
      setMsg(urlMsg, '請先貼上 Threads 貼文網址', 'error');
      urlInput.setAttribute('aria-invalid', 'true');
      urlInput.focus();
      return;
    }
    const parsed = checkUrlField();
    if (!parsed) { urlInput.focus(); return; }

    const now = Date.now();
    const cat = catSelect.value;
    data.items.unshift({
      id: uid(),
      ...parsed,
      note: noteInput.value.trim(),
      categoryId: cat === UNCATEGORIZED || cat === NEW_CATEGORY ? null : cat,
      tags: normalizeTags(tagsInput.value),
      createdAt: now,
      updatedAt: now,
    });
    saveData();
    // 保留分類選擇，方便連續收藏同一類
    urlInput.value = '';
    noteInput.value = '';
    tagsInput.value = '';
    setMsg(urlMsg, '');
    renderAll();
    showToast(`已收藏到「${catName(cat === UNCATEGORIZED ? null : cat)}」`);
    urlInput.focus();
  });

  /* ---------- 複製、刪除 ---------- */
  async function copyUrl(url) {
    try {
      await navigator.clipboard.writeText(url);
      showToast('已複製網址');
    } catch (e) {
      showToast('無法自動複製，請從卡片上的網址手動複製');
    }
  }

  function removeItem(id) {
    const index = data.items.findIndex((it) => it.id === id);
    if (index < 0) return;
    const [removed] = data.items.splice(index, 1);
    saveData();
    renderAll();
    showToast('已刪除一則收藏', () => {
      data.items.splice(index, 0, removed);
      saveData();
      renderAll();
    });
  }

  /* ---------- 編輯 ---------- */
  function openEdit(id) {
    const it = data.items.find((x) => x.id === id);
    if (!it) return;
    editingId = id;
    renderSelects();
    $('[data-edit-url]').textContent = it.url;
    $('#e-note').value = it.note;
    $('#e-cat').value = it.categoryId || UNCATEGORIZED;
    $('#e-tags').value = it.tags.join(', ');
    editDialog.showModal();
  }

  editForm.addEventListener('submit', (e) => {
    const it = data.items.find((x) => x.id === editingId);
    if (!it || e.submitter?.value !== 'save') return;
    const cat = $('#e-cat').value;
    it.note = $('#e-note').value.trim();
    it.categoryId = cat === UNCATEGORIZED || cat === NEW_CATEGORY ? null : cat;
    it.tags = normalizeTags($('#e-tags').value);
    it.updatedAt = Date.now();
    saveData();
    renderAll();
    showToast('已儲存變更');
  });

  // 下拉選單選到「新增分類」時，開啟分類管理
  for (const select of [catSelect, $('#e-cat')]) {
    select.addEventListener('change', () => {
      if (select.value !== NEW_CATEGORY) return;
      pendingNewCatTarget = select;
      select.value = UNCATEGORIZED;
      openCatDialog();
    });
  }

  /* ---------- 分類管理 ---------- */
  function renderCatManage() {
    if (!data.categories.length) {
      catManageEl.replaceChildren(el('li', { class: 'hint', text: '目前還沒有分類。' }));
      return;
    }
    catManageEl.replaceChildren(...data.categories.map((c) => {
      const count = data.items.filter((it) => it.categoryId === c.id).length;
      const input = el('input', { type: 'text', value: c.name, maxlength: '20', 'aria-label': `分類名稱：${c.name}` });
      input.addEventListener('change', () => {
        const name = input.value.trim();
        if (!name) { input.value = c.name; return; }
        if (data.categories.some((x) => x.id !== c.id && x.name === name)) {
          setMsg(catMsg, `已經有叫「${name}」的分類了`, 'error');
          input.value = c.name;
          return;
        }
        c.name = name;
        saveData();
        renderAll();
        setMsg(catMsg, '已重新命名', 'ok');
      });
      return el('li', {}, [
        input,
        el('span', { class: 'count', text: `${count} 則` }),
        el('button', {
          type: 'button', class: 'icon-btn icon-btn--danger', 'aria-label': `刪除分類 ${c.name}`,
          onclick: () => {
            data.categories = data.categories.filter((x) => x.id !== c.id);
            data.items.forEach((it) => { if (it.categoryId === c.id) it.categoryId = null; });
            if (view.cat === c.id) view.cat = 'all';
            saveData();
            renderAll();
            renderCatManage();
            setMsg(catMsg, `已刪除「${c.name}」，${count} 則收藏移到未分類`, 'ok');
          },
        }, svgIcon(ICONS.trash)),
      ]);
    }));
  }

  function openCatDialog() {
    setMsg(catMsg, '');
    renderCatManage();
    // 從編輯對話框觸發時，先關掉它，避免兩層 modal
    if (editDialog.open && pendingNewCatTarget?.id === 'e-cat') editDialog.close();
    catDialog.showModal();
    newCatInput.focus();
  }

  $('[data-manage-cats]').addEventListener('click', () => { pendingNewCatTarget = null; openCatDialog(); });

  newCatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = newCatInput.value.trim();
    if (!name) return;
    if (data.categories.some((c) => c.name === name)) {
      setMsg(catMsg, `已經有叫「${name}」的分類了`, 'error');
      return;
    }
    const cat = { id: uid(), name };
    data.categories.push(cat);
    saveData();
    newCatInput.value = '';
    renderAll();
    renderCatManage();
    setMsg(catMsg, `已新增「${name}」`, 'ok');
    if (pendingNewCatTarget) pendingNewCatTarget.value = cat.id;
  });

  catDialog.addEventListener('close', () => {
    // 若是從編輯對話框來的，回到編輯並保留新選的分類
    if (pendingNewCatTarget?.id === 'e-cat' && editingId) {
      const chosen = pendingNewCatTarget.value;
      editDialog.showModal();
      $('#e-cat').value = chosen;
    }
    pendingNewCatTarget = null;
  });

  document.querySelectorAll('[data-close]').forEach((btn) =>
    btn.addEventListener('click', () => btn.closest('dialog').close())
  );

  /* ---------- 搜尋與排序 ---------- */
  let searchTimer = null;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { view.q = searchInput.value; renderActiveFilters(); renderList(); }, 120);
  });
  sortSelect.addEventListener('change', () => { view.sort = sortSelect.value; renderList(); });

  /* ---------- 匯出、匯入 ---------- */
  $('[data-export]').addEventListener('click', () => {
    const d = new Date();
    const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    const blob = new Blob([JSON.stringify({ ...data, exportedAt: d.toISOString() }, null, 2)], { type: 'application/json' });
    const a = el('a', { href: URL.createObjectURL(blob), download: `串夾備份-${stamp}.json` });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    showToast(`已匯出 ${data.items.length} 則收藏`);
  });

  $('#import-file').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    let incoming;
    try {
      incoming = sanitizeData(JSON.parse(await file.text()));
    } catch (err) {
      incoming = null;
    }
    if (!incoming) { showToast('這個檔案不是串夾的備份格式，沒有匯入任何資料'); return; }

    // 合併：分類依名稱對應，收藏依貼文去重
    const idMap = new Map();
    for (const c of incoming.categories) {
      const existing = data.categories.find((x) => x.name === c.name);
      if (existing) idMap.set(c.id, existing.id);
      else { const id = uid(); data.categories.push({ id, name: c.name }); idMap.set(c.id, id); }
    }
    const keys = new Set(data.items.map(itemKey));
    let added = 0;
    for (const it of incoming.items) {
      if (keys.has(itemKey(it))) continue;
      keys.add(itemKey(it));
      data.items.push({ ...it, id: uid(), categoryId: it.categoryId ? idMap.get(it.categoryId) || null : null });
      added++;
    }
    saveData();
    renderAll();
    const skipped = incoming.items.length - added;
    showToast(`匯入 ${added} 則收藏` + (skipped ? `，略過 ${skipped} 則重複` : ''));
  });

  /* ---------- 從分享或網址參數帶入 ---------- */
  function prefillFromQuery() {
    const params = new URLSearchParams(location.search);
    const source = ['url', 'text', 'title'].map((k) => params.get(k) || '').join(' ');
    const parsed = parseThreadsUrl(source);
    if (!parsed) return;
    urlInput.value = parsed.url;
    checkUrlField();
    history.replaceState(null, '', location.pathname);
    noteInput.focus();
  }

  /* ---------- 主題 ---------- */
  const THEME_KEY = 'threads-shelf:theme';
  const THEMES = {
    system: { name: '跟隨系統' },
    paper: { name: '米白', bg: '#f6f3ee' },
    night: { name: '夜幕', bg: '#101016' },
    matcha: { name: '抹茶', bg: '#eef2ea' },
    ocean: { name: '海霧', bg: '#edf2f6' },
    aurora: { name: '極光', bg: '#0b1416' },
  };
  const themeBtn = $('[data-theme-btn]');
  const themePanel = $('#theme-panel');
  const themeLabel = $('[data-theme-label]');
  const themeMetas = [...document.querySelectorAll('meta[name="theme-color"]')];
  const metaDefaults = themeMetas.map((m) => m.content);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyTheme(theme, animate = false) {
    if (!THEMES[theme]) theme = 'system';
    const root = document.documentElement;
    if (animate && !reduceMotion.matches) {
      root.classList.add('theme-anim');
      setTimeout(() => root.classList.remove('theme-anim'), 400);
    }
    root.dataset.theme = theme;
    // 手機瀏覽器網址列顏色
    themeMetas.forEach((m, i) => { m.content = THEMES[theme].bg || metaDefaults[i]; });
    themeLabel.textContent = THEMES[theme].name;
    themeBtn.setAttribute('aria-label', `切換主題，目前：${THEMES[theme].name}`);
    const radio = themePanel.querySelector(`input[value="${theme}"]`);
    if (radio) radio.checked = true;
  }

  function setThemePanel(open) {
    themePanel.hidden = !open;
    themeBtn.setAttribute('aria-expanded', String(open));
    if (open) (themePanel.querySelector('input:checked') || themePanel.querySelector('input')).focus();
  }

  themeBtn.addEventListener('click', () => setThemePanel(themePanel.hidden));
  themePanel.addEventListener('change', (e) => {
    const theme = e.target.value;
    applyTheme(theme, true);
    try { localStorage.setItem(THEME_KEY, theme); } catch (err) { /* 無法儲存時本次仍可使用 */ }
  });
  // 用滑鼠或觸控點選項目後收起選單；方向鍵切換時保持開啟
  themePanel.addEventListener('click', (e) => {
    // 點到 label 本身才是滑鼠／觸控；方向鍵觸發的 click 目標是 input
    if (e.target.closest('.theme-opt') && !e.target.matches('input')) setTimeout(() => setThemePanel(false), 0);
  });
  themePanel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setThemePanel(false); themeBtn.focus(); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !themePanel.hidden) { setThemePanel(false); themeBtn.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (!themePanel.hidden && !e.target.closest('.theme-picker')) setThemePanel(false);
  });
  themePanel.addEventListener('focusout', (e) => {
    if (!themePanel.hidden && !e.relatedTarget?.closest?.('.theme-picker') && e.relatedTarget) setThemePanel(false);
  });

  applyTheme(document.documentElement.dataset.theme);

  // 其他分頁修改資料時同步更新
  window.addEventListener('storage', (e) => {
    if (e.key === THEME_KEY) { applyTheme(e.newValue || 'system'); return; }
    if (e.key !== STORAGE_KEY) return;
    data = loadData();
    renderAll();
  });

  renderAll();
  prefillFromQuery();
  if (!storageOk) showToast('這個瀏覽器無法儲存資料（可能是無痕模式），關閉後收藏會消失');
})();
