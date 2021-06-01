import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashscreensComponent } from './splashscreens.component';

describe('SplashscreensComponent', () => {
  let component: SplashscreensComponent;
  let fixture: ComponentFixture<SplashscreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashscreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashscreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
