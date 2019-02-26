
// About JS
console.log('Testing to see if about is loaded');

// Define about variables
var filterEveryone = document.getElementById('about__filter--everyone');
var filterPhotog = document.getElementById('about__filter--photog');
var filterVid = document.getElementById('about__filter--vid');
var filterRep = document.getElementById('about__filter--rep');
var filterDes = document.getElementById('about__filter--des');
var filterDev = document.getElementById('about__filter--dev');
var filterCoaches = document.getElementById('about__filter--coach');
var all = document.getElementById('all');
var photog = document.getElementById('photog')

filterEveryone.onclick = function () {
  all.classList.remove('hidden');
  photog.classList.add('hidden');
  filterPhotog.classList.remove('is-active');
  filterEveryone.classList.add('is-active');
}

filterPhotog.onclick = function () {
  photog.classList.toggle('hidden');
  all.classList.toggle('hidden');
  filterEveryone.classList.toggle('is-active');
  filterPhotog.classList.toggle('is-active');
}

filterVid.onclick = function () {
  filterVid.classList.toggle('is-active');
  filterEveryone.classList.toggle('is-active');
}

filterRep.onclick = function () {
  filterRep.classList.toggle('is-active');
  filterEveryone.classList.toggle('is-active');
}

filterDes.onclick = function () {
  filterDes.classList.toggle('is-active');
  filterEveryone.classList.toggle('is-active');
}

filterDev.onclick = function () {
  filterDev.classList.toggle('is-active');
  filterEveryone.classList.toggle('is-active');
}

filterCoaches.onclick = function () {
  filterCoaches.classList.toggle('is-active');
  filterEveryone.classList.toggle('is-active');
}





