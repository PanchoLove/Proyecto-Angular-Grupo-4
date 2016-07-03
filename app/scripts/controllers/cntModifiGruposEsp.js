'use strict';

angular.module('yapp')
.controller('cntModifiGruposEsp', function($scope, $location, srvModifiGruposEsp, localStorageService) {

  var value = localStorageService.get('localStorageKey');

  $scope.grupos = [];
  $scope.allLugares = [];
  $scope.allGrupos = [];
  $scope.seleccionGrupo = true;
  $scope.Lista =[];
  var ListaRamosPrincipal =[];
  $scope.ListaLugaresPrincipal =[];
  
  $scope.GrupoSeleccionado = null;
  $scope.largo = 0;
  

  $scope.LugarSeleccionado = "Seleccione un grupo en la casilla de grupos...";
  $scope.RamoSeleccionado = "Seleccione un grupo en la casilla de grupos...";
  $scope.comentarioGrupo = "Seleccione un grupo en la casilla de grupos...";

  $scope.listaLugares = [];
  $scope.listaRamos = [];

  $scope.ramoAestudiar = "Seleccione un grupo en la casilla de grupos...";

  var alumnosParaEstudiar = [];
  $scope.nombreAlumnosParaEstudiar = [];
  $scope.alumnoSeleccionado = null;

  

    function getMateriasInteresUsu(){
        srvModifiGruposEsp.getMateriasListaInteresesUsuario(value)
        .success(function(data){
            $scope.Lista = data;
            var i = 0;
            for (i = 0; i <  $scope.Lista[0].ramo.length; i++) {
                var aux = {
                    "nombreRamo":$scope.Lista[0].ramo[i].nombreRamo,
                    "ramoId":$scope.Lista[0].ramo[i].ramoId,
                    "carrera":{"carreraId":$scope.Lista[0].ramo[i].carreraId,
                    "nombreCarrera":$scope.Lista[0].ramo[i].nombreCarrera
                    }};
                    ListaRamosPrincipal.push(aux);
            }

            var aux = "Seleccione un grupo en la casilla de grupos...";
            $scope.listaRamos.push(aux);
            var i = 0;
            for (i = 0; i <  ListaRamosPrincipal.length; i++) {
                $scope.listaRamos.push(ListaRamosPrincipal[i].nombreRamo);
              }
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getMateriasInteresUsu();


    function getGruposUsu()
    {
        srvModifiGruposEsp.getAllGrupos(value)
        .success(function(data){
            $scope.allGrupos = data;
            var i = 0;
            for (i = 0; i <  $scope.allGrupos.length; i++) {
            var aux = $scope.allGrupos[i];
                if (aux.usuarioId == value)
                {
                    $scope.grupos.push(aux);
                }
            }

            
            $scope.largo = $scope.grupos.length;

        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getGruposUsu();





    function getLugares()
    {
        srvModifiGruposEsp.getAllLugares()
        .success(function(data){
            $scope.allLugares = data;
            var aux = "Seleccione un grupo en la casilla de grupos...";
            $scope.listaLugares.push(aux);
            var i = 0;
            for (i = 0; i <  $scope.allLugares.length; i++) {
                $scope.listaLugares.push($scope.allLugares[i].nombreLugar);
              }
            
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getLugares();

              
    $scope.modificarDescripcion = function() {
        if($scope.GrupoSeleccionado == null){}
        else{
          
          var idRamoCambio = 0;
          var i = 0;
          for (i = 0; i <  ListaRamosPrincipal.length; i++) {
              if(ListaRamosPrincipal[i].nombreRamo == $scope.RamoSeleccionado.trim())
              {
                  idRamoCambio = ListaRamosPrincipal[i].ramoId;
              }
          }
          var lista = {

              "ramo":{"ramoId":idRamoCambio},
              "usuario":{"usuarioId":value},
              "descripcionTemporal":$scope.comentarioGrupo

          };
          var lugar = $scope.LugarSeleccionado.trim();
          
          if(lista.descripcionTemporal != "Seleccione un grupo en la casilla de grupos..." && lista.ramo.ramoId != 0 && lista.descripcionTemporal != "" &&  lugar != "Seleccione un grupo en la casilla de grupos..."){
          srvModifiGruposEsp.cambiarDescripcionGrupo($scope.GrupoSeleccionado.grupoTemporalId, lista)
          .success(function(data){
              $scope.retorno = 'Se agrego la lista con exito';
              $location.path('/dashboard/modifiGruposEsp');
              
          })
          .error(function(error){
              $scope.retorno = 'Error al agregar la lista';
              

          });
            }
        }
        
    }

    $scope.modificarLugar = function() {
        if($scope.GrupoSeleccionado == null){}
        else{
          if($scope.LugarSeleccionado != "Seleccione un grupo en la casilla de grupos..."){
            var i = 0;
            var lista = null;
            for (i = 0; i <  $scope.allLugares.length; i++) {
                if ($scope.allLugares[i].nombreLugar == $scope.LugarSeleccionado.trim()) {
                  lista = {

                  "idLugar":$scope.allLugares[i].idLugar

                    };
                }
              }
          
          
            
              srvModifiGruposEsp.cambiarLugarGrupo($scope.GrupoSeleccionado.grupoTemporalId, lista)
              .success(function(data){
                  $scope.retorno = 'Se agrego la lista con exito';
                  $location.path('/dashboard/modifiGruposEsp');
                  
                  
              })
              .error(function(error){
                  $scope.retorno = 'Error al agregar la lista';
              });
          }
        }
    }



    $scope.eliminarGrupo = function() {
        if($scope.GrupoSeleccionado == null){}
        else{
          
            srvModifiGruposEsp.eliminarGrupo($scope.GrupoSeleccionado.grupoTemporalId)
            .success(function(data){
                $scope.retorno = 'Se elimino el grupo con exito';
                $location.path('/dashboard/modifiGruposEsp');
                
                
            })
            .error(function(error){
                $scope.retorno = 'Error al eliminar grupo';
            });
        }
    }


    $scope.ActualizarGrupo = function() {


      $scope.modificarLugar();
      $scope.modificarDescripcion();

      return false;
    }


  $scope.fun1 = function() {

      $location.path('/dashboard/ediGruposEsp');

      return false;
    }

    $scope.fun4 = function() {

      $location.path('/dashboard/agreAlumGrupos');

      return false;
    }

    $scope.addAlumnoGrupo = function() {

      var alumnoAux = $scope.alumnoSeleccionado;
      var grupoAux = $scope.GrupoSeleccionado;

      if(alumnoAux == null || grupoAux == null){}
      else
      {
        
        var lista = [
                {
               "usuarioId": alumnoAux.usuarioId 
            }
        ]

        
        srvModifiGruposEsp.agregarAlumnosGrupo(grupoAux.grupoTemporalId,lista)
        .success(function(data){
           $scope.retorno = 'usuario agregado';
           $location.path('/dashboard/modifiGruposEsp');
            
            
        })
        .error(function(error){
            $scope.retorno = 'Error al agregar la lista';
        });
      }

    }


    $scope.fun2 = function() {

      var grupoAux = $scope.GrupoSeleccionado;

      if(grupoAux == null){}
      else
      {
          $scope.seleccionGrupo = false;
          $scope.LugarSeleccionado = grupoAux.nombreLugar;
          var i = 0;
          for (i = 0; i <  ListaRamosPrincipal.length; i++) {
              if(ListaRamosPrincipal[i].ramoId == grupoAux.ramoId)
              {
                  $scope.RamoSeleccionado = ListaRamosPrincipal[i].nombreRamo;
              }
            }
          $scope.comentarioGrupo = grupoAux.descripcionTemporal;

      }


      return false;
    }

     $scope.fun5 = function() {

      var grupoAux = $scope.GrupoSeleccionado;
      $scope.nombreAlumnosParaEstudiar = [];

      if(grupoAux == null){}
      else
      {

          srvModifiGruposEsp.obtUsuarioEstudio(grupoAux.ramoId, value)
          .success(function(data){
             alumnosParaEstudiar = data;
             var i = 0;
             for(i=0; i<alumnosParaEstudiar.length;i++)
             {
                srvModifiGruposEsp.obtUsuPorId(alumnosParaEstudiar[i].usuarioId)
                .success(function(data){
                   $scope.nombreAlumnosParaEstudiar.push(data);
                    
                    
                })
                .error(function(error){
                    $scope.retorno = 'Error al agregar la lista';
                });
             }
             
             
              
          })
          .error(function(error){
              $scope.retorno = 'Error al agregar la lista';
              
          });

          
           
          
          
          var i = 0;
          for (i = 0; i <  ListaRamosPrincipal.length; i++) {
              if(ListaRamosPrincipal[i].ramoId == grupoAux.ramoId)
              {
                  $scope.ramoAestudiar = ListaRamosPrincipal[i].nombreRamo;
              }
            }
            $scope.seleccionGrupo = false;
      }


      return false;
    }
    


});