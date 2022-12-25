// Navigation Menu

let menuButton = document.querySelector(".navigation__burguer");
let navbar = document.querySelector(".navigation__menu");
let openMenu = document.querySelector("#openMenu");
let closeMenu = document.querySelector("#closeMenu");

function switchImg () {
    openMenu.classList.toggle("close");
    closeMenu.classList.toggle("close");
}

menuButton.onclick = () => {
    navbar.classList.toggle("active");
    switchImg();
}

closeMenu.onclick = () => {
    navbar.classList.toggle("active");
    switchImg();
}
