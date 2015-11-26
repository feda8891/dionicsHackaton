'use strict';

angular.module('dionics.menuController', ['ionic', 'dionics.localStorage'])

.controller('MenuCtrl', function($scope, $ionicModal, $timeout, localStorage) {

	$scope.$on('$ionicView.enter', function(){ 
		var authenticatedUser = localStorage.get("userAuthenticated", false);
		if (authenticatedUser!= false)
			$scope.user = angular.fromJson(localStorage.get("user"+authenticatedUser, false));

	});


})