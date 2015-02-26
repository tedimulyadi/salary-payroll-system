'use strict';

describe('Service: pinjamanservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var pinjamanservice;
  beforeEach(inject(function (_pinjamanservice_) {
    pinjamanservice = _pinjamanservice_;
  }));

  it('should do something', function () {
    expect(!!pinjamanservice).toBe(true);
  });

});
