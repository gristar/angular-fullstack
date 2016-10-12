'use strict';

// Declare app level module which depends on views, and components
angular.module('pigy', [
  'ngRoute',
  'pigy.detail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/book',templateUrl:"book.html"});
}]);
