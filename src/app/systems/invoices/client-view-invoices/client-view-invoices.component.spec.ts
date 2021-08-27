import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewInvoicesComponent } from './client-view-invoices.component';

describe('ClientViewInvoicesComponent', () => {
  let component: ClientViewInvoicesComponent;
  let fixture: ComponentFixture<ClientViewInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientViewInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
