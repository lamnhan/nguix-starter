import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import {PwaReminderComponent} from './pwa-reminder.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [PwaReminderComponent],
  imports: [
    CommonModule,
    TranslocoModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-pwa-reminder', alias: 'NGUIX_PWA_REMINDER' },
  }],
  exports: [PwaReminderComponent]
})
export class NguixPwaReminderComponentModule {}
