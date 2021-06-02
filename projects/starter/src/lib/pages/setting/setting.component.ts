import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MetaService, SettingService, UserService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-setting-page',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingPage implements OnInit, AfterViewInit, OnDestroy {
  private metaSubscription!: Subscription;

  /**
   * @ignore
   */
  public readonly pageData$ = this.route.data.pipe(
    map(data => ({
      i18n: this.i18n,
      title: this.title,
      themeTitle: this.themeTitle,
      themeDarkMode: this.themeDarkMode,
      localeTitle: this.localeTitle,
      personaTitle: this.personaTitle,
      ...data,
    }))
  );

  /**
   * Enable localization.
   */
  i18n = false;

  /**
   * Page title. For i18n, `APP.SETTING` = Settings
   */
  title = 'Settings';

  /**
   * Theme section title. For i18n, `THEME.TITLE` = Theme
   */
  themeTitle = 'Theme';

  /**
   * Theme section dark mode text. For i18n, `THEME.DARK_MODE` = Dark mode
   */
  themeDarkMode = 'Dark mode';

  /**
   * Theme section title. For i18n, `LOCALE.TITLE` = Locale
   */
  localeTitle = 'Locale';
   
  /**
   * Theme section title. For i18n, `PERSONA.TITLE` = Persona
   */
  personaTitle = 'Persona';

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService,
    /**
     * @ignore
     */
    public readonly user: UserService,
    /**
     * @ignore
     */
    public readonly setting: SettingService
  ) { }

  /**
   * @ignore
   */
  ngOnDestroy(): void {
    this.metaSubscription.unsubscribe();
  }

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  ngAfterViewInit() {
    this.metaSubscription = this.setting.onLocaleChanged.subscribe(locale =>
      this.metaService.changePageMetas({
        title: 'Settings',
        description: 'Change app settings',
      })
    );
  }

  /**
   * @ignore
   */
  toggleTheme(e: any) {
    return this.setting.changeTheme(e.target.checked ? 'dark' : 'light');
  }
}
