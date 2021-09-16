import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEmpSideCollectionNoteComponent } from './read-emp-side-collection-note.component';

describe('ReadEmpSideCollectionNoteComponent', () => {
  let component: ReadEmpSideCollectionNoteComponent;
  let fixture: ComponentFixture<ReadEmpSideCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadEmpSideCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEmpSideCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
