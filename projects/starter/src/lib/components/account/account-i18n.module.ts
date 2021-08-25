import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixAccountComponentModule } from './account.module';

@NgModule({
  imports: [
    NguixAccountComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-account', alias: 'NGUIX_ACCOUNT' },
  }],
  exports: [NguixAccountComponentModule]
})
export class NguixAccountI18nComponentModule {}
