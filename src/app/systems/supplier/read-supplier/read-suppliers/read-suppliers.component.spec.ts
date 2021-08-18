import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSuppliersComponent } from './read-suppliers.component';

describe('ReadSuppliersComponent', () => {
  let component: ReadSuppliersComponent;
  let fixture: ComponentFixture<ReadSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
