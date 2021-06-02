import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MetaService, SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-oops-page',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss']
})
export class OopsPage implements OnInit, AfterViewInit, OnDestroy {
  private metaSubscription!: Subscription;

  /**
   * @ignore
   */
  public readonly pageData$ = this.route.data.pipe(
    map(data => ({
      i18n: this.i18n,
      image: this.image,
      content: this.content,
      actionLink: this.actionLink,
      actionText: this.actionText,
      ...data,
    }))
  );

  /**
   * Enable localization.
   */
  i18n = false;

  /**
   * Page image
   */
  image = '/assets/images/404.png';

  /**
   * Page content. For i18n, `OOPS.CONTENT`: Page not found
   */
  content = 'Page not found!';

  /**
   * Page action link
   */
  actionLink = [''];

  /**
   * Page action text. For i18n, `OOPS.ACTION_TEXT`: Go home
   */
  actionText = 'Go home';

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
        title: 'Oops',
        description: 'Page not found!',
      })
    );
  }

}
