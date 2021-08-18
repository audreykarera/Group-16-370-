import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExtracollectionComponent } from './create-extracollection.component';

describe('CreateExtracollectionComponent', () => {
  let component: CreateExtracollectionComponent;
  let fixture: ComponentFixture<CreateExtracollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExtracollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExtracollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
