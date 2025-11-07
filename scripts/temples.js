// 1. FOOTER - Current year and last modification
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// 2. HAMBURGER MENU - Only the basics
const menuButton = document.getElementById('menu-button');
const mainNav = document.getElementById('main-nav');

menuButton.addEventListener('click', function () {
    // Toggle between open/closed
    mainNav.classList.toggle('active');

    // Change icon
    if (mainNav.classList.contains('active')) {
        menuButton.textContent = '✕'; // X when open
    } else {
        menuButton.textContent = '☰'; // Hamburger when closed
    }
});