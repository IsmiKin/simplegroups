'use strict';

/**
 * @ngdoc directive
 * @name ngSimpleGroupsApp.directive:groupLi
 * @description
 * # groupLi
 */
angular.module('ngSimpleGroupsApp')
  .directive('groupli', function () {
    return {
      scope: {
        group: '=',
      },
      templateUrl: 'views/groupli.html',
      restrict: 'E',
      transclude: true,
      link: angular.noop,
      controller: GroupLiController,
      controllerAs: 'groupli',
      bindToController: true,
    };

    function GroupLiController(ENV) {
      var groupli = this;

      groupli.endpoint = ENV.kjuesEndpoint;
      console.log(groupli.endpoint);

      // navigation.loggedIn = authService.loggedIn;
      // navigation.openLogin = authService.login;
      // navigation.logout = authService.logout;

    }
  });
