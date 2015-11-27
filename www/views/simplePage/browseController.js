'use strict';

angular.module('dionics.browseController', ['ionic', 'dionics.localStorage', 'dionics.cameraService'])

.controller('BrowseCtrl', function ($scope, $ionicModal, $timeout, $state, localStorage, Camera) {

	$scope.user ={};
	$scope.lastPhoto;

	$scope.$on('$ionicView.enter', function(){ 
		var authenticatedUser = localStorage.get("userAuthenticated", false);
		if (authenticatedUser!= false)
			$scope.user = angular.fromJson(localStorage.get("user"+authenticatedUser, false));

	});

	$scope.takePhoto = function(){
		Camera.getPicture().then(function(imageURI) {
	      $scope.lastPhoto = imageURI;
	    }, function(err) {
	      console.err(err);
	    });
	};

	$scope.savePerson = function() {
        var PeopleObject = Parse.Object.extend("UserObj");
        var person = new PeopleObject();
        person.set("name", $scope.user.name);
        person.save(null, {});
    };


})