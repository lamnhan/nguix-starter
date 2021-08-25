import {NgModule} from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixPwaBoxComponentModule } from './pwa-box.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixPwaBoxComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-pwa-box', alias: 'NGUIX_PWA_BOX' },
  }],
  exports: [NguixPwaBoxComponentModule]
})
export class NguixPwaBoxI18nComponentModule {}
