import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonPostComponent } from './skeleton-post.component';

@NgModule({
  declarations: [SkeletonPostComponent],
  imports: [
    CommonModule,
  ],
  exports: [SkeletonPostComponent]
})
export class NguixSkeletonPostComponentModule {}
