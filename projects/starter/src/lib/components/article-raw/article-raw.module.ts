import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarkdownModule, MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';

import { ArticleRawComponent } from './article-raw.component';

@NgModule({
  declarations: [ArticleRawComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
  ],
  providers: [
    MarkdownService,
    {
      provide: SECURITY_CONTEXT,
      useValue: SecurityContext.HTML
    }
  ],
  exports: [ArticleRawComponent]
})
export class ArticleRawComponentModule { }
