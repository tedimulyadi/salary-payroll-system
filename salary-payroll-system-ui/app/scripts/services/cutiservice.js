'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.cutiservice
 * @description
 * # cutiservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('cutiservice', function () {
    return{
      cuti: $resource('/salary-payroll-system-server/api/cuti/:id'),
      get: function (param, callback) {
        return this.cuti.get(param, callback);
      },
      query: function(){
        return this.cuti.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/salary-payroll-system-server/api/cuti', obj);
        }else{
          return $http.put('/salary-payroll-system-server/api/cuti/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/salary-payroll-system-server/api/cuti/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get('/salary-payroll-system-server/api/findById/'+ id);
      }
    };
  });
