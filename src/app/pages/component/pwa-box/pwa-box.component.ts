import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pwa-box-page',
  templateUrl: './pwa-box.component.html',
  styleUrls: ['./pwa-box.component.scss']
})
export class PwaBoxComponent implements OnInit {

  constructor(public readonly data: DataService) {}

  ngOnInit(): void {
  }

}
