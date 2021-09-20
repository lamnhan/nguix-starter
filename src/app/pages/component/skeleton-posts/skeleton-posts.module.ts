import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixSkeletonPostsComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { SkeletonPostsRoutingModule } from './skeleton-posts-routing.module';
import { SkeletonPostsComponent } from './skeleton-posts.component';


@NgModule({
  declarations: [
    SkeletonPostsComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixSkeletonPostsComponentModule,
    SkeletonPostsRoutingModule
  ]
})
export class SkeletonPostsPageModule { }
