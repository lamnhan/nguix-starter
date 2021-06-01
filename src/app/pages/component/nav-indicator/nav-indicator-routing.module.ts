import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavIndicatorComponent } from './nav-indicator.component';

const routes: Routes = [{ path: '', component: NavIndicatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavIndicatorRoutingModule { }
