import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Stick the header at the top
   */
  @Input() fixed = false;

  /**
   * Input() Brand logo
   */
  @Input() logo = '/assets/images/logo.svg';

  /**
   * Input() Brand name. For i18n: `NGUIX_HEADER.NAME` = App
   */
  @Input() name = 'App';

  /**
   * Input() Menu items
   */
  @Input() menuItems: MenuItem[] = [];

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
