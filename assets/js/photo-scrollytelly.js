
//USE SCROLL MAGIC 
var ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

// Create scene
$("section").each(function () {

  new ScrollMagic.Scene({
    triggerElement: this,
    duration: '50%'
  })
    .setPin(this)
    .addTo(ctrl);
});