import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBookingStatusComponent } from './read-booking-status.component';

describe('ReadBookingStatusComponent', () => {
  let component: ReadBookingStatusComponent;
  let fixture: ComponentFixture<ReadBookingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadBookingStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadBookingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
