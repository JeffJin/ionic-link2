angular.module('link2.controllers')
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
