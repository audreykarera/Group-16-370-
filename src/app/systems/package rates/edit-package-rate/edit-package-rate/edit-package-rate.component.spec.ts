import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPackageRateComponent } from './edit-package-rate.component';

describe('EditPackageRateComponent', () => {
  let component: EditPackageRateComponent;
  let fixture: ComponentFixture<EditPackageRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPackageRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPackageRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
