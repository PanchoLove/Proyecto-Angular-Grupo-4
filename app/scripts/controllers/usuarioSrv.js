angular.module('yapp')
    .service('usuarioService', function($http, localStorageService){
     var value = localStorageService.get('localStorageKey');
      //Un servicio es la forma de comunicarse con el exterior.
      // Hacerlo desde el controlador rompe la arquitectura
        
        this.log = function(email, password){
            var request = $http({
            method: 'post',
            url: 'mongostudygroup-app4tbd.rhcloud.com/testing/login',
            data: {
                    "mail": email,
                    "pass": password
                  },
            headers: {'Content-Type': 'application/json'}
            });
            return (request);
        };

		this.addPost = function(nombreUsuario, apellido, email, movil, password){
			var request = $http({
            method: 'post',
            url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios',
            data: {
                    "apellidos": apellido,
                    "mail": email,
                    "nombre": nombreUsuario,
                    "numeroMovil": movil,
                    "pass": password,
                    "descripcion":"descripcion"
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

        this.editPass = function(password){
            var request = $http({
                method: 'post',
                url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/'+value,
                data: {
                    "pass": password
                },
                headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

        this.editMovil = function(movil){
            var request = $http({
                method: 'post',
                url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/'+value,
                data: {
                    "pass": movil
                },
                headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };

        var urlget = "http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios/";
        this.getPerfil = function(){
            return $http.get(urlget+value);
        };

        this.addGeo = function(lat, long){
            var request = $http({
                method: 'post',
                url:  'http://mongostudygroup-app4tbd.rhcloud.com/servicios/usuarios/'+value+'/geo',
                data: {
                    "location":{type: "Point",coordinates:[lat, long]}
                },
                headers: {'Content-Type': 'application/json'}
            });
            return(request);
        };

        var urlGetGeo = "http://mongostudygroup-app4tbd.rhcloud.com/servicios/usuarios/"+value+"/geo";
        this.getGeo = function(){
            return $http.get(urlGetGeo);
        };

        this.verUser = function(idUser){
            return $http.get(urlget+idUser);
        };

    });