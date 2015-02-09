'use strict';

describe('Service: BankService', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var BankService;
  beforeEach(inject(function (_BankService_) {
    BankService = _BankService_;
  }));

  it('should do something', function () {
    expect(!!BankService).toBe(true);
  });

});
