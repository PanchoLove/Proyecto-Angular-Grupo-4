
'use strict';
angular.module('yapp')
.controller('cntAgregarMateriasPrimera', function($scope, $location, srvAgregarMateriasPrimera, localStorageService) {
	
    var id = localStorageService.get('localStorageKey');

    $scope.Lista = [];
    $scope.ListaAux = [];
    $scope.MateriaSeleccionada = null;
	$scope.materias = [];
    $scope.retorno = null;


    function getMateriasUsu(){
        srvAgregarMateriasPrimera.getMateriasUsuario(id)
        .success(function(data){
            $scope.materias = data;
            console.log('materias', $scope.materias);
            var i = 0;
            for (i = 0; i <  $scope.materias.length; i++) {
                var aux = {
                    "nombreRamo":$scope.materias[i].nombreRamo,
                    "ramoId":$scope.materias[i].ramoId,
                    "carrera":{"carreraId":$scope.materias[i].carreraId,
                    "nombreCarrera":$scope.materias[i].nombreCarrera
                    }};
                    $scope.ListaAux.push(aux);
            }
            console.log('liista', $scope.ListaAux);
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getMateriasUsu();

    $scope.agregarLista = function() {
        srvAgregarMateriasPrimera.agregarListaInteres(id, $scope.Lista)
        .success(function(data){
            $scope.retorno = 'Se agrego la lista con exito';
            $location.path('/dashboard/modMaterias');
            
        })
        .error(function(error){
            $scope.retorno = 'Error al agregar la lista';

        });
    }

    $scope.agregarAlista = function() {

        var aux = 0;
        var materiaAux = $scope.MateriaSeleccionada;
        if (materiaAux == null) {}
        else
        {
            if ($scope.Lista.length == 0) {$scope.Lista.push($scope.MateriaSeleccionada);}
            else
            {
                var item = 0;
                for(item = 0; item < $scope.Lista.length; item++) 
                {
                    if ($scope.Lista[item].ramoId == materiaAux.ramoId) {aux = 1;}
                }
                if (aux == 1) {}
                else
                {
                    $scope.Lista.push($scope.MateriaSeleccionada);
                }
            }
        } 
    }

    


});