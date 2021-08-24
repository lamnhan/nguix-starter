import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Footer links
   */
  @Input() menuItems: MenuItem[] = [];

  /**
   * Input() Footer text. For i18n: `NGUIX_FOOTER.TEXT`
   */
  @Input() TEXT = 'Powered by <a href="https://nguix-starter.lamnhan.com" target="_blank">@lamnhan/nguix-starter</a>';

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
