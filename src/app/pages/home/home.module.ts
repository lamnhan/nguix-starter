import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import { NguixIconComponentModule, NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { PostsDataPipeModule } from '@lamnhan/ngx-schemata';
import { NguixPostsComponentModule } from '../../../../projects/starter/src/lib/components/posts/posts.module';
import { NguixSkeletonPostsComponentModule } from '../../../../projects/starter/src/lib/components/skeleton-posts/skeleton-posts.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterLinkDirectiveModule,
    NguixIconComponentModule,
    NguixContentComponentModule,
    HomeRoutingModule,
    PostsDataPipeModule,
    NguixPostsComponentModule,
    NguixSkeletonPostsComponentModule,
  ]
})
export class HomePageModule {}
