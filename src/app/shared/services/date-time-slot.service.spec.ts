import { TestBed } from '@angular/core/testing';

import { DateTimeSlotService } from './date-time-slot.service';

describe('DateTimeSlotService', () => {
  let service: DateTimeSlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeSlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
