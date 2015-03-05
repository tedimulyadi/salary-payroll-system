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
    
    $scope.listPendidikan = [
        {pendidikan : "SD"},
        {pendidikan : "SMP"},
        {pendidikan : "SMA / SMK"},
        {pendidikan : "D3"},
        {pendidikan : "S1"},
        {pendidikan : "S2"},
        {pendidikan : "S3"}
    ]
    
    $scope.changeStatus = function(status) {
        if (status == "Belum Menikah") {
            $scope.showJumlahAnak = false;
        } else {
            $scope.showJumlahAnak = true;
            $scope.currentKaryawan.jumlahAnak = 0;
        }
    };
    
    $scope.openTanggalMasuk = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        
        $scope.openedTanggalMasuk = true;
    };
    
    $scope.openTanggalKeluar = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        
        $scope.openedTanggalKeluar = true;
    };
    
  });
