import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  RouterLinkDirectiveModule,
  NetworkService,
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
  StorageService,
  AuthService,
  UserService,
} from '@lamnhan/ngx-useful';
import { PageDataService, PostDataService, UserDataService, ProfileDataService } from '@lamnhan/ngx-schemata';
import {
  NguixHeaderComponentModule,
  NguixFooterComponentModule,
  NguixNetworkIndicatorComponentModule,
  NguixNavIndicatorComponentModule,
  NguixPwaReminderComponentModule
} from '@lamnhan/nguix-starter';

import { AppRoutingModule } from './app-routing.module';
import { AppTranslateModule } from './app-translate.module';
import { AppComponent } from './app.component';

import { HeaderComponentModule } from './components/header/header.module';
import { Header2ndComponentModule } from './components/header2nd/header2nd.module';
import { FooterComponentModule } from './components/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslateModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterLinkDirectiveModule,
    HeaderComponentModule,
    Header2ndComponentModule,
    FooterComponentModule,
    NguixHeaderComponentModule,
    NguixFooterComponentModule,
    NguixNetworkIndicatorComponentModule,
    NguixNavIndicatorComponentModule,
    NguixPwaReminderComponentModule,
  ],
  providers: [
    AngularFireStorage,
    // useful normal services
    LocalstorageService,
    NetworkService,
    CacheService,
    FetchService,
    AppService,
    MetaService,
    NavService,
    SettingService,
    PwaService,
    PersonaService,
    DatabaseService,
    StorageService,
    AuthService,
    UserService,
    // schemata data services
    PageDataService,
    PostDataService,
    UserDataService,
    ProfileDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
