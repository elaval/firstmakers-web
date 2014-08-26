'use strict';

angular
  .module('firstMakersApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'gettext',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  angular.module('firstMakersApp').run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('es');
  });;