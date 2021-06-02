import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MetaService, SettingService, PageDataService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-terms-page',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsPage implements OnInit, AfterViewInit, OnDestroy {
  private metaSubscription!: Subscription;

  private readonly pageLocalizedIds: Record<string, string> = {
    'en-US': 'terms',
  };

  /**
   * @ignore
   */
  public readonly page$ = this.settingService.onLocaleChanged.pipe(
    switchMap(locale =>
      this.pageDataService.getDoc(this.pageLocalizedIds[locale], {time: 10080 /* 7 days */})
    ),
  );

  constructor(
    /**
     * Inject() Requires the [MetaService](https://ngx-useful.lamnhan.com/service/meta)
     */
    public readonly metaService: MetaService,
    /**
     * Inject() Requires the [SettingService](https://ngx-useful.lamnhan.com/service/setting)
     */
    public readonly settingService: SettingService,
    /**
     * Inject() Requires the [PageDataService](https://ngx-useful.lamnhan.com/schemata/service/page)
     */
    public readonly pageDataService: PageDataService,
  ) {}

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
    this.metaSubscription = this.settingService.onLocaleChanged.subscribe(locale =>
      this.metaService.changePageMetas({
        title: 'Terms of service',
        description: 'The terms of service',
      })
    );
  }
}
