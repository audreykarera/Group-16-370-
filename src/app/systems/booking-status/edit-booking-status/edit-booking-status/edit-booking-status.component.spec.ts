import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookingStatusComponent } from './edit-booking-status.component';

describe('EditBookingStatusComponent', () => {
  let component: EditBookingStatusComponent;
  let fixture: ComponentFixture<EditBookingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookingStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
