import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StillComponent } from './still.component';

const routes: Routes = [{ path: '', component: StillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StillRoutingModule { }
