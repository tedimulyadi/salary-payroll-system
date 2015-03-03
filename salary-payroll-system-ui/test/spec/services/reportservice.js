'use strict';

describe('Service: reportservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var reportservice;
  beforeEach(inject(function (_reportservice_) {
    reportservice = _reportservice_;
  }));

  it('should do something', function () {
    expect(!!reportservice).toBe(true);
  });

});
