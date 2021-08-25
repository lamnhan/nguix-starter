import {NgModule} from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import {NguixNavIndicatorComponentModule} from './nav-indicator.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixNavIndicatorComponentModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-nav-indicator', alias: 'NGUIX_NAV_INDICATOR' },
  }],
  exports: [NguixNavIndicatorComponentModule]
})
export class NguixNavIndicatorI18nComponentModule {}
