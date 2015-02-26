'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.jabatanservice
 * @description
 * # jabatanservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('jabatanservice', function () {
     return{
      jabatan: $resource('/salary-payroll-system-server/api/jabatan/:id'),
      get: function (param, callback) {
        return this.jabatan.get(param, callback);
      },
      query: function(){
        return this.jabatan.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/salary-payroll-system-server/api/jabatan', obj);
        }else{
          return $http.put('/salary-payroll-system-server/api/jabatan/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/salary-payroll-system-server/api/jabatan/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get('/salary-payroll-system-server/api/findById/'+ id);
      }
    };
  });
