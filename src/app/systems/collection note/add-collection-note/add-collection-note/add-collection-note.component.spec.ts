import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollectionNoteComponent } from './add-collection-note.component';

describe('AddCollectionNoteComponent', () => {
  let component: AddCollectionNoteComponent;
  let fixture: ComponentFixture<AddCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
