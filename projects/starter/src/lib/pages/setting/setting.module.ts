import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingPage } from './setting.component';


@NgModule({
  declarations: [SettingPage],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class NguixSettingPageModule { }
