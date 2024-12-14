// Get the menu elements
const menuButton = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu__close');
const menuLinks = document.querySelectorAll('.mobile-navigation__link');

// Open menu when clicking the menu button
menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

// Close menu when clicking the close button
closeButton.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
});

// Close menu when clicking outside of it
document.addEventListener('click', function(e) {
    if (e.target.closest('.mobile-menu') === null && 
        e.target.closest('.mobile-menu-btn') === null && 
        mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});