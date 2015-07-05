/*! alamaison - v1.0.0 - 2015-07-05 *//*! svg4everybody v1.0.0 | github.com/jonathantneal/svg4everybody */
(function(e,t,n,r,i){function s(t,n){if(n){var r=n.getAttribute("viewBox"),i=e.createDocumentFragment(),s=n.cloneNode(true);if(r){t.setAttribute("viewBox",r)}while(s.childNodes.length){i.appendChild(s.childNodes[0])}t.appendChild(i)}}function o(){var t=this,n=e.createElement("x"),r=t.s;n.innerHTML=t.responseText;t.onload=function(){r.splice(0).map(function(e){s(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})};t.onload()}function u(){var i;while(i=t[0]){var a=i.parentNode,f=i.getAttribute("xlink:href").split("#"),l=f[0],c=f[1];a.removeChild(i);if(l.length){var h=r[l]=r[l]||new XMLHttpRequest;if(!h.s){h.s=[];h.open("GET",l);h.onload=o;h.send()}h.s.push([a,c]);if(h.readyState===4){h.onload()}}else{s(a,e.getElementById(c))}}n(u)}if(i){u()}})(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent))
;'use strict';

function initialize() {

  var mapCanvas = document.getElementById('map-address');
  var position = new google.maps.LatLng(47.4584559, -0.269955);
  var mapOptions = {
    center: position,
    zoom: 16,
    draggable:true,
    animation: google.maps.Animation.DROP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    },
    scaleControl: true
  };
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: mapOptions['center'],
      map: map,
      title: 'A La Maison Du Bonheur'
  });

  // refresh to avoid gray area on window resize
  google.maps.event.trigger(map, 'resize');
  // center the map after resize or map zoom
  google.maps.event.addListener(mapCanvas, 'resize', function() {
    // 1 seconds after the center of the map has changed, pan back to the marker.
    // event: center_changed
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 1000);
  });

  // infowindows
  var contentString = '<div id="map-info">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="map-info-title">La Maison du Bonheur</h1>'+
      '<div id="map-info-content">'+
      '<p>Bienvenue à La Maison du Bonheur,<br>' +
      'Bienvenu chez vous. '+
      '</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  // infowindows on click
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  infowindow.open(map,marker);
  // google.maps.event.addDomListener(mapCanvas, 'resize', showAlert);

}


