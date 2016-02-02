angular.module('link2.controllers')
  
  .controller('SearchCtrl', function($scope, Session) {
    $scope.searchResults = Session.query();

  });
