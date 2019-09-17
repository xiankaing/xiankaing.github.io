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

(function ($) {
  "use strict"; // Start of use strict

  $('.match-form').find('input[type=checkbox]').click(function () {
    var numBoxes = $('.match-form').find('input[type=checkbox]').length;
    var numChecked = $('.match-form').find('input[type=checkbox]:checked').length;
    console.log(numChecked, numBoxes)
    var current_progress = (100*numChecked/numBoxes).toFixed(0);
    var matchText = current_progress + "% match ";
    if (current_progress < 30) {
      matchText +=  "😢"
    } else if (current_progress < 60) {
      matchText +=  "😞"
    } else if (current_progress < 100) {
      matchText +=  "😊"
    } else {
      matchText +=  "😄"
    }

    $("#match-score")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(matchText);
  });

  // open resume.pdf when resume on navbar is clicked on; so that the a's href can remain #resume
  $('#resume-nav-link').click(function() {
    window.open('/static/resume.pdf', '_blank');
  });

  $('#resume-link').text(window.location.hostname + "/static/resume.pdf");

})(jQuery); // End of use strict
