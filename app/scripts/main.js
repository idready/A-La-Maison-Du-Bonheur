'use strict';

// Viewport bugfix for IE10 on Windows 8 & W8 Phone (< update 3)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  );
  document.querySelector('head').appendChild(msViewportStyle);
}

// Lazysizes config && picture element pollyfill

window.lazySizesConfig = window.lazySizesConfig || {};

window.lazySizesConfig = {
  autosizesClass: 'lazyautosizes',
  ObjecterrorClass: 'lazyerror',
  expFactor: 4, // default 2
  expand: 0, // default 300
  init: false,
  lazyClass: 'lazyload',
  loadMode: 1, //default 3
  loadedClass: 'lazyloaded',
  loadingClass: 'lazyloading',
  minSize: 50,
  preloadClass: 'lazypreload',
  sizesAttr: 'data-sizes',
  srcAttr: 'data-src',
  srcsetAttr: 'data-srcset'
};




jQuery(document).ready( function() {

  var slides = $('.js-slides').bxSlider({
    adaptiveHeight: false, // Dynamically adjust slider height based on each slide's height
    auto: true, // Slides will automatically transition
    autoControls: false,
    autoDelay: 0, // Time (in ms) auto show should wait before starting
    controls: false,
    autoHover: true, // Auto show will pause when mouse hovers over slider
    easing: 'ease-in-out',
    mode: 'horizontal', // Type of transition between slides
    pager: true,
    pagerType: 'full'
    // prevSelector: jQueryElement,
    // nextSelector: jQueryElement,
  });

  if ($('.js-slides .lazyload').length < 1 ) { slides.startAuto(); }

  // Handle animations by removing animated classes once animation is completed
  jQuery(document).on('animationend, webkitAnimationEnd', function(e) {

    // console.log(e);
    var animation = (jQuery(e.target).hasClass('animated')) ? jQuery(e.target).removeClass('animated') : '';
    console.log(animation);

  });

});
