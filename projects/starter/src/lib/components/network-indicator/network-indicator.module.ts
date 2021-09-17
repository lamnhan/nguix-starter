import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import {NetworkIndicatorComponent} from './network-indicator.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [NetworkIndicatorComponent],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [NetworkIndicatorComponent]
})
export class NguixNetworkIndicatorComponentModule {}
