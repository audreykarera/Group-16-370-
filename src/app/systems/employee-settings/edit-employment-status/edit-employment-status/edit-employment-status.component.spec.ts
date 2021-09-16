import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmploymentStatusComponent } from './edit-employment-status.component';

describe('EditEmploymentStatusComponent', () => {
  let component: EditEmploymentStatusComponent;
  let fixture: ComponentFixture<EditEmploymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmploymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmploymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
