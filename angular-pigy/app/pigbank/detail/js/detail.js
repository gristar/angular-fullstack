'use strict'
angular.module("pigy.detail", ["ngRoute"])
	.component('musicDetail', {
		templateUrl: 'music.html',
		controller: ['$routeParams', "$http",
			function MusicListController($routeParams, $http) {
				console.log($routeParams, "params");
				this.phone = 1;
				$http.get('../data/motorola-xoom.json').then(function(response) {
					console.log(response, "response");
				}, function(error) {
					console.log(error, "error");
				});
			}
		]
	});