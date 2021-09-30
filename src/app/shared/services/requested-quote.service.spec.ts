import { TestBed } from '@angular/core/testing';

import { RequestedQuoteService } from './requested-quote.service';

describe('RequestedQuoteService', () => {
  let service: RequestedQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestedQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
