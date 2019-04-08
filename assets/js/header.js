
// Header js

console.log('testing to make sure headers.js is linked up');

//* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;

  fillProgress();
}


var storyDropdown = document.getElementById('header__story-dropdown');
var mainMenu = document.getElementById('main-menu');
storyDropdown.onmouseenter = function () {
  storyDropdown.classList.toggle('is-active');
  mainMenu.classList.toggle('open');
}

storyDropdown.onmouseleave = function () {
  storyDropdown.classList.toggle('is-active');
  mainMenu.classList.toggle('open');
}

var photoDropdown = document.getElementById('header__photo-dropdown');
var photoMainMenu = document.getElementById('main-menu-photos');
photoDropdown.onmouseenter = function () {
  photoDropdown.classList.toggle('is-active');
  photoMainMenu.classList.toggle('open');
}

photoDropdown.onmouseleave = function () {
  photoDropdown.classList.toggle('is-active');
  photoMainMenu.classList.toggle('open');
}


