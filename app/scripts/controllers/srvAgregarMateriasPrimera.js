'use strict';

(function(){
angular.module('yapp')
    .service('srvAgregarMateriasPrimera', function($http){
        var urlBase2= 'http://mongostudygroup-app4tbd.rhcloud.com/testing/gestion_carreras/usuario/';
        this.getMateriasUsuario = function(idUsuario){
            return $http.get(urlBase2+idUsuario);
        };

        this.agregarListaInteres = function(idUsuario, lista){
            var obJson = lista;
            var url = 'http://mongostudygroup-app4tbd.rhcloud.com/testing/usuarios/'+idUsuario+'/ramos/';
            return $http.put(url, obJson);
        };
    });
})();

