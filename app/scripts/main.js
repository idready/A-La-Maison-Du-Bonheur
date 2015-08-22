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
  // footer links
  // @TODO: create function

    var animation = e;
    animation.target.classList.remove('animated');
  });
  document.addEventListener('webkitAnimationEnd', function(e) {

    var animation = e;
    animation.target.classList.remove('animated');
  });


});
