import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import 'prismjs';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-markdown.min.js';
import 'prismjs/components/prism-json.min.js';

import { ContentComponent } from './content.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule,
    RouterLinkDirectiveModule,
  ],
  providers: [
    MarkdownService,
    {
      provide: SECURITY_CONTEXT,
      useValue: SecurityContext.NONE
    },
  ],
  exports: [ContentComponent]
})
export class NguixContentComponentModule {}
