import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterLinkDirectiveModule, O2aPipeModule, O1iPipeModule } from '@lamnhan/ngx-useful';

import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    O2aPipeModule,
    O1iPipeModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-videos', alias: 'NGUIX_VIDEOS' },
  }],
  exports: [VideosComponent]
})
export class NguixVideosComponentModule {}
