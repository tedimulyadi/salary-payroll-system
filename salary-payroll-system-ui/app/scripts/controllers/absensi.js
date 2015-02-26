'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:AbsensiCtrl
 * @description
 * # AbsensiCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('AbsensiCtrl', function ($scope, AbsenService) {
    $scope.currentAbsensi = {};
    $scope.absensies = AbsenService.query();
    
    $scope.save = function() {
        AbsenService.save($scope.currentAbsensi).success(function() {
            $scope.absensies = AbsenService.query();
            console.log("Save Berhasil");
        })
    };
    
  });
