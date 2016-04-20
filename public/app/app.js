"use strict";

angular.module('app', ['ngResource', 'ngRoute','app.controllers',
  'app.services',
  'appConfig']);

angular.module('app').config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
		templateUrl:'/partials/main',
		controller: 'mainCtrl'
	});
});
