import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import {PwaBoxComponent} from './pwa-box.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [PwaBoxComponent],
  imports: [
    CommonModule,
    TranslocoModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-pwa-box', alias: 'NGUIX_PWA_BOX' },
  }],
  exports: [PwaBoxComponent]
})
export class NguixPwaBoxComponentModule {}
