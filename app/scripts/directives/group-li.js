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
        usergroups: '=',
        endpoint: '='
      },
      templateUrl: 'views/groupli.html',
      restrict: 'E',
      transclude: true,
      link: angular.noop,
      controller: GroupLiController,
      controllerAs: 'groupli',
      bindToController: true,
    };

    function GroupLiController(ENV, groupsService, $route, $routeParams) {
      var groupli = this;

      groupli.isMember = isMember;
      groupli.joinGroup = joinGroup;
      groupli.leaveGroup = leaveGroup;

      function isMember(){
        return _.includes(groupli.usergroups, groupli.group.id);
      }

      function joinGroup(){
        groupsService.addUserGroup(groupli.group.id);
        $route.reload();
      }

      function leaveGroup(){
        groupsService.removeUserGroup(groupli.group.id);
        $route.reload();
      }

    }
  });
