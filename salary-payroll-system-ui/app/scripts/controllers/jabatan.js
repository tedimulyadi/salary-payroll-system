'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:JabatanCtrl
 * @description
 * # JabatanCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('JabatanCtrl', function ($scope, JabatanService) {
   	$scope.currentJabatan = {};
  	$scope.jabatans = JabatanService.query();
  	$scope.isSelected = null ;
  	$scope.editNip = null;

  	$scope.edit = function(x){
 		if (x.id == null) {
 			return;	
 		};

 		$scope.currentJabatan = JabatanService.get({id: x.id}, function(data){
 			$scope.editNip = data.nip;
 			$scope.validateNip = false;
 		});
 	};

 	$scope.save = function() {
        console.log($scope.currentJabatan);
        JabatanService.save($scope.currentJabatan).success(function() {
            $scope.jabatans = JabatanService.query();
            $scope.clear();
        })
    };

    $scope.clear = function() {
        $scope.currentJabatan = "";
    };

    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            JabatanService.remove($scope.isSelected).success(function() {
                $scope.jabatans = JabatanService.query();
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
