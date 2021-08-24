import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { OopsComponent } from './oops.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [OopsComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-oops', alias: 'NGUIX_OOPS' },
  }],
  exports: [OopsComponent],
})
export class NguixOopsComponentModule { }
