import { TestBed } from '@angular/core/testing';

import { EmployeeTitleService } from './employee-title.service';

describe('EmployeeTitleService', () => {
  let service: EmployeeTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
