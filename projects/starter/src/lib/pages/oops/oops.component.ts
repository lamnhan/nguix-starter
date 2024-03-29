import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { MetaService, SettingService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-oops-page',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss']
})
export class OopsPage implements OnInit {

  /**
   * @ignore
   */
  public readonly pageData$ = this.route.data.pipe(
    map(data => ({
      i18n: this.i18n,
      title: this.title,
      image: this.image,
      actionLink: this.actionLink,
      CONTENT: this.CONTENT,
      ACTION_TEXT: this.ACTION_TEXT,
      ...data,
    })),
    tap(() =>
      this.metaService.changePageMetas({
        title: this.title,
        description: this.CONTENT,
        image: this.image.startsWith('http')
          ? this.image
          : location.origin + this.image
      })
    )
  );

  /**
   * Enable localization.
   */
  i18n = false;

  /**
   * Page title
   */
  title = 'Oops!';

  /**
   * Page image
   */
  image = '/assets/images/404.png';

  /**
   * Page action link
   */
  actionLink = [''];

  /**
   * Page content. For i18n: `NGUIX_OOPS.CONTENT`
   */
  CONTENT = 'Page not found!';

  /**
   * Page action text. For i18n: `NGUIX_OOPS.ACTION_TEXT`
   */
  ACTION_TEXT = 'Go home';

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
}
