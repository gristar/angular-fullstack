'use strict'
angular.module("pigy.component", ["ngRoute"])
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
	})
	.component('bookDetail', {
		templateUrl: 'content/book.html',
		controller: ['$routeParams', "$http",
			function BookListController($routeParams, $http) {
				console.log($routeParams, "params");
				var _this = this;
				$http.get('../data/test_data.json').then(function(response) {
					console.log(response, "response");
					_this.info = response.data.content.info;
					_this.thinks = response.data.content.info.taskPlanList.list;
				}, function(error) {
					console.log(error, "error");
				});
			}
		]
	})
	.component('thinkAdd', {
		templateUrl: 'content/add.html',
		controller: ['$routeParams', "$http",
			function ThinkAddController($routeParams, $http) {
				
			}
		]
	});
	
