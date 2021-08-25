import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixVideosComponentModule } from './videos.module';

@NgModule({
  imports: [
    NguixVideosComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-videos', alias: 'NGUIX_VIDEOS' },
  }],
  exports: [NguixVideosComponentModule]
})
export class NguixVideosI18nComponentModule {}
