import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkIndicatorComponent } from './network-indicator.component';

const routes: Routes = [{ path: '', component: NetworkIndicatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkIndicatorRoutingModule { }
