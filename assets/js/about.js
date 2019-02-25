
// About JS
console.log('Testing to see if about is loaded');

// Define about variables
var everyone = document.getElementById('about__filter--everyone');
var photog = document.getElementById('about__filter--photog');
var vid = document.getElementById('about__filter--vid');
var rep = document.getElementById('about__filter--rep');
var des = document.getElementById('about__filter--des');
var dev = document.getElementById('about__filter--dev');
var coaches = document.getElementById('about__filter--coach');

if (everyone.classList.contains('is-active')) {
  photog.onclick = function () {
    photog.classList.toggle('is-active');
    everyone.classList.toggle('is-active');
  }

  vid.onclick = function () {
    vid.classList.toggle('is-active');
    everyone.classList.toggle('is-active');
  }

  rep.onclick = function () {
    rep.classList.toggle('is-active');
    everyone.classList.toggle('is-active');
  }

  des.onclick = function () {
    des.classList.toggle('is-active');
    everyone.classList.toggle('is-active');
  }

  dev.onclick = function () {
    dev.classList.toggle('is-active');
    everyone.classList.toggle('is-active');
  }

  coaches.onclick = function () {
    coaches.classList.toggle('is-active');
    everyone.classList.toggle('is-active');
  }
}






