
// // Video go dark settings live here
// var videoTop;
// var videoHeight;
// var windowWidth;

// windowWidth = $(window).width();
// videoTop = $('#video-top').offset().top;
// console.log(videoTop);
// videoHeight = $('iframe').outerHeight();
// console.log(videoHeight);
// $(window).scroll(function (event) {
//   if (windowWidth > 1240) {
//     goDark();
//   }
// })

// $(window).resize(function () {
//   windowWidth = $(window).width();
//   videoTop = $('#video-top').offset().top;
//   videoHeight = $('iframe').outerHeight();
//   if (windowWidth > 1240) {
//     goDark();
//   } else {
//     $('body').css('background-color', '#fff');
//     $('p, h1, h2, h3, h4, h5, h6, .interactive, .flourish, .story__subhead, .byline, .story-hero, .photo-hero, .ybr-line').css('opacity', '1');
//   }
// });

// function goDark() {
//   var scrollTop = $(this).scrollTop();
//   console.log(scrollTop)
//   if (scrollTop >= videoTop - (videoHeight / 2) && scrollTop <= videoTop + (videoHeight / 10)) {
//     $('body').css('background-color', '#000');
//     $('p, h1, h2, h3, h4, h5, h6, .interactive, .flourish, .story__subhead, .byline, .story-hero, .photo-hero, .ybr-line').css('opacity', '0');
//   } else if (scrollTop > videoTop + (videoHeight / 10)) {
//     $('body').css('background-color', '#fff');
//     $('p, h1, h2, h3, h4, h5, h6, .interactive, .flourish, .story__subhead, .byline, .story-hero, .photo-hero, .ybr-line').css('opacity', '1');
//   } else if (scrollTop < videoTop - (videoHeight / 2)) {
//     $('body').css('background-color', '#fff');
//     $('p, h1, h2, h3, h4, h5, h6, .interactive, .flourish, .story__subhead, .byline, .story-hero, .photo-hero, .ybr-line').css('opacity', '1');
//   };
// };

function lightsDown() {
  $('body').toggleClass('black');
  $('p, h1, h2, h3, h4, h5, h6, .interactive, .flourish, .story__subhead, .byline, .story-hero, .photo-hero, .ybr-line').toggleClass('no-show');
  btn = document.getElementById("lights-down");
  if (btn.innerHTML === "Lights Down") {
    btn.innerHTML = "Lights Up";
  } else {
    btn.innerHTML = "Lights Down";
  }
}
