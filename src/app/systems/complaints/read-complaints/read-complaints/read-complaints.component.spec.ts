import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComplaintsComponent } from './read-complaints.component';

describe('ReadComplaintsComponent', () => {
  let component: ReadComplaintsComponent;
  let fixture: ComponentFixture<ReadComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
