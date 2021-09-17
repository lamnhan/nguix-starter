import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonVideoComponent } from './skeleton-video.component';

const routes: Routes = [{ path: '', component: SkeletonVideoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkeletonVideoRoutingModule { }
