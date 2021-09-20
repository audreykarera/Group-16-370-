import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicePriceComponent } from './create-service-price.component';

describe('CreateServicePriceComponent', () => {
  let component: CreateServicePriceComponent;
  let fixture: ComponentFixture<CreateServicePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServicePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
