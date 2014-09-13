'use strict';

angular.module('lightningtalks')
  .service('auth', function($window, tokenStorage, $resource, $location) {
    this.user = null;

    this.fetch = function() {
    };

    this.login = function(token) {
      tokenStorage.set(token);
      return this.fetch();
    };

    this.logout = function() {
      tokenStorage.remove();
      return $location.path('/');
    };

    this.isLoggedIn = function() {
      return tokenStorage.has();
    };

    this.shouldBeLoggedIn = function() {
      if (this.user == null) {
        if (tokenStorage.has()) {
          return this.fetch();
        } else {
          return $location.path('/login');
        }
      }
    };
});