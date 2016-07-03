angular.module('yapp')
    .service('relacionService', function($http, localStorageService){
        
        var value = localStorageService.get('localStorageKey');

        var urlgetUsersParaGrupo = "http://mongostudygroup-app4tbd.rhcloud.com/servicios/gestion_relacion_usuarios/grupo_estudio/"+value;
        this.getUsersParaGrupo = function(){
            return $http.get(urlgetUsersParaGrupo);
        };

    });