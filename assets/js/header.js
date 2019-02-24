// Header js

console.log('testing to make sure headers.js is linked up');

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

var storyDropdown = document.getElementById('story-dropdown');
var mainMenu = document.getElementById('main-menu');
var arrow = document.getElementById('story-dropdown__arrow');
storyDropdown.onclick = function () {
  storyDropdown.classList.toggle('is-active');
  mainMenu.classList.toggle('open');
}