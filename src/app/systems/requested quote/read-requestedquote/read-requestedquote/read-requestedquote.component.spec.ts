import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRequestedquoteComponent } from './read-requestedquote.component';

describe('ReadRequestedquoteComponent', () => {
  let component: ReadRequestedquoteComponent;
  let fixture: ComponentFixture<ReadRequestedquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRequestedquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRequestedquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
