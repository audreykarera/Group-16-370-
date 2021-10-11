import { TestBed } from '@angular/core/testing';

import { RequestedQuoteLineService } from './requested-quote-line.service';

describe('RequestedQuoteLineService', () => {
  let service: RequestedQuoteLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestedQuoteLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
