import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE} from '@ngneat/transloco';

import { NguixPostComponentModule } from './post.module';

@NgModule({
  imports: [
    NguixPostComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-post', alias: 'NGUIX_POST' },
  }],
  exports: [NguixPostComponentModule]
})
export class NguixPostI18nComponentModule {}
