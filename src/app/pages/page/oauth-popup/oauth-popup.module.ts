import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { PagebodyComponentModule } from '../../../components/pagebody/pagebody.module';

import { OauthPopupRoutingModule } from './oauth-popup-routing.module';
import { OauthPopupComponent } from './oauth-popup.component';


@NgModule({
  declarations: [
    OauthPopupComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    PagebodyComponentModule,
    OauthPopupRoutingModule
  ]
})
export class OauthPopupPageModule {}
