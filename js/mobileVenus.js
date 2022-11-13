
const mobileIcon = document.querySelector(".mobile-menu-icon");
const menu = document.querySelector(".navigation-links");

function handelMobileMenu() {
  menu.classList.toggle(".opened");

}

mobileIcon.addEventListener("click" ,handelMobileMenu)