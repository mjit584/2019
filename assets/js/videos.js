// Videos JS

// console.log('videos.js is loaded');

// Video go dark settings live here
var videoTop;
var videoHeight;
var windowWidth;

windowWidth = $(window).width();
videoTop = $('#video-top').offset().top;
console.log(videoTop);
videoHeight = $('iframe').outerHeight();
console.log(videoHeight);
$(window).scroll(function (event) {
  if (windowWidth > 1240) {
    var controller = new ScrollMagic.Controller();
    var goDarkText = new ScrollMagic.Scene({
      triggerElement: "#video-top",
      triggerHook: 0,
      duration: "40%"
    })
      .setClassToggle('p, h1, h2, h3, h4, h5, h6, .interactive, .flourish, .story__subhead, .byline, .story-hero, .photo-hero, .ybr-line', 'no-show')
      .addTo(controller);

    var goDarkBody = new ScrollMagic.Scene({
      triggerElement: "#video-top",
      triggerHook: 0,
      duration: "40%"
    })
      .setClassToggle('body', 'black')
      .addTo(controller);
  }
})

$(window).resize(function () {
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('iframe').outerHeight();
  if (windowWidth > 1240) {
    var controller = new ScrollMagic.Controller();
    var goDarkText = new ScrollMagic.Scene({
      triggerElement: "#video-top",
      triggerHook: 0,
      duration: "40%"
    })
      .setClassToggle('p, h1, h2, h3, h4, h5, h6, .interactive, .flourish, .story__subhead, .byline, .story-hero, .photo-hero, .ybr-line', 'no-show')
      .addTo(controller);

    var goDarkBody = new ScrollMagic.Scene({
      triggerElement: "#video-top",
      triggerHook: 0,
      duration: "40%"
    })
      .setClassToggle('body', 'black')
      .addTo(controller);
  }
});

