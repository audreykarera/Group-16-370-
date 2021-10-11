import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadQuoteRequestComponent } from './read-quote-request.component';

describe('ReadQuoteRequestComponent', () => {
  let component: ReadQuoteRequestComponent;
  let fixture: ComponentFixture<ReadQuoteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadQuoteRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQuoteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
