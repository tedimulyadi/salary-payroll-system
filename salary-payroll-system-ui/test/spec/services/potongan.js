'use strict';

describe('Service: potongan', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var potongan;
  beforeEach(inject(function (_potongan_) {
    potongan = _potongan_;
  }));

  it('should do something', function () {
    expect(!!potongan).toBe(true);
  });

});
