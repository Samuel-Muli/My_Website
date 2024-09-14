// Scroll-up button functionality
const scrollUpBtn = document.querySelector('.scroll-up-btn');
const menuBtn = document.querySelector('.menu-btn');
const navbarMenu = document.querySelector('.navbar .menu');
const menuLinks = document.querySelectorAll('.navbar .menu li a');

// Scroll to top with smooth animation
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide scroll-up button on scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    scrollPos > 200 ? scrollUpBtn.classList.add('show') : scrollUpBtn.classList.remove('show');

    // Sticky navbar on scroll
    scrollPos > 20 ? document.querySelector('.navbar').classList.add('sticky') : document.querySelector('.navbar').classList.remove('sticky');
});

// Toggle navbar menu in mobile view
menuBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Smooth scroll to sections and close menu in mobile view
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        navbarMenu.classList.remove('active');
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
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    // Toggle the active class on the menu and menu-btn on click
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');  // Show or hide the menu
        menuBtn.classList.toggle('open'); // Change the button icon or state
    });

    // Close menu when any link inside the menu is clicked (good for mobile view)
    document.querySelectorAll('.menu li a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active'); // Close the menu
            menuBtn.classList.remove('open'); // Reset the button
        });
    });
});


//mchezo wa paka na panya

// Owl Carousel functionality
$(document).ready(function(){
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

