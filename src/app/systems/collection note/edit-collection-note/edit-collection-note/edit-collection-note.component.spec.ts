import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollectionNoteComponent } from './edit-collection-note.component';

describe('EditCollectionNoteComponent', () => {
  let component: EditCollectionNoteComponent;
  let fixture: ComponentFixture<EditCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
