'use strict';

angular.module('yapp')
.controller('CarrerasCtrl', function($http,$scope,$location) {
$scope.getData = function() {
	
    $http({
        method: 'GET',
        url: "http://mongostudygroup-app4tbd.rhcloud.com/service/gestion_carreras/",
       
        
     }).success(function(data){
        // With the data succesfully returned, call our callback
        $scope.data=data;
        console.log(data);
        //$location.path('/dashboard/perfil');
        
    }).error(function(){
        alert("Error inesperado. Contáctese con el administrador.");
    });
 }
});