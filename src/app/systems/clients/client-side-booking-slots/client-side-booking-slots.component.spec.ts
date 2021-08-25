import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSideBookingSlotsComponent } from './client-side-booking-slots.component';

describe('ClientSideBookingSlotsComponent', () => {
  let component: ClientSideBookingSlotsComponent;
  let fixture: ComponentFixture<ClientSideBookingSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSideBookingSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSideBookingSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
