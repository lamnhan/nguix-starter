import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { TranslocoService } from '@ngneat/transloco';
import {
  MenuItem,
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
  UserDataService,
} from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  footerMenu: MenuItem[] = [
    { text: 'APP.SETTING', routerLink: ['setting'] },
    { text: 'APP.TERMS', routerLink: ['terms'] },
    { text: 'APP.PRIVACY', routerLink: ['privacy'] },
  ];

  constructor(
    private firebaseFirestore: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
    private translateService: TranslocoService,
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
    public authService: AuthService,
    private userService: UserService,
    // data services
    private userDataService: UserDataService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
    this.cacheService.init();
    this.fetchService.init(
      { cacheTime: 1440, /* 24 hours */ },
      { cacheService: this.cacheService },
    );
    this.databaseService.init(
      this.firebaseFirestore,
      {
        driver: 'firestore',
        cacheTime: 1440, // 24 hours
      },
      { cacheService: this.cacheService }
    );
    this.appService.init({ splashScreen: true });
    this.authService.init(this.firebaseAuth, {driver: 'firestore'});
    this.userService.init(this.userDataService);
    this.settingService.init(
      {
        browserColor: true,
        onReady: () => this.appService.hideSplashScreen(),
      },
      {
        themes: [
          { text: 'THEME.LIGHT', value: 'light' },
          { text: 'THEME.DARK', value: 'dark' },
        ],
        personas: [
          { text: 'PERSONA.DEFAULT', value: 'default' },
          { text: 'PERSONA.INTRO', value: 'intro' },
          { text: 'PERSONA.BLOG', value: 'blog' },
          { text: 'PERSONA.SHOP', value: 'shop' },
        ],
        locales: [
          { text: 'English', value: 'en-US' },
          { text: 'Tiếng việt', value: 'vi-VN' },
        ],
      },
      {
        localstorageService: this.localstorageService,        
        translateService: this.translateService,
        userService: this.userService,
      },
    );
    this.navService.init(
      {},
      { settingService: this.settingService },
    );
    this.pwaService.init({ reminder: false });
    this.personaService.init(
      {
        default: {}, // the documentation
        intro: {
          menu: ['home', 'about'],
        },
        blog: {
          menu: ['home', 'posts', 'about'],
        },
        shop: {
          menu: ['home', 'products', 'about'],
        }
      },
      {},
      { settingService: this.settingService },
      {
        home: { name: 'home', text: 'APP.HOME', routerLink: [''] },
        about: { name: 'about', text: 'APP.ABOUT', routerLink: ['about'] },
        posts: { name: 'posts', text: 'APP.POSTS', routerLink: ['posts'], activeAlso: ['post'] },
        products: { name: 'products', text: 'APP.PRODUCTS', routerLink: ['products'], activeAlso: ['product'] },
      }
    );
    this.metaService.init(
      {
        title: 'NGUIX Starter',
        description: 'Angular UI/UX starter kit.',
        image: 'https://nguix-starter.lamnhan.com/assets/images/featured.jpg',
        url: 'https://nguix-starter.lamnhan.com/',
        lang: 'en',
        ogLocale: 'en-US',
        ogSiteName: 'NGUIX Starter'
      },
      {},
      { settingService: this.settingService },
      {
        'vi-VN': {
          title: 'NGUIX Bắt Đầu',
          description: 'Bộ giao diện Angular khởi đâu.',
          image: 'https://nguix-starter.lamnhan.com/assets/images/featured.jpg',
          url: 'https://nguix-starter.lamnhan.com/vi-VN',
          lang: 'vi',
          ogLocale: 'vi-VN',
          ogSiteName: 'NGUIX Bắt Đầu'
        }
      }
    );
  }
}
