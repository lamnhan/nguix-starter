import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-header2nd',
  templateUrl: './header2nd.component.html',
  styleUrls: ['./header2nd.component.scss']
})
export class Header2ndComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
