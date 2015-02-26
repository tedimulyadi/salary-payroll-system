'use strict';

angular.module('penggajianUiApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/main/jabatan', {
          templateUrl: 'views/jabatan.html',
          controller: ''
        })
        .when('/main/bank', {
          templateUrl: 'views/bank.html',
          controller: ''
        })
         .when('/main/absensi', {
          templateUrl: 'views/absensi.html',
          controller: 'AbsensiCtrl'
        })
           .when('/main/cuti', {
          templateUrl: 'views/cuti.html',
          controller: ''
        })
         .when('/main/lembur', {
          templateUrl: 'views/lembur.html',
          controller: ''
        })
        .when('/main/pinjaman', {
          templateUrl: 'views/pinjaman.html',
          controller: ''
        })
        .when('/main/potongan', {
          templateUrl: 'views/potongan.html',
          controller: ''
        })
        .when('/main/gaji', {
          templateUrl: 'views/gaji.html',
          controller: ''
        })
        .otherwise({
            redirectTo: '/'
        });
});
