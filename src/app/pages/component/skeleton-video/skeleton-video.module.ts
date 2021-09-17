import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSkeletonVideoComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { SkeletonVideoRoutingModule } from './skeleton-video-routing.module';
import { SkeletonVideoComponent } from './skeleton-video.component';


@NgModule({
  declarations: [
    SkeletonVideoComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixSkeletonVideoComponentModule,
    SkeletonVideoRoutingModule
  ]
})
export class SkeletonVideoPageModule { }
