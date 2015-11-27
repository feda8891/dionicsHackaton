'use strict';

angular.module('dionics.mapController', ['ionic'])

.controller('MapCtrl', function ($scope, $ionicModal, $timeout, $state, localStorage) {

	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
})