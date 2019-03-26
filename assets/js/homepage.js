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

  new ScrollMagic.Scene({
    triggerElement: slides[0],
    duration: 1
  })
    .setPin(slides[0])
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: slides[1],
    duration: 300
  })
    .setPin(slides[1])
    .addTo(controller);

  // create a scene for every slide
  // slides.forEach((slide) => {
  //   let h = slide.clientHeight;
  //   console.log(slide.clientHeight);
  //   durat.push(h);
  // });
  // slides.forEach((slide, index) => {
  //   console.log(durat[index]);
  //   new ScrollMagic.Scene({
  //     triggerElement: slide,
  //     duration: durat[index]
  //   })
  //     .setPin(slide, {
  //       pushFollowers: false
  //     })
  //     .addTo(controller);
  // });

}

// if (index === 2) {
//   new ScrollMagic.Scene({
//     triggerElement: slide.get(index),
//     duration: durat[index]
//   })
//     .setPin(slide.get(index), {
//       pushFollowers: false
//     })
//     .addTo(controller);
// } else {
//   new ScrollMagic.Scene({
//     triggerElement: slide,
//   })
//     .setPin(slide)
//     .addTo(controller);
// }


document.addEventListener("DOMContentLoaded", init);

console.log('homepage js linked');