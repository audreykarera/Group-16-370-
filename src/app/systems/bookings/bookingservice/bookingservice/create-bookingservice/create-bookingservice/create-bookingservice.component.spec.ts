import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookingserviceComponent } from './create-bookingservice.component';

describe('CreateBookingserviceComponent', () => {
  let component: CreateBookingserviceComponent;
  let fixture: ComponentFixture<CreateBookingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
