'use strict';

describe('Controller: LemburCtrl', function () {

  // load the controller's module
  beforeEach(module('penggajianUiApp'));

  var LemburCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LemburCtrl = $controller('LemburCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
