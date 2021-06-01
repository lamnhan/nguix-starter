import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebodyComponent } from './pagebody.component';

describe('PagebodyComponent', () => {
  let component: PagebodyComponent;
  let fixture: ComponentFixture<PagebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
