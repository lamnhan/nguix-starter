import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() text = '&copy; 2021 by <a href="https://lamnhan.com" target="_blank">Lam Nhan</a>. Powered by <a href="https://nguix-starter.lamnhan.com" target="_blank">NGUIX Starter</a>';
  @Input() menuItems: MenuItem[] = [];

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
