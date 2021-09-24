import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeedatetimeslotComponent } from './create-employeedatetimeslot.component';

describe('CreateEmployeedatetimeslotComponent', () => {
  let component: CreateEmployeedatetimeslotComponent;
  let fixture: ComponentFixture<CreateEmployeedatetimeslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeedatetimeslotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeedatetimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
