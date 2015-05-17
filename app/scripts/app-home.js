'use strict';

// jQuery(document).ready( function() {

    // jQuery('.js-slides').bxSlider({
    //   adaptiveHeight: true, // Dynamically adjust slider height based on each slide's height
    //   auto: true, // Slides will automatically transition
    //   autoControls: false,
    //   autoDelay: 0, // Time (in ms) auto show should wait before starting
    //   controls: true,
    //   autoHover: true, // Auto show will pause when mouse hovers over slider
    //   easing: 'ease-in-out',
    //   mode: 'horizontal', // Type of transition between slides
    //   pager: true,
    //   pagerType: 'full',
    //   prevSelector: jQuery('#prev-slide'),
    //   nextSelector: '#next-slide',
    //   // prevText: 'text-prev',
    //   // nextText: 'text-next'
    // });

  // if ($('.js-slides.lazyload').length < 1 ) { slides.startAuto(); }

  // var mySwiper = new Swiper ('.swiper-wrapper', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  //
  //   // If we need pagination
  //   pagination: '.swiper-pagination',
  //
  //   // Navigation arrows
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
  //
  //   // And if we need scrollbar
  //   scrollbar: '.swiper-scrollbar',
  // });

// });

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

document.addEventListener('DOMContentLoaded', function() {

  // Lazyload all images and avoid blank images when windows is not fully loaded
  window.lazySizes.init();

  // swiper
  var mySwiper = new Swiper (document.querySelector('.swiper-container'), {
    // effect: 'fade',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    // autoplay
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true, //screw IE9

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',
  });

});
