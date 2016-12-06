angular.module("basic", ['ngResource']).controller('BasicController', ["$resource", "$http", function($list, $http) {
	var _this = this;
	_this.item={
		title:"title",
		summary:"summary"
	};
	$http({
		method: 'GET',
		url: '/basic/query'
	}).then(function successCallback(response) {
		_this.list = response.data;
		console.log(_this.list);
	}, function errorCallback(response) {
		_this.list = null;
	});
	_this.add = function() {
		new dialog({
			title: "增加",
			content: $("#ht-add").html(),
			width: "600px",
			okValue: '确定',
			ok: function() {
				console.log($("#add-form").serialize(), "add params");
				$http({
					method: 'GET',
//					data: $("#add-form").serialize(),
					url: '/basic/insert?'+$("#add-form").serialize()
				}).then(function successCallback(response) {
					_this.list.push(response.data);
					console.log(_this.list);
				}, function errorCallback(response) {
					console.log("增加失败");
				});
			},
			cancelValue: '取消',
			cancel: function() {
				
			},
			fixed: true
		}).show();
	};
	_this.dlt = function(id) {
		$http({
			method: 'GET',
			url: '/basic/delete/' + id
		}).then(function successCallback(response) {
			console.log(_this.list);
		}, function errorCallback(response) {
			console.log("增加失败");
		});
	};
	_this.edit = function(id) {
		$http({
			method: 'GET',
			url: '/basic/query/'+id
		}).then(function successCallback(response) {
			_this.item = response.data;
			_this.item.title = "title1";
			console.log(_this.item);
		}, function errorCallback(response) {
			console.log("获取数据失败","edit");
			_this.item = null;
		});
		new dialog({
			title: "修改",
			content: $("#ht-add").html(),
			width: "600px",
			okValue: '确定',
			ok: function() {
				console.log($("#add-form").serialize(), "add params");
				$http({
					method: 'GET',
					data: $("#add-form").serialize(),
					url: '/basic/insert'
				}).then(function successCallback(response) {
					
				}, function errorCallback(response) {
					console.log("增加失败");
				});
			},
			cancelValue: '取消',
			cancel: function() {

			},
			fixed: true
		}).show();
	}
}])