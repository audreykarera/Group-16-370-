import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExtracollectionComponent } from './edit-extracollection.component';

describe('EditExtracollectionComponent', () => {
  let component: EditExtracollectionComponent;
  let fixture: ComponentFixture<EditExtracollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExtracollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExtracollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
