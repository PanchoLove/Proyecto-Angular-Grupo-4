'use strict';

angular.module('yapp')
.controller('verUserCtrl', function($http,$scope,$location,localStorageService, usuarioService, $stateParams) {

    function getData() {

        var id = $stateParams.usuarioId
    	
        usuarioService.verUser(id)
        /*var value = localStorageService.get('localStorageKey');
        $http({
            method: 'GET',
            url: "http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/"+value,
           
        })*/
        .success(function(data){
            // With the data succesfully returned, call our callback
            $scope.data=data;
            console.log(data);
            $location.path('/dashboard/perfil');
            
        }).error(function(){
            alert("Error inesperado. Contáctese con el administrador.");
        });
    }
    getData();

});
