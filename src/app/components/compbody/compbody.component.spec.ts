import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompbodyComponent } from './compbody.component';

describe('CompbodyComponent', () => {
  let component: CompbodyComponent;
  let fixture: ComponentFixture<CompbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
