import { TestBed } from '@angular/core/testing';

import { QuoteLineService } from './quote-line.service';

describe('QuoteLineService', () => {
  let service: QuoteLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
