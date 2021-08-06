import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { MetaService, SettingService } from '@lamnhan/ngx-useful';
import { PageDataService } from '@lamnhan/ngx-schemata';

@Component({
  selector: 'nguix-terms-page',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsPage implements OnInit {
  
  /**
   * @ignore
   */
  public readonly page$ = this.route.data.pipe(
    // retrieve data
    map(data => ({
      i18n: this.i18n,
      id: this.id,
      ids: this.ids,
      ...data,
    })),
    // get locale
    switchMap(data =>
      combineLatest([
        of(data),
        !data.i18n
          ? of('en-US')
          : this.settingService.onLocaleChanged
      ])
    ),
    // get the page
    switchMap(([data, locale]) =>
      this.pageDataService.getDoc(
        !data.i18n
          ? data.id
          : data.ids[locale] || data.ids['en-US'],
        { time: 10080 }
      )
    ),
    // fallback to default if no localized found
    switchMap(page =>
      page ? of(page) : this.pageDataService.getDoc(this.id, { time: 10080 })
    ),
    // change metas
    tap(page =>
      !page
        ? false
        : this.metaService.changePageMetas(page)
    ),
  );

  /**
   * Enable localization.
   */
  i18n = false;

  /**
   * Privacy page id.
   */
  id = 'terms';

  /**
   * List of terms page localized ids.
   */
  ids: Record<string, string> = {
    'en-US': 'terms',
  };

  constructor(
    private route: ActivatedRoute,
    /**
     * Inject() Requires the [MetaService](https://ngx-useful.lamnhan.com/service/meta)
     */
    public readonly metaService: MetaService,
    /**
     * Inject() Requires the [SettingService](https://ngx-useful.lamnhan.com/service/setting)
     */
    public readonly settingService: SettingService,
    /**
     * Inject() Requires the [PageDataService](https://schemata.lamnhan.com/schema/page)
     */
    public readonly pageDataService: PageDataService,
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

}
