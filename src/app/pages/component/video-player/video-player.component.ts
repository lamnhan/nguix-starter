import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-video-player-page',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  srcs = {
    'video/mp4': {
      name: 'video/mp4',
      src: 'https://firebasestorage.googleapis.com/v0/b/lam-nhan-example-private.appspot.com/o/app-content%2Fuploads%2F2021%2F09%2Fvideo.mp4?alt=media&token=fec4468f-b083-4a6e-8e1b-0c85228dad17',
    }
  };

  constructor(public readonly data: DataService) {}

  ngOnInit(): void {}

}
