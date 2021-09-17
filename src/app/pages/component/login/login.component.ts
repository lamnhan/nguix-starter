import { Component, OnInit } from '@angular/core';
import { AuthService } from '@lamnhan/ngx-useful';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public readonly data: DataService,
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

}
