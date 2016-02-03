angular.module('link2.controllers')
  .controller('SessionsCtrl', function($scope, $http, SessionService) {

    $scope.reloadSessions = function(){
      if($scope.sessions && $scope.sessions.length){
        $scope.$broadcast('scroll.refreshComplete');
        $scope.sessions = _.reverse($scope.sessions);
      }
      else{
        $scope.loadSessions().finally(function(){
          $scope.$broadcast('scroll.refreshComplete');
        });
      }
    };

    $scope.loadSessions = function(){
      return SessionService.getSessions().then(
        function(result) {
          $scope.sessions = result.data;
        }, function(){
          $scope.sessions = [];
        });
    };

    $scope.loadSessions();

  });
