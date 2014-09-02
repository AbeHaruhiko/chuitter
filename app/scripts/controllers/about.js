'use strict';

/**
 * @ngdoc function
 * @name chuitterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chuitterApp
 */
angular.module('chuitterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
