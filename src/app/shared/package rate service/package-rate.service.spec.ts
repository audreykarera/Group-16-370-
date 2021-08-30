import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/shared/services/suburb.service.spec.ts
import { SuburbService } from './suburb.service';

describe('SuburbService', () => {
  let service: SuburbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuburbService);
=======
import { PackageRateService } from './package-rate.service';

describe('PackageRateService', () => {
  let service: PackageRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageRateService);
>>>>>>> 8837653b5ae57b360c285fd6b80ec8e5c91a02a7:src/app/shared/package rate service/package-rate.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
