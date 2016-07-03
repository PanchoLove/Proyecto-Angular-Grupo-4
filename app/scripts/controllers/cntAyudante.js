'use strict';

angular.module('yapp')
.controller('cntAyudante', function($scope, $location, srvAyudante, localStorageService) {

	var value = localStorageService.get('localStorageKey');
	$scope.datosAyudante = [];
	$scope.largo = 0;
	$scope.AllAyudantes = [];

	function getAllAyudantes()
    {
        srvAyudante.getDatosAyudantes()
        .success(function(data){
            $scope.AllAyudantes = data;

            var i = 0;
            for (i = 0; i <  $scope.AllAyudantes.length; i++) {
            	if (parseInt($scope.AllAyudantes[i].usuarioId) == value) {
            		$scope.datosAyudante = $scope.AllAyudantes[i];
            		$scope.largo = 1;
            		//console.log("ayudante",$scope.datosAyudante);
            	}
            }
            
            

        })
        .error(function(error){
            $scope.status = 'Error al consultar por ayudante';
        });
    }
    getAllAyudantes();




    $scope.serAyudante1 = function() {

	    $location.path('/dashboard/confirmAyudante');
    }


    $scope.serAyudante2 = function() {
    	var lista = {"estado":"Pagado"};
		console.log("lista",lista);

        srvAyudante.serAyudante(value, lista)
        .success(function(data){
            $scope.retorno = 'Se agrego al ayudante';
	        $location.path('/dashboard/modiAyudante');
	        console.log("retorno", $scope.retorno);
            
        })
        .error(function(error){
            $scope.retorno = 'Error al agregar al ayudante';
	        console.log("retorno", $scope.retorno);

        });
    }

    $scope.eliminarAyudante1 = function() {

	    $location.path('/dashboard/eliminarAyudante');
    }

    $scope.eliminarAyudante2 = function() {
        var idAyudante = $scope.datosAyudante.perfilAyudanteId;
	    srvAyudante.eliminarAyudante(idAyudante)
        .success(function(data){
            $scope.retorno = 'Se elimino al ayudante';
	        $location.path('/dashboard/modiAyudante');
	        //console.log("retorno", $scope.retorno);
            
        })
        .error(function(error){
            $scope.retorno = 'Error al agregar al ayudante';
	        console.log("retorno", $scope.retorno);

        });
    }

    

    $scope.modificarGruposHorarios = function() {

        $location.path('/dashboard/modiGruposHorarios');
    }


});