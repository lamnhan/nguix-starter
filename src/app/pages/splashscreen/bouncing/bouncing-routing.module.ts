import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BouncingComponent } from './bouncing.component';

const routes: Routes = [{ path: '', component: BouncingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BouncingRoutingModule { }
