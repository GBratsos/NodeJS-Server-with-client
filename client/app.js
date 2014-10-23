'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mm.foundation',
  'angular-carousel',
  'myAppControllers',
  'myAppServices'
]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $routeProvider.
  	when('/', {
  		templateUrl: 'client/templates/home.html',
  		controller: 'myAppPortfoliosCtrl'
  	}).
  	otherwise({redirectTo: '/'});

}]);

