'use strict';

describe('Service: jabatanservice', function () {

  // load the service's module
  beforeEach(module('penggajianUiApp'));

  // instantiate service
  var jabatanservice;
  beforeEach(inject(function (_jabatanservice_) {
    jabatanservice = _jabatanservice_;
  }));

  it('should do something', function () {
    expect(!!jabatanservice).toBe(true);
  });

});
