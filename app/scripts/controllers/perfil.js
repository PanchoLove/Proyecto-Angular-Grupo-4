'use strict';

angular.module('yapp')
.controller('PerfilCtrl', function($http,$scope,$location,localStorageService) {
$scope.getData = function() {
	
    var value = localStorageService.get('localStorageKey');
    $http({
        method: 'GET',
        url: "http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/"+value,
       
        
     }).success(function(data){
        // With the data succesfully returned, call our callback
        $scope.data=data;
        console.log(data);
        $location.path('/dashboard/perfil');
        
    }).error(function(){
        alert("Error inesperado. Contáctese con el administrador.");
    });
 }

 $scope.fun1 = function() {

      $location.path('/dashboard/modMaterias');

      return false;
    }
});
