// Scrollytelly JS

// console.log('scrollytelly.js is loaded');

// Initialize Scroll Magic controller
console.log('Scroll Magic');


// init
var controller = new ScrollMagic.Controller();

//pin the intro
var pinIntroScene = new ScrollMagic.Scene({
  triggerElement: '#intro',
  triggerHook: 0,
  duration: '30%'
})
  .setPin('#intro', { pushFollowers: false })
  .addTo(controller);


var pinIntroScene2 = new ScrollMagic.Scene({
  triggerElement: '#scrollytelly__title',
  triggerHook: 0.4
})
  .setPin('#intro', { pushFollowers: false })
  .addTo(controller);


//loop through each .project element
$('.scrollytelly__body').each(function () {
  var ourScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    triggerHook: 0.8,
  })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
});

function showBubble(ID) {
  var x = document.getElementById(ID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
