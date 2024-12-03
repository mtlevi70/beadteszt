document.addEventListener("DOMContentLoaded", navigation());
function navigation() {
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
