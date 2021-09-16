import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonVideosComponent } from './skeleton-videos.component';

@NgModule({
  declarations: [SkeletonVideosComponent],
  imports: [
    CommonModule,
  ],
  exports: [SkeletonVideosComponent]
})
export class NguixSkeletonVideosComponentModule {}
