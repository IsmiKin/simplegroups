'use strict';

/**
 * @ngdoc service
 * @name ngSimpleGroupsApp.groupsService
 * @description
 * # groupsService
 * Service in the ngSimpleGroupsApp.
 */
angular.module('ngSimpleGroupsApp')
  .service('groupsService', function (ENV, $http, $firebaseObject, authService, _) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var firebaseRef = new Firebase("https://simple-groups.firebaseio.com/groups");
    var obj = $firebaseObject(firebaseRef);

    return {
      getGroups: getGroups,
      getGroup: getGroup,
      userGroups: userGroups,
      removeUserGroup: removeUserGroup,
      addUserGroup: addUserGroup
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

    function userGroups(){
      return obj.$loaded().then(function(fireData){
        return fireData[authService.getUser().global_client_id];
      });
    }

    function removeUserGroup(group){
      userGroups()
        .then(function(groups){
          var userGroups = obj[authService.getUser().global_client_id] || [];
          obj[authService.getUser().global_client_id] = _.without(userGroups, group);
          obj.$save().then(function(ref) {
            ref.key() === obj.$id; // true
          }, function(error) {
            console.log("Error:", error);
          });
        });
    }

    function addUserGroup(group){
      userGroups()
        .then(function(groups){
          var userGroups = obj[authService.getUser().global_client_id] || [];
          obj[authService.getUser().global_client_id] = _.concat(userGroups,group);
          obj.$save().then(function(ref) {
            ref.key() === obj.$id; // true
          }, function(error) {
            console.log("Error:", error);
          });
        });
    }


  });
