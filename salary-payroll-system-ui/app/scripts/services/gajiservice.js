'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.gajiservice
 * @description
 * # gajiservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('gajiservice', function ($resource, $http, ConfigService) {
    return{
      gaji: $resource(ConfigService.serverUrl + '/api/gaji/:id'),
      get: function (param, callback) {
        return this.gaji.get(param, callback);
      },
      query: function(){
        return this.gaji.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/gaji', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/gaji/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/gaji/' + obj.id);
        }
      },
      findByNip: function(nip) {
        return $http.get(ConfigService.serverUrl + '/api/findByNip/'+ nip);
      }
    };
   
  });
