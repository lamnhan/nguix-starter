import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentModule } from '../../../components/page/page.module';
import { PagebodyComponentModule } from '../../../components/pagebody/pagebody.module';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    PagebodyComponentModule,
    SettingRoutingModule
  ]
})
export class SettingPageModule {}
