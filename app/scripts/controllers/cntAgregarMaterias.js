
'use strict';
angular.module('yapp')
.controller('cntAgregarMaterias', function($scope, $location, srvAgregarMaterias, localStorageService) {
	
	var id = localStorageService.get('localStorageKey');

    $scope.Lista = [];
    $scope.ListaAux = [];
    $scope.MateriaSeleccionada = null;
    $scope.materias = [];
    $scope.retorno = null;


    function getMateriasUsu(){
        srvAgregarMaterias.getMateriasUsuario(id)
        .success(function(data){
            $scope.materias = data;
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getMateriasUsu();

    function getMateriasInteresUsu(){
        srvAgregarMaterias.getMateriasListaInteresesUsuario(id)
        .success(function(data){
            $scope.Lista = data;
            var i = 0;
            for (i = 0; i <  $scope.Lista[0].ramo.length; i++) {
                var aux = {
                    "nombreRamo":$scope.Lista[0].ramo[i].nombreRamo,
                    "ramoId":$scope.Lista[0].ramo[i].ramoId,
                    "carrera":{"carreraId":$scope.Lista[0].ramo[i].carreraId,
                    "nombreCarrera":$scope.Lista[0].ramo[i].nombreCarrera
                    }};
                    $scope.ListaAux.push(aux);
            }
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getMateriasInteresUsu();

    $scope.agregarLista = function() {
        srvAgregarMaterias.agregarListaInteres(id, $scope.ListaAux)
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
            if ($scope.ListaAux.length == 0) 
                {   
                    var aux = {
                    "nombreRamo":materiaAux.nombreRamo,
                    "ramoId":materiaAux.ramoId,
                    "carrera":{"carreraId":materiaAux.carreraId,
                    "nombreCarrera":materiaAux.nombreCarrera
                    }};
                    $scope.ListaAux.push(aux);
                }
            else
            {
                var item = 0;
                for(item = 0; item < $scope.ListaAux.length; item++) 
                {
                    if ($scope.ListaAux[item].ramoId == materiaAux.ramoId) {aux = 1;}
                }
                if (aux == 1) {}
                else
                {
                    var aux = {
                    "nombreRamo":materiaAux.nombreRamo,
                    "ramoId":materiaAux.ramoId,
                    "carrera":{"carreraId":materiaAux.carreraId,
                    "nombreCarrera":materiaAux.nombreCarrera
                    }};
                    $scope.ListaAux.push(aux);

                }
            }
        }
    }


});

