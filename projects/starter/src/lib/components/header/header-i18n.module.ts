import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixHeaderComponentModule } from './header.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixHeaderComponentModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-header', alias: 'NGUIX_HEADER' },
  }],
  exports: [NguixHeaderComponentModule]
})
export class NguixHeaderI18nComponentModule { }
