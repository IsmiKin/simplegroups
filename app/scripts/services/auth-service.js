'use strict';

/**
 * @ngdoc service
 * @name ngSimpleGroupsApp.authService
 * @description
 * # authService
 * Service in the ngSimpleGroupsApp.
 */
angular.module('ngSimpleGroupsApp')
  .service('authService', function ($localStorage, jwtHelper) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var lock = new Auth0Lock('9jO3mCvhh8zpgOruKzFIuCefLcKVNCrN', 'ismikin.eu.auth0.com');

    return {
      login: login,
      logout: logout,
      loggedIn: loggedIn
    };

    function login() {
      lock.show( function(error, profile, id_token) {
          if (error) {
            console.log(error);
          }
          // We get a profile object for the user from Auth0
          $localStorage.profile = JSON.stringify(profile);
          // We also get the user's JWT
          $localStorage.id_token = id_token;
          console.log(loggedIn());
        });
    }

    function logout() {
      // To log out, we just need to remove
      // the user's profile and token
      resetLocalStorage();
    }

    function loggedIn() {
       return !jwtHelper.isTokenExpired($localStorage.id_token);
     }

     function resetLocalStorage(){
       $localStorage.$reset();
     }
  });
