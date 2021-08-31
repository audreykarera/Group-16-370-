import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuoteStatusComponent } from './create-quote-status.component';

describe('CreateQuoteStatusComponent', () => {
  let component: CreateQuoteStatusComponent;
  let fixture: ComponentFixture<CreateQuoteStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuoteStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuoteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
