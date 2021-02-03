import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss']
})
export class OopsComponent implements OnInit {
  @Input() image = 'https://img.icons8.com/color/96/000000/broken-link.png';
  @Input() content = 'Page not found!';
  @Input() actionLink: NavItem = {
    text: 'Go home',
    routerLink: ['/'],
  };

  constructor() {}

  ngOnInit(): void {}
}
