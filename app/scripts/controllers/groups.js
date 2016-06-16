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
      vm.groups = groupsService
        .getGroups(vm.search)
        .then(function(groups){
          vm.searchLoading = false;
          return groups;
        });

      // vm.userGroups = groupsService
      //   .userGroups()
      //   .then(function(groups){
      //     console.log(groups);
      //     return groups;
      //   });

      groupsService
        .updateUserGroup();
    }

    function clearSearch(){
      vm.search = '';
    }

    function searching(){
      return vm.search.length > 0;
    }

  });
