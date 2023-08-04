// const kalboNav = document.querySelectorAll(".kalbo__nav__link");
// const kalboContent = document.querySelectorAll(".kalbo__item__content");
// kalboNav.forEach((kalbo) => {
//     kalbo.addEventListener("click", () => {
//         removeActiveKalbo();
//         kalbo.style = "transition:.5s ease";
//         kalbo.classList.add("active");
//         kalbo.style = "transition:.5s ease";
//         const activeContent = document.querySelector(`#${kalbo.id}-content`);
//         removeActiveContent();
//         activeContent.classList.add("active");
//     });
// });

// function removeActiveKalbo() {
//     kalboNav.forEach((kalbo) => {
//         kalbo.classList.remove("active");
//     });
// }

// function removeActiveContent() {
//     kalboContent.forEach((kalbo) => {
//         kalbo.classList.remove("active");
//     });
// }

const headerNav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
const hokbu = document.querySelector('.buhok');
toggleMenu.addEventListener('click', () => {
	toggleMenu.classList.toggle('open');
	headerNav.classList.toggle('open');
	hokbu.classList.toggle('open');
});