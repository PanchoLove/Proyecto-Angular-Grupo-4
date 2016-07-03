'use strict';

angular.module('yapp')
.controller('cntModifiGruposHorarios', function($scope, $location, srvModifiGruposHorarios, localStorageService) {

	var value = localStorageService.get('localStorageKey');
	var AÑO = 2016;
	$scope.allGruposHor = [];
	$scope.largo = 0;
	$scope.grupoHorarioSeleccionado = null;
	$scope.gruposHorarios = [];

	$scope.datosAyudante = [];
	$scope.AllAyudantes = [];

	$scope.ListaAux = [];
    $scope.MateriaSeleccionada = null;
	$scope.materias = [];

	$scope.allLugares = [];
	$scope.LugarSeleccionado = null;

	$scope.MesSeleccionado = null;
	$scope.meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

	$scope.FechaDiaSeleccionada = null;
	$scope.fechas = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

	$scope.DiaSeleccionado = null;
	$scope.dias = ["Lunes (L)","Martes (M)","Miercoles (W)","Jueves (J)","Viernes (V)","Sabado (S)"];

	$scope.HorarioSeleccionado = null;
	$scope.horarios = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];

	$scope.comentarioGrupo = null;
	$scope.formaPago = null;





	$scope.crearGrupoHor = function() {


      if ($scope.verificarDatos()) {
      	var idAyudante = $scope.datosAyudante.perfilAyudanteId;
      	var fechaInicio = $scope.generarFechaInicio();
      	var fechaTermino = $scope.generarFechaTermino();
      	//console.log("fechaInicio",fechaInicio);
    	//console.log("fechaTermino",fechaTermino);
    	var lista = {

              "ramoId":parseInt($scope.MateriaSeleccionada.ramoId),
              "idLugar":parseInt($scope.LugarSeleccionado.idLugar),
              "descripcionHorario":$scope.comentarioGrupo,
              "tipoPago":$scope.formaPago,
              "fechaInicio":fechaInicio,
              "fechaTermino":fechaTermino
          };
          console.log("dato",lista);

          srvModifiGruposHorarios.crearGrupoHorario(idAyudante,lista)
        .success(function(data){
            $scope.retorno = "Se logro agregar al grupo";

            console.log("retorno",$scope.retorno);
            $location.path('/dashboard/modiGruposHorarios');
            
        })
        .error(function(error){
            $scope.retorno = 'Error al agregar grupo';
            console.log("retorno",$scope.retorno);
        });

      }

      return false;
    }

    $scope.generarFechaInicio = function() {

    	//'2016-06-13 13:30:59'
    	var fecha = AÑO+"-";
    	fecha = $scope.generarMes(fecha);
    	fecha = fecha+$scope.FechaDiaSeleccionada+" ";
    	fecha = $scope.generarHorario1(fecha);

    	return fecha;
    }

    $scope.generarFechaTermino = function() {

    	//'2016-06-13 13:30:59'
    	var fecha = AÑO+"-";
    	fecha = $scope.generarMes(fecha);
    	fecha = fecha+$scope.FechaDiaSeleccionada+" ";
    	fecha = $scope.generarHorario2(fecha);

    	return fecha;
    }

    $scope.generarMes = function(fecha) {

    	var fechaIn = "";

    	if ($scope.MesSeleccionado == "Enero") 
    	{fechaIn = fecha+"01-";}
    	if ($scope.MesSeleccionado == "Febrero") 
    	{fechaIn = fecha+"02-";}
    	if ($scope.MesSeleccionado == "Marzo") 
    	{fechaIn = fecha+"03-";}
    	if ($scope.MesSeleccionado == "Abril") 
    	{fechaIn = fecha+"04-";}
    	if ($scope.MesSeleccionado == "Mayo") 
    	{fechaIn = fecha+"05-";}
    	if ($scope.MesSeleccionado == "Junio") 
    	{fechaIn = fecha+"06-";}
    	if ($scope.MesSeleccionado == "Julio") 
    	{fechaIn = fecha+"07-";}
    	if ($scope.MesSeleccionado == "Agosto") 
    	{fechaIn = fecha+"08-";}
    	if ($scope.MesSeleccionado == "Septiembre") 
    	{fechaIn = fecha+"09-";}
    	if ($scope.MesSeleccionado == "Octubre") 
    	{fechaIn = fecha+"10-";}
    	if ($scope.MesSeleccionado == "Noviembre") 
    	{fechaIn = fecha+"11-";}
    	if ($scope.MesSeleccionado == "Diciembre") 
    	{fechaIn = fecha+"12-";}


      return fechaIn;
    }

    $scope.generarHorario1 = function(fecha) {

    	var fechaIn = "";

    	if ($scope.HorarioSeleccionado == "1") 
    	{fechaIn = fecha+"08:00:00";}
    	if ($scope.HorarioSeleccionado == "2") 
    	{fechaIn = fecha+"09:00:00";}
    	if ($scope.HorarioSeleccionado == "3") 
    	{fechaIn = fecha+"10:00:00";}
    	if ($scope.HorarioSeleccionado == "4") 
    	{fechaIn = fecha+"11:00:00";}
    	if ($scope.HorarioSeleccionado == "5") 
    	{fechaIn = fecha+"12:00:00";}
    	if ($scope.HorarioSeleccionado == "6") 
    	{fechaIn = fecha+"14:00:00";}
    	if ($scope.HorarioSeleccionado == "7") 
    	{fechaIn = fecha+"15:00:00";}
    	if ($scope.HorarioSeleccionado == "8") 
    	{fechaIn = fecha+"16:00:00";}
    	if ($scope.HorarioSeleccionado == "9") 
    	{fechaIn = fecha+"17:00:00";}
    	if ($scope.HorarioSeleccionado == "10") 
    	{fechaIn = fecha+"18:00:00";}
    	if ($scope.HorarioSeleccionado == "11") 
    	{fechaIn = fecha+"19:00:00";}
    	if ($scope.HorarioSeleccionado == "12") 
    	{fechaIn = fecha+"20:00:00";}
    	if ($scope.HorarioSeleccionado == "13") 
    	{fechaIn = fecha+"21:00:00";}


      return fechaIn;
    }


    $scope.generarHorario2 = function(fecha) {

    	var fechaIn = "";

    	if ($scope.HorarioSeleccionado == "1") 
    	{fechaIn = fecha+"09:00:00";}
    	if ($scope.HorarioSeleccionado == "2") 
    	{fechaIn = fecha+"10:00:00";}
    	if ($scope.HorarioSeleccionado == "3") 
    	{fechaIn = fecha+"11:00:00";}
    	if ($scope.HorarioSeleccionado == "4") 
    	{fechaIn = fecha+"12:00:00";}
    	if ($scope.HorarioSeleccionado == "5") 
    	{fechaIn = fecha+"13:00:00";}
    	if ($scope.HorarioSeleccionado == "6") 
    	{fechaIn = fecha+"15:00:00";}
    	if ($scope.HorarioSeleccionado == "7") 
    	{fechaIn = fecha+"16:00:00";}
    	if ($scope.HorarioSeleccionado == "8") 
    	{fechaIn = fecha+"17:00:00";}
    	if ($scope.HorarioSeleccionado == "9") 
    	{fechaIn = fecha+"18:00:00";}
    	if ($scope.HorarioSeleccionado == "10") 
    	{fechaIn = fecha+"19:00:00";}
    	if ($scope.HorarioSeleccionado == "11") 
    	{fechaIn = fecha+"20:00:00";}
    	if ($scope.HorarioSeleccionado == "12") 
    	{fechaIn = fecha+"21:00:00";}
    	if ($scope.HorarioSeleccionado == "13") 
    	{fechaIn = fecha+"22:00:00";}


      return fechaIn;
    }

    $scope.generarFecha = function() {

    	var fecha = "";
    	

      return false;
    }

    $scope.verificarDatos = function() {

    	var retorno = false;
    	if ($scope.LugarSeleccionado == null || $scope.MateriaSeleccionada == null || 
    		$scope.MesSeleccionado == null || $scope.FechaDiaSeleccionada == null || 
    		$scope.DiaSeleccionado == null || $scope.HorarioSeleccionado == null ||
    		$scope.comentarioGrupo == null || $scope.formaPago == null) {
    		//console.log("lugar",$scope.LugarSeleccionado);
    		//console.log("materia",$scope.MateriaSeleccionada);
    		//console.log("mes",$scope.MesSeleccionado);
    		//console.log("fechadia",$scope.FechaDiaSeleccionada);
    		//console.log("dia",$scope.DiaSeleccionado);
    		//console.log("horario",$scope.HorarioSeleccionado);
    		//console.log("comentario",$scope.comentarioGrupo);
    		//console.log("formapago",$scope.formaPago);
    	}
    	else{
    		retorno = true;
    	}

      return retorno;
    }

	function getAllAyudantes()
    {
        srvModifiGruposHorarios.getDatosAyudantes()
        .success(function(data){
            $scope.AllAyudantes = data;

            var i = 0;
            for (i = 0; i <  $scope.AllAyudantes.length; i++) {
            	if (parseInt($scope.AllAyudantes[i].usuarioId) == value) {
            		$scope.datosAyudante = $scope.AllAyudantes[i];
            		console.log("ayudante",$scope.datosAyudante);
            	}
            }

        })
        .error(function(error){
            $scope.status = 'Error al consultar por ayudante';
        });
    }
    getAllAyudantes();


	function getMateriasAyu(){
        srvModifiGruposHorarios.getMateriasUsuario(value)
        .success(function(data){
            $scope.materias = data;
            //console.log('materias', $scope.materias);
            var i = 0;
            for (i = 0; i <  $scope.materias.length; i++) {
                var aux = {
                    "nombreRamo":$scope.materias[i].nombreRamo,
                    "ramoId":$scope.materias[i].ramoId,
                    "carrera":{"carreraId":$scope.materias[i].carreraId,
                    "nombreCarrera":$scope.materias[i].nombreCarrera
                    }};
                    $scope.ListaAux.push(aux);
            }
            //console.log('liista', $scope.ListaAux);
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getMateriasAyu();

    function getLugares()
    {
        srvModifiGruposHorarios.getAllLugares()
        .success(function(data){
            $scope.allLugares = data;
            
        })
        .error(function(error){
            $scope.status = 'Error al consultar por materias';
        });
    }
    getLugares();

	function getGruposAyu()
    {
        srvModifiGruposHorarios.getAllGruposHorarios(value)
        .success(function(data){
            $scope.allGruposHor = data;
            var i = 0;
            for (i = 0; i <  $scope.allGruposHor.length; i++) {
                if ($scope.allGrupos[i].usuarioId == value)
                {
                    $scope.gruposHorarios.push($scope.allGrupos[i]);
                }
            }

            
            $scope.largo = $scope.gruposHorarios.length;

        })
        .error(function(error){
            $scope.status = 'Error al consultar por grupos';
        });
    }
    getGruposAyu();

    $scope.crearGruHor = function() {

        $location.path('/dashboard/crearGrupoHorario');
    }


});