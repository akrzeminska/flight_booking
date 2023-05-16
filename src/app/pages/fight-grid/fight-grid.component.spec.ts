import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightGridComponent } from './fight-grid.component';

describe('FightGridComponent', () => {
  let component: FightGridComponent;
  let fixture: ComponentFixture<FightGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
