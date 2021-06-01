import { NgModule } from '@angular/core';

import { NguixHeaderComponentModule } from './components/header/header.module';
import { NguixHeader2ndComponentModule } from './components/header2nd/header2nd.module';
import { NguixFooterComponentModule } from './components/footer/footer.module';
import { NguixOopsComponentModule } from './components/oops/oops.module';
import { NguixSpinnerComponentModule } from './components/spinner/spinner.module';
import { NguixOauthPopupComponentModule } from './components/oauth-popup/oauth-popup.module';
import { NguixNavIndicatorComponentModule } from './components/nav-indicator/nav-indicator.module';
import { NguixPwaReminderComponentModule } from './components/pwa-reminder/pwa-reminder.module';
import { NguixPwaBoxComponentModule } from './components/pwa-box/pwa-box.module';
import { NguixContentComponentModule } from './components/content/content.module';

@NgModule({
  declarations: [],
  imports: [
    NguixHeaderComponentModule,
    NguixHeader2ndComponentModule,
    NguixFooterComponentModule,
    NguixOopsComponentModule,
    NguixSpinnerComponentModule,
    NguixOauthPopupComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
    NguixPwaBoxComponentModule,
    NguixContentComponentModule,
  ],
  exports: [
    NguixHeaderComponentModule,
    NguixHeader2ndComponentModule,
    NguixFooterComponentModule,
    NguixOopsComponentModule,
    NguixSpinnerComponentModule,
    NguixOauthPopupComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
    NguixPwaBoxComponentModule,
    NguixContentComponentModule,
  ]
})
export class NguixStarterModule { }
