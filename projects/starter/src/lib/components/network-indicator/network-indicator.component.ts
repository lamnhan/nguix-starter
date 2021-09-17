import { Component, OnInit, Input } from '@angular/core';

import { NetworkService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-network-indicator',
  templateUrl: './network-indicator.component.html',
  styleUrls: ['./network-indicator.component.scss']
})
export class NetworkIndicatorComponent implements OnInit {
  
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Icon url
   */
  @Input() icon = '/assets/images/offline.svg';

  /**
   * Input() Diplay text. For i18n: `NGUIX_NETWORK_INDICATOR.OFFLINE_TEXT`
   */
  @Input() OFFLINE_TEXT = 'You are offline!';

  constructor(
    /**
     * Inject() Requires the [NetworkService](https://ngx-useful.lamnhan.com/service/network)
     */
    public readonly networkService: NetworkService,
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
