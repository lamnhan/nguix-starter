import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  // normal services
  LocalstorageService,
  CacheService,
  AppService,
  MetaService,
  NavService,
  SettingService,
  PersonaService,
  DatabaseService
} from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private firebaseFirestore: AngularFirestore,
    private localstorageService: LocalstorageService,
    private cacheService: CacheService,
    private appService: AppService,
    private metaService: MetaService,
    private navService: NavService,
    private settingService: SettingService,
    private personaService: PersonaService,
    private databaseService: DatabaseService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
    this.cacheService.init();
    this.databaseService.init(
      this.firebaseFirestore,
      {
        driver: 'firestore',
        cacheTime: 1440, // 24 hours
      },
      { cacheService: this.cacheService }
    );
    this.appService.init({ splashScreen: true });
    this.settingService.init(
      {
        browserColor: true,
        onReady: () => this.appService.hideSplashScreen(),
      },
      {},
      {
        localstorageService: this.localstorageService,
      },
    );
    this.navService.init(
      {},
      { settingService: this.settingService },
    );
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
