"use strict";

angular.module('app.controllers', []).controller('mainCtrl',['$scope', 'TestRequestService', function($scope, TestRequestService) {
	$scope.myVar = "Hello Angular";

	$scope.testWithNoAuthentication = function() {
      TestRequestService.testWithNoAuthentication().success(function(data) {
        console.log(data);
      }).error(function(data, status) {
        console.log("Error on request 'testWithNoAuthentication'");
        console.log(data);
        console.log(status);
      });
    };
    $scope.sayHelloToAke = function() {
      TestRequestService.sayHelloToAke().success(function(data) {
        console.log(data);
      }).error(function(data, status) {
        console.log("Du måste vara inloggad för att säga hej till Åke!");
        console.log(data);
        console.log(status);
      });
    };
    $scope.signIn = function() {
      TestRequestService.signIn({
        userName: "Pelle",
        password: "nöffnöffnöff"
      }).success(function(data) {
        console.log(data);
      }).error(function(data, status) {
        console.log("Error on request 'signIn'");
        console.log(data);
        console.log(status);
      });
    };
    $scope.signOut = function() {
      TestRequestService.signOut().success(function(data) {
        console.log(data);
      }).error(function(data, status) {
        console.log("Error on request 'signOut'");
        console.log(data);
        console.log(status);
      });
    };// 
    $scope.postUser = function() {
      TestRequestService.postUser({
        username: "Pelle",
        password: "nöffnöff",
        firstName: "Adam",
        surName: "Svennson",
        email: "adam.svensson@fffff.ff",
        adress: "Sverige hahaha!"
      }).success(function(data) {
        console.log(data);
      }).error(function(data, status) {
        console.log("Error on request 'postUser'");
        console.log(data);
        console.log(status);
      });
    };
    $scope.putUser = function() {
      TestRequestService.putUser(1, {
        username: "Pellllle",
        password: "nöffnöffnöff",
        firstName: "Adam"
      }).success(function(data) {
        console.log(data);
      }).error(function(data, status) {
        console.log("Error on request 'putUser'");
        console.log(data);
        console.log(status);
      });
    };// signIn
}]);

