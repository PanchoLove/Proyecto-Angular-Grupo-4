'use strict';

angular.module('yapp')
.controller('cntModMaterias', function($scope, $location, srvModMaterias, localStorageService) {

  var value = localStorageService.get('localStorageKey');

  $scope.materias = [];
  $scope.largo = 0;
  var largo = 0;

    $scope.getMateriasInteresUsu = function()
    {
        srvModMaterias.getMateriasListaInteresesUsuario(value)
        .success(function(data){
            $scope.materias = data;
            $scope.largo = $scope.materias[0].ramo.length;
    
            
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }

              
    




  $scope.fun1 = function() {

      $location.path('/dashboard/agregarMaterias');

      return false;
    }

    $scope.fun2 = function() {

      $location.path('/dashboard/eliminarMaterias');

      return false;
    }

    $scope.fun3 = function() {

      $location.path('/dashboard/agregarMateriasPrimera');

      return false;
    }

    


});