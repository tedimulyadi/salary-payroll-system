'use strict';

angular.module('penggajianUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/main/jabatan', {
          templateUrl: 'views/jabatan.html',
          controller: 'JabatanCtrl'
        })
        .when('/main/bank', {
          templateUrl: 'views/bank.html',
          controller: 'BankCtrl'
        })
         .when('/main/absensi', {
          templateUrl: 'views/absensi.html',
          controller: 'AbsensiCtrl'
        })
           .when('/main/cuti', {
          templateUrl: 'views/cuti.html',
          controller: 'CutiCtrl'
        })
         .when('/main/lembur', {
          templateUrl: 'views/lembur.html',
          controller: ''
        })
        .when('/main/pinjaman', {
          templateUrl: 'views/pinjaman.html',
          controller: 'PinjamanCtrl'
        })
        .when('/main/potongan', {
          templateUrl: 'views/potongan.html',
          controller: 'PotonganCtrl'
        })
        .when('/main/gaji', {
          templateUrl: 'views/gaji.html',
          controller: ''
        })
        .when('/main/karyawan', {
          templateUrl: 'views/karyawan.html',
          controller: 'KaryawanCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
