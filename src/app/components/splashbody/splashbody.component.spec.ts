import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashbodyComponent } from './splashbody.component';

describe('SplashbodyComponent', () => {
  let component: SplashbodyComponent;
  let fixture: ComponentFixture<SplashbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
