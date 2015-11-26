'use strict';

angular.module('dionics.facebookService',['ngOpenFB'])
.factory('facebookService', function() {
  var myFacebookService = {
    getUserInfo: function (ngFB){
      var promise = ngFB.api({
        path: '/me',
        params: {fields: 'id,name'}}).then( function (user) {
          return user;
        }, function (error) {
          return error;
      });
      return promise;
    }
  };
  return myFacebookService;
});
