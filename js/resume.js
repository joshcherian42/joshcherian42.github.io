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
        }, 1000, "easeInOutExpo");
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

  $('.showabstract').click(function() {
    var id = $(this).attr('id')
    switch(id){
      case 'thesis_abstract':
        jQuery('#thesis_content').toggle('show');
        break;
      case 'tapia_abstract':
        jQuery('#tapia_content').toggle('show');
        break;
      case 'pervasive_abstract':
        jQuery('#pervasive_content').toggle('show');
        break;
      case 'iui_abstract':
        jQuery('#iui_content').toggle('show');
        break;
      case 'visualeyeze_abstract':
        jQuery('#visualeyeze_content').toggle('show');
        break;
      case 'tiis_acc_abstract':
        jQuery('#tiis_acc_content').toggle('show');
        break;
      case 'tiis_emoji_abstract':
        jQuery('#tiis_emoji_content').toggle('show');
        break;
      case 'aaai19_abstract':
        jQuery('#aaai19_content').toggle('show');
        break;
      case 'chiplay19_abstract':
        jQuery('#chiplay19_content').toggle('show');
        break;
      case 'iui21_abstract':
        jQuery('#iui21_content').toggle('show');
        break;
      case 'chi21_abstract':
        jQuery('#chi21_content').toggle('show');
        break;
      case 'iui22_abstract':
        jQuery('#iui22_content').toggle('show');
        break;
      case 'geog21_abstract':
        jQuery('#geog21_content').toggle('show');
        break;
      case 'stem21_abstract':
        jQuery('#stem21_content').toggle('show');
        break;
      case 'chi23_blind_abstract':
        jQuery('#chi23_blind_content').toggle('show');
        break;
      case 'chi23_creativity_abstract':
        jQuery('#chi23_creativity_content').toggle('show');
        break;
      case 'iui23_mci_abstract':
        jQuery('#iui23_mci_content').toggle('show');
        break;
      case 'iui23_on_the_fly_abstract':
        jQuery('#iui23_on_the_fly_content').toggle('show');
        break;
      case 'iui23_chemisketch_abstract':
        jQuery('#iui23_chemisketch_content').toggle('show');
        break;
      case 'ieee_te22_abstract':
        jQuery('#ieee_te22_content').toggle('show');
        break;
        
    }
  });

})(jQuery); // End of use strict
