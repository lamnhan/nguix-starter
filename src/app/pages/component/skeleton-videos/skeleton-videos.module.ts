import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSkeletonVideosComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { SkeletonVideosRoutingModule } from './skeleton-videos-routing.module';
import { SkeletonVideosComponent } from './skeleton-videos.component';


@NgModule({
  declarations: [
    SkeletonVideosComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixSkeletonVideosComponentModule,
    SkeletonVideosRoutingModule
  ]
})
export class SkeletonVideosPageModule { }
