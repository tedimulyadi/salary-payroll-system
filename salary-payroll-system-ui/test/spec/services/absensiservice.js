'use strict';

describe('Service: absensiservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var absensiservice;
  beforeEach(inject(function (_absensiservice_) {
    absensiservice = _absensiservice_;
  }));

  it('should do something', function () {
    expect(!!absensiservice).toBe(true);
  });

});
