import { Component, OnInit } from '@angular/core';
import { PwaService } from '@lamnhan/ngx-useful';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pwa-box-page',
  templateUrl: './pwa-box.component.html',
  styleUrls: ['./pwa-box.component.scss']
})
export class PwaBoxComponent implements OnInit {

  constructor(
    public readonly pwa: PwaService,
    public readonly data: DataService
  ) { }

  ngOnInit(): void {
  }

}
