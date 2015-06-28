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
  var mySwiper = new Swiper (document.querySelector('.js-rooms-gallery'), {

    preloadImages: false,
    // effect: 'fade',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    // autoplay
    // autoplay: 7000,
    autoplayDisableOnInteraction: false,
    // Optional parameters
    direction: 'horizontal',
    loop: false, //screw IE9

    simulateTouch: false, // no need to add swipe event
    // If we need pagination
    // pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '#js-second-room',
    prevButton: '#js-first-room',

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',

  });

  var firstRoomSwiper = new Swiper (document.querySelector('.js-first-rooms-gallery'), {

    preloadImages: false,
    // effect: 'fade',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    // autoplay
    // autoplay: 7000,
    autoplayDisableOnInteraction: false,
    // Optional parameters
    direction: 'horizontal',
    loop: false, //screw IE9

    grabCursor: true, // usability, user will have a grab cursor

    simulateTouch: false, // no need to add swipe event
    // If we need pagination
    pagination: '.first-room-pagination',

    // Navigation arrows
    nextButton: '.first-room-button-next',
    prevButton: '.first-room-button-prev',

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',

    // animation and only display control once swiper loads
    onInit: function() {

      window.setTimeout(function(){
        document.querySelector('.first-room-pagination').classList.remove('hidden');
        document.querySelector('.first-room-pagination').classList.add('fadeInUp', 'animated');
        document.querySelector('.first-room-button-prev').classList.remove('hidden');
        document.querySelector('.first-room-button-prev').classList.add('fadeInDown', 'animated');
        document.querySelector('.first-room-button-next').classList.remove('hidden');
        document.querySelector('.first-room-button-next').classList.add('fadeInDown', 'animated');
      }, 1000);
   }

  });

  var secondRoomSwiper = new Swiper (document.querySelector('.js-second-rooms-gallery'), {

    preloadImages: false,
    // effect: 'fade',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    // autoplay
    // autoplay: 7000,
    autoplayDisableOnInteraction: false,
    // Optional parameters
    direction: 'horizontal',
    loop: false, //screw IE9

    grabCursor: true, // usability, user will have a grab cursor

    simulateTouch: false, // no need to add swipe event
    // If we need pagination
    pagination: '.second-room-pagination',

    // Navigation arrows
    nextButton: '.second-room-button-next',
    prevButton: '.second-room-button-prev',

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',

    // animation and only display control once swiper loads
    onInit: function() {

      window.setTimeout(function(){
        document.querySelector('.second-room-pagination').classList.remove('hidden');
        document.querySelector('.second-room-pagination').classList.add('fadeInUp', 'animated');
        document.querySelector('.second-room-button-prev').classList.remove('hidden');
        document.querySelector('.second-room-button-prev').classList.add('fadeInDown', 'animated');
        document.querySelector('.second-room-button-next').classList.remove('hidden');
        document.querySelector('.second-room-button-next').classList.add('fadeInDown', 'animated');
      }, 1000);
   }

  });


});
