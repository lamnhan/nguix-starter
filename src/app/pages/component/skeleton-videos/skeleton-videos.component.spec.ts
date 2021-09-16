import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonVideosComponent } from './skeleton-videos.component';

describe('SkeletonVideosComponent', () => {
  let component: SkeletonVideosComponent;
  let fixture: ComponentFixture<SkeletonVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
