import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguixPostsComponentModule } from '@lamnhan/nguix-starter';

import { PageComponentModule } from '../../../components/page/page.module';
import { CompbodyComponentModule } from '../../../components/compbody/compbody.module';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    CompbodyComponentModule,
    NguixPostsComponentModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
