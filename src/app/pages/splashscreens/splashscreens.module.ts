import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../components/page/page.module';

import { SplashscreensRoutingModule } from './splashscreens-routing.module';
import { SplashscreensComponent } from './splashscreens.component';


@NgModule({
  declarations: [
    SplashscreensComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    SplashscreensRoutingModule
  ]
})
export class SplashscreensPageModule {}
