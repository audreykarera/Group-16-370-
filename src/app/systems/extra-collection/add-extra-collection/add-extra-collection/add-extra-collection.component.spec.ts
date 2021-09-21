import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtraCollectionComponent } from './add-extra-collection.component';

describe('AddExtraCollectionComponent', () => {
  let component: AddExtraCollectionComponent;
  let fixture: ComponentFixture<AddExtraCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExtraCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExtraCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
