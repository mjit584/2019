
// Initialize Scroll Magic controller
console.log('Scroll Magic');


// init
var controller = new ScrollMagic.Controller();

//pin the intro
var pinIntroScene = new ScrollMagic.Scene({
  triggerElement: '#scrollytelly-1',
  triggerHook: 0,
  duration: '40%'
})
  .setPin('#scrollytelly-1', { pushFollowers: false })
  .addTo(controller);


// Loop through each body element
$('.scrollytelly__body').each(function () {
  var ourScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    duration: '40%',
    triggerHook: 0.5,
  })
    .setClassToggle(this, 'fade-in')
    .addTo(controller);
});
