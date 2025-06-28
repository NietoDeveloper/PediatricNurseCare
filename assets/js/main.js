const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '300px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.texto-encabezado`, { delay: 400, origin: 'top'});
sr.reveal(`.welcome`, { delay: 100 });
sr.reveal(`.card`, { delay: 150 });
sr.reveal(`.footer__logo`, { delay: 200 });
sr.reveal(`.footer__content`, { interval: 250 });
sr.reveal(`.footer__copy`), { interval: 300 };
sr.reveal(`footer__dev-link`, { interval: 300 });
sr.reveal(`date`, { interval: 350 }) 


const d = new Date();
document.getElementById("date").innerHTML = d;
