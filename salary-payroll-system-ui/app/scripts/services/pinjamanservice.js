'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.pinjamanservice
 * @description
 * # pinjamanservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('pinjamanservice', function () {
    return {
      pinjaman: $resource('/salary-payroll-system-server/api/pinjaman/:id'),
      get: function (param, callback) {
        return this.pinjaman.get(param, callback);
      },
      query: function(){
        return this.pinjaman.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/salary-payroll-system-server/api/pinjaman', obj);
        }else{
          return $http.put('/salary-payroll-system-server/api/pinjaman/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/salary-payroll-system-server/api/pinjaman/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get('/salary-payroll-system-server/api/findById/'+ id);
      }  
    };
  });
