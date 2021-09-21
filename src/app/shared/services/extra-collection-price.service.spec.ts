import { TestBed } from '@angular/core/testing';

import { ExtraCollectionPriceService } from './extra-collection-price.service';

describe('ExtraCollectionPriceService', () => {
  let service: ExtraCollectionPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraCollectionPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
