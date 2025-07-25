// Navbar toggle for mobile
const toggleMenu = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Check if elements exist (to avoid error)
if (toggleMenu && navLinks) {
    toggleMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggleMenu.classList.toggle('open');

    });
}

