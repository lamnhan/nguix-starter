import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosDataPipeModule } from '@lamnhan/ngx-schemata';
import { NguixVideosComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';


@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixVideosComponentModule,
    VideosDataPipeModule,
    VideosRoutingModule
  ]
})
export class VideosPageModule { }
