import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPerKmRateComponent } from './read-per-km-rate.component';

describe('ReadPerKmRateComponent', () => {
  let component: ReadPerKmRateComponent;
  let fixture: ComponentFixture<ReadPerKmRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPerKmRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPerKmRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
