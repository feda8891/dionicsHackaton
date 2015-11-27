'use strict';

angular.module('dionics.cardController', ['ionic', 'ngOpenFB', 'dionics.facebookService', 'dionics.localStorage'])

.controller('CardCtrl', function($scope, $ionicModal, $timeout, ngFB, $state, localStorage, facebookService, $ionicSlideBoxDelegate, $ionicTabsDelegate) {

    $scope.slideHasChanged = function($index) {
        
        $ionicTabsDelegate.select($index);
    }

    $scope.onTabSelected = function() {
        
        var x = $ionicTabsDelegate.selectedIndex();
        $ionicSlideBoxDelegate.slide(x)
    }

})