import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashscreensComponent } from './splashscreens.component';

const routes: Routes = [{ path: '', component: SplashscreensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplashscreensRoutingModule { }
