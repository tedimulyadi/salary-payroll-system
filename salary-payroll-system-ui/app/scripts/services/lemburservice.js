'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.lemburservice
 * @description
 * # lemburservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('lemburservice', function () {
    lembur: $resource('/salary-payroll-system-server/api/lembur/:id'),
      get: function (param, callback) {
        return this.lembur.get(param, callback);
      },
      query: function(){
        return this.lembur.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/salary-payroll-system-server/api/lembur', obj);
        }else{
          return $http.put('/salary-payroll-system-server/api/lembur/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/salary-payroll-system-server/api/lembur/' + obj.id);
        }
      }
      findById: function(username) {
        return $http.get('/salary-payroll-system-server/api/findById/'+ id);
      }
    };

  });
