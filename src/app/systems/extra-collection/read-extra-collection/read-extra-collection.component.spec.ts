import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadExtraCollectionComponent } from './read-extra-collection.component';

describe('ReadExtraCollectionComponent', () => {
  let component: ReadExtraCollectionComponent;
  let fixture: ComponentFixture<ReadExtraCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadExtraCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadExtraCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
