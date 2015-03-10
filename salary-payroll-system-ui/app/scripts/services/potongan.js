'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.potongan
 * @description
 * # potongan
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('PotonganService', function ($resource, $http, ConfigService) {
     return{
      potongan: $resource(ConfigService.serverUrl + '/api/potongan/:id'),
      get: function (param, callback) {
        return this.potongan.get(param, callback);
      },
      query: function(){
        return this.potongan.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/potongan', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/potongan/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/potongan/' + obj.id);
        }
      },
      findByNip: function(nip) {
        return $http.get(ConfigService.serverUrl + '/api/findByNip/'+ nip);
      }
    };
   
  });
