'use strict';

// jQuery(document).ready( function() {});

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
    preloadImages: false,
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    // autoplay
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    // Optional parameters
    direction: 'horizontal',
    loop: false, //screw IE9

    grabCursor: true, // usability, user will have a grab cursor

    // watchSlidesProgress: true,
    // watchSlidesVisibility: true, // add additional class to visible slides

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',

    // animation and only display control once swiper loads
    onInit: function() {

      document.querySelector('.swiper-pagination').classList.remove('hidden');
      document.querySelector('.swiper-pagination').classList.add('fadeInUp', 'animated');
      document.querySelector('.swiper-button-prev').classList.remove('hidden');
      document.querySelector('.swiper-button-prev').classList.add('fadeInDown', 'animated');
      document.querySelector('.swiper-button-next').classList.remove('hidden');
      document.querySelector('.swiper-button-next').classList.add('fadeInDown', 'animated');
   }

  });

  mySwiper.onResize(function(){
    console.log('heh');
  });


});
