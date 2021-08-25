import {NgModule} from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import {NguixPwaReminderComponentModule} from './pwa-reminder.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixPwaReminderComponentModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-pwa-reminder', alias: 'NGUIX_PWA_REMINDER' },
  }],
  exports: [NguixPwaReminderComponentModule]
})
export class NguixPwaReminderI18nComponentModule {}
