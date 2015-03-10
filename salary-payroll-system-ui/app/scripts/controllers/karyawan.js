'use strict';

/**
 * @ngdoc function
 * @name penggajianUiApp.controller:KaryawanCtrl
 * @description
 * # KaryawanCtrl
 * Controller of the penggajianUiApp
 */
angular.module('penggajianUiApp')
  .controller('KaryawanCtrl', function ($scope, KaryawanService, BankService, JabatanService) {
    $scope.banks = BankService.query();
    $scope.jabatans = JabatanService.query();
    $scope.karyawans = KaryawanService.query();
    $scope.currentKaryawan = {};
    $scope.isSelected = null;
    
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
            $scope.currentKaryawan.jumlahAnak = 0;
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
    
    $scope.clear = function() {
        $scope.currentKaryawan = null;
    };
    
    $scope.save = function() {        
        KaryawanService.save($scope.currentKaryawan).success(function() {
            $scope.karyawans = KaryawanService.query();
            $scope.clear();
        })
    };
    
    $scope.edit = function(x) {
        if (x.id == null) {
            return;
        }
        
        $scope.currentKaryawan = KaryawanService.get({id: x.id}, function(data) {
            if (data.jumlahAnak > 0) {
                $scope.showJumlahAnak = true;
            } else {
                $scope.showJumlahAnak = false;
            }
            console.log(data);
        });
    };
    
    $scope.showModalDelete = function(x) {
        $scope.isSelected = x;
        
        $('#modalDelete').modal('show');
    };
    
    $scope.remove = function() {
        $scope.clear();
        if ($scope.isSelected.id != null) {
            KaryawanService.remove($scope.isSelected).success(function() {
                $scope.karyawans = KaryawanService.query();
                $scope.isSelected = null;
                $('#modalDelete').modal('hide');
            })
        }
    };
    
    $scope.showModalDetail = function(x) {
        $scope.isSelected = x;
        
        $('#modalDetail').modal('show');
    };
  });
