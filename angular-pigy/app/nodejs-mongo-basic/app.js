angular.module("basic", ['ngResource']).controller('ListController', ["$resource","$http", function($list,$http) {
	var _this = this;
	this.contacts = [{
		type: 'phone',
		value: '408 555 1212'
	}, {
		type: 'email',
		value: 'john.smith@example.org'
	}];
	$http({
		method: 'GET',
		url: '/basic/list'
	}).then(function successCallback(response) {
		_this.list = response;
	}, function errorCallback(response) {
		_this.list = null;
	});
	console.log(_this.list);
	console.log(_this.contacts);
}])