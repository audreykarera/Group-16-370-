import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadVehiclesComponent } from './read-vehicles.component';

describe('ReadVehiclesComponent', () => {
  let component: ReadVehiclesComponent;
  let fixture: ComponentFixture<ReadVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
