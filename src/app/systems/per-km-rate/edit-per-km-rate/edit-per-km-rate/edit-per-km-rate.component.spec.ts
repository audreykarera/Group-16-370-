import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerKmRateComponent } from './edit-per-km-rate.component';

describe('EditPerKmRateComponent', () => {
  let component: EditPerKmRateComponent;
  let fixture: ComponentFixture<EditPerKmRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPerKmRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPerKmRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
