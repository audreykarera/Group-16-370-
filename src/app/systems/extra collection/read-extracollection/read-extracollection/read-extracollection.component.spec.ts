import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadExtracollectionComponent } from './read-extracollection.component';

describe('ReadExtracollectionComponent', () => {
  let component: ReadExtracollectionComponent;
  let fixture: ComponentFixture<ReadExtracollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadExtracollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadExtracollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
