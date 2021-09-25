import { Component, OnInit, Input, Output } from '@angular/core';
import { Post } from '@lamnhan/schemata';

type PostsLayouts = 'thumbnail' | 'card' | 'hybrid';

@Component({
  selector: 'nguix-posts',
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

  /**
   * Input() Author url segment
   */
  @Input() authorUrlSegment?: string;

  /**
   * Input() Category url segment
   */
  @Input() categoryUrlSegment?: string;

  /**
   * Input() Minute to read text. For i18n: `NGUIX_POSTS.MIN_READ`
   */
  @Input() MIN_READ = 'min read';

  /**
   * Input() Read more text. For i18n: `NGUIX_POSTS.READ_MORE`
   */
  @Input() READ_MORE = 'Read more';

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

}
