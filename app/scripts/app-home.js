'use strict';

jQuery(document).ready( function() {

    jQuery('.js-slides').bxSlider({
      adaptiveHeight: false, // Dynamically adjust slider height based on each slide's height
      auto: true, // Slides will automatically transition
      autoControls: false,
      autoDelay: 0, // Time (in ms) auto show should wait before starting
      controls: true,
      autoHover: true, // Auto show will pause when mouse hovers over slider
      easing: 'ease-in-out',
      mode: 'horizontal', // Type of transition between slides
      pager: true,
      pagerType: 'full',
      prevText: '',
      nextText: '',
      prevSelector: jQuery('prev-slide'),
      nextSelector: '#next-slide'
    });

  // if ($('.js-slides.lazyload').length < 1 ) { slides.startAuto(); }

});
