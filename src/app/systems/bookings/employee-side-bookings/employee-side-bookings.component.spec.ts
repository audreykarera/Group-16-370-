import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSideBookingsComponent } from './employee-side-bookings.component';

describe('EmployeeSideBookingsComponent', () => {
  let component: EmployeeSideBookingsComponent;
  let fixture: ComponentFixture<EmployeeSideBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSideBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSideBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
