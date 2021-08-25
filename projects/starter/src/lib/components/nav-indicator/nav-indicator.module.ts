import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

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
  exports: [NavIndicatorComponent]
})
export class NguixNavIndicatorComponentModule {}
