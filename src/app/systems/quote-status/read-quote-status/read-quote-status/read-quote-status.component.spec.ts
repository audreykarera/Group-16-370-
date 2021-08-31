import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQuoteStatusComponent } from './read-quote-status.component';

describe('ReadQuoteStatusComponent', () => {
  let component: ReadQuoteStatusComponent;
  let fixture: ComponentFixture<ReadQuoteStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadQuoteStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQuoteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
