
// Initialize Scroll Magic controller
console.log('Scroll Magic');


// init
var controller = new ScrollMagic.Controller();

//pin the intro
var pinIntroScene = new ScrollMagic.Scene({
  triggerElement: '#scrollytelly-1',
  triggerHook: 0,
  duration: 10
})
  .setPin('#scrollytelly-1', { pushfollowers: false })
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

function showBubble(ID) {
  var x = document.getElementById(ID);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
