document.addEventListener("DOMContentLoaded", rand_spotify());

function rand_spotify(){
    embbed = document.querySelectorAll(`.embbed`);
    let rand_numb = Math.floor(Math.random() * (embbed.length));
    embbed[rand_numb].style.opacity = '1';
}
