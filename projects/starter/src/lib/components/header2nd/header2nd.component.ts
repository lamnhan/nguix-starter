import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-header2nd',
  templateUrl: './header2nd.component.html',
  styleUrls: ['./header2nd.component.scss']
})
export class Header2ndComponent implements OnInit {
  
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Stick below primary header
   */
  @Input() fixed = false;

  /**
   * Input() Menu items
   */
  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
