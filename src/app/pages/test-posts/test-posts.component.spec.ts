import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPostsComponent } from './test-posts.component';

describe('TestPostsComponent', () => {
  let component: TestPostsComponent;
  let fixture: ComponentFixture<TestPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
