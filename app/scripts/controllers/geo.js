'use strict';

angular.module('yapp')
.controller('GeoCtrl', function($http,$scope,$location,localStorageService, usuarioService) {
    
    var map;
    var nombre;
    $scope.positions=[];

    function getGeos() {
        //var value = localStorageService.get('localStorageKey');
        $http({
            method: 'GET',
            url: "http://mongostudygroup-app4tbd.rhcloud.com/testing/usuarios/geo",
           
            
        }).success(function(data){
            // With the data succesfully returned, call our callback
                //$scope.data=data;
                $scope.positions = data
                console.log($scope.positions);
            
        }).error(function(){
            alert("Error inesperado. Contáctese con el administrador.");
        });
    }
    getGeos();

    $scope.$on('mapInitialized', function(evt, evtMap) {
        map = evtMap;
    });
    $scope.showCity = function(event, city) {
        $scope.selectedCity = city;
        $scope.map.showInfoWindow('myInfoWindow', this);
    };
    
    $scope.pinClicked = function(events, marker) {
        var pos = marker.$index;
        
        console.log('the marker ->' , map.markers[pos].idUsuario , ' was clicked');
        $scope.map.showInfoWindow('myInfoWindow', this);
    }
});
