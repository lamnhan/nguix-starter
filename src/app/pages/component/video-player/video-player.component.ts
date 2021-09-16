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
      src: 'https://firebasestorage.googleapis.com/v0/b/lam-nhan-example.appspot.com/o/app-content%2Fuploads%2F2021%2F07%2Fvideo.mp4?alt=media&token=4ccd30c7-eed5-49c2-8f6e-74e677cc44c4',
    }
  };

  constructor(public readonly data: DataService) {}

  ngOnInit(): void {}

}
