import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookingStatusComponent } from './create-booking-status.component';

describe('CreateBookingStatusComponent', () => {
  let component: CreateBookingStatusComponent;
  let fixture: ComponentFixture<CreateBookingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookingStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
