angular.module('link2.controllers')
  
  .controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
  })

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
  })
  .controller('ProfileCtrl', function ($scope, ngFB) {
    ngFB.api({
      path: '/me',
      params: {fields: 'id,name,email'}
    }).then(
      function (user) {
        $scope.user = user;
      },
      function (error) {
        alert('Facebook error: ' + error.error_description);
      });

  })
  .controller('BrowseCtrl', function ($scope, $ionicActionSheet, $ionicBackdrop, $ionicPopover, $timeout) {

    // Triggered on a button click, or some other target
    $scope.show = function() {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          {text: '<b>Share</b> This'},
          {text: 'Move'}
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
          console.log('Cancel button clicked');

        },
        buttonClicked: function (index) {
          console.log('Button ' + this.buttons[index].text + ' clicked');
          return true;
        },
        destructiveButtonClicked: function (index) {
          console.log('Delete button clicked');
          return true;
        }
      });

      // For example's sake, hide the sheet after two seconds
      $timeout(function () {
        hideSheet();
      }, 2000);
    };

    $scope.showBackdrop = function() {
      $ionicBackdrop.retain();
      $timeout(function() {
        $ionicBackdrop.release();
      }, 3000);
    };

    $scope.hideBackdrop = function() {
      $ionicBackdrop.release();
    };

    // Execute action on backdrop disappearing
    $scope.$on('backdrop.hidden', function() {
      // Execute action
    });

    // Execute action on backdrop appearing
    $scope.$on('backdrop.shown', function() {
      // Execute action
    });

    $ionicPopover.fromTemplateUrl('js/components/warning/warning.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });

  });
