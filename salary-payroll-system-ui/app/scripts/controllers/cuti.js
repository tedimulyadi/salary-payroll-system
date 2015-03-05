'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:CutiCtrl
 * @description
 * # CutiCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('CutiCtrl', function ($scope, CutiService) {
  	$scope.currentCuti = {};
  	$scope.cuties = CutiService.query();
  	$scope.isSelected = null ;
  	$scope.editNip = null;

  	$scope.edit = function(x){
 		if (x.id == null) {
 			return;	
 		};

 		$scope.currentCuti = CutiService.get({id: x.id}, function(data){
 			$scope.editNip = data.nip;
 			$scope.validateNip = false;
 		});
 	};

 	$scope.save = function() {
        console.log($scope.currentCuti);
        CutiService.save($scope.currentCuti).success(function() {
            $scope.cuties = CutiService.query();
            $scope.clear();
        })
    };

    $scope.clear = function() {
        $scope.currentCuti = "";
    };

    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            CutiService.remove($scope.isSelected).success(function() {
                $scope.cuties = CutiService.query();
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