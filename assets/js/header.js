
// Header js

console.log('testing to make sure headers.js is linked up');

//* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var scrollTimer = null;
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    if (scrollTimer) {
      console.log("cleared timeout");
      clearTimeout(hideHeader);
    }
    setTimeout(hideHeader, 2000);   // set new timer
  } else {
    document.getElementById("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;

  fillProgress();
}

function hideHeader() {
  scrollTimer = true;
  var currentScrollPos = window.pageYOffset;
  console.log("hideHeader function", currentScrollPos);
  var isHovered = $('#header').is(":hover");
  if (currentScrollPos > 50 && !isHovered) {
    document.getElementById("header").style.top = "-75px";
  }
}



var storyDropdown = document.getElementById('header__story-dropdown');
var mainMenu = document.getElementById('main-menu');
var overlay = document.getElementById("home-overlay");

storyDropdown.onmouseenter = function () {
  storyDropdown.classList.toggle('is-active');
  mainMenu.classList.toggle('open');
  overlay.style.display = "flex";
}

storyDropdown.onmouseleave = function () {
  storyDropdown.classList.toggle('is-active');
  mainMenu.classList.toggle('open');
  overlay.style.display = "none";
}

var photoDropdown = document.getElementById('header__photo-dropdown');
var photoMainMenu = document.getElementById('main-menu-photos');
photoDropdown.onmouseenter = function () {
  photoDropdown.classList.toggle('is-active');
  photoMainMenu.classList.toggle('open');
  overlay.style.display = "flex";
}

photoDropdown.onmouseleave = function () {
  photoDropdown.classList.toggle('is-active');
  photoMainMenu.classList.toggle('open');
  overlay.style.display = "none";
}


