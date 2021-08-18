import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicetypeComponent } from './create-servicetype.component';

describe('CreateServicetypeComponent', () => {
  let component: CreateServicetypeComponent;
  let fixture: ComponentFixture<CreateServicetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServicetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
