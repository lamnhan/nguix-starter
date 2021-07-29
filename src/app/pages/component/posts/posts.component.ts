import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {}

}
