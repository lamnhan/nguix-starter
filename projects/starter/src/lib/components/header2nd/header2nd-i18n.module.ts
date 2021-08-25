import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixHeader2ndComponentModule } from './header2nd.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixHeader2ndComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-header2nd', alias: 'NGUIX_HEADER2ND' },
  }],
  exports: [NguixHeader2ndComponentModule]
})
export class NguixHeader2ndI18nComponentModule { }
