// Progress Bar JS

// console.log('progressBar.js is loaded');

//* Redefine window onscroll to include progress bar */
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
  } else {
    document.getElementById("header").style.top = "-75px";
    document.getElementById("hamburger").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
  document.getElementById("main-menu-mobile").style.top = `${window.scrollY}px`;

  fillProgress();
}

// Create fillable progress bar on photo chapter pages
function fillProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("photo-bar").style.width = scrolled + "%";
}