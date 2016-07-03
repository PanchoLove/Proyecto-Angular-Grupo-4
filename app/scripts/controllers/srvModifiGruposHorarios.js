'use strict';

(function(){
angular.module('yapp')
    .service('srvModifiGruposHorarios', function($http){
        
        var urlBase= 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/grupos_horarios/';

        var urlBase2= 'http://mongostudygroup-app4tbd.rhcloud.com/testing/gestion_carreras/usuario/';
        var urlBase3= 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/lugares';
        var urlBase4= 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/perfiles_ayudantes/';
        
        

        this.getDatosAyudantes = function(){
            return $http.get(urlBase4);
        };
        this.getMateriasUsuario = function(idUsuario){
            return $http.get(urlBase2+idUsuario);
        };
        this.getAllLugares = function(){
            return $http.get(urlBase3);
        };        
        this.getAllGruposHorarios = function(idUsuario){
            return $http.get(urlBase);
        };
        this.crearGrupoHorario = function(idAyudante,lista){
            var obJson = lista;
            return $http.post(urlBase+idAyudante,obJson);
        };
    });
})();