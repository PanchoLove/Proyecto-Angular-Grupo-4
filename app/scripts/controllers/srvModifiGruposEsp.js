'use strict';

(function(){
angular.module('yapp')
    .service('srvModifiGruposEsp', function($http){
        var urlBase= 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/grupos_temporales';
        var urlBase2= 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/lugares';
        var urlBase3 = 'http://mongostudygroup-app4tbd.rhcloud.com/testing/usuarios/';
        var urlBase4 = 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/grupos_temporales/'
        var urlBase5 ='http://mongostudygroup-app4tbd.rhcloud.com/servicios/grupos_temporales/cambiar_locacion/';
        var urlBase6 ='http://mongostudygroup-app4tbd.rhcloud.com/servicios/grupos_temporales/';
        var urlBase7 = 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/gestion_relacion_usuarios/grupo_estudio_por_usuarios/';

        var urlBase8 = 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/usuarios/';
        var urlBase9 = 'http://mongostudygroup-app4tbd.rhcloud.com/servicios/grupos_temporales/agregar_integrantes/';
        
        this.getAllGrupos = function(idUsuario){
            return $http.get(urlBase);
        };
        this.getAllLugares = function(){
            return $http.get(urlBase2);
        };
        this.getMateriasListaInteresesUsuario = function(idUsuario){
            return $http.get(urlBase3+idUsuario+'/ramos');
        };
        this.cambiarDescripcionGrupo = function(idGrupo,lista){
            var obJson = lista;
            return $http.put(urlBase4+idGrupo,obJson);
        };
        this.cambiarLugarGrupo = function(idGrupo,lista){
            var obJson = lista;
            return $http.put(urlBase5+idGrupo,obJson);
        };
        this.eliminarGrupo = function(idGrupo){
            return $http.delete(urlBase6+idGrupo);
        };
        this.obtUsuarioEstudio = function(idRamo,idUsuario){
            return $http.get(urlBase7+idUsuario+'/'+idRamo);
        };
        this.obtUsuPorId = function(idUsuario){
            return $http.get(urlBase8+idUsuario);
        };
        this.agregarAlumnosGrupo = function(idGrupo,lista){
            var obJson = lista;
            return $http.put(urlBase9+idGrupo,obJson);
        };
    });
})();