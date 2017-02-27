'use strict';

// Declare app level module which depends on views, and components
angular.module('pigy', [
	'ngRoute',
	'ngAnimate',
	'pigy.component'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider
		.when("/music", {
			template: "<music-detail></music-detail>"
		})
		/*.when("/music/:musicId", {
			template: "<music-detail></music-detail>"
		})*/
		.when("/think-add", {
			template: "<think-add></think-add>"
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