'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:BankCtrl
 * @description
 * # BankCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('BankCtrl', function ($scope, BankService) {
 	$scope.currentBank = {};
 	$scope.banks = BankService.query();
 	$scope.isSelected = null;
 	$scope.editNip = null;

 	$scope.edit = function(x){
 		if (x.id == null) {
 			return;	
 		};

 		$scope.currentBank = BankService.get({id: x.id}, function(data){
 			$scope.editNip = data.nip;
 			$scope.validateNip = false;
 		});
 	};


 	$scope.save = function() {
        BankService.save($scope.currentBank).success(function() {
            $scope.banks = BankService.query();
            $scope.clear();
        })
        console.log($scope.currentBank);
    };

    $scope.clear = function() {
        $scope.currentBank = "";
    };

    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            BankService.remove($scope.isSelected).success(function() {
                $scope.banks = BankService.query();
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
