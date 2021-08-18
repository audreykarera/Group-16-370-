import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCollectionNoteComponent } from './view-collection-note.component';

describe('ViewCollectionNoteComponent', () => {
  let component: ViewCollectionNoteComponent;
  let fixture: ComponentFixture<ViewCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
