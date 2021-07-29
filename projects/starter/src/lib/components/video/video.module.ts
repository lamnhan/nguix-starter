import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule, O2aPipeModule, O1iPipeModule, DatexPipeModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '../content/content.module';

import { NguixShareComponentModule } from '../share/share.module';
import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
    O2aPipeModule,
    O1iPipeModule,
    DatexPipeModule,
    NguixShareComponentModule,
    NguixContentComponentModule,
  ],
  exports: [VideoComponent]
})
export class NguixVideoComponentModule {}
