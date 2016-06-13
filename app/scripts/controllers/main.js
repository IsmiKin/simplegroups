'use strict';

/**
 * @ngdoc function
 * @name ngSimpleGroupsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngSimpleGroupsApp
 */
angular.module('ngSimpleGroupsApp')
  .controller('MainCtrl', function (authService) {

    var vm = this;
    vm.loggedIn = authService.loggedIn;
    vm.variable = "pikachu";
    console.log("pika");
    console.log(authService.loggedIn());

  });