document.addEventListener('DOMContentLoaded', function(event) {

  // loads gmap
  google.maps.event.addDomListener(window, 'load', initialize);

  // on form submit
  var form = document.getElementById('contact-form');

  var nameField = document.getElementById('user-name');
  var fNameField = document.getElementById('user-first-name');
  var subjectField = document.getElementById('user-subject');
  var regName = '[a-zA-Z][a-zA-Z0-9-_\.]{2,20}';
  var emailField = document.getElementById('user-email');
  // not working so far; regex source: http://www.sitepoint.com/javascript-validate-email-address-regex/
  // var regEmail = '/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
  var messageField = document.getElementById('user-text-message');
  // botTest
  // @TODO: Make sure 0 never is never use
  var bootProof = document.getElementById('boot-proof');
  var operandOne = Math.floor(Math.random(1, 5) * 10);
  var operandTwo = Math.floor(Math.random(1, 5) * 10);
  var botTestResult = operandOne + operandTwo;
  bootProof.placeholder = operandOne + " + " + operandTwo + " = ?";

  var errors = [];

  // boot proof
  bootProof.addEventListener('blur', function(e){

    if (bootProof.value != botTestResult) {
      bootProof.classList.add('error');
      bootProof.classList.remove('validated');
      if(errors.indexOf('user-botProof-error') == -1) errors.push('user-botProof-error');
      bootProof.value = '';

    } else {
      bootProof.classList.remove('error');
      bootProof.classList.add('validated');
      errors = [];
      // document.querySelector('.user-botProof-error').classList.add('hidden');
      // console.log(errors);
    }

  });

  // message
  messageField.addEventListener('blur', function(e){

    if (messageField.value.length == 0) {
      messageField.classList.add('error');
      messageField.placeholder = "Merci de ne pas laisser ce champ vide.";
      if(errors.indexOf('user-text-message') == -1) errors.push('user-text-message');
      // document.querySelector('.user-text-message').classList.remove('hidden');
    } else {
      messageField.placeholder = "";
      messageField.classList.remove('error');
      messageField.classList.add('validated');
      // console.log(errors.indexOf('user-text-message'));
      errors = [];
      // document.querySelector('.user-text-message').classList.add('hidden');
      // console.log(errors);
    }

  });

  // name
  validateInput(nameField, 'user-name', regName, true, false);
  // first name
  validateInput(fNameField, 'user-first-name', regName, true, false);
  // subject
  validateInput(subjectField, 'user-subject', regName, true, false);
  // email
  validateInput(emailField, 'user-email', regName, true, false);

  // just to implement DRY
  function validateInput (element, eltClass, regexRule, handleErrorClass, resetValue) {

    element.addEventListener('change', function() {

      if(!element.value.match(regexRule)) {

        if (handleErrorClass === true) {
          element.classList.add('error');
          if (errors.indexOf(''+eltClass) == -1) errors.push(eltClass+'-error');
        }
        element.classList.remove('validated');

      } else {

        if (handleErrorClass === true) {
          element.classList.remove('error');
          errors = [];
        }
        element.classList.add('validated');
      }

    });

  }


  // form final validation
  form.addEventListener('submit', function(e){

    e.preventDefault();

    if (errors.length) {

      return false;
    } else {

      var formDatas = new FormData(this);
      // console.log(formDatas);
      var request = new XMLHttpRequest();
      request.open("POST", "handle-mail.php", true);
      request.onreadystatechange = function () {

        if (request.readyState != 4 || request.status != 200) return;

        var notifMsg = document.querySelector('.msg-notif'); // notification block
        var datas = JSON.parse(request.responseText);

        // in both case show the block
        if(notifMsg.classList.contains('hidden')) { notifMsg.classList.remove('hidden'); }

        if (datas.status) {

          if(notifMsg.classList.contains('error')) { notifMsg.classList.remove('error'); } // no collision
          notifMsg.querySelector('.text').innerHTML = datas.message;
          notifMsg.classList.add('success', 'animated');

          // reset form and remove validation classes
          resetForm(form, 'validated');
        } else {

          if(notifMsg.classList.contains('success')) { notifMsg.classList.remove('success'); } // no collision
          notifMsg.querySelector('.text').innerHTML = datas.message;
          notifMsg.classList.add('error', 'animated');
        }
        // Close
        notifMsg.querySelector('.close').addEventListener('click', function(evt){

            evt.preventDefault();
            notifMsg.classList.add('fadeOutBig', 'animated');
            notifMsg.classList.add('hidden');

            // window.setTimeout(funtion(){
            //   notifMsg.classList.remove('fadeOutBig');
            //   notifMsg.classList.add('hidden');
            // }, 500);
        });

      };
      request.send(formDatas);

      return false;
    }
  });

  // @TODO: reset robot check


  function resetForm(form, aClass) {

      var clearClass = (aClass.length > 0) ? true : false;
      // clearing inputs
      var inputs = form.getElementsByTagName('input');
      for (var i = 0; i<inputs.length; i++) {

          if (clearClass) {
            if (inputs[i].classList.contains('' + aClass)) inputs[i].classList.remove('' + aClass);
          }
          switch (inputs[i].type) {
              // case 'hidden':
              case 'text':
              case 'email':
              case 'number':
                  inputs[i].value = '';
                  break;
              case 'radio':
              case 'checkbox':
                  inputs[i].checked = false;
          }
      }

      // clearing selects
      var selects = form.getElementsByTagName('select');
      for (var i = 0; i<selects.length; i++) {
          selects[i].selectedIndex = 0;
          if (selects[i].classList.contains('' + aClass)) selects[i].classList.remove('' + aClass);
      }

      // clearing textarea
      var text= form.getElementsByTagName('textarea');
      for (var i = 0; i<text.length; i++) {
          if (text[i].classList.contains('' + aClass)) text[i].classList.remove('' + aClass);
          text[i].value= '';
      }

      return false;
  }

});
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
