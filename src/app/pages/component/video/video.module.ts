import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDataPipeModule } from '@lamnhan/ngx-schemata';
import { NguixVideoComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';


@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixVideoComponentModule,
    VideoDataPipeModule,
    VideoRoutingModule
  ]
})
export class VideoPageModule { }
