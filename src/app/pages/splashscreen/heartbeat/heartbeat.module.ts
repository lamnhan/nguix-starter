import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { SplashbodyComponentModule } from '../../../components/splashbody/splashbody.module';

import { HeartbeatRoutingModule } from './heartbeat-routing.module';
import { HeartbeatComponent } from './heartbeat.component';


@NgModule({
  declarations: [
    HeartbeatComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    SplashbodyComponentModule,
    HeartbeatRoutingModule
  ]
})
export class HeartbeatPageModule { }
