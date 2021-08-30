import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/shared/services/province.service.spec.ts
import { ProvinceService } from './province.service';

describe('ProvinceService', () => {
  let service: ProvinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinceService);
=======
import { EmployeeTitleService } from './employee-title.service';

describe('EmployeeTitleService', () => {
  let service: EmployeeTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTitleService);
>>>>>>> 8837653b5ae57b360c285fd6b80ec8e5c91a02a7:src/app/shared/employee title service/employee-title.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
