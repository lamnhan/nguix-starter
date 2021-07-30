import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixVideoPlayerComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { VideoPlayerComponent } from './video-player.component';


@NgModule({
  declarations: [
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixVideoPlayerComponentModule,
    VideoPlayerRoutingModule
  ]
})
export class VideoPlayerPageModule { }
