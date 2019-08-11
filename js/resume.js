(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('.match-form').find('input[type=checkbox]').click(function () {
    var numBoxes = $('.match-form').find('input[type=checkbox]').length;
    var numChecked = $('.match-form').find('input[type=checkbox]:checked').length;
    console.log(numChecked, numBoxes)
    var current_progress = (100*numChecked/numBoxes).toFixed(0);
    $("#match-score")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% match");
  });

})(jQuery); // End of use strict
