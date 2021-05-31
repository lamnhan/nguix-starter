import { Component } from '@angular/core';
import {
  LocalstorageService,
  AppService,
  MetaService,
  NavService,
  NavItem,
  SettingService,
  PersonaService,
} from '@lamnhan/ngx-useful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: NavItem[] = [
    {
      text: 'Getting started',
      level: 0,
    },
      {
        text: 'Install',
        level: 1,
        routerLink: ['']
      },
    {
      text: 'Components',
      level: 0,
    },
      {
        text: 'Content',
        level: 1,
        routerLink: ['']
      },
    {
      text: 'Services',
      level: 0,
    },
      {
        text: 'App',
        level: 1,
        routerLink: ['']
      },
  ];

  constructor(
    private localstorageService: LocalstorageService,
    private appService: AppService,
    private metaService: MetaService,
    private navService: NavService,
    private settingService: SettingService,
    private personaService: PersonaService,
  ) {
    this.initialize();
  }

  private initialize() {
    this.localstorageService.init();
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
