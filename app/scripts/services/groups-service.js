'use strict';

/**
 * @ngdoc service
 * @name ngSimpleGroupsApp.groupsService
 * @description
 * # groupsService
 * Service in the ngSimpleGroupsApp.
 */
angular.module('ngSimpleGroupsApp')
  .service('groupsService', function (ENV, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      getGroups: getGroups
    };

    function getGroups(search){
      return $http.get(ENV.apiRoot + '/groups?prefix=' + search)
        .then(function(response){
          return response.data.groups;
        });
    }

    function getGroup(groupId){
      return $http.get(ENV.apiRoot + '/groups/' + groupId)
        .then(function(response){

        });
    }


  });
