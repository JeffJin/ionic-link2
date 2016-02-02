angular.module('link2')
  .run(function ($ionicPlatform, ngFB) {

    $ionicPlatform.ready(function() {
      var io = Ionic.io();

      ngFB.init({appId: '173860239647801'});

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      //push notification setup
      var push = new Ionic.Push({
        'debug': true
      });

      push.register(function(token) {
        console.log('Device token:',token.token);
      });
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //Disable cache globally
    //$ionicConfigProvider.views.maxCache(0);

    $stateProvider

      .state('app', {
        abstract: true,
        templateUrl: 'js/sections/main/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'js/sections/login/login.html',
            controller: 'LoginCtrl'
          }
        }
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'js/sections/search/search.html',
            controller: 'SearchCtrl'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'js/sections/browse/browse.html',
            controller: 'BrowseCtrl'
          }
        }
      })
      .state('app.sessions', {
        url: '/sessions',
        views: {
          'menuContent': {
            templateUrl: 'js/sections/sessions/sessions.html',
            controller: 'SessionsCtrl'
          }
        }
      })

      .state('app.session', {
        url: '/sessions/:sessionId',
        views: {
          'menuContent': {
            templateUrl: 'js/sections/session-details/session.html',
            controller: 'SessionCtrl'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'js/sections/profile/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
