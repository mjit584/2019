
// Health interactive
console.log('script start');

$("#card-sh").mouseenter(function () {
  $(".sh-hidden").fadeIn(300);
  $(".sh-hidden").css("display", "flex");
});

$("#card-back-body-sh").mouseleave(function () {
  $(".sh-hidden").fadeOut(300);
});

$("#card-ch").mouseenter(function () {
  $(".ch-hidden").fadeIn(300);
  $(".ch-hidden").css("display", "flex");
});

$("#card-back-body-ch").mouseleave(function () {
  $(".ch-hidden").fadeOut(300);
});
