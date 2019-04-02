
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
  triggerElement: '#text__two',
  triggerHook: 0.4
})
  .setPin('#intro', { pushFollowers: false })
  .addTo(controller);


// Loop through each body element
$('.scrollytelly__body').each(function () {
  var ourScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    duration: '80%',
    triggerHook: 0.8
  })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
});
