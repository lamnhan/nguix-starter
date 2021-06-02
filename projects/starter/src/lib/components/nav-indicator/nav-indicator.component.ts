import { Component, OnInit, Input } from '@angular/core';

import { NavService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-nav-indicator',
  templateUrl: './nav-indicator.component.html',
  styleUrls: ['./nav-indicator.component.scss']
})
export class NavIndicatorComponent implements OnInit {
  
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Icon url
   */
  @Input() icon = '/assets/images/logo.svg';

  /**
   * Input() Diplay text. For i18n, `NGUIX_NAV_INDICATOR.TEXT` = Please wait ...
   */
  @Input() text = 'Please wait ...';

  constructor(
    /**
     * Inject() Requires the [NavService](https://ngx-useful.lamnhan.com/service/nav)
     */
    public readonly navService: NavService,
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
