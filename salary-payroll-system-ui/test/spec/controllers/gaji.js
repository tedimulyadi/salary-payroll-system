'use strict';

describe('Controller: GajiCtrl', function () {

  // load the controller's module
  beforeEach(module('penggajianUiApp'));

  var GajiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GajiCtrl = $controller('GajiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
