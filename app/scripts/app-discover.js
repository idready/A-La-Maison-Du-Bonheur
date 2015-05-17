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
  
});
