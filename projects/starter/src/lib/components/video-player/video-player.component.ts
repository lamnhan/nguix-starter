import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'nguix-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  /**
   * Input() The video source
   */
  @Input() srcs!: Record<string, {name: string, src: string}>;

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
    const srcNames = Object.keys(this.srcs);
    this.isYoutube = srcNames.indexOf('youtube') !== -1;
    if (this.isYoutube) {
      this.youtubeId = this.srcs['youtube'].src
        .split('watch?v=')[1]
        .split('&')[0];
    }
  }

}
