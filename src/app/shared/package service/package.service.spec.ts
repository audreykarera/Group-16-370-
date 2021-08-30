import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/shared/services/city.service.spec.ts
import { CityService } from './city.service';

describe('CityService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityService);
=======
import { ApiService } from './asset.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
>>>>>>> 8837653b5ae57b360c285fd6b80ec8e5c91a02a7:src/app/shared/package service/package.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
