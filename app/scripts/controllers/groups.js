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

    vm.searchLoading = false;

    vm.updateSearch = updateSearch;
    vm.clearSearch = clearSearch;
    vm.searching = searching;

    function updateSearch(){
      vm.searchLoading = true;
      groupsService
        .getGroups(vm.search)
        .then(function(groups){
          vm.groups = groups;
          vm.endpoint = groups.endpoint;          
          vm.searchLoading = false;
        });

      groupsService
        .userGroups()
        .then(function(groups){
          vm.userGroups = groups;
        });

      groupsService
        .removeUserGroup(2);
    }

    function clearSearch(){
      vm.search = '';
      vm.groups = [];
    }

    function searching(){
      return vm.search.length > 0;
    }


  });
