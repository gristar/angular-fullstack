'use strict';

// Declare app level module which depends on views, and components
angular.module('pigy', [
	'ngRoute',
	'pigy.detail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider
		.when("/music", {
			template: "<music-detail></music-detail>"
		})
		.otherwise({
			redirectTo: '/book',
			template: "<book-detail></book-detail>"
		});
		/*.otherwise({
			redirectTo: '/book',
			templateUrl: "content/book.html"
		});*/
}]);