angular.module('link2.controllers')
  .controller('SessionCtrl', function ($scope, $stateParams, Session, ngFB) {
    $scope.session = Session.get({sessionId: $stateParams.sessionId});

    $scope.share = function (event) {
      ngFB.api({
        method: 'POST',
        path: '/me/feed',
        params: {
          message: "I'll be attending: '" + $scope.session.title + "' by " +
          $scope.session.speaker
        }
      }).then(
        function () {
          alert('The session was shared on Facebook');
        },
        function () {
          alert('An error occurred while sharing this session on Facebook');
        });
    };

    $scope.$on('$ionicView.enter', function( scopes, states ) {
      console.log('$ionicView.enter', states.title, states.transition, states.stateName);
    });
  });
