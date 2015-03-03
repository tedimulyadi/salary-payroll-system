'use strict';

describe('Service: karyawanservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var karyawanservice;
  beforeEach(inject(function (_karyawanservice_) {
    karyawanservice = _karyawanservice_;
  }));

  it('should do something', function () {
    expect(!!karyawanservice).toBe(true);
  });

});
