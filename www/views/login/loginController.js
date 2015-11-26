'use strict';

angular.module('dionics.loginController', ['ionic'])

.controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $state, localStorage) {

	$scope.loginData = {};
	$scope.doLogin = function (){
		$state.go('app.browse');
	};

})