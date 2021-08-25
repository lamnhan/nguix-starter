import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixOopsComponentModule } from './oops.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixOopsComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-oops', alias: 'NGUIX_OOPS' },
  }],
  exports: [NguixOopsComponentModule],
})
export class NguixOopsI18nComponentModule { }
