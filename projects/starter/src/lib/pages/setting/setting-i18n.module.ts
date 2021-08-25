import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { NguixSettingPageModule } from './setting.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    NguixSettingPageModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-setting-page', alias: 'NGUIX_SETTING_PAGE' },
  }],
})
export class NguixSettingI18nPageModule { }
