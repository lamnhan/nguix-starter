import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {
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

  constructor(
    private firebaseFirestore: AngularFirestore,
    private readonly firebaseAuth: AngularFireAuth,
    private localstorageService: LocalstorageService,
    private cacheService: CacheService,
    private fetchService: FetchService,
    private appService: AppService,
    private metaService: MetaService,
    public navService: NavService,
    private settingService: SettingService,
    public pwaService: PwaService,
    private personaService: PersonaService,
    private databaseService: DatabaseService,
    public readonly authService: AuthService,
    private userService: UserService,
    // data services
    private readonly userDataService: UserDataService,
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
        personas: [
          { text: 'Default', value: 'default' },
          { text: 'Intro', value: 'intro' },
          { text: 'Blog', value: 'blog' },
          { text: 'Shop', value: 'shop' },
        ],
      },
      {
        localstorageService: this.localstorageService,
        userService: this.userService,
      },
    );
    this.navService.init(
      {},
      { settingService: this.settingService },
    );
    this.pwaService.init({ reminder: false });
    this.personaService.init({}, {},
      { settingService: this.settingService },
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
    );
  }
}
