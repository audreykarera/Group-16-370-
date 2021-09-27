import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedatetimeslotComponent } from './employeedatetimeslot.component';

describe('EmployeedatetimeslotComponent', () => {
  let component: EmployeedatetimeslotComponent;
  let fixture: ComponentFixture<EmployeedatetimeslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedatetimeslotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedatetimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
