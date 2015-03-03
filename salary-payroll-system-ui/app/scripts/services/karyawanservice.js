'use strict';

/**
 * @ngdoc service
 * @name penggajianUiApp.karyawanservice
 * @description
 * # karyawanservice
 * Factory in the penggajianUiApp.
 */
angular.module('penggajianUiApp')
  .factory('karyawanservice', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
