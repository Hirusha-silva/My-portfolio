
document.addEventListener('DOMContentLoaded', function() {

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const contactBtn = document.querySelector('.contact');



    menuIcon.addEventListener('click', function() {

        if (navbar.style.right === '-100%' || navbar.style.right === '') {
            navbar.style.right = '0';
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            navbar.style.right = '-100%';
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }


        contactBtn.classList.toggle('active');
    });


    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {

            if (window.getComputedStyle(menuIcon).display !== 'none') {
                navbar.style.right = '-100%';
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                contactBtn.classList.remove('active');
            }
        });
    });


    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnMenuIcon && navbar.style.right === '0') {
            navbar.style.right = '-100%';
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            contactBtn.classList.remove('active');
        }
    });
});

