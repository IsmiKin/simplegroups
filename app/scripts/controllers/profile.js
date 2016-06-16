'use strict';

/**
 * @ngdoc function
 * @name ngSimpleGroupsApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the ngSimpleGroupsApp
 */
angular.module('ngSimpleGroupsApp')
  .controller('ProfileCtrl', function (authService, groupsService) {
    var vm = this;

    vm.data = authService.getUser();

  });
