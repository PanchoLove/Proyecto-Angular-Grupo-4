'use strict';

(function(){
angular.module('yapp')
    .service('srvAyudante', function($http){
        var urlBase= 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/perfiles_ayudantes/';
        

        this.getDatosAyudantes = function(){
            return $http.get(urlBase);
        };
        this.serAyudante = function(idUsuario,lista){
            var obJson = lista;
            var url = 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/perfiles_ayudantes/'+idUsuario;
            return $http.post(url, obJson);
        };
        this.eliminarAyudante = function(idUsuario){
            var url = 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/perfiles_ayudantes/'+idUsuario;
            return $http.delete(url);
        };

        
    });
})();