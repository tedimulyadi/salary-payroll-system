'use strict';

/**
 * @ngdoc function
 * @name manajemenPasswordUiApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the manajemenPasswordUiApp
 */
angular.module('manajemenPasswordUiApp')
  .controller('UserCtrl', function ($scope, $timeout, UserService, RoleService) {
    $scope.users = UserService.query();
    $scope.currentUser = {};
    $scope.isSelected = null;
    $scope.roles = RoleService.query();
    $scope.editUsername = null;

    $scope.save = function() {
       $scope.saveAction();
    };

    $scope.saveAction = function() {
        // console.log ($scope.currentUser);
        UserService.save($scope.currentUser).success(function() {
            $scope.users = UserService.query();
                $scope.showAlert();
                $scope.styleAlert = 'alert-success';
                $scope.textAlert = 'Data have been saved.';
                $scope.clear();
        });
    };

    $scope.clear = function() {
            $scope.currentRole = "";
            $scope.validateName = false;
        };

    $scope.remove = function(x){
        if ($scope.isSelected.id != null) {
        UserService.remove($scope.isSelected).success(function(){
            $scope.users = UserService.query();
        });
        }
        $scope.showAlert();
        $scope.styleAlert = 'alert-danger';
        $scope.textAlert = 'Data have been deleted.';
    }

     $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentUser = UserService.get({id: x.id}, function(data) {
            $scope.editUsername = data.name;
        });
    };
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
