import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintClientInvoicesComponent } from './print-client-invoices.component';

describe('PrintClientInvoicesComponent', () => {
  let component: PrintClientInvoicesComponent;
  let fixture: ComponentFixture<PrintClientInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintClientInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintClientInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
