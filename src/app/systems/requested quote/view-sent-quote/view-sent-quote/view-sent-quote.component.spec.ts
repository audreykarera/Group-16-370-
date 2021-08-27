import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSentQuoteComponent } from './view-sent-quote.component';

describe('ViewSentQuoteComponent', () => {
  let component: ViewSentQuoteComponent;
  let fixture: ComponentFixture<ViewSentQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSentQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSentQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
