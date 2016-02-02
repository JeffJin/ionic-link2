
angular.module('link2.services', []);

angular.module('link2.components', []);

angular.module('link2.controllers', []);

angular.module('link2', [
  'ionic',
  'ionic.service.core',
  'ngResource',
  'ngCordova',
  'ngOpenFB',
  'link2.components',
  'link2.services',
  'link2.controllers'
]);