import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonPostsComponent } from './skeleton-posts.component';

const routes: Routes = [{ path: '', component: SkeletonPostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkeletonPostsRoutingModule { }
