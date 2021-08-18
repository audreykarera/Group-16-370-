import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPackagesComponent } from './read-packages.component';

describe('ReadPackagesComponent', () => {
  let component: ReadPackagesComponent;
  let fixture: ComponentFixture<ReadPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
