import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmploymentStatusesComponent } from './view-employment-statuses.component';

describe('ViewEmploymentStatusesComponent', () => {
  let component: ViewEmploymentStatusesComponent;
  let fixture: ComponentFixture<ViewEmploymentStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmploymentStatusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmploymentStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
