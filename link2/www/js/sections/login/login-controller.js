angular.module('link2.controllers')
  .controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $cordovaTouchID, $state, $ionicPopover, ngFB) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Perform the login action when the user submits the login form
    $scope.doLogin = function ($event) {

      //touch id login
      $cordovaTouchID.checkSupport().then(function() {
        $cordovaTouchID.authenticate("You must authenticate").then(function() {
          $scope.openSuccessPopover($event);
        }, function(error) {
          console.log('touch id authentication failed', JSON.stringify(error));

        });
      }, function(error) {
        console.log('touch id is not supported on this device', JSON.stringify(error));
      });
    };


    $ionicPopover.fromTemplateUrl('js/components/login/success.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.goToSessions = function(){
      $scope.closeSuccessPopover();
      $state.go("app.sessions");
    };

    $scope.openSuccessPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closeSuccessPopover = function() {
      $scope.popover.hide();
    };

    $scope.goToProfile = function(){
      $state.go("app.profile");
    };

    //facebook login
    $scope.fbLogin = function () {
      ngFB.login({scope: 'email,public_profile'}).then(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $scope.goToProfile();
          } else {
            alert('Facebook login failed');
          }
        });
    };

  });
