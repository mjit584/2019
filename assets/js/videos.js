// Video go dark settings live here
var videoTop;
var videoHeight;
var windowWidth;
$(document).ready(function () {
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('iframe').outerHeight();
  $(window).scroll(function (event) {
    if (windowWidth > 1240) {
      goDark();
    }
  })
});

$(window).resize(function () {
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('iframe').outerHeight();
  if (windowWidth > 1240) {
    goDark();
  } else {
    $('.story-page').css('background-color', '#fff')
    $('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity', '1')
  }
});

function goDark() {
  var scrollTop = $(this).scrollTop();
  // console.log(scrollTop)
  if (scrollTop >= videoTop - (videoHeight / 2) && scrollTop <= videoTop + (videoHeight / 10)) {
    $('body').css('background-color', '#000')
    $('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity', '0')
  } else if (scrollTop > videoTop + (videoHeight / 10)) {
    $('body').css('background-color', '#fff')
    $('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity', '1')
  } else if (scrollTop < videoTop - (videoHeight / 2)) {
    $('body').css('background-color', '#fff')
    $('p, h1, h2, h3, h4, h5, h6, .story-byline, .story-hero, .ybr-line').css('opacity', '1')
  };
};