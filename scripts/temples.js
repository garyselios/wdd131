document.getElementById("lastModified").innerHTML = document.lastModified;


// DOM Elements Selection

const menuButton = document.getElementById('menu-button');
const mainNav = document.getElementById('main-nav');
const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');


// Hamburger Menu Functionality

menuButton.addEventListener('click', function () {
    // Toggle the 'active' class on the navigation menu
    mainNav.classList.toggle('active');

    // Change the hamburger icon to 'X' when menu is open
    if (mainNav.classList.contains('active')) {
        menuButton.textContent = '✕'; // X symbol for close
        menuButton.setAttribute('aria-expanded', 'true');
    } else {
        menuButton.textContent = '☰'; // Hamburger symbol
        menuButton.setAttribute('aria-expanded', 'false');
    }
});


// Close menu when clicking on a navigation link (mobile)

const navLinks = document.querySelectorAll('#main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Only close menu in mobile view
        if (window.innerWidth < 768) {
            mainNav.classList.remove('active');
            menuButton.textContent = '☰';
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
});


// Close menu when clicking outside (mobile)

document.addEventListener('click', function (event) {
    const isClickInsideNav = mainNav.contains(event.target);
    const isClickOnButton = menuButton.contains(event.target);

    // Only apply to mobile view
    if (window.innerWidth < 768 &&
        mainNav.classList.contains('active') &&
        !isClickInsideNav &&
        !isClickOnButton) {
        mainNav.classList.remove('active');
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
    }
});


// Update menu behavior on window resize

window.addEventListener('resize', function () {
    // If switching to desktop view, ensure menu is visible
    if (window.innerWidth >= 768) {
        mainNav.classList.remove('active');
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
    }
});


// Footer Dynamic Content

// Update copyright year
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Update last modified date
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}


// Initialize page state
// Set initial ARIA attributes for accessibility
menuButton.setAttribute('aria-label', 'Toggle navigation menu');
menuButton.setAttribute('aria-expanded', 'false');
menuButton.setAttribute('aria-controls', 'main-nav');

// Ensure proper initial state
document.addEventListener('DOMContentLoaded', function () {
    console.log('Temple Album page loaded successfully');
});