'use strict';

angular.module('yapp')
.controller('getGeoCtrl', function($http,$scope,$location,localStorageService, usuarioService) {
    
    var map;
    var nombre;
    $scope.position=[];

    function getGeo() {
        //var value = localStorageService.get('localStorageKey');
        usuarioService.getGeo()

        .success(function(data){
            // With the data succesfully returned, call our callback
                //$scope.data=data;
                $scope.position = data
                console.log($scope.position);
            
        }).error(function(){
            alert("Error inesperado. Contáctese con el administrador.");
        });
    }
    getGeo();
});
