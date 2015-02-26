'use strict';

<<<<<<< HEAD
describe('Service: bankservice', function () {
=======
describe('Service: BankService', function () {
>>>>>>> d7ab49ee34728006ac5a29efe79e425dedab5a8f

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
<<<<<<< HEAD
  var bankservice;
  beforeEach(inject(function (_bankservice_) {
    bankservice = _bankservice_;
  }));

  it('should do something', function () {
    expect(!!bankservice).toBe(true);
=======
  var BankService;
  beforeEach(inject(function (_BankService_) {
    BankService = _BankService_;
  }));

  it('should do something', function () {
    expect(!!BankService).toBe(true);
>>>>>>> d7ab49ee34728006ac5a29efe79e425dedab5a8f
  });

});
