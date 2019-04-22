// Health Interactive JS

// console.log('health-int.js is loaded');

$("#card1-button").mouseenter(function () {
  $(".card1-hidden").fadeIn(300);
});

$("#card1-body").mouseleave(function () {
  $(".card1-hidden").fadeOut(300);
});

$("#card2-button").mouseenter(function () {
  $(".card2-hidden").fadeIn(300);
});

$("#card2-body").mouseleave(function () {
  $(".card2-hidden").fadeOut(300);
});
