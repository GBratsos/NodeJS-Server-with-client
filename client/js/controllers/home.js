'use strict';

var myAppControllers = angular.module('myAppControllers', ['ngRoute'])

myAppControllers.controller('myAppHomeCtrl', ['$scope','homeServices', function($scope, homeServices) {
	$scope.bratsaki = 'Eimai to Bratsaki';
	homeServices.getVillage().then(function(data) {
		console.log(data);
		$scope.antonis = data;
	});

}]);