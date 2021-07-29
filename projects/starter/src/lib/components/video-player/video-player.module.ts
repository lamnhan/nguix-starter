import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import { NgxYoutubePlayerModule  } from "ngx-youtube-player";

import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NgxYoutubePlayerModule,
    RouterLinkDirectiveModule,
  ],
  exports: [VideoPlayerComponent]
})
export class NguixVideoPlayerComponentModule {}
