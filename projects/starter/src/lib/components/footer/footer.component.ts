import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '@lamnhan/ngx-useful';

export interface Copyright {
  holder: string;
  url: string;
  text: string;
}

@Component({
  selector: 'nguix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() mainLinks: NavItem[] = [
    {
      text: 'Home',
      routerLink: ['/']
    },
    {
      text: 'About',
      routerLink: ['/about']
    }
  ];

  @Input() socialLinks?: NavItem[];

  @Input() copyright: Copyright = {
    holder: 'Lam Nhan',
    url: 'https://lamnhan.com',
    text: 'All right reserved!',
  };

  constructor() {}

  ngOnInit(): void {}
}
