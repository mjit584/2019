
// Government Interactive - Undocumented
console.log('script start');

$(document).ready(function () {
  $("#r-2-c-2").click(function () {
    $("#PEP-body").fadeIn(300);
  });
});

$(document).ready(function () {
  $("#PEP-button").click(function () {
    $("#PEP-body").fadeOut(300);
  });
});

$(document).ready(function () {
  $("#r-2-c-1").click(function () {
    $("#passport-body").fadeIn(300);
  });
});

$(document).ready(function () {
  $("#passport-button").click(function () {
    $("#passport-body").fadeOut(300);
  });
});

$(document).ready(function () {
  $("#r-2-c-3").click(function () {
    $("#ID-body").fadeIn(300);
  });
});

$(document).ready(function () {
  $("#ID-button").click(function () {
    $("#ID-body").fadeOut(300);
  });
});


// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


// passport-slideshow-js
var slideIndexPassport = 1;
showSlidesPassport(slideIndexPassport);

function plusSlidesPassport(n) {
  console.log('plusSlidesPassport');
  showSlidesPassport(slideIndexPassport += n);
}

function currentSlidePassport(n) {
  console.log('currentSlidePassport');
  showSlidesPassport(slideIndexPassport = n);
}

function showSlidesPassport(n) {
  var i;
  var slides = $(".mySlides-passport");
  var dots = $(".dot-passport");
  if (n > slides.length) { slideIndexPassport = 1 }
  if (n < 1) { slideIndexPassport = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexPassport - 1].style.display = "block";
  dots[slideIndexPassport - 1].className += " active";
}


// pep-clideshow-js
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// national id slideshow js
var slideIndexID = 1;
showSlidesID(slideIndexID);

function plusSlidesID(n) {
  console.log('plusSlidesID');
  showSlidesID(slideIndexID += n);
}

function currentSlideID(n) {
  console.log('currentSlideID');
  showSlidesID(slideIndexID = n);
}

function showSlidesID(n) {
  var i;
  var slides = $(".mySlides-ID");
  var dots = $(".dot-ID");
  if (n > slides.length) { slideIndexID = 1 }
  if (n < 1) { slideIndexID = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexID - 1].style.display = "block";
  dots[slideIndexID - 1].className += " active";
}