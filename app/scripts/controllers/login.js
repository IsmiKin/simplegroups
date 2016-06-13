'use strict';

/**
 * @ngdoc function
 * @name ngSimpleGroupsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngSimpleGroupsApp
 */
angular.module('ngSimpleGroupsApp')
  .controller('LoginCtrl', function (authService) {
    var vm = this;

    vm.openLogin = openLogin;

    function openLogin(){
      authService.login();
    }

  });
