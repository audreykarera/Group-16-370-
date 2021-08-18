import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmploymentStatusesComponent } from './edit-employment-statuses.component';

describe('EditEmploymentStatusesComponent', () => {
  let component: EditEmploymentStatusesComponent;
  let fixture: ComponentFixture<EditEmploymentStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmploymentStatusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmploymentStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
