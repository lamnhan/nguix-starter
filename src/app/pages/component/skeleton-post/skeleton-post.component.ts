import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-skeleton-post',
  templateUrl: './skeleton-post.component.html',
  styleUrls: ['./skeleton-post.component.scss']
})
export class SkeletonPostComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
