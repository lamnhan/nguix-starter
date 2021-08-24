import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingPage } from './setting.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [SettingPage],
  imports: [
    CommonModule,
    TranslocoModule,
    SettingRoutingModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-setting-page', alias: 'NGUIX_SETTING_PAGE' },
  }],
})
export class NguixSettingPageModule { }
