// JavaScript para manejar el menú responsive
const menuToggle = document.querySelector('.menu-toggle');
const navegacion = document.querySelector('.navegacion');

menuToggle.addEventListener('click', () => {
    navegacion.classList.toggle('active'); // Alternar la visibilidad del menú
    menuToggle.classList.toggle('active'); // Cambiar el estilo del botón de menú
});




// JavaScript para efecto fade en el scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

