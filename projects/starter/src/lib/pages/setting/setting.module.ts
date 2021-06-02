import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingPage } from './setting.component';

@NgModule({
  declarations: [SettingPage],
  imports: [
    CommonModule,
    TranslocoModule,
    SettingRoutingModule
  ]
})
export class NguixSettingPageModule { }
