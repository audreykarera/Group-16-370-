import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingserviceComponent } from './bookingservice.component';

describe('BookingserviceComponent', () => {
  let component: BookingserviceComponent;
  let fixture: ComponentFixture<BookingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
