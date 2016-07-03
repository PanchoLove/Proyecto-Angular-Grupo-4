'use strict';

angular.module('yapp')
.controller('EditarPerfilCtrl', function($scope, $http, $location, localStorageService){
     var value = localStorageService.get('localStorageKey');
     var url_base = 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/'+value

    $scope.editPassword = function (){
        
        $http({
            method: 'PUT',
            url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/'+value,
            data: {
                "pass":$scope.newPass
            },
    headers: {'Content-Type': 'application/json'}
    }).success(function(data){
        alert("Se ha modificado correctamente el password.");
        $location.path('/dashboard/perfil');

    }).error(function(error,status,headers,config){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
    });
    };

    $scope.editTelefono = function (){
        
        $http({
            method: 'PUT',
            url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/'+value,
            data: {
                "numeroMovil":$scope.newMovil
            },
    headers: {'Content-Type': 'application/json'}
    }).success(function(data){
        alert("Se ha modificado correctamente el telefono.");
        $location.path('/dashboard/perfil');

    }).error(function(error,status,headers,config){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
    });
    };
});