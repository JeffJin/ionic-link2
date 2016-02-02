angular.module('link2.services')
  .constant('ServerAddress', {
    sessionList: 'http://jenkins.eworks.io:5000/sessions/'
  })
  .factory('Session', function ($resource, ServerAddress) {
    return $resource(ServerAddress.sessionList + ':sessionId');
  });