'use strict'
angular.module("pigy.detail", ["ngRoute"])
	.component('musicDetail', {
		templateUrl: 'music.html',
		controller: ['$routeParams',
			function MusicListController($routeParams) {
				console.log($routeParams,"params");
				this.phone = 1;
			}
		]
	})
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when("/music", {
			template: "<music-detail></music-detail>"
		})
	}]);