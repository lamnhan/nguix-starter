import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
