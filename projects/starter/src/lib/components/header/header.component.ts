import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() logo = '/assets/images/logo.svg';
  @Input() title = 'App';
  @Input() menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
