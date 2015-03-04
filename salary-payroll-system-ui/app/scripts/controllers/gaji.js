'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:GajiCtrl
 * @description
 * # GajiCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('GajiCtrl', function ($scope) {
    $scope.currentGaji = {};
    $scope.gajies = GajiService.query();
    $scope.isSelected = null;
    $scope.editNip = null;
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentGaji = GajiService.get({id: x.id}, function(data) {
            $scope.editNip = data.nip;
            $scope.validateNip = false;
        });
    };
    
    $scope.save = function() {
        GajiService.save($scope.currentGaji).success(function() {
            $scope.gajies = GajiService.query();
            $scope.clear();
        })
    };
    
    $scope.clear = function() {
        $scope.currentGaji = "";
    };
    
    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            GajiService.remove($scope.isSelected).success(function() {
                $scope.gajies = GajiService.query();
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
