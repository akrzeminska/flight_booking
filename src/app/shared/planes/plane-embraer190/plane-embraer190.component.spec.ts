import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneEmbraer190Component } from './plane-embraer190.component';

describe('PlaneEmbraer190Component', () => {
  let component: PlaneEmbraer190Component;
  let fixture: ComponentFixture<PlaneEmbraer190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneEmbraer190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneEmbraer190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
