import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-skeleton-videos-page',
  templateUrl: './skeleton-videos.component.html',
  styleUrls: ['./skeleton-videos.component.scss']
})
export class SkeletonVideosComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {}

}
