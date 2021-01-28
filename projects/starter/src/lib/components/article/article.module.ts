import { NgModule } from '@angular/core';

import { ArticleRawComponentModule } from '../article-raw/article-raw.module';

import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    ArticleRawComponentModule
  ],
  exports: [ArticleComponent]
})
export class ArticleComponentModule { }
