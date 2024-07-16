// Scroll-up button functionality
const scrollUpBtn = document.querySelector('.scroll-up-btn');
const menuBtn = document.querySelector('.menu-btn');
const navbarMenu = document.querySelector('.navbar .menu');
const menuLinks = document.querySelectorAll('.menu-btn');
// Scroll to top functionality
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
// Show/hide scroll-up button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

// Toggle navbar menu on menu button click
menuBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Smooth scroll to sections
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the menu if in mobile view
        navbarMenu.classList.remove('active');
    });
});

// Change active menu button on click
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(btn => btn.classList.remove('active'));
        link.classList.add('active');
    });
});








$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });



    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Mechanical Engineer.", "Data Analyst.", "Computer Technician."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Mechanical Engineer.", "Data Analyst.", "Computer Technician."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('.animated-text h1, .animated-text p').forEach((element) => {
            element.style.opacity = '1'; // Ensure elements are visible for the animation
        });
    });


        //my fuction to animate text


    document.addEventListener('DOMContentLoaded', (event) => {
        const elements = document.querySelectorAll('.animated-text h1, .animated-text p');
        elements.forEach((element) => {
            element.style.opacity = '1'; // Ensure elements are visible for the animation
            element.style.fontSize = '20px'; // Dynamically set font size if needed
        });
    });
        
        
        
        
    
});