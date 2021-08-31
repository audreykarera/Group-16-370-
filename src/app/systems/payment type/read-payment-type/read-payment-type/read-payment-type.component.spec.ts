import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPaymentTypeComponent } from './read-payment-type.component';

describe('ReadPaymentTypeComponent', () => {
  let component: ReadPaymentTypeComponent;
  let fixture: ComponentFixture<ReadPaymentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPaymentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPaymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
