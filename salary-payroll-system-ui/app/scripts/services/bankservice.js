'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.bankservice
 * @description
 * # bankservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('bankservice', function () {
  
  return{
      bank: $resource('/salary-payroll-system-server/api/bank/:id'),
      get: function (param, callback) {
        return this.bank.get(param, callback);
      },
      query: function(){
        return this.bank.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/salary-payroll-system-server/api/bank', obj);
        }else{
          return $http.put('/salary-payroll-system-server/api/bank/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/salary-payroll-system-server/api/bank/' + obj.id);
        }
      }
      findById: function(username) {
        return $http.get('/salary-payroll-system-server/api/findById/'+ id);
      }
    };
  });
