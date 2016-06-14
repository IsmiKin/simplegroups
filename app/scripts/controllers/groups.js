'use strict';

/**
 * @ngdoc function
 * @name ngSimpleGroupsApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the ngSimpleGroupsApp
 */
angular.module('ngSimpleGroupsApp')
  .controller('GroupsCtrl', function (groupsService) {

    var vm = this;

    initialize();

    function initialize(){
      groupsService
        .getGroups('a')
        .then(function(groups){
          console.log(groups);
          vm.groups = groups;
        });
    }

  });
