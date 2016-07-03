'use strict';
angular.module('yapp')
.controller('cntEliminarMaterias', function($scope, $location, srvEliminarMaterias, localStorageService) {
	
    var value = localStorageService.get('localStorageKey');

    $scope.Lista = [];
    $scope.ListaAux = [];
    $scope.ListaAux2 = [];
    $scope.MateriaSeleccionada = null;
    $scope.materias = [];
    $scope.retorno = null;



    

    function getMateriasInteresUsu(){
        srvEliminarMaterias.getMateriasListaInteresesUsuario(value)
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

    $scope.cambiarLista = function(){
        srvEliminarMaterias.agregarListaInteres(value, $scope.ListaAux)
        .success(function(data){
            $scope.retorno = 'Se agrego la lista con exito';
            $location.path('/dashboard/modMaterias');
            
        })
        .error(function(error){
            $scope.retorno = 'Error al agregar la lista';
        });
        
    }

    $scope.eliminarDeLista = function() {

        var aux = 0;
        var materiaAux = $scope.MateriaSeleccionada;
        if (materiaAux == null) {}
        else
        {
            if ($scope.ListaAux.length == 0) {}
            else
            {
                var item = 0;
                for(item = 0; item < $scope.ListaAux.length; item++) 
                {
                    if ($scope.ListaAux[item].ramoId == materiaAux.ramoId) {}
                    else
                    {
                        $scope.ListaAux2.push($scope.ListaAux[item]);
                    }
                }
                $scope.ListaAux = $scope.ListaAux2;
                $scope.ListaAux2 = [];
                console.log('lista', $scope.ListaAux);
            }
        } 
    }


});