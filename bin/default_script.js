let currentIndex = 0;
document.addEventListener("DOMContentLoaded", function(){
    init();
    quotesfunc();
    rand_spotify();
});
setInterval(quotesfunc, 6000);

function init() {
    let hamMenu = document.querySelector('.ham_menu');
    let nav = document.querySelector('nav');
    let navbar = document.querySelector('.navbar');
    let navbar_x = document.querySelector('.navbar_x');

    hamMenu.addEventListener('click', function () {
        nav.classList.toggle('visible');
        navbar.classList.toggle('hidden');
        navbar_x.classList.toggle('visible');
    });

    navbar_x.addEventListener('click', function () {
        nav.classList.toggle('visible');
        navbar_x.classList.toggle('visible');
        navbar.classList.toggle('hidden');
    });
}

function quotesfunc() {
    const quote = document.querySelectorAll(`.quote`);
    const title = document.querySelectorAll(`.song_title`)

    // Aktuális idézet megjelenítése
    quote[currentIndex].style.opacity = '1';
    title[currentIndex].style.opacity = `1`;
    quote[currentIndex].style.animation = `fade 6s ease-in-out`;
    title[currentIndex].style.animation = `fade 6s ease-in-out`;

    // Előző idézet elrejtése, ha nem az első ciklus
    if (currentIndex > 0) {
        quote[currentIndex - 1].style.opacity = '0';
        title[currentIndex - 1].style.opacity = '0';
        quote[currentIndex - 1].style.animation = `none`;
        title[currentIndex - 1].style.animation = `none`;
    } else if (currentIndex == 0) {
        // Ha az első elemre váltunk, rejtsük el az utolsó elemet
        quote[quote.length - 1].style.opacity = '0';
        title[title.length - 1].style.opacity = '0';
        quote[quote.length - 1].style.animation = `none`;
        title[title.length - 1].style.animation = `none`;
    }
    // Következő idézetre váltás
    currentIndex++;

    // Ha elérjük a lista végét, kezdjük újra
    if (currentIndex >= quote.length) {
        currentIndex = 0;
    }
}

function rand_spotify(){
    embbed = document.querySelectorAll(`.embbed`);
    let rand_numb = Math.floor(Math.random() * (embbed.length));
    embbed[rand_numb].style.opacity = '1';
}


