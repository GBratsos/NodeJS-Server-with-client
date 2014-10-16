'use strict';

var myAppControllers = angular.module('myAppControllers', ['ngRoute'])

myAppControllers.controller('myAppPortfoliosCtrl', ['$scope','mainMenuServices', 'subMenuServices', 'topSlideshowServices', 'portfolioServices', function($scope, mainMenuServices, subMenuServices, topSlideshowServices, portfolioServices) {
	mainMenuServices.getMainmenu().then(function(data) {
		console.log(data);
		$scope.name_en = data;
	});

	subMenuServices.getSubmenu().then(function(data) {
		console.log(data);	
		$scope.sname_en = data;
	});

	topSlideshowServices.getTopSlideshow().then(function(data) {
		console.log(data);	
		$scope.title_en = data;
		$scope.message_en = data;
		$scope.details1_en = data;
		$scope.details2_en = data;
		$scope.details3_en = data;
		$scope.details4_en = data;
		$scope.img = data;
	});
	
	portfolioServices.getPortfolio().then(function(data) {
		console.log(data);
		$scope.img = data;
	});

}]);

//myAppControllers.controller('myAppPortfolioCtrl', ['$scope','portfolioServices', function($scope, portfolioServices) {
//	portfolioServices.getportfolio().then(function(data) {
//		console.log(data);
//		$scope.img = data;
//	});

//}]);