'use strict';

/**
 * @ngdoc service
 * @name ngSimpleGroupsApp.groupsService
 * @description
 * # groupsService
 * Service in the ngSimpleGroupsApp.
 */
angular.module('ngSimpleGroupsApp')
  .service('groupsService', function (ENV, $http, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var credentials = {
        username: ENV.kjuesUsername,
        password: ENV.kjuesPassword
      };

    return {
      getGroups: getGroups
    };

    function getGroups(search){
      var a = 'Basic '+ btoa( credentials.username + ':' + credentials.password);
      var b = 'Basic Y2JAcWlycmkuY29tOkxieUFZNXJB';
      console.log(a);
      console.log(b);
      console.log(a==b);
      // return $http
      //   .get('https://cb@qirri.com:LbyAY5rA@qirri-app.appspot.com' + '/api/1/groups?prefix=a')
      // return $http
      //   .jsonp(ENV.kjuesEndpoint + '/api/1/groups?callback=JSON_CALLBACK');
      return $http({
          method: 'JSONP',
          url: ENV.kjuesEndpoint + '/api/1/groups',
          params: {
            prefix: search,
            callback: 'JSON_CALLBACK'
          },
          headers: {
            'Authorization': a
          },
          // headers: { 'Authorization': 'Basic '+ credentials.username + ':' + credentials.password },
          // headers: { 'Authorization': 'Basic Y2JAcWlycmkuY29tOkxieUFZNXJB' },
          withCredentials: true,
          // crossDomain: true,
        })
        .then(function(response){
          console.log(response);
          return response.groups;
        });
    }


  });
