import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSlotStatusComponent } from './create-slot-status.component';

describe('CreateSlotStatusComponent', () => {
  let component: CreateSlotStatusComponent;
  let fixture: ComponentFixture<CreateSlotStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSlotStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSlotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
