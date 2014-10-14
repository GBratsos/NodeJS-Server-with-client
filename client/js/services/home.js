'use strict';

var myAppServices = angular.module('myAppServices', ['ngRoute'])

myAppServices.factory('homeServices', ['$http', '$q', function($http, $q) {
	return {
		getVillage: function() {
			var deffered = $q.defer();
			$http.get('json/getVillages').
				success(function(data){
					deffered.resolve(data);
				});
			return deffered.promise;
		}
	}

}]);