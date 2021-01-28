import { NgModule } from '@angular/core';

import { HeaderRawComponentModule } from './components/header-raw/header-raw.module';
import { HeaderComponentModule } from './components/header/header.module';
import { FooterRawComponentModule } from './components/footer-raw/footer-raw.module';
import { FooterComponentModule } from './components/footer/footer.module';
import { ArticleRawComponentModule } from './components/article-raw/article-raw.module';
import { ArticleComponentModule } from './components/article/article.module';
import { ArticleRawComponent } from './components/article-raw/article-raw.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [ArticleRawComponent, ArticleComponent],
  imports: [
    HeaderRawComponentModule,
    HeaderComponentModule,
    FooterRawComponentModule,
    FooterComponentModule,
    ArticleRawComponentModule,
    ArticleComponentModule,
  ],
  exports: [
    HeaderRawComponentModule,
    HeaderComponentModule,
    FooterRawComponentModule,
    FooterComponentModule,
    ArticleRawComponentModule,
    ArticleComponentModule,
  ]
})
export class NguixStarterModule { }
