import { NgModule } from '@angular/core';

import { NguixHeaderComponentModule } from './components/header/header.module';
import { NguixFooterComponentModule } from './components/footer/footer.module';
import { NguixOopsComponentModule } from './components/oops/oops.module';
import { NguixOauthPopupComponentModule } from './components/oauth-popup/oauth-popup.module';
import { NguixNavIndicatorComponentModule } from './components/nav-indicator/nav-indicator.module';
import { NguixPwaReminderComponentModule } from './components/pwa-reminder/pwa-reminder.module';
import { NguixPwaBoxComponentModule } from './components/pwa-box/pwa-box.module';
import { NguixContentComponentModule } from './components/content/content.module';

@NgModule({
  declarations: [],
  imports: [
    NguixHeaderComponentModule,
    NguixFooterComponentModule,
    NguixOopsComponentModule,
    NguixOauthPopupComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
    NguixPwaBoxComponentModule,
    NguixContentComponentModule,
  ],
  exports: [
    NguixHeaderComponentModule,
    NguixFooterComponentModule,
    NguixOopsComponentModule,
    NguixOauthPopupComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
    NguixPwaBoxComponentModule,
    NguixContentComponentModule,
  ]
})
export class NguixStarterModule { }
