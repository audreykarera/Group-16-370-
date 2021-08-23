import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSideCollectionNoteComponent } from './employee-side-collection-note.component';

describe('EmployeeSideCollectionNoteComponent', () => {
  let component: EmployeeSideCollectionNoteComponent;
  let fixture: ComponentFixture<EmployeeSideCollectionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSideCollectionNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSideCollectionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
