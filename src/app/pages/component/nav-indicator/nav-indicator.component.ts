import { Component, OnInit } from '@angular/core';
import { NavService } from '@lamnhan/ngx-useful';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-nav-indicator-page',
  templateUrl: './nav-indicator.component.html',
  styleUrls: ['./nav-indicator.component.scss']
})
export class NavIndicatorComponent implements OnInit {

  constructor(
    public readonly nav: NavService,
    public readonly data: DataService,
  ) { }

  ngOnInit(): void {
  }

}
