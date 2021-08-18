import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestedquoteComponent } from './create-requestedquote.component';

describe('CreateRequestedquoteComponent', () => {
  let component: CreateRequestedquoteComponent;
  let fixture: ComponentFixture<CreateRequestedquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRequestedquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequestedquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
