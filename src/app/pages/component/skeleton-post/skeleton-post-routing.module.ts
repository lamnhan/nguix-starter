import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonPostComponent } from './skeleton-post.component';

const routes: Routes = [{ path: '', component: SkeletonPostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkeletonPostRoutingModule { }
