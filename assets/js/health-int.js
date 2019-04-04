
// Health interactive
console.log('script start');

$("#learn-more-sh").click(function () {
  $(".sh-hidden").fadeIn(300);
  $(".sh-hidden").css("display", "flex");
});

$("#card-back-sh-close").click(function () {
  $(".sh-hidden").fadeOut(300);
});

$("#learn-more-ch").click(function () {
  $(".ch-hidden").fadeIn(300);
  $(".ch-hidden").css("display", "flex");
});

$("#card-back-ch-close").click(function () {
  $(".ch-hidden").fadeOut(300);
});
