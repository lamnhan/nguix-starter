import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixPostsComponentModule } from './posts.module';

@NgModule({
  imports: [
    NguixPostsComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-posts', alias: 'NGUIX_POSTS' },
  }],
  exports: [NguixPostsComponentModule]
})
export class NguixPostsI18nComponentModule {}
