const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open'); //turns hamburger menu view to the x-button
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden')
}