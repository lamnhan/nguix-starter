import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-skeleton-video-page',
  templateUrl: './skeleton-video.component.html',
  styleUrls: ['./skeleton-video.component.scss']
})
export class SkeletonVideoComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
