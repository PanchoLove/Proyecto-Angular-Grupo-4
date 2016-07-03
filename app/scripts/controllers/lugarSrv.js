angular.module('yapp')
    .service('lugarService', function($http, localStorageService){
        
        var value = localStorageService.get('localStorageKey');
        var idLugar = 1;

        var urlBase = "http://mongostudygroup-app4tbd.rhcloud.com/servicios/lugares/";
        this.getLugares = function(){
            return $http.get(urlBase);
        };

        this.addLugar = function(lat, long){
            var request = $http({
                method: 'post',
                url:  urlBase,
                data: {
                    "longitudLugar": long, "latitudLugar": lat
                },
                headers: {'Content-Type': 'application/json'}
            });
            return(request);
        };

        this.putLugar = function(lat, long){
            var request = $http({
                method: 'put',
                url:  urlBase+idLugar,
                data: {
                    "longitudLugar": long, "latitudLugar": lat
                },
                headers: {'Content-Type': 'application/json'}
            });
            return(request);
        };

        this.deleteLugar = function(){
            var request = $http({
                method: 'delete',
                url:  urlBase+idLugar,
                headers: {'Content-Type': 'application/json'}
            });
            return(request);
        };

    });