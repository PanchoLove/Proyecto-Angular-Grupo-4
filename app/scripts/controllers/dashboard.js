'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state, $location) {

    $scope.$state = $state;

    $scope.submit = function() {

      $location.path('/dashboard/modMaterias');

      return false;
    }

  });
