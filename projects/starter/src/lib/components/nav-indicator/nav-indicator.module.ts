import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import {NavIndicatorComponent} from './nav-indicator.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [NavIndicatorComponent],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-nav-indicator', alias: 'NGUIX_NAV_INDICATOR' },
  }],
  exports: [NavIndicatorComponent]
})
export class NguixNavIndicatorComponentModule {}
