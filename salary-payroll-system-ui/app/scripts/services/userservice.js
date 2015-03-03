'use strict';

/**
 * @ngdoc service
 * @name manajemenPasswordUiApp.userservice
 * @description
 * # userservice
 * Factory in the manajemenPasswordUiApp.
 */
angular.module('manajemenPasswordUiApp')
  .factory('UserService', function ($resource, $http) {
    return {
      user: $resource('/aplikasi-manajemen-password-server/api/user/:id'),
      get: function (param, callback) {
        return this.user.get(param, callback);
      },
      query: function(){
        return this.user.query();
      },
      save: function(obj){
        if (obj.id == null) {
          return $http.post('/aplikasi-manajemen-password-server/api/user', obj);
        }else{
          return $http.put('/aplikasi-manajemen-password-server/api/user/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/aplikasi-manajemen-password-server/api/user/' + obj.id);
        }
      }
     
    };
  });
