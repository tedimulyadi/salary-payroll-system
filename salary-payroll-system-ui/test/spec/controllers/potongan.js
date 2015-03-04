'use strict';

describe('Controller: PotonganCtrl', function () {

  // load the controller's module
  beforeEach(module('penggajianUiApp'));

  var PotonganCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PotonganCtrl = $controller('PotonganCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
