import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-oauth-popup',
  templateUrl: './oauth-popup.component.html',
  styleUrls: ['./oauth-popup.component.scss']
})
export class OauthPopupComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
