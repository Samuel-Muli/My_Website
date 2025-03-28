document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navbarMenu = document.querySelector('.navbar .menu');
    const menuLinks = document.querySelectorAll('.navbar .menu li a');

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu on link click
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
        });
    });

    // Smooth scroll
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Change active menu link on click and smooth scroll
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(btn => btn.classList.remove('active'));
        link.classList.add('active');
    });
});

// Initialize typing animation for profession titles
document.addEventListener('DOMContentLoaded', () => {
    const typedOptions = {
        strings: ["Mechanical Engineer.", "Data Analyst.", "Computer Technician."],
        typeSpeed: 90,
        backSpeed: 40,
        loop: true
    };
    new Typed(".typing", typedOptions);
    new Typed(".typing-2", { ...typedOptions, backSpeed: 50 });

    // Animate text opacity and font size on load
    document.querySelectorAll('.animated-text h1, .animated-text p').forEach((element) => {
        element.style.opacity = '1';
        element.style.transition = 'opacity 1s ease-out, font-size 0.5s ease-in-out';
        element.style.fontSize = '45px'; // Enhancing font size for better readability
    });
});


//mchezo wa paka na panya


//mchezo wa paka na panya

// Owl Carousel functionality
$(document).ready(function () {
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500, // Improved auto play speed for better engagement
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});

