import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-still',
  templateUrl: './still.component.html',
  styleUrls: ['./still.component.scss']
})
export class StillComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
