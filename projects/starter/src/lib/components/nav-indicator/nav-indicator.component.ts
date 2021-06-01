import { Component, OnInit, Input } from '@angular/core';

import { NavService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-nav-indicator',
  templateUrl: './nav-indicator.component.html',
  styleUrls: ['./nav-indicator.component.scss']
})
export class NavIndicatorComponent implements OnInit {
  @Input() i18n = false;

  @Input() navService!: NavService;
  @Input() icon = '/assets/images/logo.svg';
  @Input() text = 'Please wait ...';

  constructor() {}

  ngOnInit(): void {}
}
