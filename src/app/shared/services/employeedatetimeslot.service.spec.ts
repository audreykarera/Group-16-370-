import { TestBed } from '@angular/core/testing';

import { EmployeedatetimeslotService } from './employeedatetimeslot.service';

describe('EmployeedatetimeslotService', () => {
  let service: EmployeedatetimeslotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeedatetimeslotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
