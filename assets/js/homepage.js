// Homepage js

let init = function () {
  console.log("init called");

  // SCROLLMAGIC

  // Natural screen wipes using example code: http://scrollmagic.io/examples/basic/section_wipes_natural.html

  // init controller
  let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // get all slides
  let slides = document.querySelectorAll("section.panel");

  // create a scene for every slide
  slides.forEach((slide) => {
    new ScrollMagic.Scene({
      triggerElement: slide
    })
      .setPin(slide)
      .addTo(controller);
  });

}

document.addEventListener("DOMContentLoaded", init);

console.log('homepage js linked');