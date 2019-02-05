$(function () {
  console.log('Hello world');
});

//variables

/**
 * Activating the website navigation dots according to the given slide name.
 */
function activateNavDots(name, sectionIndex) {
  if (options.navigation) {
    $('#nav-home').find('.active').removeClass('active');
    if (name) {
      $('#nav-home').find('a[href="#' + name + '"]').addClass('active');
    } else {
      $('#nav-home').find('li').eq(sectionIndex).find('a').addClass('active');
    }
  }
}

/**
 * Activating the website main menu elements according to the given slide name.
 */
function activateMenuElement(name) {
  if (options.menu) {
    $(options.menu).find('.active').removeClass('active');
    $(options.menu).find('[data-menuanchor="' + name + '"]').addClass('active');
  }
}