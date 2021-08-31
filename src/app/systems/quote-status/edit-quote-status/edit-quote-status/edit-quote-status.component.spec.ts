import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuoteStatusComponent } from './edit-quote-status.component';

describe('EditQuoteStatusComponent', () => {
  let component: EditQuoteStatusComponent;
  let fixture: ComponentFixture<EditQuoteStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuoteStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuoteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
