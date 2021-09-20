import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonPostsComponent } from './skeleton-posts.component';

@NgModule({
  declarations: [SkeletonPostsComponent],
  imports: [
    CommonModule,
  ],
  exports: [SkeletonPostsComponent]
})
export class NguixSkeletonPostsComponentModule {}
