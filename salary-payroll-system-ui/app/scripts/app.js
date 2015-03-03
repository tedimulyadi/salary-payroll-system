'use strict';

/**
 * @ngdoc overview
 * @name manajemenPasswordUiApp
 * @description
 * # manajemenPasswordUiApp
 *
 * Main module of the application.
 */
angular
  .module('manajemenPasswordUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/system/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
       .when('/system/role', {
        templateUrl: 'views/role.html',
        controller: 'RoleCtrl'
      })
       .when('/report/userreport', {
        templateUrl: 'views/userreport.html',
        controller: 'UserreportCtrl   '
      })
      .otherwise({
        redirectTo: '/'
      });
  });