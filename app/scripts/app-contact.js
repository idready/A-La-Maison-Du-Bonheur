'use strict';

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
  var bootProof = document.getElementById('boot-proof');
  var operandOne = Math.floor(Math.random(1, 5) * 10);
  var operandTwo = Math.floor(Math.random(1, 5) * 10);
  var botTestResult = operandOne + operandTwo;
  bootProof.placeholder = operandOne + " + " + operandTwo + " = ?";

  var errors = [];

  // controls

  // first name
  // fNameField.addEventListener('blur', function(e){
  //
  //   if (!fNameField.value.match(regName)) {
  //     // fNameField.classList.add('error');
  //     fNameField.classList.remove('validated');
  //     // if(errors.indexOf('user-first-name') == -1) errors.push('user-first-name');
  //     // document.querySelector('.user-first-name').classList.remove('hidden');
  //   } else {
  //     // fNameField.classList.remove('error');
  //     fNameField.classList.add('validated');
  //     errors = [];
  //     // document.querySelector('.user-first-name').classList.add('hidden');
  //     // console.log(errors);
  //   }
  //
  // });

  // first name
  // fNameField.addEventListener('blur', function(e){
  //
  //   if (!fNameField.value.match(regName)) {
  //     // fNameField.classList.add('error');
  //     fNameField.classList.remove('validated');
  //     // if(errors.indexOf('user-first-name') == -1) errors.push('user-first-name');
  //     // document.querySelector('.user-first-name').classList.remove('hidden');
  //   } else {
  //     // fNameField.classList.remove('error');
  //     fNameField.classList.add('validated');
  //     errors = [];
  //     // document.querySelector('.user-first-name').classList.add('hidden');
  //     // console.log(errors);
  //   }
  //
  // });

  // name
  // nameField.addEventListener('blur', function(e){
  //
  //   if (!nameField.value.match(regName)) {
  //     nameField.classList.add('error');
  //     nameField.classList.remove('validated');
  //     if(errors.indexOf('user-name-error') == -1) errors.push('user-name-error');
  //     // document.querySelector('.user-name-error').classList.remove('hidden');
  //   } else {
  //     nameField.classList.remove('error');
  //     nameField.classList.add('validated');
  //     errors = [];
  //     // document.querySelector('.user-name-error').classList.add('hidden');
  //     // console.log(errors);
  //   }
  //
  // });

  // subject
  // subjectField.addEventListener('blur', function(e){
  //
  //   if (!subjectField.value.match(regName)) {
  //     // subjectField.classList.add('error');
  //     subjectField.classList.remove('validated');
  //     // if(errors.indexOf('user-subject') == -1) errors.push('user-subject');
  //     // document.querySelector('.user-subject').classList.remove('hidden');
  //   } else {
  //     // subjectField.classList.remove('error');
  //     subjectField.classList.add('validated');
  //     errors = [];
  //     // document.querySelector('.user-subject').classList.add('hidden');
  //     // console.log(errors);
  //   }
  //
  // });

  // email
  // emailField.addEventListener('blur', function(e){
  //
  //   if (!emailField.value.match(regName)) {
  //     emailField.classList.add('error');
  //     emailField.classList.remove('validated');
  //     if(errors.indexOf('user-email') == -1) errors.push('user-email');
  //     // document.querySelector('.user-first-name').classList.remove('hidden');
  //   } else {
  //     emailField.classList.remove('error');
  //     emailField.classList.add('validated');
  //     errors = [];
  //     // document.querySelector('.user-first-name').classList.add('hidden');
  //     // console.log(errors);
  //   }
  //
  // });

  // boot proof
  bootProof.addEventListener('blur', function(e){

    if (bootProof.value != botTestResult) {
      bootProof.classList.add('error');
      bootProof.classList.remove('validated');
      if(errors.indexOf('user-botProof-error') == -1) errors.push('user-botProof-error');
      bootProof.value = '';
      // document.querySelector('.user-botProof-error').classList.remove('hidden');
      // console.log('state: invalid');
      // console.log(errors);
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

  // document.querySelectorAll('input')[2].addEventListener('invalid', function(e){
  //       console.log('invalid fired');
  //       console.log(e);
  //   }, false);
  // document.getElementById('user-email').addEventListener('invalid', function(e) { console.log(e); });
  // form.addEventListener('invalid', function(e) { console.log('form'); });

  // form final validation
  form.addEventListener('submit', function(e){

    e.preventDefault();

    if (errors.length) {
      return false;
    } else {
      alert('Envoi du formulaire');
      // form.submit();
      return false;
    }
  });

});
