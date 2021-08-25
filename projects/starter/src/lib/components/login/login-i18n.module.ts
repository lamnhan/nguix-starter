import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixLoginComponentModule } from './login.module';

@NgModule({
  imports: [
    NguixLoginComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-login', alias: 'NGUIX_LOGIN' },
  }],
  exports: [NguixLoginComponentModule]
})
export class NguixLoginI18nComponentModule {}
