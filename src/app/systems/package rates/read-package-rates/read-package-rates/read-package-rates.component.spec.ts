import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPackageRatesComponent } from './read-package-rates.component';

describe('ReadPackageRatesComponent', () => {
  let component: ReadPackageRatesComponent;
  let fixture: ComponentFixture<ReadPackageRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPackageRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPackageRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
