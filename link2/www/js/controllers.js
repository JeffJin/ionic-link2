angular.module('link2.controllers', ['link2.services', 'link2.components', 'ngOpenFB', 'ionic'])
  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };

    $scope.fbLogin = function () {
      ngFB.login({scope: 'email,public_profile'}).then(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $scope.closeLogin();
          } else {
            alert('Facebook login failed');
          }
        });
    };
  })

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
