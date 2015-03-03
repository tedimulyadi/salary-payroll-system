'use strict';

/**
 * @ngdoc service
 * @name manajemenPasswordUiApp.userreport
 * @description
 * # userreport
 * Factory in the manajemenPasswordUiApp.
 */
angular.module('manajemenPasswordUiApp')
  .factory('userreport', function () {
    return {
      user: $resource('/aplikasi-manajemen-password-server/api/user/:id'),
      get: function (param, callback) {
        return this.user.get(param, callback);
      },
      query: function(){
        return this.user.query();
      }
      //  findByUserName: function(username) {
      //   return $http.get('/aplikasi-manajemen-password-server/api/finduser/'+ username);
      // }
    };
  });
