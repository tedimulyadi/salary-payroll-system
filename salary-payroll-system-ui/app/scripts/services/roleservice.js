'use strict';

/**
 * @ngdoc service
 * @name manajemenPasswordUiApp.userservice
 * @description
 * # userservice
 * Factory in the manajemenPasswordUiApp.
 */
angular.module('manajemenPasswordUiApp')
  .factory('RoleService', function ($resource, $http) {
    return {
      role: $resource('/aplikasi-manajemen-password-server/api/role/:id'),
      get: function (param, callback) {
        return this.role.get(param, callback);
      },
      query: function(){
        return this.role.query();
      },
      save: function(obj){
        if (obj.id ==null) {
          return $http.post('/aplikasi-manajemen-password-server/api/role',obj);
        }else{
          return $http.put('/aplikasi-manajemen-password-server/api/role/' + obj.id, obj);
        }
      },
      remove: function(obj){
        if (obj.id != null) {
          return $http.delete('/aplikasi-manajemen-password-server/api/role/' + obj.id);
        }
      }
    };
  });
