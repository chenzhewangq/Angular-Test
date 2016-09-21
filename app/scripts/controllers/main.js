'use strict';

/**
 * @ngdoc function
 * @name integratedDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the integratedDevApp
 */
angular.module('integratedDevApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.test = function() {
    	$http.post('/om/resource/show/basisShowQuery').success(function() {
    		console.log('success');
    		console.log('second success!!');
    	});
    };
  });
