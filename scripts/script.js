

/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
/*scroll section active link*/
let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classList.add('active');
            });
        };
    });

    /*sticky navbar -----*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toggle icon and navbar*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
/*Scroll Reveal */

ScrollReveal({
    distance: '80px',
    duration: 250,
    delay: 300,
});

ScrollReveal().reveal('.home - content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Software engineering student'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true,
})


/*Multimedia*/
function changeMainVideo(url, title) {
    document.getElementById("multimedia-main-video").innerHTML = `<iframe
        style="width: 100%; height: 100%; border-radius: 8px"
        src="${url}"
        title="${title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>`;
  }
