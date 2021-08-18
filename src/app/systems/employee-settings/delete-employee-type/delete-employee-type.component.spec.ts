import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeTypeComponent } from './delete-employee-type.component';

describe('DeleteEmployeeTypeComponent', () => {
  let component: DeleteEmployeeTypeComponent;
  let fixture: ComponentFixture<DeleteEmployeeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
