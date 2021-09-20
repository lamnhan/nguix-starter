import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-skeleton-posts',
  templateUrl: './skeleton-posts.component.html',
  styleUrls: ['./skeleton-posts.component.scss']
})
export class SkeletonPostsComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
