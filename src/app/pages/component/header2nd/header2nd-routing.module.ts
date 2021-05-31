import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header2ndComponent } from './header2nd.component';

const routes: Routes = [{ path: '', component: Header2ndComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Header2ndRoutingModule { }
