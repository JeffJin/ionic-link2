angular.module('link2.services', ['ngResource'])

  .factory('Session', function ($resource) {
    return $resource('http://172.20.10.2:5000/sessions/:sessionId');
  });