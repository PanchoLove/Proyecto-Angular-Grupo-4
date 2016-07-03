'use strict';

angular.module('yapp')
  .controller('LoginCtrl', function($http, $scope, $location, usuarioService, localStorageService) {

    $scope.login = function() {

    	/*usuarioService.login($scope.email, $scope.pass)*/

        $http({
            method: 'POST',
            url: 'http://mongostudygroup-app4tbd.rhcloud.com/testing/login',
            data: {
                 "mail":$scope.email,
                 "pass":$scope.pass
      
        },
        headers: {'Content-Type': 'application/json'}
        })

    	.success(function(data){
            $scope.usuario = data;
            console.log(data);

            if(data.usuarioConectado == "false"){
                alert("ERROR. Por favor verifique que los datos ingresados sea correctos.");
            }

            if(data.usuarioConectado == "true"){
                alert("Usuario Logeado");
                $location.path('/dashboard');

                localStorageService.set('localStorageKey',data.usuarioId);
    
                var value = localStorageService.get('localStorageKey');
                console.log(value);
            }
        })
        .error(function(error){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
        });

      return false;
    }

  });
