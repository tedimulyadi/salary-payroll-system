'use strict';

/**
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('BankService', function ($resource, $http, ConfigService) {
  
  return{
     bank: $resource(ConfigService.serverUrl + '/api/bank/:id'),
      get: function (param, callback) {
        return this.bank.get(param, callback);
      },
      query: function(){
        return this.bank.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/bank', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/bank/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/bank/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get(ConfigService.serverUrl + '/api/findById/'+ id);
      }  

     };
  });
