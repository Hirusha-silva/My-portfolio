// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const contactBtn = document.querySelector('.contact');

    // Toggle menu when hamburger icon is clicked
    menuIcon.addEventListener('click', function() {
        // Toggle the navbar
        if (navbar.style.right === '-100%' || navbar.style.right === '') {
            navbar.style.right = '0';
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            navbar.style.right = '-100%';
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }

        // Toggle contact button visibility on mobile
        contactBtn.classList.toggle('active');
    });

    // Close menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Only execute this on mobile views (when hamburger is visible)
            if (window.getComputedStyle(menuIcon).display !== 'none') {
                navbar.style.right = '-100%';
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                contactBtn.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        // If clicking outside navbar and not on menu icon, close the menu
        if (!isClickInsideNavbar && !isClickOnMenuIcon && navbar.style.right === '0') {
            navbar.style.right = '-100%';
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            contactBtn.classList.remove('active');
        }
    });
});