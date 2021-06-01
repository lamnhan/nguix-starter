import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeartbeatComponent } from './heartbeat.component';

const routes: Routes = [{ path: '', component: HeartbeatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeartbeatRoutingModule { }
