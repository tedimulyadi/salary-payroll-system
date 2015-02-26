'use strict';

describe('Service: lemburservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var lemburservice;
  beforeEach(inject(function (_lemburservice_) {
    lemburservice = _lemburservice_;
  }));

  it('should do something', function () {
    expect(!!lemburservice).toBe(true);
  });

});
