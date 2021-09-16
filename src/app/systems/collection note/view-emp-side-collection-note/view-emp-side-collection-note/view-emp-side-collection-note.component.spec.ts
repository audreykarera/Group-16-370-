import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpSideCollectionNoteComponent } from './view-emp-side-collection-note.component';

describe('ViewEmpSideCollectionNoteComponent', () => {
  let component: ViewEmpSideCollectionNoteComponent;
  let fixture: ComponentFixture<ViewEmpSideCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpSideCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpSideCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
