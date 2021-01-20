import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRawComponent } from './header-raw.component';

describe('HeaderRawComponent', () => {
  let component: HeaderRawComponent;
  let fixture: ComponentFixture<HeaderRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
