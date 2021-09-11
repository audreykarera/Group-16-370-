import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpSideCollectionNoteComponent } from './edit-emp-side-collection-note.component';

describe('EditEmpSideCollectionNoteComponent', () => {
  let component: EditEmpSideCollectionNoteComponent;
  let fixture: ComponentFixture<EditEmpSideCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpSideCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpSideCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
