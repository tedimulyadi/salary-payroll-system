'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.gajiservice
 * @description
 * # gajiservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('gajiservice', function () {
     return{
      gaji: $resource('/salary-payroll-system-server/api/gaji/:id'),
      get: function (param, callback) {
        return this.gaji.get(param, callback);
      },
      query: function(){
        return this.gaji.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/salary-payroll-system-server/api/gaji', obj);
        }else{
          return $http.put('/salary-payroll-system-server/api/gaji/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/salary-payroll-system-server/api/gaji/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get('/salary-payroll-system-server/api/findById/'+ id);
      }
    };
  });
