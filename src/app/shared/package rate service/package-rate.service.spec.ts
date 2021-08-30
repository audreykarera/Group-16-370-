import { TestBed } from '@angular/core/testing';

import { PackageRateService } from './package-rate.service';

describe('PackageRateService', () => {
  let service: PackageRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
