import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/shared/services/location.service.spec.ts
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationService);
=======
import { EmployeeTypeService } from './employee-type.service';

describe('EmployeeTypeService', () => {
  let service: EmployeeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTypeService);
>>>>>>> 8837653b5ae57b360c285fd6b80ec8e5c91a02a7:src/app/shared/employee type/employee-type.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
