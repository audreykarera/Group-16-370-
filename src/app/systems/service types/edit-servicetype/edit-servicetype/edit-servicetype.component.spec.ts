import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicetypeComponent } from './edit-servicetype.component';

describe('EditServicetypeComponent', () => {
  let component: EditServicetypeComponent;
  let fixture: ComponentFixture<EditServicetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServicetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
