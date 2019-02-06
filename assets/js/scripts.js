$(function () {
  console.log('Hello world');
});

/**write conditional logic statement that adds the class .active to a span if the parent a href's matches the section's id, else, remove the class .active  */

/** write a function when on hover of a span, there will be a tooltip that reads out the data-tooltip */

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}
