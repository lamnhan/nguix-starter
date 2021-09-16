import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonVideosComponent } from './skeleton-videos.component';

const routes: Routes = [{ path: '', component: SkeletonVideosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkeletonVideosRoutingModule { }
