import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { MetaService, SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-setting-page',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingPage implements OnInit {

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
    })),
    tap(() =>
      this.metaService.changePageMetas({
        title: this.title,
        description: 'Change app settings',
      })
    )
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
    /**
     * Inject() Requires the [MetaService](https://ngx-useful.lamnhan.com/service/meta)
     */
    public readonly metaService: MetaService,
    /**
     * Inject() Requires the [SettingService](https://ngx-useful.lamnhan.com/service/setting)
     */
    public readonly settingService: SettingService
  ) { }

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  toggleTheme(e: any) {
    return this.settingService.changeTheme(e.target.checked ? 'dark' : 'light');
  }
}
