'use strict'
angular.module("pigy.detail", ["ngRoute"])
	.component('musicDetail', {
		templateUrl: 'content/music.html',
		controller: ['$routeParams', "$http",
			function MusicListController($routeParams, $http) {
				console.log($routeParams, "params");
				this.phone = 1;
				$http.get('/test').then(function(response) {
					console.log(response, "response");
				}, function(error) {
					console.log(error, "error");
				});
			}
		]
	});