import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploymentStatusComponent } from './add-employment-status.component';

describe('AddEmploymentStatusComponent', () => {
  let component: AddEmploymentStatusComponent;
  let fixture: ComponentFixture<AddEmploymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmploymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmploymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
