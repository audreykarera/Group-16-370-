import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadServicesComponent } from './read-services.component';

describe('ReadServicesComponent', () => {
  let component: ReadServicesComponent;
  let fixture: ComponentFixture<ReadServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
