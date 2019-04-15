
// Hamburger menu
var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
menuTrigger.onclick = function () {
  menuContainer.classList.toggle('open');
  menuTrigger.classList.toggle('is-active');
  body.classList.toggle('lock-scroll');
  document.getElementById("story-menu-arrow").classList.remove("turn");
  document.getElementById("story-menu-items").classList.remove("show");
  document.getElementById("photo-menu-arrow").classList.remove("turn");
  document.getElementById("photo-menu-items").classList.remove("show");
}

/* Mobile inner menus */
function showStoryMenu() {
  document.getElementById("story-menu-arrow").classList.toggle("turn");
  document.getElementById("story-menu-items").classList.toggle("show");
}

function showPhotoMenu() {
  document.getElementById("photo-menu-arrow").classList.toggle("turn");
  document.getElementById("photo-menu-items").classList.toggle("show");
}