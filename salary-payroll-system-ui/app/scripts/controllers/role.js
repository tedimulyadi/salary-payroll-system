'use strict';

/**
 * @ngdoc function
 * @name manajemenPasswordUiApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the manajemenPasswordUiApp
 */
angular.module('manajemenPasswordUiApp')
  .controller('RoleCtrl', function ($scope, $timeout, RoleService) {
    $scope.roles = RoleService.query();
    $scope.currentRole = {};
    $scope.editRolename = null;
    $scope.isSelected = null;
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentRole = RoleService.get({id: x.id}, function(data) {
            $scope.editRolename = data.name;
        });
    };

    $scope.rolenames = [    
        {name: 'Admin'},
        {name: 'User'},
        {name: 'Guest'}
    ];
    
    $scope.myRolename = $scope.rolenames[0];

    $scope.save = function() {
       $scope.saveAction();
    };
    
    $scope.saveAction = function() {

        // console.log ($scope.currentRole);
        // RoleService.save($scope.currentRole).success(function() {
        //     $scope.clear();
        //     $scope.roles = RoleService.query();

        // });
        RoleService.save($scope.currentRole).success(function() {
                $scope.roles = RoleService.query();
                $scope.showAlert();
                $scope.styleAlert = 'alert-success';
                $scope.textAlert = 'Data have been saved.';
                $scope.clear();
            })
    };

    $scope.clear = function() {
            $scope.currentRole = "";
            $scope.validateName = false;
        };


      
    $scope.remove = function(x){
        $scope.clear();
        if ($scope.isSelected.id != null) {
             RoleService.remove($scope.isSelected).success(function(){
                $scope.roles = RoleService.query();
            })
        }
        $scope.showAlert();
        $scope.styleAlert = 'alert-danger';
        $scope.textAlert = 'Data have been deleted.';
    }
      $scope.showAlert = function() {
            $scope.alert = true;
            $timeout(function() {
                $scope.alert = false;
            }, 2500);
        };

            $scope.showDialogDelete = function(x) {
            $scope.isSelected = x;

            $('#dialogDelete').modal('show');
        }
  });
