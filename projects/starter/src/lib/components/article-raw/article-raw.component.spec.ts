import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRawComponent } from './article-raw.component';

describe('ArticleRawComponent', () => {
  let component: ArticleRawComponent;
  let fixture: ComponentFixture<ArticleRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleRawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
