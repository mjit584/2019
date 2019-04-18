
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
}

document.addEventListener("DOMContentLoaded", init);

console.log('homepage js linked');