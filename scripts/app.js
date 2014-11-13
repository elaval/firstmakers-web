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
        templateUrl: 'views/seccion1.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/seccion1.html',
        controller: 'MainCtrl'
      })
      .when('/gettingstarted', {
        templateUrl: 'views/seccion2.html',
        controller: 'MainCtrl'
      })
     .when('/examples', {
        templateUrl: 'views/seccion3.html',
        controller: 'MainCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });
  })
