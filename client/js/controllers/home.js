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

	//SUBMENU LOGIC (prepei na paro ta id tou submenu pou einai monadika)
	$scope.findElementById = function(id){
		var el;
		angular.forEach($scope.sname_en, function(element){
			if (element.id === id) {
				console.log(element);
				el = element;
			};
		})
		return el;
	}
	

	//TOP SLIDESHOW LOGIC (pairnei ta bid pou einai monadika kai emfanizei t' analoga slides)
	topSlideshowServices.getTopSlideshow().then(function(data) {
		$scope.homeCarousel = [];
		$scope.homeCarousel.push(findElementCarouselByBid(1,data));
		$scope.homeCarousel.push(findElementCarouselByBid(3,data));
		$scope.homeCarousel.push(findElementCarouselByBid(5,data));
		$scope.homeCarousel.push(findElementCarouselByBid(8,data));
	});
	
	var findElementCarouselByBid = function(bid, slideList){
		var candidateSlide;
		angular.forEach(slideList, function(slide) {
			if (slide.bid === bid) {
				candidateSlide = slide;
				return;
			}
		});
		return candidateSlide;
	}

	//PORTFOLIO SERVICE
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