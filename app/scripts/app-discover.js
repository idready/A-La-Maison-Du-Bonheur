'use strict';

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

    // initialSlide: Math.floor( Math.random(0, 3) ),
    // effect: 'fade', //@TODO find out why fade effect is not working
    preloadImages: false,
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    // autoplay
    autoplay: 7000,
    autoplayDisableOnInteraction: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true, //screw IE9

    simulateTouch: false, // no need to add swipe event
    // If we need pagination
    // pagination: '.swiper-pagination',

    // Navigation arrows
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    wrapperClass: 'swiper-wrapper',

    // onInit: function () {
    //   console.log('init');
    //   console.log(this);
    // },
    // onAutoplayStop: function() {
    //   console.log('auto played');
    // }
  });

});
