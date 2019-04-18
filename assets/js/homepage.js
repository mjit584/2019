
// Homepage js

let init = function () {
  console.log("init called");

  // SCROLLMAGIC

  // Natural screen wipes using example code: http://scrollmagic.io/examples/basic/section_wipes_natural.html

  // init controller
  // let controller = new ScrollMagic.Controller({
  //   globalSceneOptions: {
  //     triggerHook: 'onLeave'
  //   }
  // });

  // get all slides
  // let slides = document.querySelectorAll("section.panel");

  // let scene1 = new ScrollMagic.Scene({
  //   triggerElement: slides[0],
  //   duration: 1
  // })
  //   .setPin(slides[0], { pushFollowers: false })
  //   .addTo(controller);

  // let scene2 = new ScrollMagic.Scene({
  //   triggerElement: slides[1],
  //   duration: 300
  // })
  //   .setPin(slides[1], { pushFollowers: false })
  //   .addTo(controller);

  // controller.scrollPos(function () {
  //   if (window.innerWidth >= 800) {
  //     return window.pageYOffset;
  //   } else {
  //     return 0;
  //   }
  // });

  // Kill scrollmagic on mobile

  var tooSmall = false;
  var controller = null;
  var maxWidth = 800; // or whatever your max width is

  if ($(window).width() < maxWidth) {
    tooSmall = true;
  }

  function initScrollMagic() {
    $('body').scrollTop(0);
    controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });
    let slides = document.querySelectorAll("section.panel");

    let scene1 = new ScrollMagic.Scene({
      triggerElement: slides[0],
      duration: 1
    })
      .setPin(slides[0], { pushFollowers: false })
      .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
      triggerElement: slides[1],
      duration: 300
    })
      .setPin(slides[1], { pushFollowers: false })
      .addTo(controller);

    controller.scrollPos(function () {
      return window.pageYOffset;
    });
  }

  if (!tooSmall) {
    initScrollMagic();
  }

  // part of the problem is that window resizes can trigger multiple times as the events fire rapidly
  // this solution prevents the controller from being initialized/destroyed more than once
  $(window).resize(function () {
    var wWidth = $(window).width();
    if (wWidth < maxWidth) {
      if (controller !== null && controller !== undefined) {
        // completely destroy the controller
        controller = controller.destroy(true);
        // if needed, use jQuery to manually remove styles added to DOM elements by GSAP etc. here
      }
    } else if (wWidth >= maxWidth) {
      if (controller === null || controller === undefined) {
        // reinitialize ScrollMagic only if it is not already initialized
        initScrollMagic();
      }
    }
  });

  // Home about video go dark settings
  let videoTop;
  let videoHeight;
  let windowWidth;
  windowWidth = $(window).width();
  videoTop = $('#video-top').offset().top;
  videoHeight = $('iframe').outerHeight();
  $(window).scroll(function (event) {
    if (windowWidth > 1240) {
      goDark();
    }
  })

  $(window).resize(function () {
    windowWidth = $(window).width();
    videoTop = $('#video-top').offset().top;
    videoHeight = $('iframe').outerHeight();
    if (windowWidth > 1240) {
      goDark();
    } else {
      $('.home').css('background-color', '#fff')
      $('p, h1, h2, h3, h4, h5, h6, footer, .about-help').css('opacity', '1')
    }
  });

  function goDark() {
    var scrollTop = $(this).scrollTop();
    // console.log(scrollTop)
    if (scrollTop >= videoTop - (videoHeight / 2) && scrollTop <= videoTop + (videoHeight / 10)) {
      $('#home__about').css('background-color', '#000')
      $('p, h1, h2, h3, h4, h5, h6, footer, .about-help').css('opacity', '0')
    } else if (scrollTop > videoTop + (videoHeight / 10)) {
      $('#home__about').css('background-color', '#fff')
      $('p, h1, h2, h3, h4, h5, h6, footer, .about-help').css('opacity', '1')
    } else if (scrollTop < videoTop - (videoHeight / 2)) {
      $('#home__about').css('background-color', '#fff')
      $('p, h1, h2, h3, h4, h5, h6, footer, .about-help').css('opacity', '1')
    };
  };
}

document.addEventListener("DOMContentLoaded", init);

console.log('homepage js linked');