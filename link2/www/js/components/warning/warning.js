angular.module('link2.components')
  .directive('link2Warning', function ($ionicPopover) {
    return {
      restrict : 'A',
      scope:{
        content: '&'
      },
      link: function($scope){

      }

    };

  });
