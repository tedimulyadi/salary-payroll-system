'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:KaryawanCtrl
 * @description
 * # KaryawanCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('KaryawanCtrl', function ($scope) {
    
    $scope.listAgama = [
        {agama : "Islam"},
        {agama : "Kristen Protestan"},
        {agama : "Kristen Katolik"},
        {agama : "Budha"},
        {agama : "Hindu"}
    ];
    
    $scope.statuses = [
        {status : "Belum Menikah"},
        {status : "Menikah"}
    ];
    
    $scope.changeStatus = function(status) {
        if (status == "Belum Menikah") {
            $scope.showJumlahAnak = false;
        } else {
            $scope.showJumlahAnak = true;
            $scope.currentKaryawan.jumlahAnak = 0;
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
