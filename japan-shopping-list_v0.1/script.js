// 載入頁面時恢復勾選狀態
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        const key = checkbox.dataset.key;
        if (localStorage.getItem(key) === 'true') {
            checkbox.checked = true;
        }
        
        // 監聽變化並儲存
        checkbox.addEventListener('change', function() {
            localStorage.setItem(key, this.checked);
        });
    });
    
    // 清除所有勾選
    document.getElementById('clear-all').addEventListener('click', function() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            localStorage.setItem(checkbox.dataset.key, 'false');
        });
    });
});