import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';
import { NguixIconComponentModule, NguixContentComponentModule } from '@lamnhan/nguix-starter';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { NguixSkeletonPostsComponentModule } from '../../../../projects/starter/src/lib/components/posts/skeleton-posts/skeleton-posts.module';
// import { NguixSkeletonPostComponentModule } from '../../../../projects/starter/src/lib/components/post/skeleton-post/skeleton-post.module';

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
    // NguixSkeletonPostsComponentModule,
    // NguixSkeletonPostComponentModule
  ]
})
export class HomePageModule {}
