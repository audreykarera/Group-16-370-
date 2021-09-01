import { Package } from '../../models/package';
import { TestBed } from '@angular/core/testing';


describe('CityService', () => {
  let service: Package;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Package);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
