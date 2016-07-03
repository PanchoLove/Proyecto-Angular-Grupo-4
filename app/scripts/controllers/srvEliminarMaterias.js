'use strict';

(function(){
angular.module('yapp')
    .service('srvEliminarMaterias', function($http){
        
        var urlBase3 = 'http://mongostudygroup-app4tbd.rhcloud.com/testing/usuarios/';


        this.getMateriasListaInteresesUsuario = function(idUsuario){
            return $http.get(urlBase3+idUsuario+'/ramos');
        };
        

       this.agregarListaInteres = function(idUsuario, lista){
            var obJson = lista;
            var url = 'http://mongostudygroup-app4tbd.rhcloud.com/testing/usuarios/'+idUsuario+'/ramos/';
            return $http.put(url, obJson);
        };
    });
})();