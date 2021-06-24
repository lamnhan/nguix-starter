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
      content: this.content,
      actionLink: this.actionLink,
      actionText: this.actionText,
      ...data,
    })),
    tap(() =>
      this.metaService.changePageMetas({
        title: this.title,
        description: this.content,
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
   * Page content. For i18n, `NGUIX_OOPS.CONTENT`: Page not found
   */
  content = 'Page not found!';

  /**
   * Page action link
   */
  actionLink = [''];

  /**
   * Page action text. For i18n, `NGUIX_OOPS.ACTION_TEXT`: Go home
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
  ngOnInit(): void {}
}
