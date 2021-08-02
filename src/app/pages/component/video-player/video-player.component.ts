import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-video-player-page',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  srcs = {
    youtube: {
      name: 'youtube',
      src: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    }
  };

  constructor(public readonly data: DataService) {}

  ngOnInit(): void {}

}
