import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateCostingComponent } from './estimate-costing.component';

describe('EstimateCostingComponent', () => {
  let component: EstimateCostingComponent;
  let fixture: ComponentFixture<EstimateCostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateCostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
