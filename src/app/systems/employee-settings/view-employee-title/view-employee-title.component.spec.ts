import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeTitleComponent } from './view-employee-title.component';

describe('ViewEmployeeTitleComponent', () => {
  let component: ViewEmployeeTitleComponent;
  let fixture: ComponentFixture<ViewEmployeeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
