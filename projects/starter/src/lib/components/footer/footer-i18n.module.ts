import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixFooterComponentModule } from './footer.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixFooterComponentModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-footer', alias: 'NGUIX_FOOTER' },
  }],
  exports: [NguixFooterComponentModule]
})
export class NguixFooterI18nComponentModule { }
