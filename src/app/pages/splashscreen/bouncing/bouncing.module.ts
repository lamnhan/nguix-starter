import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { SplashbodyComponentModule } from '../../../components/splashbody/splashbody.module';

import { BouncingRoutingModule } from './bouncing-routing.module';
import { BouncingComponent } from './bouncing.component';


@NgModule({
  declarations: [
    BouncingComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    SplashbodyComponentModule,
    BouncingRoutingModule
  ]
})
export class BouncingPageModule { }
