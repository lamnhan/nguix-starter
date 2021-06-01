import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthPopupPage } from './oauth-popup.component';

const routes: Routes = [{ path: '', component: OauthPopupPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OauthPopupRoutingModule {}
