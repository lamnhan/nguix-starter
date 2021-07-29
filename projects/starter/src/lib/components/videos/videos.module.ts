import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
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
  exports: [VideosComponent]
})
export class NguixVideosComponentModule {}
