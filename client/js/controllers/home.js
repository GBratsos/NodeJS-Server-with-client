'use strict';

var myAppControllers = angular.module('myAppControllers', ['ngRoute'])

myAppControllers.controller('myAppPortfoliosCtrl', ['$scope','mainMenuServices', 'subMenuServices', 'topSlideshowServices', 'websitecontent', 'portfolioWebsitesServices', function($scope, mainMenuServices, subMenuServices, topSlideshowServices, websitecontent, portfolioWebsitesServices) {
	mainMenuServices.getMainmenu().then(function(data) {
		$scope.name_en = data;
	});

	subMenuServices.getSubmenu().then(function(data) {	
		$scope.sname_en = data;
	});

	//SUBMENU LOGIC (pairnei ta id tou submenu pou einai monadika)
	$scope.findElementById = function(id){
		var el;
		angular.forEach($scope.sname_en, function(element){
			if (element.id === id) {
				el = element;
			};
		})
		return el;
	}
	

	//TOP SLIDESHOW LOGIC (pairnei ta bid pou einai monadika kai emfanizei t' analoga slides)
	topSlideshowServices.getTopSlideshow().then(function(data) {
		$scope.homeCarousel = [];
		$scope.homeCarousel.push(findElementCarouselByBid(24,data));
		$scope.homeCarousel.push(findElementCarouselByBid(18,data));
		$scope.homeCarousel.push(findElementCarouselByBid(23,data));
		$scope.homeCarousel.push(findElementCarouselByBid(20,data));
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
	portfolioWebsitesServices.getPortfolioWebsites().then(function(data) {
		$scope.img = data;
	});

	// WEBSITE CONTENT
	websitecontent.getTexts().then(function(data) {
		$scope.en_txt = data;
	});

	//CONTENT LOGIC (pairnei ta id ton periexomenon pou einai monadika)
	$scope.findTextElementById = function(id){
		var text;
		angular.forEach($scope.en_txt, function(element){
			if (element.id === id) {
				text = element;
			};
		})
		return text;
	}

}]);

//myAppControllers.controller('myAppPortfolioCtrl', ['$scope','portfolioServices', function($scope, portfolioServices) {
//	portfolioServices.getportfolio().then(function(data) {
//		console.log(data);
//		$scope.img = data;
//	});

//}]);