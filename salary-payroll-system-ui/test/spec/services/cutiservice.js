'use strict';

describe('Service: cutiservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var cutiservice;
  beforeEach(inject(function (_cutiservice_) {
    cutiservice = _cutiservice_;
  }));

  it('should do something', function () {
    expect(!!cutiservice).toBe(true);
  });

});
