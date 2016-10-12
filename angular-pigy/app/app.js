'use strict';

// Declare app level module which depends on views, and components
angular.module('pigy', [
  'ngRoute',
  'pigy.detail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when("/music",{template:"<music-detail></music-detail>"})
  .otherwise({redirectTo: '/book',templateUrl:"book.html"});
}]);
