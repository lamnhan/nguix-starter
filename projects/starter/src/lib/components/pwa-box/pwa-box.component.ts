import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {PwaService} from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-pwa-box',
  templateUrl: './pwa-box.component.html',
  styleUrls: ['./pwa-box.component.scss']
})
export class PwaBoxComponent implements OnInit {

  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() App icon url
   */
  @Input() icon = '/assets/images/logo.svg';

  /**
   * Input() Box title. For i18n: `NGUIX_PWA_BOX.TITLE`
   */
  @Input() TITLE = 'Install app?';
  
  /**
   * Input() App name. For i18n: `NGUIX_PWA_BOX.NAME`
   */
  @Input() NAME = 'Install now';
  
  /**
   * Input() Description text. For i18n: `NGUIX_PWA_BOX.TAGLINE`
   */
  @Input() TAGLINE = 'Add app to your home screen';

  /**
   * Output() Action when clicked
   */
  @Output() action: EventEmitter<void> = new EventEmitter();

  /**
   * Output() Dismiss the box
   */
  @Output() dismiss: EventEmitter<void> = new EventEmitter();

  constructor(
    /**
     * Inject() Requires the [PwaService](https://ngx-useful.lamnhan.com/service/pwa)
     */
    public readonly pwaService: PwaService,
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
