'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:PotonganCtrl
 * @description
 * # PotonganCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('PotonganCtrl', function ($scope, PotonganService) {
    $scope.currentPotongan = {};
    $scope.potongans = PotonganService.query();
    $scope.isSelected = null;
    $scope.editNip = null;
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentPotongan = PotonganService.get({id: x.id}, function(data) {
            $scope.editNip = data.nip;
            $scope.validateNip = false;
        });
    };
    
    $scope.save = function() {
        PotonganService.save($scope.currentPotongan).success(function() {
            $scope.potongans = PotonganService.query();
            $scope.clear();
        })
    };
    
    $scope.clear = function() {
        $scope.currentPotongan = "";
    };
    
    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            PotonganService.remove($scope.isSelected).success(function() {
                $scope.potongans = PotonganService.query();
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
