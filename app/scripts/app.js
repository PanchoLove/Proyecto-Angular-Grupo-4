'use strict';

angular
  .module('yapp', [
    'ngMap',
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'LocalStorageModule'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/perfil');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('perfil', {
            url: '/perfil',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/perfil.html',
            controller: 'PerfilCtrl'
          })
          .state('modificarContrasena', {
            url: '/modificarContrasena',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/editarContrasena.html',
            controller: 'EditarPerfilCtrl'
          })
          .state('pubGrupoEspontaneo', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/pubGrupoEspontaneo.html',
            controller: 'GruposEspontaneosCtrl'
          })
          .state('modificarMovil', {
            url: '/modificarMovil',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/editarMovil.html',
            controller: 'EditarPerfilCtrl'
          })
          .state('registro', {
            url: '/registro',
            parent: 'base',
            templateUrl: 'views/registro.html',
            controller: 'RegistroCtrl'
          })
          .state('gruposEspontaneos', {
            url: '/gruposEspontaneos',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/gruposEspontaneos.html' 
          })
          .state('eliminarMaterias', {
            url: '/eliminarMaterias',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/eliminarMaterias.html',
            controller: 'cntEliminarMaterias'
          })
          .state('agregarMaterias', {
            url: '/agregarMaterias',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/agregarMaterias.html',
            controller: 'cntAgregarMaterias'
          })
          .state('agregarMateriasPrimera', {
            url: '/agregarMateriasPrimera',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/agregarMateriasPrimera.html',
            controller: 'cntAgregarMateriasPrimera'
          })
          .state('modMaterias', {
            url: '/modMaterias',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/modMaterias.html',
            controller: 'cntModMaterias'
          })
          .state('getGeos', {
            url: '/getGeos',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/getGeos.html',
            controller: 'GeoCtrl'
          })
          .state('addGeo', {
            url: '/addGeo',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/addGeo.html',
            controller: 'addGeoUserCtrl'
          })
          .state('getGeo', {
            url: '/getGeo',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/getGeo.html',
            controller: 'getGeoCtrl'
          })
          .state('getUsersParaGrupo', {
            url: '/getUsersParaGrupo',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/getUsersParaGrupo.html',
            controller: 'getUsersParaGrupoCtrl'
          })
          .state('getLugares', {
            url: '/getLugares',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/getLugares.html',
            controller: 'getLugaresCtrl'
          })
          .state('addLugar', {
            url: '/addLugar',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/addLugar.html',
            controller: 'addLugarCtrl'
          })
          .state('putLugar', {
            url: '/putLugar',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/putLugar.html',
            controller: 'addLugarCtrl'
          })
          .state('carreras', {
            url: '/carreras',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/listaCarreras.html',
            controller: 'CarrerasCtrl'
          })
          .state('modifiGruposEsp', {
            url: '/modifiGruposEsp',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/modifiGruposEsp.html',
            controller: 'cntModifiGruposEsp'
          })
          .state('ediGruposEsp', {
            url: '/ediGruposEsp',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/ediGruposEsp.html',
            controller: 'cntModifiGruposEsp'
          })
          .state('agreAlumGrupos', {
            url: '/agreAlumGrupos',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/agreAlumGrupos.html',
            controller: 'cntModifiGruposEsp'
          })
          .state('verUser', {
            url: '/user/:usuarioId',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/verUser.html',
            controller: 'verUserCtrl'
          })
          .state('home', {
            url: '/home',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/home.html' 
          })
          .state('modiAyudante', {
            url: '/modiAyudante',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/modiAyudante.html',
            controller: 'cntAyudante'
          })
          .state('confirmAyudante', {
            url: '/confirmAyudante',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/confirmAyudante.html',
            controller: 'cntAyudante'
          })
          .state('contacto', {
            url: '/contacto',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/contacto.html'
          });

  });
