import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExtraCollectionComponent } from './edit-extra-collection.component';

describe('EditExtraCollectionComponent', () => {
  let component: EditExtraCollectionComponent;
  let fixture: ComponentFixture<EditExtraCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExtraCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExtraCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
