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

myAppServices.factory('portfolioServices', ['$http', '$q', function($http, $q) {
	return {
		getPortfolio: function() {
			var deffered = $q.defer();
			$http.get('json/getPortfolio').
				success(function(data){
					deffered.resolve(data);
				});
			return deffered.promise;
		}
	}

}]);