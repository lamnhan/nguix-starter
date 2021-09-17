import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonVideoComponent } from './skeleton-video.component';

describe('SkeletonVideoComponent', () => {
  let component: SkeletonVideoComponent;
  let fixture: ComponentFixture<SkeletonVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
