import { NgModule } from '@angular/core';

import { NguixHeaderComponentModule } from './components/header/header.module';
import { NguixHeader2ndComponentModule } from './components/header2nd/header2nd.module';
import { NguixTabsComponentModule } from './components/tabs/tabs.module';
import { NguixFooterComponentModule } from './components/footer/footer.module';
import { NguixOopsComponentModule } from './components/oops/oops.module';
import { NguixSpinnerComponentModule } from './components/spinner/spinner.module';
import { NguixNavIndicatorComponentModule } from './components/nav-indicator/nav-indicator.module';
import { NguixPwaReminderComponentModule } from './components/pwa-reminder/pwa-reminder.module';
import { NguixPwaBoxComponentModule } from './components/pwa-box/pwa-box.module';
import { NguixContentComponentModule } from './components/content/content.module';
import { NguixIconComponentModule } from './components/icon/icon.module';
import { NguixShareComponentModule } from './components/share/share.module';
import { NguixLoginComponentModule } from './components/login/login.module';
import { NguixRegisterComponentModule } from './components/register/register.module';
import { NguixAccountComponentModule } from './components/account/account.module';
import { NguixPostsComponentModule } from './components/posts/posts.module';
import { NguixPostComponentModule } from './components/post/post.module';
import { NguixVideosComponentModule } from './components/videos/videos.module';
import { NguixVideoComponentModule } from './components/video/video.module';

@NgModule({
  declarations: [],
  imports: [
    NguixHeaderComponentModule,
    NguixHeader2ndComponentModule,
    NguixTabsComponentModule,
    NguixFooterComponentModule,
    NguixOopsComponentModule,
    NguixSpinnerComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
    NguixPwaBoxComponentModule,
    NguixContentComponentModule,
    NguixIconComponentModule,
    NguixShareComponentModule,
    NguixLoginComponentModule,
    NguixRegisterComponentModule,
    NguixAccountComponentModule,
    NguixPostsComponentModule,
    NguixPostComponentModule,
    NguixVideosComponentModule,
    NguixVideoComponentModule,
  ],
  exports: [
    NguixHeaderComponentModule,
    NguixHeader2ndComponentModule,
    NguixTabsComponentModule,
    NguixFooterComponentModule,
    NguixOopsComponentModule,
    NguixSpinnerComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
    NguixPwaBoxComponentModule,
    NguixContentComponentModule,
    NguixIconComponentModule,
    NguixShareComponentModule,
    NguixLoginComponentModule,
    NguixRegisterComponentModule,
    NguixAccountComponentModule,
    NguixPostsComponentModule,
    NguixPostComponentModule,
    NguixVideosComponentModule,
    NguixVideoComponentModule,
  ]
})
export class NguixStarterModule { }
