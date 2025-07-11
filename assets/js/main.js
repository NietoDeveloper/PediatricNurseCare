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
sr.reveal(`.texto-encabezado-2`, { delay: 1200, origin: 'rigth' });

const d = new Date();
document.getElementById("date").innerHTML = d;
