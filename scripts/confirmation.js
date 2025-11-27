
window.onload = function () {
    let count = localStorage.getItem('reviewCount');
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCounter').textContent = count;
    console.log('Contador funcionando:', count);
};