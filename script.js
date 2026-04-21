document.addEventListener('DOMContentLoaded', () => {

    const menuBtn      = document.querySelector('.menu-btn');
    const navbarMenu   = document.querySelector('.navbar .menu');
    const menuLinks    = document.querySelectorAll('.navbar .menu li a');
    const navbar       = document.querySelector('.navbar');
    const scrollUpBtn  = document.querySelector('.scroll-up-btn');

    // ── Mobile menu toggle ───────────────────────────────────────────────────
    menuBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu + update active state when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');

            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ── Smooth scroll ────────────────────────────────────────────────────────
    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ── Sticky navbar + scroll-up button ─────────────────────────────────────
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
            scrollUpBtn.classList.add('show');
        } else {
            navbar.classList.remove('sticky');
            scrollUpBtn.classList.remove('show');
        }
    });

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── Typing animation ─────────────────────────────────────────────────────
    const typedOptions = {
        strings: ["Mechanical Engineer.", "Data Analyst.", "Computer Technician."],
        typeSpeed: 90,
        backSpeed: 40,
        loop: true
    };
    new Typed(".typing",   typedOptions);
    new Typed(".typing-2", { ...typedOptions, backSpeed: 50 });

});

// ── Owl Carousel ─────────────────────────────────────────────────────────────
$(document).ready(function () {
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0:    { items: 1, nav: false },
            600:  { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
