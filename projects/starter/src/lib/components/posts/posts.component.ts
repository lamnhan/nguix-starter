import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from '@lamnhan/schemata';

export type PostsLayouts = 'thumbnail' | 'card';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Listing layout
   */
  @Input() layout: PostsLayouts = 'thumbnail';
  
  /**
   * Input() List of posts
   */
  @Input() posts!: Post[];

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

}
