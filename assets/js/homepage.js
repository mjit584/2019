// Homepage js

if ($(window).width() < 800) { $('#fullpage').removeAttr('id'); };

new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  anchors: ['firstPage', 'secondPage', 'thirdPage']
});

console.log('homepage js linked');