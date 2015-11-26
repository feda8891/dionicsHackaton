'use strict';

angular.module('dionics.localStorage',[])
.factory('localStorage', function() {
  var myToken = {
    set: function(key, value) {
      window.localStorage[key] = value;
      return this;
    },
    get: function(key, defaultValue) {
      return window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      window.localStorage[key] = JSON.stringify(value);
      return this;
    },
    getObject: function(key) {
      return JSON.parse(window.localStorage[key] || '{}');
    },
    removeObject: function(key) {
        window.localStorage.removeItem(key);
        return this;
    }
  };
  return myToken;
});
