import { Component, OnInit, Input, Output } from '@angular/core';
import { Video } from '@lamnhan/schemata';

export type VideosLayouts = 'thumbnail' | 'card';

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
 
   constructor() {}
 
   /**
    * @ignore
    */
   ngOnInit(): void {}

}
