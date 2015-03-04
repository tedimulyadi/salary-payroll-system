'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:PinjamanCtrl
 * @description
 * # PinjamanCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('PinjamanCtrl', function ($scope, PinjamanService) {
    $scope.currentPinjaman = {};
    $scope.pinjamans = PinjamanService.query();
    $scope.isSelected = null;
    $scope.editNip = null;
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentPinjaman = PinjamanService.get({id: x.id}, function(data) {
            $scope.editNip = data.nip;
            $scope.validateNip = false;
        });
    };
    
    $scope.save = function() {
        PinjamanService.save($scope.currentPinjaman).success(function() {
            $scope.absensies = PinjamanService.query();
            $scope.clear();
        })
    };
    
    $scope.clear = function() {
        $scope.currentPinjaman = "";
    };
    
    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            PinjamanService.remove($scope.isSelected).success(function() {
                $scope.absensies = PinjamanService.query();
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
