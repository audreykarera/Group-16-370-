import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadClientBookingComponent } from './read-client-booking.component';

describe('ReadClientBookingComponent', () => {
  let component: ReadClientBookingComponent;
  let fixture: ComponentFixture<ReadClientBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadClientBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadClientBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
