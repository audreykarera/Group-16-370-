import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadServicePriceComponent } from './read-service-price.component';

describe('ReadServicePriceComponent', () => {
  let component: ReadServicePriceComponent;
  let fixture: ComponentFixture<ReadServicePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadServicePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadServicePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
