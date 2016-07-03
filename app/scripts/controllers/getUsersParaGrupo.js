'use strict';

angular.module('yapp')
.controller('getUsersParaGrupoCtrl', function($http,$scope,$location,localStorageService, relacionService) {

    function getUsersParaGrupo() {
        //var value = localStorageService.get('localStorageKey');
        relacionService.getUsersParaGrupo()

        .success(function(data){
            // With the data succesfully returned, call our callback
                //$scope.data=data;
                $scope.data = data.usuario
                console.log($scope.data);
                console.log($scope.data.usuario);
            
        }).error(function(){
            alert("Error inesperado. Contáctese con el administrador.");
        });
    }
    getUsersParaGrupo();
});
