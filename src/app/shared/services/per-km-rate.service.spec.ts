import { TestBed } from '@angular/core/testing';

import { PerKmRateService } from './per-km-rate.service';

describe('PerKmRateService', () => {
  let service: PerKmRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerKmRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
