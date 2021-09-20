import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonPostsComponent } from './skeleton-posts.component';

describe('SkeletonPostsComponent', () => {
  let component: SkeletonPostsComponent;
  let fixture: ComponentFixture<SkeletonPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
