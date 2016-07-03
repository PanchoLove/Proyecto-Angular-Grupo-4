'use strict';

angular.module('yapp')
.controller('GruposEspontaneosCtrl', function($scope, $window) {

  var map;
  $scope.$on('mapInitialized', function(evt, evtMap) {
    map = evtMap;
    
    $scope.placeMarker = function(e) {
      
      var marker = new google.maps.Marker({position: e.latLng, map: map});
      var lat = e.latLng.lat(), lon = e.latLng.lng();
      $window.alert("position: " + lat + "," + lon );
      
      map.panTo(e.latLng);
    }
  });
});