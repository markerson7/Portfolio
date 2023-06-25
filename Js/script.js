// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SCROLL SECTIONS ACTIVE LINK
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[hraf*=${id}]`).classList.add('active');
            });
        };
    });

    // STICKY NAVBAR
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

// REOMVE TOGGLE ICONS AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

  // scroll reveal
  ScrollReveal({ 
    reset: true,
     distance: '80px',
     duration: 1500,
     delay: 100
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

 // typed js
 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphic Designer',],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
 });