const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`);
sr.reveal(`.home`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 800 });
sr.reveal(`.home__car-data, .footer__copy`, { delay: 900, interval: 100, origin: 'bottom' });
sr.reveal(`.home__button`, { delay: 1000, origin: 'bottom' });

sr.reveal(`.about__group, .offer__data`, { origin: 'left' });
sr.reveal(`.about__data, .offer__img, .home__social-icon`, { origin: 'right' });

sr.reveal(`.features__map, .slider__bg`, { delay: 600, origin: 'bottom' });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card, .logos__content, .footer__content`, { interval: 100 });


const d = new Date();
document.getElementById("date").innerHTML = d;
