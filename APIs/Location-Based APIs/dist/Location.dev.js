"use strict";

var L;

window.onload = function () {
  L.mapquest.key = 'Nvf3fvNNKIMmeq6xAxvGpVOeXhNbyuTq';
  map.addControl(L.mapquest.satelliteControl({
    position: 'topright'
  }));
  L.marker([53.480759, -2.242631], {
    icon: L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'md',
      symbol: 'A'
    })
  }).bindPopup('This is Manchester!').addTo(map);
  var map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('hybrid'),
    zoom: 12
  });
};