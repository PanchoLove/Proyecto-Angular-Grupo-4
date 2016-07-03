'use strict';

(function(){
angular.module('yapp')
    .service('srvModMaterias', function($http){
        var urlBase= 'http://mongostudygroup-app4tbd.rhcloud.com/service/gestion_carreras/';
        var urlBase2= 'http://mongostudygroup-app4tbd.rhcloud.com/testing/gestion_carreras/usuario/';
        var urlBase3 = 'http://mongostudygroup-app4tbd.rhcloud.com/testing/usuarios/';
        this.getMaterias = function(){
            var ramos = 'ramos/';
            return $http.get(urlBase+ramos);
        };
        this.getMateriasUsuario = function(idUsuario){
            return $http.get(urlBase2+idUsuario);
        };
        this.getMateriasListaInteresesUsuario = function(idUsuario){
            return $http.get(urlBase3+idUsuario+'/ramos');
        };
    });
})();