import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthPopupComponent } from './oauth-popup.component';

const routes: Routes = [{ path: '', component: OauthPopupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OauthPopupRoutingModule { }
