import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { TranslocoService } from '@ngneat/transloco';
import {
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
import { UserDataService, ProfileDataService } from '@lamnhan/ngx-schemata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private firebaseFirestore: AngularFirestore,
    private firebaseStorage: AngularFireStorage,
    private firebaseAuth: AngularFireAuth,
    private translateService: TranslocoService,
    // ngx-useful
    private networkService: NetworkService,
    private localstorageService: LocalstorageService,
    private cacheService: CacheService,
    private fetchService: FetchService,
    private appService: AppService,
    private metaService: MetaService,
    public navService: NavService,
    private settingService: SettingService,
    public pwaService: PwaService,
    public personaService: PersonaService,
    private databaseService: DatabaseService,
    private storageService: StorageService,
    public authService: AuthService,
    private userService: UserService,
    // data services
    private userDataService: UserDataService,
    private profileDataService: ProfileDataService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.networkService.init();
    this.localstorageService.init();
    this.cacheService.init();
    this.fetchService
      .setOptions({ cacheTime: 1440, /* 24 hours */ })
      .setIntegrations({ cacheService: this.cacheService })
      .init();
    this.databaseService
      .setOptions({
        driver: 'firestore',
        cacheTime: 1440, // 24 hours
      })
      .setIntegrations({ cacheService: this.cacheService })
      .init(this.firebaseFirestore);
    this.storageService.init(this.firebaseStorage);
    this.appService.setOptions({ splashScreen: true }).init();
    this.authService.setOptions({driver: 'firestore'}).init(this.firebaseAuth);
    this.userService.init(this.userDataService, this.profileDataService);
    this.settingService
      .setOptions({
        browserColor: true,
        onReady: () => this.appService.hideSplashScreen(),
      })
      .setIntegrations({
        localstorageService: this.localstorageService,        
        translateService: this.translateService,
        userService: this.userService,
      })
      .setListing({
        themes: [
          { text: 'THEME.LIGHT', value: 'light' },
          { text: 'THEME.DARK', value: 'dark' },
        ],
        personas: [
          { text: 'PERSONA.DEFAULT', value: 'default' },
        ],
        locales: [
          { text: 'English', value: 'en-US' },
          { text: 'Tiếng việt', value: 'vi-VN' },
        ],
      })
      .init();
    this.navService
      .setIntegrations({ settingService: this.settingService })
      .init();
    this.pwaService.setOptions({ reminder: false }).init();
    this.personaService
      .setIntegrations({ settingService: this.settingService })
      .init({
        default: {},
      });
    this.metaService
      .setIntegrations({ settingService: this.settingService })
      .init(
        {
          url: 'https://nguix-starter.lamnhan.com/',
          title: 'NGUIX Starter',
          description: 'Angular UI/UX starter kit.',
          image: 'https://nguix-starter.lamnhan.com/assets/images/featured.jpg',
          locale: 'en-US'
        },
        {
          'vi-VN': {
            url: 'https://nguix-starter.lamnhan.com/vi-VN',
            title: 'NGUIX Bắt Đầu',
            description: 'Bộ giao diện Angular khởi đâu.',
            image: 'https://nguix-starter.lamnhan.com/assets/images/featured.jpg',
            locale: 'vi-VN'
          }
        }
      );
  }
}
