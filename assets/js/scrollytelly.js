
// Initialize Scroll Magic controller
console.log('Scroll Magic');


// init
var controller = new ScrollMagic.Controller();

// Loop through each body element
$('.scrollytelly__body').each(function () {
  var ourScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    triggerHook: 0.5,
    reverse: false
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
