'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:KaryawanCtrl
 * @description
 * # KaryawanCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('KaryawanCtrl', function ($scope, KaryawanService) {
    $scope.currentKaryawan = {};
    $scope.karyawans = KaryawanService.query();
    $scope.isSelected = null;
    $scope.editNip = null;
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentKaryawan = KaryawanService.get({id: x.id}, function(data) {
            $scope.editNip = data.nip;
            $scope.validateNip = false;
        });
    };
    
    $scope.save = function() {
        KaryawanService.save($scope.currentKaryawan).success(function() {
            $scope.karyawans = KaryawanService.query();
            $scope.clear();
        })
    };
    
    $scope.clear = function() {
        $scope.currentKaryawan = "";
    };
    
    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            KaryawanService.remove($scope.isSelected).success(function() {
                $scope.karyawans = KaryawanService.query();
                $scope.isSelected = null;
                $('#modalDelete').modal('hide');
            })
        }
    };
    
    $scope.showModalDelete = function(x) {
        $scope.isSelected = x;
        
        $('#modalDelete').modal('show');
    };

    $scope.showReportModal = function() {        
        $('#modalReport').modal('show');
    };
  });
