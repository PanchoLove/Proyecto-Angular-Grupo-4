'use strict';

angular.module('yapp')
.controller('getLugaresCtrl', function($http,$scope,$location,localStorageService, lugarService) {


    function getLugares() {
        //var value = localStorageService.get('localStorageKey');
        lugarService.getLugares()

        .success(function(data){
            // With the data succesfully returned, call our callback
                //$scope.data=data;
                $scope.data = data
                console.log(data);
            
        }).error(function(){
            alert("Error inesperado. Contáctese con el administrador.");
        });
    }
    getLugares();
});
