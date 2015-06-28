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

  // footer links
  // @TODO: create function

  // function footerLink(element) {
  //
  //   document.getElementById(element.id).addEventListener('click', function(e) {
  //
  //     e.preventDefault();
  //     var elementClass = (e.target.id+'').replace('-link', '');
  //     var elementContent = document.querySelector('.'+elementClass);
  //
  //     //  Object to Array
  //     var footerElements = Array.prototype.slice.call(elementContent.parentNode.children);
  //
  //     // remove visible element
  //     if (document.querySelector('.is-visible') !== null) {
  //
  //       console.log(document.querySelector('.is-visible'));
  //       document.querySelector('.is-visible').classList.add('fadeOutDown', 'animated', 'hidden');
  //       document.querySelector('.is-visible').classList.remove('fadeInDown', 'fadeOutDown', 'is-visible');
  //     }
  //
  //     // show the hidden link
  //     if (elementContent.classList.contains('hidden')) {
  //
  //       elementContent.classList.remove('hidden', 'fadeOutDown');
  //       elementContent.classList.add('fadeInDown', 'animated', 'is-visible');
  //     }
  //
  //   });
  //
  // }
  //
  // // links
  // // imprint
  // footerLink(document.getElementById('js-imprint-link'));
  // // useful links
  // footerLink(document.getElementById('js-useful-infos-link'));
  //
  // // handle animation
  // document.addEventListener('animationend', function(e) {
  //
  //   var animation = e;
  //   animation.target.classList.remove('animated');
  // });
  // document.addEventListener('webkitAnimationEnd', function(e) {
  //
  //   var animation = e;
  //   animation.target.classList.remove('animated');
  // });

});
