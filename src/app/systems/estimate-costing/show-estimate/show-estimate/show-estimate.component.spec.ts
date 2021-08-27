import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEstimateComponent } from './show-estimate.component';

describe('ShowEstimateComponent', () => {
  let component: ShowEstimateComponent;
  let fixture: ComponentFixture<ShowEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEstimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
