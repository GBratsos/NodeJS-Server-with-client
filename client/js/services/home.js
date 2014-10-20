'use strict';

var myAppServices = angular.module('myAppServices', ['ngRoute'])

myAppServices.factory('mainMenuServices', ['$http', '$q', function($http, $q) {
	return {
		getMainmenu: function() {
			var deffered = $q.defer();
			$http.get('json/getMainMenu').
				success(function(data){
					deffered.resolve(data);
				});
			return deffered.promise;
		}
	}

}]);

myAppServices.factory('subMenuServices', ['$http', '$q', function($http, $q) {
	return {
		getSubmenu: function() {
			var deffered = $q.defer();
			$http.get('json/getSubMenu').
				success(function(data){
					deffered.resolve(data);
				});
			return deffered.promise;
		}
	}

}]);

myAppServices.factory('topSlideshowServices', ['$http', '$q', function($http, $q) {
	return {
		getTopSlideshow: function() {
			var deffered = $q.defer();
			$http.get('json/getTopSlideshow').
				success(function(data){
					deffered.resolve(data);
				});
			return deffered.promise;
		}
	}

}]);

myAppServices.factory('portfolioWebsitesServices', ['$http', '$q', function($http, $q) {
	return {
		getPortfolioWebsites: function() {
			var deffered = $q.defer();
			$http.get('json/getPortfolioWebsites').
				success(function(data){
					deffered.resolve(data);
				});
			return deffered.promise;
		}
	}

}]);

myAppServices.factory('websitecontent', ['$http', '$q', function($http, $q) {
	return {
		getTexts: function() {
			var deffered = $q.defer();
			$http.get('json/getTexts').
				success(function(data){
					deffered.resolve(data);
				});
			return deffered.promise;
		}
	}

}]);