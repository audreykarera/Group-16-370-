import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadInvoiceComponent } from './read-invoice.component';

describe('ReadInvoiceComponent', () => {
  let component: ReadInvoiceComponent;
  let fixture: ComponentFixture<ReadInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
