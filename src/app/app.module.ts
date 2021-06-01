import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {
  RouterLinkDirectiveModule,
  // normal services
  LocalstorageService,
  CacheService,
  FetchService,
  AppService,
  MetaService,
  NavService,
  SettingService,
  PwaService,
  PersonaService,
  DatabaseService,
  AuthService,
  UserService,
  // data services
  PageDataService,
  UserDataService,
} from '@lamnhan/ngx-useful';
import { NguixNavIndicatorComponentModule, NguixPwaReminderComponentModule } from '@lamnhan/nguix-starter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponentModule } from './components/header/header.module';
import { Header2ndComponentModule } from './components/header2nd/header2nd.module';
import { FooterComponentModule } from './components/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterLinkDirectiveModule,
    HeaderComponentModule,
    Header2ndComponentModule,
    FooterComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
  ],
  providers: [
    // useful normal services
    LocalstorageService,
    CacheService,
    FetchService,
    AppService,
    MetaService,
    NavService,
    SettingService,
    PwaService,
    PersonaService,
    DatabaseService,
    AuthService,
    UserService,
    // schemata data services
    PageDataService,
    UserDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
