'use strict';

/**
 * @ngdoc directive
 * @name ngSimpleGroupsApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('ngSimpleGroupsApp')
  .directive('navigation', function () {
    return {
      templateUrl: 'views/navigation.html',
      restrict: 'E',
      transclude: true,
      link: angular.noop,
      controller: NavigationController,
      controllerAs: 'navigation',
      bindToController: true,
    };

    function NavigationController(authService) {
      var navigation = this;

      navigation.loggedIn = authService.loggedIn;
      navigation.openLogin = authService.login;
      navigation.logout = authService.logout;

    }
  });
