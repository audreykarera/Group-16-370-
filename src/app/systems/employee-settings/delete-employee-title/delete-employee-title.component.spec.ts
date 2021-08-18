import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeTitleComponent } from './delete-employee-title.component';

describe('DeleteEmployeeTitleComponent', () => {
  let component: DeleteEmployeeTitleComponent;
  let fixture: ComponentFixture<DeleteEmployeeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
