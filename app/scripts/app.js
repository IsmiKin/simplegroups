'use strict';

/**
 * @ngdoc overview
 * @name ngSimpleGroupsApp
 * @description
 * # ngSimpleGroupsApp
 *
 * Main module of the application.
 */
angular
  .module('ngSimpleGroupsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'auth0',
    'angular-storage',
    'angular-jwt',
    'ngStorage',
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl',
        controllerAs: 'groups',
        resolve: {
          user: function(authService){
            return authService.loggedIn() ? authService.getUser() : authService.redirectHome();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
