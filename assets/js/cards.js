// Cards JS

// console.log('cards.js is loaded');

// Add hovered class to a card when it's hovered, remove when it is no longer hovered
$('.card').hover(
  function () {
    $(this).toggleClass('hovered');
  },
  function () {
    $(this).toggleClass('hovered');
  }
)

// Add darkened class when any cards are hovered, remove when no cards are hovered
$('.cards').hover(
  function () {
    $(this).toggleClass('darkened')
  },
  function () {
    $(this).toggleClass('darkened');
  }
)
