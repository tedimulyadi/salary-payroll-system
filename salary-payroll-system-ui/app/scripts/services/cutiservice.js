'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.cutiservice
 * @description
 * # cutiservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('CutiService', function ($resource, $http, ConfigService) {
    return{
       cuti: $resource(ConfigService.serverUrl + '/api/cuti/:id'),
      get: function (param, callback) {
        return this.cuti.get(param, callback);
      },
      query: function(){
        return this.cuti.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/cuti', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/cuti/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/cuti/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get(ConfigService.serverUrl + '/api/findById/'+ id);
      }  
     };
  });
