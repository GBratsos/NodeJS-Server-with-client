'use strict';

var myAppControllers = angular.module('myAppControllers', ['ngRoute'])

myAppControllers.controller('myAppHomeCtrl', ['$scope','homeServices', function($scope, homeServices) {
	var bratsos = 'bratsaki1213'; // Den emfanizetai pouthena, local metavliti
	$scope.bratsaki = 'Eimai to Bratsaki'; // tha vgei sto HTML
	homeServices.getVillage().then(function(data) {
		console.log(data);
		$scope.antonis = data;
	});

}]);