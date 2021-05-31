import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-header2nd',
  templateUrl: './header2nd.component.html',
  styleUrls: ['./header2nd.component.scss']
})
export class Header2ndComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
