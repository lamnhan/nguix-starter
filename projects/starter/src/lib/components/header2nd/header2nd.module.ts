import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterLinkDirectiveModule } from '@lamnhan/ngx-useful';

import { Header2ndComponent } from './header2nd.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [Header2ndComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterLinkDirectiveModule,
  ],
  providers: [{
    provide: TRANSLOCO_SCOPE,
    useValue: { scope: 'nguix-header2nd', alias: 'NGUIX_HEADER2ND' },
  }],
  exports: [Header2ndComponent]
})
export class NguixHeader2ndComponentModule { }
