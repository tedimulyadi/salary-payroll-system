'use strict';

describe('Service: gajiservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var gajiservice;
  beforeEach(inject(function (_gajiservice_) {
    gajiservice = _gajiservice_;
  }));

  it('should do something', function () {
    expect(!!gajiservice).toBe(true);
  });

});
