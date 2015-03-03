'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.jabatanservice
 * @description
 * # jabatanservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('JabatanService', function ($resource, $http, ConfigService) {
     return{
     jabatan: $resource(ConfigService.serverUrl + '/api/jabatan/:id'),
      get: function (param, callback) {
        return this.jabatan.get(param, callback);
      },
      query: function(){
        return this.jabatan.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/jabatan', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/jabatan/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/jabatan/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get(ConfigService.serverUrl + '/api/findById/'+ id);
      }  

     };
  });
