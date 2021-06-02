import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
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
  exports: [Header2ndComponent]
})
export class NguixHeader2ndComponentModule { }
