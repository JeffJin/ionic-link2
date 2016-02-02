angular.module('link2.services', ['ngResource'])

  .factory('Session', function ($resource) {
    return $resource('http://jenkins.eworks.io:5000/sessions/:sessionId');
  });