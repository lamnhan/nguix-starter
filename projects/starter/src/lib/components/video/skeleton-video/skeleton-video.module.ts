import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonVideoComponent } from './skeleton-video.component';

@NgModule({
  declarations: [SkeletonVideoComponent],
  imports: [
    CommonModule,
  ],
  exports: [SkeletonVideoComponent]
})
export class NguixSkeletonVideoComponentModule {}
