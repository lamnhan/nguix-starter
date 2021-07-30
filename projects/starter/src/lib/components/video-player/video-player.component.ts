import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nguix-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  /**
   * Input() The video source
   */
  @Input() src!: string;

  /**
   * @ignore
   */
  isYoutube = false;

  /**
   * @ignore
   */
  youtubeId = '';

  /**
   * @ignore
   */
  youtubePlayer?: YT.Player;

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  ngOnChanges(): void {
    this.isYoutube = this.src.indexOf('www.youtube.com') > -1;
    if (this.isYoutube) {
      this.youtubeId = this.src.split('watch?v=')[1];
    }
  }

}
