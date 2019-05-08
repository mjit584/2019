
// 404 JS

// console.log('Test to see if 404.js is loaded');

//Add your images, we'll set the path in the next step
var images = [
  '404-bts-1.JPG',
  '404-bts-2.JPG',
  '404-bts-3.JPG',
  '404-bts-4.jpg',
  '404-bts-5.jpg',
  '404-bts-6.jpg',
  '404-bts-7.jpg',
  '404-bts-8.jpg',
  '404-bts-9.jpg',
  '404-bts-10.jpg',
  '404-bts-11.jpg',
  '404-bts-12.jpg',
  '404-bts-13.jpg',
  '404-bts-14.jpg',
  '404-bts-15.jpg',
  '404-bts-16.jpg',
  '404-bts-17.jpg',
  '404-bts-18.jpg',
  '404-bts-19.jpg',
  '404-bts-20.jpg',
  '404-bts-21.jpg',
  '404-bts-22.jpg',
  '404-bts-23.jpg',
  '404-bts-24.jpg',
  '404-bts-25.jpg',
  '404-bts-26.jpg',
];
var btsGrid = document.getElementById("error__bts");
var html = "";

html += "<div class='error__grid'>";
images.forEach((image) => {
  html += "<div class='img__container'>";
  html += "<img src='https://uprooted.unc.edu/images/404/" + image + "' alt='Behind the scenes look at the Uprooted Team'>";
  html += "</div>";
})
html += "</div>";

btsGrid.innerHTML = html;
