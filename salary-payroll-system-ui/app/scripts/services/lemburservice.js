'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.lemburservice
 * @description
 * # lemburservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('LemburService', function ($resource, $http, ConfigService) {
    return {
      lembur: $resource(ConfigService.serverUrl + '/api/lembur/:id'),
      get: function (param, callback) {
        return this.lembur.get(param, callback);
      },
      query: function(){
        return this.lembur.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/lembur', obj);
        }else{
          return $http.put(ConfigService.serverUrl + '/api/lembur/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/lembur/' + obj.id);
        }
      },
      findById: function(username) {
        return $http.get(ConfigService.serverUrl + '/api/findById/'+ id);
      }
    };
  });