// select dom elements
const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.btn-nav');
const menuBranding = document.querySelector('.btn-branding');
const navItems = document.querySelectorAll('nav-items');

//set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuBtn.classList.add('show');
        menuBtn.classList.add('show');
        menuBtn.classList.add('show');
    } else {

    }
}