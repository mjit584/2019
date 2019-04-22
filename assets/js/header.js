
// Header JS

// console.log('header.js is loaded');

//* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var scrollTimer = null;
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("hamburger").style.top = "0";
    if (scrollTimer) {
      clearTimeout(hideHeader);
    }
    setTimeout(hideHeader, 2000);   // set new timer
  } else if (currentScrollPos <= 0) {
    document.getElementById("header").style.top = "0";
    document.getElementById("hamburger").style.top = "0";
    if (scrollTimer) {
      clearTimeout(hideHeader);
    }
  } else {
    document.getElementById("header").style.top = "-75px";
    document.getElementById("hamburger").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
  document.getElementById("main-menu-mobile").style.top = `${window.scrollY}px`;
}

function hideHeader() {
  scrollTimer = true;
  var currentScrollPos = window.pageYOffset;
  var isHovered = $('#header').is(":hover");
  if (currentScrollPos > 50 && !isHovered) {
    document.getElementById("header").style.top = "-75px";
  }
}



var storyDropdown = document.getElementById('header__story-dropdown');
var mainMenu = document.getElementById('main-menu');
var overlay = document.getElementById("home-overlay");
var photoDropdown = document.getElementById('header__photo-dropdown');
var photoMainMenu = document.getElementById('main-menu-photos');
var windowWidth;

windowWidth = $(window).width();

window.onload = function () {
  if (windowWidth > 1040) {
    storyDropdown.onmouseenter = function () {
      storyDropdown.classList.add('is-active');
      mainMenu.classList.add('open');
      overlay.style.display = "flex";
    }

    storyDropdown.onmouseleave = function () {
      storyDropdown.classList.remove('is-active');
      mainMenu.classList.remove('open');
      overlay.style.display = "none";
    }

    photoDropdown.onmouseenter = function () {
      photoDropdown.classList.add('is-active');
      photoMainMenu.classList.add('open');
      overlay.style.display = "flex";
    }

    photoDropdown.onmouseleave = function () {
      photoDropdown.classList.remove('is-active');
      photoMainMenu.classList.remove('open');
      overlay.style.display = "none";
    }
  } else {
    storyDropdown.onclick = function () {
      storyDropdown.classList.toggle('is-active');
      mainMenu.classList.toggle('open');
      var displayNone = overlay.getAttribute("style");
      if (displayNone === null) {
        overlay.style.display = "flex";
      } else {
        overlay.style.display = "none";
      }
    }

    photoDropdown.onclick = function () {
      photoDropdown.classList.toggle('is-active');
      photoMainMenu.classList.toggle('open');
      var displayNone = overlay.getAttribute("style");
      if (displayNone === null) {
        overlay.style.display = "flex";
      } else {
        overlay.style.display = "none";
      }
    }
  }
};

// if (!mainMenu.classList.contains('open')) {
//   $('#header__story-dropdown').on('mouseenter touchstart', function (e) {
//     storyDropdown.classList.add('is-active');
//     mainMenu.classList.add('open');
//     overlay.style.display = "flex";
//   });
//   $('#header__story-dropdown').on('mouseleave', function (e) {
//     storyDropdown.classList.remove('is-active');
//     mainMenu.classList.remove('open');
//     overlay.style.display = "none";
//   });
//   $('#header__story-dropdown').on('click', function () {
//     storyDropdown.classList.remove('is-active');
//     mainMenu.classList.remove('open');
//     overlay.style.display = "none";
//   });
// } else if (mainMenu.classList.contains('open')) {
//   $('#header__story-dropdown').on('mouseleave', function () {
//     storyDropdown.classList.remove('is-active');
//     mainMenu.classList.remove('open');
//     overlay.style.display = "none";
//   });
//   $('#header__story-dropdown').on('mouseenter touchstart', function (e) {
//     storyDropdown.classList.add('is-active');
//     mainMenu.classList.add('open');
//     overlay.style.display = "flex";
//   });
// }