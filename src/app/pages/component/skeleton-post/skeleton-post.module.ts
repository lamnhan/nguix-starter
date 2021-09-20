import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSkeletonPostComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { SkeletonPostRoutingModule } from './skeleton-post-routing.module';
import { SkeletonPostComponent } from './skeleton-post.component';


@NgModule({
  declarations: [
    SkeletonPostComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixSkeletonPostComponentModule,
    SkeletonPostRoutingModule
  ]
})
export class SkeletonPostPageModule { }
