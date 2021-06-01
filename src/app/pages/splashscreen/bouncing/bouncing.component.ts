import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-bouncing',
  templateUrl: './bouncing.component.html',
  styleUrls: ['./bouncing.component.scss']
})
export class BouncingComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
