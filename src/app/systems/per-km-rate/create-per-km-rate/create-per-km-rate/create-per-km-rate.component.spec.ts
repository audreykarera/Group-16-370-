import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePerKmRateComponent } from './create-per-km-rate.component';

describe('CreatePerKmRateComponent', () => {
  let component: CreatePerKmRateComponent;
  let fixture: ComponentFixture<CreatePerKmRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePerKmRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePerKmRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
