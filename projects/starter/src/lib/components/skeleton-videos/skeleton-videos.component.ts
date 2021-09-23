import { Component, OnInit, Input, Output } from '@angular/core';

type VideosLayouts = 'thumbnail' | 'card' | 'hybrid';

@Component({
  selector: 'nguix-skeleton-videos',
  templateUrl: './skeleton-videos.component.html',
  styleUrls: ['./skeleton-videos.component.scss']
})
export class SkeletonVideosComponent implements OnInit {

  /**
   * Input() Number of items
   */
  @Input() no = 3;

  /**
   * Input() Listing layout
   */
  @Input() layout: VideosLayouts = 'thumbnail';

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
