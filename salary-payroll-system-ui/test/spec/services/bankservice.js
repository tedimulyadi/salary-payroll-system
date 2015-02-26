'use strict';

describe('Service: bankservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var bankservice;
  beforeEach(inject(function (_bankservice_) {
    bankservice = _bankservice_;
  }));

  it('should do something', function () {
    expect(!!bankservice).toBe(true);
  });

});
