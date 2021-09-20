import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '@lamnhan/schemata';
import { NavService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() The post
   */
  @Input() video!: Video;
  
  /**
   * Input() When content is ready
   */
   @Output() contentReady = new EventEmitter<HTMLElement>();

  constructor(
    /**
    * Inject() Requires the [NavService](https://ngx-useful.lamnhan.com/service/nav)
    */
    public readonly navService: NavService
  ) { }

  /**
   * @ignore
   */
  ngOnInit(): void {}

}
