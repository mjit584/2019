// Progress Bar JS

// console.log('progressBar.js is loaded');

// Create fillable progress bar on photo chapter pages
function fillProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("photo-bar").style.width = scrolled + "%";
}