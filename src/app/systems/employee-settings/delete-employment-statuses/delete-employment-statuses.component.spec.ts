import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmploymentStatusesComponent } from './delete-employment-statuses.component';

describe('DeleteEmploymentStatusesComponent', () => {
  let component: DeleteEmploymentStatusesComponent;
  let fixture: ComponentFixture<DeleteEmploymentStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmploymentStatusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmploymentStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
