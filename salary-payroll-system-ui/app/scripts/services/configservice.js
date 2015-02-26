'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.ConfigService
 * @description
 * # ConfigService
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('ConfigService', function () {
     var urlServer = "/salary-payroll-system-server";
    return {
        serverUrl : urlServer
    };
  });
