angular.module('link2.controllers')
  .controller('SessionsCtrl', function($scope, $http, SessionService) {
    //$scope.sessions = Session.query();

    $scope.reloadSessions = function(){
      SessionService.getSessions().then(
        function(result) {
          $scope.sessions = _.reverse(result.data);
        }, function(){
          $scope.sessions = [];
        })
        .finally(function() {
          // Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.reloadSessions();
  });
