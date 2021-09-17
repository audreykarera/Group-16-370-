import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicepriceComponent } from './edit-serviceprice.component';

describe('EditServicepriceComponent', () => {
  let component: EditServicepriceComponent;
  let fixture: ComponentFixture<EditServicepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServicepriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServicepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
