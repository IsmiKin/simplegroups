'use strict';

/**
 * @ngdoc service
 * @name ngSimpleGroupsApp.authService
 * @description
 * # authService
 * Service in the ngSimpleGroupsApp.
 */
angular.module('ngSimpleGroupsApp')
  .service('authService', function ($localStorage, jwtHelper, $location, $route, ENV) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var lock = new Auth0Lock(ENV.auth0ClientID, ENV.auth0Domain);

    return {
      login: login,
      logout: logout,
      loggedIn: loggedIn,
      getUser: getUser,
      redirectHome: redirectHome
    };
    console.log(ENV);
    function login() {

      lock.show( function(error, profile, id_token) {
          if (error) {
            console.log(error);
          }
          // We get a profile object for the user from Auth0
          $localStorage.profile = JSON.stringify(profile);
          // We also get the user's JWT
          $localStorage.id_token = id_token;
          // we need in rootScope for the auth in the
          redirectHome();
        });
    }

    function logout() {
      // To log out, we just need to remove
      // the user's profile and token
      resetLocalStorage();
      redirectHome();
    }

    function loggedIn() {
       return $localStorage.id_token ? !jwtHelper.isTokenExpired($localStorage.id_token) : false;
     }

     function getUser(){
       return $localStorage.profile;
     }

     function resetLocalStorage(){
       $localStorage.$reset();
     }

     function redirectHome(){
       $location.path('/');
       $route.reload();
     }

  });
