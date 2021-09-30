import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCollectionNoteComponent } from './read-collection-note.component';

describe('ReadCollectionNoteComponent', () => {
  let component: ReadCollectionNoteComponent;
  let fixture: ComponentFixture<ReadCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
