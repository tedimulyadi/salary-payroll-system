'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.absensiservice
 * @description
 * # absensiservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('AbsenService', function ($resource, $http, ConfigService) {
    return{
      absensi: $resource(ConfigService.serverUrl + '/api/absensi/:id'),
      get: function (param, callback) {
        return this.absensi.get(param, callback);
      },
      query: function(){
        return this.absensi.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/absensi', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/absensi/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/absensi/' + obj.id);
        }
      },
      findByNip: function(nip) {
        return $http.get(ConfigService.serverUrl + '/api/findByNip/'+ nip);
      }
    };
  });
