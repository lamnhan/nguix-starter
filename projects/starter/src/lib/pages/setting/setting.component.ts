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
      TITLE: this.TITLE,
      THEME_TITLE: this.THEME_TITLE,
      THEME_DARK_MODE: this.THEME_DARK_MODE,
      LOCALE_TITLE: this.LOCALE_TITLE,
      PERSONA_TITLE: this.PERSONA_TITLE,
      ...data,
    })),
    tap(() =>
      this.metaService.changePageMetas({
        title: this.TITLE,
        description: 'Change app settings',
      })
    )
  );

  /**
   * Enable localization.
   */
  i18n = false;

  /**
   * Page title. For i18n: `NGUIX_SETTING_PAGE.TITLE`
   */
  TITLE = 'Settings';

  /**
   * Theme section title. For i18n: `NGUIX_SETTING_PAGE.THEME_TITLE`
   */
  THEME_TITLE = 'Theme';

  /**
   * Theme section dark mode text. For i18n: `NGUIX_SETTING_PAGE.THEME_DARK_MODE`
   */
  THEME_DARK_MODE = 'Dark mode';

  /**
   * Theme section title. For i18n: `NGUIX_SETTING_PAGE.LOCALE_TITLE`
   */
  LOCALE_TITLE = 'Locale';
   
  /**
   * Theme section title. For i18n: `NGUIX_SETTING_PAGE.PERSONA_TITLE`
   */
  PERSONA_TITLE = 'Persona';

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
