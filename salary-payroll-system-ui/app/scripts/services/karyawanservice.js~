'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.karyawanservice
 * @description
 * # karyawanservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('karyawanservice', function ($resource, $http, ConfigService) {
    return{
      karyawan: $resource(ConfigService.serverUrl + '/api/karyawan/:id'),
      get: function (param, callback) {
        return this.karyawan.get(param, callback);
      },
      query: function(){
        return this.karyawan.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/karyawan', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/karyawan/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/karyawan/' + obj.id);
        }
      },
      findByNip: function(nip) {
        return $http.get(ConfigService.serverUrl + '/api/findByNip/'+ nip);
      }
    };
   
  });
