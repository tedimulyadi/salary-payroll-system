'use strict';

describe('Controller: CutiCtrl', function () {

  // load the controller's module
  beforeEach(module('penggajianUiApp'));

  var CutiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CutiCtrl = $controller('CutiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
