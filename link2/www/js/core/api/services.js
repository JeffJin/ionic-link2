angular.module('link2.services')
  .constant('ServerAddress', {
    sessionList: 'http://jenkins.eworks.io:5000/sessions/',
    sessionDetails: 'http://jenkins.eworks.io:5000/sessions/'
  })
  .factory('Session', function ($resource, ServerAddress) {
    return $resource(ServerAddress.sessionList + ':sessionId');
  })
  .factory('SessionService', function ($http, ServerAddress) {

    function getSessions(){
      return $http.get(ServerAddress.sessionList);
    }

    function getSessionDetails(sid){
      return $http.get(ServerAddress.sessionDetails + sid);
    }

    return {
      getSessions: getSessions,
      getSessionDetails: getSessionDetails
    };
  });