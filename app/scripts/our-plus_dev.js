/*! alamaison - v1.0.0 - 2015-06-28 *//*! svg4everybody v1.0.0 | github.com/jonathantneal/svg4everybody */
(function(e,t,n,r,i){function s(t,n){if(n){var r=n.getAttribute("viewBox"),i=e.createDocumentFragment(),s=n.cloneNode(true);if(r){t.setAttribute("viewBox",r)}while(s.childNodes.length){i.appendChild(s.childNodes[0])}t.appendChild(i)}}function o(){var t=this,n=e.createElement("x"),r=t.s;n.innerHTML=t.responseText;t.onload=function(){r.splice(0).map(function(e){s(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})};t.onload()}function u(){var i;while(i=t[0]){var a=i.parentNode,f=i.getAttribute("xlink:href").split("#"),l=f[0],c=f[1];a.removeChild(i);if(l.length){var h=r[l]=r[l]||new XMLHttpRequest;if(!h.s){h.s=[];h.open("GET",l);h.onload=o;h.send()}h.s.push([a,c]);if(h.readyState===4){h.onload()}}else{s(a,e.getElementById(c))}}n(u)}if(i){u()}})(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent))
;'use strict';

// jQuery(document).ready( function() {
// });
;'use strict';

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
