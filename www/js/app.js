// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('dionics', ['ionic', 'dionics.menuController','dionics.loginController', 'ngOpenFB', 'dionics.loginFacebookController', 'dionics.browseController', 'dionics.cardController', 'countTo', 'uiGmapgoogle-maps', 'dionics.mapController'])

.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '104920509868817'});
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    Parse.initialize("4OqmN3zjfBzBTvhzveigVHCW0NbSfwHbDeJageLh", "gQxFzEJE1lWnzLj6i4LbJdnO2bgxaNodL4wBe0B0");

    Ionic.io();

    var push = new Ionic.Push({
      "debug": true,
      "onNotification": function(notification) {
          var payload = notification.payload;
          console.log(notification, payload);
      }
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
            
    });
  });
})


.config(function($stateProvider, $urlRouterProvider, $compileProvider, uiGmapGoogleMapApiProvider) {

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

  $stateProvider

  .state('login', {  
    url: '/login',
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl' 
  })

  .state('fbLogin', {  
    url: '/fbLogin',
    templateUrl: 'views/facebookLogin/facebookLogin.html',
    controller: 'LoginFacebookCtrl' 
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.card', {
      url: '/card',
      views: {
        'menuContent': {
          templateUrl: 'views/card/card.html',
          controller: 'CardCtrl'
        }
      }
    })

  .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'views/map/map.html',
          controller: 'MapCtrl'
        }
      }
    })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          cache: false,
          templateUrl: 'views/simplePage/browse.html',
          controller: 'BrowseCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/fbLogin');
});
