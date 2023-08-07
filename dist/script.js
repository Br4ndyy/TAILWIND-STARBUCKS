const kalboNav = document.querySelectorAll(".kalbo__nav__link");
const kalboContent = document.querySelectorAll(".kalbo__item__content");
kalboNav.forEach((kalbo) => {
    kalbo.addEventListener("click", () => {
        removeActiveKalbo();
        kalbo.style = "transition:.5s ease";
        kalbo.classList.add("active");
        kalbo.style = "transition:.5s ease";
        const activeContent = document.querySelector(`#${kalbo.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
});

function removeActiveKalbo() {
    kalboNav.forEach((kalbo) => {
        kalbo.classList.remove("active");
    });
}

function removeActiveContent() {
    kalboContent.forEach((kalbo) => {
        kalbo.classList.remove("active");
    });
}

// const faveNav = document.querySelectorAll(".fave__nav__link");
// const faveContent = document.querySelectorAll(".fave__item__content");
// faveNav.forEach((fave) => {
//     fave.addEventListener("click", () => {
//         removeActiveFave();
//         fave.style = "transition:.5s ease";
//         fave.classList.add("active");
//         fave.style = "transition:.5s ease";
//         const activeContent = document.querySelector(`#${fave.id}-content`);
//         removeActiveContent();
//         activeContent.classList.add("active");
//     });
// });

// activeLin.forEach((lin) => {
//     lin.addEventListener("click", () => {
//         removeActiveFave();
//         lin.style = "transition:.5s ease";
//         lin.classList.add("active");
//         lin.style = "transition:.5s ease";
//         const activeContent = document.querySelectorAll(`#${fave.id}-lin`);
//         removeActiveContent();
//         activeContent.classList.add("active");
//     });
// });

// function removeActiveFave() {
//     faveNav.forEach((fave) => {
//         fave.classList.remove("active");
//     });
// }

// function removeActiveContent() {
//     faveContent.forEach((fave) => {
//         fave.classList.remove("active");
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