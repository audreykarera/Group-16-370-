import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeTitleComponent } from './edit-employee-title.component';

describe('EditEmployeeTitleComponent', () => {
  let component: EditEmployeeTitleComponent;
  let fixture: ComponentFixture<EditEmployeeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
