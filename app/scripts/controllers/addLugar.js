'use strict';

angular.module('yapp')
  .controller('addLugarCtrl', function($scope, $window, $http, $location, lugarService, localStorageService) {
    
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

    $scope.addLugar = function() {
        
        lugarService.addLugar(lat, lon)

        .success(function(data){
            console.log(data);
            $location.path('/dashboard/getLugares');
            alert("Lugar agregado exitosamente");
        })
        .error(function(error){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
        });

    return false;
    };

    $scope.putLugar = function() {
        lugarService.putLugar(lat, lon)

        .success(function(data){
            console.log(data);
            $location.path('/dashboard/getLugares');
            alert("Lugar modificado exitosamente");
        })
        .error(function(error){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
        });
    return false;
    };

    $scope.deleteLugar = function() {
        lugarService.deleteLugar()

        .success(function(data){
            console.log(data);
            $location.path('/dashboard/getLugares');
            alert("Lugar eliminado exitosamente");
        })
        .error(function(error){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
        });
    return false;
    };
  });