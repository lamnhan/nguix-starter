import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixRegisterComponentModule } from './register.module';

@NgModule({
  imports: [
    NguixRegisterComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-register', alias: 'NGUIX_REGISTER' },
  }],
  exports: [NguixRegisterComponentModule]
})
export class NguixRegisterI18nComponentModule {}
