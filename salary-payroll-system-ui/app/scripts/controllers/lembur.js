'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:LemburCtrl
 * @description
 * # LemburCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('LemburCtrl', function ($scope, LemburService){
    $scope.currentLembur = {};
    $scope.lemburs = LemburService.query();
    $scope.isSelected = null;
    $scope.editNip = null;
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentLembur = LemburService.get({id: x.id}, function(data) {
            $scope.editNip = data.nip;
            $scope.validateNip = false;
        });
    };
    
    $scope.save = function() {
        LemburService.save($scope.currentLembur).success(function() {
            $scope.lemburs = LemburService.query();
            $scope.clear();
        })
    };
    
    $scope.clear = function() {
        $scope.currentLembur = "";
    };
    
    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            LemburService.remove($scope.isSelected).success(function() {
                $scope.lemburs = LemburService.query();
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
