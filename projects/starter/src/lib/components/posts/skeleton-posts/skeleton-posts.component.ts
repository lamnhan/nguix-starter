import { Component, OnInit, Input, Output } from '@angular/core';

type PostsLayouts = 'thumbnail' | 'card';

@Component({
  selector: 'nguix-skeleton-posts',
  templateUrl: './skeleton-posts.component.html',
  styleUrls: ['./skeleton-posts.component.scss']
})
export class SkeletonPostsComponent implements OnInit {

  /**
   * Input() Number of items
   */
  @Input() no = 3;

  /**
   * Input() Listing layout
   */
  @Input() layout: PostsLayouts = 'thumbnail';

  /**
   * @ignore
   */
  items: number[] = [];
 
  constructor() {}
 
  /**
   * @ignore
   */
  ngOnInit(): void {
    this.items = Array.from({length: this.no}, (_, i) => i);
  }

}
