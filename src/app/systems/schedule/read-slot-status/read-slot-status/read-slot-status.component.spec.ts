import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSlotStatusComponent } from './read-slot-status.component';

describe('ReadSlotStatusComponent', () => {
  let component: ReadSlotStatusComponent;
  let fixture: ComponentFixture<ReadSlotStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSlotStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSlotStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
