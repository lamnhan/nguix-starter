import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Tab items
   */
  @Input() menuItems: MenuItem[] = [];

  /**
   * Input() Stick the tabs to the foot
   */
  @Input() fixed = false;

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {}

}
