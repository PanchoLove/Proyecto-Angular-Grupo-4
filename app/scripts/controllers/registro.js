'use strict';

angular.module('yapp')
  .controller('RegistroCtrl', function($scope, $http, $location, usuarioService) {

    $scope.addPost = function() {

        if($scope.confirmacionEmail==$scope.newMail && $scope.newPass==$scope.confirmarPassword){

        
        usuarioService.addPost($scope.newApellido, 
            $scope.newNombre, 
            $scope.newMail, 
            $scope.newMovil,
            $scope.newPass)

        .success(function(data){
            $scope.usuario = data;
            console.log(data);

            if(data.usuarioAgregado == "false"){
                //alert("ERROR. Por favor Verifique el formato de los datos ingresados");
                alert("Registrado Correctamente! Ahora puedes iniciar sesión.");
                $location.path('/login');
            }

            if(data.usuarioAgregado == "true"){
                alert("Registrado Correctamente! Ahora puedes iniciar sesión.");
                $location.path('/login');
            }
        })
        .error(function(error){
            alert("ERROR: No podemos atender su solicitud. Inténtelo más tarde.");
        });

        /*.then(function(data){
            $scope.exito = data.usuarioAgregado;
            console.log(data);
*/
       }
       if($scope.newPass!=$scope.confirmarPassword){
                alert("ERROR: Las passwwords ingresadas no coinciden.") ;
            }
        if($scope.newMail!=$scope.confirmacionEmail){
                alert("ERROR: Los correos ingresados no coinciden.") ;
            }

    /*$http({
            method: 'POST',
            url: 'http://mongostudygroup-app4tbd.rhcloud.com/service/usuarios',
            data: {
                 "apellidos":$scope.newApellido,
                 "descripcion":"descripcion",
                 "mail":$scope.newMail,
                 "nombre":$scope.newNombre,
                 "numeroMovil":$scope.newMovil,
                 "pass":$scope.newPass
      
        },
        headers: {'Content-Type': 'application/json'}
        }).success(function(data,status,headers,config){

            $location.path('/login');
            console.log(data);

            $scope.status = 'Registrado Correctamente';
            alert("Registrado Correctamente! Ahora puedes iniciar sesión.");

            
        }).error(function(error,status,headers,config){
            $scope.status = 'Error Usuario existente';
            alert('Error Usuario existente');
            console.log(data);

                
                                            console.log(error)


        });
*/
    return false;
    }

  });