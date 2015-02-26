'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.absensiservice
 * @description
 * # absensiservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('absensiservice', function ($resource, $http) {
    return{
      absensi: $resource('/salary-payroll-system-server/api/absensi/:id'),
      get: function (param, callback) {
        return this.absensi.get(param, callback);
      },
      query: function(){
        return this.absensi.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/salary-payroll-system-server/api/absensi', obj);
        }else{
          return $http.put('/salary-payroll-system-server/api/absensi/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/salary-payroll-system-server/api/absensi/' + obj.id);
        }
      }
      findById: function(username) {
        return $http.get('/salary-payroll-system-server/api/findById/'+ id);
      }
    };
   
  });
