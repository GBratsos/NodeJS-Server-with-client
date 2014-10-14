'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mm.foundation',
  'myAppControllers',
  'myAppServices'
]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $routeProvider.
  	when('/', {
  		templateUrl: 'client/templates/home.html',
  		controller: 'myAppHomeCtrl'
  	}).
  	otherwise({redirectTo: '/'});

}]);

