import { Component, OnInit } from '@angular/core';
import { AuthService } from '@lamnhan/ngx-useful';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    public readonly data: DataService,
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

}
