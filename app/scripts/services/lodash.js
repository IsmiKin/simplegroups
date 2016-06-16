'use strict';

/**
 * @ngdoc service
 * @name ngSimpleGroupsApp.lodash
 * @description
 * # lodash
 * Service in the ngSimpleGroupsApp.
 */
angular.module('ngSimpleGroupsApp')
  .service('_', function ($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    if(!$window._){
      // If lodash is not available you can now provide a
      // mock service, try to load it from somewhere else,
      // redirect the user to a dedicated error page, ...
    }
    return $window._;

  });
