import { Component, OnInit, Input, Output } from '@angular/core';
import { Video } from '@lamnhan/schemata';

type VideosLayouts = 'thumbnail' | 'card';

@Component({
  selector: 'nguix-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Listing layout
   */
  @Input() layout: VideosLayouts = 'thumbnail';
  
  /**
   * Input() List of videos
   */
  @Input() videos!: Video[];

  /**
   * Input() The view text. For i18n: `NGUIX_VIDEOS.VIEW_TEXT`
   */
  @Input() VIEW_TEXT = 'views';
 
   constructor() {}
 
   /**
    * @ignore
    */
   ngOnInit(): void {}

}
