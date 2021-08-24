import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule , TRANSLOCO_SCOPE} from '@ngneat/transloco';
import { RouterLinkDirectiveModule, O2aPipeModule, O1iPipeModule, DatexPipeModule } from '@lamnhan/ngx-useful';
import { NguixContentComponentModule } from '../content/content.module';

import { NguixShareComponentModule } from '../share/share.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
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
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-post', alias: 'NGUIX_POST' },
  }],
  exports: [PostComponent]
})
export class NguixPostComponentModule {}
