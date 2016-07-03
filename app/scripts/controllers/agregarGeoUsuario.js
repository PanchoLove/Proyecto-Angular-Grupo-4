'use strict';

angular.module('yapp')
  .controller('addGeoUserCtrl', function($scope, $window, $http, $location, usuarioService, localStorageService) {
    
    var map;
    var lat;
    var lon;
    
    $scope.$on('mapInitialized', function(evt, evtMap) {
        map = evtMap;
      
        $scope.placeMarker = function(e) {
        
        var marker = new google.maps.Marker({position: e.latLng, map: map});
        lat = e.latLng.lat();
        lon = e.latLng.lng();
        $window.alert("position: " + lat + "," + lon );
        
        map.panTo(e.latLng);
    }
  });

    $scope.addGeo = function() {
        
        usuarioService.addGeo(lat, lon)

        .success(function(data){
            console.log(data);
            $location.path('/dashboard/perfil');
            alert("Ubicación agregada exitosamente");
        })
        .error(function(error){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
        });

    return false;
    };
  });