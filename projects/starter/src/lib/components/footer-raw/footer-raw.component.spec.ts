import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRawComponent } from './footer-raw.component';

describe('FooterRawComponent', () => {
  let component: FooterRawComponent;
  let fixture: ComponentFixture<FooterRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
