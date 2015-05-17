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

document.addEventListener('DOMContentLoaded', function() {

  // handle animation
  document.addEventListener('animationend', function(e) {

    var animation = e;
    animation.target.classList.remove('animated');
  });
  document.addEventListener('webkitAnimationEnd', function(e) {

    var animation = e;
    animation.target.classList.remove('animated');
  });

});

// jQuery(document).ready( function() {
//
//   // Handle animations by removing animated classes once animation is completed
//   jQuery(document).on('animationend, webkitAnimationEnd', function(e) {
//
//     console.log(e);
//     var animation = (jQuery(e.target).hasClass('animated')) ? jQuery(e.target).removeClass('animated') : '';
//     console.log(animation);
//
//   });
//
// });
