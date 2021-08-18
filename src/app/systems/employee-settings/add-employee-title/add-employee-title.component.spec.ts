import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeTitleComponent } from './add-employee-title.component';

describe('AddEmployeeTitleComponent', () => {
  let component: AddEmployeeTitleComponent;
  let fixture: ComponentFixture<AddEmployeeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
