// Econ Interactive JS

// console.log('econ-int.js is loaded');

// Add microinteractions with the bolivar timeline

var controller = new ScrollMagic.Controller();

$('.left').each(function () {
  var slideLeft = new ScrollMagic.Scene({
    triggerElement: '#bolivar-timeline',
    triggerHook: 0,
    reverse: false,
  })
    .setClassToggle(this, 'fadeInLeft')
    .addTo(controller);
});

$('.right').each(function () {
  var slideRight = new ScrollMagic.Scene({
    triggerElement: '#bolivar-timeline',
    triggerHook: 0,
    reverse: false,
  })
    .setClassToggle(this, 'fadeInRight')
    .addTo(controller);
});

//loop through each .project element
$('.timeline-content').each(function () {
  var econScene = new ScrollMagic.Scene({
    triggerElement: '#bolivar-timeline',
    triggerHook: 0,
    reverse: false,
  })
    .setClassToggle(this, 'animated')
    .addTo(controller);
});

