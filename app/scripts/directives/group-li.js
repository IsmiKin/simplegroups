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
        usergroups: '='
      },
      templateUrl: 'views/groupli.html',
      restrict: 'E',
      transclude: true,
      link: angular.noop,
      controller: GroupLiController,
      controllerAs: 'groupli',
      bindToController: true,
    };

    function GroupLiController(ENV, groupsService) {
      var groupli = this;

      groupli.endpoint = ENV.kjuesEndpoint;
      groupli.isMember = isMember;
      groupli.joinGroup = joinGroup;
      groupli.leaveGroup = leaveGroup;

      function isMember(){
        return _.includes(groupli.usergroups, groupli.group.id);
      }

      function joinGroup(){
        groupsService.addUserGroup(groupli.group.id);
      }

      function leaveGroup(){
        groupsService.removeUserGroup(groupli.group.id);
      }

    }
  });
