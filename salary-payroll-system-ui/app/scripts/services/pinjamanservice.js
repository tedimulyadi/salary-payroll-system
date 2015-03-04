'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.pinjamanservice
 * @description
 * # pinjamanservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('PinjamanService', function ($resource, $http, ConfigService) {
    return{
      pinjaman: $resource(ConfigService.serverUrl + '/api/pinjaman/:id'),
      get: function (param, callback) {
        return this.pinjaman.get(param, callback);
      },
      query: function(){
        return this.pinjaman.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/pinjaman', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/pinjaman/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/pinjaman/' + obj.id);
        }
      },
      findByNip: function(nip) {
        return $http.get(ConfigService.serverUrl + '/api/findByNip/'+ nip);
      }
    };
  });
