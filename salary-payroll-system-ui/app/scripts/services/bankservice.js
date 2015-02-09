'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.BankService
 * @description
 * # BankService
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('BankService', function () {
    return {
      bank: $resource(ConfigService.serverUrl + '/api/bank/:id'),
      get: function(param, callback){
        return this.user.get(param, callback);
      },
      getAllUser: function(page, size){
        return $http.get(ConfigService.serverUrl + '/api/bank?page=' + page + '&size=' + size)
      },
      save: function(obj) {
        if (obj.id == null) {
          return $http.post(ConfigService.serverUrl + '/api/bank', obj);
        } else {
          console.log(obj.id);
          return $http.put(ConfigService.serverUrl + '/api/bank/' + obj.id, obj);
        }
      },
      remove: function(obj) {
        if (obj.id != null) {
          return $http.delete(ConfigService.serverUrl + '/api/bank/' + obj.id);
        }
      }
    };
  });
