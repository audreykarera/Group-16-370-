import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackageRateComponent } from './create-package-rate.component';

describe('CreatePackageRateComponent', () => {
  let component: CreatePackageRateComponent;
  let fixture: ComponentFixture<CreatePackageRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePackageRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePackageRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
