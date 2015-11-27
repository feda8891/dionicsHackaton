'use strict';

angular.module('dionics.loginFacebookController', ['ionic', 'ngOpenFB', 'dionics.facebookService', 'dionics.localStorage'])

.controller('LoginFacebookCtrl', function($scope, $ionicModal, $timeout, ngFB, $state, localStorage, facebookService) {

	$scope.loginData = {};
	$scope.doLogin = function (){
	   $state.go('app.browse');
	};

	$scope.fbLogin = function () {
    ngFB.login({scope: 'email, public_profile'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
               // $scope.closeLogin();
                facebookService.getUserInfo(ngFB).then (function (user) {
                    localStorage.set('userAuthenticated', user.id);
                    localStorage.set('user'+user.id, JSON.stringify(user));
                    $state.go('app.browse');
                });
            } else {
                alert('Facebook login failed');
            }
        });
	};


})