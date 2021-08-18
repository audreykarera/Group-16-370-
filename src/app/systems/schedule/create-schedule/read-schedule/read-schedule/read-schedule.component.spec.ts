import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadScheduleComponent } from './read-schedule.component';

describe('ReadScheduleComponent', () => {
  let component: ReadScheduleComponent;
  let fixture: ComponentFixture<ReadScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
