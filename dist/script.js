const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const hokbu = document.querySelector(".buhok");
toggleMenu.addEventListener('click', () =>{
    toggleMenu.classList.toggle('open')
    headerNav.classList.toggle('open');
    hokbu.classList.toggle('open');
})