'use strict';

angular.module('app.services', []).
factory('TestRequestService', ['$http', 'ENV',
  function TestRequestService ($http, ENV) {
    return {
      testWithNoAuthentication: function() {
        return $http.get(ENV.apiEndpoint + '/users/testWithNoAuthentication');
      },
      sayHelloToAke: function() {
        return $http.get(ENV.apiEndpoint + '/users/sayhellototheclub');
      },
      signIn: function(user) {
        return $http.post(ENV.apiEndpoint + '/users/signin', user);
      },
      postUser: function(user) {
        return $http.post(ENV.apiEndpoint + '/users/user', user);
      },// /user/:userid
      putUser: function(id, user) {
        return $http.put(ENV.apiEndpoint + '/users/user/'+id, user);
      },
      signOut: function() {
        return $http.put(ENV.apiEndpoint + '/users/user/signout');
      }
    }
  }
]);
