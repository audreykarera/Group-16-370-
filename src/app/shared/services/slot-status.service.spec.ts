import { TestBed } from '@angular/core/testing';

import { SlotStatusService } from './slot-status.service';

describe('SlotStatusService', () => {
  let service: SlotStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
