import {NgModule} from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import {NguixNetworkIndicatorComponentModule} from './network-indicator.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixNetworkIndicatorComponentModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-network-indicator', alias: 'NGUIX_NETWORK_INDICATOR' },
  }],
  exports: [NguixNetworkIndicatorComponentModule]
})
export class NguixNetworkIndicatorI18nComponentModule {}
