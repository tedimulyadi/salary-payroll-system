'use strict';

angular.module('ewalletAdminApp', [
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
        .when('/main/generateVoucher', {
            templateUrl: 'views/generateVoucher.html',
            controller: ''
        })
        .when('/main/transaksiCustomer', {
            templateUrl: 'views/transaksicustomer.html',
            controller: ''
        })
        .when('/main/history_transaksi', {
            templateUrl: 'views/history_transaksi.html',
            controller: ''
        })
        .when('/main/topup', {
            templateUrl: 'views/topup.html',
            controller: ''
        })
        .when('/main/merchant', {
          templateUrl: 'views/merchant.html',
          controller: ''
        })
            .when('/main/jabatan', {
          templateUrl: 'views/jabatan.html',
          controller: ''
        })
        .otherwise({
            redirectTo: '/'
        });
});
