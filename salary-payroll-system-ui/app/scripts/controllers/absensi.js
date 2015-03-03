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
    $scope.isSelected = null;
    $scope.editNip = null;
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentAbsensi = AbsenService.get({id: x.id}, function(data) {
            $scope.editNip = data.nip;
            $scope.validateNip = false;
        });
    };
    
    $scope.save = function() {
        AbsenService.save($scope.currentAbsensi).success(function() {
            $scope.absensies = AbsenService.query();
            $scope.clear();
        })
    };
    
    $scope.clear = function() {
        $scope.currentAbsensi = "";
    };
    
    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            AbsenService.remove($scope.isSelected).success(function() {
                $scope.absensies = AbsenService.query();
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
