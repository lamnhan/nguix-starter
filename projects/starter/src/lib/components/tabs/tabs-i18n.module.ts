import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixTabsComponentModule } from './tabs.module';

@NgModule({
  imports: [
    NguixTabsComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-tabs', alias: 'NGUIX_TABS' },
  }],
  exports: [NguixTabsComponentModule]
})
export class NguixTabsI18nComponentModule {}
